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

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">

<title>PowerBoard</title>
<NavbarGuest/>

<div class='webpage'>
    <div class='box'></div>
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
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #23a6d5, #e73c7e, #ee7752);
        background-size: 400% 400%;
        animation: gradient 30s infinite ease;
    }
    .containerMain {
        text-align: center;
        margin: 0;
        padding: 10px;
        width: 100%;
    }
    .title {
        font-size: 4vmin;
        margin-top: 30vh;
        margin-bottom: 3vh;
        font-family: "Mulish", sans-serif;
        color: white;
    }
    .box{
        border: 2px dashed white;
        width: 30vw;
        height: 40vh;
        left: 35vw;
        top: 23vh;
        position: fixed;
        border-radius: 2vh;
        pointer-events: none;
    }
    label {
        display: block;
        justify-content: center;
        margin-top: 1vh;
        margin-bottom: 1vh;
    }
    input {
        padding: 1vh;
        width: 30vmin;
        border-radius: 5px;
        border: white solid 1px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        height: 4vmin;
    }
    input:focus {
        outline-color: rgb(0, 22, 135);
        outline-style: double;
        outline-width: 1px;
    }
    .submitButton {
        margin-top: 1vh;
        background-color: transparent;
        border: rgb(255, 255, 255) solid 1px;
        color: rgb(255, 255, 255);
        padding: 1vmin;
        list-style-type: none;
        font-size: 2vmin;
        cursor: pointer;
        border-radius: 5px;
        transition-duration: 0.4s;
        font-family: 'Mulish', sans-serif;
    }
    .submitButton:hover {
        background-color: rgb(255, 255, 255);
        color: rgb(85, 85, 85);
        box-shadow: 0 0 3vh rgba(255, 255, 255, .5);
    }
    p {
        margin-top: 2vh;
        display: inline;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;
        font-size: 1.6vmin;
    }
    a {
        margin-top: 2vh;
        display: inline-block;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-decoration: none;
        font-size: 1.6vmin;
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