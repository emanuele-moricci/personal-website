<script lang="ts">
import { cn } from "$lib/utils.js";
import { Command as CommandPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	value = $bindable(""),
	class: className,
	...restProps
}: CommandPrimitive.RootProps = $props();
</script>

<CommandPrimitive.Root
	class={cn(
		"bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden",
		className
	)}
	bind:value
	bind:ref
	{...restProps}
/>
