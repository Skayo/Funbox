<script>
	import Foot from '../components/layout/Footer.svelte';
	import Nav from '../components/layout/Nav.svelte';

	//export let segment;
</script>

<style lang="scss" global>
	@import "./styles/global.scss";
</style>

<main>
	<header>
		<Nav />
	</header>

	<div id="content" data-uk-height-viewport="expand: true">
		<div class="uk-container uk-container-expand">
			<slot></slot>
		</div>
	</div>

	<footer>
		<Foot />
	</footer>
</main>