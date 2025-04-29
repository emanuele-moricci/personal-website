<script lang="ts">
import { page } from "$app/state";
import { m } from "@/paraglide/messages.js";
</script>

<a href="/" class="flex items-center">
	<img src="logo.svg" alt="logo" width="50px" />{' '}
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