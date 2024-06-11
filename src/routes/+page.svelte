<!--Not logged in main page-->

<script>
	import NavbarGuest from '../components/NavbarGuest.svelte';
    import { goto } from '$app/navigation';
    import { authStore } from '../stores/authStore';

    async function routeSignup() {
        if($authStore.currentUser !== null) {
            goto('/dashboard')
        }
        else {
            goto('/signup')
        }
    }

    async function routeGuest() {
        if($authStore.currentUser !== null) {
            goto('/dashboard')
        }
        else {
            goto('/dashboardGuest')
        }
    }

    let about1 = null;
    let about2 = null;
    let about3 = null;
    let y, innerHeight;

    

    $: {
        let vh = innerHeight * 0.01;
        if(about1){
            if(y / vh > 40) {
                about1.classList.add('visible');
            }
            else {
                about1.classList.remove('visible');
            }
        }
        if(about2){
            if(y / vh > 90) {
                about2.classList.add('visible');
            }
            else {
                about2.classList.remove('visible');
            }
        }
        if(about3){
            if(y / vh > 140) {
                about3.classList.add('visible');
            }
            else {
                about3.classList.remove('visible');
            }
        }
    }
    
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
<NavbarGuest/>
<title>PowerBoard</title>

<svelte:window bind:scrollY={y} bind:innerHeight={innerHeight}/>

<div class='webpage'>
    <div class='containerMain'>
        <h1 class='title'>
            PowerBoard
        </h1>
        <button class='start' on:click={routeSignup}>Sign Up For Free!</button>
        <button class='start' on:click={routeGuest}>Try It Out Now!</button>
        <div class='arrow'>Scroll ▼</div>
        <div class='about1'>
            <section class='tag' bind:this={about1}>
                <img src="src/images/logo.png" alt="logo" class='logo'>
                <h2 class='aboutSubtitle1'>PowerBoard: The <b>Next</b> Way to Work</h2>
                <h3 class='aboutDescription1'>Powerboard is a task management application that helps you organise your life. With a modern design, Powerboard allows you to create, order, and execute tasks more efficiently.</h3>
            </section>
            <section class='tag' bind:this={about2}>
                <img src="src/images/tasks.png" alt="tasks" class='taskImage'>
                <h2 class='aboutSubtitle2'>Organise your Life.</h2>
                <h3 class='aboutDescription2'>Easily create tasks unique to you. Make adding and remembering new tasks the least of your worries and always stay on top of your workload.</h3>
            </section>
            <section class='tag' bind:this={about3}>
                <img src="src/images/board.png" alt="board" class='boardImage'>
                <h2 class='aboutSubtitle3'>Visualize your Tasks.</h2>
                <h3 class='aboutDescription3'>Based on the concept of the Eisenhower matrix, Powerboard allows you to better prioritize your tasks. Organise and schedule your tasks based off its colour and its position on the matrix.</h3>
            </section>
            <h2 class='subtitle'>Reviews</h2>
            <div class='reviews'>
                <div class='review'>"It's been such a relief to get the whole, 'choosing your task' thing out of the way. Now I can focus on starting and getting results."<br><b><i>-Maximus W</i></b></div>
                <div class='review'>"A great tool; helped tremendously in both prioritising tasks to do first, as well as thinking about what makes a task so urgent, or important. Done wonders for my procrastination!!"<br><b><i>-Andrew H</i></b></div>
                <div class='review'>"Such a helpful app! Honestly has helped me as much as, if not more than premium alternatives. Everyone should try this out; it has been such a time save."<br><b><i>-Leo L</i></b></div>
            </div>
            <div class='center'>
                <button class='start2' on:click={routeGuest}>Try It Out Now!</button>
            </div>
            <div class='footnote'>
                <h2 class='footnoteText'>Created with Google FireBase and SvelteKit</h2>
                <h2 class="footnoteText">Developed by: David Jiang</h2>
                <h2 class='footnoteText'>Source Code: <a href="https://github.com/DVDOSO/PowerBoard">https://github.com/DVDOSO/PowerBoard</a></h2>
            </div>
        </div>
    </div>
</div>


<style>
    .webpage {
        display: inline;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #23a6d5, #e73c7e, #ee7752);
        background-size: 400% 400%;
        animation: gradient 30s infinite ease;
        overflow: hidden;
        overflow-y: auto;
    }
    button {
        border-color: rgb(154, 181, 255);
        background-color: transparent;
        border: black solid 1px;
        color: black;
        padding: 0.5%;
        list-style-type: none;
        font-size: 100%;
        cursor: pointer;
        border-radius: 5px;
        transition-duration: 0.4s;
        animation: fadeIn ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        margin: 1vh;
    }
    button:hover {
        background-color: rgb(255, 255, 255);
        color: rgb(85, 85, 85);
        box-shadow: 0 0 3vh rgba(255, 255, 255, .5);
    }
    .containerMain {
        text-align: center;
        margin: 0;
        padding: 10px;
        width: 100%;
        overflow: hidden;
    }
    .title {
        margin-top: 37vh;
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-size: 10vh;
        font-style: normal;
        animation: fadeIn ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        color: white;
    }
    .arrow {
        font-family: "Mulish", sans-serif;
        margin-top: 30vh;
        font-size: 3vh;
        color: white;
        animation: fadeIn ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation: pulse 2s infinite;
    }
    .start{
        margin-top: 5vh;
        display: inline_block;
        justify-content: center;
        font-family: "Mulish", sans-serif;
        color: white;
        border-color: white;
        font-size: 2vh;
    }
    .start2{
        margin-top: 5vh;
        display: inline_block;
        justify-content: center;
        font-family: "Mulish", sans-serif;
        font-size: 2vh;
        color: rgb(0, 0, 0);
        border-color: rgb(0, 0, 0);
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
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
    @keyframes pulse {
        0% {
            transform: scale(0.8);
        }

        70% {
            transform: scale(1);
        }

        100% {
            transform: scale(0.8);
        }
    }
    .about1 {
        margin-top: 20vh;
        padding: 3vh;
        background-color: rgba(255, 255, 255, 0.75);
        width: 100vw;
        text-align: left;
        margin-left: -1vw;
        margin-bottom: -1vh;
        overflow: hidden;
        padding-bottom: 1vh;
    }
    .aboutSubtitle1 {
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-size: 2.5vw;
        font-style: normal;
        color: rgba(0, 0, 0, 0.75);
        padding-left: 10vw;
        padding-top: 6vh;
    }
    .aboutDescription1 {
        font-family: "Mulish", sans-serif;
        font-weight: 300;
        font-size: 1.5vw;
        font-style: normal;
        color: rgba(0, 0, 0, 0.75);
        padding-top: 2vh;
        width: 50vw;
        margin-left: 13vw;
    }
    .logo{
        float: right;
        height: 17vw;
        padding-right: 10vw;
    }
    .aboutSubtitle2 {
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-size: 2.5vw;
        font-style: normal;
        color: rgba(0, 0, 0, 0.75);
        margin-top: 20vh;
        padding-left: 40vw;
        padding-top: 6vh;
    }
    .aboutDescription2 {
        font-family: "Mulish", sans-serif;
        font-weight: 300;
        font-size: 1.5vw;
        font-style: normal;
        color: rgba(0, 0, 0, 0.75);
        padding-top: 2vh;
        width: 50vw;
        margin-left: 43vw;
        margin-bottom: 25vh;
    }
    .taskImage {
        float: left;
        height: 25vw;
        margin-left: 6vw;
        margin-top: 10vh;
        border-radius: 10px;
        transform: translate(0, -18vh);
    }
    .boardImage{
        float: right;
        height: 25vw;
        margin-right: 4vw;
        margin-top: 10vh;
        border-radius: 10px;
        margin-left: 1vw;
        transform: translate(0, -15vh);
    }
    .reviews{
        height: 30vh;
        width: 97vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3vh;
    }
    .review {
        font-family: "Mulish", sans-serif;
        font-weight: 300;
        font-size: 1.2vw;
        font-style: normal;
        color: rgba(0, 0, 0, 0.75);
        width: 20vw;
        text-align: center;
        margin-left: 3vw;
        margin-right: 3vw;
    }
    .subtitle {
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-size: 2.5vw;
        font-style: normal;
        color: rgba(0, 0, 0, 0.75);
        margin-left: 43.5vw;
        margin-top: 25vh;
    }
    .aboutSubtitle3 {
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-size: 2.5vw;
        font-style: normal;
        color: rgba(0, 0, 0, 0.75);
        padding-left: 9vw;
        padding-top: 12vh;
    }
    .aboutDescription3 {
        font-family: "Mulish", sans-serif;
        font-weight: 300;
        font-size: 1.5vw;
        font-style: normal;
        color: rgba(0, 0, 0, 0.75);
        padding-top: 2vh;
        width: 50vw;
        margin-left: 10vw;
    }
    .footnoteText{
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-size: 1vw;
        font-style: normal;
        color: rgba(0, 0, 0, 0.75);
        padding-top: 0.5vh;
    }
    .footnote{
        margin-top: 10vh;
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tag{
        opacity: 0;
        transform: translate(0, 20vh);
        transition: all 1s;
    }
    .visible, :global(.tag.visible){
        opacity: 1;
        transform: translate(0, 0);
    }
</style>