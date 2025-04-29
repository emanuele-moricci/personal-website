<script lang="ts" module>
import type { WithElementRef } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";

export type ContainerBoxProps = WithElementRef<
	HTMLAttributes<HTMLDivElement>
> & {
	title: string;
};
</script>

<script lang="ts">
    import { cn } from "$lib/utils.js";

let {
    class: className,
    title,
    children
}: ContainerBoxProps = $props();
</script>

<div
    id="container-box"
    class={
        cn(
            "border-2 fixed delay-[0.15s] opacity-0 animate-terminal-open",
            className
        )
    }
>
<h4 class="absolute left-1 -top-3.5 bg-black px-1 animate-flicker-text border-0"># {title}</h4>
    {@render children?.()}
</div>

<style>
	#container-box {
		view-transition-name: container-box;
	}
</style>