<script>
    import { goto } from '$app/navigation';
    import { authHandlers, authStore } from '../stores/authStore.js';
    async function routeHome() {
        goto('/')
        console.log("home")
    }
    async function routeSignup() {
        console.log($authStore.currentUser)
        if($authStore.currentUser !== null && $authStore.currentUser.emailVerified) {
            goto('/dashboard')
        }
        else {
            $authStore.currentUser = null;
            goto('/signup')
        }
    }
    async function routeLogin() {
        console.log($authStore.currentUser)
        if($authStore.currentUser !== null && $authStore.currentUser.emailVerified) {
            goto('/dashboard')
            console.log("already log in")
        }
        else {
            $authStore.currentUser = null;
            goto('/login')
            console.log("not log in")
        }
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">


<div class='containerNav'>
    <ul>
        <li><button on:click={routeHome}>Home</button></li>
        <div class='auth'>
            <li><button on:click={routeSignup}>Sign Up</button></li>
            <li><button on:click={routeLogin}>Log In</button></li>
        </div>
    </ul>
</div>

<style>
    .containerNav {
        padding: 10px;
        background-color:rgba(0, 0, 0, 0.217);
        position: fixed;
        top: 0;
        width: 100%;
        height: 7vh;
        z-index: 5;
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