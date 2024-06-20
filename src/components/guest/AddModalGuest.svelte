<script>
    import { guestHandlers, guestTasks } from "../../stores/guestStore";

    export let showAddModal;
    export let addTask;

    let dialog;
    let taskName = '';
    let taskDescription = '';
    let importance = '5';
    let urgency = '5';
    let taskColor = '#ff0000';

    $: if (dialog && showAddModal) {
        dialog.showModal();
    }

    async function handleSubmit() {
        if(!taskName || !taskDescription || !importance || !urgency || !taskColor) {
            alert('Please fill out all fields.');
            return;
        }
        try{
            for(let task in $guestTasks.tasks) {
                if($guestTasks.tasks[task].task == taskName) {
                    alert('Task already exists.');
                    return;
                }
                else if($guestTasks.tasks[task].importance == importance && $guestTasks.tasks[task].urgency == urgency) {
                    alert('Position on the board is already taken.');
                    return;
                }
            }
            await addTask(taskName, taskDescription, importance, urgency, taskColor);
            taskName = taskDescription = '';
            taskColor = '#ff0000';
            importance = urgency = '5';
            dialog.close();
        }
        catch(err) {
            alert(err);
        }
    }

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showAddModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class='content' on:click|stopPropagation>
        <!-- svelte-ignore a11y-autofocus -->
		<button class='exit' autofocus on:click={() => dialog.close()}>X</button>
		<div id='center'><h2 class='title'>Add Task</h2></div>
        <input class='task' bind:value={taskName} type='text' placeholder='Task Name'/>
        <textarea class='desc' bind:value={taskDescription} type='text' placeholder='Task Description'/>
        <div class='imp'>
            <p class='head'>Importance: {importance}</p>
            –
            <input class='slider' bind:value={importance} type='range' min='1' max='9' />
            +
        </div>
        <div class='urg'>
            <p class='head'>Urgency: {urgency}</p>
            –
            <input class='slider' bind:value={urgency} type='range' min='1' max='9' />
            +
        </div>
        <div class='col'>
            <p class='colorhead'>Colour:</p>
            <input class='picker' bind:value={taskColor} type='color' />
        </div>
        <div class='bottom'><button class='modalButton' on:click={handleSubmit}>Add Task</button></div>
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
        font-size: 1.5vmin;
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