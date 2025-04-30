<script lang="ts">
import { base } from "$app/paths";
import { page } from "$app/state";
import { m } from "@/paraglide/messages.js";
</script>

<a href="/" class="flex items-center gap-1">
	<img src="{base}/logo.gif" alt="logo" width="35px" />{' '}
	<span
		id="home-title"
		style:--opacity={page.url.pathname === "/" ? 0 : 1}
		class={{ 'animate-typing-fast overflow-hidden whitespace-nowrap': page.url.pathname !== '/' }}
	>
		{m.home_title_short()}
	</span>
</a>

<style>
	#home-title {
		view-transition-name: home-title;

		opacity: var(--opacity);
	}
</style>