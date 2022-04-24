<script lang="ts">
    import { onMount } from "svelte";
    import { dataIndex, images } from "../../store";

    
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;

    $: if(ctx && $images) draw($dataIndex);

    onMount(() => {
        ctx = canvas.getContext('2d');

        setTimeout(() => draw($dataIndex), 500);
    })

    function getImageFromUrl(url: string): Promise<HTMLImageElement> {
        return new Promise( resolve => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(img);
        })
    }

    const draw = async (index: number) => {
        if(!ctx || !canvas) return;

        const url = $images ? $images[index]?.url : null;

        if(!url) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }
        
        const img = await getImageFromUrl(url);
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    }
</script>

<h1>
    <input type="number" bind:value={$dataIndex} >/{$images.length}
</h1>
<h2>{$images[$dataIndex]?.name}</h2>
<canvas bind:this={canvas} />

<style>
    canvas {
        width: 100%;
        max-width: 300px;
        image-rendering: pixelated;
    }
    h1 input[type=number] {
        width: 3em;
    }
</style>