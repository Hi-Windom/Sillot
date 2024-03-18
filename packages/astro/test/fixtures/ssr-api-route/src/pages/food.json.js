
export function GET() {
	return new Response(
		JSON.stringify([
			{ name: 'lettuce' },
			{ name: 'broccoli' },
			{ name: 'pizza' }
		])
	)
}

export async function POST({ params, request }) {
	const body = await request.text();
	return new Response(body === `some data` ? `ok` : `not ok`, {
		status: 200,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
