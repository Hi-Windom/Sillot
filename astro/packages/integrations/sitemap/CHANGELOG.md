# @astrojs/sitemap

## 1.2.2

### Patch Changes

- [#6658](https://github.com/withastro/astro/pull/6658) [`1ec1df126`](https://github.com/withastro/astro/commit/1ec1df12641290ec8b3a417a6284fd8d752c02bf) Thanks [@andremralves](https://github.com/andremralves)! - Fix sitemap generation with a base path

## 1.2.1

### Patch Changes

- [#6494](https://github.com/withastro/astro/pull/6494) [`a13e9d7e3`](https://github.com/withastro/astro/commit/a13e9d7e33baccf51e7d4815f99b481ad174bc57) Thanks [@Yan-Thomas](https://github.com/Yan-Thomas)! - Consistency improvements to several package descriptions

## 1.2.0

### Minor Changes

- [#6213](https://github.com/withastro/astro/pull/6213) [`afbbc4d5b`](https://github.com/withastro/astro/commit/afbbc4d5bfafc1779bac00b41c2a1cb1c90f2808) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updated compilation settings to disable downlevelling for Node 14

## 1.1.0

### Minor Changes

- [#6262](https://github.com/withastro/astro/pull/6262) [`4fcefa34f`](https://github.com/withastro/astro/commit/4fcefa34f979e23b8c48940b5a5da57fdabc32a4) Thanks [@vic1707](https://github.com/vic1707)! - update `ChangeFreq` to support typescript configurations with string literal or predefined value.

## 1.0.1

### Patch Changes

- [#5478](https://github.com/withastro/astro/pull/5478) [`1c7eef308`](https://github.com/withastro/astro/commit/1c7eef308e808aa5ed4662b53e67ec8d1b814d1f) Thanks [@nemo0](https://github.com/nemo0)! - Update READMEs for consistency

## 1.0.0

### Major Changes

- [`04ad44563`](https://github.com/withastro/astro/commit/04ad445632c67bdd60c1704e1e0dcbcaa27b9308) - > Astro v1.0 is out! Read the [official announcement post](https://astro.build/blog/astro-1/).

  **No breaking changes**. This package is now officially stable and compatible with `astro@1.0.0`!

## 0.3.0

### Minor Changes

- [#4015](https://github.com/withastro/astro/pull/4015) [`6fd161d76`](https://github.com/withastro/astro/commit/6fd161d7691cbf9d3ffa4646e46059dfd0940010) Thanks [@matthewp](https://github.com/matthewp)! - New `output` configuration option

  This change introduces a new "output target" configuration option (`output`). Setting the output target lets you decide the format of your final build, either:

  - `"static"` (default): A static site. Your final build will be a collection of static assets (HTML, CSS, JS) that you can deploy to any static site host.
  - `"server"`: A dynamic server application. Your final build will be an application that will run in a hosted server environment, generating HTML dynamically for different requests.

  If `output` is omitted from your config, the default value `"static"` will be used.

  When using the `"server"` output target, you must also include a runtime adapter via the `adapter` configuration. An adapter will _adapt_ your final build to run on the deployed platform of your choice (Netlify, Vercel, Node.js, Deno, etc).

  To migrate: No action is required for most users. If you currently define an `adapter`, you will need to also add `output: 'server'` to your config file to make it explicit that you are building a server. Here is an example of what that change would look like for someone deploying to Netlify:

  ```diff
  import { defineConfig } from 'astro/config';
  import netlify from '@astrojs/netlify/functions';

  export default defineConfig({
    adapter: netlify(),
  + output: 'server',
  });
  ```

### Patch Changes

- [#3978](https://github.com/withastro/astro/pull/3978) [`b37d7078a`](https://github.com/withastro/astro/commit/b37d7078a009869bf482912397a073dca490d3da) Thanks [@Chrissdroid](https://github.com/Chrissdroid)! - Update README to reflect `@astrojs/sitemap@0.2.0` changes

* [#4004](https://github.com/withastro/astro/pull/4004) [`ef9c4152b`](https://github.com/withastro/astro/commit/ef9c4152b2b399e25bf4e8aa7b37adcf6d0d8f17) Thanks [@sarah11918](https://github.com/sarah11918)! - [READMEs] removed "experimental" from astro add instructions

## 0.2.6

### Patch Changes

- [#3885](https://github.com/withastro/astro/pull/3885) [`bf5d1cc1e`](https://github.com/withastro/astro/commit/bf5d1cc1e71da38a14658c615e9481f2145cc6e7) Thanks [@delucis](https://github.com/delucis)! - Integration README fixes

## 0.2.5

### Patch Changes

- [#3865](https://github.com/withastro/astro/pull/3865) [`1f9e4857`](https://github.com/withastro/astro/commit/1f9e4857ff2b2cb7db89d619618cdf546cd3b3dc) Thanks [@delucis](https://github.com/delucis)! - Small README fixes

* [#3854](https://github.com/withastro/astro/pull/3854) [`b012ee55`](https://github.com/withastro/astro/commit/b012ee55b107dea0730286263b27d83e530fad5d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - [astro add] Support adapters and third party packages

## 0.2.4

### Patch Changes

- [#3677](https://github.com/withastro/astro/pull/3677) [`8045c8ad`](https://github.com/withastro/astro/commit/8045c8ade16fe4306448b7f98a4560ef0557d378) Thanks [@Jutanium](https://github.com/Jutanium)! - Update READMEs

## 0.2.3

### Patch Changes

- [#3723](https://github.com/withastro/astro/pull/3723) [`52f75369`](https://github.com/withastro/astro/commit/52f75369efe5a0a1b320478984c90b6727d52159) Thanks [@alextim](https://github.com/alextim)! - fix: if `serialize` function returns `undefined` for the passed entry, such entry will be excluded from sitemap

## 0.2.2

### Patch Changes

- [#3689](https://github.com/withastro/astro/pull/3689) [`3f8ee70e`](https://github.com/withastro/astro/commit/3f8ee70e2bc5b49c65a0444d9606232dadbc2fca) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add warning log for sitemap + SSR adapter, with suggestion to use customPages configuration option

## 0.2.1

### Patch Changes

- [#3661](https://github.com/withastro/astro/pull/3661) [`2ff11df4`](https://github.com/withastro/astro/commit/2ff11df438a6a901e72d1f1979c79deb0ad199f2) Thanks [@matthewp](https://github.com/matthewp)! - Fixes the last build

## 0.2.0

### Minor Changes

- [#3579](https://github.com/withastro/astro/pull/3579) [`1031c06f`](https://github.com/withastro/astro/commit/1031c06f9c6794d9ee6fb18c145ca5614e6f0583) Thanks [@alextim](https://github.com/alextim)! - # Key features

  - Split up your large sitemap into multiple sitemaps by custom limit.
  - Ability to add sitemap specific attributes such as `lastmod` etc.
  - Final output customization via JS function.
  - Localization support.
  - Reliability: all config options are validated.

  ## Important changes

  The integration always generates at least two files instead of one:

  - `sitemap-index.xml` - index file;
  - `sitemap-{i}.xml` - actual sitemap.

## 0.1.2

### Patch Changes

- [#3563](https://github.com/withastro/astro/pull/3563) [`09803129`](https://github.com/withastro/astro/commit/098031294f4e25619d0ae5a6ffc871c7401d98ae) Thanks [@alextim](https://github.com/alextim)! - Remove unused dependency

## 0.1.1

### Patch Changes

- [#3553](https://github.com/withastro/astro/pull/3553) [`c601ce59`](https://github.com/withastro/astro/commit/c601ce59b5740e7ff48c6575a6168d6a2408f7a3) Thanks [@caioferrarezi](https://github.com/caioferrarezi)! - Prevent sitemap URLs with trimmed paths

## 0.1.0

### Minor Changes

- [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update config options to respect [RFC0019](https://github.com/withastro/rfcs/blob/main/proposals/0019-config-finalization.md)

### Patch Changes

- [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add new sitemap configuration options:
  - `filter`: filter pages to include in your sitemap
  - `canonicalURL`: override your astro.config `site` with a custom base URL

## 0.0.2

### Patch Changes

- [#2885](https://github.com/withastro/astro/pull/2885) [`6b004363`](https://github.com/withastro/astro/commit/6b004363f99f27e581d1e2d53a2ebff39d7afb8a) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add README across Astro built-in integrations

* [#2847](https://github.com/withastro/astro/pull/2847) [`3b621f7a`](https://github.com/withastro/astro/commit/3b621f7a613b45983b090794fa7c015f23ed6140) Thanks [@tony-sull](https://github.com/tony-sull)! - Adds keywords to the official integrations to support discoverability on Astro's Integrations site

## 0.0.2-next.0

### Patch Changes

- [#2847](https://github.com/withastro/astro/pull/2847) [`3b621f7a`](https://github.com/withastro/astro/commit/3b621f7a613b45983b090794fa7c015f23ed6140) Thanks [@tony-sull](https://github.com/tony-sull)! - Adds keywords to the official integrations to support discoverability on Astro's Integrations site
