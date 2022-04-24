<script lang="ts">
import { onMount } from "svelte";

    import type ImageFile from "../../models/ImageFile";
    import { dataIndex, images } from "../../store";


    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;

    $: if(ctx && $images) draw($dataIndex);

    onMount(() => {
        ctx = canvas.getContext('2d');

        setTimeout(() => draw($dataIndex), 500);
    })

    function readImage(file: File):  Promise<ImageFile>{
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = () => {
                if(typeof(reader.result) == "string"){
                    const img: ImageFile = { name: file.name, url: reader.result };
                    resolve(img);
                } else
                    reject();
            }
        });
    }

    const onUpload = async (e: Event) => {
        const target = e.target as HTMLInputElement;
        const { files } = target;

        const promises: Promise<ImageFile>[] = [];

        for(const file of files) {
            promises.push(readImage(file));
        }

        const imgFiles = await Promise.all(promises);
        $images = imgFiles;
    }

    const clear = () => {
        $images = null;
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

    function getImageFromUrl(url: string): Promise<HTMLImageElement> {
        return new Promise( resolve => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(img);
        })
    }

    const nextData = () => $dataIndex = $dataIndex + 1;
    const prevData = () => $dataIndex = $dataIndex - 1;

    const onKeyDown = (e: KeyboardEvent) => {
		if(['ArrowLeft', 'ArrowRight'].includes(e.key))
			e.preventDefault();
		switch(e.key) {
			case 'ArrowLeft': prevData(); break;
			case 'ArrowRight': nextData(); break;
		}
	}

</script>

{#if $images}
<button on:click={clear}>clear dataset</button>
<h1>
    <input type="number" bind:value={$dataIndex} >/{$images.length}
</h1>
<h2>{$images[$dataIndex]?.name}</h2>
{/if}
<canvas bind:this={canvas} />

{#if $images && $images.length > 0}
    <div class="controls">
        <button on:click={prevData}>previous</button>
        <button on:click={nextData}>next</button>
    </div>
{:else}
    upload your dataset:
    <input type="file" multiple={true} accept="image/*" on:change={onUpload} />
{/if}

<svelte:window on:keydown={onKeyDown} />


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