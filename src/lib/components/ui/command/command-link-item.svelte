<script lang="ts">
import { cn } from "$lib/utils.js";
import { Command as CommandPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	...restProps
}: CommandPrimitive.LinkItemProps = $props();
</script>

<CommandPrimitive.LinkItem
	class={cn(
		"aria-selected:bg-secondary aria-selected:text-foreground relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	bind:ref
	{...restProps}
/>
