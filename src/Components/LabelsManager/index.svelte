<script lang="ts">
    import { dataIndex, labelSet, labelsStr } from "../../store";

    // load labels from url
    const urlParams = new URLSearchParams(window.location.search);
    const labelsFromUrl = urlParams.get('labels');
    if(labelsFromUrl?.length > 0)
        $labelsStr = labelsFromUrl;

    $: HowManyDone = $labelSet.filter(x => x).length;

    let labels: string[] = [];
    labelsStr.subscribe(() => {
        labels = labelsStr.getLabels();
        window.history.replaceState({}, '', '?labels='+labels.join(','));
    });

    const normalize = (s: string) => s.normalize("NFKC").toLowerCase();
    const saveLabel = (label: string) => {
        const normalizedLabel = normalize(label);
        $labelSet[$dataIndex] = normalizedLabel;
        $dataIndex = $dataIndex + 1;
    }

    const getLabelToNumMap = (): {[key: string]: number} => {
        // detect all labels used
        const groupBy: {[key: string]: boolean} = {};
        for(const label of $labelSet) {
            if(label) groupBy[label] = true;
        }
        // delete all known labels from detected
        for(let label of labels) {
            delete groupBy[normalize(label)];
        }
        // create map from label to number
        const unknownLabels = Object.keys(groupBy);
        const allLabels = labels.map(x => normalize(x)).concat(unknownLabels);
        const labelNumMap: {[key: string]: number} = {};
        for(let i in allLabels) {
            labelNumMap[allLabels[i]] = Number(i);
        }
        return labelNumMap;
    }

    const saveFile = (fileName: string, blobParts: BlobPart[], mimeType: string) => {
        let blob = new Blob(blobParts, {type: mimeType});
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
    };

    const downloadData = (data) => {
        const jsonString = JSON.stringify(data);
		saveFile('grid_data.json', [jsonString], 'text/json');
    }

    const downloadLabelsRaw = () => {
        downloadData($labelSet);
    }

    const downloadLabelsNum = () => {
        const labelToNumMap = getLabelToNumMap();
        const numbers = $labelSet.map(x => labelToNumMap[x])
        downloadData(numbers);
    }
    const oneHot = (num: number, count: number) => [...Array(num).fill(0), 1, ...Array(count - num - 1).fill(0)];

    const downloadLabelsOneHot = () => {
        const labelToNumMap = getLabelToNumMap();
        const count = Object.keys(labelToNumMap).length;
        const numbers = $labelSet.map(x => labelToNumMap[x] == null ? null : oneHot(labelToNumMap[x], count));
        downloadData(numbers);
    }
</script>

write your labels:
<input type="text" bind:value={$labelsStr} />

<div class="labels">
    {#each labels as label}
        <button
            on:click={() => saveLabel(label)}
        >{label}</button>
    {/each}
</div>

{$labelSet[$dataIndex] ?? ''}<br>
{HowManyDone + ' done!'}

<br>
<div class="save">
    <button on:click={downloadLabelsRaw}>save raw</button>
    <button on:click={downloadLabelsNum}>save nums</button>
    <button on:click={downloadLabelsOneHot}>save one hot</button>
</div>

<style>
    .labels button{
        margin: 5px;
    }
</style>