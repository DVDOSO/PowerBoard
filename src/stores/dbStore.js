import { database } from '../lib/firebase/firebase.client';
import { getDatabase, ref, set, onValue, push, remove, get } from "firebase/database";
import { writable } from 'svelte/store';

export const dbStore = writable({
    tasks: '',
    currentEdit: '',
    currentNameEdit: '',
    currentDescEdit: '',
    currentImpEdit: '',
    currentUrgEdit: '',
    currentColEdit: '',
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
    },
    removeTask: async (userId, taskId) => {
        const reference = ref(database, 'users/' + userId + '/tasks/' + taskId);
        await remove(reference);
    },
    editTask: async (userId, taskId, task, desc, imp, urg, col, pro, com) => {
        const reference = ref(database, 'users/' + userId + '/tasks/' + taskId);
        await set(reference, {
            task: task,
            description: desc,
            importance: imp,
            urgency: urg,
            color: col,
            inProgress: pro,
            completed: com
        });
    }
}