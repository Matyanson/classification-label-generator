<script lang="ts">
import { onMount } from "svelte";

    import { labelsStr } from "../../store";

    // load labels from url
    const urlParams = new URLSearchParams(window.location.search);
    const labelsFromUrl = urlParams.get('labels');
    $labelsStr = labelsFromUrl;

    let labels: string[] = [];
    labelsStr.subscribe(() => {
        labels = labelsStr.getLabels();
        window.history.replaceState({}, '', '?labels='+labels.join(','));
    });

    
</script>

write your labels:
<input type="text" bind:value={$labelsStr} />

<div class="labels">
    {#each labels as label}
        <button>{label}</button>
    {/each}
</div>

<style>
    .labels button{
        margin: 5px;
    }
</style>