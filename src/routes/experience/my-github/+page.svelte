<script lang="ts">
import { cn } from "$lib/utils.js";
import { m } from "@/paraglide/messages.js";
import { Eye, GitFork, Star } from "@lucide/svelte";

let { data } = $props();
</script>

<div class="flex flex-col gap-2">
    {#each data.repos as repo, i (repo.id)}
        {#if i === 0}
            {m.github_pubcode()}
        {/if}
            <a
                href={repo.html_url}
                class="group flex flex-col py-2 px-4 border border-secondary hover:border-foreground text-primary hover:text-background hover:bg-foreground"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div class="flex justify-between items-center">
                    <h3 class="underline-offset-4 group-hover:underline">{repo.name}</h3>
                    <p class="text-xs text-muted-foreground">
                        {m.github_createdon({ when: repo.created_at })}
                    </p>
                </div>
                <p class="text-muted-foreground">{repo.description}</p>
                <div class="flex items-center gap-4">
                    <span class={cn("flex items-center gap-1", repo.stargazers_count > 0 ? 'text-accent' : 'text-muted-foreground')}>
                        <Star class="size-4" />
                        {repo.stargazers_count}
                    </span>
                    <span class={cn("flex items-center gap-1", repo.forks_count > 0 ? 'text-accent' : 'text-muted-foreground')}>
                        <GitFork class="size-4" />
                        {repo.forks_count}
                    </span>
                    <span class={cn("flex items-center gap-1", repo.watchers > 0 ? 'text-accent' : 'text-muted-foreground')}>
                        <Eye class="size-4" />
                        {repo.watchers}
                    </span>
                </div>
            </a>
            {#if i === 0}
             <hr class="my-2" />
            {/if}
    {/each}
    <span class="mt-2">{m.github_theresmore()} <span class="text-muted-foreground">(▀̿‿ ▀̿)</span></span>
</div>