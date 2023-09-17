<script>
    import AuthReset from "../../components/AuthReset.svelte";
    import  { auth } from "../../lib/firebase/firebase.client";
	import { authStore, authHandlers } from "../../stores/authStore";

    let email;
    authStore.subscribe((curr) => {
        console.log('CURR', curr)
        email = curr?.currentUser?.email;
    })
</script>

{#if $authStore.currentUser}
    <div>
        <h1>Welcome {email}!</h1>
        <AuthReset/>
    </div>
{:else}
    <div>
        Loading...
    </div>
{/if}

<style>
    div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1 {
        text-align: center;
    }
</style>