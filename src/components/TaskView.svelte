<script>
    import { dbStore, dbHandlers } from '../stores/dbStore.js';
    import { authStore } from '../stores/authStore.js';
    import { database } from '../lib/firebase/firebase.client';
    import { getDatabase, ref, set, onValue, push, remove, get, update } from "firebase/database";
    import { onMount } from 'svelte';
    import AddModal from './AddModal.svelte';
    import EditModal from './EditModal.svelte';

    let showAddModal = false;
    let showEditModal = false;

    onMount(() => {
        // Dummy task
        addTask('!!@@##', 'Dummy Task', '1', '1', 'red')

        // Remove dummy task
        const reference = ref(database, 'users/' + $authStore.currentUser.uid + '/tasks');
        onValue(reference, (snapshot) => {
            snapshot.forEach((childSnapshot) => {  
                if(childSnapshot.val().task == '!!@@##') {
                    deleteTask(childSnapshot.key);
                }
            });
        });

        updateTable();
    });

    function addButtonListeners() {
        let deleteButtons = document.getElementsByClassName('delButtons');
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener('click', () => {
                deleteTask(deleteButtons[i].id);
            });
        }
        let editButtons = document.getElementsByClassName('editButtons');
        for (let i = 0; i < editButtons.length; i++) {
            editButtons[i].addEventListener('click', () => {
                editModal(editButtons[i].id);
            });
        }
        // console.log(deleteButtons);
        // console.log(editButtons);
    }

    function addTask(taskName, taskDescription, importance, urgency, taskColor) {
        dbHandlers.addTask($authStore.currentUser.uid, taskName, taskDescription, importance, urgency, taskColor, false, false);
        updateTable();
    }

    function editModal(taskId) {
        dbStore.currentEdit = taskId;
        
        const reference = ref(database, 'users/' + $authStore.currentUser.uid + '/tasks/' + dbStore.currentEdit);
        onValue(reference, (snapshot) => {
            $dbStore.currentNameEdit = snapshot.val().task;
            $dbStore.currentDescEdit = snapshot.val().description;
            $dbStore.currentImpEdit = snapshot.val().importance;
            $dbStore.currentUrgEdit = snapshot.val().urgency;
            $dbStore.currentColEdit = snapshot.val().color;
        });
        showEditModal = true;
    }

    function editTask(taskId, taskName, taskDescription, importance, urgency, taskColor){
        console.log("editTask()");
        dbHandlers.editTask($authStore.currentUser.uid, taskId, taskName, taskDescription, importance, urgency, taskColor, false, false);
        updateTable();
    }

    function deleteTask(taskId) {
        dbHandlers.removeTask($authStore.currentUser.uid, taskId);
        updateTable();
    }

    function updateTable() {
        let taskList = document.getElementsByClassName('taskList');
        let table1 = document.getElementsByClassName('taskTable');
        table1[0].innerHTML = '';
        const reference = ref(database, 'users/' + $authStore.currentUser.uid + '/tasks');
        onValue(reference, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let trow = document.createElement('tr');
                let tdata = document.createElement('td');
                tdata.innerHTML = '<p class="taskText">' + childSnapshot.val().task + '</p><div class="taskButtons">'
                    +'<button class="editButtons" id="'+ childSnapshot.key +'">Edit</button>'
                    +'<button class="delButtons" id="'+ childSnapshot.key +'">Remove</button></div>';
                trow.appendChild(tdata);
                table1[0].appendChild(trow);

            });
        });
        let style = document.createElement('style');
        style.innerHTML = 'table, td {width: 100%; border-bottom: rgba(255,255,255,0.5) solid 1px;}' 
        + 'table {border-collapse: collapse;}'
        + 'td {padding: 1vh; height: 6vh; display: flex; align-items: center;}'
        + '.taskText {display: inline; font-family: "Mulish", sans-serif; font-size: 2.5vh; margin-right: 2vw; color: white;}'
        + '.taskButtons {display: inline; margin-left:auto;}'
        + '.editButtons {padding: 0.5vh; margin: 0.5vh; box-shadow: 0 0 1vh 0 rgba(0,0,0,0.7); font-family: "Mulish", sans-serif; font-size: 1.5vh; color: white; border-radius:25%; background: rgba(255, 221, 48, 0.5); border: none; transition-duration: 0.2s;}'
        + '.delButtons {padding: 0.5vh; margin: 0.5vh; box-shadow: 0 0 1vh 0 rgba(0,0,0,0.7);font-family: "Mulish", sans-serif; font-size: 1.5vh; color: white; border-radius:25%; background: rgba(255, 48, 48, 0.5); border: none; transition-duration: 0.2s;}'
        + '.editButtons:hover {box-shadow: 0 0 1vh 0 rgba(0,0,0,1); background: rgba(255, 221, 48, 0.8);}'
        + '.delButtons:hover {box-shadow: 0 0 1vh 0 rgba(0,0,0,1); background: rgba(255, 48, 48, 0.8);}';
        taskList[0].appendChild(style);

        addButtonListeners();
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">

<div class='containerMain'>
    <h1 class='title'>Tasks</h1>
    <button class='addTask' on:click={() => (showAddModal = true)}>+</button>
    <div class='taskList'>
        <table class='taskTable'>
        </table>
        <AddModal bind:showAddModal {addTask}/>
        <EditModal bind:showEditModal {editTask}/>
    </div>
</div>

<style>
    .containerMain {
        padding-top: 4vh;
        /* background-color: rgb(177, 252, 181); */
        text-align: center;
        height: 73vh;
    }
    .taskList {
        margin-top: 2vh;
        width: 75%;
        display: inline-block;
        border-radius: 5px;
        height: 50vh;
        overflow: hidden;
        overflow-y: auto;
        position: relative;
    }
    .addTask {
        position: absolute;
        margin-left: 10vw;
        margin-top: -4.2vh;
        z-index: 5;
        color: white;
        border-radius: 50%;
        width: 4.2vh;
        height: 4.2vh;
        background: linear-gradient(-45deg, #e73c7e, #23a6d5);
        border: none;
        font-size: 4vh;
        box-shadow: 0 0 1vh 0 rgba(0,0,0,0.7);
        transition-duration: 0.4s;
    }
    .addTask:hover {
        box-shadow: 0 0 1vh 0 rgba(0,0,0,1);
        background: linear-gradient(-45deg, #ee7752, #23d5ab);
    }
    .title{
        font-family: 'Mulish', sans-serif;
        color: white;
    }
    ::-webkit-scrollbar {
        width: 0.5vw;
    }
    
    ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.459);
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.8); 
    }
</style>