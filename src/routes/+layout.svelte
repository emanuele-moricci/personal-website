<script lang="ts">
import "../app.css";

import LocaleSwitcher from "@/components/layout/locale-switcher/locale-switcher.svelte";
import Marquee from "@/components/layout/marquee/marquee.svelte";

const title = " Hello, world! ";

let { children } = $props();
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="animate-crtv-flash"></div>

<LocaleSwitcher />
<Marquee {title} />

{@render children()}
