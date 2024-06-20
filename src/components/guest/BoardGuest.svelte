<script>
    import { onMount } from 'svelte';
    import { guestTasks, guestHandlers } from '../../stores/guestStore.js';

    let text = 'Hover over a task!';
    let description = '';

    // const dots = derived(dataStore, $dataStore => {
    //     if ($dataStore && $dataStore.tasks) {
    //         return Object.values($dataStore.tasks).map(task => ({
    //             id: task.task,
    //             desc: task.description,
    //             cx: task.urgency * 10,
    //             cy: (10 - task.importance) * 10,
    //             r: 2,
    //             fill: task.color
    //         }));
    //     } else {
    //         return [];
    //     }
    // })

    let dots = [];
    $: {
        dots = [];
        for(let task in $guestTasks.tasks) {
            dots.push({
                id: $guestTasks.tasks[task].task,
                desc: $guestTasks.tasks[task].description,
                cx: $guestTasks.tasks[task].urgency * 10,
                cy: (10 - $guestTasks.tasks[task].importance) * 10,
                r: 2,
                fill: $guestTasks.tasks[task].color
            });
        }
    }

    function handleHover(id, desc) {
        text = id;
        description = desc;
    }

    function handleMouseOff() {
        text = 'Hover over a task!';
        description = '';
    }

    // onMount(() => {
    //     dbHandlers.getTasks($authStore.currentUser.uid);
    //     // console.log("mounted")
    // })
</script>

<div class='containerMain'>
    <div class='plot'>
        <img src="./boardText.png" alt="boardText" class='boardText'>
        <svg height="100%" width="100%" viewBox="0 0 100 100">
            {#each dots as dot}
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
    /* circle {
        transition-duration: 0.5s;
    } */
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
    .boardText {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    circle {
        filter: drop-shadow(0px 0px 1px rgb(255, 255, 255));
    }
    
</style>