<script>
	import UselessWeb from '../components/tools/UselessWeb.svelte';
	import CoinFlip from '../components/tools/CoinFlip.svelte';
	import AnswerChooser from '../components/tools/AnswerChooser.svelte';
	import Clipboard from '../components/helper/Clipboard.svelte';
	import Alert from '../components/helper/Alert.svelte';

	let copyText;
	let showAlert;
</script>

<svelte:head>
	<title>Funbox, by Skayo</title>
</svelte:head>

<div class="uk-grid-medium" uk-grid uk-sortable="handle: .uk-sortable-handle">
	<AnswerChooser {copyText} />
	<CoinFlip />
	<UselessWeb />
</div>

<Clipboard bind:copyText />
<Alert bind:showAlert />