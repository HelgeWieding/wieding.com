<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
  @font-face {
    src: url('UbuntuMono-Bold.woff2') format('woff2'),
          url('UbuntuMono-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-family: 'Ubuntu Mono';
  }

	main {
		position: relative;
    font-family: 'Ubuntu Mono';
		max-width: 56em;
		background-color: black;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>