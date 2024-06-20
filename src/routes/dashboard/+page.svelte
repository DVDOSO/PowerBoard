<!--logged in dashboard-->

<script>
	import { authHandlers, authStore } from '../../stores/authStore.js';
    import NavbarPrivate from "../../components/NavbarPrivate.svelte";
	import Board from '../../components/Board.svelte';
	import TaskView from '../../components/TaskView.svelte';

    let email;
    authStore.subscribe((curr) => {
        email = curr?.currentUser?.email;
    })
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
<title>PowerBoard</title>

{#if $authStore.currentUser !== null}
    <div class='webpage'>
        <NavbarPrivate/>
        <Board/>
        <div class='containerMain'>
            <h2 class='welcome'> Welcome {email}!</h2>
            <hr>
            <div id='taskView'>
                <TaskView/>
            </div>
        </div>
    </div>
{:else}
    <div class='webpageLoading'>
        <p class='loading'>Loading...</p>
    </div>
{/if}

<style>
    .webpage {
        height: 100vh;
        width: 100vw;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #23a6d5, #e73c7e, #ee7752);
        background-size: 400% 400%;
        animation: gradient 30s infinite ease;
    }
    .webpageLoading {
        height: 100vh;
        width: 100vw;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #23a6d5, #e73c7e, #ee7752);
        background-size: 400% 400%;
        animation: gradient 30s infinite ease;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .containerMain {
        /* background-color: rgb(177, 252, 181); */
        width: 44vw;
        margin-top: 7vh;
        height: 93vh;
        position: fixed;
        text-align: center;
    }
    #taskView {
        padding-top: 2vh;
        padding-left: 2vw;
        padding-right: 2vw;
    }
    
    @keyframes gradient{
        0%{
            background-position: 0% 50%
        }
        50%{
            background-position: 100% 50%
        }
        100%{
            background-position: 0% 50%
        }
    }
    .welcome {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 400;
        color: white;
        font-size: 2vw;
        word-wrap: break-word;
        margin-top: 7vh;
    }
    hr {
        border: 0;
        height: 1px;
        background: rgba(255, 255, 255, 0.5);
        margin-top: 7vh;
        width: 30vw;
        margin-left: 7vw;
    }
    .loading {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 200;
        color: white;
        font-size: 6vw;
        word-wrap: break-word;
        text-align: center;
    }
</style>