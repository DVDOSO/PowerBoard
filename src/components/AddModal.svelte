<script>
    export let showAddModal;
    export let addTask;

    let dialog;
    let taskName = '';
    let taskDescription = '';
    let importance = '';
    let urgency = '';
    let taskColor = '';

    $: if (dialog && showAddModal) {
        dialog.showModal();
    }

    async function handleSubmit() {
        if(!taskName || !taskDescription || !importance || !urgency || !taskColor) {
            alert('Please fill out all fields');
            return;
        }
        try{
            addTask(taskName, taskDescription, importance, urgency, taskColor);
            taskName = taskDescription = importance = urgency = taskColor = '';
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
	<div on:click|stopPropagation>
        <!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => dialog.close()}>X</button>
		<h2 class='title'>Add Task</h2>
        <input bind:value={taskName} type='text' placeholder='Task Name'/>
        <input bind:value={taskDescription} type='text' placeholder='Task Description'/>
        <input bind:value={importance} type='text' placeholder='Importance'/>
        <input bind:value={urgency} type='text' placeholder='Urgency'/>
        <input bind:value={taskColor} type='text' placeholder='Task Color'/>
        <div class='bottom'><button class='modalButton' on:click={handleSubmit}>Add Task</button></div>
	</div>
</dialog>

<style>
    .title {
        margin-bottom: 1vh;
        font-family: 'Mulish', sans-serif;
    }
    input {
        margin: 0.5vh;
        padding: 0.5vh;
    }
    dialog {
        max-width: 60vh;
        border-radius: 1em;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 0;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -15vh;
        margin-left: -30vh;
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0.8);
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
			transform: scale(0.95);
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
		display: block;
        padding: 0.6vh;
        position: fixed;

        /* literally brute force trial and errored lol */
        left: 62.5vw;
        top: 37vh;
	}
    .bottom{
        display: flex;
        justify-content: center;
    }
    .modalButton {
        position: static;
        margin: 1vh;
        padding: 1vh;
        
    }
</style>