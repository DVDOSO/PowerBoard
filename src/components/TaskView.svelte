<script>
    import { dbHandlers } from '../stores/dbStore.js';

    async function addTask() {
        dbHandlers.addTask('Task 1');
    }
</script>

<div class='containerMain'>
    <h1>Tasks</h1>
    <div class='taskList'>
        <table>
            <tr><td>
                <p class='taskText'>Task 1</p> <button class='deleteTask'>Delete</button>
            </td></tr>
        </table>
        <button class='addTask' on:click={addTask}>Add Task</button>
    </div>
</div>

<style>
    .containerMain {
        padding-top: 6vh;
        background-color: rgb(177, 252, 181);
        text-align: center;
        height: 78vh;
    }
    .taskList {
        margin-top: 2vh;
        background-color: rgba(255, 255, 255, 0.452);
        width: 75%;
        display: inline-block;
        border-radius: 5px;
        height: 50vh;
        border: 1px black solid;
        overflow: hidden;
        overflow-y: scroll;
    }
    table, td {
        width: 100%;
        border: rgb(172, 172, 172) solid 1px;
    }
    table {
        border-collapse: collapse;
    }
    td {
        justify-content: space-between;
        padding: 1vh;
        height: 6vh;
        display: flex;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.459);
    }
    .taskText {
        display: inline;
    }
    .deleteTask {
        display: inline;
        padding: 0.5vh;
    }
    .addTask {
        position: sticky;
        padding: 1vh;
        margin: 1vh;
        bottom: 1vh;
        right: 1vh;
    }
</style>