<!--Not logged in main page-->

<script>
	import NavbarGuest from '../components/NavbarGuest.svelte';
    import { goto } from '$app/navigation';
    import { authStore } from '../stores/authStore';

    async function routeSignup() {
        if($authStore.currentUser !== null) {
            goto('/dashboard')
        }
        else {
            goto('/signup')
        }
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
<NavbarGuest/>

<div class='webpage'>
    <div class='containerMain'>
        <h1 class='title'>
            PowerBoard
        </h1>
        <button class='start' on:click={routeSignup}>Get Started!</button>
    </div>
</div>


<style>
    .webpage {
        height: 100vh;
        overflow: hidden;
        display: inline;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #23a6d5, #e73c7e, #ee7752);
        background-size: 400% 400%;
        animation: gradient 30s infinite ease;
    }
    button {
        border-color: rgb(154, 181, 255);
        background-color: transparent;
        border: black solid 1px;
        color: black;
        padding: 0.5%;
        list-style-type: none;
        font-size: 100%;
        cursor: pointer;
        border-radius: 5px;
        transition-duration: 0.4s;
        animation: fadeIn ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    button:hover {
        background-color: rgb(255, 255, 255);
        color: rgb(85, 85, 85);
        box-shadow: 0 0 3vh rgba(255, 255, 255, .5);
    }
    .containerMain {
        text-align: center;
        margin: 0;
        padding: 10px;
        width: 100%;
        height: 100vh;
    }
    .title {
        margin-top: 37vh;
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-size: 10vh;
        font-style: normal;
        animation: fadeIn ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        color: white;
    }
    .start{
        margin-top: 5vh;
        display: inline_block;
        justify-content: center;
        font-family: "Mulish", sans-serif;
        color: white;
        border-color: white;
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>