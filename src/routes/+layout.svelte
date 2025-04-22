<script lang="ts">
import "../app.css";

import { m } from "@/paraglide/messages.js";
import {
	type Locale,
	getLocale,
	locales,
	setLocale,
} from "@/paraglide/runtime.js";

import { Combobox } from "$lib/components/ui/combobox/index.js";

let { children } = $props();
</script>

<Combobox
    placeholder={m.layout_selectLng()}
    options={locales.map((locale) => ({
        value: locale,
        label: m[`locale_${locale}`](),
    }))}
    defaultValue={getLocale()}
    onchange={newLocale => {
        if (newLocale !== getLocale()) {
            setLocale(newLocale as Locale);
        }
    }}
/>

{@render children()}
