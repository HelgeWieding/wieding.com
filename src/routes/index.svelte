<!-- import { Terminal } from '../components/Terminal.svelte'; -->

<style>
	.wrapper {
		display: flex;
		justify-content: center;
	}
	.item {
		width: 25%;
		/* flex: 2; */
	}
</style>

<script>
	import Terminal from '../components/Terminal';
	import Nav from '../components/Nav';

let text2 = 'We love to code. We are team of experienced devleopers and designers. Loving web tech blah bleh. We are really awesome. Put super groovy funky marketing text here!';
</script>

<svelte:head>
	<title>Wieding.com Yeah!</title>
</svelte:head>

<div>
	<Terminal text={text2} speed={20} ></Terminal>
</div>
