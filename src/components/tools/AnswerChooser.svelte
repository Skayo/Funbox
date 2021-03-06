<script context="module">
	const SLIDE_LIST_LENGTH = 2;
	const MIN_TRAVEL_DISTANCE = 10;
</script>

<script>
	import { onMount, tick } from 'svelte';
	import Tool from './Tool.svelte';

	let answers;
	let slotItems = [];

	let slotMachineContainer;
	let firstSpin = true;
	let result = '';
	let prevRandomIndex = 0;

	let resultField;
	export let copyText;

	function makeSlotItems() {
		slotItems = [];

		for (let i = 0; i <= SLIDE_LIST_LENGTH; i++) {
			slotItems = [...slotItems, ...Object.keys(answers)];
		}
	}

	function randomAnswerElement() {
		const answerElements = slotMachineContainer.children;

		let randomIndex = 0;

		do {
			randomIndex = Math.floor(Math.random() * answerElements.length);
		} while ((randomIndex > prevRandomIndex ? randomIndex - prevRandomIndex : prevRandomIndex - randomIndex) < MIN_TRAVEL_DISTANCE);

		prevRandomIndex = randomIndex;

		return answerElements[randomIndex];
	}

	async function handleClick() {
		if (!answers) return;

		if (firstSpin) firstSpin = false;

		result = '';

		await tick();

		// Play animation
		const answerElementToScrollTo = randomAnswerElement();
		slotMachineContainer.style.top = (-answerElementToScrollTo.offsetTop) + 'px';

		setTimeout(() => {
			result = answerElementToScrollTo.innerText.trim();
		}, 1100);
	}

	function select(element) {
		element.select();
		element.setSelectionRange(0, element.value.length);
	}

	onMount(async function () {
		const response = await fetch('https://answers.fun.skayo.dev/answers.json');
		answers = await response.json();

		makeSlotItems();
	});
</script>

<Tool title="Answer Chooser (German)" size="large">
	<div on:click={handleClick} class="slot-machine">
		<div bind:this={slotMachineContainer} class="slot-machine-container">
			{#if firstSpin}
				<div class="slot-machine-item">
					<h1 class="slot-machine-item-title">Click here to spin!</h1>
				</div>
			{/if}

			{#each slotItems as slotItem}
				<div class="slot-machine-item">
					<h1 class="slot-machine-item-title">{slotItem}</h1>
				</div>
			{/each}
		</div>
	</div>

	{#if !firstSpin && result !== ''}
		<div class="uk-width-1-1 uk-flex uk-flex-center uk-margin-bottom">
			<span class="uk-width-auto" data-uk-icon="icon: arrow-down; ratio: 3" data-uk-tooltip="pos: left" title="Result"></span>
		</div>

		<div class="uk-text-center">
			<input bind:this={resultField} on:click={select(resultField)} class="uk-input uk-form-large" type="text" readonly value={result}>

			{#if answers[result] !== ''}
				<a class="uk-text-meta" href="https://twitter.com/{answers[result]}">by @{answers[result]}</a>
			{/if}
		</div>

		<button on:click={copyText(result)} class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-top">Copy</button>
	{/if}
</Tool>

<style lang="scss">
	$slot-machine-item-height: 80px;
	$slot-machine-spin-duration: 1s;

	.slot-machine {
		position: relative;
		width: 100%;
		overflow: hidden;
		height: $slot-machine-item-height;
		cursor: pointer;

		&-container {
			transition: top ease-in-out $slot-machine-spin-duration;
			position: absolute;
			width: 100%;
			top: 0;
		}

		&-item {
			height: $slot-machine-item-height;
			display: flex;
			justify-content: center;
			align-items: center;
			white-space: nowrap;

			&-title {
				margin: 0 !important;
				font-weight: bold;
				overflow: hidden;
				text-overflow: ellipsis;
				line-height: $slot-machine-item-height;
			}
		}
	}
</style>