<script lang="ts" module>
import type { BitsDivAttributes, WithElementRef } from "bits-ui";

export type TechBlockProps = WithElementRef<BitsDivAttributes> & {
	usedInWork?: boolean;
	name: string;
	learnedIn: string;
	subTechnologies?: string[];
};
</script>

<script lang="ts">
import { m } from "@/paraglide/messages.js";
import { cn } from "@/utils";

let {
		class: className,
		ref = $bindable(null),
		children,
        usedInWork = false,
        name,
        learnedIn,
        subTechnologies = [],
		...restProps
	}: TechBlockProps = $props();
</script>

<div bind:this={ref} class={cn("group flex gap-4", className)} {...restProps}>
    <div class="border border-muted-foreground h-auto w-4 shrink-0 group-hover:border-foreground group-hover:bg-secondary"></div>
    <div class="flex flex-col">
        {@render children?.()}
        <div class="flex flex-col gap-2 flex-wrap">
            <span class="flex flex-col">
                <h4 class="text-sm text-muted-foreground">{m.tech_usedInWork()}</h4>
                <p class="text-{usedInWork ? 'accent' : 'destructive'}">{usedInWork}</p>
            </span>
            <span class="flex flex-col">
                <h4 class="text-sm text-muted-foreground">{m.tech_name()}</h4>
                <p>{name}</p>
            </span>
            <span class="flex flex-col">
                <h4 class="text-sm text-muted-foreground">{m.tech_learnedIn()}</h4>
                <p>{learnedIn}</p>
            </span>
            {#if subTechnologies.length > 0}
            <span class="flex flex-col">
                <h4 class="text-sm text-muted-foreground">{m.tech_subTech()}</h4>
                <ul class="flex gap-2 flex-wrap">
                    {#each subTechnologies as technology}
                        <li class="border p-0.5">{technology}</li>
                    {/each}
                </ul>
            </span>
            {/if}
        </div>
    </div>
</div>