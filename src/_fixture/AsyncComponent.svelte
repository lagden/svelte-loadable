<script>
import {onMount} from 'svelte'

export let customProp = undefined

onMount(() => {
	console.log('I am the on create method of the async component c:')
})
</script>

I'm an async component!
{#if customProp}
	<br />
	With custom props \o/
{/if}
