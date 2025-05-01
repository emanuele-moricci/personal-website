import { paraglideMiddleware } from "$lib/paraglide/server";
import type { Handle } from "@sveltejs/kit";

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) =>
				html.replace("%paraglide.lang%", locale),
		});
	});

export const handle: Handle = ({ event, resolve }) => {
	if (event.url.pathname === "/healthcheck") {
		return new Response("ok");
	}

	return handleParaglide({ event, resolve });
};
