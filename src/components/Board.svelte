<script>
    import { onMount } from 'svelte';

    let hoveredDotIndex = null;
    let dots = [];

    for(let i = 0; i < 10; i++){
        dots.push({
            id: i,
            cx: Math.random() * 100,
            cy: Math.random() * 100,
            r: 1,
            fill: 'black'
        })
    }

    function handleMouseEnter(dotIndex){
        hoveredDotIndex = dotIndex;
        dots[dotIndex].fill = 'red';
    }

    function handleMouseLeave(dotIndex){
        hoveredDotIndex = null;
        dots[dotIndex].fill = 'black';
    }
</script>

<div class='containerMain'>
    <div class='plot'>
        <svg width="100%" height="100%" viewBox="0 0 100 100">
            {#each dots as dot (dot.id)}
                <circle
                    cx={dot.cx}
                    cy={dot.cy}
                    r={dot.r}
                    fill={dot.fill}
                    on:mouseenter={() => handleMouseEnter(dot.id)}
                    on:mouseleave={() => handleMouseLeave(dot.id)}
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