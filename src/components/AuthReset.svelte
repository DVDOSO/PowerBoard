<script>
    import { authHandlers, authStore } from '../stores/authStore.js';
    import { auth } from '../lib/firebase/firebase.client';
    let action = '';
    let newPass = '';

    console.log($authStore.currentUser);
</script>

<div class="container">
    <!-- update password, stuff do it later
    <div>
        <button on:click={() => {action = 'updatePass'}}>Update Password</button>
    </div>
    {#if action === 'updatePass'}
        <form>
            <label>
                <input bind:value={newPass} type="password" placeholder="New Password">
            </label>
            <button on:click={handleSubmit}>Submit</button>
        </form>
    {/if}-->
    <button on:click={authHandlers.logout}>Logout</button>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        margin-top: 10vh;
    }
    /*.container form{
        display: flex;
        flex-direction: column;
    }*/
</style>