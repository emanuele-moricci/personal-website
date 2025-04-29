<script lang="ts">
import { page } from "$app/state";

import ContainerBox from "@/components/layout/container-box/container-box.svelte";
console.log(page);
</script>

<ContainerBox class="w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-4 pb-20 flex flex-col gap-4" title={`${page.status}`}>
    <h1>{page.error?.message}</h1>
    <span class="text-muted-foreground">ヽ(。_°)ノ</span>
</ContainerBox>