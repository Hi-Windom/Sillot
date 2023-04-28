import { productMap } from '../../../models/db';
import type { APIContext } from 'astro';

export function get({ params }: APIContext) {
	const id = Number(params.id);
	if (productMap.has(id)) {
		const product = productMap.get(id);

		return {
			body: JSON.stringify(product),
		};
	} else {
		return new Response(null, {
			status: 400,
			statusText: 'Not found',
		});
	}
}
