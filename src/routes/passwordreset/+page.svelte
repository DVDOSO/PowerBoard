<script>
    import NavbarGuest from '../../components/NavbarGuest.svelte';
	import { auth } from '../../lib/firebase/firebase.client';
    import { authHandlers, authStore } from '../../stores/authStore.js';

    let email = '';

    async function handleSubmit() {
        //console.log(email, password);

        try {
            authHandlers.resetPassword(email);
        }
        catch(err) {
            alert(err);
        }
    }
</script>

<NavbarGuest/>

<div class='webpage'>
    <div class='containerMain'>
        <h1 class='title'>
            Forgot Password
        </h1>
        <form>
            <label>
                <input bind:value={email} type="email" placeholder="Email">
            </label>
            <button class='submitButton' on:click={handleSubmit}>Send Password Reset Email</button>
        </form>
        <p>Don't have an account?</p>
        <a href="/signup">Sign Up</a>
    </div>
</div>

<style>
    .webpage {
        height: 100vh;
        overflow: hidden;
    }
    .containerMain {
        text-align: center;
        margin: 0;
        padding: 10px;
        background-color: rgb(210, 246, 255);
        width: 100%;
        height: 300vh;
    }
    .title {
        font-size: 40px;
        margin-top: 30vh;
        margin-bottom: 3vh;
    }
    label {
        display: block;
        justify-content: center;
        margin: 1vh;
    }
    input {
        padding: 1vh;
        width: 15vw;
        
    }
    .submitButton {
        margin-top: 1vh;
        border-color: rgb(154, 181, 255);
        background-color: transparent;
        border: black solid 1px;
        color: black;
        padding: 10px;
        margin-right: 5px;
        margin-left: 5px;
        list-style-type: none;
        font-size: 15px;
        cursor: pointer;
        border-radius: 5px;
        transition-duration: 0.4s;
    }
    .submitButton:hover {
        background-color: rgb(154, 181, 255);
        color: white;
    }
    p {
        margin-top: 2vh;
        display: inline;
    }
    a {
        margin-top: 2vh;
        display: inline-block;
    }
    .forgotPassword {
        display:block;
        margin-top: 2vh;
    }
</style>