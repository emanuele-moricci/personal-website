<script lang="ts">
import "../app.css";

import { m } from "@/paraglide/messages.js";

import HomeLogo from "@/components/layout/home-logo/home-logo.svelte";
import LocaleSwitcher from "@/components/layout/locale-switcher/locale-switcher.svelte";
import Marquee from "@/components/layout/marquee/marquee.svelte";
import TransitionManager from "@/components/layout/transition-manager/transition-manager.svelte";

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

<Marquee {title} />
<TransitionManager />

<div class="animate-crtv-flash"></div>

<div class="w-full absolute top-2 left-4 right-4 flex items-center justify-between opacity-0 animate-quick-in delay-200">
    <HomeLogo />
    <LocaleSwitcher />
</div>


{@render children()}