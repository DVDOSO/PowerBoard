import { remove } from "firebase/database";
import { writable } from "svelte/store";

export const guestTasks = writable({
    tasks: [],
    tempId: 0,
    currentIdEdit: '',
    currentNameEdit: '',
    currentDescEdit: '',
    currentImpEdit: '',
    currentUrgEdit: '',
    currentColEdit: '',
});

export const guestHandlers = {
    addTask: async (taskId, task, desc, imp, urg, col) => {
        guestTasks.update((store) => {
            store.tasks.push({
                taskId: taskId,
                task: task,
                description: desc,
                importance: imp,
                urgency: urg,
                color: col,
            });
            return store;
        });
    },
    removeTask: async (taskId) => {
        guestTasks.update((store) => {
            let index = 0;
            for(let i = 0; i < store.tasks.length; i++){
                if(store.tasks[i].taskId == taskId){
                    index = i;
                    break;
                }
            }
            store.tasks.splice(index, 1);
            return store;
        });
    },
    editTask: async (taskId, task, desc, imp, urg, col) => {
        guestTasks.update((store) => {
            let index = 0;
            for(let i = 0; i < store.tasks.length; i++){
                if(store.tasks[i].taskId == taskId){
                    index = i;
                    break;
                }
            }
            store.tasks[index].task = task;
            store.tasks[index].description = desc;
            store.tasks[index].importance = imp;
            store.tasks[index].urgency = urg;
            store.tasks[index].color = col;
            return store;
        });
    },
}