<script lang="ts" module>
export type MarqueeProps = { title: string };
</script>

<script lang="ts">
    let { title }: MarqueeProps = $props();

$effect(() => {
	let charPos = 0;

	const interval = setInterval(() => {
		document.title = title.slice(charPos) + title.slice(0, charPos);
		charPos = (charPos + 1) % title.length;
	}, 250);

	return () => clearInterval(interval);
});
</script>
