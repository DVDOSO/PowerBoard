<script>
    import { dbStore, dbHandlers } from '../stores/dbStore.js';
    import { authStore } from '../stores/authStore.js';
    import { database } from '../lib/firebase/firebase.client';
    import { getDatabase, ref, set, onValue, push, remove, get } from "firebase/database";

    async function addTask() {
        // console.log($authStore.currentUser);
        dbHandlers.addTask($authStore.currentUser.uid, 'Task 1', 'Task 1 description', 0, 0, 'red', false, false);
    }
    // https://www.youtube.com/watch?v=JcVAb7Uqne0
    function updateTable(){
        let table = document.getElementsByClassName('taskTable');
        const reference = ref(database, 'users/' + $authStore.currentUser.uid + '/tasks');
        onValue(reference, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let trow = document.createElement('tr');
                let tdata = document.createElement('td');
                tdata.innerHTML = '<p class="taskText">' + childSnapshot.val().name + '</p><button class="deleteTask" on:click={deleteTask}>Delete</button>';
                trow.appendChild(tdata);
                table.appendChild(trow);
            });
          });
    }
</script>

<div class='containerMain'>
    <h1>Tasks</h1>
    <div class='taskList'>
        <table class='taskTable'>
            <tr><td>
                <p class='taskText'>Task 1</p><button class='deleteTask'>Delete</button>
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