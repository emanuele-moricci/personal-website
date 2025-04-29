<script lang="ts">
import ContainerBox from "@/components/layout/container-box/container-box.svelte";
import { m } from "@/paraglide/messages.js";

let { children } = $props();
</script>

<ContainerBox class="top-20 left-10 bottom-10 right-10 grid grid-cols-[1fr_3fr] divide-x" title={m.about_title()}>
    <div class="tab-buttons">

    </div>
    <div class="tab-content">
        {@render children()}
    </div>
</ContainerBox>