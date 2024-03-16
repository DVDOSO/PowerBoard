<script>
    import { dbStore, dbHandlers, dataStore } from '../stores/dbStore.js';
    import { authStore } from '../stores/authStore.js';
    import { database } from '../lib/firebase/firebase.client';
    import { getDatabase, ref, set, onValue, push, remove, get, update } from "firebase/database";

    export let showEditModal;
    export let editTask;
    
    let dialog;
    let initialized = false;
    let currentName = '';
    let currentImp = '';
    let currentUrg = '';

    $: if (showEditModal && !initialized) {
        dialog.showModal();
        currentName = $dbStore.currentNameEdit;
        currentImp = $dbStore.currentImpEdit;
        currentUrg = $dbStore.currentUrgEdit;
        initialized = true;
    }
    $: if (!showEditModal) {
        initialized = false;
    }

    async function handleSubmit() {
        if(!$dbStore.currentNameEdit || !$dbStore.currentDescEdit || !$dbStore.currentImpEdit || !$dbStore.currentUrgEdit || !$dbStore.currentColEdit) {
            alert('Please fill out all fields');
            return;
        }
        try{
            await dbHandlers.getTasks($authStore.currentUser.uid);
            for(let task in $dataStore.tasks) {
                if($dataStore.tasks[task].task == $dbStore.currentNameEdit && $dataStore.tasks[task].task != currentName) {
                    alert('Please do not change the task name to an existing task');
                    return;
                }
                // console.log($dbStore.currentImpEdit, $dbStore.currentUrgEdit, currentImp, currentUrg);
                // console.log($dataStore.tasks[task].task, $dataStore.tasks[task].importance, $dataStore.tasks[task].urgency);
                if(($dataStore.tasks[task].importance == $dbStore.currentImpEdit && $dataStore.tasks[task].urgency == $dbStore.currentUrgEdit) 
                && !($dataStore.tasks[task].importance == currentImp && $dataStore.tasks[task].urgency == currentUrg)) {
                    alert('Please do not change the position of the task to an existing position');
                    return;
                }
            }
            await editTask(dbStore.currentEdit, $dbStore.currentNameEdit, $dbStore.currentDescEdit, $dbStore.currentImpEdit, $dbStore.currentUrgEdit, $dbStore.currentColEdit);
            dialog.close();
        }
        catch(err) {
            alert(err);
        }
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showEditModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class='content' on:click|stopPropagation>
        <!-- svelte-ignore a11y-autofocus -->
		<button class='exit' autofocus on:click={() => dialog.close()}>X</button>
		<div id='center'><h2 class='title'>Edit Task</h2></div>
        <input class='task' bind:value={$dbStore.currentNameEdit} type='text' placeholder='Task Name'/>
        <textarea class='desc' bind:value={$dbStore.currentDescEdit} type='text' placeholder='Task Description'/>
        <div class='imp'>
            <p class='head'>Importance: {$dbStore.currentImpEdit}</p>
            <input class='slider' bind:value={$dbStore.currentImpEdit} type='range' min='1' max='9' />
        </div>
        <div class='urg'>
            <p class='head'>Urgency: {$dbStore.currentUrgEdit}</p>
            <input class='slider' bind:value={$dbStore.currentUrgEdit} type='range' min='1' max='9' />
        </div>
        <div class='col'>
            <p class='colorhead'>Colour:</p>
            <input class='picker' bind:value={$dbStore.currentColEdit} type='color' />
        </div>
        <div class='bottom'><button class='modalButton' on:click={handleSubmit}>Make Changes</button></div>
	</div>
</dialog>

<style>
    .title {
        margin-bottom: 1vh;
        font-family: 'Mulish', sans-serif;
        font-size: 3vmin;
    }
    input {
        margin: 0.5vh;
        padding: 0.5vh;
    }
    dialog {
        width: 34.7vw;
        height: 50vh;
        border-radius: 1em;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 0;
        position: fixed;
        top: 25%;
        left: 33%;
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0.8);
        text-align: left;
    }
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.228);
	}
	dialog > div {
        padding: 4vh;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
        padding: 0.6vh;
        position: fixed;
	}
    .content{
        height: 50vh;
        width: 34.7vw;
    }
    .bottom{
        position: absolute;
        justify-content: center;
        bottom: 3%;
        left: 41%;
    }
    .modalButton {
        position: static;
        margin: 1vh;
        padding: 1vh;
        font-family: 'Mulish', sans-serif;
        border: none;
        border-radius: 5%;
        background: linear-gradient(-45deg, #e73c7e, #23a6d5);
        color: white;
        font-size: 2vmin;
        box-shadow: 0 0 1vh 0 rgba(0,0,0,0.7);
        transition-duration: 0.4s;
        cursor: pointer;
    }
    .modalButton:hover{
        box-shadow: 0 0 2vh 0 rgba(0,0,0,0.9);
        background: linear-gradient(-45deg, #ff2377, #11befc);
    }
    .modalButton:active{
        box-shadow: 0 0 2vh 0 rgba(0,0,0,0.9);
        background: linear-gradient(-45deg, #a9164e, #0c82ad);
    }
    .exit {
        position: absolute;
        right: 5%;
        top: 5%;
        border-radius: 50%;
        border: 0;
        background: none;
        color: black;
        width: 3vmin;
        height: 3.2vmin;
        transition-duration: 0.4s;
        font-weight: 800;
        cursor: pointer;
    }
    .exit:hover {
        background: rgb(255, 113, 113);
    }
    .task {
        width: 30%;
        border: none;
        border-bottom: 3px dashed rgb(191, 191, 191);
        background: none;
        transition: 0.4s ease;
        font-family: 'Mulish', sans-serif;
        font-size: 2.5vmin;
        position: absolute;
    }
    .task:focus {
        outline: none;
        border-bottom: 3px solid rgb(50,50,50);
    }
    .desc {
        transition: 0.4s ease;
        font-family: 'Mulish', sans-serif;
        font-size: 1.5vmin;
        position: absolute;
        top: 30%;
        width: 30.1vw;
        height: 40%;
        padding: 2%;
        resize: none;
        border: 3px solid rgb(201, 201, 201);
    }
    .desc:focus {
        outline: none;
        border: 3px solid rgb(50,50,50);
    }
    .imp {
        position: absolute;
        top: 73%;
        left: 10%;
        text-align: center;
    }
    .urg {
        position: absolute;
        top: 73%;
        right: 10%;
        text-align: center;
    }
    .head {
        font-family: 'Mulish', sans-serif;
        font-size: 2vmin;
    }
    .slider {
        margin: 0.7vmax;
        -webkit-appearance: none;
        border-radius: 5px;
        background: #ffffff;
        outline: none;
        opacity: 0.7;
        transition: 0.2s;
        height: 1vh;
    }
    .slider::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 2vmin;
        height: 2vmin;
        border-radius: 50%;
        background: #21aeff;
        cursor: pointer;
    }
    .slider::-moz-range-thumb{
        width: 2vmin;
        height: 2vmin;
        border-radius: 50%;
        background: #21aeff;
        cursor: pointer;
    }
    .slider::-webkit-slider-thumb:hover{
        background: #0d8cf0;
    }
    .col {
        position: absolute;
        top: 19%;
        left: 77%;
        width: 7vw;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .colorhead {
        font-family: 'Mulish', sans-serif;
        font-size: 2vmin;
        display: inline;
    }
    .picker {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        cursor: pointer;
        background-color: transparent;
        width: 1.7vmax;
        height: 1.7vmax;
        float: right;
        display: inline;
    }
    .picker::-webkit-color-swatch-wrapper {
        padding: 0;
        margin: 0;
    }
    .picker::-webkit-color-swatch {
        border-radius: 50%;
    }
    .picker:hover {
        border: 1px solid black;
        border-radius: 50%;
    }
    #center {
        text-align: center;
    }
</style>