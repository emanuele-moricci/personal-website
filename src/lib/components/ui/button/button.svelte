<script lang="ts" module>
import type { WithElementRef } from "bits-ui";
import type {
	HTMLAnchorAttributes,
	HTMLButtonAttributes,
} from "svelte/elements";
import { type VariantProps, tv } from "tailwind-variants";

export const buttonVariants = tv({
	base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	variants: {
		variant: {
			default: "bg-foreground text-background hover:bg-foreground/90",
			destructive:
				"bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline:
				"border-input bg-background hover:bg-foreground/70 hover:text-background border",
			outline_ghost: "border-input bg-background",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-secondary hover:text-foreground",
			link: "text-primary underline-offset-4 hover:underline",
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 px-3",
			lg: "h-11 px-8",
			icon: "h-10 w-10",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
	WithElementRef<HTMLAnchorAttributes> & {
		variant?: ButtonVariant;
		size?: ButtonSize;

		isloading?: boolean;
	};
</script>

<script lang="ts">
	import { navigating, page } from '$app/state';
	import { cn } from "$lib/utils.js";

	import { Loading } from "$lib/components/ui/loading/index.js";

	let {
		class: className,
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		type = "button",
		isloading = false,
		children,
		...restProps
	}: ButtonProps = $props();

	let isNavigatingToHref = $derived(Boolean(href) && navigating.to?.route.id === href);
	let isActiveHref = $derived(Boolean(href) && page.url.pathname === href);
</script>

{#if href}
	<a
		bind:this={ref}
		class={cn('relative', buttonVariants({ variant: isActiveHref ? 'default' : variant, size }), className)}
		{href}
		data-navigatingto={isNavigatingToHref}
		data-active={isActiveHref}
		{...restProps}
	>
		{@render children?.()}

		{@render loading(isloading || isNavigatingToHref)}
	</a>
{:else}
	<button
		bind:this={ref}
		class={cn('relative', buttonVariants({ variant, size }), className)}
		{type}
		{...restProps}
	>
		{@render children?.()}

		{@render loading(isloading || isNavigatingToHref)}
	</button>
{/if}

{#snippet loading(isloading: boolean)}
	{#if isloading}
		<div class="absolute inset-0 bg-secondary z-10 pointer-events-none"></div>
		<div class="absolute inset-0 horizontal-row justify-center z-20 cursor-progress">
			<Loading />
		</div>
	{/if}
{/snippet}