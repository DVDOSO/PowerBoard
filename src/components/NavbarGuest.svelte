<script>
    import { goto } from '$app/navigation';
    import { authHandlers, authStore } from '../stores/authStore.js';
    async function routeHome() {
        goto('/')
    }
    async function routeSignup() {
        if($authStore.currentUser !== null) {
            goto('/dashboard')
        }
        else {
            goto('/signup')
        }
    }
    async function routeLogin() {
        if($authStore.currentUser !== null) {
            goto('/dashboard')
        }
        else {
            goto('/login')
        }
    }
</script>

<div class='containerNav'>
    <ul>
        <li><button on:click={routeHome}>Home</button></li>
        <li><button>About</button></li>
        <div class='auth'>
            <li><button on:click={routeSignup}>Sign Up</button></li>
            <li><button on:click={routeLogin}>Log In</button></li>
        </div>
    </ul>
</div>

<style>
    .containerNav {
        padding: 10px;
        background-color:rgb(144, 233, 255);
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
        padding: 10px;
        margin-right: 5px;
        margin-left: 5px;
        list-style-type: none;
        font-size: 20px;
        cursor: pointer;
        border-radius: 5px;
        transition-duration: 0.4s;
    }
    button:hover {
        background-color: rgb(154, 181, 255);
        color: white;
    }
    .auth {
        float: right;
        display: inline;
    }
</style>