<script>
	import { authHandlers, authStore } from '../../stores/authStore.js';
    import NavbarPrivate from "../../components/NavbarPrivate.svelte";
    import Sidebar from "../../components/Sidebar.svelte";
	import Board from '../../components/Board.svelte';
	import TaskView from '../../components/TaskView.svelte';

    let email;
    authStore.subscribe((curr) => {
        email = curr?.currentUser?.email;
    })
</script>

{#if $authStore.currentUser !== null}
    <div class='webpage'>
        <NavbarPrivate/>
        <Sidebar/>
        <Board/>
        <div class='containerMain'>
            <h1 class='title'>
                Board Name
            </h1>
            <h2>{email}</h2>
            <div id='taskView'>
                <TaskView/>
            </div>
        </div>
    </div>
{:else}
    <div>
        Loading...
    </div>
{/if}

<style>
    .webpage {
        height: 100vh;
    }
    .containerMain {
        background-color: rgb(177, 252, 181);
        margin-left: 12vw;
        width: 44vw;
        margin-top: 7vh;
        height: 93vh;
        position: fixed;
    }
    .title {
        font-size: 3vw;
        margin-top: 2vh;
        margin-left: 2vw;
    }
    #taskView {
        padding-top: 2vh;
        padding-left: 2vw;
        padding-right: 2vw;
    }
    
    /* Temporary */
    h2 {
        margin-left: 2vw;
    }
</style>