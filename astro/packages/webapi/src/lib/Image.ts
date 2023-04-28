import { HTMLImageElement } from './HTMLImageElement'
import * as _ from './utils'

export function Image() {
	// @ts-expect-error
	_.INTERNALS.set(this, {
		attributes: {},
		localName: 'img',
		innerHTML: '',
		shadowRoot: null,
		shadowInit: null,
	})
}

Image.prototype = HTMLImageElement.prototype
