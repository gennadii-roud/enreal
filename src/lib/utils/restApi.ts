import { PUBLIC_REST_API_URL, PUBLIC_ORIGIN } from '$env/static/public';
import trimSlashes from '$lib/utils/trimSlashes';

export default async function restApi(url: string): Promise<any> {
  const response = await fetch(`${trimSlashes(PUBLIC_REST_API_URL)}/${trimSlashes(url)}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	let text = await response.text();

	if (text) {
		// Remove domain from links
		const domainToReplace = `${trimSlashes(PUBLIC_ORIGIN)}/`;
		text = text.replaceAll(domainToReplace, '/');
		text = text.replaceAll(domainToReplace.replaceAll('/', '\/'), '\/');
		text = text.replaceAll(domainToReplace.replaceAll('/', '\\\/'), '\\\/');
	}

	const json = JSON.parse(text);

	if (json.errors) {
		throw new Error(JSON.stringify(json.errors));
	}

  return json;
}
