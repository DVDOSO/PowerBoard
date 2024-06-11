<script>
    import { onMount } from 'svelte';
    import { auth } from '../lib/firebase/firebase.client'
    import { authStore } from '../stores/authStore'
    import { browser } from '$app/environment'
    onMount(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            //console.log(user)
            authStore.update((curr) => {
                return {
                    ...curr,
                    isLoading: false,
                    currentUser: user
                };
            });
        })
        return unsubscribe;
    });
</script>
<main class='mainContainer'>
    <slot />


</main>

<style>
    .mainContainer {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>
