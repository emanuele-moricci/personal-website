<script lang="ts">
import "../app.css";

import LocaleSwitcher from "@/components/layout/locale-switcher/locale-switcher.svelte";

let { children } = $props();
</script>

<LocaleSwitcher />

{@render children()}
