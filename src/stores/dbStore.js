import { database } from '../lib/firebase/firebase.client';
import { getDatabase, ref, set, onValue, push, remove, get } from "firebase/database";
import { writable } from 'svelte/store';

export const dbStore = writable({
    tasks: '',
});

export const dbHandlers = {
    addTask: async (userId, task, desc, imp, urg, col, pro, com) => {
        const reference = ref(database, 'users/' + userId + '/tasks');
        await push(reference, {
            task: task,
            description: desc,
            importance: imp,
            urgency: urg,
            color: col,
            inProgress: pro,
            completed: com
        });
        dbHandlers.readTasks(userId);
    },
    readTasks: async (userId) => {
        dbStore.tasks = '';
        const reference = ref(database, 'users/' + userId + '/tasks');
        onValue(reference, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                dbStore.tasks += "<tr><td><p class='taskText'>"
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                dbStore.tasks += childData.task;
                dbStore.tasks += "</p><button class='deleteTask'>Delete</button></td></tr>"
                console.log(childData);
            });
            console.log('read', dbStore.tasks);
          });
        // console.log('read', dbStore.tasks);
    }
}