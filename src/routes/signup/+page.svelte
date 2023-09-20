<script>
    import NavbarGuest from '../../components/NavbarGuest.svelte';
    import { authHandlers, authStore } from '../../stores/authStore.js';

    let email = '';
    let password = '';
    let confirmPassword = '';

    async function handleSubmit() {
        if(!email || !password || !confirmPassword) {
            alert("Please fill out all fields");
            return;
        }
        if(password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        else {
            try {
                await authHandlers.signup(email, password);
            }
            catch(err) {
                alert(err);
            }
        }
    }
</script>

<NavbarGuest/>

<div class='webpage'>
    <div class='containerMain'>
        <h1 class='title'>
            Sign Up
        </h1>
        <form>
            <label>
                <input bind:value={email} type="email" placeholder="Email">
            </label>
            <label>
                <input bind:value={password} type="password" placeholder="Password">
            </label>
            <label>
                <input bind:value={confirmPassword} type="password" placeholder="Confirm Password">
            </label>
            <button class='submitButton' on:click={handleSubmit}>Create Account</button>
        </form>
        <p>Already have an account?</p>
        <a href="/login">Log In</a>
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
</style>