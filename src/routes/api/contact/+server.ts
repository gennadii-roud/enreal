import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, platform }) => {
	try {
		const { date, email, name, location, message, packageDescription, packagePrice, packageCoverage, packageAddons } = await request.json();

		const apiKey = platform?.env?.RESEND_API_KEY;

		const apiUrl = 'https://api.resend.com/emails';

		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${apiKey}`,
			},
			body: JSON.stringify({
				from: 'noreply@resendenreal.com',
				to: 'gennady@roundstudio.com',
				reply_to: email,
				subject: `New event inquiry from ${name}`,
				html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Event date:</strong> ${date}</p>
          ${location ? `<p><strong>Venue / City:</strong> ${location}</p>` : ''}
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          ${packageDescription ? `<p><strong>Package:</strong> ${packageDescription}</p>` : ''}
          ${packageCoverage ? `<p><strong>Coverage:</strong> ${packageCoverage.number}h</p>` : ''}
          ${packagePrice ? `<p><strong>Total price:</strong> €${packagePrice}</p>` : ''}
          ${packageAddons?.length ? `<p><strong>Add-ons:</strong> ${packageAddons.map((f: { name: string }) => f.name).join(', ')}</p>` : ''}
        `,
			}),
		});
		// to: 'hi@enreal.studio',
		if (!response.ok) {
			const error = await response.text();
			return new Response(JSON.stringify({
				success: false,
				error: `Resend API error: ${error}`,
				statusCode: response.status
			}), {
				status: response.status,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err) {
		const msg = err instanceof Error ? err.message : 'Unknown error';
		return new Response(JSON.stringify({
			success: false,
			error: `Server error: ${msg}`
		}), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};