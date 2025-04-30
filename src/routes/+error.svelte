<script lang="ts">
import { page } from "$app/state";
import ContainerBox from "@/components/layout/container-box/container-box.svelte";
</script>

<ContainerBox
    class="w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-4 pb-20 flex flex-col gap-4"
    title={
        (page.status >= 300 && page.status < 400) ? '(ಠ_ಠ)'
        : (page.status >= 400 && page.status < 500) ? 'ヽ(。_°)ノ'
        : page.status >= 500 ? '(╯°□°)╯︵ ┻━┻' : ''
    }
>
    <h1><b class="text-muted-foreground">{page.status}</b> - {page.error?.message}</h1>
</ContainerBox>