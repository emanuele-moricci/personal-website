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
import ConnectorBlock from "@/components/utilities/connectors/connector-block.svelte";

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
    <ConnectorBlock />
    <div class="stack">
        {@render children?.()}
        <div class="stack gap-2 flex-wrap">
            <span class="stack">
                <h4 class="h4-muted">{m.tech_usedInWork()}</h4>
                <p class="{usedInWork ? 'text-accent' : 'text-destructive'}">{usedInWork}</p>
            </span>
            <span class="stack">
                <h4 class="h4-muted">{m.tech_name()}</h4>
                <p>{name}</p>
            </span>
            <span class="stack">
                <h4 class="h4-muted">{m.tech_learnedIn()}</h4>
                <p>{learnedIn}</p>
            </span>
            {#if subTechnologies.length > 0}
            <span class="stack">
                <h4 class="h4-muted">{m.tech_subTech()}</h4>
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