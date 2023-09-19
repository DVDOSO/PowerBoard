<script>
	import { auth } from '../lib/firebase/firebase.client.js';
    import { authHandlers, authStore } from '../stores/authStore.js';
    let register = true;
    let email = '';
    let password = '';
    let confirmPassword = '';

    async function handleSubmit () {
        if(!email || !password || (register && !confirmPassword)) {
            alert("Please fill out all fields");
            return;
        }
        if(register && password === confirmPassword) {
            try{
                await authHandlers.signup(email, password);
            }
            catch(err) {
                console.log(err);
                if(err.code === 'auth/email-already-in-use') {
                    alert('Email already in use');
                }
                else if(err.code === 'auth/weak-password') {
                    alert('Password must be at least 6 characters');
                }
                else if(err.code === 'auth/invalid-email') {
                    alert('Invalid email');
                }
                else {
                    alert(err);
                }
            }
        }
        else{
            try{
                await authHandlers.login(email, password);
            }
            catch(err) {
                console.log(err);
                if(err.code === 'auth/user-not-found') {
                    alert('User not found');
                }
                else if(err.code === 'auth/invalid-login-credentials') {
                    alert('Incorrect password');
                }
                else if(err.code === 'auth/too-many-requests') {
                    alert('Too many requests, please try again later');
                }
                else if(err.code === 'auth/user-disabled') {
                    alert('User disabled');
                }
                else if(err.code === 'auth/invalid-email') {
                    alert('Invalid email');
                }
                else if(err.code === 'auth/wrong-password') {
                    alert('Incorrect password');
                }
                else {
                    alert(err);
                }
            }
        }

        if($authStore.currentUser) {
            window.location.href = '/privatedashboard';
        }
    }
</script>

<div class="container">
    <h1>{register? 'Register!' : 'Log In!'}</h1>
    <form>
        <label>
            <input bind:value={email} type="email" placeholder="Email">
        </label>
        <label>
            <input bind:value={password} type="password" placeholder="Password">
        </label>
        {#if register}
            <label>
                <input bind:value={confirmPassword} type="password" placeholder="Confirm Password">
            </label>
        {/if}
        <button on:click={handleSubmit}>Submit</button>
    </form>

    {#if register}
        <p>Already have an account?</p>
        <button on:click={() => {
            register = false;
        }}
        on:keydown={() => {}}>
            Log in!
        </button>
    {:else}
        <p>Don't have an account?</p>
        <button on:click={() => {
            register = true;
        }}
        on:keydown={() => {}}>
            Sign up!
        </button>

        <!--This part is not finished-->
        <button on:click={() => {
            authHandlers.resetPassword(email);
        }}
        on:keydown={() => {}}>
            Forgot Password?
        </button>
        <!--This part is not finished-->

    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
    }
    .container form{
        display: flex;
        flex-direction: column;
    }
</style>