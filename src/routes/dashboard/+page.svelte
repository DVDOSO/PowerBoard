<script>
	import { authHandlers, authStore } from '../../stores/authStore.js';
    import NavbarPrivate from "../../components/NavbarPrivate.svelte";

    let email;
    authStore.subscribe((curr) => {
        email = curr?.currentUser?.email;
    })
</script>

{#if $authStore.currentUser !== null}
    <NavbarPrivate/>
    <div class='webpage'>
        <div class='containerMain'>
            <h1 class='title'>
                Welcome, {email}!
            </h1>
        </div>
    </div>
{:else}
    <div>
        Loading...
    </div>
{/if}

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
        font-size: 60px;
        margin-top: 35vh;
    }
</style>