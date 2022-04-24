<script lang="ts">
    import { labelsStr } from "../../store";


    let labels: string[] = [];
    labelsStr.subscribe(() => labels = labelsStr.getLabels());

    
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