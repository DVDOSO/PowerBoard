<!--guest dashboard-->

<script>
    import NavbarGuest from "../../components/NavbarGuest.svelte";
	import BoardGuest from '../../components/guest/BoardGuest.svelte';
    import TaskViewGuest from '../../components/guest/TaskViewGuest.svelte';
    import { guestHandlers, guestTasks } from "../../stores/guestStore";

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
<title>PowerBoard</title>

<div class='webpage'>
    <NavbarGuest/>
    <BoardGuest/>
    <div class='containerMain'>
        <h2 class='welcome'>Welcome guest!<br>Sign up to save your tasks!</h2>
        <hr>
        <div id='taskView'>
            <TaskViewGuest/>
        </div>
    </div>
</div>

<style>
    .webpage {
        height: 100vh;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #23a6d5, #e73c7e, #ee7752);
        background-size: 400% 400%;
        animation: gradient 30s infinite ease;
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
        margin-top: 3vh;
        width: 30vw;
        margin-left: 7vw;
    }

</style>