export interface GHRepo {
	id: number;
	name: string;
	html_url: string;
	description: string | null;
	created_at: string;
	stargazers_count: number;
	forks_count: number;
	watchers: number;
}
