<script lang="ts">
import ContainerBox from "@/components/layout/container-box/container-box.svelte";
import { Button } from "@/components/ui/button/index.js";
import { m } from "@/paraglide/messages.js";
import {
	BriefcaseBusiness,
	Github,
	MessageCircleQuestion,
	MonitorCog,
} from "@lucide/svelte";

let { children } = $props();
</script>

<ContainerBox class="absolute inset-10 top-16" title={m.about_title()}>
    <div class="grid grid-cols-1 md:grid-cols-[1fr_3fr] h-full">
        <div id="tab-buttons" class="flex flex-row overflow-x-auto justify-between md:justify-start whitespace-nowrap pb-2 md:flex-col md:overflow-auto md:whitespace-normal md:pb-0 gap-2 p-4 border-b md:border-r">
            <Button data-sveltekit-preload-data="hover" href="/experience" variant="outline" class="w-full">
                <MessageCircleQuestion class="md:hidden" />
                <span class="truncate hidden md:block">{m.experience_whoami()}</span>
            </Button>
            <Button data-sveltekit-preload-data="hover" href="/experience/work-studies" variant="outline" class="w-full">
                <BriefcaseBusiness class="md:hidden" />
                <span class="truncate hidden md:block">{m.experience_workstudy()}</span>
            </Button>
            <Button data-sveltekit-preload-data="hover" href="/experience/technologies" variant="outline" class="w-full">
                <MonitorCog class="md:hidden" />
                <span class="truncate hidden md:block">{m.experience_technologies()}</span>
            </Button>
            <Button data-sveltekit-preload-data="hover" href="/experience/my-github" variant="outline" class="w-full">
                <Github class="md:hidden" />
                <span class="truncate hidden md:block">{m.experience_pubgit()}</span>
            </Button>
        </div>
        <div id="tab-content" class="relative overflow-auto py-2 px-4">
            {@render children()}
        </div>
    </div>
</ContainerBox>