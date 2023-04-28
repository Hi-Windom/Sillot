# @astrojs/webapi

## 2.1.0

### Minor Changes

- [#6213](https://github.com/withastro/astro/pull/6213) [`afbbc4d5b`](https://github.com/withastro/astro/commit/afbbc4d5bfafc1779bac00b41c2a1cb1c90f2808) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updated compilation settings to disable downlevelling for Node 14

## 2.0.3

### Patch Changes

- [#6413](https://github.com/withastro/astro/pull/6413) [`0abd1d3e4`](https://github.com/withastro/astro/commit/0abd1d3e42cf7bf5efb8c41f37e011b933fb0629) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Use undici's FormData instead of a polyfill

## 2.0.2

### Patch Changes

- [#6355](https://github.com/withastro/astro/pull/6355) [`5aa6580f7`](https://github.com/withastro/astro/commit/5aa6580f775405a4443835bf7eb81f0c65e5aed6) Thanks [@ematipico](https://github.com/ematipico)! - Update `undici` to v5.20.0

## 2.0.1

### Patch Changes

- [#6282](https://github.com/withastro/astro/pull/6282) [`bb1801013`](https://github.com/withastro/astro/commit/bb1801013708d9efdbbcebc53a564ac375bf4b26) Thanks [@matthewp](https://github.com/matthewp)! - Temporarily pin undici to fix Header regression

## 2.0.0

### Major Changes

- [#5814](https://github.com/withastro/astro/pull/5814) [`c55fbcb8e`](https://github.com/withastro/astro/commit/c55fbcb8edca1fe118a44f68c9f9436a4719d171) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Moved target to Node 16. Removed polyfills for `AbortController`, `AbortSignal`, `atob`, `btoa`, `Object.hasOwn`, `Promise.all`, `Array.at` and `String.replaceAll`

- [#5782](https://github.com/withastro/astro/pull/5782) [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Replace `node-fetch`'s polyfill with `undici`.

  Since `undici` does not support it, this change also removes custom support for the `file:` protocol

### Patch Changes

- [#5930](https://github.com/withastro/astro/pull/5930) [`46ecd5de3`](https://github.com/withastro/astro/commit/46ecd5de34df619e2ee73ccea39a57acd37bc0b8) Thanks [@h3y6e](https://github.com/h3y6e)! - Update magic-string from 0.25.9 to 0.27.0

## 2.0.0-beta.1

<details>
<summary>See changes in 2.0.0-beta.1</summary>

### Patch Changes

- [#5930](https://github.com/withastro/astro/pull/5930) [`46ecd5de3`](https://github.com/withastro/astro/commit/46ecd5de34df619e2ee73ccea39a57acd37bc0b8) Thanks [@h3y6e](https://github.com/h3y6e)! - Update magic-string from 0.25.9 to 0.27.0

</details>

## 2.0.0-beta.0

<details>
<summary>See changes in 2.0.0-beta.0</summary>

### Major Changes

- [#5814](https://github.com/withastro/astro/pull/5814) [`c55fbcb8e`](https://github.com/withastro/astro/commit/c55fbcb8edca1fe118a44f68c9f9436a4719d171) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Moved target to Node 16. Removed polyfills for `AbortController`, `AbortSignal`, `atob`, `btoa`, `Object.hasOwn`, `Promise.all`, `Array.at` and `String.replaceAll`

- [#5782](https://github.com/withastro/astro/pull/5782) [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Replace `node-fetch`'s polyfill with `undici`.

  Since `undici` does not support it, this change also removes custom support for the `file:` protocol

</details>

## 1.1.1

### Patch Changes

- [#5235](https://github.com/withastro/astro/pull/5235) [`b6a478f37`](https://github.com/withastro/astro/commit/b6a478f37648491321077750bfca7bddf3cafadd) Thanks [@ba55ie](https://github.com/ba55ie)! - Fix CustomElementRegistry for Node SSR Adapter

## 1.1.0

### Minor Changes

- [#4676](https://github.com/withastro/astro/pull/4676) [`5e4c5252b`](https://github.com/withastro/astro/commit/5e4c5252bd80cbaf6a7ee4d4503ece007664410f) Thanks [@zicklag](https://github.com/zicklag)! - Add HTTP Proxy Support to `fetch` Polyfill

## 1.0.0

### Major Changes

- [`04ad44563`](https://github.com/withastro/astro/commit/04ad445632c67bdd60c1704e1e0dcbcaa27b9308) - > Astro v1.0 is out! Read the [official announcement post](https://astro.build/blog/astro-1/).

  **No breaking changes**. This package is now officially stable and compatible with `astro@1.0.0`!

## 0.12.0

### Minor Changes

- [#3417](https://github.com/withastro/astro/pull/3417) [`4de53ecc`](https://github.com/withastro/astro/commit/4de53eccef346bed843b491b7ab93987d7d85655) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: support FormData object on fetch body

## 0.11.1

### Patch Changes

- [#3095](https://github.com/withastro/astro/pull/3095) [`5acf77dd`](https://github.com/withastro/astro/commit/5acf77dd22be95e33ff838383a2c1790f484e380) Thanks [@matthewp](https://github.com/matthewp)! - Fixes rendering of "undefined" on custom element children
