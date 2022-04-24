<script lang="ts">
    import type ImageFile from "../../models/ImageFile";
    import { dataIndex, images } from "../../store";
import ImageDisplay from "./ImageDisplay.svelte";
    
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

{#if $images && $images.length > 0}
    <button on:click={clear}>clear dataset</button>
    <ImageDisplay />
    <div class="controls">
        <button on:click={prevData}>previous</button>
        <button on:click={nextData}>next</button>
    </div>
{:else}
    upload your dataset:
    <input type="file" multiple={true} accept="image/*" on:change={onUpload} />
{/if}

<svelte:window on:keydown={onKeyDown} />