<script lang="ts">
import { m } from "@/paraglide/messages.js";
import {
	type Locale,
	getLocale,
	locales,
	setLocale,
} from "@/paraglide/runtime.js";

import { Combobox } from "$lib/components/ui/combobox/index.js";
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
    class="p-3"
/>



