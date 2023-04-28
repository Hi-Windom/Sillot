import type { ZodError } from 'zod';
import { AstroError, AstroErrorData, type ErrorWithMetadata } from '../core/errors/index.js';
import { getErrorDataByCode } from '../core/errors/utils.js';

const EVENT_ERROR = 'ASTRO_CLI_ERROR';

interface ErrorEventPayload {
	code: number | undefined;
	name: string;
	isFatal: boolean;
	plugin?: string | undefined;
	cliCommand: string;
	anonymousMessageHint?: string | undefined;
}

interface ConfigErrorEventPayload extends ErrorEventPayload {
	isConfig: true;
	configErrorPaths: string[];
}

/**
 * This regex will grab a small snippet at the start of an error message.
 * This was designed to stop capturing at the first sign of some non-message
 * content like a filename, filepath, or any other code-specific value.
 * We also trim this value even further to just a few words.
 *
 * This is only used for errors that do not come from us so we can get a basic
 * and anonymous idea of what the error is about.
 */
const ANONYMIZE_MESSAGE_REGEX = /^(\w| )+/;
function anonymizeErrorMessage(msg: string): string | undefined {
	const matchedMessage = msg.match(ANONYMIZE_MESSAGE_REGEX);
	if (!matchedMessage || !matchedMessage[0]) {
		return undefined;
	}
	return matchedMessage[0].trim().substring(0, 20);
}

export function eventConfigError({
	err,
	cmd,
	isFatal,
}: {
	err: ZodError;
	cmd: string;
	isFatal: boolean;
}): { eventName: string; payload: ConfigErrorEventPayload }[] {
	const payload: ConfigErrorEventPayload = {
		code: AstroErrorData.UnknownConfigError.code,
		name: 'ZodError',
		isFatal,
		isConfig: true,
		cliCommand: cmd,
		configErrorPaths: err.issues.map((issue) => issue.path.join('.')),
	};
	return [{ eventName: EVENT_ERROR, payload }];
}

export function eventError({
	cmd,
	err,
	isFatal,
}: {
	err: ErrorWithMetadata;
	cmd: string;
	isFatal: boolean;
}): { eventName: string; payload: ErrorEventPayload }[] {
	const errorData =
		AstroError.is(err) && err.errorCode ? getErrorDataByCode(err.errorCode)?.data : undefined;

	const payload: ErrorEventPayload = {
		code: err.code || err.errorCode || AstroErrorData.UnknownError.code,
		name: err.name,
		plugin: err.plugin,
		cliCommand: cmd,
		isFatal: isFatal,
		anonymousMessageHint:
			errorData && errorData.message
				? getSafeErrorMessage(errorData.message)
				: anonymizeErrorMessage(err.message),
	};
	return [{ eventName: EVENT_ERROR, payload }];
}

/**
 * Safely get the error message from an error, even if it's a function.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function getSafeErrorMessage(message: string | Function): string {
	if (typeof message === 'string') {
		return message;
	} else {
		return String.raw({
			raw: extractStringFromFunction(message.toString()),
		});
	}

	function extractStringFromFunction(func: string) {
		const arrowIndex = func.indexOf('=>') + '=>'.length;

		return func
			.slice(arrowIndex)
			.trim()
			.slice(1, -1)
			.replace(
				/\${([^}]+)}/gm,
				(str, match1) =>
					`${match1
						.split(/\.?(?=[A-Z])/)
						.join('_')
						.toUpperCase()}`
			)
			.replace(/\\`/g, '`');
	}
}
