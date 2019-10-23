<template>
	<div id="app">
		<Header />
		<Body />
		<Footer />
	</div>
</template>

<script>
	import Header from './layouts/Header'
	import Body from './layouts/Body'
	import Footer from './layouts/Footer'

	export default {
		components: {
			Header,
			Body,
			Footer
		}
	}
</script>