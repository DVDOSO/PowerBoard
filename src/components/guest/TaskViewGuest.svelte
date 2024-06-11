<script>
    import { guestTasks, guestHandlers } from '../../stores/guestStore.js';
    import { onMount } from 'svelte';
    import AddModalGuest from './AddModalGuest.svelte';
    import EditModalGuest from './EditModalGuest.svelte';
	import { remove } from 'firebase/database';

    let showAddModal = false;
    let showEditModal = false;

    // onMount(() => {
    //     // Dummy task
    //     //addTask('!!@@##', 'Dummy Task', '1', '1', 'red')

    //     // Remove dummy task
    //     //removeTask('!!@@##', 'Dummy Task', '1', '1', 'red');

    //     updateTable();
    // });

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
    }

    function addTask(taskName, taskDescription, importance, urgency, taskColor) {
        guestHandlers.addTask(++$guestTasks.tempId, taskName, taskDescription, importance, urgency, taskColor);
        updateTable();
    }

    function editModal(taskId) {
        for(let task in $guestTasks.tasks){
            if($guestTasks.tasks[task].taskId == taskId){
                $guestTasks.currentIdEdit = taskId;
                $guestTasks.currentNameEdit = $guestTasks.tasks[task].task;
                $guestTasks.currentDescEdit = $guestTasks.tasks[task].description;
                $guestTasks.currentImpEdit = $guestTasks.tasks[task].importance;
                $guestTasks.currentUrgEdit = $guestTasks.tasks[task].urgency;
                $guestTasks.currentColEdit = $guestTasks.tasks[task].color;
            }
        }
        showEditModal = true;
    }

    function editTask(taskId, taskName, taskDescription, importance, urgency, taskColor){
        guestHandlers.editTask(taskId, taskName, taskDescription, importance, urgency, taskColor);
        updateTable();
    }

    function deleteTask(taskId) {
        guestHandlers.removeTask(taskId);
        updateTable();
    }

    function updateTable() {
        let taskList = document.getElementsByClassName('taskList');
        let table1 = document.getElementsByClassName('taskTable');
        table1[0].innerHTML = '';
        for(let task in $guestTasks.tasks){
            let trow = document.createElement('tr');
            let tdata = document.createElement('td');
            tdata.innerHTML = '<p class="taskText">' + $guestTasks.tasks[task].task + '</p><div class="taskButtons">'
                +'<button class="editButtons" id="'+ $guestTasks.tasks[task].taskId +'">Edit</button>'
                +'<button class="delButtons" id="'+ $guestTasks.tasks[task].taskId +'">Remove</button></div>';
            trow.appendChild(tdata);
            table1[0].appendChild(trow);
        }
        let style = document.createElement('style');
        style.innerHTML = 'table, td {width: 100%; border-bottom: rgba(255,255,255,0.5) solid 1px;}' 
        + 'table {border-collapse: collapse;}'
        + 'td {padding: 1vh; height: 6vh; display: flex; align-items: center;}'
        + '.taskText {display: inline; font-family: "Mulish", sans-serif; font-size: 1.1vmax; margin-right: 2vw; color: white;}'
        + '.taskButtons {display: inline; margin-left:auto;}'
        + '.editButtons {cursor: pointer; padding: 0.5vh; margin: 0.5vh; box-shadow: 0 0 1vh 0 rgba(0,0,0,0.7); font-family: "Mulish", sans-serif; font-size: 0.7vmax; color: white; border-radius:25%; background: rgba(230, 230, 230, 0.5); border: none; transition-duration: 0.2s;}'
        + '.delButtons {cursor: pointer; padding: 0.5vh; margin: 0.5vh; box-shadow: 0 0 1vh 0 rgba(0,0,0,0.7);font-family: "Mulish", sans-serif; font-size: 0.7vmax; color: white; border-radius:12%; background: rgba(255, 48, 48, 0.5); border: none; transition-duration: 0.2s;}'
        + '.editButtons:hover {box-shadow: 0 0 1vh 0 rgba(0,0,0,0.8); background: rgba(230, 230, 230, 0.7);}'
        + '.delButtons:hover {box-shadow: 0 0 1vh 0 rgba(0,0,0,0.8); background: rgba(255, 48, 48, 0.7);}';
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
        <AddModalGuest bind:showAddModal {addTask}/>
        <EditModalGuest bind:showEditModal {editTask}/>
    </div>
</div>

<style>
    .containerMain {
        padding-top: 4vh;
        height: 73vh;
    }
    .taskList {
        margin-top: 7vh;
        width: 75%;
        display: inline-block;
        border-radius: 5px;
        height: 50vh;
        overflow: hidden;
        overflow-y: auto;
        position: relative;
    }
    .title{
        font-family: 'Mulish', sans-serif;
        color: white;
        font-size: 3.5vmin;
        position: absolute;
        margin-left: 5vw;
    }
    .addTask {
        position: absolute;
        float: right;
        margin-left: 12vmin;
        margin-top: 0.3vh;
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
        box-shadow: 0 0 2vh 0 rgba(0,0,0,0.9);
        background: linear-gradient(-45deg, #ff2377, #11befc);
    }
    .addTask:active {
        box-shadow: 0 0 2vh 0 rgba(0,0,0,0.9);
        background: linear-gradient(-45deg, #a9164e, #0c82ad);
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
    button{
        cursor: pointer;
    }
</style>