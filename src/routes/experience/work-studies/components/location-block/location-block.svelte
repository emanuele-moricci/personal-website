<script lang="ts" module>
import type { BitsDivAttributes, WithElementRef } from "bits-ui";

export type LocationBlockProps = WithElementRef<BitsDivAttributes> & {
	isCurrentPosition?: boolean;
	name: string;
	time: string;
	titles: string[];
	technologies?: string[];
	milestones?: string[];
};
</script>

<script lang="ts">
import { m } from "@/paraglide/messages.js";
import { cn } from "@/utils";

let {
		class: className,
		ref = $bindable(null),
		children,
        isCurrentPosition = false,
        name,
        time,
        titles,
        technologies = [],
        milestones = [],
		...restProps
	}: LocationBlockProps = $props();
</script>

<div bind:this={ref} class={cn("group flex gap-4", className)} {...restProps}>
    <div class="border border-muted-foreground h-auto w-4 shrink-0 group-hover:border-foreground group-hover:bg-secondary"></div>
    <div class="flex flex-col">
        {@render children?.()}
        <div class="flex flex-col gap-2 flex-wrap">
            <span class="flex flex-col">
                <h4 class="text-sm text-muted-foreground">{m.workstudy_currentPosition()}</h4>
                <p class="text-{isCurrentPosition ? 'accent' : 'destructive'}">{isCurrentPosition}</p>
            </span>
            <span class="flex flex-col">
                <h4 class="text-sm text-muted-foreground">{m.workstudy_name()}</h4>
                <p>{name}</p>
            </span>
            <span class="flex flex-col">
                <h4 class="text-sm text-muted-foreground">{m.workstudy_time()}</h4>
                <p>{time}</p>
            </span>
            <span class="flex flex-col">
                <h4 class="text-sm text-muted-foreground">{m.workstudy_titles()}</h4>
                <p>
                    {titles.join(", ")}
                </p>
            </span>
            {#if technologies.length > 0}
            <span class="flex flex-col">
                <h4 class="text-sm text-muted-foreground">{m.workstudy_technologies()}</h4>
                <ul class="flex gap-2 flex-wrap">
                    {#each technologies as technology}
                        <li class="border p-0.5">{technology}</li>
                    {/each}
                </ul>
            </span>
            {/if}
            {#if milestones.length > 0}
            <span class="flex flex-col">
                <h4 class="text-sm text-muted-foreground">{m.workstudy_milestones()}</h4>
                <ul class="list-[square] ml-4">
                    {#each milestones as milestone}
                        <li>{milestone}</li>
                    {/each}
                </ul>
            </span>
            {/if}
        </div>
    </div>
</div>