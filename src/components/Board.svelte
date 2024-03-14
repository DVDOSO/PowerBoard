<script>
    import { onMount } from 'svelte';
    import { dbStore, dbHandlers, dataStore } from '../stores/dbStore';
    import { database } from '../lib/firebase/firebase.client';
    import { getDatabase, ref, set, onValue, push, remove, get, update } from "firebase/database";
    import { authStore } from '../stores/authStore.js';
	import { derived, writable } from 'svelte/store';

    let text = '';
    let description = '';

    const dots = derived(dataStore, $dataStore => {
        if ($dataStore && $dataStore.tasks) {
            return Object.values($dataStore.tasks).map(task => ({
                id: task.task,
                desc: task.description,
                cx: task.urgency * 10,
                cy: (10 - task.importance) * 10,
                r: 1,
                fill: task.color
            }));
        } else {
            return [];
        }
    })

    function handleHover(id, desc) {
        text = id;
        description = desc;
    }

    function handleMouseOff() {
        text = '';
        description = '';
    }

    onMount(() => {
        dbHandlers.getTasks($authStore.currentUser.uid);
        // console.log("mounted")
    })
</script>

<div class='containerMain'>
    <div class='plot'>
        <svg height="100%" width="100%" viewBox="0 0 100 100">
            {#each $dots as dot (dot.id)}
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <circle
                    cx={dot.cx}
                    cy={dot.cy}
                    r={dot.r}
                    fill={dot.fill}
                    stroke-width=0.05vh
                    onmouseover="evt.target.setAttribute('stroke', 'white');"
                    onmouseout="evt.target.setAttribute('stroke', 'none');"
                    on:mouseover={handleHover(dot.id, dot.desc)}
                    on:mouseleave={handleMouseOff}
                />
            {/each}
        </svg>
    </div>
    <div class='side'>
        <h1 class='taskTitle'>{text}</h1>
        <h2 class='taskDesc'>{description}</h2>
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
        width: 38.3vw;
        margin-top: 6.8vh;
        position: fixed;
    }
    svg {
        padding: 2vh;
    }
    .side{
        border: 1px solid black;
        position: fixed;
        height: 60vh;
        width: 15vw;
        margin-top: 17vh;
        margin-left: 38.3vw;
        word-wrap: break-word;
        padding: 1vh;
    }
</style>