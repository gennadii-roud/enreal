import { PUBLIC_ORIGIN } from '$env/static/public';
import trimSlashes from '$lib/utils/trimSlashes';

export const prerender = true;

const origin: string = trimSlashes(PUBLIC_ORIGIN);

function getFullLink(relativeLink: string): string {
	return `${origin}/${trimSlashes(relativeLink)}`;
}

const pages = [
	'/',
	'/about',
	'/brand-events',
	'/conference',
	'/diplomatic-events',
	'/fashion-shows',
	'/portfolio',
	'/prices'
];

export const GET = async () => {
	const urls = pages.map((page) => ({
		loc: getFullLink(page)
	}));

	return new Response(
		`
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
    >
      ${urls
				.map(
					(url) =>
						`<url>
          <loc>${url.loc}</loc>
        </url>`
				)
				.join('')}
    </urlset>`
			.trim()
			.replace(/\s+/g, ' ')
			.replaceAll('> <', '><'),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
};
