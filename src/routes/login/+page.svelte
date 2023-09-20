<script>
    import NavbarGuest from '../../components/NavbarGuest.svelte';
</script>

<NavbarGuest/>

<div class='webpage'>
    <div class='containerMain'>
        <h1 class='title'>
            Log In
        </h1>
    </div>
</div>

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
        font-size: 50px;
        margin-top: 35vh;
    }
</style>