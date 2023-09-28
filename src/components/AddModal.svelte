<script>
    export let showAddModal;

    let dialog;

    $: if (dialog && showAddModal) {
        dialog.showModal();
    }
</script>

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
		<h2>Add Task</h2>
		<div>
            <input type='text' placeholder='Task Name' id='taskName'>
            <input type='text' placeholder='Task Description' id='taskDescription'>
            <input type='text' placeholder='Importance' id='importance'>
            <input type='text' placeholder='Urgency' id='urgency'>
            <input type='text' placeholder='Task Color' id='taskColor'>
        </div>
        <slot name='addButton'/>
	</div>
</dialog>

<style>
    h2 {
        margin-bottom: 1vh;
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
    }
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.457);
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
</style>