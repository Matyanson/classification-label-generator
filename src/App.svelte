<script lang="ts">
import DatasetManager from "./Components/DatasetManager/index.svelte";
import LabelsManager from "./Components/LabelsManager/index.svelte";



	let labelsStr = "";
</script>

<main>
	<h1>Label generator</h1>
	<DatasetManager />
	<LabelsManager />
</main>

<style>
	main {
		display: flex;
		flex-flow: column;
		align-items: center;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>