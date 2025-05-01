<script lang="ts">
import { page } from "$app/state";
import ContainerBox from "@/components/layout/container-box/container-box.svelte";
</script>

<ContainerBox
    class="w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-40 py-3 px-4 stack gap-4 "
    title="{page.status} - {page.error?.message}"
>
    <h1 class="h-full content-center text-center text-muted-foreground">
        {
            (page.status >= 300 && page.status < 400) ? '(ಠ_ಠ)'
                : (page.status >= 400 && page.status < 500) ? 'ヽ(。_°)ノ'
                : page.status >= 500 ? '(╯°□°)╯︵ ┻━┻' : ''
        }
    </h1>
</ContainerBox>