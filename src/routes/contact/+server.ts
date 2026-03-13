import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { date, email, name, location, message }: RequestContactData = await request.json();

		const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				personalizations: [
					{
						to: [{ email: 'gennady@roudstudio.com', name: 'etats.studio' }],
						reply_to: { email, name },
					},
				],
				from: {
					email: 'no-reply@etats.studio',
					name: 'etats.studio',
				},
				subject: `New wedding inquiry from ${name}`,
				content: [
					{
						type: 'text/html',
						value: `
							<h2>New Inquiry</h2>
							<p><strong>Name:</strong> ${name}</p>
							<p><strong>Email:</strong> ${email}</p>
							<p><strong>Wedding date:</strong> ${date}</p>
							${location ? `<p><strong>Venue / City:</strong> ${location}</p>` : ''}
							${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
						`,
					},
				],
			}),
		});

		if (!response.ok) {
			const error = await response.text();
			return new Response('Failed to send email: ' + error, { status: response.status });
		}

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err) {
		const msg = err instanceof Error ? err.message : 'Unknown error';
		return new Response('Server error: ' + msg, { status: 500 });
	}
};