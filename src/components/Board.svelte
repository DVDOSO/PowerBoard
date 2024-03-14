<script>
    import { onMount } from 'svelte';
    import { dbStore, dbHandlers, dataStore } from '../stores/dbStore';
    import { database } from '../lib/firebase/firebase.client';
    import { getDatabase, ref, set, onValue, push, remove, get, update } from "firebase/database";
    import { authStore } from '../stores/authStore.js';
	import { derived, writable } from 'svelte/store';

    let hoveredDotIndex = null;

    const dots = derived(dataStore, $dataStore => {
        if ($dataStore && $dataStore.tasks) {
            return Object.values($dataStore.tasks).map(task => ({
                id: task.task,
                cx: task.urgency * 10,
                cy: (10 - task.importance) * 10,
                r: 1,
                fill: task.color
            }));
        } else {
            return [];
        }
    })

    onMount(() => {
        dbHandlers.getTasks($authStore.currentUser.uid);
        console.log("mounted")
    })
</script>

<div class='containerMain'>
    <div class='plot'>
        <svg width="100%" height="100%" viewBox="0 0 100 100">
            {#each $dots as dot (dot.id)}
                <circle
                    cx={dot.cx}
                    cy={dot.cy}
                    r={dot.r}
                    fill={dot.fill}
                    stroke-width=0.05vh
                    onmouseover="evt.target.setAttribute('stroke', 'white');"
                    onmouseout="evt.target.setAttribute('stroke', 'none');"
                />
            {/each}
        </svg>
    </div>
</div>

<style>
    .containerMain {
        background-color: rgb(173, 255, 152);
        height: 93vh;
        overflow: hidden;
        margin-left: 44vw;
        margin-top: 7vh;
        width: 56vw;
        position: fixed;
    }
    .plot {
        border: 1px solid black;
        height: 80vh;
        width: 80vh;
        margin-top: 6.8vh;
    }
    svg {
        padding: 2vh;
    }
</style>