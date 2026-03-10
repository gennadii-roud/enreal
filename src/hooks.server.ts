import pageSpinner from './pageSpinner.html?raw';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const lang = 'en';

	return resolve(
		{ ...event },
		{
			transformPageChunk: ({ html }) =>
				html.replace('%lang%', lang).replace('%spinner%', SPA_MODE ? pageSpinner : ''),
			preload: () => false
		}
	);
};
