<script>
	import NavbarGuest from '../components/NavbarGuest.svelte';
</script>

<NavbarGuest/>

<div class='webpage'>
    <div class='containerMain'>
        <h1 class='title'>
            PowerBoard
        </h1>
        <button class='start'>Get Started!</button>
    </div>
</div>


<style>
    .webpage {
        height: 100vh;
        overflow: hidden;
    }
    button {
        border-color: rgb(154, 181, 255);
        background-color: transparent;
        border: black solid 1px;
        color: black;
        padding: 10px;
        margin-right: 5px;
        margin-left: 5px;
        list-style-type: none;
        font-size: 20px;
        cursor: pointer;
        border-radius: 5px;
        transition-duration: 0.4s;
    }
    button:hover {
        background-color: rgb(154, 181, 255);
        color: white;
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
        font-size: 80px;
        margin-top: 35vh;
    }
    .start{
        margin-top: 5vh;
        display: inline_block;
        justify-content: center;
    }
</style>