import { PUBLIC_API_URL } from '$env/static/public';

export default async function graphql(query: string): Promise<any> {
  const response = await fetch(PUBLIC_API_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query,
		})
	});

	const json = await response.json();

	if (json.errors) {
		throw new Error(JSON.stringify(json.errors));
	}

  return json;
}
