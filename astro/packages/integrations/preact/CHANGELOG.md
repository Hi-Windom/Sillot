# @astrojs/preact

## 2.1.0

### Minor Changes

- [#6213](https://github.com/withastro/astro/pull/6213) [`afbbc4d5b`](https://github.com/withastro/astro/commit/afbbc4d5bfafc1779bac00b41c2a1cb1c90f2808) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updated compilation settings to disable downlevelling for Node 14

## 2.0.3

### Patch Changes

- [#6215](https://github.com/withastro/astro/pull/6215) [`a7f18051b`](https://github.com/withastro/astro/commit/a7f18051b118b4f263ed9093ab17ed7eec0e4fd5) Thanks [@matthewp](https://github.com/matthewp)! - Prevent hydration mismatches in Preact

## 2.0.2

### Patch Changes

- [#6108](https://github.com/withastro/astro/pull/6108) [`f9babc38b`](https://github.com/withastro/astro/commit/f9babc38b48049f73a3a282f48d8cb26969cb0a0) Thanks [@matthewp](https://github.com/matthewp)! - Upgrade babel dependency to fix security vuln

## 2.0.1

### Patch Changes

- [#5478](https://github.com/withastro/astro/pull/5478) [`1c7eef308`](https://github.com/withastro/astro/commit/1c7eef308e808aa5ed4662b53e67ec8d1b814d1f) Thanks [@nemo0](https://github.com/nemo0)! - Update READMEs for consistency

## 2.0.0

### Major Changes

- [#5782](https://github.com/withastro/astro/pull/5782) [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 14. Minimum supported Node version is now >=16.12.0

## 2.0.0-beta.0

<details>
<summary>See changes in 2.0.0-beta.0</summary>

### Major Changes

- [#5782](https://github.com/withastro/astro/pull/5782) [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 14. Minimum supported Node version is now >=16.12.0

</details>

## 1.2.0

### Minor Changes

- [#5015](https://github.com/withastro/astro/pull/5015) [`b1964e9e1`](https://github.com/withastro/astro/commit/b1964e9e1b7f9178036e266b89d3c8b9cbffd1c6) Thanks [@matthewp](https://github.com/matthewp)! - Shared state in Preact components with signals

  This makes it possible to share client state between Preact islands via signals.

  For example, you can create a signals in an Astro component and then pass it to multiple islands:

  ```astro
  ---
  // Component Imports
  import Counter from '../components/Counter';
  import { signal } from '@preact/signals';
  const count = signal(0);
  ---

  <Count count={count} />
  <Count count={count} />
  ```

## 1.1.1

### Patch Changes

- [#4842](https://github.com/withastro/astro/pull/4842) [`812658ad2`](https://github.com/withastro/astro/commit/812658ad2ab3732a99e35c4fd903e302e723db46) Thanks [@bluwy](https://github.com/bluwy)! - Add missing dependencies, support strict dependency installation (e.g. pnpm)

## 1.1.0

### Minor Changes

- [#4515](https://github.com/withastro/astro/pull/4515) [`999250d65`](https://github.com/withastro/astro/commit/999250d651996c2833b747b84447aa4e97c91a38) Thanks [@marvinhagemeister](https://github.com/marvinhagemeister)! - Automatically set up Preact DevTools bridge when running `astro dev`.

## 1.0.2

### Patch Changes

- [#4267](https://github.com/withastro/astro/pull/4267) [`5b1facfe2`](https://github.com/withastro/astro/commit/5b1facfe291b998c0c6814293b18df211a8f3cd3) Thanks [@bluwy](https://github.com/bluwy)! - README: Clarify `compat` docs

## 1.0.1

### Patch Changes

- [#4213](https://github.com/withastro/astro/pull/4213) [`f8e385339`](https://github.com/withastro/astro/commit/f8e3853394c2f2f48fac4b5eb2284e1960e59a13) Thanks [@bluwy](https://github.com/bluwy)! - Fix compat support for libraries

## 1.0.0

### Major Changes

- [`04ad44563`](https://github.com/withastro/astro/commit/04ad445632c67bdd60c1704e1e0dcbcaa27b9308) - > Astro v1.0 is out! Read the [official announcement post](https://astro.build/blog/astro-1/).

  **No breaking changes**. This package is now officially stable and compatible with `astro@1.0.0`!

## 0.5.2

### Patch Changes

- [#3937](https://github.com/withastro/astro/pull/3937) [`31f9c0bf0`](https://github.com/withastro/astro/commit/31f9c0bf029ffa4b470e620f2c32e1370643e81e) Thanks [@delucis](https://github.com/delucis)! - Roll back supported Node engines

## 0.5.1

### Patch Changes

- [#3928](https://github.com/withastro/astro/pull/3928) [`d6dfef0ca`](https://github.com/withastro/astro/commit/d6dfef0caa25f4effd0ed548d92ff48ce7a39ab2) Thanks [@matthewp](https://github.com/matthewp)! - Removes @babel/core peerDependency warning

## 0.5.0

### Minor Changes

- [#3914](https://github.com/withastro/astro/pull/3914) [`b48767985`](https://github.com/withastro/astro/commit/b48767985359bd359df8071324952ea5f2bc0d86) Thanks [@ran-dall](https://github.com/ran-dall)! - Rollback supported `node@16` version. Minimum versions are now `node@14.20.0` or `node@16.14.0`.

## 0.4.1

### Patch Changes

- [#3885](https://github.com/withastro/astro/pull/3885) [`bf5d1cc1e`](https://github.com/withastro/astro/commit/bf5d1cc1e71da38a14658c615e9481f2145cc6e7) Thanks [@delucis](https://github.com/delucis)! - Integration README fixes

## 0.4.0

### Minor Changes

- [#3871](https://github.com/withastro/astro/pull/3871) [`1cc5b7890`](https://github.com/withastro/astro/commit/1cc5b78905633608e5b07ad291f916f54e67feb1) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update supported `node` versions. Minimum versions are now `node@14.20.0` or `node@16.16.0`.

## 0.3.2

### Patch Changes

- [#3854](https://github.com/withastro/astro/pull/3854) [`b012ee55`](https://github.com/withastro/astro/commit/b012ee55b107dea0730286263b27d83e530fad5d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - [astro add] Support adapters and third party packages

## 0.3.1

### Patch Changes

- [#3769](https://github.com/withastro/astro/pull/3769) [`b934ab5d`](https://github.com/withastro/astro/commit/b934ab5d860aa3adeec56a9c395f629ee7252ca4) Thanks [@hippotastic](https://github.com/hippotastic)! - Fix "Invalid hook call" warning

## 0.3.0

### Minor Changes

- [#3712](https://github.com/withastro/astro/pull/3712) [`e3fdc9b4`](https://github.com/withastro/astro/commit/e3fdc9b4030b96e815c133a388a7625b7e8e4a2e) Thanks [@delucis](https://github.com/delucis)! - Add support for enabling `preact/compat` to Preact renderer

  To use `preact/compat` to render React components, users can now set `compat` to `true` when using the Preact integration:

  ```js
  integrations: [
    preact({ compat: true }),
  ],
  ```

## 0.2.0

### Minor Changes

- [#3652](https://github.com/withastro/astro/pull/3652) [`7373d61c`](https://github.com/withastro/astro/commit/7373d61cdcaedd64bf5fd60521b157cfa4343558) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add support for passing named slots from `.astro` => framework components.

  Each `slot` is be passed as a top-level prop. For example:

  ```jsx
  // From .astro
  <Component>
    <h2 slot="title">Hello world!</h2>
    <h2 slot="slot-with-dash">Dash</h2>
    <div>Default</div>
  </Component>;

  // For .jsx
  export default function Component({ title, slotWithDash, children }) {
    return (
      <>
        <div id="title">{title}</div>
        <div id="slot-with-dash">{slotWithDash}</div>
        <div id="main">{children}</div>
      </>
    );
  }
  ```

## 0.1.3

### Patch Changes

- [#3455](https://github.com/withastro/astro/pull/3455) [`e9a77d86`](https://github.com/withastro/astro/commit/e9a77d861907adccfa75811f9aaa555f186d78f8) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update client hydration to check for `ssr` attribute. Requires `astro@^1.0.0-beta.36`.

## 0.1.2

### Patch Changes

- [#3166](https://github.com/withastro/astro/pull/3166) [`70263cf7`](https://github.com/withastro/astro/commit/70263cf7481b11e42152c422acc6cfe90fe10ad2) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix integration to use updateConfig rather than returning a partial config object

## 0.1.1

### Patch Changes

- [`815d62f1`](https://github.com/withastro/astro/commit/815d62f151a36fef7d09590d4962ca71bda61b32) Thanks [@FredKSchott](https://github.com/FredKSchott)! - no changes.

## 0.1.0

### Minor Changes

- [#2979](https://github.com/withastro/astro/pull/2979) [`9d7a4b59`](https://github.com/withastro/astro/commit/9d7a4b59b53f8cb274266f5036d1cef841750252) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Welcome to the Astro v1.0.0 Beta! Read the [official announcement](https://astro.build/blog/astro-1-beta-release/) for more details.

## 0.0.2

### Patch Changes

- [#2885](https://github.com/withastro/astro/pull/2885) [`6b004363`](https://github.com/withastro/astro/commit/6b004363f99f27e581d1e2d53a2ebff39d7afb8a) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add README across Astro built-in integrations

* [#2847](https://github.com/withastro/astro/pull/2847) [`3b621f7a`](https://github.com/withastro/astro/commit/3b621f7a613b45983b090794fa7c015f23ed6140) Thanks [@tony-sull](https://github.com/tony-sull)! - Adds keywords to the official integrations to support discoverability on Astro's Integrations site

- [#2872](https://github.com/withastro/astro/pull/2872) [`098f6f6b`](https://github.com/withastro/astro/commit/098f6f6b06396441c576dc689d8552629ef260e1) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix `isSelfAccepting` errors when using the Preact integration with the Astro dev server

## 0.0.2-next.1

### Patch Changes

- [#2872](https://github.com/withastro/astro/pull/2872) [`098f6f6b`](https://github.com/withastro/astro/commit/098f6f6b06396441c576dc689d8552629ef260e1) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix `isSelfAccepting` errors when using the Preact integration with the Astro dev server

## 0.0.2-next.0

### Patch Changes

- [#2847](https://github.com/withastro/astro/pull/2847) [`3b621f7a`](https://github.com/withastro/astro/commit/3b621f7a613b45983b090794fa7c015f23ed6140) Thanks [@tony-sull](https://github.com/tony-sull)! - Adds keywords to the official integrations to support discoverability on Astro's Integrations site
