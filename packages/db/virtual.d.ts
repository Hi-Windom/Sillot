declare module 'astro:db' {
	type RuntimeConfig = typeof import('./dist/_internal/runtime/config.js');

	export const db: import('./dist/_internal/runtime/config.js').LibSQLDatabase;
	export const dbUrl: string;

	export const sql: RuntimeConfig['sql'];
	export const NOW: RuntimeConfig['NOW'];
	export const TRUE: RuntimeConfig['TRUE'];
	export const FALSE: RuntimeConfig['FALSE'];
	export const column: RuntimeConfig['column'];
	export const defineDb: RuntimeConfig['defineDb'];
	export const defineTable: RuntimeConfig['defineTable'];

	export const eq: RuntimeConfig['eq'];
	export const gt: RuntimeConfig['gt'];
	export const gte: RuntimeConfig['gte'];
	export const lt: RuntimeConfig['lt'];
	export const lte: RuntimeConfig['lte'];
	export const ne: RuntimeConfig['ne'];
	export const isNull: RuntimeConfig['isNull'];
	export const isNotNull: RuntimeConfig['isNotNull'];
	export const inArray: RuntimeConfig['inArray'];
	export const notInArray: RuntimeConfig['notInArray'];
	export const exists: RuntimeConfig['exists'];
	export const notExists: RuntimeConfig['notExists'];
	export const between: RuntimeConfig['between'];
	export const notBetween: RuntimeConfig['notBetween'];
	export const like: RuntimeConfig['like'];
	export const notIlike: RuntimeConfig['notIlike'];
	export const not: RuntimeConfig['not'];
	export const asc: RuntimeConfig['asc'];
	export const desc: RuntimeConfig['desc'];
	export const and: RuntimeConfig['and'];
	export const or: RuntimeConfig['or'];
}
