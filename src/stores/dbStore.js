import { database } from '../lib/firebase/firebase.client';
import { getDatabase, ref, set, onValue, push, remove } from "firebase/database";
import { writable } from 'svelte/store';

export const dbHandlers = {
    addTask: async (task) => {
        const dbRef = ref(getDatabase());
        push(dbRef, task);
        alert('Task added successfully');
    }
}