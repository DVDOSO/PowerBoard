<script>
    import { dbStore, dbHandlers } from '../stores/dbStore.js';
    import { authStore } from '../stores/authStore.js';
    import { database } from '../lib/firebase/firebase.client';
    import { getDatabase, ref, set, onValue, push, remove, get, update } from "firebase/database";
    import { onMount } from 'svelte';
    import AddModal from './AddModal.svelte';

    let showAddModal = false;

    function addTask(taskName, taskDescription, importance, urgency, taskColor) {
        dbHandlers.addTask($authStore.currentUser.uid, taskName, taskDescription, importance, urgency, taskColor, false, false);
        updateTable();
    }

    function deleteTask(taskId) {
        dbHandlers.removeTask($authStore.currentUser.uid, taskId);
        updateTable();
    }

    function updateTable(){
        let taskList = document.getElementsByClassName('taskList');
        let table1 = document.getElementsByClassName('taskTable');
        table1[0].innerHTML = '';
        const reference = ref(database, 'users/' + $authStore.currentUser.uid + '/tasks');
        onValue(reference, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let trow = document.createElement('tr');
                let tdata = document.createElement('td');
                tdata.innerHTML = '<p class="taskText">' + childSnapshot.val().task + '</p><div class="taskButtons"><button class="buttons" on:click={editTask}>Edit</button>'
                    +'<button class="delButtons" id="'+ childSnapshot.key +'">Remove</button></div>';
                trow.appendChild(tdata);
                table1[0].appendChild(trow);
            });
        });
        let style = document.createElement('style');
        style.innerHTML = 'table, td {width: 100%; border: rgb(172, 172, 172) solid 1px;}' 
        + 'table {border-collapse: collapse;}'
        + 'td {padding: 1vh; height: 6vh; display: flex; align-items: center; background-color: rgba(255, 255, 255, 0.459);}'
        + '.taskText {display: inline;}'
        + '.taskButtons {display: inline; margin-left:auto;}'
        + '.buttons {padding: 0.5vh; margin: 0.5vh;}'
        + '.delButtons {padding: 0.5vh; margin: 0.5vh;}';
        taskList[0].appendChild(style);

        let deleteButtons = document.getElementsByClassName('delButtons');
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener('click', () => {
                deleteTask(deleteButtons[i].id);
            });
        }
    }
    onMount(() => {
        updateTable();
    });
</script>

<div class='containerMain'>
    <h1>Tasks</h1>
    <div class='taskList'>
        <table class='taskTable'>
        </table>
        <button class='addTask' on:click={() => (showAddModal = true)}>Add Task</button>
        <AddModal bind:showAddModal {addTask}>
        </AddModal>
    </div>
</div>

<style>
    .containerMain {
        padding-top: 6vh;
        background-color: rgb(177, 252, 181);
        text-align: center;
        height: 78vh;
    }
    .taskList {
        margin-top: 2vh;
        background-color: rgba(255, 255, 255, 0.452);
        width: 75%;
        display: inline-block;
        border-radius: 5px;
        height: 50vh;
        border: 1px black solid;
        overflow: hidden;
        overflow-y: scroll;
        position: relative;
    }
    .addTask {
        position: sticky;
        float: right;
        padding: 1vh;
        margin: 1vh;
        bottom: 1vh;
        right: 1vh;
    }
</style>