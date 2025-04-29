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
            "border-2 fixed",
            className
        )
    }
>
<h4 id="container-title" class="absolute left-1 -top-3.5 bg-black px-1 animate-flicker-text border-0 animate-typing-fast overflow-hidden whitespace-nowrap"># {title}</h4>
    {@render children?.()}
</div>

<style>
	#container-box {
		view-transition-name: container-box;
	}

    #container-title {
        view-transition-name: container-title;
    }
</style>