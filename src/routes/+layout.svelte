<script lang="ts">
import "../app.css";

import LocaleSwitcher from "@/components/layout/locale-switcher/locale-switcher.svelte";
import Marquee from "@/components/layout/marquee/marquee.svelte";

const title = " Hello, world! ";

let { children } = $props();
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="preload" as="font" href="/fonts/MonaspaceKrypton-Light.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="/fonts/MonaspaceKrypton-LightItalic.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="/fonts/MonaspaceKrypton-Regular.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="/fonts/MonaspaceKrypton-Italic.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="/fonts/MonaspaceKrypton-Medium.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="/fonts/MonaspaceKrypton-MediumItalic.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="/fonts/MonaspaceKrypton-SemiBold.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="/fonts/MonaspaceKrypton-SemiBoldItalic.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="/fonts/MonaspaceKrypton-Bold.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="/fonts/MonaspaceKrypton-BoldItalic.woff2" type="font/woff2" crossorigin="anonymous">
</svelte:head>

<div class="animate-crtv-flash"></div>

<LocaleSwitcher />
<Marquee {title} />

{@render children()}
