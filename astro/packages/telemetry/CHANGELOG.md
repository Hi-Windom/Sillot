# @astrojs/telemetry

## 2.1.0

### Minor Changes

- [#6213](https://github.com/withastro/astro/pull/6213) [`afbbc4d5b`](https://github.com/withastro/astro/commit/afbbc4d5bfafc1779bac00b41c2a1cb1c90f2808) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updated compilation settings to disable downlevelling for Node 14

## 2.0.1

### Patch Changes

- [#6355](https://github.com/withastro/astro/pull/6355) [`5aa6580f7`](https://github.com/withastro/astro/commit/5aa6580f775405a4443835bf7eb81f0c65e5aed6) Thanks [@ematipico](https://github.com/ematipico)! - Update `undici` to v5.20.0

## 2.0.0

### Major Changes

- [#5782](https://github.com/withastro/astro/pull/5782) [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 14. Minimum supported Node version is now >=16.12.0

## 2.0.0-beta.0

<details>
<summary>See changes in 2.0.0-beta.0</summary>

### Major Changes

- [#5782](https://github.com/withastro/astro/pull/5782) [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 14. Minimum supported Node version is now >=16.12.0

</details>

## 1.0.1

### Patch Changes

- [#4842](https://github.com/withastro/astro/pull/4842) [`812658ad2`](https://github.com/withastro/astro/commit/812658ad2ab3732a99e35c4fd903e302e723db46) Thanks [@bluwy](https://github.com/bluwy)! - Add missing dependencies, support strict dependency installation (e.g. pnpm)

## 1.0.0

### Major Changes

- [`04ad44563`](https://github.com/withastro/astro/commit/04ad445632c67bdd60c1704e1e0dcbcaa27b9308) - > Astro v1.0 is out! Read the [official announcement post](https://astro.build/blog/astro-1/).

  **No breaking changes**. This package is now officially stable and compatible with `astro@1.0.0`!

## 0.4.1

### Patch Changes

- [#3937](https://github.com/withastro/astro/pull/3937) [`31f9c0bf0`](https://github.com/withastro/astro/commit/31f9c0bf029ffa4b470e620f2c32e1370643e81e) Thanks [@delucis](https://github.com/delucis)! - Roll back supported Node engines

## 0.4.0

### Minor Changes

- [#3914](https://github.com/withastro/astro/pull/3914) [`b48767985`](https://github.com/withastro/astro/commit/b48767985359bd359df8071324952ea5f2bc0d86) Thanks [@ran-dall](https://github.com/ran-dall)! - Rollback supported `node@16` version. Minimum versions are now `node@14.20.0` or `node@16.14.0`.

## 0.3.1

### Patch Changes

- [#3898](https://github.com/withastro/astro/pull/3898) [`c4f6fdf37`](https://github.com/withastro/astro/commit/c4f6fdf3722b9bc2192cab735498f4e0c30c982e) Thanks [@leader22](https://github.com/leader22)! - Remove unused dependencies

## 0.3.0

### Minor Changes

- [#3871](https://github.com/withastro/astro/pull/3871) [`1cc5b7890`](https://github.com/withastro/astro/commit/1cc5b78905633608e5b07ad291f916f54e67feb1) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update supported `node` versions. Minimum versions are now `node@14.20.0` or `node@16.16.0`.

## 0.2.5

### Patch Changes

- [#3847](https://github.com/withastro/astro/pull/3847) [`eedb32c7`](https://github.com/withastro/astro/commit/eedb32c79716a8e04acd46cb2c74c5af112e016f) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Detect package manager, improve types

## 0.2.4

### Patch Changes

- [#3822](https://github.com/withastro/astro/pull/3822) [`e4b2dca1`](https://github.com/withastro/astro/commit/e4b2dca1f3f03bd951f1d623695631cebf638c67) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix an issue where handled error output was piped to the user

## 0.2.3

### Patch Changes

- [#3677](https://github.com/withastro/astro/pull/3677) [`8045c8ad`](https://github.com/withastro/astro/commit/8045c8ade16fe4306448b7f98a4560ef0557d378) Thanks [@Jutanium](https://github.com/Jutanium)! - Update READMEs

## 0.2.2

### Patch Changes

- [#3750](https://github.com/withastro/astro/pull/3750) [`dd176ca5`](https://github.com/withastro/astro/commit/dd176ca58d9ce8ab757075491568a014c0943de2) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add basic error reporting to astro telemetry

## 0.2.1

### Patch Changes

- [#3753](https://github.com/withastro/astro/pull/3753) [`cabd9dcc`](https://github.com/withastro/astro/commit/cabd9dcc8079b55bf16bf05da53bd36f41b7f766) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix issue where project id fallback was not getting hashed

## 0.2.0

### Minor Changes

- [#3713](https://github.com/withastro/astro/pull/3713) [`ebd7e7ad`](https://github.com/withastro/astro/commit/ebd7e7ad81e5245deffa331f11e5196ff1b21d84) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update telemetry to support a more anonymized project id. `anonymousProjectId` is now hashed based on anonymous git data instead of your git remote URL.

## 0.1.3

### Patch Changes

- [#3614](https://github.com/withastro/astro/pull/3614) [`9c8a7c0b`](https://github.com/withastro/astro/commit/9c8a7c0b09db2fb6925929d4efe01d5ececbf08e) Thanks [@okikio](https://github.com/okikio)! - Fix telemetry crashing astro build/dev when using optional integrations

  Telemetry will now ignore falsy integration values but will gather a count of how many integrations out of the total are now optional integrations

* [#3614](https://github.com/withastro/astro/pull/3614) [`9c8a7c0b`](https://github.com/withastro/astro/commit/9c8a7c0b09db2fb6925929d4efe01d5ececbf08e) Thanks [@okikio](https://github.com/okikio)! - Add's optional integrations field to `@astrojs/telemetry`'s payload

## 0.1.2

### Patch Changes

- [#3299](https://github.com/withastro/astro/pull/3299) [`8021998b`](https://github.com/withastro/astro/commit/8021998bb6011e31aa736abeafa4f1cf8f5a180c) Thanks [@matthewp](https://github.com/matthewp)! - Update to telemetry to include AstroConfig keys used

## 0.1.1

### Patch Changes

- [#3276](https://github.com/withastro/astro/pull/3276) [`6d5ef41b`](https://github.com/withastro/astro/commit/6d5ef41b1ed77ccc67f71e91adeab63a50a494a8) Thanks [@FredKSchott](https://github.com/FredKSchott)! - fix "cannot exit astro" bug

## 0.1.0

### Minor Changes

- [#3256](https://github.com/withastro/astro/pull/3256) [`f76038ac`](https://github.com/withastro/astro/commit/f76038ac7db986a13701fd316e53142b52e011c8) Thanks [@matthewp](https://github.com/matthewp)! - Adds anonymous telemetry data to the cli
