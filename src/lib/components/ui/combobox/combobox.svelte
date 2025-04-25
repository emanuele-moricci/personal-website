<script lang="ts" module>
import type { WithElementRef } from "bits-ui";
import type { HTMLButtonAttributes } from "svelte/elements";

export type ComboboxProps = Omit<
	WithElementRef<HTMLButtonAttributes>,
	"onchange"
> & {
	placeholder: string;
	options: {
		value: string;
		label: string;
	}[];
	defaultValue?: string;
	onchange: (v: string) => void;
};
</script>

<script lang="ts">
import { Button } from "$lib/components/ui/button/index.js";
import * as Command from "$lib/components/ui/command/index.js";
import * as Popover from "$lib/components/ui/popover/index.js";
import { cn } from "$lib/utils.js";
import Check from "@lucide/svelte/icons/check";
import ChevronsUpDown from "@lucide/svelte/icons/chevrons-up-down";
import { tick } from "svelte";

let {
      ref = $bindable(null),
		class: className,
      placeholder = "Select an option",
		options = [],
      defaultValue = "",
      onchange = () => {},
	}: ComboboxProps = $props();

let open = $state(false);
let value = $state(defaultValue);
// biome-ignore lint/style/noNonNullAssertion: Never seen this in my damn life 😮
let triggerRef = $state<HTMLButtonElement>(null!);

const selectedValue = $derived(
	options.find((f) => f.value === value)?.label,
);

// We want to refocus the trigger button when the user selects
// an item from the list so users can continue navigating the
// rest of the form with the keyboard.
function closeAndFocusTrigger() {
	open = false;
	tick().then(() => {
		triggerRef.focus();
	});
}
</script>

   <Popover.Root bind:open>
    <Popover.Trigger bind:ref={triggerRef}>
     {#snippet child({ props })}
      <Button
       variant="outline"
       class={cn("justify-between", className)}
       {...props}
       role="combobox"
       aria-expanded={open}
      >
       {selectedValue || placeholder}
       <ChevronsUpDown class="opacity-50" />
      </Button>
     {/snippet}
    </Popover.Trigger>
    <Popover.Content class="w-[125px] p-0">
     <Command.Root>
      <Command.List>
       <Command.Group>
        {#each options as option (option.value)}
         <Command.Item
          value={option.value}
          onSelect={() => {
           value = option.value;
           closeAndFocusTrigger();
           onchange(value);
          }}
         >
          <Check
           class={cn(value !== option.value && "text-transparent")}
          />
          {option.label}
         </Command.Item>
        {/each}
       </Command.Group>
      </Command.List>
     </Command.Root>
    </Popover.Content>
   </Popover.Root>