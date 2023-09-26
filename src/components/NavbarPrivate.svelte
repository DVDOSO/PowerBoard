<script>
    import { goto } from '$app/navigation';
    import { authHandlers, authStore } from '../stores/authStore.js';
	import Sidebar from './Sidebar.svelte';

    let sidebar = false;

    async function routeHome() {
        goto('/')
    }
    

</script>

<div class='containerNav'>
    <ul>
        <li><button on:click={routeHome}>Home</button></li>
        <div class='auth'>
            <li><button>Settings</button></li>
            <li><button on:click={authHandlers.logout}>Log Out</button></li>
        </div>
    </ul>
</div>
{#if sidebar}
    <Sidebar/>
{/if}

<style>
    .containerNav {
        padding: 10px;
        background-color:rgb(92, 214, 104);
        position: fixed;
        top: 0;
        width: 100%;
        height: 7vh;
    }
    ul, li {
        display: inline;
    }
    button {
        background-color: transparent;
        border: black solid 1px;
        color: black;
        padding: 1vh;
        margin-right: 0.5vh;
        margin-left: 0.5vh;
        list-style-type: none;
        font-size: 2vh;
        cursor: pointer;
        border-radius: 5px;
        transition-duration: 0.4s;
    }
    button:hover {
        background-color: rgb(97, 190, 81);
        color: white;
    }
    .auth {
        float: right;
        display: inline;
    }
</style>
