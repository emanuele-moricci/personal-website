import { GITHUB_TOKEN } from "$env/static/private";
import { PUBLIC_GITHUB_USERNAME } from "$env/static/public";
import { getLocale } from "$lib/paraglide/runtime";

interface Repo {
	id: number;
	name: string;
	html_url: string;
	description: string | null;
	created_at: string;
	stargazers_count: number;
	forks_count: number;
	watchers: number;
}

export async function load() {
	const locale = getLocale();

	const endpoint = `https://api.github.com/users/${PUBLIC_GITHUB_USERNAME}/repos`;
	const res = await fetch(endpoint, {
		headers: {
			...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
		},
	});

	if (!res.ok) {
		throw new Error(`Couldn't load repos: ${res.status} ${res.statusText}`);
	}

	const repos: Repo[] = await res.json();

	return {
		repos: repos
			.filter((repo) => !repo.name.toLowerCase().includes("emanuele-moricci"))
			.sort((a, b) => {
				if (a.name.toLowerCase().includes("personal-website")) return -1;
				if (b.name.toLowerCase().includes("personal-website")) return 1;
				return 0;
			})
			.map((repo) => ({
				id: repo.id,
				name: repo.name,
				html_url: repo.html_url,
				description: repo.description,
				created_at: new Date(repo.created_at).toLocaleDateString(locale, {
					year: "numeric",
					month: "long",
					day: "numeric",
				}),
				stargazers_count: repo.stargazers_count,
				forks_count: repo.forks_count,
				watchers: repo.watchers,
			})),
	};
}
