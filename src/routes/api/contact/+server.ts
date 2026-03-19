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
				from: 'onboarding@resend.dev',
				to: 'alex@roudstudio.com',
				reply_to: email,
				subject: `New wedding inquiry from ${name}`,
				html: `
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Wedding date:</strong> ${date}</p>
					${location ? `<p><strong>Venue / City:</strong> ${location}</p>` : ''}
					${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
					${packageDescription ? `<p><strong>Package:</strong> ${packageDescription}</p>` : ''}
				  ${packageCoverage ? `<p><strong>Coverage:</strong> ${packageCoverage.number}h</p>` : ''}
					${packagePrice ? `<p><strong>Total price:</strong> €${packagePrice}</p>` : ''}
				  ${packageAddons?.length ? `<p><strong>Add-ons:</strong> ${packageAddons.map((f: { name: string }) => f.name).join(', ')}</p>` : ''}
				`,
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