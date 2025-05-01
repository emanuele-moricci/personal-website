<script lang="ts">
import ContainerBox from "@/components/layout/container-box/container-box.svelte";
import { Button } from "@/components/ui/button/index.js";
import { m } from "@/paraglide/messages.js";

let { children } = $props();
</script>

<ContainerBox class="top-20 left-10 bottom-10 right-10 grid grid-cols-[1fr_3fr] divide-x" title={m.about_title()}>
    <div id="tab-buttons" class="pt-5 p-2 stack gap-2">
        <Button
            data-sveltekit-preload-data="hover"
            href="/experience"
            variant="outline"
        >
            {m.experience_whoami()}
        </Button>
        <Button
            data-sveltekit-preload-data="hover"
            href="/experience/work-studies"
            variant="outline"
        >
            {m.experience_workstudy()}
        </Button>
        <Button
            data-sveltekit-preload-data="hover"
            href="/experience/technologies"
            variant="outline"
        >
            {m.experience_technologies()}
        </Button>
        <Button
            data-sveltekit-preload-data="hover"
            href="/experience/my-github"
            variant="outline"
        >
            {m.experience_pubgit()}
        </Button>
    </div>
    <div id="tab-content" class="relative overflow-auto py-2 px-4 stack">
        {@render children()}
    </div>
</ContainerBox>