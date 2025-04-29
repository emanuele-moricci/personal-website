<script lang="ts" module>
import type { BitsSpanAttributes, WithElementRef } from "bits-ui";

export type LoadingProps = WithElementRef<BitsSpanAttributes> & {};
</script>

<script lang="ts">
	import { cn } from "$lib/utils.js";

	let {
		class: className,
		ref = $bindable(null),
		...restProps
	}: LoadingProps = $props();

	let dots = $state("");

	$effect(() => {
		const id = setInterval(() => {
			if (dots.length < 3) {
				dots += ".";
			} else {
				dots = "";
			}
		}, 500);

		return () => {
			clearInterval(id);
		};
	});
</script>

<span bind:this={ref} class={cn('text-foreground', className)} {...restProps}>
	{dots}
</span>