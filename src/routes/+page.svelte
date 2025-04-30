<script lang="ts">
import { m } from "@/paraglide/messages.js";

import { Button } from "$lib/components/ui/button/index.js";
import ContainerBox from "@/components/layout/container-box/container-box.svelte";
import { GitBranch, Github, Lightbulb, Linkedin } from "@lucide/svelte";
</script>

<ContainerBox class="w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-4 pb-20" title={m.home_welcome()}>
    <p class="text-muted-foreground mb-3">## {m.home_myNameIs()}</p>
    <pre class="text-xs font-mono whitespace-pre m-2 mb-5 animate-glow">
$$$$$$$$\                                                       $$\
$$  _____|                                                      $$ |
$$ |      $$$$$$\$$$$\   $$$$$$\  $$$$$$$\  $$\   $$\  $$$$$$\  $$ | $$$$$$\
$$$$$\    $$  _$$  _$$\  \____$$\ $$  __$$\ $$ |  $$ |$$  __$$\ $$ |$$  __$$\
$$  __|   $$ / $$ / $$ | $$$$$$$ |$$ |  $$ |$$ |  $$ |$$$$$$$$ |$$ |$$$$$$$$ |
$$ |      $$ | $$ | $$ |$$  __$$ |$$ |  $$ |$$ |  $$ |$$   ____|$$ |$$   ____|
$$$$$$$$\ $$ | $$ | $$ |\$$$$$$$ |$$ |  $$ |\$$$$$$  |\$$$$$$$\ $$ |\$$$$$$$\
\________|\__| \__| \__| \_______|\__|  \__| \______/  \_______|\__| \_______|
    </pre>
    <div class="flex items-center">
        <p class="text-justify w-0 !delay-[0.25s] animate-typing-slow text-sm">
            {m.home_hoAmI()}
            <span class="border-l border-4 ml-0.5 animate-caret-blink"></span>
        </p>
    </div>

    <hr class="mt-5" />

    <div class="mt-6 border px-3 py-2 flex items-center">
        <h5>### <span class="bg-secondary p-1">{m.home_aboutMe()}</span></h5>
        <div class="ml-auto flex justify-end items-center gap-4">
            <Button data-sveltekit-preload-data="hover" href="/experience" variant="ghost" class="p-1"><Lightbulb />{m.home_whatIKnow()}</Button>
            <span class="height-full border"></span>
            <Button href="https://github.com/emanuele-moricci" target="_blank" variant="ghost" class="p-1"><Github />Github</Button>
            <Button href="https://www.linkedin.com/in/emanuele-moricci-777b44173/" target="_blank" variant="ghost" class="p-1"><Linkedin />Linkedin</Button>
        </div>
    </div>

    <div class="absolute bottom-3 left-0 right-0 flex justify-between items-center">
        <span class="flex items-center">
            <span class="bg-destructive py-1 px-2">
                NORMAL
            </span>
            <span class="bg-secondary py-1 px-2">
                <span class="flex items-center gap-2"><GitBranch size={16} />main</span>
            </span>
            <span class="ml-2">
                routes/+page.svelte
            </span>
        </span>
        <span class="flex items-center">
            <span class="mr-2">
                utf-8
            </span>
            <span class="bg-secondary py-1 px-2">
                Top
            </span>
            <span class="bg-destructive py-1 px-2">
                1:1
            </span>
        </span>
    </div>
</ContainerBox>