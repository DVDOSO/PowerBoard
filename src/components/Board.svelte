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
                r: 2,
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
        <div class='horizontalArrow'>
            <hr id='line'>
            <div id='left'>˂</div>
            <div id='right'>˃</div>
        </div>
        <div class='verticalArrow'>
            <hr id='line'>
            <div id='left'>˂</div>
            <div id='right'>˃</div>
        </div>
        <div id='crises'>Crises</div>
        <div id='goals'>Goals</div>
        <div id='distractions'>Distractions</div>
        <div id='interruptions'>Interruptions</div>
        <div id='importance'>Importance</div>
        <div id='urgency'>Urgency</div>
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
        height: 93vh;
        overflow: hidden;
        margin-left: 44vw;
        margin-top: 5vh;
        width: 56vw;
        position: fixed;
    }
    .plot {
        height: 38.3vmax;
        width: 38.3vmax;
        position: fixed;
        background-color: rgba(255, 255, 255, 0.459);
        border-radius: 2vh;
        top: 50%;
        transform: translateY(-50%);
    }
    svg {
        padding: 2vh;
    }
    .side{
        border-left: 6px dotted rgba(255, 255, 255, 0.4);
        position: fixed;
        height: 30vmax;
        width: 15vmax;
        margin-left: 38.3vw;
        word-wrap: break-word;
        padding: 1.5vh;
        background-color: rgba(255, 255, 255, 0.459);
        border-top-right-radius: 2vh;
        border-bottom-right-radius: 2vh;
        color: white;
        top: 50%;
        transform: translateY(-50%);
    }
    .taskTitle {
        font-family: 'Mulish', sans-serif;
        font-size: 1.7vmax;
        font-weight: 700;
        padding-bottom: 1vh;
        line-height: 1.2;
    }
    .taskDesc {
        font-size: 1.2vmax;
        font-weight: 400;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.2;
    }
    .horizontalArrow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30vmax;
        z-index: -1;
    }
    .verticalArrow {
        position: absolute;
        rotate: 90deg;
        top: 50%;
        left: 10.8%;
        width: 30vmax;
        z-index: -1;
    }
    #line{
        border: none;
        border-top: .7vh rgba(255, 255, 255, 0.4) dotted;
    }
    #left{
        position: fixed;
        margin-top: -5.7vh;
        margin-left: -1vw;
        font-size: 8vh;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgba(255, 255, 255, 0.4);
    }
    #right{
        position: fixed;
        margin-top: -5.7vh;
        margin-left: 29vw;
        font-size: 8vh;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgba(255, 255, 255, 0.4);
    }
    #crises{
        position: absolute;
        left: 63%;
        top: 22.5%;
        font-size: 3vmax;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgba(255, 255, 255, 0.4);
        z-index: -1;
    }
    #goals{
        position: absolute;
        left: 18%;
        top: 22.5%;
        font-size: 3vmax;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgba(255, 255, 255, 0.4);
        z-index: -1;
    }
    #distractions{
        position: absolute;
        left: 9%;
        top: 66%;
        font-size: 3vmax;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgba(255, 255, 255, 0.4);
        z-index: -1;
    }
    #interruptions{
        position: absolute;
        left: 53%;
        top: 66%;
        font-size: 3vmax;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgba(255, 255, 255, 0.4);
        z-index: -1;
    }
    #importance{
        position: absolute;
        left: 41%;
        top: 3%;
        font-size: 1.5vmax;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgba(255, 255, 255, 0.4);
        z-index: -1;
    }
    #urgency{
        position: absolute;
        left: 89%;
        top: 47%;
        font-size: 1.5vmax;
        rotate: 90deg;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgba(255, 255, 255, 0.4);
        z-index: -1;
    
    }
    circle {
        filter: drop-shadow(0px 0px 1px rgb(255, 255, 255));
    }
    
</style>