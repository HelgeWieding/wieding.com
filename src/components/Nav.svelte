<script>
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

	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		font-family: 'Ubuntu Mono';
		padding: 0 1em;
		display: flex;
		justify-content: center;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li>
	</ul>
</nav>
