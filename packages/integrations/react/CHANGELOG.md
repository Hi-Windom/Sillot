# @astrojs/react

## 3.1.0

### Minor Changes

- [#10136](https://github.com/withastro/astro/pull/10136) [`9cd84bd19b92fb43ae48809f575ee12ebd43ea8f`](https://github.com/withastro/astro/commit/9cd84bd19b92fb43ae48809f575ee12ebd43ea8f) Thanks [@matthewp](https://github.com/matthewp)! - Changes the default behavior of `transition:persist` to update the props of persisted islands upon navigation. Also adds a new view transitions option `transition:persist-props` (default: `false`) to prevent props from updating as needed.

  Islands which have the `transition:persist` property to keep their state when using the `<ViewTransitions />` router will now have their props updated upon navigation. This is useful in cases where the component relies on page-specific props, such as the current page title, which should update upon navigation.

  For example, the component below is set to persist across navigation. This component receives a `products` props and might have some internal state, such as which filters are applied:

  ```astro
  <ProductListing transition:persist products={products} />
  ```

  Upon navigation, this component persists, but the desired `products` might change, for example if you are visiting a category of products, or you are performing a search.

  Previously the props would not change on navigation, and your island would have to handle updating them externally, such as with API calls.

  With this change the props are now updated, while still preserving state.

  You can override this new default behavior on a per-component basis using `transition:persist-props=true` to persist both props and state during navigation:

  ```astro
  <ProductListing transition:persist-props="true" products={products} />
  ```

## 3.0.10

### Patch Changes

- [#9849](https://github.com/withastro/astro/pull/9849) [`20ca3154fb37049cbcd51b06d9fa2ef25ac25a36`](https://github.com/withastro/astro/commit/20ca3154fb37049cbcd51b06d9fa2ef25ac25a36) Thanks [@StandardGage](https://github.com/StandardGage)! - Fixes an issue where passing void elements (img, etc..) did not work with the `experimentalReactChildren` option enabled

## 3.0.9

### Patch Changes

- [#9482](https://github.com/withastro/astro/pull/9482) [`72b26daf694b213918f02d0fcbf90ab5b7ebc31f`](https://github.com/withastro/astro/commit/72b26daf694b213918f02d0fcbf90ab5b7ebc31f) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improves compatability with the [Qwik adapter](https://github.com/QwikDev/astro)

- [#9479](https://github.com/withastro/astro/pull/9479) [`1baf0b0d3cbd0564954c2366a7278794fad6726e`](https://github.com/withastro/astro/commit/1baf0b0d3cbd0564954c2366a7278794fad6726e) Thanks [@sarah11918](https://github.com/sarah11918)! - Updates README

## 3.0.8

### Patch Changes

- [#9403](https://github.com/withastro/astro/pull/9403) [`7eb9fe8a7`](https://github.com/withastro/astro/commit/7eb9fe8a717dd2b66b1d541e1aa4d3eb5d959ddf) Thanks [@knpwrs](https://github.com/knpwrs)! - Prevents unsupported `forwardRef` components created by Preact from being rendered by React

- [#9452](https://github.com/withastro/astro/pull/9452) [`e83b5095f`](https://github.com/withastro/astro/commit/e83b5095f164f48ba40fc715a805fc66a3e39dcf) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Upgrades vite to latest

## 3.0.7

### Patch Changes

- [#9122](https://github.com/withastro/astro/pull/9122) [`1c48ed286`](https://github.com/withastro/astro/commit/1c48ed286538ab9e354eca4e4dcd7c6385c96721) Thanks [@bluwy](https://github.com/bluwy)! - Adds Vite 5 support. There are no breaking changes from Astro. Check the [Vite migration guide](https://vitejs.dev/guide/migration.html) for details of the breaking changes from Vite instead.

## 3.0.7-beta.0

### Patch Changes

- [#9122](https://github.com/withastro/astro/pull/9122) [`1c48ed286`](https://github.com/withastro/astro/commit/1c48ed286538ab9e354eca4e4dcd7c6385c96721) Thanks [@bluwy](https://github.com/bluwy)! - Adds Vite 5 support. There are no breaking changes from Astro. Check the [Vite migration guide](https://vitejs.dev/guide/migration.html) for details of the breaking changes from Vite instead.

## 3.0.6

### Patch Changes

- [#9141](https://github.com/withastro/astro/pull/9141) [`af43fb517`](https://github.com/withastro/astro/commit/af43fb51726fa2242cec03cb019fa4fa4a4403ef) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where slotting self-closing elements (img, br, hr) into react components with `experimentalReactChildren` enabled led to an error.

## 3.0.5

### Patch Changes

- [#8925](https://github.com/withastro/astro/pull/8925) [`ac5633b8f`](https://github.com/withastro/astro/commit/ac5633b8f615fe90ea419e00c5c771d00783a6e2) Thanks [@brandonsdebt](https://github.com/brandonsdebt)! - Uses `node:stream` during server rendering for compatibility with Cloudflare

## 3.0.4

### Patch Changes

- [#8898](https://github.com/withastro/astro/pull/8898) [`4dee38711`](https://github.com/withastro/astro/commit/4dee38711cbf83efb5e12fbfa8e69e2495c49acf) Thanks [@matthewp](https://github.com/matthewp)! - Fixes client hydration in islands when using experimentalReactChildren

## 3.0.3

### Patch Changes

- [#8737](https://github.com/withastro/astro/pull/8737) [`6f60da805`](https://github.com/withastro/astro/commit/6f60da805e0014bc50dd07bef972e91c73560c3c) Thanks [@ematipico](https://github.com/ematipico)! - Add provenance statement when publishing the library from CI

## 3.0.2

### Patch Changes

- [#8455](https://github.com/withastro/astro/pull/8455) [`85fe213fe`](https://github.com/withastro/astro/commit/85fe213fe0e8de3227ac80a41119800c374214f6) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `experimentalReactChildren` behavior to support void tags

## 3.0.1

### Patch Changes

- [#8428](https://github.com/withastro/astro/pull/8428) [`67e834859`](https://github.com/withastro/astro/commit/67e83485949cf21de62831731111413abf57718c) Thanks [@matthewp](https://github.com/matthewp)! - Fix React dev mode using a base

## 3.0.0

### Major Changes

- [#8188](https://github.com/withastro/astro/pull/8188) [`d0679a666`](https://github.com/withastro/astro/commit/d0679a666f37da0fca396d42b9b32bbb25d29312) Thanks [@ematipico](https://github.com/ematipico)! - Remove support for Node 16. The lowest supported version by Astro and all integrations is now v18.14.1. As a reminder, Node 16 will be deprecated on the 11th September 2023.

- [#8179](https://github.com/withastro/astro/pull/8179) [`6011d52d3`](https://github.com/withastro/astro/commit/6011d52d38e43c3e3d52bc3bc41a60e36061b7b7) Thanks [@matthewp](https://github.com/matthewp)! - Astro 3.0 Release Candidate

- [#7924](https://github.com/withastro/astro/pull/7924) [`519a1c4e8`](https://github.com/withastro/astro/commit/519a1c4e8407c7abcb8d879b67a9f4b960652cae) Thanks [@matthewp](https://github.com/matthewp)! - Support for React Refresh

  The React integration now fully supports React Refresh and is backed by `@vitejs/plugin-react`.

  Also included in this change are new `include` and `exclude` config options. Use these if you want to use React alongside another JSX framework; include specifies files to be compiled for React and `exclude` does the opposite.

### Patch Changes

- [#8228](https://github.com/withastro/astro/pull/8228) [`4bd2fac8d`](https://github.com/withastro/astro/commit/4bd2fac8da4efb7c532d8920077df1f61d6e1953) Thanks [@bluwy](https://github.com/bluwy)! - Publish missing `vnode-children.js` file

- [#8264](https://github.com/withastro/astro/pull/8264) [`1f58a7a1b`](https://github.com/withastro/astro/commit/1f58a7a1bea6888868b689dac94801d554319b02) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Automatically unmount islands when `astro:unmount` is fired

- Updated dependencies [[`d0679a666`](https://github.com/withastro/astro/commit/d0679a666f37da0fca396d42b9b32bbb25d29312), [`2aa6d8ace`](https://github.com/withastro/astro/commit/2aa6d8ace398a41c2dec5473521d758816b08191), [`6011d52d3`](https://github.com/withastro/astro/commit/6011d52d38e43c3e3d52bc3bc41a60e36061b7b7)]:
  - @astrojs/internal-helpers@0.2.0

## 3.0.0-rc.6

### Patch Changes

- [#8264](https://github.com/withastro/astro/pull/8264) [`1f58a7a1b`](https://github.com/withastro/astro/commit/1f58a7a1bea6888868b689dac94801d554319b02) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Automatically unmount islands when `astro:unmount` is fired

## 3.0.0-rc.5

### Patch Changes

- [#8228](https://github.com/withastro/astro/pull/8228) [`4bd2fac8d`](https://github.com/withastro/astro/commit/4bd2fac8da4efb7c532d8920077df1f61d6e1953) Thanks [@bluwy](https://github.com/bluwy)! - Publish missing `vnode-children.js` file

## 3.0.0-rc.4

### Major Changes

- [#8179](https://github.com/withastro/astro/pull/8179) [`6011d52d3`](https://github.com/withastro/astro/commit/6011d52d38e43c3e3d52bc3bc41a60e36061b7b7) Thanks [@matthewp](https://github.com/matthewp)! - Astro 3.0 Release Candidate

### Patch Changes

- Updated dependencies [[`6011d52d3`](https://github.com/withastro/astro/commit/6011d52d38e43c3e3d52bc3bc41a60e36061b7b7)]:
  - @astrojs/internal-helpers@0.2.0-rc.2

## 3.0.0-beta.3

### Minor Changes

- [#8082](https://github.com/withastro/astro/pull/8082) [`16a3fdf93`](https://github.com/withastro/astro/commit/16a3fdf93165a1a0404c1db0973871345b2c591b) Thanks [@matthewp](https://github.com/matthewp)! - Optionally parse React slots as React children.

  This adds a new configuration option for the React integration `experimentalReactChildren`:

  ```js
  export default {
    integrations: [
      react({
        experimentalReactChildren: true,
      }),
    ],
  };
  ```

  With this enabled, children passed to React from Astro components via the default slot are parsed as React components.

  This enables better compatibility with certain React components which manipulate their children.

## 3.0.0-beta.2

### Patch Changes

- Updated dependencies [[`2aa6d8ace`](https://github.com/withastro/astro/commit/2aa6d8ace398a41c2dec5473521d758816b08191)]:
  - @astrojs/internal-helpers@0.2.0-beta.1

## 3.0.0-beta.1

### Major Changes

- [#7924](https://github.com/withastro/astro/pull/7924) [`519a1c4e8`](https://github.com/withastro/astro/commit/519a1c4e8407c7abcb8d879b67a9f4b960652cae) Thanks [@matthewp](https://github.com/matthewp)! - Support for React Refresh

  The React integration now fully supports React Refresh and is backed by `@vitejs/plugin-react`.

  Also included in this change are new `include` and `exclude` config options. Use these if you want to use React alongside another JSX framework; include specifies files to be compiled for React and `exclude` does the opposite.

## 3.0.0-beta.0

### Major Changes

- [`1eae2e3f7`](https://github.com/withastro/astro/commit/1eae2e3f7d693c9dfe91c8ccfbe606d32bf2fb81) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 16. The lowest supported version by Astro and all integrations is now v18.14.1. As a reminder, Node 16 will be deprecated on the 11th September 2023.

## 2.3.2

### Patch Changes

- [#8149](https://github.com/withastro/astro/pull/8149) [`531cc3e49`](https://github.com/withastro/astro/commit/531cc3e490bc3bc1b896eeaec05664571df5bb24) Thanks [@matthewp](https://github.com/matthewp)! - Fix missing package file regression

## 2.3.1

### Patch Changes

- [#8137](https://github.com/withastro/astro/pull/8137) [`8c0a4ed10`](https://github.com/withastro/astro/commit/8c0a4ed106efeda286f0aae8b959008f9462b5ec) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix missing export for new `experimentalReactChildren` option

## 2.3.0

### Minor Changes

- [#8082](https://github.com/withastro/astro/pull/8082) [`16a3fdf93`](https://github.com/withastro/astro/commit/16a3fdf93165a1a0404c1db0973871345b2c591b) Thanks [@matthewp](https://github.com/matthewp)! - Optionally parse React slots as React children.

  This adds a new configuration option for the React integration `experimentalReactChildren`:

  ```js
  export default {
    integrations: [
      react({
        experimentalReactChildren: true,
      }),
    ],
  };
  ```

  With this enabled, children passed to React from Astro components via the default slot are parsed as React components.

  This enables better compatibility with certain React components which manipulate their children.

## 2.2.2

### Patch Changes

- [#8075](https://github.com/withastro/astro/pull/8075) [`da517d405`](https://github.com/withastro/astro/commit/da517d4055825ee1b630cd4a6983818d6120a7b7) Thanks [@SudoCat](https://github.com/SudoCat)! - fix a bug where react identifierPrefix was set to null for client:only components causing React.useId to generate ids prefixed with null

## 2.2.1

### Patch Changes

- [#7196](https://github.com/withastro/astro/pull/7196) [`1c77779dd`](https://github.com/withastro/astro/commit/1c77779dd66a6db77c81ed235da076a6118decde) Thanks [@bluwy](https://github.com/bluwy)! - Fix `astro-static-slot` hydration mismatch error

## 2.2.0

### Minor Changes

- [#7093](https://github.com/withastro/astro/pull/7093) [`3d525efc9`](https://github.com/withastro/astro/commit/3d525efc95cfb2deb5d9e04856d02965d66901c9) Thanks [@matthewp](https://github.com/matthewp)! - Prevent removal of nested slots within islands

  This change introduces a new flag that renderers can add called `supportsAstroStaticSlot`. What this does is let Astro know that the render is sending `<astro-static-slot>` as placeholder values for static (non-hydrated) slots which Astro will then remove.

  This change is completely backwards compatible, but fixes bugs caused by combining ssr-only and client-side framework components like so:

  ```astro
  <Component>
    <div>
      <Component client:load>
        <span>Nested</span>
      </Component>
    </div>
  </Component>
  ```

### Patch Changes

- [#7104](https://github.com/withastro/astro/pull/7104) [`826e02890`](https://github.com/withastro/astro/commit/826e0289005f645b902375b98d5549c6a95ccafa) Thanks [@bluwy](https://github.com/bluwy)! - Specify `"files"` field to only publish necessary files

## 2.1.3

### Patch Changes

- [#6976](https://github.com/withastro/astro/pull/6976) [`ca329bbca`](https://github.com/withastro/astro/commit/ca329bbcae7a6075af4f428f6f64466e9d152c8f) Thanks [@SudoCat](https://github.com/SudoCat)! - Prevent ID collisions in React.useId

## 2.1.2

### Patch Changes

- [#6933](https://github.com/withastro/astro/pull/6933) [`649d70934`](https://github.com/withastro/astro/commit/649d70934e709bb1aa6e5e7583b12fa1703377cb) Thanks [@matthewp](https://github.com/matthewp)! - Automatically configure redoc

## 2.1.1

### Patch Changes

- [#6698](https://github.com/withastro/astro/pull/6698) [`fc71c3f18`](https://github.com/withastro/astro/commit/fc71c3f18819ac3ad62809a7eeff5fe7840f2c4b) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Update React README to reference the [new React docs](https://react.dev)

- [#6696](https://github.com/withastro/astro/pull/6696) [`239b9a2fb`](https://github.com/withastro/astro/commit/239b9a2fb864fa785e4150cd8aa833de72dd3517) Thanks [@matthewp](https://github.com/matthewp)! - Add use-immer as a noExternal module

## 2.1.0

### Minor Changes

- [#6213](https://github.com/withastro/astro/pull/6213) [`afbbc4d5b`](https://github.com/withastro/astro/commit/afbbc4d5bfafc1779bac00b41c2a1cb1c90f2808) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updated compilation settings to disable downlevelling for Node 14

## 2.0.2

### Patch Changes

- [#5478](https://github.com/withastro/astro/pull/5478) [`1c7eef308`](https://github.com/withastro/astro/commit/1c7eef308e808aa5ed4662b53e67ec8d1b814d1f) Thanks [@nemo0](https://github.com/nemo0)! - Update READMEs for consistency

## 2.0.1

### Patch Changes

- [#5886](https://github.com/withastro/astro/pull/5886) [`9d4bfc76e`](https://github.com/withastro/astro/commit/9d4bfc76e8de7cf85997100145532a6fa7d2b025) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Support passing `children` as props to a React component

## 2.0.0

### Major Changes

- [#5782](https://github.com/withastro/astro/pull/5782) [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 14. Minimum supported Node version is now >=16.12.0

## 2.0.0-beta.0

<details>
<summary>See changes in 2.0.0-beta.0</summary>

### Major Changes

- [#5782](https://github.com/withastro/astro/pull/5782) [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 14. Minimum supported Node version is now >=16.12.0

</details>

## 1.2.2

### Patch Changes

- [#5218](https://github.com/withastro/astro/pull/5218) [`0b1241431`](https://github.com/withastro/astro/commit/0b12414315fa81ded96587779c63c74400466078) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - remove unnecessary `ReactDOM.renderToString` operation

## 1.2.1

### Patch Changes

- [#5095](https://github.com/withastro/astro/pull/5095) [`ddfbef5ac`](https://github.com/withastro/astro/commit/ddfbef5acbd4c56d8ce1626a458b5cbb27da47fe) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add `@types/` packages as peerDependencies

## 1.2.0

### Minor Changes

- [#5016](https://github.com/withastro/astro/pull/5016) [`6efeaeb39`](https://github.com/withastro/astro/commit/6efeaeb39ed7e6642b31603745750ccb9fe0ff1e) Thanks [@matthewp](https://github.com/matthewp)! - Add support for mui

  This adds support for [mui](https://mui.com/) through configuration. Users will now not need to configure this library to get it to work.

## 1.1.4

### Patch Changes

- [#4816](https://github.com/withastro/astro/pull/4816) [`8d059faae`](https://github.com/withastro/astro/commit/8d059faaedf212426e0fb6d93843f6855f723f56) Thanks [@matthewp](https://github.com/matthewp)! - Prevent errors in React components from crashing the dev server

## 1.1.3

### Patch Changes

- [#4756](https://github.com/withastro/astro/pull/4756) [`c271ed35e`](https://github.com/withastro/astro/commit/c271ed35ee634f2f8c9957ee04a3aadc7dd39b3e) Thanks [@matthewp](https://github.com/matthewp)! - Only pass through children prop if there are children

## 1.1.2

### Patch Changes

- [#4679](https://github.com/withastro/astro/pull/4679) [`5986517b4`](https://github.com/withastro/astro/commit/5986517b4f29af90fcfe333d4bb69ac09d4f8778) Thanks [@matthewp](https://github.com/matthewp)! - Prevent decoder from leaking

- [#4667](https://github.com/withastro/astro/pull/4667) [`9290b2414`](https://github.com/withastro/astro/commit/9290b24143d753edd3daf25945990c25a58e5bde) Thanks [@Holben888](https://github.com/Holben888)! - Fix framework components on Vercel Edge

## 1.1.1

### Patch Changes

- [#4527](https://github.com/withastro/astro/pull/4527) [`9adb7cca3`](https://github.com/withastro/astro/commit/9adb7cca33f669082d0daf750b97b1496ee79d2f) Thanks [@bluwy](https://github.com/bluwy)! - Add vite-ignore comment to suppress unknown import warnings

## 1.1.0

### Minor Changes

- [#4478](https://github.com/withastro/astro/pull/4478) [`243525b15`](https://github.com/withastro/astro/commit/243525b1565385753ae1464c5def0d7de799f906) Thanks [@matthewp](https://github.com/matthewp)! - Uses startTransition on React roots

  This prevents hydration from blocking the main thread when multiple islands are rendering at the same time.

## 1.1.0-next.0

### Minor Changes

- [#4478](https://github.com/withastro/astro/pull/4478) [`243525b15`](https://github.com/withastro/astro/commit/243525b1565385753ae1464c5def0d7de799f906) Thanks [@matthewp](https://github.com/matthewp)! - Uses startTransition on React roots

  This prevents hydration from blocking the main thread when multiple islands are rendering at the same time.

## 1.0.0

### Major Changes

- [`04ad44563`](https://github.com/withastro/astro/commit/04ad445632c67bdd60c1704e1e0dcbcaa27b9308) - > Astro v1.0 is out! Read the [official announcement post](https://astro.build/blog/astro-1/).

  **No breaking changes**. This package is now officially stable and compatible with `astro@1.0.0`!

## 0.4.3

### Patch Changes

- [#4174](https://github.com/withastro/astro/pull/4174) [`8eb3a8c6d`](https://github.com/withastro/astro/commit/8eb3a8c6d9554707963c3a3bc36ed8b68d3cf0fb) Thanks [@matthewp](https://github.com/matthewp)! - Allows using React with automatic imports alongside MDX

## 0.4.2

### Patch Changes

- [#3937](https://github.com/withastro/astro/pull/3937) [`31f9c0bf0`](https://github.com/withastro/astro/commit/31f9c0bf029ffa4b470e620f2c32e1370643e81e) Thanks [@delucis](https://github.com/delucis)! - Roll back supported Node engines

## 0.4.1

### Patch Changes

- [#3928](https://github.com/withastro/astro/pull/3928) [`d6dfef0ca`](https://github.com/withastro/astro/commit/d6dfef0caa25f4effd0ed548d92ff48ce7a39ab2) Thanks [@matthewp](https://github.com/matthewp)! - Removes @babel/core peerDependency warning

## 0.4.0

### Minor Changes

- [#3914](https://github.com/withastro/astro/pull/3914) [`b48767985`](https://github.com/withastro/astro/commit/b48767985359bd359df8071324952ea5f2bc0d86) Thanks [@ran-dall](https://github.com/ran-dall)! - Rollback supported `node@16` version. Minimum versions are now `node@14.20.0` or `node@16.14.0`.

## 0.3.1

### Patch Changes

- [#3885](https://github.com/withastro/astro/pull/3885) [`bf5d1cc1e`](https://github.com/withastro/astro/commit/bf5d1cc1e71da38a14658c615e9481f2145cc6e7) Thanks [@delucis](https://github.com/delucis)! - Integration README fixes

## 0.3.0

### Minor Changes

- [#3871](https://github.com/withastro/astro/pull/3871) [`1cc5b7890`](https://github.com/withastro/astro/commit/1cc5b78905633608e5b07ad291f916f54e67feb1) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update supported `node` versions. Minimum versions are now `node@14.20.0` or `node@16.16.0`.

## 0.2.1

### Patch Changes

- [#3854](https://github.com/withastro/astro/pull/3854) [`b012ee55`](https://github.com/withastro/astro/commit/b012ee55b107dea0730286263b27d83e530fad5d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - [astro add] Support adapters and third party packages

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

- [#3337](https://github.com/withastro/astro/pull/3337) [`678c2b75`](https://github.com/withastro/astro/commit/678c2b7523c7f10cfdf2eb5a73aa2bbb7e5cbc07) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: remove hydration failures on React v18 by exposing the "client" directive from Astro core.

## 0.1.1

### Patch Changes

- [#3160](https://github.com/withastro/astro/pull/3160) [`ae9ac5cb`](https://github.com/withastro/astro/commit/ae9ac5cbdceba0687d83d56d9d5f80479ab88710) Thanks [@matthewp](https://github.com/matthewp)! - Allows using React.lazy, Suspense in SSR and with hydration

## 0.1.0

### Minor Changes

- [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add support for React v18

## 0.0.2

### Patch Changes

- [#2885](https://github.com/withastro/astro/pull/2885) [`6b004363`](https://github.com/withastro/astro/commit/6b004363f99f27e581d1e2d53a2ebff39d7afb8a) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add README across Astro built-in integrations

* [#2847](https://github.com/withastro/astro/pull/2847) [`3b621f7a`](https://github.com/withastro/astro/commit/3b621f7a613b45983b090794fa7c015f23ed6140) Thanks [@tony-sull](https://github.com/tony-sull)! - Adds keywords to the official integrations to support discoverability on Astro's Integrations site

## 0.0.2-next.0

### Patch Changes

- [#2847](https://github.com/withastro/astro/pull/2847) [`3b621f7a`](https://github.com/withastro/astro/commit/3b621f7a613b45983b090794fa7c015f23ed6140) Thanks [@tony-sull](https://github.com/tony-sull)! - Adds keywords to the official integrations to support discoverability on Astro's Integrations site
