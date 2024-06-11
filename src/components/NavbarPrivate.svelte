<script>
    import { goto } from '$app/navigation';
    import { authHandlers, authStore } from '../stores/authStore.js';

    async function routeHome() {
        goto('/')
    }
    

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">

<div class='containerNav'>
    <ul>
        <li><button on:click={routeHome}>Home</button></li>
        <div class='auth'>
            <li><button on:click={authHandlers.logout}>Log Out</button></li>
        </div>
    </ul>
</div>

<style>
    .containerNav {
        padding: 10px;
        position: fixed;
        top: 0;
        width: 100%;
        height: 7vh;
        background-color:rgba(0, 0, 0, 0.217);
    }
    ul, li {
        display: inline;
    }
    button {
        font-family: "Mulish", sans-serif;
        background-color: transparent;
        border: transparent;
        color: rgb(255, 255, 255);
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
        color: rgb(0, 22, 135);
    }
    .auth {
        float: right;
        display: inline;
    }
</style>
