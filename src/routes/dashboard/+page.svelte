<script>
	import { authHandlers, authStore } from '../../stores/authStore.js';
    import NavbarPrivate from "../../components/NavbarPrivate.svelte";
    import Sidebar from "../../components/Sidebar.svelte";
	import Board from '../../components/Board.svelte';

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
        font-size: 60px;
        margin-top: 2vh;
        margin-left: 2vw;
    }
</style>