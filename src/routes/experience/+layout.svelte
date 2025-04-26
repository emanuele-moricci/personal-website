<script lang="ts">
import { m } from "@/paraglide/messages.js";

let { children } = $props();
</script>

<div class="border-2 fixed top-20 left-10 bottom-10 right-10 delay-[0.15s] opacity-0 animate-terminal-open grid grid-cols-[1fr_3fr] divide-x" style="transform-origin: center;">
    <h4 class="absolute left-1 -top-3.5 bg-black px-1 animate-flicker-text border-0"># {m.about_title()}</h4>
    <div class="tab-buttons">

    </div>
    <div class="tab-content">
        {@render children()}
    </div>
</div>