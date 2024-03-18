# astro

## 4.5.6

### Patch Changes

- [#10455](https://github.com/withastro/astro/pull/10455) [`c12666166db724915e42e37a048483c99f88e6d9`](https://github.com/withastro/astro/commit/c12666166db724915e42e37a048483c99f88e6d9) Thanks [@lilnasy](https://github.com/lilnasy)! - Adds a helpful error message that will be shown when an endpoint does not return a `Response`.

- [#10426](https://github.com/withastro/astro/pull/10426) [`6a9a35ee15069541c3144012385366a3c689240a`](https://github.com/withastro/astro/commit/6a9a35ee15069541c3144012385366a3c689240a) Thanks [@markgaze](https://github.com/markgaze)! - Fixes an issue with generating JSON schemas when the schema is a function

- [#10448](https://github.com/withastro/astro/pull/10448) [`fcece3658697248ab58f77b3d4a8b14d362f3c47`](https://github.com/withastro/astro/commit/fcece3658697248ab58f77b3d4a8b14d362f3c47) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where multiple rendering errors resulted in a crash of the SSR app server.

## 4.5.5

### Patch Changes

- [#10379](https://github.com/withastro/astro/pull/10379) [`3776ecf0aa9e08a992d3ae76e90682fd04093721`](https://github.com/withastro/astro/commit/3776ecf0aa9e08a992d3ae76e90682fd04093721) Thanks [@1574242600](https://github.com/1574242600)! - Fixes a routing issue with partially truncated dynamic segments.

- [#10442](https://github.com/withastro/astro/pull/10442) [`f8e0ad3c52a37b8a2175fe2f5ff2bd0cd738f499`](https://github.com/withastro/astro/commit/f8e0ad3c52a37b8a2175fe2f5ff2bd0cd738f499) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes small rendering issues with the dev toolbar in certain contexts

- [#10438](https://github.com/withastro/astro/pull/10438) [`5b48cc0fc8383b0659a595afd3a6ee28b28779c3`](https://github.com/withastro/astro/commit/5b48cc0fc8383b0659a595afd3a6ee28b28779c3) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Generate Astro DB types when running `astro sync`.

- [#10456](https://github.com/withastro/astro/pull/10456) [`1900a8f9bc337f3a882178d1770e10ab67fab0ce`](https://github.com/withastro/astro/commit/1900a8f9bc337f3a882178d1770e10ab67fab0ce) Thanks [@martrapp](https://github.com/martrapp)! - Fixes an error when using `astro:transtions/client` without `<ViewTransitions/>`

## 4.5.4

### Patch Changes

- [#10427](https://github.com/withastro/astro/pull/10427) [`128c7a36397d99608dea918885b68bd302d00e7f`](https://github.com/withastro/astro/commit/128c7a36397d99608dea918885b68bd302d00e7f) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where error pages did not have access to the `Astro.locals` fields provided by the adapter.

## 4.5.3

### Patch Changes

- [#10410](https://github.com/withastro/astro/pull/10410) [`055fe293c6702dd27bcd6c4f59297c6d4385abb1`](https://github.com/withastro/astro/commit/055fe293c6702dd27bcd6c4f59297c6d4385abb1) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where configured redirects could not include certain characters in the target path.

- [#9820](https://github.com/withastro/astro/pull/9820) [`8edc42aa7c209b12d98ecf20cdecccddf7314af0`](https://github.com/withastro/astro/commit/8edc42aa7c209b12d98ecf20cdecccddf7314af0) Thanks [@alexnguyennz](https://github.com/alexnguyennz)! - Prevents fully formed URLs in attributes from being escaped

## 4.5.2

### Patch Changes

- [#10400](https://github.com/withastro/astro/pull/10400) [`629c9d7c4d96ae5711d95601e738b3d31d268116`](https://github.com/withastro/astro/commit/629c9d7c4d96ae5711d95601e738b3d31d268116) Thanks [@mingjunlu](https://github.com/mingjunlu)! - Fixes an issue where dev toolbar x-ray didn't escape props content.

## 4.5.1

### Patch Changes

- [#10392](https://github.com/withastro/astro/pull/10392) [`02aeb01cb8b62b9cc4dfe6069857219404343b73`](https://github.com/withastro/astro/commit/02aeb01cb8b62b9cc4dfe6069857219404343b73) Thanks [@martrapp](https://github.com/martrapp)! - Fixes broken types for some functions of `astro:transitions/client`.

- [#10390](https://github.com/withastro/astro/pull/10390) [`236cdbb611587692d3c781850cb949604677ef82`](https://github.com/withastro/astro/commit/236cdbb611587692d3c781850cb949604677ef82) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Adds `--help` reference for new db and studio CLI commands

## 4.5.0

### Minor Changes

- [#10206](https://github.com/withastro/astro/pull/10206) [`dc87214141e7f8406c0fdf6a7f425dad6dea6d3e`](https://github.com/withastro/astro/commit/dc87214141e7f8406c0fdf6a7f425dad6dea6d3e) Thanks [@lilnasy](https://github.com/lilnasy)! - Allows middleware to run when a matching page or endpoint is not found. Previously, a `pages/404.astro` or `pages/[...catch-all].astro` route had to match to allow middleware. This is now not necessary.

  When a route does not match in SSR deployments, your adapter may show a platform-specific 404 page instead of running Astro's SSR code. In these cases, you may still need to add a `404.astro` or fallback route with spread params, or use a routing configuration option if your adapter provides one.

- [#9960](https://github.com/withastro/astro/pull/9960) [`c081adf998d30419fed97d8fccc11340cdc512e0`](https://github.com/withastro/astro/commit/c081adf998d30419fed97d8fccc11340cdc512e0) Thanks [@StandardGage](https://github.com/StandardGage)! - Allows passing any props to the `<Code />` component

- [#10102](https://github.com/withastro/astro/pull/10102) [`e3f02f5fb1cf0dae3c54beb3a4af3dbf3b06abb7`](https://github.com/withastro/astro/commit/e3f02f5fb1cf0dae3c54beb3a4af3dbf3b06abb7) Thanks [@bluwy](https://github.com/bluwy)! - Adds a new `experimental.directRenderScript` configuration option which provides a more reliable strategy to prevent scripts from being executed in pages where they are not used.

  This replaces the `experimental.optimizeHoistedScript` flag introduced in v2.10.4 to prevent unused components' scripts from being included in a page unexpectedly. That experimental option no longer exists and must be removed from your configuration, whether or not you enable `directRenderScript`:

  ```diff
  // astro.config.mjs
  import { defineConfig } from 'astro/config';

  export default defineConfig({
  	experimental: {
  -		optimizeHoistedScript: true,
  +		directRenderScript: true
  	}
  });
  ```

  With `experimental.directRenderScript` configured, scripts are now directly rendered as declared in Astro files (including existing features like TypeScript, importing `node_modules`, and deduplicating scripts). You can also now conditionally render scripts in your Astro file.

  However, this means scripts are no longer hoisted to the `<head>` and multiple scripts on a page are no longer bundled together. If you enable this option, you should check that all your `<script>` tags behave as expected.

  This option will be enabled by default in Astro 5.0.

- [#10130](https://github.com/withastro/astro/pull/10130) [`5a9528741fa98d017b269c7e4f013058028bdc5d`](https://github.com/withastro/astro/commit/5a9528741fa98d017b269c7e4f013058028bdc5d) Thanks [@bluwy](https://github.com/bluwy)! - Stabilizes `markdown.shikiConfig.experimentalThemes` as `markdown.shikiConfig.themes`. No behaviour changes are made to this option.

- [#10189](https://github.com/withastro/astro/pull/10189) [`1ea0a25b94125e4f6f2ac82b42f638e22d7bdffd`](https://github.com/withastro/astro/commit/1ea0a25b94125e4f6f2ac82b42f638e22d7bdffd) Thanks [@peng](https://github.com/peng)! - Adds the option to pass an object to `build.assetsPrefix`. This allows for the use of multiple CDN prefixes based on the target file type.

  When passing an object to `build.assetsPrefix`, you must also specify a `fallback` domain to be used for all other file types not specified.

  Specify a file extension as the key (e.g. 'js', 'png') and the URL serving your assets of that file type as the value:

  ```js
  // astro.config.mjs
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    build: {
      assetsPrefix: {
        js: 'https://js.cdn.example.com',
        mjs: 'https://js.cdn.example.com', // if you have .mjs files, you must add a new entry like this
        png: 'https://images.cdn.example.com',
        fallback: 'https://generic.cdn.example.com',
      },
    },
  });
  ```

- [#10252](https://github.com/withastro/astro/pull/10252) [`3307cb34f17159dfd3f03144697040fcaa10e903`](https://github.com/withastro/astro/commit/3307cb34f17159dfd3f03144697040fcaa10e903) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds support for emitting warning and info notifications from dev toolbar apps.

  When using the `toggle-notification` event, the severity can be specified through `detail.level`:

  ```ts
  eventTarget.dispatchEvent(
    new CustomEvent('toggle-notification', {
      detail: {
        level: 'warning',
      },
    })
  );
  ```

- [#10186](https://github.com/withastro/astro/pull/10186) [`959ca5f9f86ef2c0a5a23080cc01c25f53d613a9`](https://github.com/withastro/astro/commit/959ca5f9f86ef2c0a5a23080cc01c25f53d613a9) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds the ability to set colors on all the included UI elements for dev toolbar apps. Previously, only badge and buttons could be customized.

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

- [#9977](https://github.com/withastro/astro/pull/9977) [`0204b7de37bf626e1b97175b605adbf91d885386`](https://github.com/withastro/astro/commit/0204b7de37bf626e1b97175b605adbf91d885386) Thanks [@OliverSpeir](https://github.com/OliverSpeir)! - Supports adding the `data-astro-rerun` attribute on script tags so that they will be re-executed after view transitions

  ```html
  <script is:inline data-astro-rerun>
    ...
  </script>
  ```

- [#10145](https://github.com/withastro/astro/pull/10145) [`65692fa7b5f4440c644c8cf3dd9bc50103d2c33b`](https://github.com/withastro/astro/commit/65692fa7b5f4440c644c8cf3dd9bc50103d2c33b) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Adds experimental JSON Schema support for content collections.

  This feature will auto-generate a JSON Schema for content collections of `type: 'data'` which can be used as the `$schema` value for TypeScript-style autocompletion/hints in tools like VSCode.

  To enable this feature, add the experimental flag:

  ```diff
  import { defineConfig } from 'astro/config';

  export default defineConfig({
  	experimental: {
  +		contentCollectionJsonSchema: true
  	}
  });
  ```

  This experimental implementation requires you to manually reference the schema in each data entry file of the collection:

  ```diff
  // src/content/test/entry.json
  {
  +  "$schema": "../../../.astro/collections/test.schema.json",
    "test": "test"
  }
  ```

  Alternatively, you can set this in your [VSCode `json.schemas` settings](https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings):

  ```diff
  "json.schemas": [
    {
      "fileMatch": [
        "/src/content/test/**"
      ],
      "url": "../../../.astro/collections/test.schema.json"
    }
  ]
  ```

  Note that this initial implementation uses a library with [known issues for advanced Zod schemas](https://github.com/StefanTerdell/zod-to-json-schema#known-issues), so you may wish to consult these limitations before enabling the experimental flag.

- [#10130](https://github.com/withastro/astro/pull/10130) [`5a9528741fa98d017b269c7e4f013058028bdc5d`](https://github.com/withastro/astro/commit/5a9528741fa98d017b269c7e4f013058028bdc5d) Thanks [@bluwy](https://github.com/bluwy)! - Migrates `shikiji` to `shiki` 1.0

- [#10268](https://github.com/withastro/astro/pull/10268) [`2013e70bce16366781cc12e52823bb257fe460c0`](https://github.com/withastro/astro/commit/2013e70bce16366781cc12e52823bb257fe460c0) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds support for page mutations to the audits in the dev toolbar. Astro will now rerun the audits whenever elements are added or deleted from the page.

- [#10217](https://github.com/withastro/astro/pull/10217) [`5c7862a9fe69954f8630538ebb7212cd04b8a810`](https://github.com/withastro/astro/commit/5c7862a9fe69954f8630538ebb7212cd04b8a810) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updates the UI for dev toolbar audits with new information

### Patch Changes

- [#10360](https://github.com/withastro/astro/pull/10360) [`ac766647b0e6156b7c4a0bb9a11981fe168852d7`](https://github.com/withastro/astro/commit/ac766647b0e6156b7c4a0bb9a11981fe168852d7) Thanks [@nmattia](https://github.com/nmattia)! - Fixes an issue where some CLI commands attempted to directly read vite config files.

- [#10291](https://github.com/withastro/astro/pull/10291) [`8107a2721b6abb07c3120ac90e03c39f2a44ab0c`](https://github.com/withastro/astro/commit/8107a2721b6abb07c3120ac90e03c39f2a44ab0c) Thanks [@bluwy](https://github.com/bluwy)! - Treeshakes unused Astro component scoped styles

- [#10368](https://github.com/withastro/astro/pull/10368) [`78bafc5d661ff7dd071c241cb1303c4d8a774d21`](https://github.com/withastro/astro/commit/78bafc5d661ff7dd071c241cb1303c4d8a774d21) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updates the base `tsconfig.json` preset with `jsx: 'preserve'` in order to fix errors when importing Astro files inside `.js` and `.ts` files.

- Updated dependencies [[`c081adf998d30419fed97d8fccc11340cdc512e0`](https://github.com/withastro/astro/commit/c081adf998d30419fed97d8fccc11340cdc512e0), [`1ea0a25b94125e4f6f2ac82b42f638e22d7bdffd`](https://github.com/withastro/astro/commit/1ea0a25b94125e4f6f2ac82b42f638e22d7bdffd), [`5a9528741fa98d017b269c7e4f013058028bdc5d`](https://github.com/withastro/astro/commit/5a9528741fa98d017b269c7e4f013058028bdc5d), [`a31bbd7ff8f3ec62ee507f72d1d25140b82ffc18`](https://github.com/withastro/astro/commit/a31bbd7ff8f3ec62ee507f72d1d25140b82ffc18)]:
  - @astrojs/markdown-remark@4.3.0
  - @astrojs/internal-helpers@0.3.0

## 4.4.15

### Patch Changes

- [#10317](https://github.com/withastro/astro/pull/10317) [`33583e8b31ee8a33e26cf57f30bb422921f4745d`](https://github.com/withastro/astro/commit/33583e8b31ee8a33e26cf57f30bb422921f4745d) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where elements slotted within interactive framework components disappeared after hydration.

## 4.4.14

### Patch Changes

- [#10355](https://github.com/withastro/astro/pull/10355) [`8ce9fffd44b0740621178d61fb1425bf4155c2d7`](https://github.com/withastro/astro/commit/8ce9fffd44b0740621178d61fb1425bf4155c2d7) Thanks [@ematipico](https://github.com/ematipico)! - Fixes a regression where full dynamic routes were prioritized over partial dynamic routes. Now a route like `food-[name].astro` is matched **before** `[name].astro`.

- [#10356](https://github.com/withastro/astro/pull/10356) [`d121311a3f4b5345e344e31f75d4e7164d65f729`](https://github.com/withastro/astro/commit/d121311a3f4b5345e344e31f75d4e7164d65f729) Thanks [@mingjunlu](https://github.com/mingjunlu)! - Fixes an issue where `getCollection` might return `undefined` when content collection is empty

- [#10325](https://github.com/withastro/astro/pull/10325) [`f33cce8f6c3a2e17847658cdedb015bd93cc1ee3`](https://github.com/withastro/astro/commit/f33cce8f6c3a2e17847658cdedb015bd93cc1ee3) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where `ctx.site` included the configured `base` in API routes and middleware, unlike `Astro.site` in astro pages.

- [#10343](https://github.com/withastro/astro/pull/10343) [`f973aa9110592fa9017bbe84387f22c24a6d7159`](https://github.com/withastro/astro/commit/f973aa9110592fa9017bbe84387f22c24a6d7159) Thanks [@ematipico](https://github.com/ematipico)! - Fixes some false positive in the dev toolbar a11y audits, by adding the `a` element to the list of interactive elements.

- [#10295](https://github.com/withastro/astro/pull/10295) [`fdd5bf277e5c1cfa30c1bd2ca123f4e90e8d09d9`](https://github.com/withastro/astro/commit/fdd5bf277e5c1cfa30c1bd2ca123f4e90e8d09d9) Thanks [@rossrobino](https://github.com/rossrobino)! - Adds a prefetch fallback when using the `experimental.clientPrerender` option. If prerendering fails, which can happen if [Chrome extensions block prerendering](https://developer.chrome.com/blog/speculation-rules-improvements#chrome-limits), it will fallback to prefetching the URL. This works by adding a `prefetch` field to the `speculationrules` script, but does not create an extra request.

## 4.4.13

### Patch Changes

- [#10342](https://github.com/withastro/astro/pull/10342) [`a2e9b2b936666b2a4779feb00dcb8ff0ab82c2ec`](https://github.com/withastro/astro/commit/a2e9b2b936666b2a4779feb00dcb8ff0ab82c2ec) Thanks [@matthewp](https://github.com/matthewp)! - Fixes @astrojs/db loading TS in the fixtures

## 4.4.12

### Patch Changes

- [#10336](https://github.com/withastro/astro/pull/10336) [`f2e60a96754ed1d86001fe4d5d3a0c0ef657408d`](https://github.com/withastro/astro/commit/f2e60a96754ed1d86001fe4d5d3a0c0ef657408d) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fixes an issue where slotting interactive components within a "client:only" component prevented all component code in the page from running.

## 4.4.11

### Patch Changes

- [#10281](https://github.com/withastro/astro/pull/10281) [`9deb919ff95b1d2ffe5a5f70ec683e32ebfafd05`](https://github.com/withastro/astro/commit/9deb919ff95b1d2ffe5a5f70ec683e32ebfafd05) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where `404.astro` was ignored with `i18n` routing enabled.

- [#10279](https://github.com/withastro/astro/pull/10279) [`9ba3e2605daee3861e3bf6c5768f1d8bced4709d`](https://github.com/withastro/astro/commit/9ba3e2605daee3861e3bf6c5768f1d8bced4709d) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where returning redirect responses resulted in missing files with certain adapters.

- [#10319](https://github.com/withastro/astro/pull/10319) [`19ecccedaab6d8fa0ff23711c88fa7d4fa34df38`](https://github.com/withastro/astro/commit/19ecccedaab6d8fa0ff23711c88fa7d4fa34df38) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where streaming SSR responses sometimes failed with "`iterator.result` is not a function" on node-based adapters.

- [#10302](https://github.com/withastro/astro/pull/10302) [`992537e79f1847b590a2e226aac88a47a6304f68`](https://github.com/withastro/astro/commit/992537e79f1847b590a2e226aac88a47a6304f68) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Fixes an issue that causes static entrypoints build to fail because of the path in certain conditions. Specifically, it failed if the path had an extension (like `.astro`, `.mdx` etc) and such extension would be also within the path (like `./.astro/index.astro`).

- [#10298](https://github.com/withastro/astro/pull/10298) [`819d20a89c0d269333c2d397c1080884f516307a`](https://github.com/withastro/astro/commit/819d20a89c0d269333c2d397c1080884f516307a) Thanks [@Fryuni](https://github.com/Fryuni)! - Fix an incorrect conflict resolution between pages generated from static routes and rest parameters

## 4.4.10

### Patch Changes

- [#10235](https://github.com/withastro/astro/pull/10235) [`4bc360cd5f25496aca3232f6efb3710424a14a34`](https://github.com/withastro/astro/commit/4bc360cd5f25496aca3232f6efb3710424a14a34) Thanks [@sanman1k98](https://github.com/sanman1k98)! - Fixes jerky scrolling on IOS when using view transitions.

## 4.4.9

### Patch Changes

- [#10278](https://github.com/withastro/astro/pull/10278) [`a548a3a99c2835c19662fc38636f92b2bda26614`](https://github.com/withastro/astro/commit/a548a3a99c2835c19662fc38636f92b2bda26614) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes original images sometimes being kept / deleted when they shouldn't in both MDX and Markdoc

- [#10280](https://github.com/withastro/astro/pull/10280) [`3488be9b59d1cb65325b0e087c33bcd74aaa4926`](https://github.com/withastro/astro/commit/3488be9b59d1cb65325b0e087c33bcd74aaa4926) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Finalize db API to a shared db/ directory.

## 4.4.8

### Patch Changes

- [#10275](https://github.com/withastro/astro/pull/10275) [`5e3e74b61daa2ba44c761c9ab5745818661a656e`](https://github.com/withastro/astro/commit/5e3e74b61daa2ba44c761c9ab5745818661a656e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes dev toolbar warning about using the proper loading attributes on images using `data:` URIs

## 4.4.7

### Patch Changes

- [#10274](https://github.com/withastro/astro/pull/10274) [`e556151603a2f0173059d0f98fdcbec0610b48ff`](https://github.com/withastro/astro/commit/e556151603a2f0173059d0f98fdcbec0610b48ff) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes a regression introduced in v4.4.5 where image optimization did not work in dev mode when a base was configured.

- [#10263](https://github.com/withastro/astro/pull/10263) [`9bdbed723e0aa4243d7d6ee64d1c1df3b75b9aeb`](https://github.com/withastro/astro/commit/9bdbed723e0aa4243d7d6ee64d1c1df3b75b9aeb) Thanks [@martrapp](https://github.com/martrapp)! - Adds auto completion for `astro:` event names when adding or removing event listeners on `document`.

- [#10284](https://github.com/withastro/astro/pull/10284) [`07f89429a1ef5173d3321e0b362a9dc71fc74fe5`](https://github.com/withastro/astro/commit/07f89429a1ef5173d3321e0b362a9dc71fc74fe5) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes an issue where in Node SSR, the image endpoint could be used maliciously to reveal unintended information about the underlying system.

  Thanks to Google Security Team for reporting this issue.

## 4.4.6

### Patch Changes

- [#10247](https://github.com/withastro/astro/pull/10247) [`fb773c9161bf8faa5ebd7e115f3564c3359e56ea`](https://github.com/withastro/astro/commit/fb773c9161bf8faa5ebd7e115f3564c3359e56ea) Thanks [@martrapp](https://github.com/martrapp)! - Fixes an issue where `transition:animate="none"` still allowed the browser-native morph animation.

- [#10248](https://github.com/withastro/astro/pull/10248) [`8ae5d99534fc09d650e10e64a09b61a2807574f2`](https://github.com/withastro/astro/commit/8ae5d99534fc09d650e10e64a09b61a2807574f2) Thanks [@ematipico](https://github.com/ematipico)! - Fixes an issue where multiple injected routes with the same `entrypoint` but different `pattern` were incorrectly cached, causing some of them not being rendered in the dev server.

- [#10250](https://github.com/withastro/astro/pull/10250) [`57655a99db34e20e9661c039fab253b867013318`](https://github.com/withastro/astro/commit/57655a99db34e20e9661c039fab253b867013318) Thanks [@log101](https://github.com/log101)! - Fixes the overwriting of localised index pages with redirects

- [#10239](https://github.com/withastro/astro/pull/10239) [`9c21a9df6b03e36bd78dc553e13c55b9ef8c44cd`](https://github.com/withastro/astro/commit/9c21a9df6b03e36bd78dc553e13c55b9ef8c44cd) Thanks [@mingjunlu](https://github.com/mingjunlu)! - Improves the message of `MiddlewareCantBeLoaded` for clarity

- [#10222](https://github.com/withastro/astro/pull/10222) [`ade9759cae74ca262b988260250bcb202235e811`](https://github.com/withastro/astro/commit/ade9759cae74ca262b988260250bcb202235e811) Thanks [@martrapp](https://github.com/martrapp)! - Adds a warning in DEV mode when using view transitions on a device with prefer-reduced-motion enabled.

- [#10251](https://github.com/withastro/astro/pull/10251) [`9b00de0a76b4f4b5b808e8c78e4906a2497e8ecf`](https://github.com/withastro/astro/commit/9b00de0a76b4f4b5b808e8c78e4906a2497e8ecf) Thanks [@mingjunlu](https://github.com/mingjunlu)! - Fixes TypeScript type definitions for `Code` component `theme` and `experimentalThemes` props

## 4.4.5

### Patch Changes

- [#10221](https://github.com/withastro/astro/pull/10221) [`4db82d9c7dce3b73fe43b86020fcfa326c1357ec`](https://github.com/withastro/astro/commit/4db82d9c7dce3b73fe43b86020fcfa326c1357ec) Thanks [@matthewp](https://github.com/matthewp)! - Prevents errors in templates from crashing the server

- [#10219](https://github.com/withastro/astro/pull/10219) [`afcb9d331179287629b5ffce4020931258bebefa`](https://github.com/withastro/astro/commit/afcb9d331179287629b5ffce4020931258bebefa) Thanks [@matthewp](https://github.com/matthewp)! - Fix dynamic slots missing hydration scripts

- [#10220](https://github.com/withastro/astro/pull/10220) [`1eadb1c5290f2f4baf538c34889a09d5fcfb9bd4`](https://github.com/withastro/astro/commit/1eadb1c5290f2f4baf538c34889a09d5fcfb9bd4) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes some built-in apps of the dev toolbar not closing when clicking the page

- [#10154](https://github.com/withastro/astro/pull/10154) [`e64bd0740b44aed5cfaf67e5c37a1c56ed4442f4`](https://github.com/withastro/astro/commit/e64bd0740b44aed5cfaf67e5c37a1c56ed4442f4) Thanks [@Cherry](https://github.com/Cherry)! - Fixes an issue where `config.vite.build.assetsInlineLimit` could not be set as a function.

- [#10196](https://github.com/withastro/astro/pull/10196) [`8fb32f390d40cfa12a82c0645928468d27218866`](https://github.com/withastro/astro/commit/8fb32f390d40cfa12a82c0645928468d27218866) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where a warning about headers being accessed in static mode is unnecessarily shown when i18n is enabled.

- [#10199](https://github.com/withastro/astro/pull/10199) [`6aa660ae7abc6841d7a3396b29f10b9fb7910ce5`](https://github.com/withastro/astro/commit/6aa660ae7abc6841d7a3396b29f10b9fb7910ce5) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where prerendered pages had access to query params in dev mode.

## 4.4.4

### Patch Changes

- [#10195](https://github.com/withastro/astro/pull/10195) [`903eace233033998811b72e27a54c80d8e59ff37`](https://github.com/withastro/astro/commit/903eace233033998811b72e27a54c80d8e59ff37) Thanks [@1574242600](https://github.com/1574242600)! - Fix build failure caused by read-only files under /public (in the presence of client-side JS).

- [#10205](https://github.com/withastro/astro/pull/10205) [`459f74bc71748279fe7dce0688f38bd74b51c5c1`](https://github.com/withastro/astro/commit/459f74bc71748279fe7dce0688f38bd74b51c5c1) Thanks [@martrapp](https://github.com/martrapp)! - Adds an error message for non-string transition:name values

- [#10208](https://github.com/withastro/astro/pull/10208) [`8cd38f02456640c063552aef00b2b8a216b3935d`](https://github.com/withastro/astro/commit/8cd38f02456640c063552aef00b2b8a216b3935d) Thanks [@log101](https://github.com/log101)! - Fixes custom headers are not added to the Node standalone server responses in preview mode

## 4.4.3

### Patch Changes

- [#10143](https://github.com/withastro/astro/pull/10143) [`7c5fcd2fa817472f480bbfbbc11b9ed71a7210ab`](https://github.com/withastro/astro/commit/7c5fcd2fa817472f480bbfbbc11b9ed71a7210ab) Thanks [@bluwy](https://github.com/bluwy)! - Improves the default `optimizeDeps.entries` Vite config to avoid globbing server endpoints, and respect the `srcDir` option

- [#10197](https://github.com/withastro/astro/pull/10197) [`c856c729404196900a7386c8426b81e79684a6a9`](https://github.com/withastro/astro/commit/c856c729404196900a7386c8426b81e79684a6a9) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes errors being logged twice in some cases

- [#10166](https://github.com/withastro/astro/pull/10166) [`598f30c7cd6c88558e3806d9bc5a15d426d83992`](https://github.com/withastro/astro/commit/598f30c7cd6c88558e3806d9bc5a15d426d83992) Thanks [@bluwy](https://github.com/bluwy)! - Improves Astro style tag HMR when updating imported styles

- [#10194](https://github.com/withastro/astro/pull/10194) [`3cc20109277813ccb9578ca87a8b0d680a73c35c`](https://github.com/withastro/astro/commit/3cc20109277813ccb9578ca87a8b0d680a73c35c) Thanks [@matthewp](https://github.com/matthewp)! - Fixes an issue related to content collections usage in browser context caused by `csssec`

## 4.4.2

### Patch Changes

- [#10169](https://github.com/withastro/astro/pull/10169) [`a46249173edde66b03c19441144272baa8394fb4`](https://github.com/withastro/astro/commit/a46249173edde66b03c19441144272baa8394fb4) Thanks [@ematipico](https://github.com/ematipico)! - Fixes an issue with the `i18n.routing` types, where an internal transformation was causing the generation of incorrect types for integrations.

## 4.4.1

### Patch Changes

- [#9795](https://github.com/withastro/astro/pull/9795) [`5acc3135ba5309a566def466fbcbabd23f70cd68`](https://github.com/withastro/astro/commit/5acc3135ba5309a566def466fbcbabd23f70cd68) Thanks [@lilnasy](https://github.com/lilnasy)! - Refactors internals relating to middleware, endpoints, and page rendering.

- [#10105](https://github.com/withastro/astro/pull/10105) [`1f598b372410066c6fcd41cba9915f6aaf7befa8`](https://github.com/withastro/astro/commit/1f598b372410066c6fcd41cba9915f6aaf7befa8) Thanks [@negativems](https://github.com/negativems)! - Fixes an issue where some astro commands failed if the astro config file or an integration used the global `crypto` object.

- [#10165](https://github.com/withastro/astro/pull/10165) [`d50dddb71d87ce5b7928920f10eb4946a5339f86`](https://github.com/withastro/astro/commit/d50dddb71d87ce5b7928920f10eb4946a5339f86) Thanks [@ematipico](https://github.com/ematipico)! - Fixes an issue where the `i18n.routing` object had all its fields defined as mandatory. Now they all are optionals and shouldn't break when using `astro.config.mts`.

- [#10132](https://github.com/withastro/astro/pull/10132) [`1da9c5f2f3fe70b0206d1b3e0c01744fa40d511c`](https://github.com/withastro/astro/commit/1da9c5f2f3fe70b0206d1b3e0c01744fa40d511c) Thanks [@bluwy](https://github.com/bluwy)! - Simplifies internal Vite preview server teardown

- [#10163](https://github.com/withastro/astro/pull/10163) [`b92d35f1026f3e99abb888d1a845bdda4efdc327`](https://github.com/withastro/astro/commit/b92d35f1026f3e99abb888d1a845bdda4efdc327) Thanks [@mingjunlu](https://github.com/mingjunlu)! - Fixes an issue where audit fails to initialize when encountered `<a>` inside `<svg>`

- [#10079](https://github.com/withastro/astro/pull/10079) [`80f8996514e6d0546e94bd927650cd4ab2f1fa2f`](https://github.com/withastro/astro/commit/80f8996514e6d0546e94bd927650cd4ab2f1fa2f) Thanks [@ktym4a](https://github.com/ktym4a)! - Fix integrationData fetch to always be called even if View Transition is enabled.

- [#10139](https://github.com/withastro/astro/pull/10139) [`3c73441eb2eaba767d6dad1b30c0353195d28791`](https://github.com/withastro/astro/commit/3c73441eb2eaba767d6dad1b30c0353195d28791) Thanks [@bluwy](https://github.com/bluwy)! - Fixes style-only change detection for Astro files if both the markup and styles are updated

## 4.4.0

### Minor Changes

- [#9614](https://github.com/withastro/astro/pull/9614) [`d469bebd7b45b060dc41d82ab1cf18ee6de7e051`](https://github.com/withastro/astro/commit/d469bebd7b45b060dc41d82ab1cf18ee6de7e051) Thanks [@matthewp](https://github.com/matthewp)! - Improves Node.js streaming performance.

  This uses an `AsyncIterable` instead of a `ReadableStream` to do streaming in Node.js. This is a non-standard enhancement by Node, which is done only in that environment.

- [#10001](https://github.com/withastro/astro/pull/10001) [`748b2e87cd44d8bcc1ab9d7e504703057e2000cd`](https://github.com/withastro/astro/commit/748b2e87cd44d8bcc1ab9d7e504703057e2000cd) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Removes content collection warning when a configured collection does not have a matching directory name. This should resolve `i18n` collection warnings for Starlight users.

  This also ensures configured collection names are always included in `getCollection()` and `getEntry()` types even when a matching directory is absent. We hope this allows users to discover typos during development by surfacing type information.

- [#10074](https://github.com/withastro/astro/pull/10074) [`7443929381b47db0639c49a4d32aec4177bd9102`](https://github.com/withastro/astro/commit/7443929381b47db0639c49a4d32aec4177bd9102) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add a UI showing the list of found problems when using the audit app in the dev toolbar

- [#10099](https://github.com/withastro/astro/pull/10099) [`b340f8fe3aaa81e38c4f1aa41498b159dc733d86`](https://github.com/withastro/astro/commit/b340f8fe3aaa81e38c4f1aa41498b159dc733d86) Thanks [@martrapp](https://github.com/martrapp)! - Fixes a regression where view transition names containing special characters such as spaces or punctuation stopped working.

  Regular use naming your transitions with `transition: name` is unaffected.

  However, this fix may result in breaking changes if your project relies on the particular character encoding strategy Astro uses to translate `transition:name` directives into values of the underlying CSS `view-transition-name` property. For example, `Welcome to Astro` is now encoded as `Welcome_20to_20Astro_2e`.

  This mainly affects spaces and punctuation marks but no Unicode characters with codes >= 128.

- [#9976](https://github.com/withastro/astro/pull/9976) [`91f75afbc642b6e73dd4ec18a1fe2c3128c68132`](https://github.com/withastro/astro/commit/91f75afbc642b6e73dd4ec18a1fe2c3128c68132) Thanks [@OliverSpeir](https://github.com/OliverSpeir)! - Adds a new optional `astro:assets` image attribute `inferSize` for use with remote images.

  Remote images can now have their dimensions inferred just like local images. Setting `inferSize` to `true` allows you to use `getImage()` and the `<Image />` and `<Picture />` components without setting the `width` and `height` properties.

  ```astro
  ---
  import { Image, Picture, getImage } from 'astro:assets';
  const myPic = await getImage({ src: 'https://example.com/example.png', inferSize: true });
  ---

  <Image src="https://example.com/example.png" inferSize alt="" />
  <Picture src="https://example.com/example.png" inferSize alt="" />
  ```

  Read more about [using `inferSize` with remote images](https://docs.astro.build/en/guides/images/#infersize) in our documentation.

- [#10015](https://github.com/withastro/astro/pull/10015) [`6884b103c8314a43e926c6acdf947cbf812a21f4`](https://github.com/withastro/astro/commit/6884b103c8314a43e926c6acdf947cbf812a21f4) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds initial support for performance audits to the dev toolbar

### Patch Changes

- [#10116](https://github.com/withastro/astro/pull/10116) [`4bcc249a9f34aaac59658ca626c828bd6dbb8046`](https://github.com/withastro/astro/commit/4bcc249a9f34aaac59658ca626c828bd6dbb8046) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where the dev server froze when typescript aliases were used.

- [#10096](https://github.com/withastro/astro/pull/10096) [`227cd83a51bbd451dc223fd16f4cf1b87b8e44f8`](https://github.com/withastro/astro/commit/227cd83a51bbd451dc223fd16f4cf1b87b8e44f8) Thanks [@Fryuni](https://github.com/Fryuni)! - Fixes regression on routing priority for multi-layer index pages

  The sorting algorithm positions more specific routes before less specific routes, and considers index pages to be more specific than a dynamic route with a rest parameter inside of it.
  This means that `/blog` is considered more specific than `/blog/[...slug]`.

  But this special case was being applied incorrectly to indexes, which could cause a problem in scenarios like the following:

  - `/`
  - `/blog`
  - `/blog/[...slug]`

  The algorithm would make the following comparisons:

  - `/` is more specific than `/blog` (incorrect)
  - `/blog/[...slug]` is more specific than `/` (correct)
  - `/blog` is more specific than `/blog/[...slug]` (correct)

  Although the incorrect first comparison is not a problem by itself, it could cause the algorithm to make the wrong decision.
  Depending on the other routes in the project, the sorting could perform just the last two comparisons and by transitivity infer the inverse of the third (`/blog/[...slug` > `/` > `/blog`), which is incorrect.

  Now the algorithm doesn't have a special case for index pages and instead does the comparison soleley for rest parameter segments and their immediate parents, which is consistent with the transitivity property.

- [#10120](https://github.com/withastro/astro/pull/10120) [`787e6f52470cf07fb50c865948b2bc8fe45a6d31`](https://github.com/withastro/astro/commit/787e6f52470cf07fb50c865948b2bc8fe45a6d31) Thanks [@bluwy](https://github.com/bluwy)! - Updates and supports Vite 5.1

- [#10096](https://github.com/withastro/astro/pull/10096) [`227cd83a51bbd451dc223fd16f4cf1b87b8e44f8`](https://github.com/withastro/astro/commit/227cd83a51bbd451dc223fd16f4cf1b87b8e44f8) Thanks [@Fryuni](https://github.com/Fryuni)! - Fixes edge case on i18n fallback routes

  Previously index routes deeply nested in the default locale, like `/some/nested/index.astro` could be mistaked as the root index for the default locale, resulting in an incorrect redirect on `/`.

- [#10112](https://github.com/withastro/astro/pull/10112) [`476b79a61165d0aac5e98459a4ec90762050a14b`](https://github.com/withastro/astro/commit/476b79a61165d0aac5e98459a4ec90762050a14b) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Renames the home Astro Devoolbar App to `astro:home`

- [#10117](https://github.com/withastro/astro/pull/10117) [`51b6ff7403c1223b1c399e88373075972c82c24c`](https://github.com/withastro/astro/commit/51b6ff7403c1223b1c399e88373075972c82c24c) Thanks [@hippotastic](https://github.com/hippotastic)! - Fixes an issue where `create astro`, `astro add` and `@astrojs/upgrade` would fail due to unexpected package manager CLI output.

## 4.3.7

### Patch Changes

- [#9857](https://github.com/withastro/astro/pull/9857) [`73bd900754365b006ee730df9f379ba924e5b3fa`](https://github.com/withastro/astro/commit/73bd900754365b006ee730df9f379ba924e5b3fa) Thanks [@iamyunsin](https://github.com/iamyunsin)! - Fixes false positives in the dev overlay audit when multiple `role` values exist.

- [#10075](https://github.com/withastro/astro/pull/10075) [`71273edbb429b5afdba6f8ee14681b66e4c09ecc`](https://github.com/withastro/astro/commit/71273edbb429b5afdba6f8ee14681b66e4c09ecc) Thanks [@lilnasy](https://github.com/lilnasy)! - Improves error messages for island hydration.

- [#10072](https://github.com/withastro/astro/pull/10072) [`8106178043050d142bf385bed2990730518f28e2`](https://github.com/withastro/astro/commit/8106178043050d142bf385bed2990730518f28e2) Thanks [@lilnasy](https://github.com/lilnasy)! - Clarifies error messages in endpoint routing.

- [#9971](https://github.com/withastro/astro/pull/9971) [`d9266c4467ca0faa1213c1a5995164e5655ab375`](https://github.com/withastro/astro/commit/d9266c4467ca0faa1213c1a5995164e5655ab375) Thanks [@mingjunlu](https://github.com/mingjunlu)! - Fixes an issue where ReadableStream wasn't canceled in dev mode

## 4.3.6

### Patch Changes

- [#10063](https://github.com/withastro/astro/pull/10063) [`dac759798c111494e76affd2c2504d63944871fe`](https://github.com/withastro/astro/commit/dac759798c111494e76affd2c2504d63944871fe) Thanks [@marwan-mohamed12](https://github.com/marwan-mohamed12)! - Moves `shikiji-core` from `devDependencies` to `dependencies` to prevent type errors

- [#10067](https://github.com/withastro/astro/pull/10067) [`989ea63bb2a5a670021541198aa70b8dc7c4bd2f`](https://github.com/withastro/astro/commit/989ea63bb2a5a670021541198aa70b8dc7c4bd2f) Thanks [@ematipico](https://github.com/ematipico)! - Fixes a regression in the `astro:i18n` module, where the functions `getAbsoluteLocaleUrl` and `getAbsoluteLocaleUrlList` returned a URL with double slash with a certain combination of options.

- [#10060](https://github.com/withastro/astro/pull/10060) [`1810309e65c596266355c3b7bb36cdac70f3305e`](https://github.com/withastro/astro/commit/1810309e65c596266355c3b7bb36cdac70f3305e) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where custom client directives added by integrations broke builds with a custom root.

- [#9991](https://github.com/withastro/astro/pull/9991) [`8fb67c81bb84530b39df4a1449c0862def0854af`](https://github.com/withastro/astro/commit/8fb67c81bb84530b39df4a1449c0862def0854af) Thanks [@ktym4a](https://github.com/ktym4a)! - Increases compatibility with standard browser behavior by changing where view transitions occur on browser back navigation.

## 4.3.5

### Patch Changes

- [#10022](https://github.com/withastro/astro/pull/10022) [`3fc76efb2a8faa47edf67562a1f0c84a19be1b33`](https://github.com/withastro/astro/commit/3fc76efb2a8faa47edf67562a1f0c84a19be1b33) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes a regression where types for the `astro:content` module did not include required exports, leading to typescript errors.

- [#10016](https://github.com/withastro/astro/pull/10016) [`037e4f12dd2f460d66f72c9f2d992b95e74d2da9`](https://github.com/withastro/astro/commit/037e4f12dd2f460d66f72c9f2d992b95e74d2da9) Thanks [@ematipico](https://github.com/ematipico)! - Fixes a bug where routes with a name that start with the name of the `i18n.defaultLocale` were incorrectly returning a 404 response.

## 4.3.4

### Patch Changes

- [#10013](https://github.com/withastro/astro/pull/10013) [`e6b5306a7de779ce495d0ff076d302de0aa57eaf`](https://github.com/withastro/astro/commit/e6b5306a7de779ce495d0ff076d302de0aa57eaf) Thanks [@delucis](https://github.com/delucis)! - Fixes a regression in content collection types

- [#10003](https://github.com/withastro/astro/pull/10003) [`ce4283331f18c6178654dd705e3cf02efeef004a`](https://github.com/withastro/astro/commit/ce4283331f18c6178654dd705e3cf02efeef004a) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Adds support for `.strict()` on content collection schemas when a custom `slug` is present.

## 4.3.3

### Patch Changes

- [#9998](https://github.com/withastro/astro/pull/9998) [`18ac0940ea1b49b6b0ddd9be1f96aef416e2d7ee`](https://github.com/withastro/astro/commit/18ac0940ea1b49b6b0ddd9be1f96aef416e2d7ee) Thanks [@ematipico](https://github.com/ematipico)! - Fixes a bug in `Astro.currentLocale` that wasn't returning the correct locale when a locale is configured via `path`

- [#9998](https://github.com/withastro/astro/pull/9998) [`18ac0940ea1b49b6b0ddd9be1f96aef416e2d7ee`](https://github.com/withastro/astro/commit/18ac0940ea1b49b6b0ddd9be1f96aef416e2d7ee) Thanks [@ematipico](https://github.com/ematipico)! - Fixes a regression in `Astro.currentLocale` where it stopped working properly with dynamic routes

- [#9956](https://github.com/withastro/astro/pull/9956) [`81acac24a3cac5a9143155c1d9f838ea84a70421`](https://github.com/withastro/astro/commit/81acac24a3cac5a9143155c1d9f838ea84a70421) Thanks [@matthewp](https://github.com/matthewp)! - Fixes HMR for MDX dependencies in Content Collections

- [#9999](https://github.com/withastro/astro/pull/9999) [`c53a31321a935e4be04809046d7e0ba3cc41b272`](https://github.com/withastro/astro/commit/c53a31321a935e4be04809046d7e0ba3cc41b272) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Rollbacks the feature which allowed to dynamically generate slots with variable slot names due to unexpected regressions.

- [#9906](https://github.com/withastro/astro/pull/9906) [`3c0876cbed5033e6b5b42cc2b9d8b393d7e5a55e`](https://github.com/withastro/astro/commit/3c0876cbed5033e6b5b42cc2b9d8b393d7e5a55e) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Improves the types for the `astro:content` module by making low fidelity types available before running `astro sync`

## 4.3.2

### Patch Changes

- [#9932](https://github.com/withastro/astro/pull/9932) [`9f0d89fa7e9e7c08c8600b0c49c2cce7489a7582`](https://github.com/withastro/astro/commit/9f0d89fa7e9e7c08c8600b0c49c2cce7489a7582) Thanks [@ematipico](https://github.com/ematipico)! - Fixes a case where a warning was logged even when the feature `i18nDomains` wasn't enabled

- [#9907](https://github.com/withastro/astro/pull/9907) [`6c894af5ab79f290f4ff7feb68617a66e91febc1`](https://github.com/withastro/astro/commit/6c894af5ab79f290f4ff7feb68617a66e91febc1) Thanks [@ktym4a](https://github.com/ktym4a)! - Load 404.html on all non-existent paths on astro preview.

## 4.3.1

### Patch Changes

- [#9841](https://github.com/withastro/astro/pull/9841) [`27ea080e24e2c5cdc59b63b1dfe0a83a0c696597`](https://github.com/withastro/astro/commit/27ea080e24e2c5cdc59b63b1dfe0a83a0c696597) Thanks [@kristianbinau](https://github.com/kristianbinau)! - Makes the warning clearer when having a custom `base` and requesting a public URL without it

- [#9888](https://github.com/withastro/astro/pull/9888) [`9d2fdb293d6a7323e10126cebad18ef9a2ea2800`](https://github.com/withastro/astro/commit/9d2fdb293d6a7323e10126cebad18ef9a2ea2800) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improves error handling logic for the `astro sync` command.

- [#9918](https://github.com/withastro/astro/pull/9918) [`d52529e09450c84933dd15d6481edb32269f537b`](https://github.com/withastro/astro/commit/d52529e09450c84933dd15d6481edb32269f537b) Thanks [@LarryIVC](https://github.com/LarryIVC)! - Adds the `name` attribute to the `<details>` tag type

- [#9938](https://github.com/withastro/astro/pull/9938) [`1568afb78a163db63a4cde146dec87785a83db1d`](https://github.com/withastro/astro/commit/1568afb78a163db63a4cde146dec87785a83db1d) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes a regression where middleware did not run for prerendered pages and endpoints.

- [#9931](https://github.com/withastro/astro/pull/9931) [`44674418965d658733d3602668a9354e18f8ef89`](https://github.com/withastro/astro/commit/44674418965d658733d3602668a9354e18f8ef89) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes a regression where a response created with `Response.redirect` or containing `null` as the body never completed in node-based adapters.

## 4.3.0

### Minor Changes

- [#9839](https://github.com/withastro/astro/pull/9839) [`58f9e393a188702eef5329e41deff3dcb65a3230`](https://github.com/withastro/astro/commit/58f9e393a188702eef5329e41deff3dcb65a3230) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds a new `ComponentProps` type export from `astro/types` to get the props type of an Astro component.

  ```astro
  ---
  import type { ComponentProps } from 'astro/types';
  import Button from './Button.astro';

  type myButtonProps = ComponentProps<typeof Button>;
  ---
  ```

- [#9159](https://github.com/withastro/astro/pull/9159) [`7d937c158959e76443a02f740b10e251d14dbd8c`](https://github.com/withastro/astro/commit/7d937c158959e76443a02f740b10e251d14dbd8c) Thanks [@bluwy](https://github.com/bluwy)! - Adds CLI shortcuts as an easter egg for the dev server:

  - `o + enter`: opens the site in your browser
  - `q + enter`: quits the dev server
  - `h + enter`: prints all available shortcuts

- [#9764](https://github.com/withastro/astro/pull/9764) [`fad4f64aa149086feda2d1f3a0b655767034f1a8`](https://github.com/withastro/astro/commit/fad4f64aa149086feda2d1f3a0b655767034f1a8) Thanks [@matthewp](https://github.com/matthewp)! - Adds a new `build.format` configuration option: `'preserve'`. This option will preserve your source structure in the final build.

  The existing configuration options, `file` and `directory`, either build all of your HTML pages as files matching the route name (e.g. `/about.html`) or build all your files as `index.html` within a nested directory structure (e.g. `/about/index.html`), respectively. It was not previously possible to control the HTML file built on a per-file basis.

  One limitation of `build.format: 'file'` is that it cannot create `index.html` files for any individual routes (other than the base path of `/`) while otherwise building named files. Creating explicit index pages within your file structure still generates a file named for the page route (e.g. `src/pages/about/index.astro` builds `/about.html`) when using the `file` configuration option.

  Rather than make a breaking change to allow `build.format: 'file'` to be more flexible, we decided to create a new `build.format: 'preserve'`.

  The new format will preserve how the filesystem is structured and make sure that is mirrored over to production. Using this option:

  - `about.astro` becomes `about.html`
  - `about/index.astro` becomes `about/index.html`

  See the [`build.format` configuration options reference](https://docs.astro.build/en/reference/configuration-reference/#buildformat) for more details.

- [#9143](https://github.com/withastro/astro/pull/9143) [`041fdd5c89920f7ccf944b095f29e451f78b0e28`](https://github.com/withastro/astro/commit/041fdd5c89920f7ccf944b095f29e451f78b0e28) Thanks [@ematipico](https://github.com/ematipico)! - Adds experimental support for a new i18n domain routing option (`"domains"`) that allows you to configure different domains for individual locales in entirely server-rendered projects.

  To enable this in your project, first configure your `server`-rendered project's i18n routing with your preferences if you have not already done so. Then, set the `experimental.i18nDomains` flag to `true` and add `i18n.domains` to map any of your supported `locales` to custom URLs:

  ```js
  //astro.config.mjs"
  import { defineConfig } from 'astro/config';
  export default defineConfig({
    site: 'https://example.com',
    output: 'server', // required, with no prerendered pages
    adapter: node({
      mode: 'standalone',
    }),
    i18n: {
      defaultLocale: 'en',
      locales: ['es', 'en', 'fr', 'ja'],
      routing: {
        prefixDefaultLocale: false,
      },
      domains: {
        fr: 'https://fr.example.com',
        es: 'https://example.es',
      },
    },
    experimental: {
      i18nDomains: true,
    },
  });
  ```

  With `"domains"` configured, the URLs emitted by `getAbsoluteLocaleUrl()` and `getAbsoluteLocaleUrlList()` will use the options set in `i18n.domains`.

  ```js
  import { getAbsoluteLocaleUrl } from 'astro:i18n';

  getAbsoluteLocaleUrl('en', 'about'); // will return "https://example.com/about"
  getAbsoluteLocaleUrl('fr', 'about'); // will return "https://fr.example.com/about"
  getAbsoluteLocaleUrl('es', 'about'); // will return "https://example.es/about"
  getAbsoluteLocaleUrl('ja', 'about'); // will return "https://example.com/ja/about"
  ```

  Similarly, your localized files will create routes at corresponding URLs:

  - The file `/en/about.astro` will be reachable at the URL `https://example.com/about`.
  - The file `/fr/about.astro` will be reachable at the URL `https://fr.example.com/about`.
  - The file `/es/about.astro` will be reachable at the URL `https://example.es/about`.
  - The file `/ja/about.astro` will be reachable at the URL `https://example.com/ja/about`.

  See our [Internationalization Guide](https://docs.astro.build/en/guides/internationalization/#domains-experimental) for more details and limitations on this experimental routing feature.

- [#9755](https://github.com/withastro/astro/pull/9755) [`d4b886141bb342ac71b1c060e67d66ca2ffbb8bd`](https://github.com/withastro/astro/commit/d4b886141bb342ac71b1c060e67d66ca2ffbb8bd) Thanks [@OliverSpeir](https://github.com/OliverSpeir)! - Fixes an issue where images in Markdown required a relative specifier (e.g. `./`)

  Now, you can use the standard `![](img.png)` syntax in Markdown files for images colocated in the same folder: no relative specifier required!

  There is no need to update your project; your existing images will still continue to work. However, you may wish to remove any relative specifiers from these Markdown images as they are no longer necessary:

  ```diff
  - ![A cute dog](./dog.jpg)
  + ![A cute dog](dog.jpg)
  <!-- This dog lives in the same folder as my article! -->
  ```

### Patch Changes

- [#9908](https://github.com/withastro/astro/pull/9908) [`2f6d1faa6f2d6de2d4ccd2a48adf5adadc82e593`](https://github.com/withastro/astro/commit/2f6d1faa6f2d6de2d4ccd2a48adf5adadc82e593) Thanks [@lilnasy](https://github.com/lilnasy)! - Improves http behavior relating to errors encountered while streaming a response.

- [#9877](https://github.com/withastro/astro/pull/9877) [`7be5f94dcfc73a78d0fb301eeff51614d987a165`](https://github.com/withastro/astro/commit/7be5f94dcfc73a78d0fb301eeff51614d987a165) Thanks [@fabiankachlock](https://github.com/fabiankachlock)! - Fixes the content config type path on windows

- [#9143](https://github.com/withastro/astro/pull/9143) [`041fdd5c89920f7ccf944b095f29e451f78b0e28`](https://github.com/withastro/astro/commit/041fdd5c89920f7ccf944b095f29e451f78b0e28) Thanks [@ematipico](https://github.com/ematipico)! - Fixes an issue where the function `getLocaleRelativeUrlList` wasn't normalising the paths by default

- [#9911](https://github.com/withastro/astro/pull/9911) [`aaedb848b1d6f683840035865528506a346ea659`](https://github.com/withastro/astro/commit/aaedb848b1d6f683840035865528506a346ea659) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes an issue where some adapters that do not include a `start()` export would error rather than silently proceed

## 4.2.8

### Patch Changes

- [#9884](https://github.com/withastro/astro/pull/9884) [`37369550ab57ca529fd6c796e5b0e96e897ca6e5`](https://github.com/withastro/astro/commit/37369550ab57ca529fd6c796e5b0e96e897ca6e5) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where multiple cookies were sent in a single Set-Cookie header in the dev mode.

- [#9876](https://github.com/withastro/astro/pull/9876) [`e9027f194b939ac5a4d795ee1a2c24e4a6fbefc0`](https://github.com/withastro/astro/commit/e9027f194b939ac5a4d795ee1a2c24e4a6fbefc0) Thanks [@friedemannsommer](https://github.com/friedemannsommer)! - Fixes an issue where using `Response.redirect` in an endpoint led to an error.

- [#9882](https://github.com/withastro/astro/pull/9882) [`13c3b712c7ba45d0081f459fc06f142216a4ec59`](https://github.com/withastro/astro/commit/13c3b712c7ba45d0081f459fc06f142216a4ec59) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improves handling of YAML parsing errors

- [#9878](https://github.com/withastro/astro/pull/9878) [`a40a0ff5883c7915dd55881dcebd052b9f94a0eb`](https://github.com/withastro/astro/commit/a40a0ff5883c7915dd55881dcebd052b9f94a0eb) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where setting trailingSlash to "never" had no effect on `Astro.url`.

## 4.2.7

### Patch Changes

- [#9840](https://github.com/withastro/astro/pull/9840) [`70fdf1a5c660057152c1ca111dcc89ceda5c8840`](https://github.com/withastro/astro/commit/70fdf1a5c660057152c1ca111dcc89ceda5c8840) Thanks [@delucis](https://github.com/delucis)! - Expose `ContentConfig` type from `astro:content`

- [#9865](https://github.com/withastro/astro/pull/9865) [`00ba9f1947ca9016cd0ee4d8f6048027fab2ab9a`](https://github.com/withastro/astro/commit/00ba9f1947ca9016cd0ee4d8f6048027fab2ab9a) Thanks [@ematipico](https://github.com/ematipico)! - Fixes a bug in `Astro.currentLocale` where the value was incorrectly computed during the build.

- [#9838](https://github.com/withastro/astro/pull/9838) [`0a06d87a1e2b94be00a954f350c184222fa0594d`](https://github.com/withastro/astro/commit/0a06d87a1e2b94be00a954f350c184222fa0594d) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where `astro:i18n` could not be used in framework components.

- Updated dependencies [[`44c957f893c6bf5f5b7c78301de7b21c5975584d`](https://github.com/withastro/astro/commit/44c957f893c6bf5f5b7c78301de7b21c5975584d)]:
  - @astrojs/markdown-remark@4.2.1

## 4.2.6

### Patch Changes

- [#9825](https://github.com/withastro/astro/pull/9825) [`e4370e9e9dd862425eced25823c82e77d9516927`](https://github.com/withastro/astro/commit/e4370e9e9dd862425eced25823c82e77d9516927) Thanks [@tugrulates](https://github.com/tugrulates)! - Fixes false positive aria role errors on interactive elements

- [#9828](https://github.com/withastro/astro/pull/9828) [`a3df9d83ca92abb5f08f576631019c1604204bd9`](https://github.com/withastro/astro/commit/a3df9d83ca92abb5f08f576631019c1604204bd9) Thanks [@ematipico](https://github.com/ematipico)! - Fixes a case where shared modules among pages and middleware were transformed to a no-op after the build.

- [#9834](https://github.com/withastro/astro/pull/9834) [`1885cea308a62b173a50967cf5a0b174b3c3f3f1`](https://github.com/withastro/astro/commit/1885cea308a62b173a50967cf5a0b174b3c3f3f1) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes third-party dev toolbar apps not loading correctly when using absolute paths on Windows

## 4.2.5

### Patch Changes

- [#9818](https://github.com/withastro/astro/pull/9818) [`d688954c5adba75b0d676694fbf5fb0da1c0af13`](https://github.com/withastro/astro/commit/d688954c5adba75b0d676694fbf5fb0da1c0af13) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Improves the wording of a few confusing error messages

- [#9680](https://github.com/withastro/astro/pull/9680) [`5d7db1dbb0ff06db98e08b0ca241ff09d0b8b44d`](https://github.com/withastro/astro/commit/5d7db1dbb0ff06db98e08b0ca241ff09d0b8b44d) Thanks [@loucyx](https://github.com/loucyx)! - Fixes types generation from Content Collections config file

- [#9822](https://github.com/withastro/astro/pull/9822) [`bd880e8437ea2df16f322f604865c1148a9fd4cf`](https://github.com/withastro/astro/commit/bd880e8437ea2df16f322f604865c1148a9fd4cf) Thanks [@liruifengv](https://github.com/liruifengv)! - Applies the correct escaping to identifiers used with `transition:name`.

- [#9830](https://github.com/withastro/astro/pull/9830) [`f3d22136e53fd902310024519fc4de83f0a58039`](https://github.com/withastro/astro/commit/f3d22136e53fd902310024519fc4de83f0a58039) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where 404 responses from endpoints were replaced with contents of 404.astro in dev mode.

- [#9816](https://github.com/withastro/astro/pull/9816) [`2a44c8f93201958fba2d1e83046eabcaef186b7c`](https://github.com/withastro/astro/commit/2a44c8f93201958fba2d1e83046eabcaef186b7c) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds telemetry for when apps are toggled in the dev toolbar. This data is completely anonymous and only the names of built-in apps are shared with us. This data will help us monitor how much the dev toolbar is used and which apps are used more. For more information on how Astro collects telemetry, visit the following page: https://astro.build/telemetry/

- [#9807](https://github.com/withastro/astro/pull/9807) [`b3f313138bb314e2b416c29cda507383c2a9f816`](https://github.com/withastro/astro/commit/b3f313138bb314e2b416c29cda507383c2a9f816) Thanks [@bluwy](https://github.com/bluwy)! - Fixes environment variables replacement for `export const prerender`

- [#9790](https://github.com/withastro/astro/pull/9790) [`267c5aa2c7706f0ea3447f20a09d85aa560866ad`](https://github.com/withastro/astro/commit/267c5aa2c7706f0ea3447f20a09d85aa560866ad) Thanks [@lilnasy](https://github.com/lilnasy)! - Refactors internals of the `astro:i18n` module to be more maintainable.

- [#9776](https://github.com/withastro/astro/pull/9776) [`dc75180aa698b298264362bab7f00391af427798`](https://github.com/withastro/astro/commit/dc75180aa698b298264362bab7f00391af427798) Thanks [@lilnasy](https://github.com/lilnasy)! - Simplifies internals that handle middleware.

## 4.2.4

### Patch Changes

- [#9792](https://github.com/withastro/astro/pull/9792) [`e22cb8b10c0ca9f6d88cab53cd2713f57875ab4b`](https://github.com/withastro/astro/commit/e22cb8b10c0ca9f6d88cab53cd2713f57875ab4b) Thanks [@tugrulates](https://github.com/tugrulates)! - Accept aria role `switch` on toolbar audit.

- [#9606](https://github.com/withastro/astro/pull/9606) [`e6945bcf23b6ad29388bbadaf5bb3cc31dd4a114`](https://github.com/withastro/astro/commit/e6945bcf23b6ad29388bbadaf5bb3cc31dd4a114) Thanks [@eryue0220](https://github.com/eryue0220)! - Fixes escaping behavior for `.html` files and components

- [#9786](https://github.com/withastro/astro/pull/9786) [`5b29550996a7f5459a0d611feea6e51d44e1d8ed`](https://github.com/withastro/astro/commit/5b29550996a7f5459a0d611feea6e51d44e1d8ed) Thanks [@Fryuni](https://github.com/Fryuni)! - Fixes a regression in routing priority for index pages in rest parameter folders and dynamic sibling trees.

  Considering the following tree:

  ```
  src/pages/
  ├── index.astro
  ├── static.astro
  ├── [dynamic_file].astro
  ├── [...rest_file].astro
  ├── blog/
  │   └── index.astro
  ├── [dynamic_folder]/
  │   ├── index.astro
  │   ├── static.astro
  │   └── [...rest].astro
  └── [...rest_folder]/
      ├── index.astro
      └── static.astro
  ```

  The routes are sorted in this order:

  ```
  /src/pages/index.astro
  /src/pages/blog/index.astro
  /src/pages/static.astro
  /src/pages/[dynamic_folder]/index.astro
  /src/pages/[dynamic_file].astro
  /src/pages/[dynamic_folder]/static.astro
  /src/pages/[dynamic_folder]/[...rest].astro
  /src/pages/[...rest_folder]/static.astro
  /src/pages/[...rest_folder]/index.astro
  /src/pages/[...rest_file]/index.astro
  ```

  This allows for index files to be used as overrides to rest parameter routes on SSR when the rest parameter matching `undefined` is not desired.

- [#9775](https://github.com/withastro/astro/pull/9775) [`075706f26d2e11e66ef8b52288d07e3c0fa97eb1`](https://github.com/withastro/astro/commit/075706f26d2e11e66ef8b52288d07e3c0fa97eb1) Thanks [@lilnasy](https://github.com/lilnasy)! - Simplifies internals that handle endpoints.

- [#9773](https://github.com/withastro/astro/pull/9773) [`9aa7a5368c502ae488d3a173e732d81f3d000e98`](https://github.com/withastro/astro/commit/9aa7a5368c502ae488d3a173e732d81f3d000e98) Thanks [@LunaticMuch](https://github.com/LunaticMuch)! - Raises the required vite version to address a vulnerability in `vite.server.fs.deny` that affected the dev mode.

- [#9781](https://github.com/withastro/astro/pull/9781) [`ccc05d54014e24c492ca5fddd4862f318aac8172`](https://github.com/withastro/astro/commit/ccc05d54014e24c492ca5fddd4862f318aac8172) Thanks [@stevenbenner](https://github.com/stevenbenner)! - Fix build failure when image file name includes special characters

## 4.2.3

### Patch Changes

- [#9768](https://github.com/withastro/astro/pull/9768) [`eed0e8757c35dde549707e71c45862438a043fb0`](https://github.com/withastro/astro/commit/eed0e8757c35dde549707e71c45862438a043fb0) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix apps being able to crash the dev toolbar in certain cases

## 4.2.2

### Patch Changes

- [#9712](https://github.com/withastro/astro/pull/9712) [`ea6cbd06a2580527786707ec735079ff9abd0ec0`](https://github.com/withastro/astro/commit/ea6cbd06a2580527786707ec735079ff9abd0ec0) Thanks [@bluwy](https://github.com/bluwy)! - Improves HMR behavior for style-only changes in `.astro` files

- [#9739](https://github.com/withastro/astro/pull/9739) [`3ecb3ef64326a8f77aa170df1e3c89cb5c12cc93`](https://github.com/withastro/astro/commit/3ecb3ef64326a8f77aa170df1e3c89cb5c12cc93) Thanks [@ematipico](https://github.com/ematipico)! - Makes i18n redirects take the `build.format` configuration into account

- [#9762](https://github.com/withastro/astro/pull/9762) [`1fba85681e86aa83d24336d4209cafbc76b37607`](https://github.com/withastro/astro/commit/1fba85681e86aa83d24336d4209cafbc76b37607) Thanks [@ematipico](https://github.com/ematipico)! - Adds `popovertarget" to the attribute that can be passed to the `button` element

- [#9605](https://github.com/withastro/astro/pull/9605) [`8ce40a417c854d9e6a4fa7d5a85d50a6436b4a3c`](https://github.com/withastro/astro/commit/8ce40a417c854d9e6a4fa7d5a85d50a6436b4a3c) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Adds support for dynamic slot names

- [#9381](https://github.com/withastro/astro/pull/9381) [`9e01f9cc1efcfb938355829676d51b24818ab2bb`](https://github.com/withastro/astro/commit/9e01f9cc1efcfb938355829676d51b24818ab2bb) Thanks [@martrapp](https://github.com/martrapp)! - Improves the CLI output of `astro preferences list` to include additional relevant information

- [#9741](https://github.com/withastro/astro/pull/9741) [`73d74402007896204ee965f6553dc83b3dec8d2f`](https://github.com/withastro/astro/commit/73d74402007896204ee965f6553dc83b3dec8d2f) Thanks [@taktran](https://github.com/taktran)! - Fixes an issue where dot files were not copied over from the public folder to the output folder, when build command was run in a folder other than the root of the project.

- [#9730](https://github.com/withastro/astro/pull/9730) [`8d2e5db096f1e7b098511b4fe9357434a6ff0703`](https://github.com/withastro/astro/commit/8d2e5db096f1e7b098511b4fe9357434a6ff0703) Thanks [@Blede2000](https://github.com/Blede2000)! - Allow i18n routing utilities like getRelativeLocaleUrl to also get the default local path when redirectToDefaultLocale is false

- Updated dependencies [[`53c69dcc82cdf4000aff13a6c11fffe19096cf45`](https://github.com/withastro/astro/commit/53c69dcc82cdf4000aff13a6c11fffe19096cf45), [`2f81cffa9da9db0e2802d303f94feaee8d2f54ec`](https://github.com/withastro/astro/commit/2f81cffa9da9db0e2802d303f94feaee8d2f54ec), [`a505190933365268d48139a5f197a3cfb5570870`](https://github.com/withastro/astro/commit/a505190933365268d48139a5f197a3cfb5570870)]:
  - @astrojs/markdown-remark@4.2.0

## 4.2.1

### Patch Changes

- [#9726](https://github.com/withastro/astro/pull/9726) [`a4b696def3a7eb18c1ae48b10fd3758a1874b6fe`](https://github.com/withastro/astro/commit/a4b696def3a7eb18c1ae48b10fd3758a1874b6fe) Thanks [@Fryuni](https://github.com/Fryuni)! - Fixes a regression in routing priority between `index.astro` and dynamic routes with rest parameters

## 4.2.0

### Minor Changes

- [#9566](https://github.com/withastro/astro/pull/9566) [`165cfc154be477337037185c32b308616d1ed6fa`](https://github.com/withastro/astro/commit/165cfc154be477337037185c32b308616d1ed6fa) Thanks [@OliverSpeir](https://github.com/OliverSpeir)! - Allows remark plugins to pass options specifying how images in `.md` files will be optimized

- [#9661](https://github.com/withastro/astro/pull/9661) [`d6edc7540864cf5d294d7b881eb886a3804f6d05`](https://github.com/withastro/astro/commit/d6edc7540864cf5d294d7b881eb886a3804f6d05) Thanks [@ematipico](https://github.com/ematipico)! - Adds new helper functions for adapter developers.

  - `Astro.clientAddress` can now be passed directly to the `app.render()` method.

  ```ts
  const response = await app.render(request, { clientAddress: '012.123.23.3' });
  ```

  - Helper functions for converting Node.js HTTP request and response objects to web-compatible `Request` and `Response` objects are now provided as static methods on the `NodeApp` class.

  ```ts
  http.createServer((nodeReq, nodeRes) => {
    const request: Request = NodeApp.createRequest(nodeReq);
    const response = await app.render(request);
    await NodeApp.writeResponse(response, nodeRes);
  });
  ```

  - Cookies added via `Astro.cookies.set()` can now be automatically added to the `Response` object by passing the `addCookieHeader` option to `app.render()`.

  ```diff
  -const response = await app.render(request)
  -const setCookieHeaders: Array<string> = Array.from(app.setCookieHeaders(webResponse));

  -if (setCookieHeaders.length) {
  -    for (const setCookieHeader of setCookieHeaders) {
  -        headers.append('set-cookie', setCookieHeader);
  -    }
  -}
  +const response = await app.render(request, { addCookieHeader: true })
  ```

- [#9638](https://github.com/withastro/astro/pull/9638) [`f1a61268061b8834f39a9b38bca043ae41caed04`](https://github.com/withastro/astro/commit/f1a61268061b8834f39a9b38bca043ae41caed04) Thanks [@ematipico](https://github.com/ematipico)! - Adds a new `i18n.routing` config option `redirectToDefaultLocale` to disable automatic redirects of the root URL (`/`) to the default locale when `prefixDefaultLocale: true` is set.

  In projects where every route, including the default locale, is prefixed with `/[locale]/` path, this property allows you to control whether or not `src/pages/index.astro` should automatically redirect your site visitors from `/` to `/[defaultLocale]`.

  You can now opt out of this automatic redirection by setting `redirectToDefaultLocale: false`:

  ```js
  // astro.config.mjs
  export default defineConfig({
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'fr'],
      routing: {
        prefixDefaultLocale: true,
        redirectToDefaultLocale: false,
      },
    },
  });
  ```

- [#9671](https://github.com/withastro/astro/pull/9671) [`8521ff77fbf7e867701cc30d18253856914dbd1b`](https://github.com/withastro/astro/commit/8521ff77fbf7e867701cc30d18253856914dbd1b) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Removes the requirement for non-content files and assets inside content collections to be prefixed with an underscore. For files with extensions like `.astro` or `.css`, you can now remove underscores without seeing a warning in the terminal.

  ```diff
  src/content/blog/
  post.mdx
  - _styles.css
  - _Component.astro
  + styles.css
  + Component.astro
  ```

  Continue to use underscores in your content collections to exclude individual content files, such as drafts, from the build output.

- [#9567](https://github.com/withastro/astro/pull/9567) [`3a4d5ec8001ebf95c917fdc0d186d29650533d93`](https://github.com/withastro/astro/commit/3a4d5ec8001ebf95c917fdc0d186d29650533d93) Thanks [@OliverSpeir](https://github.com/OliverSpeir)! - Improves the a11y-missing-content rule and error message for audit feature of dev-overlay. This also fixes an error where this check was falsely reporting accessibility errors.

- [#9643](https://github.com/withastro/astro/pull/9643) [`e9a72d9a91a3741566866bcaab11172cb0dc7d31`](https://github.com/withastro/astro/commit/e9a72d9a91a3741566866bcaab11172cb0dc7d31) Thanks [@blackmann](https://github.com/blackmann)! - Adds a new `markdown.shikiConfig.transformers` config option. You can use this option to transform the Shikiji hast (AST format of the generated HTML) to customize the final HTML. Also updates Shikiji to the latest stable version.

  See [Shikiji's documentation](https://shikiji.netlify.app/guide/transformers) for more details about creating your own custom transformers, and [a list of common transformers](https://shikiji.netlify.app/packages/transformers) you can add directly to your project.

- [#9644](https://github.com/withastro/astro/pull/9644) [`a5f1682347e602330246129d4666a9227374c832`](https://github.com/withastro/astro/commit/a5f1682347e602330246129d4666a9227374c832) Thanks [@rossrobino](https://github.com/rossrobino)! - Adds an experimental flag `clientPrerender` to prerender your prefetched pages on the client with the [Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API).

  ```js
  // astro.config.mjs
  {
    prefetch: {
      prefetchAll: true,
      defaultStrategy: 'viewport',
    },
    experimental: {
      clientPrerender: true,
    },
  }
  ```

  Enabling this feature overrides the default `prefetch` behavior globally to prerender links on the client according to your `prefetch` configuration. Instead of appending a `<link>` tag to the head of the document or fetching the page with JavaScript, a `<script>` tag will be appended with the corresponding speculation rules.

  Client side prerendering requires browser support. If the Speculation Rules API is not supported, `prefetch` will fallback to the supported strategy.

  See the [Prefetch Guide](https://docs.astro.build/en/guides/prefetch/) for more `prefetch` options and usage.

- [#9439](https://github.com/withastro/astro/pull/9439) [`fd17f4a40b83d14350dce691aeb79d87e8fcaf40`](https://github.com/withastro/astro/commit/fd17f4a40b83d14350dce691aeb79d87e8fcaf40) Thanks [@Fryuni](https://github.com/Fryuni)! - Adds an experimental flag `globalRoutePriority` to prioritize redirects and injected routes equally alongside file-based project routes, following the same [route priority order rules](https://docs.astro.build/en/core-concepts/routing/#route-priority-order) for all routes.

  ```js
  // astro.config.mjs
  export default defineConfig({
    experimental: {
      globalRoutePriority: true,
    },
  });
  ```

  Enabling this feature ensures that all routes in your project follow the same, predictable route priority order rules. In particular, this avoids an issue where redirects or injected routes (e.g. from an integration) would always take precedence over local route definitions, making it impossible to override some routes locally.

  The following table shows which route builds certain page URLs when file-based routes, injected routes, and redirects are combined as shown below:

  - File-based route: `/blog/post/[pid]`
  - File-based route: `/[page]`
  - Injected route: `/blog/[...slug]`
  - Redirect: `/blog/tags/[tag]` -> `/[tag]`
  - Redirect: `/posts` -> `/blog`

  URLs are handled by the following routes:

  | Page               | Current Behavior                 | Global Routing Priority Behavior    |
  | ------------------ | -------------------------------- | ----------------------------------- |
  | `/blog/tags/astro` | Injected route `/blog/[...slug]` | Redirect to `/tags/[tag]`           |
  | `/blog/post/0`     | Injected route `/blog/[...slug]` | File-based route `/blog/post/[pid]` |
  | `/posts`           | File-based route `/[page]`       | Redirect to `/blog`                 |

  In the event of route collisions, where two routes of equal route priority attempt to build the same URL, Astro will log a warning identifying the conflicting routes.

### Patch Changes

- [#9719](https://github.com/withastro/astro/pull/9719) [`7e1db8b4ce2da9e044ea0393e533c6db2561ac90`](https://github.com/withastro/astro/commit/7e1db8b4ce2da9e044ea0393e533c6db2561ac90) Thanks [@bluwy](https://github.com/bluwy)! - Refactors Vite config to avoid Vite 5.1 warnings

- [#9439](https://github.com/withastro/astro/pull/9439) [`fd17f4a40b83d14350dce691aeb79d87e8fcaf40`](https://github.com/withastro/astro/commit/fd17f4a40b83d14350dce691aeb79d87e8fcaf40) Thanks [@Fryuni](https://github.com/Fryuni)! - Updates [Astro's routing priority rules](https://docs.astro.build/en/core-concepts/routing/#route-priority-order) to prioritize the most specifically-defined routes.

  Now, routes with **more defined path segments** will take precedence over less specific routes.

  For example, `/blog/posts/[pid].astro` (3 path segments) takes precedence over `/blog/[...slug].astro` (2 path segments). This means that:

  - `/pages/blog/posts/[id].astro` will build routes of the form `/blog/posts/1` and `/blog/posts/a`
  - `/pages/blog/[...slug].astro` will build routes of a variety of forms, including `blog/1` and `/blog/posts/1/a`, but will not build either of the previous routes.

  For a complete list of Astro's routing priority rules, please see the [routing guide](https://docs.astro.build/en/core-concepts/routing/#route-priority-order). This should not be a breaking change, but you may wish to inspect your built routes to ensure that your project is unaffected.

- [#9706](https://github.com/withastro/astro/pull/9706) [`1539e04a8e5865027b3a8718c6f142885e7c8d88`](https://github.com/withastro/astro/commit/1539e04a8e5865027b3a8718c6f142885e7c8d88) Thanks [@bluwy](https://github.com/bluwy)! - Simplifies HMR handling, improves circular dependency invalidation, and fixes Astro styles invalidation

- Updated dependencies [[`165cfc154be477337037185c32b308616d1ed6fa`](https://github.com/withastro/astro/commit/165cfc154be477337037185c32b308616d1ed6fa), [`e9a72d9a91a3741566866bcaab11172cb0dc7d31`](https://github.com/withastro/astro/commit/e9a72d9a91a3741566866bcaab11172cb0dc7d31)]:
  - @astrojs/markdown-remark@4.1.0

## 4.1.3

### Patch Changes

- [#9665](https://github.com/withastro/astro/pull/9665) [`d02a3c48a3ce204649d22e17b1e26fb5a6a60bcf`](https://github.com/withastro/astro/commit/d02a3c48a3ce204649d22e17b1e26fb5a6a60bcf) Thanks [@bluwy](https://github.com/bluwy)! - Disables internal file watcher for one-off Vite servers to improve start-up performance

- [#9664](https://github.com/withastro/astro/pull/9664) [`1bf0ddd2777ae5f9fde3fd854a9e75aa56c080f2`](https://github.com/withastro/astro/commit/1bf0ddd2777ae5f9fde3fd854a9e75aa56c080f2) Thanks [@bluwy](https://github.com/bluwy)! - Improves HMR for Astro style and script modules

- [#9668](https://github.com/withastro/astro/pull/9668) [`74008cc23853ed507b144efab02300202c5386ed`](https://github.com/withastro/astro/commit/74008cc23853ed507b144efab02300202c5386ed) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix the passthrough image service not generating `srcset` values properly

- [#9693](https://github.com/withastro/astro/pull/9693) [`d38b2a4fe827e956662fcf457d1f1f84832c2f15`](https://github.com/withastro/astro/commit/d38b2a4fe827e956662fcf457d1f1f84832c2f15) Thanks [@kidylee](https://github.com/kidylee)! - Disables View Transition form handling when the `action` property points to an external URL

- [#9678](https://github.com/withastro/astro/pull/9678) [`091097e60ef38dadb87d7c8c1fc9cb939a248921`](https://github.com/withastro/astro/commit/091097e60ef38dadb87d7c8c1fc9cb939a248921) Thanks [@ematipico](https://github.com/ematipico)! - Adds an error during the build phase in case `i18n.routing.prefixDefaultLocale` is set to `true` and the index page is missing.

- [#9659](https://github.com/withastro/astro/pull/9659) [`39050c6e1f77dc21e87716d95e627a654828ee74`](https://github.com/withastro/astro/commit/39050c6e1f77dc21e87716d95e627a654828ee74) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix Astro wrongfully deleting certain images imported with `?url` when used in tandem with `astro:assets`

- [#9685](https://github.com/withastro/astro/pull/9685) [`35d54b3ddb3310ab4c505d49bd4937b2d25e4078`](https://github.com/withastro/astro/commit/35d54b3ddb3310ab4c505d49bd4937b2d25e4078) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where anchor elements within a custom component could not trigger a view transition.

## 4.1.2

### Patch Changes

- [#9642](https://github.com/withastro/astro/pull/9642) [`cdb7bfa66260afc79b829b617492a01a709a86ef`](https://github.com/withastro/astro/commit/cdb7bfa66260afc79b829b617492a01a709a86ef) Thanks [@martrapp](https://github.com/martrapp)! - Fixes an issue where View Transitions did not work when navigating to the 404 page

- [#9637](https://github.com/withastro/astro/pull/9637) [`5cba637c4ec39c06794146b0c7fd3225d26dcabb`](https://github.com/withastro/astro/commit/5cba637c4ec39c06794146b0c7fd3225d26dcabb) Thanks [@bluwy](https://github.com/bluwy)! - Improves environment variables replacement in SSR

- [#9658](https://github.com/withastro/astro/pull/9658) [`a3b5695176cd0280438938c1d6caef478a571415`](https://github.com/withastro/astro/commit/a3b5695176cd0280438938c1d6caef478a571415) Thanks [@martrapp](https://github.com/martrapp)! - Fixes an issue caused by trying to load text/partytown scripts during view transitions

- [#9657](https://github.com/withastro/astro/pull/9657) [`a4f90d95ff97abe59f2a1ef0956cab257ae36838`](https://github.com/withastro/astro/commit/a4f90d95ff97abe59f2a1ef0956cab257ae36838) Thanks [@ematipico](https://github.com/ematipico)! - Fixes a bug where the custom status code wasn't correctly computed in the dev server

- [#9627](https://github.com/withastro/astro/pull/9627) [`a700a20291e19cde23705e8e661e833aec7d3095`](https://github.com/withastro/astro/commit/a700a20291e19cde23705e8e661e833aec7d3095) Thanks [@lilnasy](https://github.com/lilnasy)! - Adds a warning when setting cookies will have no effect

- [#9652](https://github.com/withastro/astro/pull/9652) [`e72efd6a9a1e2a70488fd225529617ffd8418534`](https://github.com/withastro/astro/commit/e72efd6a9a1e2a70488fd225529617ffd8418534) Thanks [@bluwy](https://github.com/bluwy)! - Improves environment variables handling by using esbuild to perform replacements

- [#9560](https://github.com/withastro/astro/pull/9560) [`8b9c4844f7b302380835154fab1c3489979fc07d`](https://github.com/withastro/astro/commit/8b9c4844f7b302380835154fab1c3489979fc07d) Thanks [@bluwy](https://github.com/bluwy)! - Fixes tsconfig alias with import.meta.glob

- [#9653](https://github.com/withastro/astro/pull/9653) [`50f39183cfec4a4522c1f935d710e5d9b724993b`](https://github.com/withastro/astro/commit/50f39183cfec4a4522c1f935d710e5d9b724993b) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Pin Sharp to 0.32.6 until we can raise our semver requirements. To use the latest version of Sharp, you can add it to your project's dependencies.

## 4.1.1

### Patch Changes

- [#9618](https://github.com/withastro/astro/pull/9618) [`401fd3e8c8957a3bed6469a622cd67b157ca303f`](https://github.com/withastro/astro/commit/401fd3e8c8957a3bed6469a622cd67b157ca303f) Thanks [@ldh3907](https://github.com/ldh3907)! - Adds a second generic parameter to `APIRoute` to type the `params`

- [#9600](https://github.com/withastro/astro/pull/9600) [`47b951b3888a5a8a708d2f9b974f12fba7ec9ed3`](https://github.com/withastro/astro/commit/47b951b3888a5a8a708d2f9b974f12fba7ec9ed3) Thanks [@jacobdalamb](https://github.com/jacobdalamb)! - Improves tailwind config file detection when adding the tailwind integration using `astro add tailwind`

  Tailwind config file ending in `.ts`, `.mts` or `.cts` will now be used instead of creating a new `tailwind.config.mjs` when the tailwind integration is added using `astro add tailwind`.

- [#9622](https://github.com/withastro/astro/pull/9622) [`5156c740506cbf6ec85c95e1663c14cbd438d75b`](https://github.com/withastro/astro/commit/5156c740506cbf6ec85c95e1663c14cbd438d75b) Thanks [@bluwy](https://github.com/bluwy)! - Fixes the Sharp image service `limitInputPixels` option type

## 4.1.0

### Minor Changes

- [#9513](https://github.com/withastro/astro/pull/9513) [`e44f6acf99195a3f29b8390fd9b2c06410551b74`](https://github.com/withastro/astro/commit/e44f6acf99195a3f29b8390fd9b2c06410551b74) Thanks [@wtto00](https://github.com/wtto00)! - Adds a `'load'` prefetch strategy to prefetch links on page load

- [#9377](https://github.com/withastro/astro/pull/9377) [`fe719e27a84c09e46b515252690678c174a25759`](https://github.com/withastro/astro/commit/fe719e27a84c09e46b515252690678c174a25759) Thanks [@bluwy](https://github.com/bluwy)! - Adds "Missing ARIA roles check" and "Unsupported ARIA roles check" audit rules for the dev toolbar

- [#9573](https://github.com/withastro/astro/pull/9573) [`2a8b9c56b9c6918531c57ec38b89474571331aee`](https://github.com/withastro/astro/commit/2a8b9c56b9c6918531c57ec38b89474571331aee) Thanks [@bluwy](https://github.com/bluwy)! - Allows passing a string to `--open` and `server.open` to open a specific URL on startup in development

- [#9544](https://github.com/withastro/astro/pull/9544) [`b8a6fa8917ff7babd35dafb3d3dcd9a58cee836d`](https://github.com/withastro/astro/commit/b8a6fa8917ff7babd35dafb3d3dcd9a58cee836d) Thanks [@bluwy](https://github.com/bluwy)! - Adds a helpful error for static sites when you use the `astro preview` command if you have not previously run `astro build`.

- [#9546](https://github.com/withastro/astro/pull/9546) [`08402ad5846c73b6887e74ed4575fd71a3e3c73d`](https://github.com/withastro/astro/commit/08402ad5846c73b6887e74ed4575fd71a3e3c73d) Thanks [@bluwy](https://github.com/bluwy)! - Adds an option for the Sharp image service to allow large images to be processed. Set `limitInputPixels: false` to bypass the default image size limit:

  ```js
  // astro.config.mjs
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    image: {
      service: {
        entrypoint: 'astro/assets/services/sharp',
        config: {
          limitInputPixels: false,
        },
      },
    },
  });
  ```

- [#9596](https://github.com/withastro/astro/pull/9596) [`fbc26976533bbcf2de9d6dba1aa3ea3dc6ce0853`](https://github.com/withastro/astro/commit/fbc26976533bbcf2de9d6dba1aa3ea3dc6ce0853) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds the ability to set a [`rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) setting when using the `client:visible` directive. This allows a component to be hydrated when it is _near_ the viewport, rather than hydrated when it has _entered_ the viewport.

  ```astro
  <!-- Load component when it's within 200px away from entering the viewport -->
  <Component client:visible={{ rootMargin: '200px' }} />
  ```

- [#9063](https://github.com/withastro/astro/pull/9063) [`f33fe3190b482a42ebc68cc5275fd7f2c49102e6`](https://github.com/withastro/astro/commit/f33fe3190b482a42ebc68cc5275fd7f2c49102e6) Thanks [@alex-sherwin](https://github.com/alex-sherwin)! - Cookie encoding / decoding can now be customized

  Adds new `encode` and `decode` functions to allow customizing how cookies are encoded and decoded. For example, you can bypass the default encoding via `encodeURIComponent` when adding a URL as part of a cookie:

  ```astro
  ---
  import { encodeCookieValue } from './cookies';
  Astro.cookies.set('url', Astro.url.toString(), {
    // Override the default encoding so that URI components are not encoded
    encode: (value) => encodeCookieValue(value),
  });
  ---
  ```

  Later, you can decode the URL in the same way:

  ```astro
  ---
  import { decodeCookieValue } from './cookies';
  const url = Astro.cookies.get('url', {
    decode: (value) => decodeCookieValue(value),
  });
  ---
  ```

### Patch Changes

- [#9593](https://github.com/withastro/astro/pull/9593) [`3b4e629ac8c2fdb4b491bf01abc7794e2e100173`](https://github.com/withastro/astro/commit/3b4e629ac8c2fdb4b491bf01abc7794e2e100173) Thanks [@bluwy](https://github.com/bluwy)! - Improves `astro add` error reporting when the dependencies fail to install

- [#9563](https://github.com/withastro/astro/pull/9563) [`d48ab90fb41fbc0589cd2df711682a41382c03aa`](https://github.com/withastro/astro/commit/d48ab90fb41fbc0589cd2df711682a41382c03aa) Thanks [@martrapp](https://github.com/martrapp)! - Fixes back navigation to fragment links (e.g. `#about`) in Firefox when using view transitions

  Co-authored-by: Florian Lefebvre <69633530+florian-lefebvre@users.noreply.github.com>
  Co-authored-by: Sarah Rainsberger <sarah@rainsberger.ca>

- [#9597](https://github.com/withastro/astro/pull/9597) [`9fd24a546c45d48451da46637c14e7ed54dac76a`](https://github.com/withastro/astro/commit/9fd24a546c45d48451da46637c14e7ed54dac76a) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where configuring trailingSlash had no effect on API routes.

- [#9586](https://github.com/withastro/astro/pull/9586) [`82bad5d6205672ed3f6a49d4de53d3a68367433e`](https://github.com/withastro/astro/commit/82bad5d6205672ed3f6a49d4de53d3a68367433e) Thanks [@martrapp](https://github.com/martrapp)! - Fixes page titles in the browser's drop-down for back / forward navigation when using view transitions

- [#9575](https://github.com/withastro/astro/pull/9575) [`ab6049bd58e4d02f47d500f9db08a865bc7f09b8`](https://github.com/withastro/astro/commit/ab6049bd58e4d02f47d500f9db08a865bc7f09b8) Thanks [@bluwy](https://github.com/bluwy)! - Sets correct `process.env.NODE_ENV` default when using the JS API

- [#9587](https://github.com/withastro/astro/pull/9587) [`da307e4a080483f8763f1919a05fa2194bb14e22`](https://github.com/withastro/astro/commit/da307e4a080483f8763f1919a05fa2194bb14e22) Thanks [@jjenzz](https://github.com/jjenzz)! - Adds a `CSSProperties` interface that allows extending the style attribute

- [#9513](https://github.com/withastro/astro/pull/9513) [`e44f6acf99195a3f29b8390fd9b2c06410551b74`](https://github.com/withastro/astro/commit/e44f6acf99195a3f29b8390fd9b2c06410551b74) Thanks [@wtto00](https://github.com/wtto00)! - Ignores `3g` in slow connection detection. Only `2g` and `slow-2g` are considered slow connections.

## 4.0.9

### Patch Changes

- [#9571](https://github.com/withastro/astro/pull/9571) [`ec71f03cfd9b8195fb21c92dfda0eff63b6ebeed`](https://github.com/withastro/astro/commit/ec71f03cfd9b8195fb21c92dfda0eff63b6ebeed) Thanks [@bluwy](https://github.com/bluwy)! - Removes telemetry for unhandled errors in the dev server

- [#9548](https://github.com/withastro/astro/pull/9548) [`8049f0cd91b239c52e37d571e3ba3e703cf0e4cf`](https://github.com/withastro/astro/commit/8049f0cd91b239c52e37d571e3ba3e703cf0e4cf) Thanks [@bluwy](https://github.com/bluwy)! - Fixes error overlay display on URI malformed error

- [#9504](https://github.com/withastro/astro/pull/9504) [`8cc3d6aa46f438d668516539c34b48ad748ade39`](https://github.com/withastro/astro/commit/8cc3d6aa46f438d668516539c34b48ad748ade39) Thanks [@matiboux](https://github.com/matiboux)! - Implement i18n's `getLocaleByPath` function

- [#9547](https://github.com/withastro/astro/pull/9547) [`22f42d11a4fd2e154a0c5873c4f516584e383b70`](https://github.com/withastro/astro/commit/22f42d11a4fd2e154a0c5873c4f516584e383b70) Thanks [@bluwy](https://github.com/bluwy)! - Prevents ANSI codes from rendering in the error overlay

- [#9446](https://github.com/withastro/astro/pull/9446) [`ede3f7fef6b43a08c9371f7a2531e2eef858b94d`](https://github.com/withastro/astro/commit/ede3f7fef6b43a08c9371f7a2531e2eef858b94d) Thanks [@alexnguyennz](https://github.com/alexnguyennz)! - Toggle dev toolbar hitbox height when toolbar is visible

- [#9572](https://github.com/withastro/astro/pull/9572) [`9f6453cf4972ac28eec4f07a1373feaa295c8864`](https://github.com/withastro/astro/commit/9f6453cf4972ac28eec4f07a1373feaa295c8864) Thanks [@bluwy](https://github.com/bluwy)! - Documents supported `--host` and `--port` flags in `astro preview --help`

- [#9540](https://github.com/withastro/astro/pull/9540) [`7f212f0831d8cd899a86fb94899a7cad8ec280db`](https://github.com/withastro/astro/commit/7f212f0831d8cd899a86fb94899a7cad8ec280db) Thanks [@matthewp](https://github.com/matthewp)! - Fixes remote images with encoded characters

- [#9559](https://github.com/withastro/astro/pull/9559) [`8b873bf1f343efc1f486d8ef53c38380e2373c08`](https://github.com/withastro/astro/commit/8b873bf1f343efc1f486d8ef53c38380e2373c08) Thanks [@sygint](https://github.com/sygint)! - Adds 'starlight' to the displayed options for `astro add`

- [#9537](https://github.com/withastro/astro/pull/9537) [`16e61fcacb98e6bd948ac240bc082659d70193a4`](https://github.com/withastro/astro/commit/16e61fcacb98e6bd948ac240bc082659d70193a4) Thanks [@walter9388](https://github.com/walter9388)! - `<Image />` srcset now parses encoded paths correctly

## 4.0.8

### Patch Changes

- [#9522](https://github.com/withastro/astro/pull/9522) [`bb1438d20d325acd15f3755c6e306e45a7c64bcd`](https://github.com/withastro/astro/commit/bb1438d20d325acd15f3755c6e306e45a7c64bcd) Thanks [@Zegnat](https://github.com/Zegnat)! - Add support for autocomplete attribute to the HTML button type.

- [#9531](https://github.com/withastro/astro/pull/9531) [`662f06fd9fae377bed1aaa49adbba3542cced087`](https://github.com/withastro/astro/commit/662f06fd9fae377bed1aaa49adbba3542cced087) Thanks [@bluwy](https://github.com/bluwy)! - Fixes duplicated CSS modules content when it's imported by both Astro files and framework components

- [#9501](https://github.com/withastro/astro/pull/9501) [`eb36e95596fcdb3db4a31744e910495e22e3af84`](https://github.com/withastro/astro/commit/eb36e95596fcdb3db4a31744e910495e22e3af84) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Export JSX namespace from `astro/jsx-runtime` for language tooling to consume

- [#9492](https://github.com/withastro/astro/pull/9492) [`89a2a07c2e411cda32244b7b05d3c79e93f7dd84`](https://github.com/withastro/astro/commit/89a2a07c2e411cda32244b7b05d3c79e93f7dd84) Thanks [@lilnasy](https://github.com/lilnasy)! - Improves error message for the case where two similarly named files result in the same content entry.

- [#9532](https://github.com/withastro/astro/pull/9532) [`7224809b73d2c3ec8e8aee2fa07463dc3b57a7a2`](https://github.com/withastro/astro/commit/7224809b73d2c3ec8e8aee2fa07463dc3b57a7a2) Thanks [@bluwy](https://github.com/bluwy)! - Prevents unnecessary URI decoding when rendering a route

- [#9478](https://github.com/withastro/astro/pull/9478) [`dfef925e1fd07f3efb9fde6f4f23548f2af7dc75`](https://github.com/withastro/astro/commit/dfef925e1fd07f3efb9fde6f4f23548f2af7dc75) Thanks [@lilnasy](https://github.com/lilnasy)! - Improves errors in certain places to also report their causes.

- [#9463](https://github.com/withastro/astro/pull/9463) [`3b0eaed3b544ef8c4ec1f7b0d5a8f475bcfeb25e`](https://github.com/withastro/astro/commit/3b0eaed3b544ef8c4ec1f7b0d5a8f475bcfeb25e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update Sharp version to ^0.33.1

- [#9512](https://github.com/withastro/astro/pull/9512) [`1469e0e5a915e6b42b9953dbb48fe57a74518056`](https://github.com/withastro/astro/commit/1469e0e5a915e6b42b9953dbb48fe57a74518056) Thanks [@mingjunlu](https://github.com/mingjunlu)! - Prevents dev toolbar tooltip from overflowing outside of the screen

- [#9497](https://github.com/withastro/astro/pull/9497) [`7f7a7f1aeaec6b327ae0e5e7470a4f46174bf8ae`](https://github.com/withastro/astro/commit/7f7a7f1aeaec6b327ae0e5e7470a4f46174bf8ae) Thanks [@lilnasy](https://github.com/lilnasy)! - Adds a helpful warning message for when an exported API Route is not uppercase.

## 4.0.7

### Patch Changes

- [#9452](https://github.com/withastro/astro/pull/9452) [`e83b5095f`](https://github.com/withastro/astro/commit/e83b5095f164f48ba40fc715a805fc66a3e39dcf) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Upgrades vite to latest

- [#9352](https://github.com/withastro/astro/pull/9352) [`f515b1421`](https://github.com/withastro/astro/commit/f515b1421afa335b8d6e4491fbe24419df53bfeb) Thanks [@tmcw](https://github.com/tmcw)! - Add a more descriptive error message when image conversion fails

- [#9486](https://github.com/withastro/astro/pull/9486) [`f6714f677`](https://github.com/withastro/astro/commit/f6714f677cffa2484565f51d5eb55bd34309653b) Thanks [@martrapp](https://github.com/martrapp)! - Fixes View Transition's form submission prevention, allowing `preventDefault` to be used.

- [#9461](https://github.com/withastro/astro/pull/9461) [`429be8cc3`](https://github.com/withastro/astro/commit/429be8cc3ed0623df4fdca76f1531265f5ba5dfc) Thanks [@Skn0tt](https://github.com/Skn0tt)! - update import created for `astro create netlify`

- [#9464](https://github.com/withastro/astro/pull/9464) [`faf6c7e11`](https://github.com/withastro/astro/commit/faf6c7e1104ee247e847836020a3ce07a2053705) Thanks [@Fryuni](https://github.com/Fryuni)! - Fixes an edge case with view transitions where some spec-compliant `Content-Type` headers would cause a valid HTML response to be ignored.

- [#9400](https://github.com/withastro/astro/pull/9400) [`1e984389b`](https://github.com/withastro/astro/commit/1e984389bafd87b0a631ed4aba930447669234f8) Thanks [@bluwy](https://github.com/bluwy)! - Fixes importing dev toolbar apps from integrations on Windows

- [#9487](https://github.com/withastro/astro/pull/9487) [`19169db1f`](https://github.com/withastro/astro/commit/19169db1f1574d36cc284fd9a0319d9b1e92b49a) Thanks [@ematipico](https://github.com/ematipico)! - Improves logging of the generated pages during the build

- [#9460](https://github.com/withastro/astro/pull/9460) [`047d285be`](https://github.com/withastro/astro/commit/047d285be1ab764bc82f88b8553b46429c37efca) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix Astro failing to build on certain exotic platform that reports their CPU count incorrectly

- [#9466](https://github.com/withastro/astro/pull/9466) [`5062d27a1`](https://github.com/withastro/astro/commit/5062d27a186c5020522614b9d6f3da218f7afd96) Thanks [@knpwrs](https://github.com/knpwrs)! - Updates view transitions `form` handling with logic for the [`enctype`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype) attribute

- [#9458](https://github.com/withastro/astro/pull/9458) [`fa3078ce9`](https://github.com/withastro/astro/commit/fa3078ce9f5eda408340a78c6d275f3e0b2437dc) Thanks [@ematipico](https://github.com/ematipico)! - Correctly handle the error in case the middleware throws a runtime error

- [#9089](https://github.com/withastro/astro/pull/9089) [`5ae657882`](https://github.com/withastro/astro/commit/5ae657882287645c967249aee91bd06497f6624d) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where redirects did not replace slugs when the target of the redirect rule was not a verbatim route in the project.

- [#9483](https://github.com/withastro/astro/pull/9483) [`c384f6924`](https://github.com/withastro/astro/commit/c384f6924edc161d3ff631e658f017a37e4207e3) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix some false positive in the audit logic of the dev toolbar

- [#9437](https://github.com/withastro/astro/pull/9437) [`354a62c86`](https://github.com/withastro/astro/commit/354a62c86e9187af5d05540ed321bdc889384d97) Thanks [@dkobierski](https://github.com/dkobierski)! - Fixes incorrect hoisted script paths when custom rollup output file names are configured

- [#9475](https://github.com/withastro/astro/pull/9475) [`7ae4928f3`](https://github.com/withastro/astro/commit/7ae4928f303720d3b2f611474fc08d3b96c2e4af) Thanks [@ematipico](https://github.com/ematipico)! - Remove the manifest from the generated files in the `dist/` folder.

## 4.0.6

### Patch Changes

- [#9419](https://github.com/withastro/astro/pull/9419) [`151bd429b`](https://github.com/withastro/astro/commit/151bd429b11a73d236ca8f43e8f5072e7c29641e) Thanks [@matthewp](https://github.com/matthewp)! - Prevent Partytown from hijacking history APIs

- [#9426](https://github.com/withastro/astro/pull/9426) [`c01cc4e34`](https://github.com/withastro/astro/commit/c01cc4e3409ae3cf81db7384bf8e53424f21bb5c) Thanks [@alexnguyennz](https://github.com/alexnguyennz)! - Fixes warning for external URL redirects

- [#9445](https://github.com/withastro/astro/pull/9445) [`f963d07f2`](https://github.com/withastro/astro/commit/f963d07f22f972938e1c9e8c95f9278efdff586b) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Upgrades Astro's compiler to a crash when sourcemaps try to map multibyte characters

- [#9126](https://github.com/withastro/astro/pull/9126) [`6d2d0e279`](https://github.com/withastro/astro/commit/6d2d0e279dd51e04099c86c4d900e2dd1d5fa837) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where error pages were not shown when trailingSlash was set to "always".

- [#9434](https://github.com/withastro/astro/pull/9434) [`c01580a2c`](https://github.com/withastro/astro/commit/c01580a2cd847ac82192d6717e9e823fba6ecb49) Thanks [@ematipico](https://github.com/ematipico)! - Improves the error message when a middleware doesn't return a `Response`

- [#9433](https://github.com/withastro/astro/pull/9433) [`fcc2fd5b0`](https://github.com/withastro/astro/commit/fcc2fd5b0f218ecfc7bbe3f48063221e5dd62757) Thanks [@ematipico](https://github.com/ematipico)! - Correctly merge headers from the original response when an error page is rendered

## 4.0.5

### Patch Changes

- [#9423](https://github.com/withastro/astro/pull/9423) [`bda1d294f`](https://github.com/withastro/astro/commit/bda1d294f2d50f31abfc9a32b5272fc9ac080e83) Thanks [@matthewp](https://github.com/matthewp)! - Error when getImage is passed an undefined src

- [#9424](https://github.com/withastro/astro/pull/9424) [`e1a5a2d36`](https://github.com/withastro/astro/commit/e1a5a2d36ac3637f5c94a27b69128a121541bae8) Thanks [@matthewp](https://github.com/matthewp)! - Prevents dev server from crashing on unhandled rejections, and adds a helpful error message

- [#9404](https://github.com/withastro/astro/pull/9404) [`8aa17a64b`](https://github.com/withastro/astro/commit/8aa17a64b46b8eaabfd1375fd6550ff93727aa81) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixed some newer HTML attributes not being included in our type definitions

- [#9414](https://github.com/withastro/astro/pull/9414) [`bebf38c0c`](https://github.com/withastro/astro/commit/bebf38c0cb539de04007f5e721bf459300b895a1) Thanks [@Skn0tt](https://github.com/Skn0tt)! - Adds the feature name to logs about feature deprecation / experimental status.

- [#9418](https://github.com/withastro/astro/pull/9418) [`2c168af67`](https://github.com/withastro/astro/commit/2c168af6745f5357e76ec323787595ef06d5fd73) Thanks [@alexnguyennz](https://github.com/alexnguyennz)! - Fix broken link in CI instructions

- [#9407](https://github.com/withastro/astro/pull/9407) [`546d92c86`](https://github.com/withastro/astro/commit/546d92c862d08c69751039511a12c92ae38184c2) Thanks [@matthewp](https://github.com/matthewp)! - Allows file URLs as import specifiers

## 4.0.4

### Patch Changes

- [#9380](https://github.com/withastro/astro/pull/9380) [`ea0918259`](https://github.com/withastro/astro/commit/ea0918259964947523827bac6abe88ad3841dbb9) Thanks [@ematipico](https://github.com/ematipico)! - Correctly handle the rendering of i18n routes when `output: "hybrid"` is set

- [#9374](https://github.com/withastro/astro/pull/9374) [`65ddb0271`](https://github.com/withastro/astro/commit/65ddb027111514d41481f7455c0f0f03f8f608a8) Thanks [@bluwy](https://github.com/bluwy)! - Fixes an issue where prerendered route paths that end with `.mjs` were removed from the final build

- [#9375](https://github.com/withastro/astro/pull/9375) [`26f7023d6`](https://github.com/withastro/astro/commit/26f7023d6928de75c363df0fa759a6255cb73ef3) Thanks [@bluwy](https://github.com/bluwy)! - Prettifies generated route names injected by integrations

- [#9387](https://github.com/withastro/astro/pull/9387) [`a7c75b333`](https://github.com/withastro/astro/commit/a7c75b3339e6b1562d0d16ab6ef482840c51df68) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes an edge case with `astro add` that could install a prerelease instead of a stable release version.

  **Prior to this change**
  `astro add svelte` installs `svelte@5.0.0-next.22`

  **After this change**
  `astro add svelte` installs `svelte@4.2.8`

- Updated dependencies [[`270c6cc27`](https://github.com/withastro/astro/commit/270c6cc27f20995883fcdabbff9b56d7f041f9e4)]:
  - @astrojs/markdown-remark@4.0.1

## 4.0.3

### Patch Changes

- [#9342](https://github.com/withastro/astro/pull/9342) [`eb942942d`](https://github.com/withastro/astro/commit/eb942942d67508c07d7efaa859a7840f7c0223da) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix missing `is:inline` type for the `<slot />` element

- [#9343](https://github.com/withastro/astro/pull/9343) [`ab0281aee`](https://github.com/withastro/astro/commit/ab0281aee419e58c6079ca393987fe1ff0541dd5) Thanks [@martrapp](https://github.com/martrapp)! - Adds source file properties to HTML elements only if devToolbar is enabled

- [#9336](https://github.com/withastro/astro/pull/9336) [`c76901065`](https://github.com/withastro/astro/commit/c76901065545f6a8d3de3e44d1c8ee5456a8a77a) Thanks [@FredKSchott](https://github.com/FredKSchott)! - dev: fix issue where 404 and 500 responses were logged as 200

- [#9339](https://github.com/withastro/astro/pull/9339) [`0bb3d5322`](https://github.com/withastro/astro/commit/0bb3d532219fb90fc08bfb472fc981fab6543d16) Thanks [@morinokami](https://github.com/morinokami)! - Fixed the log message to correctly display 'enabled' and 'disabled' when toggling 'Disable notifications' in the Toolbar.

## 4.0.2

### Patch Changes

- [#9331](https://github.com/withastro/astro/pull/9331) [`cfb20550d`](https://github.com/withastro/astro/commit/cfb20550d346a33e76e23453d5dcd084e5065c4d) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Updates an internal dependency ([`vitefu`](https://github.com/svitejs/vitefu)) to avoid a common `peerDependency` warning

- [#9327](https://github.com/withastro/astro/pull/9327) [`3878a91be`](https://github.com/withastro/astro/commit/3878a91be4879988c7235f433e50a6dc82e32288) Thanks [@doseofted](https://github.com/doseofted)! - Fixes an edge case for `<form method="dialog">` when using View Transitions. Forms with `method="dialog"` no longer require an additional `data-astro-reload` attribute.

## 4.0.1

### Patch Changes

- [#9315](https://github.com/withastro/astro/pull/9315) [`631e5d01b`](https://github.com/withastro/astro/commit/631e5d01b00efee6970466c38201cb0e67ec74cf) Thanks [@ematipico](https://github.com/ematipico)! - Fixes an issue where logs that weren't grouped together by route when building the app.

## 4.0.0

### Major Changes

- [#9138](https://github.com/withastro/astro/pull/9138) [`abf601233`](https://github.com/withastro/astro/commit/abf601233f8188d118a8cb063c777478d8d9f1a3) Thanks [@bluwy](https://github.com/bluwy)! - Updates the unified, remark, and rehype dependencies to latest. Make sure to update your custom remark and rehype plugins as well to be compatible with the latest versions.

  **Potentially breaking change:** The default value of `markdown.remarkRehype.footnoteBackLabel` is changed from `"Back to content"` to `"Back to reference 1"`. See the `mdast-util-to-hast` [commit](https://github.com/syntax-tree/mdast-util-to-hast/commit/56c88e45690be138fad9f0bf367b939d09816863) for more information.

- [#9181](https://github.com/withastro/astro/pull/9181) [`cdabf6ef0`](https://github.com/withastro/astro/commit/cdabf6ef02be7220fd2b6bdcef924ceca089381e) Thanks [@bluwy](https://github.com/bluwy)! - Removes support for returning simple objects from endpoints (deprecated since Astro 3.0). You should return a `Response` instead.

  `ResponseWithEncoding` is also removed. You can refactor the code to return a response with an array buffer instead, which is encoding agnostic.

  The types for middlewares have also been revised. To type a middleware function, you should now use `MiddlewareHandler` instead of `MiddlewareResponseHandler`. If you used `defineMiddleware()` to type the function, no changes are needed.

- [#9263](https://github.com/withastro/astro/pull/9263) [`3cbd8ea75`](https://github.com/withastro/astro/commit/3cbd8ea7534910e3beae396dcfa93ce87dcdd91f) Thanks [@bluwy](https://github.com/bluwy)! - Removes additional deprecated APIs:

  - The Astro preview server now returns a 404 status instead of a 301 redirect when requesting assets from the public directory without a base.
  - Removes special handling when referencing the `astro/client-image` type. You should use the `astro/client` type instead.
  - Removes deprecated built-in `rss` support in `getStaticPaths`. You should use `@astrojs/rss` instead.
  - Removes deprecated `Astro.request.params` support. You should use `Astro.params` instead.

- [#9271](https://github.com/withastro/astro/pull/9271) [`47604bd5b`](https://github.com/withastro/astro/commit/47604bd5b5bb2ea63922b657bac104c010575c20) Thanks [@matthewp](https://github.com/matthewp)! - Renames Dev Overlay to Dev Toolbar

  The previously named experimental Dev Overlay is now known as the Astro Dev Toolbar. Overlay plugins have been renamed as Toolbar Apps. All APIs have been updated to reflect this name change.

  To not break existing APIs, aliases for the Toolbar-based names have been created. The previous API names will continue to function but will be deprecated in the future. All documentation has been updated to reflect Toolbar-based names.

- [#9122](https://github.com/withastro/astro/pull/9122) [`1c48ed286`](https://github.com/withastro/astro/commit/1c48ed286538ab9e354eca4e4dcd7c6385c96721) Thanks [@bluwy](https://github.com/bluwy)! - Adds Vite 5 support. There are no breaking changes from Astro. Check the [Vite migration guide](https://vitejs.dev/guide/migration.html) for details of the breaking changes from Vite instead.

- [#9225](https://github.com/withastro/astro/pull/9225) [`c421a3d17`](https://github.com/withastro/astro/commit/c421a3d17911aeda29b5204f6d568ae87e329eaf) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Removes the opt-in `handleForms` property for `<ViewTransitions />`. Form submissions are now handled by default and this property is no longer necessary. This default behavior can be disabled by setting `data-astro-reload` on relevant `<form />` elements.

- [#9196](https://github.com/withastro/astro/pull/9196) [`37697a2c5`](https://github.com/withastro/astro/commit/37697a2c5511572dc29c0a4ea46f90c2f62be8e6) Thanks [@bluwy](https://github.com/bluwy)! - Removes support for Shiki custom language's `path` property. The language JSON file should be imported and passed to the option instead.

  ```diff
  // astro.config.js
  + import customLang from './custom.tmLanguage.json'

  export default defineConfig({
    markdown: {
      shikiConfig: {
        langs: [
  -       { path: './custom.tmLanguage.json' },
  +       customLang,
        ],
      },
    },
  })
  ```

- [#9199](https://github.com/withastro/astro/pull/9199) [`49aa215a0`](https://github.com/withastro/astro/commit/49aa215a01ee1c4805316c85bb0aea6cfbc25a31) Thanks [@lilnasy](https://github.com/lilnasy)! - This change only affects maintainers of third-party adapters. In the Integration API, the `app.render()` method of the `App` class has been simplified.

  Instead of two optional arguments, it now takes a single optional argument that is an object with two optional properties: `routeData` and `locals`.

  ```diff
   app.render(request)

  - app.render(request, routeData)
  + app.render(request, { routeData })

  - app.render(request, routeData, locals)
  + app.render(request, { routeData, locals })

  - app.render(request, undefined, locals)
  + app.render(request, { locals })
  ```

  The current signature is deprecated but will continue to function until next major version.

- [#9212](https://github.com/withastro/astro/pull/9212) [`c0383ea0c`](https://github.com/withastro/astro/commit/c0383ea0c102cb62b7235823c706a090ba08715f) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Removes deprecated `app.match()` option, `matchNotFound`

- [#9168](https://github.com/withastro/astro/pull/9168) [`153a5abb9`](https://github.com/withastro/astro/commit/153a5abb905042ac68b712514dc9ec387d3e6b17) Thanks [@bluwy](https://github.com/bluwy)! - Removes deprecated features from Astro 3.0

  - Adapters are now required to pass `supportedAstroFeatures` to specify a list of features they support.
  - The `build.split` and `build.excludeMiddleware` options are removed. Use `functionPerRoute` and `edgeMiddleware` from adapters instead.
  - The `markdown.drafts` option and draft feature is removed. Use content collections instead.
  - Lowercase endpoint names are no longer supported. Use uppercase endpoint names instead.
  - `getHeaders()` exported from markdown files is removed. Use `getHeadings()` instead.

### Minor Changes

- [#9105](https://github.com/withastro/astro/pull/9105) [`6201bbe96`](https://github.com/withastro/astro/commit/6201bbe96c2a083fb201e4a43a9bd88499821a3e) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update CLI logging experience

- [#9200](https://github.com/withastro/astro/pull/9200) [`b4b851f5a`](https://github.com/withastro/astro/commit/b4b851f5a46b32ee531db5dc39ccd2aa7af7bcfd) Thanks [@ematipico](https://github.com/ematipico)! - Adds a new way to configure the `i18n.locales` array.

  Developers can now assign a custom URL path prefix that can span multiple language codes:

  ```js
  // astro.config.mjs
  export default defineConfig({
    experimental: {
      i18n: {
        defaultLocale: 'english',
        locales: ['de', { path: 'english', codes: ['en', 'en-US'] }, 'fr'],
      },
    },
  });
  ```

  With the above configuration, the URL prefix of the default locale will be `/english/`. When computing `Astro.preferredLocale`, Astro will use the `codes`.

- [#9115](https://github.com/withastro/astro/pull/9115) [`3b77889b4`](https://github.com/withastro/astro/commit/3b77889b47750ed6e17c7858780dc4aae9201b58) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Adds the `astro preferences` command to manage user preferences. User preferences are specific to individual Astro users, unlike the `astro.config.mjs` file which changes behavior for everyone working on a project.

  User preferences are scoped to the current project by default, stored in a local `.astro/settings.json` file. Using the `--global` flag, user preferences can also be applied to every Astro project on the current machine. Global user preferences are stored in an operating system-specific location.

  ```sh
  # Disable the dev overlay for the current user in the current project
  npm run astro preferences disable devOverlay
  # Disable the dev overlay for the current user in all Astro projects on this machine
  npm run astro preferences --global disable devOverlay

  # Check if the dev overlay is enabled for the current user
  npm run astro preferences list devOverlay
  ```

- [#9139](https://github.com/withastro/astro/pull/9139) [`459b26436`](https://github.com/withastro/astro/commit/459b2643666db08dbd29a100ce3d8697b451d3fe) Thanks [@bluwy](https://github.com/bluwy)! - Reworks Vite's logger to use Astro's logger to correctly log HMR messages

- [#9279](https://github.com/withastro/astro/pull/9279) [`6a9669b81`](https://github.com/withastro/astro/commit/6a9669b810ddfcae6c537165a438190ea1e7a4bc) Thanks [@martrapp](https://github.com/martrapp)! - Improves consistency between navigations with and without `<ViewTransitions>`. See [#9279](https://github.com/withastro/astro/pull/9279) for more details.

- [#9161](https://github.com/withastro/astro/pull/9161) [`bd0c2e9ae`](https://github.com/withastro/astro/commit/bd0c2e9ae3389a9d3085050c1e8134ae98dff299) Thanks [@bluwy](https://github.com/bluwy)! - Renames the `entryPoint` property of the `injectRoute` integrations API to `entrypoint` for consistency. A warning will be shown prompting you to update your code when using the old name.

- [#9129](https://github.com/withastro/astro/pull/9129) [`8bfc20511`](https://github.com/withastro/astro/commit/8bfc20511918d675202cdc100d4efab293e5cbac) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update error log formatting

### Patch Changes

- [#9118](https://github.com/withastro/astro/pull/9118) [`000e8f465`](https://github.com/withastro/astro/commit/000e8f4654cae9982e21e0a858366c4844139db6) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Redesign Dev Overlay main screen to show more information, such as the coolest integrations, your current Astro version and more.

- [#9118](https://github.com/withastro/astro/pull/9118) [`000e8f465`](https://github.com/withastro/astro/commit/000e8f4654cae9982e21e0a858366c4844139db6) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes an issue where links with the same pathname as the current page, but different search params, were not prefetched.

- [#9275](https://github.com/withastro/astro/pull/9275) [`0968cb1a3`](https://github.com/withastro/astro/commit/0968cb1a373b1101a649035d2ea2210d3d6412dc) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where html annotations relevant only to the dev server were included in the production build.

- [#9252](https://github.com/withastro/astro/pull/9252) [`7b74ec4ba`](https://github.com/withastro/astro/commit/7b74ec4ba48e363a19d20e322212d0d264927f1b) Thanks [@ematipico](https://github.com/ematipico)! - Consistently emit fallback routes in the correct folders, and emit routes that consider `trailingSlash`

- [#9222](https://github.com/withastro/astro/pull/9222) [`279e3c1b3`](https://github.com/withastro/astro/commit/279e3c1b3d06e7b48f01c0ef8285c3719ac74ace) Thanks [@matthewp](https://github.com/matthewp)! - Ensure the dev-overlay-window is anchored to the bottom

- [#9292](https://github.com/withastro/astro/pull/9292) [`5428b3da0`](https://github.com/withastro/astro/commit/5428b3da08493d933981c4646d5d132fb31f0d25) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improves display for `astro preferences list` command

- [#9235](https://github.com/withastro/astro/pull/9235) [`9c2342c32`](https://github.com/withastro/astro/commit/9c2342c327a13d2f7d1eb387b743e81f431b9813) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix SVG icons not showing properly in the extended dropdown menu of the dev overlay

- [#9218](https://github.com/withastro/astro/pull/9218) [`f4401c8c1`](https://github.com/withastro/astro/commit/f4401c8c1fa203431b4e7b2e89381a91b4ef1ac6) Thanks [@matthewp](https://github.com/matthewp)! - Improve high contrast mode with the Dev Overlay

- [#9254](https://github.com/withastro/astro/pull/9254) [`b750a161e`](https://github.com/withastro/astro/commit/b750a161e0e059de9cf814ce271d5891e4e97cbe) Thanks [@matthewp](https://github.com/matthewp)! - Improve highlight/tooltip positioning when in fixed positions

- [#9230](https://github.com/withastro/astro/pull/9230) [`60cfa49e4`](https://github.com/withastro/astro/commit/60cfa49e445c926288612a6b1a30113ab988011c) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update the look and feel of the dev overlay

- [#9248](https://github.com/withastro/astro/pull/9248) [`43ddb5217`](https://github.com/withastro/astro/commit/43ddb5217691dc4112d8d98ae07511a8be6d4b94) Thanks [@martrapp](https://github.com/martrapp)! - Adds properties of the submit button (name, value) to the form data of a view transition

- [#9170](https://github.com/withastro/astro/pull/9170) [`8a228fce0`](https://github.com/withastro/astro/commit/8a228fce0114daeea2100e50ddc5cf2ea0a03b5d) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Adds new accessibility audits to the Dev Toolbar's built-in Audits app.

  The audits Astro performs are non-exhaustive and only capable of detecting a handful of common accessibility issues. Please take care to perform a thorough, **manual** audit of your site to ensure compliance with the [Web Content Accessibility Guidelines (WCAG) international standard](https://www.w3.org/WAI/standards-guidelines/wcag/) _before_ publishing your site.

  🧡 Huge thanks to the [Svelte](https://github.com/sveltejs/svelte) team for providing the basis of these accessibility audits!

- [#9149](https://github.com/withastro/astro/pull/9149) [`0fe3a7ed5`](https://github.com/withastro/astro/commit/0fe3a7ed5d7bb1a9fce1623e84ba14104b51223c) Thanks [@bluwy](https://github.com/bluwy)! - Removes vendored Vite's `importMeta.d.ts` file in favour of Vite 5's new `vite/types/import-meta.d.ts` export

- [#9295](https://github.com/withastro/astro/pull/9295) [`3d2dbb0e5`](https://github.com/withastro/astro/commit/3d2dbb0e5d2bf67b38ff8533d4dd938c94433812) Thanks [@matthewp](https://github.com/matthewp)! - Remove aria-query package

  This is another CJS-only package that breaks usage.

- [#9274](https://github.com/withastro/astro/pull/9274) [`feaba2c7f`](https://github.com/withastro/astro/commit/feaba2c7fc0a48d3af7dd98e6b750ec1e8274e33) Thanks [@TheOtterlord](https://github.com/TheOtterlord)! - Fix routing prefixes when `prefixDefaultLocale` is `true`

- [#9273](https://github.com/withastro/astro/pull/9273) [`9887f2412`](https://github.com/withastro/astro/commit/9887f241241f800e2907afe7079db070f3bfcfab) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Exports type for Dev Toolbar App under correct name

- [#9150](https://github.com/withastro/astro/pull/9150) [`710be505c`](https://github.com/withastro/astro/commit/710be505c9ddf416e77a75343d8cae9c497d72c6) Thanks [@bluwy](https://github.com/bluwy)! - Refactors virtual modules exports. This should not break your project unless you import Astro's internal modules, including:

  - `astro/middleware/namespace`
  - `astro/transitions`
  - `astro/transitions/router`
  - `astro/transitions/events`
  - `astro/transitions/types`
  - `astro/prefetch`
  - `astro/i18n`

- [#9227](https://github.com/withastro/astro/pull/9227) [`4b8a42406`](https://github.com/withastro/astro/commit/4b8a42406bbdcc68604ea4ecc2a926721fbc4d52) Thanks [@matthewp](https://github.com/matthewp)! - Ensure overlay x-ray z-index is higher than the island

- [#9255](https://github.com/withastro/astro/pull/9255) [`9ea3e0b94`](https://github.com/withastro/astro/commit/9ea3e0b94f7c4813c52bffd78043f90fd87dffda) Thanks [@matthewp](https://github.com/matthewp)! - Adds instructions on how to hide the dev overlay

- [#9293](https://github.com/withastro/astro/pull/9293) [`cf5fa4376`](https://github.com/withastro/astro/commit/cf5fa437627ca6978ae3ff33c7894f278dfe75cd) Thanks [@matthewp](https://github.com/matthewp)! - Removes the 'a11y-role-has-required-aria-props' audit rule

  This audit rule depends on a CommonJS module. To prevent blocking the 4.0 release the rule is being removed temporarily.

- [#9214](https://github.com/withastro/astro/pull/9214) [`4fe523b00`](https://github.com/withastro/astro/commit/4fe523b0064b323ee46b2574339d96ea8bdb7b2d) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes a number of small user experience bugs with the dev overlay

- [#9013](https://github.com/withastro/astro/pull/9013) [`ff8eadb95`](https://github.com/withastro/astro/commit/ff8eadb95d34833baaf3ec7575bf4f293eae97da) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - Returns the updated config in the integration `astro:config:setup` hook's `updateConfig()` API

- Updated dependencies [[`abf601233`](https://github.com/withastro/astro/commit/abf601233f8188d118a8cb063c777478d8d9f1a3), [`addb57c8e`](https://github.com/withastro/astro/commit/addb57c8e80b7b67ec61224666f3a1db5c44410c), [`c7953645e`](https://github.com/withastro/astro/commit/c7953645eeaaf9e87c6db4494b0023d2c1878ff0)]:
  - @astrojs/markdown-remark@4.0.0

## 4.0.0-beta.7

### Patch Changes

- [#9295](https://github.com/withastro/astro/pull/9295) [`3d2dbb0e5`](https://github.com/withastro/astro/commit/3d2dbb0e5d2bf67b38ff8533d4dd938c94433812) Thanks [@matthewp](https://github.com/matthewp)! - Remove aria-query package

  This is another CJS-only package that breaks usage.

## 4.0.0-beta.6

### Patch Changes

- [#9275](https://github.com/withastro/astro/pull/9275) [`0968cb1a3`](https://github.com/withastro/astro/commit/0968cb1a373b1101a649035d2ea2210d3d6412dc) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where html annotations relevant only to the dev server were included in the production build.

- [#9292](https://github.com/withastro/astro/pull/9292) [`5428b3da0`](https://github.com/withastro/astro/commit/5428b3da08493d933981c4646d5d132fb31f0d25) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improves display for `astro preferences list` command

- [#9293](https://github.com/withastro/astro/pull/9293) [`cf5fa4376`](https://github.com/withastro/astro/commit/cf5fa437627ca6978ae3ff33c7894f278dfe75cd) Thanks [@matthewp](https://github.com/matthewp)! - Removes the 'a11y-role-has-required-aria-props' audit rule

  This audit rule depends on a CommonJS module. To prevent blocking the 4.0 release the rule is being removed temporarily.

## 4.0.0-beta.5

### Minor Changes

- [#9279](https://github.com/withastro/astro/pull/9279) [`6a9669b81`](https://github.com/withastro/astro/commit/6a9669b810ddfcae6c537165a438190ea1e7a4bc) Thanks [@martrapp](https://github.com/martrapp)! - Improves consistency between navigations with and without `<ViewTransitions>`. See [#9279](https://github.com/withastro/astro/pull/9279) for more details.

### Patch Changes

- [#9170](https://github.com/withastro/astro/pull/9170) [`8a228fce0`](https://github.com/withastro/astro/commit/8a228fce0114daeea2100e50ddc5cf2ea0a03b5d) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Adds new accessibility audits to the Dev Toolbar's built-in Audits app.

  The audits Astro performs are non-exhaustive and only capable of detecting a handful of common accessibility issues. Please take care to perform a thorough, **manual** audit of your site to ensure compliance with the [Web Content Accessibility Guidelines (WCAG) international standard](https://www.w3.org/WAI/standards-guidelines/wcag/) _before_ publishing your site.

  🧡 Huge thanks to the [Svelte](https://github.com/sveltejs/svelte) team for providing the basis of these accessibility audits!

- [#9274](https://github.com/withastro/astro/pull/9274) [`feaba2c7f`](https://github.com/withastro/astro/commit/feaba2c7fc0a48d3af7dd98e6b750ec1e8274e33) Thanks [@TheOtterlord](https://github.com/TheOtterlord)! - Fix routing prefixes when `prefixDefaultLocale` is `true`

- [#9273](https://github.com/withastro/astro/pull/9273) [`9887f2412`](https://github.com/withastro/astro/commit/9887f241241f800e2907afe7079db070f3bfcfab) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Exports type for Dev Toolbar App under correct name

## 4.0.0-beta.4

### Major Changes

- [#9271](https://github.com/withastro/astro/pull/9271) [`47604bd5b`](https://github.com/withastro/astro/commit/47604bd5b5bb2ea63922b657bac104c010575c20) Thanks [@matthewp](https://github.com/matthewp)! - Renames Dev Overlay to Dev Toolbar

  The previously named experimental Dev Overlay is now known as the Astro Dev Toolbar. Plugins have been renamed as Toolbar Apps. This updates our references to reflect.

  To not break existing APIs, aliases for the Toolbar-based names have been created. The previous API names will continue to function but will be deprecated in the future. All documentation has been updated to reflect Toolbar-based names.

## 4.0.0-beta.3

### Major Changes

- [#9263](https://github.com/withastro/astro/pull/9263) [`3cbd8ea75`](https://github.com/withastro/astro/commit/3cbd8ea7534910e3beae396dcfa93ce87dcdd91f) Thanks [@bluwy](https://github.com/bluwy)! - Removes additional deprecated APIs:

  - The Astro preview server now returns a 404 status instead of a 301 redirect when requesting assets from the public directory without a base.
  - Removes special handling when referencing the `astro/client-image` type. You should use the `astro/client` type instead.
  - Removes deprecated built-in `rss` support in `getStaticPaths`. You should use `@astrojs/rss` instead.
  - Removes deprecated `Astro.request.params` support. You should use `Astro.params` instead.

### Minor Changes

- [#9200](https://github.com/withastro/astro/pull/9200) [`b4b851f5a`](https://github.com/withastro/astro/commit/b4b851f5a46b32ee531db5dc39ccd2aa7af7bcfd) Thanks [@ematipico](https://github.com/ematipico)! - Adds a new way to configure the `i18n.locales` array.

  Developers can now assign a custom URL path prefix that can span multiple language codes:

  ```js
  // astro.config.mjs
  export default defineConfig({
    experimental: {
      i18n: {
        defaultLocale: 'english',
        locales: ['de', { path: 'english', codes: ['en', 'en-US'] }, 'fr'],
        routingStrategy: 'prefix-always',
      },
    },
  });
  ```

  With the above configuration, the URL prefix of the default locale will be `/english/`. When computing `Astro.preferredLocale`, Astro will use the `codes`.

- [#9139](https://github.com/withastro/astro/pull/9139) [`459b26436`](https://github.com/withastro/astro/commit/459b2643666db08dbd29a100ce3d8697b451d3fe) Thanks [@bluwy](https://github.com/bluwy)! - Reworks Vite's logger to use Astro's logger to correctly log HMR messages

### Patch Changes

- [#9252](https://github.com/withastro/astro/pull/9252) [`7b74ec4ba`](https://github.com/withastro/astro/commit/7b74ec4ba48e363a19d20e322212d0d264927f1b) Thanks [@ematipico](https://github.com/ematipico)! - Consistently emit fallback routes in the correct folders, and emit routes that
  consider `trailingSlash`

- [#9235](https://github.com/withastro/astro/pull/9235) [`9c2342c32`](https://github.com/withastro/astro/commit/9c2342c327a13d2f7d1eb387b743e81f431b9813) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix SVG icons not showing properly in the extended dropdown menu of the dev overlay

- [#9254](https://github.com/withastro/astro/pull/9254) [`b750a161e`](https://github.com/withastro/astro/commit/b750a161e0e059de9cf814ce271d5891e4e97cbe) Thanks [@matthewp](https://github.com/matthewp)! - Improve highlight/tooltip positioning when in fixed positions

- [#9230](https://github.com/withastro/astro/pull/9230) [`60cfa49e4`](https://github.com/withastro/astro/commit/60cfa49e445c926288612a6b1a30113ab988011c) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update the look and feel of the dev overlay

- [#9248](https://github.com/withastro/astro/pull/9248) [`43ddb5217`](https://github.com/withastro/astro/commit/43ddb5217691dc4112d8d98ae07511a8be6d4b94) Thanks [@martrapp](https://github.com/martrapp)! - Adds properties of the submit button (name, value) to the form data of a view transition

- [#9255](https://github.com/withastro/astro/pull/9255) [`9ea3e0b94`](https://github.com/withastro/astro/commit/9ea3e0b94f7c4813c52bffd78043f90fd87dffda) Thanks [@matthewp](https://github.com/matthewp)! - Adds instructions on how to hide the dev overlay

- [#9013](https://github.com/withastro/astro/pull/9013) [`ff8eadb95`](https://github.com/withastro/astro/commit/ff8eadb95d34833baaf3ec7575bf4f293eae97da) Thanks [@bayssmekanique](https://github.com/bayssmekanique)! - Returns the updated config in the integration `astro:config:setup` hook's `updateConfig()` API

## 4.0.0-beta.2

### Major Changes

- [#9225](https://github.com/withastro/astro/pull/9225) [`c421a3d17`](https://github.com/withastro/astro/commit/c421a3d17911aeda29b5204f6d568ae87e329eaf) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Removes the opt-in `handleForms` property for `<ViewTransitions />`. Form submissions are now handled by default and can be disabled by setting `data-astro-reload` on relevant `<form />` elements.

- [#9199](https://github.com/withastro/astro/pull/9199) [`49aa215a0`](https://github.com/withastro/astro/commit/49aa215a01ee1c4805316c85bb0aea6cfbc25a31) Thanks [@lilnasy](https://github.com/lilnasy)! - This change only affects maintainers of third-party adapters. In the Integration API, the `app.render()` method of the `App` class has been simplified.

  Instead of two optional arguments, it now takes a single optional argument that is an object with two optional properties: `routeData` and `locals`.

  ```diff
   app.render(request)

  - app.render(request, routeData)
  + app.render(request, { routeData })

  - app.render(request, routeData, locals)
  + app.render(request, { routeData, locals })

  - app.render(request, undefined, locals)
  + app.render(request, { locals })
  ```

  The current signature is deprecated but will continue to function until next major version.

- [#9212](https://github.com/withastro/astro/pull/9212) [`c0383ea0c`](https://github.com/withastro/astro/commit/c0383ea0c102cb62b7235823c706a090ba08715f) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Removes deprecated `app.match()` option, `matchNotFound`

### Minor Changes

- [#9115](https://github.com/withastro/astro/pull/9115) [`3b77889b4`](https://github.com/withastro/astro/commit/3b77889b47750ed6e17c7858780dc4aae9201b58) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Adds the `astro preferences` command to manage user preferences. User preferences are specific to individual Astro users, unlike the `astro.config.mjs` file which changes behavior for everyone working on a project.

  User preferences are scoped to the current project by default, stored in a local `.astro/settings.json` file. Using the `--global` flag, user preferences can also be applied to every Astro project on the current machine. Global user preferences are stored in an operating system-specific location.

  ```sh
  # Disable the dev overlay for the current user in the current project
  npm run astro preferences disable devOverlay
  # Disable the dev overlay for the current user in all Astro projects on this machine
  npm run astro preferences --global disable devOverlay

  # Check if the dev overlay is enabled for the current user
  npm run astro preferences list devOverlay
  ```

- [#9129](https://github.com/withastro/astro/pull/9129) [`8bfc20511`](https://github.com/withastro/astro/commit/8bfc20511918d675202cdc100d4efab293e5cbac) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update error log formatting

### Patch Changes

- [#9222](https://github.com/withastro/astro/pull/9222) [`279e3c1b3`](https://github.com/withastro/astro/commit/279e3c1b3d06e7b48f01c0ef8285c3719ac74ace) Thanks [@matthewp](https://github.com/matthewp)! - Ensure the dev-overlay-window is anchored to the bottom

- [#9218](https://github.com/withastro/astro/pull/9218) [`f4401c8c1`](https://github.com/withastro/astro/commit/f4401c8c1fa203431b4e7b2e89381a91b4ef1ac6) Thanks [@matthewp](https://github.com/matthewp)! - Improve high contrast mode with the Dev Overlay

- [#9227](https://github.com/withastro/astro/pull/9227) [`4b8a42406`](https://github.com/withastro/astro/commit/4b8a42406bbdcc68604ea4ecc2a926721fbc4d52) Thanks [@matthewp](https://github.com/matthewp)! - Ensure overlay x-ray z-index is higher than the island

- [#9214](https://github.com/withastro/astro/pull/9214) [`4fe523b00`](https://github.com/withastro/astro/commit/4fe523b0064b323ee46b2574339d96ea8bdb7b2d) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes a number of small user experience bugs with the dev overlay

## 4.0.0-beta.1

### Patch Changes

- [#9118](https://github.com/withastro/astro/pull/9118) [`000e8f465`](https://github.com/withastro/astro/commit/000e8f4654cae9982e21e0a858366c4844139db6) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Redesign Dev Overlay main screen to show more information, such as the coolest integrations, your current Astro version and more.

- [#9118](https://github.com/withastro/astro/pull/9118) [`000e8f465`](https://github.com/withastro/astro/commit/000e8f4654cae9982e21e0a858366c4844139db6) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes an issue where links with the same pathname as the current page, but different search params, were not prefetched.

## 4.0.0-beta.0

### Major Changes

- [#9138](https://github.com/withastro/astro/pull/9138) [`abf601233`](https://github.com/withastro/astro/commit/abf601233f8188d118a8cb063c777478d8d9f1a3) Thanks [@bluwy](https://github.com/bluwy)! - Updates the unified, remark, and rehype dependencies to latest. Make sure to update your custom remark and rehype plugins as well to be compatible with the latest versions.

  **Potentially breaking change:** The default value of `markdown.remarkRehype.footnoteBackLabel` is changed from `"Back to content"` to `"Back to reference 1"`. See the `mdast-util-to-hast` [commit](https://github.com/syntax-tree/mdast-util-to-hast/commit/56c88e45690be138fad9f0bf367b939d09816863) for more information.

- [#9181](https://github.com/withastro/astro/pull/9181) [`cdabf6ef0`](https://github.com/withastro/astro/commit/cdabf6ef02be7220fd2b6bdcef924ceca089381e) Thanks [@bluwy](https://github.com/bluwy)! - Removes support for returning simple objects from endpoints (deprecated since Astro 3.0). You should return a `Response` instead.

  `ResponseWithEncoding` is also removed. You can refactor the code to return a response with an array buffer instead, which is encoding agnostic.

  The types for middlewares have also been revised. To type a middleware function, you should now use `MiddlewareHandler` instead of `MiddlewareResponseHandler`. If you used `defineMiddleware()` to type the function, no changes are needed.

- [#9122](https://github.com/withastro/astro/pull/9122) [`1c48ed286`](https://github.com/withastro/astro/commit/1c48ed286538ab9e354eca4e4dcd7c6385c96721) Thanks [@bluwy](https://github.com/bluwy)! - Adds Vite 5 support. There are no breaking changes from Astro. Check the [Vite migration guide](https://vitejs.dev/guide/migration.html) for details of the breaking changes from Vite instead.

- [#9196](https://github.com/withastro/astro/pull/9196) [`37697a2c5`](https://github.com/withastro/astro/commit/37697a2c5511572dc29c0a4ea46f90c2f62be8e6) Thanks [@bluwy](https://github.com/bluwy)! - Removes support for Shiki custom language's `path` property. The language JSON file should be imported and passed to the option instead.

  ```diff
  // astro.config.js
  + import customLang from './custom.tmLanguage.json'

  export default defineConfig({
    markdown: {
      shikiConfig: {
        langs: [
  -       { path: './custom.tmLanguage.json' },
  +       customLang,
        ],
      },
    },
  })
  ```

- [#9168](https://github.com/withastro/astro/pull/9168) [`153a5abb9`](https://github.com/withastro/astro/commit/153a5abb905042ac68b712514dc9ec387d3e6b17) Thanks [@bluwy](https://github.com/bluwy)! - Removes deprecated features from Astro 3.0

  - Adapters are now required to pass `supportedAstroFeatures` to specify a list of features they support.
  - The `build.split` and `build.excludeMiddleware` options are removed. Use `functionPerRoute` and `edgeMiddleware` from adapters instead.
  - The `markdown.drafts` option and draft feature is removed. Use content collections instead.
  - Lowercase endpoint names are no longer supported. Use uppercase endpoint names instead.
  - `getHeaders()` exported from markdown files is removed. Use `getHeadings()` instead.

### Minor Changes

- [#9105](https://github.com/withastro/astro/pull/9105) [`6201bbe96`](https://github.com/withastro/astro/commit/6201bbe96c2a083fb201e4a43a9bd88499821a3e) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update CLI logging experience

- [#9161](https://github.com/withastro/astro/pull/9161) [`bd0c2e9ae`](https://github.com/withastro/astro/commit/bd0c2e9ae3389a9d3085050c1e8134ae98dff299) Thanks [@bluwy](https://github.com/bluwy)! - Renames the `entryPoint` property of the `injectRoute` integrations API to `entrypoint` for consistency. A warning will be shown prompting you to update your code when using the old name.

### Patch Changes

- [#9149](https://github.com/withastro/astro/pull/9149) [`0fe3a7ed5`](https://github.com/withastro/astro/commit/0fe3a7ed5d7bb1a9fce1623e84ba14104b51223c) Thanks [@bluwy](https://github.com/bluwy)! - Removes vendored Vite's `importMeta.d.ts` file in favour of Vite 5's new `vite/types/import-meta.d.ts` export

- [#9150](https://github.com/withastro/astro/pull/9150) [`710be505c`](https://github.com/withastro/astro/commit/710be505c9ddf416e77a75343d8cae9c497d72c6) Thanks [@bluwy](https://github.com/bluwy)! - Refactors virtual modules exports. This should not break your project unless you import Astro's internal modules, including:

  - `astro/middleware/namespace`
  - `astro/transitions`
  - `astro/transitions/router`
  - `astro/transitions/events`
  - `astro/transitions/types`
  - `astro/prefetch`
  - `astro/i18n`

- Updated dependencies [[`abf601233`](https://github.com/withastro/astro/commit/abf601233f8188d118a8cb063c777478d8d9f1a3), [`addb57c8e`](https://github.com/withastro/astro/commit/addb57c8e80b7b67ec61224666f3a1db5c44410c), [`c7953645e`](https://github.com/withastro/astro/commit/c7953645eeaaf9e87c6db4494b0023d2c1878ff0)]:
  - @astrojs/markdown-remark@4.0.0-beta.0

## 3.6.4

### Patch Changes

- [#9226](https://github.com/withastro/astro/pull/9226) [`8f8a40e93`](https://github.com/withastro/astro/commit/8f8a40e93d6a0774ba84a6f5db8c42cd81db005e) Thanks [@outofambit](https://github.com/outofambit)! - Fix i18n fallback routing with routing strategy of always-prefix

- [#9179](https://github.com/withastro/astro/pull/9179) [`3f28336d9`](https://github.com/withastro/astro/commit/3f28336d9a52d7e4364d455ee3128d14d10a078a) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where the presence of a slot in a page led to an error.

- [#9219](https://github.com/withastro/astro/pull/9219) [`067a65f5b`](https://github.com/withastro/astro/commit/067a65f5b4d163bf1944cf47e6bf891f0b93553f) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix edge case where `<style>` updates inside of `.astro` files would ocassionally fail to update without reloading the page.

- [#9236](https://github.com/withastro/astro/pull/9236) [`27d3e86e4`](https://github.com/withastro/astro/commit/27d3e86e4c8d04101113ab7a53477f26a4fb0619) Thanks [@ematipico](https://github.com/ematipico)! - The configuration `i18n.routingStrategy` has been replaced with an object called `routing`.

  ```diff
  export default defineConfig({
    experimental: {
        i18n: {
  -          routingStrategy: "prefix-always",
  +          routing: {
  +              prefixDefaultLocale: true,
  +          }
        }
    }
  })
  ```

  ```diff
  export default defineConfig({
    experimental: {
        i18n: {
  -          routingStrategy: "prefix-other-locales",
  +          routing: {
  +              prefixDefaultLocale: false,
  +          }
        }
    }
  })
  ```

## 3.6.3

### Patch Changes

- [#9193](https://github.com/withastro/astro/pull/9193) [`0dc99c9a2`](https://github.com/withastro/astro/commit/0dc99c9a28fcb6b46db49eefac6afa415875edcb) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Prevents the Code component from crashing if the lang isn't supported by falling back to `plaintext`.

## 3.6.2

### Patch Changes

- [#9189](https://github.com/withastro/astro/pull/9189) [`d90714fc3`](https://github.com/withastro/astro/commit/d90714fc3dd7c3eab0a6b29319b0b666bb04b678) Thanks [@SpencerWhitehead7](https://github.com/SpencerWhitehead7)! - Fixes an issue where links with the same pathname as the current page, but different search params, were not prefetched.

## 3.6.4

### Patch Changes

- [#9226](https://github.com/withastro/astro/pull/9226) [`8f8a40e93`](https://github.com/withastro/astro/commit/8f8a40e93d6a0774ba84a6f5db8c42cd81db005e) Thanks [@outofambit](https://github.com/outofambit)! - Fix i18n fallback routing with routing strategy of always-prefix

- [#9179](https://github.com/withastro/astro/pull/9179) [`3f28336d9`](https://github.com/withastro/astro/commit/3f28336d9a52d7e4364d455ee3128d14d10a078a) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where the presence of a slot in a page led to an error.

- [#9219](https://github.com/withastro/astro/pull/9219) [`067a65f5b`](https://github.com/withastro/astro/commit/067a65f5b4d163bf1944cf47e6bf891f0b93553f) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix edge case where `<style>` updates inside of `.astro` files would ocassionally fail to update without reloading the page.

- [#9236](https://github.com/withastro/astro/pull/9236) [`27d3e86e4`](https://github.com/withastro/astro/commit/27d3e86e4c8d04101113ab7a53477f26a4fb0619) Thanks [@ematipico](https://github.com/ematipico)! - The configuration `i18n.routingStrategy` has been replaced with an object called `routing`.

  ```diff
  export default defineConfig({
    experimental: {
        i18n: {
  -          routingStrategy: "prefix-always",
  +          routing: {
  +              prefixDefaultLocale: true,
  +          }
        }
    }
  })
  ```

  ```diff
  export default defineConfig({
    experimental: {
        i18n: {
  -          routingStrategy: "prefix-other-locales",
  +          routing: {
  +              prefixDefaultLocale: false,
  +          }
        }
    }
  })
  ```

## 3.6.3

### Patch Changes

- [#9193](https://github.com/withastro/astro/pull/9193) [`0dc99c9a2`](https://github.com/withastro/astro/commit/0dc99c9a28fcb6b46db49eefac6afa415875edcb) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Prevents the Code component from crashing if the lang isn't supported by falling back to `plaintext`.

## 3.6.2

### Patch Changes

- [#9189](https://github.com/withastro/astro/pull/9189) [`d90714fc3`](https://github.com/withastro/astro/commit/d90714fc3dd7c3eab0a6b29319b0b666bb04b678) Thanks [@SpencerWhitehead7](https://github.com/SpencerWhitehead7)! - Fixes an issue where links with the same pathname as the current page, but different search params, were not prefetched.

## 3.6.1

### Patch Changes

- [#9173](https://github.com/withastro/astro/pull/9173) [`04fdc1c61`](https://github.com/withastro/astro/commit/04fdc1c613171409ed1a2bd887326e26cdb8b5ef) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where having a middleware prevented the SSR app from being deployed on Netlify.

- [#9186](https://github.com/withastro/astro/pull/9186) [`607542c7c`](https://github.com/withastro/astro/commit/607542c7cf9fe9813c06f1d96615d6c793262d22) Thanks [@martrapp](https://github.com/martrapp)! - Fixes a view transition issue on webKit browsers that prevented scrolling to #fragments

## 3.6.0

### Minor Changes

- [#9090](https://github.com/withastro/astro/pull/9090) [`c87223c21`](https://github.com/withastro/astro/commit/c87223c21ab5d515fb8f04ee10be5c0ca51e0b29) Thanks [@martrapp](https://github.com/martrapp)! - Take full control over the behavior of view transitions!

  Three new events now complement the existing `astro:after-swap` and `astro:page-load` events:

  ```javascript
  'astro:before-preparation'; // Control how the DOM and other resources of the target page are loaded
  'astro:after-preparation'; // Last changes before taking off? Remove that loading indicator? Here you go!
  'astro:before-swap'; // Control how the DOM is updated to match the new page
  ```

  The `astro:before-*` events allow you to change properties and strategies of the view transition implementation.
  The `astro:after-*` events are notifications that a phase is complete.
  Head over to docs to see [the full view transitions lifecycle](https://docs.astro.build/en/guides/view-transitions/#lifecycle-events) including these new events!

- [#9092](https://github.com/withastro/astro/pull/9092) [`0ea4bd47e`](https://github.com/withastro/astro/commit/0ea4bd47e0d7cc98c43568a55aa87da772bd2e0a) Thanks [@smitbarmase](https://github.com/smitbarmase)! - Changes the fallback prefetch behavior on slow connections and when data saver mode is enabled. Instead of disabling prefetch entirely, the `tap` strategy will be used.

- [#9166](https://github.com/withastro/astro/pull/9166) [`cba6cf32d`](https://github.com/withastro/astro/commit/cba6cf32d9bf1f5c3268808f185a4824d6fbd7f4) Thanks [@matthewp](https://github.com/matthewp)! - The Picture component is no longer experimental

  The `<Picture />` component, part of `astro:assets`, has exited experimental status and is now recommended for use. There are no code changes to the component, and no upgrade to your project is necessary.

  This is only a change in documentation/recommendation. If you were waiting to use the `<Picture />` component until it had exited the experimental stage, wait no more!

- [#9092](https://github.com/withastro/astro/pull/9092) [`0ea4bd47e`](https://github.com/withastro/astro/commit/0ea4bd47e0d7cc98c43568a55aa87da772bd2e0a) Thanks [@smitbarmase](https://github.com/smitbarmase)! - Adds a `ignoreSlowConnection` option to the `prefetch()` API to prefetch even on data saver mode or slow connection.

## 3.5.7

### Patch Changes

- [#9157](https://github.com/withastro/astro/pull/9157) [`7ff8d62bf`](https://github.com/withastro/astro/commit/7ff8d62bf861694067491ff17d01b1b0f6809d6b) Thanks [@ematipico](https://github.com/ematipico)! - Revert fix around fallback system, which broken injected styles

## 3.5.6

### Patch Changes

- [#9121](https://github.com/withastro/astro/pull/9121) [`f4efd1c80`](https://github.com/withastro/astro/commit/f4efd1c808476c7e60fe00fcfb86276cf14fee79) Thanks [@peng](https://github.com/peng)! - Adds a warning if `astro add` fetches a package but returns a non-404 status

- [#9142](https://github.com/withastro/astro/pull/9142) [`7d55cf68d`](https://github.com/withastro/astro/commit/7d55cf68d89cb46bfb89a109b09af61be8431c89) Thanks [@ematipico](https://github.com/ematipico)! - Consistely emit fallback routes in the correct folders.

- [#9119](https://github.com/withastro/astro/pull/9119) [`306781795`](https://github.com/withastro/astro/commit/306781795d5f4b755bbdf650a937f1f3c00030bd) Thanks [@ematipico](https://github.com/ematipico)! - Fix a flaw in the i18n fallback logic, where the routes didn't preserve their metadata, such as hoisted scripts

- [#9140](https://github.com/withastro/astro/pull/9140) [`7742fd7dc`](https://github.com/withastro/astro/commit/7742fd7dc26533c6f7cd497b00b72de935c57628) Thanks [@martrapp](https://github.com/martrapp)! - View Transitions: handle clicks on SVGAElements and image maps"

- [#9101](https://github.com/withastro/astro/pull/9101) [`e3dce215a`](https://github.com/withastro/astro/commit/e3dce215a5ea06bcff1b21027e5613e6518c69d4) Thanks [@ematipico](https://github.com/ematipico)! - Add a new property `Astro.currentLocale`, available when `i18n` is enabled.

## 3.5.5

### Patch Changes

- [#9091](https://github.com/withastro/astro/pull/9091) [`536c6c9fd`](https://github.com/withastro/astro/commit/536c6c9fd3d65d1a60bbc8b924c5939f27541d41) Thanks [@ematipico](https://github.com/ematipico)! - The `routingStrategy` `prefix-always` should not force its logic to endpoints. This fixes some regression with `astro:assets` and `@astrojs/rss`.

- [#9102](https://github.com/withastro/astro/pull/9102) [`60e8210b0`](https://github.com/withastro/astro/commit/60e8210b0ce5bc512aff72a32322ba7937a411b0) Thanks [@Princesseuh](https://github.com/Princesseuh)! - In the dev overlay, when there's too many plugins enabled at once, some of the plugins will now be hidden in a separate sub menu to avoid the bar becoming too long

## 3.5.4

### Patch Changes

- [#9085](https://github.com/withastro/astro/pull/9085) [`fc66ecff1`](https://github.com/withastro/astro/commit/fc66ecff18a20dd436026cb8e75bcc8b5ab0e681) Thanks [@ematipico](https://github.com/ematipico)! - When redirecting to the default root locale, Astro middleare should take into consideration the value of `trailingSlash`

- [#9067](https://github.com/withastro/astro/pull/9067) [`c6e449c5b`](https://github.com/withastro/astro/commit/c6e449c5b3e6e994b362b9ce441c8a1a81129f23) Thanks [@danielhajduk](https://github.com/danielhajduk)! - Fixes display of debug messages when using the `--verbose` flag

- [#9075](https://github.com/withastro/astro/pull/9075) [`c5dc8f2ec`](https://github.com/withastro/astro/commit/c5dc8f2ec9c8c1bbbffabed9eeb12d151aefb81e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix Passthrough image service generating multiple images with the same content in certain cases

- [#9083](https://github.com/withastro/astro/pull/9083) [`4537ecf0d`](https://github.com/withastro/astro/commit/4537ecf0d060f89cb8c000338a7fc5f4197a88c8) Thanks [@bluwy](https://github.com/bluwy)! - Uses new `createShikiHighlighter` API from `@astrojs/markdown-remark` to avoid code duplication

- [#9084](https://github.com/withastro/astro/pull/9084) [`045e5ec97`](https://github.com/withastro/astro/commit/045e5ec9793a4ba2e3f0248d734246eb033225e8) Thanks [@matthewp](https://github.com/matthewp)! - Supports `formmethod` and `formaction` for form overrides

- [#9087](https://github.com/withastro/astro/pull/9087) [`b895113a0`](https://github.com/withastro/astro/commit/b895113a0ae347ecd81bd8866ae2d816ea20836b) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Fixes the regression which broke bundling of image service for pre-rendered pages, which was introduced by [#8854](https://github.com/withastro/astro/pull/8854)

- [#9058](https://github.com/withastro/astro/pull/9058) [`5ef89ef33`](https://github.com/withastro/astro/commit/5ef89ef33e0dc4621db947b6889b3c563eb56a78) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add a new settings panel to the dev overlay

- [#9045](https://github.com/withastro/astro/pull/9045) [`84312f24f`](https://github.com/withastro/astro/commit/84312f24f8af2098b0831cf2361ea3d37761d3d3) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - Fixes preview server `trailingSlash` handling for request URLs with query strings

- Updated dependencies [[`4537ecf0d`](https://github.com/withastro/astro/commit/4537ecf0d060f89cb8c000338a7fc5f4197a88c8)]:
  - @astrojs/markdown-remark@3.5.0

## 3.5.3

### Patch Changes

- [#9069](https://github.com/withastro/astro/pull/9069) [`50164f5e3`](https://github.com/withastro/astro/commit/50164f5e37cdc6ad81216627d8edb2a98ed37491) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix a regression introduced in 3.5.0 related to content collection styles

## 3.5.2

### Patch Changes

- [#9057](https://github.com/withastro/astro/pull/9057) [`1bc331968`](https://github.com/withastro/astro/commit/1bc3319686808292322ea3f7e5df3b4a37357111) Thanks [@ematipico](https://github.com/ematipico)! - Correctly infer the presence of an user middleware

## 3.5.1

### Patch Changes

- [#9037](https://github.com/withastro/astro/pull/9037) [`ea71975ec`](https://github.com/withastro/astro/commit/ea71975ec0c99f407f0e2fd0c248a959284d2068) Thanks [@sarah11918](https://github.com/sarah11918)! - Updates i18n configuration reference

- [#9051](https://github.com/withastro/astro/pull/9051) [`15b84ccb9`](https://github.com/withastro/astro/commit/15b84ccb9859b070e30030015fca0de090a7b079) Thanks [@ematipico](https://github.com/ematipico)! - Fix a regression where endpoints were incorrectly processed during SSG build when `trailingSlash: "always"`

- [#9042](https://github.com/withastro/astro/pull/9042) [`7dedd17fc`](https://github.com/withastro/astro/commit/7dedd17fc4c48aba31d9d39a10a94cd271b19746) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - Safely bail when the `xclip` command does not exist on Linux when trying to copy to clipboard with `astro info`

- [#9050](https://github.com/withastro/astro/pull/9050) [`bf0286e50`](https://github.com/withastro/astro/commit/bf0286e50c09f8b5a08af63d7837add69af9b7e4) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix --verbose flag not working

- [#9049](https://github.com/withastro/astro/pull/9049) [`49b82edb2`](https://github.com/withastro/astro/commit/49b82edb2c0d5058ec1adaed33d8b027220091c1) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix image errors when images were used on the client

## 3.5.0

### Minor Changes

- [#8869](https://github.com/withastro/astro/pull/8869) [`f5bdfa272`](https://github.com/withastro/astro/commit/f5bdfa272b4270b06bc539c2e382d6730987300c) Thanks [@matthewp](https://github.com/matthewp)! - ## Integration Hooks to add Middleware

  It's now possible in Astro for an integration to add middleware on behalf of the user. Previously when a third party wanted to provide middleware, the user would need to create a `src/middleware.ts` file themselves. Now, adding third-party middleware is as easy as adding a new integration.

  For integration authors, there is a new `addMiddleware` function in the `astro:config:setup` hook. This function allows you to specify a middleware module and the order in which it should be applied:

  ```js
  // my-package/middleware.js
  import { defineMiddleware } from 'astro:middleware';

  export const onRequest = defineMiddleware(async (context, next) => {
    const response = await next();

    if (response.headers.get('content-type') === 'text/html') {
      let html = await response.text();
      html = minify(html);
      return new Response(html, {
        status: response.status,
        headers: response.headers,
      });
    }

    return response;
  });
  ```

  You can now add your integration's middleware and specify that it runs either before or after the application's own defined middleware (defined in `src/middleware.{js,ts}`)

  ```js
  // my-package/integration.js
  export function myIntegration() {
    return {
      name: 'my-integration',
      hooks: {
        'astro:config:setup': ({ addMiddleware }) => {
          addMiddleware({
            entrypoint: 'my-package/middleware',
            order: 'pre',
          });
        },
      },
    };
  }
  ```

- [#8854](https://github.com/withastro/astro/pull/8854) [`3e1239e42`](https://github.com/withastro/astro/commit/3e1239e42b99bf069265393dc359bf967fc64902) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Provides a new, experimental build cache for [Content Collections](https://docs.astro.build/en/guides/content-collections/) as part of the [Incremental Build RFC](https://github.com/withastro/roadmap/pull/763). This includes multiple refactors to Astro's build process to optimize how Content Collections are handled, which should provide significant performance improvements for users with many collections.

  Users building a `static` site can opt-in to preview the new build cache by adding the following flag to your Astro config:

  ```js
  // astro.config.mjs
  export default {
    experimental: {
      contentCollectionCache: true,
    },
  };
  ```

  When this experimental feature is enabled, the files generated from your content collections will be stored in the [`cacheDir`](https://docs.astro.build/en/reference/configuration-reference/#cachedir) (by default, `node_modules/.astro`) and reused between builds. Most CI environments automatically restore files in `node_modules/` by default.

  In our internal testing on the real world [Astro Docs](https://github.com/withastro/docs) project, this feature reduces the bundling step of `astro build` from **133.20s** to **10.46s**, about 92% faster. The end-to-end `astro build` process used to take **4min 58s** and now takes just over `1min` for a total reduction of 80%.

  If you run into any issues with this experimental feature, please let us know!

  You can always bypass the cache for a single build by passing the `--force` flag to `astro build`.

  ```
  astro build --force
  ```

- [#8963](https://github.com/withastro/astro/pull/8963) [`fda3a0213`](https://github.com/withastro/astro/commit/fda3a0213b1907fd63076ebc93d92ada3d026461) Thanks [@matthewp](https://github.com/matthewp)! - Form support in View Transitions router

  The `<ViewTransitions />` router can now handle form submissions, allowing the same animated transitions and stateful UI retention on form posts that are already available on `<a>` links. With this addition, your Astro project can have animations in all of these scenarios:

  - Clicking links between pages.
  - Making stateful changes in forms (e.g. updating site preferences).
  - Manually triggering navigation via the `navigate()` API.

  This feature is opt-in for semver reasons and can be enabled by adding the `handleForms` prop to the `<ViewTransitions /> component:

  ```astro
  ---
  // src/layouts/MainLayout.astro
  import { ViewTransitions } from 'astro:transitions';
  ---

  <html>
    <head>
      <!-- ... -->
      <ViewTransitions handleForms />
    </head>
    <body>
      <!-- ... -->
    </body>
  </html>
  ```

  Just as with links, if you don't want the routing handling a form submission, you can opt out on a per-form basis with the `data-astro-reload` property:

  ```astro
  ---
  // src/components/Contact.astro
  ---

  <form class="contact-form" action="/request" method="post" data-astro-reload>
    <!-- ...-->
  </form>
  ```

  Form support works on post `method="get"` and `method="post"` forms.

- [#8954](https://github.com/withastro/astro/pull/8954) [`f0031b0a3`](https://github.com/withastro/astro/commit/f0031b0a3959b03d1b28e173982c7e1ca60e735f) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updates the Image Services API to now delete original images from the final build that are not used outside of the optimization pipeline. For users with a large number of these images (e.g. thumbnails), this should reduce storage consumption and deployment times.

- [#8984](https://github.com/withastro/astro/pull/8984) [`26b1484e8`](https://github.com/withastro/astro/commit/26b1484e808feee6faca3bd89fb512849a664046) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds a new property `propertiesToHash` to the Image Services API to allow specifying which properties of `getImage()` / `<Image />` / `<Picture />` should be used for hashing the result files when doing local transformations. For most services, this will include properties such as `src`, `width` or `quality` that directly changes the content of the generated image.

- [#9010](https://github.com/withastro/astro/pull/9010) [`100b61ab5`](https://github.com/withastro/astro/commit/100b61ab5a34c1efc571a57ce46832ece97688e5) Thanks [@jasikpark](https://github.com/jasikpark)! - The `<Picture />` component will now use `jpg` and `jpeg` respectively as fallback formats when the original image is in those formats.

- [#8974](https://github.com/withastro/astro/pull/8974) [`143bacf39`](https://github.com/withastro/astro/commit/143bacf3962f7b0ed3efe2bdfea844e72e10d288) Thanks [@ematipico](https://github.com/ematipico)! - Experimental support for i18n routing.

  Astro's experimental i18n routing API allows you to add your multilingual content with support for configuring a default language, computing relative page URLs, and accepting preferred languages provided by your visitor's browser. You can also specify fallback languages on a per-language basis so that your visitors can always be directed to existing content on your site.

  Enable the experimental routing option by adding an `i18n` object to your Astro configuration with a default location and a list of all languages to support:

  ```js
  // astro.config.mjs
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    experimental: {
      i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es', 'pt-br'],
      },
    },
  });
  ```

  Organize your content folders by locale depending on your `i18n.routingStrategy`, and Astro will handle generating your routes and showing your preferred URLs to your visitors.

  ```
  ├── src
  │   ├── pages
  │   │   ├── about.astro
  │   │   ├── index.astro
  │   │   ├── es
  │   │   │   ├── about.astro
  │   │   │   ├── index.astro
  │   │   ├── pt-br
  │   │   │   ├── about.astro
  │   │   │   ├── index.astro
  ```

  Compute relative URLs for your links with `getRelativeLocaleUrl` from the new `astro:i18n` module:

  ```astro
  ---
  import { getRelativeLocaleUrl } from 'astro:i18n';
  const aboutUrl = getRelativeLocaleUrl('pt-br', 'about');
  ---

  <p>Learn more <a href={aboutURL}>About</a> this site!</p>
  ```

  Enabling i18n routing also provides two new properties for browser language detection: `Astro.preferredLocale` and `Astro.preferredLocaleList`. These combine the browser's `Accept-Langauge` header, and your site's list of supported languages and can be used to automatically respect your visitor's preferred languages.

  Read more about Astro's [experimental i18n routing](https://docs.astro.build/en/guides/internationalization/) in our documentation.

- [#8951](https://github.com/withastro/astro/pull/8951) [`38e21d127`](https://github.com/withastro/astro/commit/38e21d1275a379744bc402ad28ac35bd629d5ff0) Thanks [@bluwy](https://github.com/bluwy)! - Prefetching is now supported in core

  You can enable prefetching for your site with the `prefetch: true` config. It is enabled by default when using [View Transitions](https://docs.astro.build/en/guides/view-transitions/) and can also be used to configure the `prefetch` behaviour used by View Transitions.

  You can enable prefetching by setting `prefetch:true` in your Astro config:

  ```js
  // astro.config.js
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    prefetch: true,
  });
  ```

  This replaces the `@astrojs/prefetch` integration, which is now deprecated and will eventually be removed.
  Visit the [Prefetch guide](https://docs.astro.build/en/guides/prefetch/) for more information.

- [#8903](https://github.com/withastro/astro/pull/8903) [`c5010aad3`](https://github.com/withastro/astro/commit/c5010aad3475669648dc939e00f88bbb52489d0d) Thanks [@horo-fox](https://github.com/horo-fox)! - Adds experimental support for multiple shiki themes with the new `markdown.shikiConfig.experimentalThemes` option.

### Patch Changes

- [#9016](https://github.com/withastro/astro/pull/9016) [`1ecc9aa32`](https://github.com/withastro/astro/commit/1ecc9aa3240b79a3879b1329aa4f671d80e87649) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add ability to "Click to go editor" on auditted elements in the dev overlay

- [#9029](https://github.com/withastro/astro/pull/9029) [`29b83e9e4`](https://github.com/withastro/astro/commit/29b83e9e4b906cc0b5d92fae854fb350fc2be7c8) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Use UInt8Array instead of Buffer for both the input and return values of the `transform()` hook of the Image Service API to ensure compatibility with non-Node runtimes.

  This change is unlikely to affect you, but if you were previously relying on the return value being a Buffer, you may convert an `UInt8Array` to a `Buffer` using `Buffer.from(your_array)`.

- Updated dependencies [[`c5010aad3`](https://github.com/withastro/astro/commit/c5010aad3475669648dc939e00f88bbb52489d0d)]:
  - @astrojs/markdown-remark@3.4.0

## 3.4.4

### Patch Changes

- [#9000](https://github.com/withastro/astro/pull/9000) [`35739d01e`](https://github.com/withastro/astro/commit/35739d01e9cc4fa31a8b85201feecf29c747eca9) Thanks [@martrapp](https://github.com/martrapp)! - Fixes an error in dev mode on Safari where view transitions prevented navigating to pages with `client:only` components

- [#9014](https://github.com/withastro/astro/pull/9014) [`d979b8f0a`](https://github.com/withastro/astro/commit/d979b8f0a82c12f2a844c429982207c88fe13ae6) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add animations, shadows and general styling tweaks to the Dev Overlay to better match the intended design.

- [#8996](https://github.com/withastro/astro/pull/8996) [`3988bbcc9`](https://github.com/withastro/astro/commit/3988bbcc9ead0b9af60b8a8749a0ad25c686bde3) Thanks [@bluwy](https://github.com/bluwy)! - Adds compatibility for shiki languages with the `path` property

- [#8986](https://github.com/withastro/astro/pull/8986) [`910eb00fe`](https://github.com/withastro/astro/commit/910eb00fe0b70ca80bd09520ae100e8c78b675b5) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `sizes` attribute not being present on `source` elements when using it on the Picture component

## 3.4.3

### Patch Changes

- [#8981](https://github.com/withastro/astro/pull/8981) [`ab7e745cc`](https://github.com/withastro/astro/commit/ab7e745cc9abd592aa631bffb35880221e7ac89c) Thanks [@matthewp](https://github.com/matthewp)! - Increase the scroll restoration throttle time

- [#8940](https://github.com/withastro/astro/pull/8940) [`937522fb7`](https://github.com/withastro/astro/commit/937522fb70be522378268d04e6bb20d8dc401c0b) Thanks [@MarvinXu](https://github.com/MarvinXu)! - Omit nullish and falsy (non-zero) values when stringifying object-form `style` attributes in Astro files

## 3.4.2

### Patch Changes

- [#8977](https://github.com/withastro/astro/pull/8977) [`40a061679`](https://github.com/withastro/astro/commit/40a06167976a29798a0b9e7eab64dd39f4ab6521) Thanks [@matthewp](https://github.com/matthewp)! - Prevent route announcer from being visible

- [#8929](https://github.com/withastro/astro/pull/8929) [`2da33b7a1`](https://github.com/withastro/astro/commit/2da33b7a13cf964595f758e3e4a865fd97d0943e) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where rendering the same slot multiple times invoked it only once.

- [#8978](https://github.com/withastro/astro/pull/8978) [`cc3278bb6`](https://github.com/withastro/astro/commit/cc3278bb69738c4e0c7811d683ead71bea6f46c1) Thanks [@Princesseuh](https://github.com/Princesseuh)! - In the dev overlay, add a tooltip showing the currently hovered / focused plugin's name

## 3.4.1

### Patch Changes

- [#8966](https://github.com/withastro/astro/pull/8966) [`262cef248`](https://github.com/withastro/astro/commit/262cef2487c7494bd8d23b4ab27bfcdf1870a111) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix Dev Overlay not working properly when view transitions are enabled

- [#8932](https://github.com/withastro/astro/pull/8932) [`5fed432b0`](https://github.com/withastro/astro/commit/5fed432b0c3c84542a3d1b2952d183e9cbe3fa0e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixed window component appearing over the dev overlay on small windows. Added a maximum length to sections of the tooltip component

- [#8965](https://github.com/withastro/astro/pull/8965) [`430c470ac`](https://github.com/withastro/astro/commit/430c470ace5cfae5f53b530df54c0dc7e2046aaa) Thanks [@matthewp](https://github.com/matthewp)! - Move VT route announcer styles to a class

  Doing so allows stricter CSP policies.

- [#8762](https://github.com/withastro/astro/pull/8762) [`35cd810f0`](https://github.com/withastro/astro/commit/35cd810f0f988010fbb8e6d7ab205de5d816e2b2) Thanks [@evadecker](https://github.com/evadecker)! - Upgrades Zod to 3.22.4

- [#8928](https://github.com/withastro/astro/pull/8928) [`ca90b47cf`](https://github.com/withastro/astro/commit/ca90b47cfc5e00f5065cf461e2fe50db62215e49) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Renames dev overlay UI Toolkit component names for consistency.

## 3.4.0

### Minor Changes

- [#8755](https://github.com/withastro/astro/pull/8755) [`fe4079f05`](https://github.com/withastro/astro/commit/fe4079f05ba21c0f3a167f8e3f55eff705506bd2) Thanks [@matthewp](https://github.com/matthewp)! - Page Partials

  A page component can now be identified as a **partial** page, which will render its HTML content without including a `<! DOCTYPE html>` declaration nor any `<head>` content.

  A rendering library, like htmx or Stimulus or even just jQuery can access partial content on the client to dynamically update only parts of a page.

  Pages marked as partials do not have a `doctype` or any head content included in the rendered result. You can mark any page as a partial by setting this option:

  ```astro
  ---
  export const partial = true;
  ---

  <li>This is a single list item.</li>
  ```

  Other valid page files that can export a value (e.g. `.mdx`) can also be marked as partials.

  Read more about [Astro page partials](https://docs.astro.build/en/core-concepts/astro-pages/#page-partials) in our documentation.

- [#8821](https://github.com/withastro/astro/pull/8821) [`4740d761a`](https://github.com/withastro/astro/commit/4740d761aeb526dbd79517ebe8cd934f90b17f7c) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Improved image optimization performance

  Astro will now generate optimized images concurrently at build time, which can significantly speed up build times for sites with many images. Additionally, Astro will now reuse the same buffer for all variants of an image. This should improve performance for websites with many variants of the same image, especially when using remote images.

  No code changes are required to take advantage of these improvements.

- [#8757](https://github.com/withastro/astro/pull/8757) [`e99586787`](https://github.com/withastro/astro/commit/e99586787b6b53d35daf0195ab9835326cea464a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Dev Overlay (experimental)

  Provides a new dev overlay for your browser preview that allows you to inspect your page islands, see helpful audits on performance and accessibility, and more. A Dev Overlay Plugin API is also included to allow you to add new features and third-party integrations to it.

  You can enable access to the dev overlay and its API by adding the following flag to your Astro config:

  ```ts
  // astro.config.mjs
  export default {
    experimental: {
      devOverlay: true,
    },
  };
  ```

  Read the [Dev Overlay Plugin API documentation](https://docs.astro.build/en/reference/dev-overlay-plugin-reference/) for information about building your own plugins to integrate with Astro's dev overlay.

- [#8880](https://github.com/withastro/astro/pull/8880) [`8c3d4a859`](https://github.com/withastro/astro/commit/8c3d4a859aec0b94cabd14cc56b5bf3e5e973e36) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Moves the logic for overriding the image service out of core and into adapters. Also fixes a regression where a valid `astro:assets` image service configuration could be overridden.

## 3.3.4

### Patch Changes

- [#8877](https://github.com/withastro/astro/pull/8877) [`26b77b8fe`](https://github.com/withastro/astro/commit/26b77b8fef0e03bfc5550aecaa1f56a4fc1cd297) Thanks [@bluwy](https://github.com/bluwy)! - Fixes CSS modules ordering by rendering styles before links

- Updated dependencies [[`341ef6578`](https://github.com/withastro/astro/commit/341ef6578528a00f89bf6da5e4243b0fde272816)]:
  - @astrojs/telemetry@3.0.4

## 3.3.3

### Patch Changes

- [#8870](https://github.com/withastro/astro/pull/8870) [`5ea6ee0ed`](https://github.com/withastro/astro/commit/5ea6ee0ed494c792a4c94928a83c5c85b9b6ac32) Thanks [@xstevenyung](https://github.com/xstevenyung)! - prevent production install on astro add cmd

- [#8840](https://github.com/withastro/astro/pull/8840) [`5c888c10b`](https://github.com/withastro/astro/commit/5c888c10b712ca60a23e66b88af8051b54b42323) Thanks [@martrapp](https://github.com/martrapp)! - Fixes styles of `client:only` components not persisting during view transitions in dev mode

- [#8814](https://github.com/withastro/astro/pull/8814) [`ad2bb9155`](https://github.com/withastro/astro/commit/ad2bb9155997380d0880b0c6c7b12f079a031d48) Thanks [@lilnasy](https://github.com/lilnasy)! - Fix an issue where `500.astro` did not render when the middleware threw an error.

- [#8863](https://github.com/withastro/astro/pull/8863) [`326e17893`](https://github.com/withastro/astro/commit/326e178933f7a22f4e897b763832619f168b53dd) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Fixes an issue where the dev server logged the full file path on updates.

## 3.3.2

### Patch Changes

- [#8852](https://github.com/withastro/astro/pull/8852) [`2c18e2d12`](https://github.com/withastro/astro/commit/2c18e2d127516c2130cf50369885a30af0190d58) Thanks [@rayriffy](https://github.com/rayriffy)! - Only use Vite config from astro.config.mjs as source of truth

- [#8828](https://github.com/withastro/astro/pull/8828) [`11f45b9a3`](https://github.com/withastro/astro/commit/11f45b9a3216f60317e1c54bb3e6c4e9e0add342) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - fix file system path references

- [#8779](https://github.com/withastro/astro/pull/8779) [`2b8a459a6`](https://github.com/withastro/astro/commit/2b8a459a6ae82c7a1d278ef263e316841295e7d6) Thanks [@ematipico](https://github.com/ematipico)! - Enriches the explanation of the `base` configuration with examples.

## 3.3.1

### Patch Changes

- [#8823](https://github.com/withastro/astro/pull/8823) [`8946f2a25`](https://github.com/withastro/astro/commit/8946f2a256edf1aca6a7bb0db1f6ea9ce9493253) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix duplicate images being created in some cases when using densities and/or widths

- [#8842](https://github.com/withastro/astro/pull/8842) [`b405b039a`](https://github.com/withastro/astro/commit/b405b039a6824590e4ad63605f19f0925b4b88ce) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes Picture component not taking into account the fallback format specified

- [#8827](https://github.com/withastro/astro/pull/8827) [`ce3025cfa`](https://github.com/withastro/astro/commit/ce3025cfa27a38199f81fb783a68fe1190c1d09e) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - better error handling there whenever we don't get a normal 200 response

- [#8817](https://github.com/withastro/astro/pull/8817) [`f8de1983b`](https://github.com/withastro/astro/commit/f8de1983bde3ecfed3ab61abf0aa9f967b0d86ce) Thanks [@bluwy](https://github.com/bluwy)! - Fix error overlay syntax highlighting

- [#8838](https://github.com/withastro/astro/pull/8838) [`2f9e2083d`](https://github.com/withastro/astro/commit/2f9e2083d5783c9980cd8b9d69165128f0a5ae19) Thanks [@dominikg](https://github.com/dominikg)! - deps: unpin and update tsconfck from `3.0.0-next.9` to `^3.0.0`

- [#8823](https://github.com/withastro/astro/pull/8823) [`8946f2a25`](https://github.com/withastro/astro/commit/8946f2a256edf1aca6a7bb0db1f6ea9ce9493253) Thanks [@Princesseuh](https://github.com/Princesseuh)! - fix remote srcset images not being resized

## 3.3.0

### Minor Changes

- [#8808](https://github.com/withastro/astro/pull/8808) [`2993055be`](https://github.com/withastro/astro/commit/2993055bed2764c31ff4b4f55b81ab6b1ae6b401) Thanks [@delucis](https://github.com/delucis)! - Adds support for an `--outDir` CLI flag to `astro build`

- [#8502](https://github.com/withastro/astro/pull/8502) [`c4270e476`](https://github.com/withastro/astro/commit/c4270e47681ee2453f3fea07fed7b238645fd6ea) Thanks [@bluwy](https://github.com/bluwy)! - Updates the internal `shiki` syntax highlighter to `shikiji`, an ESM-focused alternative that simplifies bundling and maintenance.

  There are no new options and no changes to how you author code blocks and syntax highlighting.

  **Potentially breaking change:** While this refactor should be transparent for most projects, the transition to `shikiji` now produces a smaller HTML markup by attaching a fallback `color` style to the `pre` or `code` element, instead of to the line `span` directly. For example:

  Before:

  ```html
  <code class="astro-code" style="background-color: #24292e">
    <pre>
      <span class="line" style="color: #e1e4e8">my code</span>
    </pre>
  </code>
  ```

  After:

  ```html
  <code class="astro-code" style="background-color: #24292e; color: #e1e4e8">
    <pre>
      <span class="line">my code<span>
    </pre>
  </code>
  ```

  This does not affect the colors as the `span` will inherit the `color` from the parent, but if you're relying on a specific HTML markup, please check your site carefully after upgrading to verify the styles.

- [#8798](https://github.com/withastro/astro/pull/8798) [`f369fa250`](https://github.com/withastro/astro/commit/f369fa25055a3497ebaf61c88fb0e8af56c73212) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixed `tsconfig.json`'s new array format for `extends` not working. This was done by migrating Astro to use [`tsconfck`](https://github.com/dominikg/tsconfck) instead of [`tsconfig-resolver`](https://github.com/ifiokjr/tsconfig-resolver) to find and parse `tsconfig.json` files.

- [#8620](https://github.com/withastro/astro/pull/8620) [`b2ae9ee0c`](https://github.com/withastro/astro/commit/b2ae9ee0c42b11ffc1d3f070d1d5ac881aef84ed) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds experimental support for generating `srcset` attributes and a new `<Picture />` component.

  ## `srcset` support

  Two new properties have been added to `Image` and `getImage()`: `densities` and `widths`.

  These properties can be used to generate a `srcset` attribute, either based on absolute widths in pixels (e.g. [300, 600, 900]) or pixel density descriptors (e.g. `["2x"]` or `[1.5, 2]`).

  ```astro
  ---
  import { Image } from 'astro';
  import myImage from './my-image.jpg';
  ---

  <Image src={myImage} width={myImage.width / 2} densities={[1.5, 2]} alt="My cool image" />
  ```

  ```html
  <img
    src="/_astro/my_image.hash.webp"
    srcset="/_astro/my_image.hash.webp 1.5x, /_astro/my_image.hash.webp 2x"
    alt="My cool image"
  />
  ```

  ## Picture component

  The experimental `<Picture />` component can be used to generate a `<picture>` element with multiple `<source>` elements.

  The example below uses the `format` property to generate a `<source>` in each of the specified image formats:

  ```astro
  ---
  import { Picture } from 'astro:assets';
  import myImage from './my-image.jpg';
  ---

  <Picture src={myImage} formats={['avif', 'webp']} alt="My super image in multiple formats!" />
  ```

  The above code will generate the following HTML, and allow the browser to determine the best image to display:

  ```html
  <picture>
    <source srcset="..." type="image/avif" />
    <source srcset="..." type="image/webp" />
    <img src="..." alt="My super image in multiple formats!" />
  </picture>
  ```

  The `Picture` component takes all the same props as the `Image` component, including the new `densities` and `widths` properties.

### Patch Changes

- [#8771](https://github.com/withastro/astro/pull/8771) [`bd5aa1cd3`](https://github.com/withastro/astro/commit/bd5aa1cd35ecbd2784f30dd836ff814684fee02b) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixed an issue where the transitions router did not work within framework components.

- [#8800](https://github.com/withastro/astro/pull/8800) [`391729686`](https://github.com/withastro/astro/commit/391729686bcc8404a7dd48c5987ee380daf3200f) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixed an issue where attempting to assign a variable onto locals threw an error.

- [#8795](https://github.com/withastro/astro/pull/8795) [`f999365b8`](https://github.com/withastro/astro/commit/f999365b8248b8b14f3743e68a42d450d06acff3) Thanks [@bluwy](https://github.com/bluwy)! - Fix markdown page charset to be utf-8 by default (same as Astro 2)

- [#8810](https://github.com/withastro/astro/pull/8810) [`0abff97fe`](https://github.com/withastro/astro/commit/0abff97fed3db14be3c75ff9ece3aab67c4ba783) Thanks [@jacobthesheep](https://github.com/jacobthesheep)! - Remove `network-information-types` package since TypeScript supports Network Information API natively.

- [#8813](https://github.com/withastro/astro/pull/8813) [`3bef32f81`](https://github.com/withastro/astro/commit/3bef32f81c56bc600ca307f1bd40787e23e625a5) Thanks [@martrapp](https://github.com/martrapp)! - Save and restore focus for persisted input elements during view transitions

- Updated dependencies [[`c4270e476`](https://github.com/withastro/astro/commit/c4270e47681ee2453f3fea07fed7b238645fd6ea)]:
  - @astrojs/markdown-remark@3.3.0

## 3.2.4

### Patch Changes

- [#8638](https://github.com/withastro/astro/pull/8638) [`160d1cd75`](https://github.com/withastro/astro/commit/160d1cd755e70af1d8ec294d01dd2cb32d60db50) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - The `@astrojs/tailwind` integration now creates a `tailwind.config.mjs` file by default

- [#8767](https://github.com/withastro/astro/pull/8767) [`30de32436`](https://github.com/withastro/astro/commit/30de324361bc261956eb9fc08fe60a82ff602a9b) Thanks [@martrapp](https://github.com/martrapp)! - Revert fix #8472

  [#8472](https://github.com/withastro/astro/pull/8472) caused some style files from previous pages to not be cleanly deleted on view transitions. For a discussion of a future fix for the original issue [#8144](https://github.com/withastro/astro/issues/8114) see [#8745](https://github.com/withastro/astro/pull/8745).

- [#8741](https://github.com/withastro/astro/pull/8741) [`c4a7ec425`](https://github.com/withastro/astro/commit/c4a7ec4255e7acb9555cb8bb74ea13c5fbb2ac17) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixed an issue on Windows where lowercase drive letters in current working directory led to missing scripts and styles.

- [#8772](https://github.com/withastro/astro/pull/8772) [`c24f70d91`](https://github.com/withastro/astro/commit/c24f70d91601dd3a6b5a84f04d61824e775e9b44) Thanks [@martrapp](https://github.com/martrapp)! - Fix flickering during view transitions

- [#8754](https://github.com/withastro/astro/pull/8754) [`93b092266`](https://github.com/withastro/astro/commit/93b092266febfad16a48575f8eee12d5910bf071) Thanks [@bluwy](https://github.com/bluwy)! - Make CSS chunk names less confusing

- [#8776](https://github.com/withastro/astro/pull/8776) [`29cdfa024`](https://github.com/withastro/astro/commit/29cdfa024886dd581cb207586f7dfec6966bdd4e) Thanks [@martrapp](https://github.com/martrapp)! - Fix transition attributes on islands

- [#8773](https://github.com/withastro/astro/pull/8773) [`eaed844ea`](https://github.com/withastro/astro/commit/eaed844ea8f2f52e0c9caa40bb3ec7377e10595f) Thanks [@sumimakito](https://github.com/sumimakito)! - Fix an issue where HTML attributes do not render if getHTMLAttributes in an image service returns a Promise

## 3.2.3

### Patch Changes

- [#8737](https://github.com/withastro/astro/pull/8737) [`6f60da805`](https://github.com/withastro/astro/commit/6f60da805e0014bc50dd07bef972e91c73560c3c) Thanks [@ematipico](https://github.com/ematipico)! - Add provenance statement when publishing the library from CI

- [#8747](https://github.com/withastro/astro/pull/8747) [`d78806dfe`](https://github.com/withastro/astro/commit/d78806dfe0301ea7ffe6c7c1f783bd415ac7cda9) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improve error message when user attempts to render a dynamic component reference

- [#8736](https://github.com/withastro/astro/pull/8736) [`d1c75fe15`](https://github.com/withastro/astro/commit/d1c75fe158839699c59728cf3a83888e8c72a459) Thanks [@bluwy](https://github.com/bluwy)! - Fix `tsconfig.json` update causing the server to crash

- [#8743](https://github.com/withastro/astro/pull/8743) [`aa265d730`](https://github.com/withastro/astro/commit/aa265d73024422967c1b1c68ad268c419c6c798f) Thanks [@bluwy](https://github.com/bluwy)! - Remove unused CSS output files when inlined

- [#8700](https://github.com/withastro/astro/pull/8700) [`78adbc443`](https://github.com/withastro/astro/commit/78adbc4433208458291e36713909762e148e1e5d) Thanks [@jacobthesheep](https://github.com/jacobthesheep)! - Update link for Netlify SSR

- [#8729](https://github.com/withastro/astro/pull/8729) [`21e0757ea`](https://github.com/withastro/astro/commit/21e0757ea22a57d344c934045ca19db93b684436) Thanks [@lilnasy](https://github.com/lilnasy)! - Node-based adapters now create less server-side javascript

- [#8730](https://github.com/withastro/astro/pull/8730) [`357270f2a`](https://github.com/withastro/astro/commit/357270f2a3d0bf2aa634ba7e52e9d17618eff4a7) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improve `astro info` copy to clipboard compatability

- Updated dependencies [[`21f482657`](https://github.com/withastro/astro/commit/21f4826576c2c812a1604e18717799da3470decd), [`6f60da805`](https://github.com/withastro/astro/commit/6f60da805e0014bc50dd07bef972e91c73560c3c), [`21e0757ea`](https://github.com/withastro/astro/commit/21e0757ea22a57d344c934045ca19db93b684436)]:
  - @astrojs/markdown-remark@3.2.1
  - @astrojs/internal-helpers@0.2.1
  - @astrojs/telemetry@3.0.3

## 3.2.2

### Patch Changes

- [#8724](https://github.com/withastro/astro/pull/8724) [`455af3235`](https://github.com/withastro/astro/commit/455af3235b3268852e6988accecc796f03f6d16e) Thanks [@bluwy](https://github.com/bluwy)! - Fix CSS styles on Windows

- [#8710](https://github.com/withastro/astro/pull/8710) [`4c2bec681`](https://github.com/withastro/astro/commit/4c2bec681b0752e7215b8a32bd2d44bf477adac1) Thanks [@matthewp](https://github.com/matthewp)! - Fixes View transition styles being missing when component used multiple times

## 3.2.1

### Patch Changes

- [#8680](https://github.com/withastro/astro/pull/8680) [`31c59ad8b`](https://github.com/withastro/astro/commit/31c59ad8b6a72f95c98a306ecf92d198c03110b4) Thanks [@bluwy](https://github.com/bluwy)! - Fix hydration on slow connection

- [#8698](https://github.com/withastro/astro/pull/8698) [`47ea310f0`](https://github.com/withastro/astro/commit/47ea310f01d06ed1562c790bec348718a2fa8277) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Use a Node-specific image endpoint to resolve images in dev and Node SSR. This should fix many issues related to getting 404 from the \_image endpoint under certain configurations

- [#8706](https://github.com/withastro/astro/pull/8706) [`345808170`](https://github.com/withastro/astro/commit/345808170fce783ddd3c9a4035a91fa64dcc5f46) Thanks [@bluwy](https://github.com/bluwy)! - Fix duplicated Astro and Vite injected styles

## 3.2.0

### Minor Changes

- [#8696](https://github.com/withastro/astro/pull/8696) [`2167ffd72`](https://github.com/withastro/astro/commit/2167ffd72f58904f449ffc6e53581a2d8faf7317) Thanks [@matthewp](https://github.com/matthewp)! - Support adding integrations dynamically

  Astro integrations can now themselves dynamically add and configure additional integrations during set-up. This makes it possible for integration authors to bundle integrations more intelligently for their users.

  In the following example, a custom integration checks whether `@astrojs/sitemap` is already configured. If not, the integration adds Astro’s sitemap integration, passing any desired configuration options:

  ```ts
  import sitemap from '@astrojs/sitemap';
  import type { AstroIntegration } from 'astro';

  const MyIntegration = (): AstroIntegration => {
    return {
      name: 'my-integration',

      'astro:config:setup': ({ config, updateConfig }) => {
        // Look for sitemap in user-configured integrations.
        const userSitemap = config.integrations.find(
          ({ name }) => name === '@astrojs/sitemap'
        );

        if (!userSitemap) {
          // If sitemap wasn’t found, add it.
          updateConfig({
            integrations: [sitemap({ /* opts */ }],
          });
        }
      },
    };
  };
  ```

- [#8696](https://github.com/withastro/astro/pull/8696) [`2167ffd72`](https://github.com/withastro/astro/commit/2167ffd72f58904f449ffc6e53581a2d8faf7317) Thanks [@matthewp](https://github.com/matthewp)! - View transitions can now be triggered from JavaScript!

  Import the client-side router from "astro:transitions/client" and enjoy your new remote control for navigation:

  ```js
  import { navigate } from 'astro:transitions/client';

  // Navigate to the selected option automatically.
  document.querySelector('select').onchange = (ev) => {
    let href = ev.target.value;
    navigate(href);
  };
  ```

- [#8696](https://github.com/withastro/astro/pull/8696) [`2167ffd72`](https://github.com/withastro/astro/commit/2167ffd72f58904f449ffc6e53581a2d8faf7317) Thanks [@matthewp](https://github.com/matthewp)! - Route Announcer in `<ViewTransitions />`

  The View Transitions router now does route announcement. When transitioning between pages with a traditional MPA approach, assistive technologies will announce the page title when the page finishes loading. This does not automatically happen during client-side routing, so visitors relying on these technologies to announce routes are not aware when a page has changed.

  The view transitions route announcer runs after the `astro:page-load` event, looking for the page `<title>` to announce. If one cannot be found, the announcer falls back to the first `<h1>` it finds, or otherwise announces the pathname. We recommend you always include a `<title>` in each page for accessibility.

  See the [View Transitions docs](https://docs.astro.build/en/guides/view-transitions/) for more on how accessibility is handled.

### Patch Changes

- [#8647](https://github.com/withastro/astro/pull/8647) [`408b50c5e`](https://github.com/withastro/astro/commit/408b50c5ea5aba66252424f54788557274a58571) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixed an issue where configured redirects with dynamic routes did not work in dev mode.

- [#8696](https://github.com/withastro/astro/pull/8696) [`2167ffd72`](https://github.com/withastro/astro/commit/2167ffd72f58904f449ffc6e53581a2d8faf7317) Thanks [@matthewp](https://github.com/matthewp)! - Fix logLevel passed to Vite build

- [#8696](https://github.com/withastro/astro/pull/8696) [`2167ffd72`](https://github.com/withastro/astro/commit/2167ffd72f58904f449ffc6e53581a2d8faf7317) Thanks [@matthewp](https://github.com/matthewp)! - Fix NoImageMetadata image path error message

- [#8670](https://github.com/withastro/astro/pull/8670) [`e797b6816`](https://github.com/withastro/astro/commit/e797b6816072f63f38d9a91dd2a66765c558d46c) Thanks [@MichailiK](https://github.com/MichailiK)! - Fix asset optimization failing when outDir is outside the project directory

- [#8684](https://github.com/withastro/astro/pull/8684) [`824dd4670`](https://github.com/withastro/astro/commit/824dd4670a145c47337eff84a5ae412bf7443117) Thanks [@matthewp](https://github.com/matthewp)! - Support content collections with % in filename

- [#8648](https://github.com/withastro/astro/pull/8648) [`cfd895d87`](https://github.com/withastro/astro/commit/cfd895d877fdb7fc69e745665a374fc32cb3ef7d) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixed an issue where a response with status code 404 led to an endless loop of implicit rerouting in dev mode.

## 3.1.4

### Patch Changes

- [#8646](https://github.com/withastro/astro/pull/8646) [`69fbf95b2`](https://github.com/withastro/astro/commit/69fbf95b22c0fb0d8e7e5fef9ec61e26cac9767f) Thanks [@matthewp](https://github.com/matthewp)! - Fix cases of head propagation not occuring in dev server

## 3.1.3

### Patch Changes

- [#8591](https://github.com/withastro/astro/pull/8591) [`863f5171e`](https://github.com/withastro/astro/commit/863f5171e8e7516c9d72f2e48ea7db1dea71c4f5) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - add site url to the location of redirect

- [#8633](https://github.com/withastro/astro/pull/8633) [`63141f3f3`](https://github.com/withastro/astro/commit/63141f3f3e4a57d2f55ccfebd7e506ea1033a1ab) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix build not working when having multiple images in the same Markdown file

- [#8636](https://github.com/withastro/astro/pull/8636) [`974d5117a`](https://github.com/withastro/astro/commit/974d5117abc8b47f8225e455b9285c88e305272f) Thanks [@martrapp](https://github.com/martrapp)! - fix: no deletion of scripts during view transition

- [#8645](https://github.com/withastro/astro/pull/8645) [`cb838b84b`](https://github.com/withastro/astro/commit/cb838b84b457041b0442996f7611b04aa940a620) Thanks [@matthewp](https://github.com/matthewp)! - Fix getDataEntryById to lookup by basename

- [#8640](https://github.com/withastro/astro/pull/8640) [`f36c4295b`](https://github.com/withastro/astro/commit/f36c4295be1ef2bcfa4aecb3c59551388419c53d) Thanks [@matthewp](https://github.com/matthewp)! - Warn on empty content collections

- [#8615](https://github.com/withastro/astro/pull/8615) [`4c4ad9d16`](https://github.com/withastro/astro/commit/4c4ad9d167e8d15ff2c15e3336ede8ca22f646b2) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Improve the logging of assets for adapters that do not support image optimization

## 3.1.2

### Patch Changes

- [#8612](https://github.com/withastro/astro/pull/8612) [`bcad715ce`](https://github.com/withastro/astro/commit/bcad715ce67bc73a7927c941d1e7f02a82d638c2) Thanks [@matthewp](https://github.com/matthewp)! - Ensure cookies are attached when middleware changes the Response

- [#8598](https://github.com/withastro/astro/pull/8598) [`bdd267d08`](https://github.com/withastro/astro/commit/bdd267d08937611984d074a2872af11ecf3e1a12) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix relative images in Markdown breaking the build process in certain circumstances

- [#8382](https://github.com/withastro/astro/pull/8382) [`e522a5eb4`](https://github.com/withastro/astro/commit/e522a5eb41c7df1e62c307c84cd14d53777439ff) Thanks [@DerTimonius](https://github.com/DerTimonius)! - Do not throw an error for an empty collection directory.

- [#8600](https://github.com/withastro/astro/pull/8600) [`ed54d4644`](https://github.com/withastro/astro/commit/ed54d46449accc99ad117d6b0d50a8905e4d65d7) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Improve config info telemetry

- [#8592](https://github.com/withastro/astro/pull/8592) [`70f2a8003`](https://github.com/withastro/astro/commit/70f2a80039d232731f63ea735e896997ec0eac7a) Thanks [@bluwy](https://github.com/bluwy)! - Fix alias plugin causing CSS ordering issue

- [#8614](https://github.com/withastro/astro/pull/8614) [`4398e9298`](https://github.com/withastro/astro/commit/4398e929877dfadd2067af28413284afdfde9d8b) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixed an issue where spaces and unicode characters in project path prevented middleware from running.

- [#8603](https://github.com/withastro/astro/pull/8603) [`8f8b9069d`](https://github.com/withastro/astro/commit/8f8b9069ddd21cf57d37955ab3a92710492226f5) Thanks [@matthewp](https://github.com/matthewp)! - Prevent body scripts from re-executing on navigation

- [#8609](https://github.com/withastro/astro/pull/8609) [`5a988eaf6`](https://github.com/withastro/astro/commit/5a988eaf609ddc1b9609acb0cdc2dda43d10a5c2) Thanks [@bluwy](https://github.com/bluwy)! - Fix Astro HMR from a CSS dependency

- Updated dependencies [[`ed54d4644`](https://github.com/withastro/astro/commit/ed54d46449accc99ad117d6b0d50a8905e4d65d7)]:
  - @astrojs/telemetry@3.0.2

## 3.1.1

### Patch Changes

- [#8580](https://github.com/withastro/astro/pull/8580) [`8d361169b`](https://github.com/withastro/astro/commit/8d361169b8e487933d671ce347f0ce74922c80cc) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - add hide to style & script generated for island

- [#8568](https://github.com/withastro/astro/pull/8568) [`95b5f6280`](https://github.com/withastro/astro/commit/95b5f6280d124f8d6f866dc3286406c272ee91bf) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix small types issues related to `astro:assets`'s AVIF support and `getImage`

- [#8579](https://github.com/withastro/astro/pull/8579) [`0586e20e8`](https://github.com/withastro/astro/commit/0586e20e8338e077b8eb1a3a96bdd19f5950c22f) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - show redirect symbol as of the page

## 3.1.0

### Minor Changes

- [#8467](https://github.com/withastro/astro/pull/8467) [`ecc65abbf`](https://github.com/withastro/astro/commit/ecc65abbf9e086c5bbd1973cd4a820082b4e0dc5) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add a new `image.endpoint` setting to allow using a custom endpoint in dev and SSR

- [#8518](https://github.com/withastro/astro/pull/8518) [`2c4fc878b`](https://github.com/withastro/astro/commit/2c4fc878bece36b7fcf1470419c7ce6f1e1e95d0) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds support for using AVIF (`.avif`) files with the Image component. Importing an AVIF file will now correctly return the same object shape as other image file types. See the [Image docs](https://docs.astro.build/en/guides/images/#update-existing-img-tags) for more information on the different properties available on the returned object.

- [#8464](https://github.com/withastro/astro/pull/8464) [`c92e0acd7`](https://github.com/withastro/astro/commit/c92e0acd715171b3f4c3294099780e21576648c8) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add types for the object syntax for `style` (ex: `style={{color: 'red'}}`)

### Patch Changes

- [#8532](https://github.com/withastro/astro/pull/8532) [`7522bb491`](https://github.com/withastro/astro/commit/7522bb4914f2f9e8b8f3c743bc9c941fd3aca644) Thanks [@bluwy](https://github.com/bluwy)! - Improve markdown rendering performance by sharing processor instance

- [#8537](https://github.com/withastro/astro/pull/8537) [`f95febf96`](https://github.com/withastro/astro/commit/f95febf96bb97babb28d78994332f5e47f5f637d) Thanks [@martrapp](https://github.com/martrapp)! - bugfix checking media-type in client-side router

- [#8536](https://github.com/withastro/astro/pull/8536) [`b85c8a78a`](https://github.com/withastro/astro/commit/b85c8a78a116dbbddc901438bc0b7a1917dc0238) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Improved error messages around `astro:assets`

- [#7607](https://github.com/withastro/astro/pull/7607) [`45364c345`](https://github.com/withastro/astro/commit/45364c345267429e400baecd1fbc290503f8b13a) Thanks [@FineWolf](https://github.com/FineWolf)! - Add `CollectionKey`, `ContentCollectionKey`, and `DataCollectionKey` exports to `astro:content`

- Updated dependencies [[`d93987824`](https://github.com/withastro/astro/commit/d93987824d3d6b4f58267be21ab8466ee8d5d5f8), [`7522bb491`](https://github.com/withastro/astro/commit/7522bb4914f2f9e8b8f3c743bc9c941fd3aca644)]:
  - @astrojs/markdown-remark@3.2.0

## 3.0.13

### Patch Changes

- [#8484](https://github.com/withastro/astro/pull/8484) [`78b82bb39`](https://github.com/withastro/astro/commit/78b82bb3929bee5d8d9bd32d65374956ddb05859) Thanks [@bb010g](https://github.com/bb010g)! - fix(astro): add support for `src/content/config.mts` files

- [#8504](https://github.com/withastro/astro/pull/8504) [`5e1099f68`](https://github.com/withastro/astro/commit/5e1099f686abcc7026bd4fa74727f3b311c6d6d6) Thanks [@ematipico](https://github.com/ematipico)! - Minify the HTML of the redicts emitted during the build.

- [#8480](https://github.com/withastro/astro/pull/8480) [`644825845`](https://github.com/withastro/astro/commit/644825845c11c8d100a9b0d16b69a23c165c529e) Thanks [@yamanoku](https://github.com/yamanoku)! - Do not add type="text/css" to inline style tag

- [#8472](https://github.com/withastro/astro/pull/8472) [`fa77fa63d`](https://github.com/withastro/astro/commit/fa77fa63d944f709a37f08be93f0d14fe1d91188) Thanks [@matthewp](https://github.com/matthewp)! - Prevent client:only styles from being removed in dev (View Transitions)

- [#8506](https://github.com/withastro/astro/pull/8506) [`23f9536de`](https://github.com/withastro/astro/commit/23f9536de0456ed2ddc9a77f7aef773ab6a8e73c) Thanks [@mascii](https://github.com/mascii)! - chore: correct description of `attribute` option in `scopedStyleStrategy`

- [#8505](https://github.com/withastro/astro/pull/8505) [`2db9762eb`](https://github.com/withastro/astro/commit/2db9762eb06d8a95021556c64e0cbb56c61352d5) Thanks [@martrapp](https://github.com/martrapp)! - Restore horizontal scroll position on history navigation (view transitions)

- [#8461](https://github.com/withastro/astro/pull/8461) [`435b10549`](https://github.com/withastro/astro/commit/435b10549878281ad2bb60207cb86f312a4a809f) Thanks [@rdwz](https://github.com/rdwz)! - Fix lang unspecified code blocks (markdownlint MD040)

- [#8492](https://github.com/withastro/astro/pull/8492) [`a6a516d94`](https://github.com/withastro/astro/commit/a6a516d9446a50cc32fbd7201b243c63b3a4db43) Thanks [@xiBread](https://github.com/xiBread)! - fix(types): make `image.service` optional

- [#8522](https://github.com/withastro/astro/pull/8522) [`43bc5f2a5`](https://github.com/withastro/astro/commit/43bc5f2a55173218bcfeec50242b72ae999930e2) Thanks [@martrapp](https://github.com/martrapp)! - let view transitions handle same origin redirects

- [#8491](https://github.com/withastro/astro/pull/8491) [`0ca332ba4`](https://github.com/withastro/astro/commit/0ca332ba4ab82cc04872776398952867b0f43d33) Thanks [@martrapp](https://github.com/martrapp)! - Bugfixes for back navigation in the view transition client-side router

## 3.0.12

### Patch Changes

- [#8449](https://github.com/withastro/astro/pull/8449) [`7eea37a07`](https://github.com/withastro/astro/commit/7eea37a075c6abb1de715de76d1911ff41e8ab13) Thanks [@matthewp](https://github.com/matthewp)! - Fix multi-layout head injection

## 3.0.11

### Patch Changes

- [#8441](https://github.com/withastro/astro/pull/8441) [`f66053a1e`](https://github.com/withastro/astro/commit/f66053a1ea0a4e3bdb0b0df12bb1bf56e1ea2618) Thanks [@martrapp](https://github.com/martrapp)! - Only transition between pages where both have ViewTransitions enabled

- [#8443](https://github.com/withastro/astro/pull/8443) [`0fa483283`](https://github.com/withastro/astro/commit/0fa483283e54c94f173838cd558dc0dbdd11e699) Thanks [@the-dijkstra](https://github.com/the-dijkstra)! - Fix "Cannot read properties of null" error in CLI code

- Updated dependencies [[`f3f62a5a2`](https://github.com/withastro/astro/commit/f3f62a5a20f4881bb04f65f192df8e1ccf7fb601)]:
  - @astrojs/markdown-remark@3.1.0

## 3.0.10

### Patch Changes

- [#8437](https://github.com/withastro/astro/pull/8437) [`b3cf1b327`](https://github.com/withastro/astro/commit/b3cf1b32765c76cfc90e497a68280ad52f02cb1f) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix imports of images with uppercased file extensions not working

- [#8440](https://github.com/withastro/astro/pull/8440) [`b92d066b7`](https://github.com/withastro/astro/commit/b92d066b737f64f08a9cf293bd07c9263ef8f32d) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix issue where `renderToFinalDestination` would throw in internal Astro code

## 3.0.9

### Patch Changes

- [#8351](https://github.com/withastro/astro/pull/8351) [`7d95bd9ba`](https://github.com/withastro/astro/commit/7d95bd9baaf755239fd7d35e4813861b2dbccf42) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixed a case where dynamic imports tried to preload inlined stylesheets.

- [#8353](https://github.com/withastro/astro/pull/8353) [`1947ef7a9`](https://github.com/withastro/astro/commit/1947ef7a99ce3d1d6ea797842edd31d5edffa5de) Thanks [@elevatebart](https://github.com/elevatebart)! - Astro will now skip asset optimization when there is a query in the import. Instead, it will let vite deal with it using plugins.

  ```vue
  <script>
  // This will not return an optimized asset
  import Component from './Component.vue?component';
  </script>
  ```

- [#8424](https://github.com/withastro/astro/pull/8424) [`61ad70fdc`](https://github.com/withastro/astro/commit/61ad70fdc52035964c43ecdb4cf7468f6c2b61e7) Thanks [@itsmatteomanf](https://github.com/itsmatteomanf)! - Fixes remote assets caching logic to not use expired assets

- [#8306](https://github.com/withastro/astro/pull/8306) [`d2f2a11cd`](https://github.com/withastro/astro/commit/d2f2a11cdb42b0de79be21c798eda8e7e7b2a277) Thanks [@jacobthesheep](https://github.com/jacobthesheep)! - Support detecting Bun when logging messages with package manager information.

- [#8414](https://github.com/withastro/astro/pull/8414) [`5126c6a40`](https://github.com/withastro/astro/commit/5126c6a40f88bff66ee5d3c3a21eea8c4a44ce7a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix missing type for `imageConfig` export from `astro:assets`

- [#8416](https://github.com/withastro/astro/pull/8416) [`48ff7855b`](https://github.com/withastro/astro/commit/48ff7855b238536a3df17cb29335c90029fc41a4) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Installing will no longer fail when Sharp can't be installed

- [#8418](https://github.com/withastro/astro/pull/8418) [`923a443cb`](https://github.com/withastro/astro/commit/923a443cb060a0e936a0e1cc87c0360232f77914) Thanks [@bluwy](https://github.com/bluwy)! - Fix markdown page HMR

- [#8332](https://github.com/withastro/astro/pull/8332) [`8935b3b46`](https://github.com/withastro/astro/commit/8935b3b4672d6c54c7b79e6c4575298f75eeb9f4) Thanks [@martrapp](https://github.com/martrapp)! - Fix scroll position when navigating back from page w/o ViewTransitions

## 3.0.8

### Patch Changes

- [#8388](https://github.com/withastro/astro/pull/8388) [`362491b8d`](https://github.com/withastro/astro/commit/362491b8da33317c9a1116fbd5a648184b9b3c7f) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Properly handle `BEFORE_HYDRATION_SCRIPT` generation, fixing MIME type error on hydration.

- [#8370](https://github.com/withastro/astro/pull/8370) [`06e7256b5`](https://github.com/withastro/astro/commit/06e7256b58682064cf7410f72658ce44507f639e) Thanks [@itsmatteomanf](https://github.com/itsmatteomanf)! - Removed extra curly brace.

## 3.0.7

### Patch Changes

- [#8366](https://github.com/withastro/astro/pull/8366) [`c5633434f`](https://github.com/withastro/astro/commit/c5633434f02cc477ee8da380e22efaccfa55d459) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `chunkFileNames` to avoid emitting invalid characters

- [#8367](https://github.com/withastro/astro/pull/8367) [`405ad9501`](https://github.com/withastro/astro/commit/405ad950173dadddc519cf1c2e7f2523bf5326a8) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `tsc` complaining about imports of `.astro` files in specific cases

- [#8357](https://github.com/withastro/astro/pull/8357) [`6b1e79814`](https://github.com/withastro/astro/commit/6b1e7981469d30aa4c3658487abed6ffea94797f) Thanks [@itsmatteomanf](https://github.com/itsmatteomanf)! - Added counter to show progress for assets image generation.
  Fixed small unit of measurement error.
- Updated dependencies [[`0ce0720c7`](https://github.com/withastro/astro/commit/0ce0720c7f2c7ba21dddfea0b75d1e9b39c6a274)]:
  - @astrojs/telemetry@3.0.1

## 3.0.6

### Patch Changes

- [#8276](https://github.com/withastro/astro/pull/8276) [`d3a6f9f83`](https://github.com/withastro/astro/commit/d3a6f9f836e35932a950e40ba69eff63d7db7eed) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Sanitize route params for leading and trailing slashes

- [#8339](https://github.com/withastro/astro/pull/8339) [`f21599671`](https://github.com/withastro/astro/commit/f21599671a90c3327307eb6d2f4d5c02e9137207) Thanks [@martrapp](https://github.com/martrapp)! - Respect the download attribute in links when using view transitions

## 3.0.5

### Patch Changes

- [#8327](https://github.com/withastro/astro/pull/8327) [`5f3a44aee`](https://github.com/withastro/astro/commit/5f3a44aeeff3c5f31a8063b6005abb90343a817e) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improve `astro info` command formatting, allow users to copy info automatically

- [#8320](https://github.com/withastro/astro/pull/8320) [`b21038c19`](https://github.com/withastro/astro/commit/b21038c193fd30351235a1b241a4a0aaf4e692f2) Thanks [@ematipico](https://github.com/ematipico)! - Exclude redirects from split entry points

- [#8331](https://github.com/withastro/astro/pull/8331) [`7a894eec3`](https://github.com/withastro/astro/commit/7a894eec3e6d2670632ca8cdb592cf5649a22d3e) Thanks [@matthewp](https://github.com/matthewp)! - Prevent View Transition fallback from waiting on looping animations

- [#8231](https://github.com/withastro/astro/pull/8231) [`af41b03d0`](https://github.com/withastro/astro/commit/af41b03d05f8a561990de42ccc93663343da2c0d) Thanks [@justinbeaty](https://github.com/justinbeaty)! - Fixes scroll behavior when using View Transitions by enabling `manual` scroll restoration

## 3.0.4

### Patch Changes

- [#8324](https://github.com/withastro/astro/pull/8324) [`0752cf368`](https://github.com/withastro/astro/commit/0752cf3688eaac535ceda1ebcd22ccaf20b2171f) Thanks [@matthewp](https://github.com/matthewp)! - Prevent React hook call warnings when used with MDX

  When React and MDX are used in the same project, if the MDX integration is added before React, previously you'd get a warning about hook calls.

  This makes it so that the MDX integration's JSX renderer is last in order.

## 3.0.3

### Patch Changes

- [#8300](https://github.com/withastro/astro/pull/8300) [`d4a6ab733`](https://github.com/withastro/astro/commit/d4a6ab7339043042fd62dffd30ba078edae55f86) Thanks [@ematipico](https://github.com/ematipico)! - Correctly retrive middleware when using it in SSR enviroments.

## 3.0.2

### Patch Changes

- [#8293](https://github.com/withastro/astro/pull/8293) [`d9bd7cf5c`](https://github.com/withastro/astro/commit/d9bd7cf5ce4086d9dd59e372ca25d4c4cfdb05f6) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `tsc` errors inside `astro/components/index.ts`

## 3.0.1

### Patch Changes

- [#8290](https://github.com/withastro/astro/pull/8290) [`ef37f9e29`](https://github.com/withastro/astro/commit/ef37f9e290d0e61403261b2a2195f127dc031654) Thanks [@matthewp](https://github.com/matthewp)! - Remove "experimental" text from the image config options, for docs and editor etc. text displayed.

- [#8290](https://github.com/withastro/astro/pull/8290) [`ef37f9e29`](https://github.com/withastro/astro/commit/ef37f9e290d0e61403261b2a2195f127dc031654) Thanks [@matthewp](https://github.com/matthewp)! - Prevent astro check cache issues

  `astro check` hits cache issues in 3.0 causing it never to work on the first try.

- [#8283](https://github.com/withastro/astro/pull/8283) [`c32f52a62`](https://github.com/withastro/astro/commit/c32f52a6246a0f929238f7d47bfc870899729fb4) Thanks [@ematipico](https://github.com/ematipico)! - Add useful warning when deprecated options are still used.

## 3.0.0

### Major Changes

- [#8188](https://github.com/withastro/astro/pull/8188) [`d0679a666`](https://github.com/withastro/astro/commit/d0679a666f37da0fca396d42b9b32bbb25d29312) Thanks [@ematipico](https://github.com/ematipico)! - Remove support for Node 16. The lowest supported version by Astro and all integrations is now v18.14.1. As a reminder, Node 16 will be deprecated on the 11th September 2023.

- [#8188](https://github.com/withastro/astro/pull/8188) [`364d861bd`](https://github.com/withastro/astro/commit/364d861bd527b8511968e2837728148f090bedef) Thanks [@ematipico](https://github.com/ematipico)! - Removed automatic flattening of `getStaticPaths` result. `.flatMap` and `.flat` should now be used to ensure that you're returning a flat array.

- [#8113](https://github.com/withastro/astro/pull/8113) [`2484dc408`](https://github.com/withastro/astro/commit/2484dc4080e5cd84b9a53648a1de426d7c907be2) Thanks [@Princesseuh](https://github.com/Princesseuh)! - This import alias is no longer included by default with astro:assets. If you were using this alias with experimental assets, you must convert them to relative file paths, or create your own [import aliases](https://docs.astro.build/en/guides/aliases/).

  ```diff
  ---
  // src/pages/posts/post-1.astro
  - import rocket from '~/assets/rocket.png'
  + import rocket from '../../assets/rocket.png';
  ---
  ```

- [#8142](https://github.com/withastro/astro/pull/8142) [`81545197a`](https://github.com/withastro/astro/commit/81545197a32fd015d763fc386c8b67e0e08b7393) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes for the `class:list` directive

  - Previously, `class:list` would ocassionally not be merged the `class` prop when passed to Astro components. Now, `class:list` is always converted to a `class` prop (as a string value).
  - Previously, `class:list` diverged from [`clsx`](https://github.com/lukeed/clsx) in a few edge cases. Now, `class:list` uses [`clsx`](https://github.com/lukeed/clsx) directly.
    - `class:list` used to deduplicate matching values, but it no longer does
    - `class:list` used to sort individual values, but it no longer does
    - `class:list` used to support `Set` and other iterables, but it no longer does

- [#8179](https://github.com/withastro/astro/pull/8179) [`6011d52d3`](https://github.com/withastro/astro/commit/6011d52d38e43c3e3d52bc3bc41a60e36061b7b7) Thanks [@matthewp](https://github.com/matthewp)! - Astro 3.0 Release Candidate

- [#8188](https://github.com/withastro/astro/pull/8188) [`80f1494cd`](https://github.com/withastro/astro/commit/80f1494cdaf72e58a420adb4f7c712d4089e1923) Thanks [@ematipico](https://github.com/ematipico)! - The `build.split` and `build.excludeMiddleware` configuration options are deprecated and have been replaced by options in the adapter config.

  If your config includes the `build.excludeMiddleware` option, replace it with `edgeMiddleware` in your adapter options:

  ```diff
  import { defineConfig } from "astro/config";
  import netlify from "@astrojs/netlify/functions";

  export default defineConfig({
       build: {
  -        excludeMiddleware: true
       },
       adapter: netlify({
  +        edgeMiddleware: true
       }),
  });
  ```

  If your config includes the `build.split` option, replace it with `functionPerRoute` in your adapter options:

  ```diff
  import { defineConfig } from "astro/config";
  import netlify from "@astrojs/netlify/functions";

  export default defineConfig({
       build: {
  -        split: true
       },
       adapter: netlify({
  +        functionPerRoute: true
       }),
  });
  ```

- [#8207](https://github.com/withastro/astro/pull/8207) [`e45f30293`](https://github.com/withastro/astro/commit/e45f3029340db718b6ed7e91b5d14f5cf14cd71d) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Change the [View Transition built-in animation](https://docs.astro.build/en/guides/view-transitions/#built-in-animation-directives) options.

  The `transition:animate` value `morph` has been renamed to `initial`. Also, this is no longer the default animation.

  If no `transition:animate` directive is specified, your animations will now default to `fade`.

  Astro also supports a new `transition:animate` value, `none`. This value can be used on a page's `<html>` element to disable animated full-page transitions on an entire page.

- [#8188](https://github.com/withastro/astro/pull/8188) [`c0de7a7b0`](https://github.com/withastro/astro/commit/c0de7a7b0f042cd49cbea4f4ac1b2ab6f9fef644) Thanks [@ematipico](https://github.com/ematipico)! - Sharp is now the default image service used for `astro:assets`. If you would prefer to still use Squoosh, you can update your config with the following:

  ```ts
  import { defineConfig, squooshImageService } from 'astro/config';

  // https://astro.build/config
  export default defineConfig({
    image: {
      service: squooshImageService(),
    },
  });
  ```

  However, not only do we recommend using Sharp as it is faster and more reliable, it is also highly likely that the Squoosh service will be removed in a future release.

- [#8188](https://github.com/withastro/astro/pull/8188) [`3c3100851`](https://github.com/withastro/astro/commit/3c31008519ce68b5b1b1cb23b71fbe0a2d506882) Thanks [@ematipico](https://github.com/ematipico)! - Remove support for `Astro.__renderMarkdown` which is used by `@astrojs/markdown-component`.

  The `<Markdown />` component was deprecated in Astro v1 and is completely removed in v3. This integration must now be removed from your project.

  As an alternative, you can use community packages that provide a similar component like https://github.com/natemoo-re/astro-remote instead.

- [#8019](https://github.com/withastro/astro/pull/8019) [`34cb20021`](https://github.com/withastro/astro/commit/34cb2002161ba88df6bcb72fecfd12ed867c134b) Thanks [@bluwy](https://github.com/bluwy)! - Remove backwards-compatible kebab-case transform for camelCase CSS variable names passed to the `style` attribute. If you were relying on the kebab-case transform in your styles, make sure to use the camelCase version to prevent missing styles. For example:

  ```astro
  ---
  const myValue = 'red';
  ---

  <!-- input -->
  <div style={{ '--myValue': myValue }}></div>

  <!-- output (before) -->
  <div style="--my-value:var(--myValue);--myValue:red"></div>

  <!-- output (after) -->
  <div style="--myValue:red"></div>
  ```

  ```diff
  <style>
    div {
  -   color: var(--my-value);
  +   color: var(--myValue);
    }
  </style>
  ```

- [#8170](https://github.com/withastro/astro/pull/8170) [`be6bbd2c8`](https://github.com/withastro/astro/commit/be6bbd2c86b9bf5268e765bb937dda00ff15781a) Thanks [@bluwy](https://github.com/bluwy)! - Remove deprecated config option types, deprecated script/style attributes, and deprecated `image` export from `astro:content`

- [#8188](https://github.com/withastro/astro/pull/8188) [`7511a4980`](https://github.com/withastro/astro/commit/7511a4980fd36536464c317de33a5190427f430a) Thanks [@ematipico](https://github.com/ematipico)! - When using an adapter that supports neither Squoosh or Sharp, Astro will now automatically use an image service that does not support processing, but still provides the other benefits of `astro:assets` such as enforcing `alt`, no CLS etc to users

- [#7979](https://github.com/withastro/astro/pull/7979) [`dbc97b121`](https://github.com/withastro/astro/commit/dbc97b121f42583728f1cdfdbf14575fda943f5b) Thanks [@bluwy](https://github.com/bluwy)! - Export experimental `dev`, `build`, `preview`, and `sync` APIs from `astro`. These APIs allow you to run Astro's commands programmatically, and replaces the previous entry point that runs the Astro CLI.

  While these APIs are experimental, the inline config parameter is relatively stable without foreseeable changes. However, the returned results of these APIs are more likely to change in the future.

  ```ts
  import { dev, build, preview, sync, type AstroInlineConfig } from 'astro';

  // Inline Astro config object.
  // Provide a path to a configuration file to load or set options directly inline.
  const inlineConfig: AstroInlineConfig = {
    // Inline-specific options...
    configFile: './astro.config.mjs',
    logLevel: 'info',
    // Standard Astro config options...
    site: 'https://example.com',
  };

  // Start the Astro dev server
  const devServer = await dev(inlineConfig);
  await devServer.stop();

  // Build your Astro project
  await build(inlineConfig);

  // Preview your built project
  const previewServer = await preview(inlineConfig);
  await previewServer.stop();

  // Generate types for your Astro project
  await sync(inlineConfig);
  ```

- [#8188](https://github.com/withastro/astro/pull/8188) [`7d2f311d4`](https://github.com/withastro/astro/commit/7d2f311d428e3d1c8c13b9bf2a708d6435713fc2) Thanks [@ematipico](https://github.com/ematipico)! - Removed support for old syntax of the API routes.

- [#8085](https://github.com/withastro/astro/pull/8085) [`68efd4a8b`](https://github.com/withastro/astro/commit/68efd4a8b29f248397667801465b3152dc98e9a7) Thanks [@bluwy](https://github.com/bluwy)! - Remove exports for `astro/internal/*` and `astro/runtime/server/*` in favour of `astro/runtime/*`. Add new `astro/compiler-runtime` export for compiler-specific runtime code.

  These are exports for Astro's internal API and should not affect your project, but if you do use these entrypoints, you can migrate like below:

  ```diff
  - import 'astro/internal/index.js';
  + import 'astro/runtime/server/index.js';

  - import 'astro/server/index.js';
  + import 'astro/runtime/server/index.js';
  ```

  ```diff
  import { transform } from '@astrojs/compiler';

  const result = await transform(source, {
  - internalURL: 'astro/runtime/server/index.js',
  + internalURL: 'astro/compiler-runtime',
    // ...
  });
  ```

- [#7893](https://github.com/withastro/astro/pull/7893) [`7bd1b86f8`](https://github.com/withastro/astro/commit/7bd1b86f85c06fdde0a1ed9146d01bac69990671) Thanks [@ematipico](https://github.com/ematipico)! - Implements a new scope style strategy called `"attribute"`. When enabled, styles are applied using `data-*` attributes.

  The **default** value of `scopedStyleStrategy` is `"attribute"`.

  If you want to use the previous behaviour, you have to use the `"where"` option:

  ```diff
  import { defineConfig } from 'astro/config';

  export default defineConfig({
  +    scopedStyleStrategy: 'where',
  });
  ```

- [#7924](https://github.com/withastro/astro/pull/7924) [`519a1c4e8`](https://github.com/withastro/astro/commit/519a1c4e8407c7abcb8d879b67a9f4b960652cae) Thanks [@matthewp](https://github.com/matthewp)! - Astro's JSX handling has been refactored with better support for each framework.

  Previously, Astro automatically scanned your components to determine which framework-specific transformations should be used. In practice, supporting advanced features like Fast Refresh with this approach proved difficult.

  Now, Astro determines which framework to use with `include` and `exclude` config options where you can specify files and folders on a per-framework basis. When using multiple JSX frameworks in the same project, users should manually control which files belong to each framework using the `include` and `exclude` options.

  ```js
  export default defineConfig({
    // The `include` config is only needed in projects that use multiple JSX frameworks;
    // if only using one no extra config is needed.
    integrations: [
      preact({
        include: ['**/preact/*'],
      }),
      react({
        include: ['**/react/*'],
      }),
      solid({
        include: ['**/solid/*'],
      }),
    ],
  });
  ```

- [#8030](https://github.com/withastro/astro/pull/8030) [`5208a3c8f`](https://github.com/withastro/astro/commit/5208a3c8fefcec7694857fb344af351f4631fc34) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Removed duplicate `astro/dist/jsx` export. Please use the `astro/jsx` export instead

- [#8188](https://github.com/withastro/astro/pull/8188) [`84af8ed9d`](https://github.com/withastro/astro/commit/84af8ed9d1e6401c6ebc9c60fe8cddb44d5044b0) Thanks [@ematipico](https://github.com/ematipico)! - Remove MDX plugin re-ordering hack

- [#8180](https://github.com/withastro/astro/pull/8180) [`f003e7364`](https://github.com/withastro/astro/commit/f003e7364317cafdb8589913b26b28e928dd07c9) Thanks [@ematipico](https://github.com/ematipico)! - The scoped hash created by the Astro compiler is now **lowercase**.

- [#7878](https://github.com/withastro/astro/pull/7878) [`0f637c71e`](https://github.com/withastro/astro/commit/0f637c71e511cb4c51712128d217a26c8eee4d40) Thanks [@bluwy](https://github.com/bluwy)! - The value of `import.meta.env.BASE_URL`, which is derived from the `base` option, will no longer have a trailing slash added by default or when `trailingSlash: "ignore"` is set. The existing behavior of `base` in combination with `trailingSlash: "always"` or `trailingSlash: "never"` is unchanged.

  If your `base` already has a trailing slash, no change is needed.

  If your `base` does not have a trailing slash, add one to preserve the previous behaviour:

  ```diff
  // astro.config.mjs
  - base: 'my-base',
  + base: 'my-base/',
  ```

- [#8118](https://github.com/withastro/astro/pull/8118) [`8a5b0c1f3`](https://github.com/withastro/astro/commit/8a5b0c1f3a4be6bb62db66ec70144109ff5b4c59) Thanks [@lilnasy](https://github.com/lilnasy)! - Astro is smarter about CSS! Small stylesheets are now inlined by default, and no longer incur the cost of additional requests to your server. Your visitors will have to wait less before they see your pages, especially those in remote locations or in a subway.

  This may not be news to you if you had opted-in via the `build.inlineStylesheets` configuration. Stabilized in Astro 2.6 and set to "auto" by default for Starlight, this configuration allows you to reduce the number of requests for stylesheets by inlining them into <style> tags. The new default is "auto", which selects assets smaller than 4kB and includes them in the initial response.

  To go back to the previous default behavior, change `build.inlineStylesheets` to "never".

  ```ts
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    build: {
      inlineStylesheets: 'never',
    },
  });
  ```

- [#8188](https://github.com/withastro/astro/pull/8188) [`148e61d24`](https://github.com/withastro/astro/commit/148e61d2492456811f8a3c8daaab1c3429a2ffdc) Thanks [@ematipico](https://github.com/ematipico)! - Reduced the amount of polyfills provided by Astro. Astro will no longer provide (no-op) polyfills for several web apis such as HTMLElement, Image or Document. If you need access to those APIs on the server, we recommend using more proper polyfills available on npm.

- [#8169](https://github.com/withastro/astro/pull/8169) [`e79e3779d`](https://github.com/withastro/astro/commit/e79e3779df0ad35253abcdb931d622847d9adb12) Thanks [@bluwy](https://github.com/bluwy)! - Remove pre-shiki v0.14 theme names for compatibility. Please rename to the new theme names to migrate:

  - `material-darker` -> `material-theme-darker`
  - `material-default` -> `material-theme`
  - `material-lighter` -> `material-theme-lighter`
  - `material-ocean` -> `material-theme-ocean`
  - `material-palenight` -> `material-theme-palenight`

- [#8188](https://github.com/withastro/astro/pull/8188) [`96beb883a`](https://github.com/withastro/astro/commit/96beb883ad87f8bbf5b2f57e14a743763d2a6f58) Thanks [@ematipico](https://github.com/ematipico)! - Update `tsconfig.json` presets with `moduleResolution: 'bundler'` and other new options from TypeScript 5.0. Astro now assumes that you use TypeScript 5.0 (March 2023), or that your editor includes it, ex: VS Code 1.77

- [#8188](https://github.com/withastro/astro/pull/8188) [`997a0db8a`](https://github.com/withastro/astro/commit/997a0db8a4e3851edd69384cf5eadbb969e1d547) Thanks [@ematipico](https://github.com/ematipico)! - The `astro check` command now requires an external package `@astrojs/check` and an install of `typescript` in your project. This was done in order to make the main `astro` package smaller and give more flexibility to users in regard to the version of TypeScript they use.

- [#8188](https://github.com/withastro/astro/pull/8188) [`80f1494cd`](https://github.com/withastro/astro/commit/80f1494cdaf72e58a420adb4f7c712d4089e1923) Thanks [@ematipico](https://github.com/ematipico)! - The `build.split` and `build.excludeMiddleware` configuration options are deprecated and have been replaced by options in the adapter config.

  If your config includes the `build.excludeMiddleware` option, replace it with `edgeMiddleware` in your adapter options:

  ```diff
  import { defineConfig } from "astro/config";
  import vercel from "@astrojs/vercel/serverless";

  export default defineConfig({
       build: {
  -        excludeMiddleware: true
       },
       adapter: vercel({
  +        edgeMiddleware: true
       }),
  });
  ```

  If your config includes the `build.split` option, replace it with `functionPerRoute` in your adapter options:

  ```diff
  import { defineConfig } from "astro/config";
  import vercel from "@astrojs/vercel/serverless";

  export default defineConfig({
       build: {
  -        split: true
       },
       adapter: vercel({
  +        functionPerRoute: true
       }),
  });
  ```

- [#8188](https://github.com/withastro/astro/pull/8188) [`0f0625504`](https://github.com/withastro/astro/commit/0f0625504145f18cba7dc6cf20291cb2abddc5a9) Thanks [@ematipico](https://github.com/ematipico)! - Lowercase names for endpoint functions are now deprecated.

  Rename functions to their uppercase equivalent:

  ```diff
  - export function get() {
  + export function GET() {
      return new Response(JSON.stringify({ "title": "Bob's blog" }));
  }

  - export function post() {
  + export function POST() {
      return new Response(JSON.stringify({ "title": "Bob's blog" }));
  }

  - export function put() {
  + export function PUT() {
      return new Response(JSON.stringify({ "title": "Bob's blog" }));
  }

  - export function all() {
  + export function ALL() {
      return new Response(JSON.stringify({ "title": "Bob's blog" }));
  }

  // you can use the whole word "DELETE"
  - export function del() {
  + export function DELETE() {
      return new Response(JSON.stringify({ "title": "Bob's blog" }));
  }
  ```

- [#8188](https://github.com/withastro/astro/pull/8188) [`e1ae56e72`](https://github.com/withastro/astro/commit/e1ae56e724d0f83db1230359e06cd6bc26f5fa26) Thanks [@ematipico](https://github.com/ematipico)! - Astro.cookies.get(key) returns undefined if cookie doesn't exist

  With this change, Astro.cookies.get(key) no longer always returns a `AstroCookie` object. Instead it now returns `undefined` if the cookie does not exist.

  You should update your code if you assume that all calls to `get()` return a value. When using with `has()` you still need to assert the value, like so:

  ```astro
  ---
  if (Astro.cookies.has(id)) {
    const id = Astro.cookies.get(id)!;
  }
  ---
  ```

- [#8188](https://github.com/withastro/astro/pull/8188) [`f32d093a2`](https://github.com/withastro/astro/commit/f32d093a280faafff024228c12bb438156ec34d7) Thanks [@ematipico](https://github.com/ematipico)! - The property `compressHTML` is now `true` by default. Setting this value to `true` is no longer required.

  If you do not want to minify your HTML output, you must set this value to `false` in `astro.config.mjs`.

  ```diff
  import {defineConfig} from "astro/config";
  export default defineConfig({
  +  compressHTML: false
  })
  ```

- [#8188](https://github.com/withastro/astro/pull/8188) [`f01eb585e`](https://github.com/withastro/astro/commit/f01eb585e7c972d940761309b1595f682b6922d2) Thanks [@ematipico](https://github.com/ematipico)! - Astro's default port when running the dev or preview server is now `4321`.

  This will reduce conflicts with ports used by other tools.

- [#7921](https://github.com/withastro/astro/pull/7921) [`b76c166bd`](https://github.com/withastro/astro/commit/b76c166bdd8e28683f62806aef968d1e0c3b06d9) Thanks [@Princesseuh](https://github.com/Princesseuh)! - `astro:assets` is now enabled by default. If you were previously using the `experimental.assets` flag, please remove it from your config. Also note that the previous `@astrojs/image` integration is incompatible, and must be removed.

  This also brings two important changes to using images in Astro:

  - New ESM shape: importing an image will now return an object with different properties describing the image such as its path, format and dimensions. This is a breaking change and may require you to update your existing images.
  - In Markdown, MDX, and Markdoc, the `![]()` syntax will now resolve relative images located anywhere in your project in addition to remote images and images stored in the `public/` folder. This notably unlocks storing images next to your content.

  Please see our existing [Assets page in Docs](https://docs.astro.build/en/guides/assets/) for more information about using `astro:assets`.

- [#8188](https://github.com/withastro/astro/pull/8188) [`32669cd47`](https://github.com/withastro/astro/commit/32669cd47555e9c7433c3998a2b6e624dfb2d8e9) Thanks [@ematipico](https://github.com/ematipico)! - Remove MDX special `components` export handling

### Minor Changes

- [#8188](https://github.com/withastro/astro/pull/8188) [`cd2d7e769`](https://github.com/withastro/astro/commit/cd2d7e76981ef9b9013453aa2629838e1e9fd422) Thanks [@ematipico](https://github.com/ematipico)! - Introduced the concept of feature map. A feature map is a list of features that are built-in in Astro, and an Adapter
  can tell Astro if it can support it.

  ```ts
  import { AstroIntegration } from './astro';

  function myIntegration(): AstroIntegration {
    return {
      name: 'astro-awesome-list',
      // new feature map
      supportedAstroFeatures: {
        hybridOutput: 'experimental',
        staticOutput: 'stable',
        serverOutput: 'stable',
        assets: {
          supportKind: 'stable',
          isSharpCompatible: false,
          isSquooshCompatible: false,
        },
      },
    };
  }
  ```

- [#8218](https://github.com/withastro/astro/pull/8218) [`44f7a2872`](https://github.com/withastro/astro/commit/44f7a28728c56c04ac377b6e917329f324874043) Thanks [@matthewp](https://github.com/matthewp)! - View Transitions unflagged

  View Transition support in Astro is now unflagged. For those who have used the experimental feature you can remove the flag in your Astro config:

  ```diff
  import { defineConfig } from 'astro'

  export default defineConfig({
  -  experimental: {
  -    viewTransitions: true,
  -  }
  })
  ```

  After removing this flag, please also consult the specific [upgrade to v3.0 advice](https://docs.astro.build/en/guides/view-transitions/#upgrade-to-v30-from-v2x) as some API features have changed and you may have breaking changes with your existing view transitions.

  See the [View Transitions guide](https://docs.astro.build/en/guides/view-transitions/) to learn how to use the API.

- [#8101](https://github.com/withastro/astro/pull/8101) [`ea7ff5177`](https://github.com/withastro/astro/commit/ea7ff5177dbcd7b2508cb1eef1b22b8ee1f47079) Thanks [@matthewp](https://github.com/matthewp)! - `astro:`namespace aliases for middleware and components

  This adds aliases of `astro:middleware` and `astro:components` for the middleware and components modules. This is to make our documentation consistent between are various modules, where some are virtual modules and others are not. Going forward new built-in modules will use this namespace.

- [#8188](https://github.com/withastro/astro/pull/8188) [`036388f66`](https://github.com/withastro/astro/commit/036388f66dab68ad54b895ed86f9176958dd83c8) Thanks [@ematipico](https://github.com/ematipico)! - Integrations can now log messages using Astro’s built-in logger.

  The logger is available to all hooks as an additional parameter:

  ```ts
  import { AstroIntegration } from './astro';

  // integration.js
  export function myIntegration(): AstroIntegration {
    return {
      name: 'my-integration',
      hooks: {
        'astro:config:done': ({ logger }) => {
          logger.info('Configure integration...');
        },
      },
    };
  }
  ```

- [#8181](https://github.com/withastro/astro/pull/8181) [`a8f35777e`](https://github.com/withastro/astro/commit/a8f35777e7e322068a4e2f520c2c9e43ade19e58) Thanks [@matthewp](https://github.com/matthewp)! - Finalize View Transition event names

- [#8012](https://github.com/withastro/astro/pull/8012) [`866ed4098`](https://github.com/withastro/astro/commit/866ed4098edffb052239cdb26e076cf8db61b1d9) Thanks [@ematipico](https://github.com/ematipico)! - Add a new `astro/errors` module. Developers can import `AstroUserError`, and provide a `message` and an optional `hint`

### Patch Changes

- [#8139](https://github.com/withastro/astro/pull/8139) [`db39206cb`](https://github.com/withastro/astro/commit/db39206cbb85b034859ac416179f141184bb2bff) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Use `undici` for File changeset for Node 16 compatibility

- [#8188](https://github.com/withastro/astro/pull/8188) [`adf9fccfd`](https://github.com/withastro/astro/commit/adf9fccfdda107c2224558f1c2e6a77847ac0a8a) Thanks [@ematipico](https://github.com/ematipico)! - Do not throw Error when users pass an object with a "type" property

- [#8234](https://github.com/withastro/astro/pull/8234) [`0c7b42dc6`](https://github.com/withastro/astro/commit/0c7b42dc6780e687e416137539f55a3a427d1d10) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update telemetry notice

- [#8251](https://github.com/withastro/astro/pull/8251) [`46c4c0e05`](https://github.com/withastro/astro/commit/46c4c0e053f830585b9ef229ce1c259df00a80f8) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds a link to the error reference in the CLI when an error occurs

- [#8128](https://github.com/withastro/astro/pull/8128) [`c2c71d90c`](https://github.com/withastro/astro/commit/c2c71d90c264a2524f99e0373ab59015f23ad4b1) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update error message when Sharp couldn't be found (tends to happen on pnpm notably)

- [#7998](https://github.com/withastro/astro/pull/7998) [`65c354969`](https://github.com/withastro/astro/commit/65c354969e6fe0ef6d622e8f4c545e2f717ce8c6) Thanks [@bluwy](https://github.com/bluwy)! - Call `astro sync` once before calling `astro check`

- [#8232](https://github.com/withastro/astro/pull/8232) [`a824863ab`](https://github.com/withastro/astro/commit/a824863ab1c451f4068eac54f28dd240573e1cba) Thanks [@matthewp](https://github.com/matthewp)! - Use .js to import logger

- [#8253](https://github.com/withastro/astro/pull/8253) [`1048aca55`](https://github.com/withastro/astro/commit/1048aca550769415e528016e42b358ffbfd44b61) Thanks [@matthewp](https://github.com/matthewp)! - Fix, lazily initialize ResponseWithEncoding

- [#8263](https://github.com/withastro/astro/pull/8263) [`9e021a91c`](https://github.com/withastro/astro/commit/9e021a91c57d10809f588dd47968fc0e7f8b4d5c) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add a type param to AstroGlobal to type params. This will eventually be used automatically by our tooling to provide typing and completions for `Astro.params`

- [#8217](https://github.com/withastro/astro/pull/8217) [`c37632a20`](https://github.com/withastro/astro/commit/c37632a20d06164fb97a4c2fc48df6d960398832) Thanks [@martrapp](https://github.com/martrapp)! - Specify `data-astro-reload` (no value) on an anchor element to force the browser to ignore view transitions and fall back to default loading.

  This is helpful when navigating to documents that have different content-types, e.g. application/pdf, where you want to use the build in viewer of the browser.
  Example: `<a href='/my.pdf' data-astro-reload>...</a>`

- [#8156](https://github.com/withastro/astro/pull/8156) [`acf652fc1`](https://github.com/withastro/astro/commit/acf652fc1d5db166231e87e22d0d50444f5556d8) Thanks [@kurtextrem](https://github.com/kurtextrem)! - The scrollend mechanism is a better way to record the scroll position compared to throttling, so we now use it whenever a browser supports it.

- [#8188](https://github.com/withastro/astro/pull/8188) [`42785c7b7`](https://github.com/withastro/astro/commit/42785c7b784b151e6d582570e5d74482129e8eb8) Thanks [@ematipico](https://github.com/ematipico)! - Improve fidelity of time stats when running `astro build`

- [#8266](https://github.com/withastro/astro/pull/8266) [`8450379db`](https://github.com/withastro/astro/commit/8450379db854fb1eaa9f38f21d65db240bc616cd) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `image.service` requiring to be set manually when `image.domains` or `image.remotePatterns` was assigned a value

- [#8078](https://github.com/withastro/astro/pull/8078) [`2540feedb`](https://github.com/withastro/astro/commit/2540feedb06785d5a20eecc3668849f147d778d4) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Reimplement https://github.com/withastro/astro/pull/7509 to correctly emit pre-rendered pages now that `build.split` is deprecated and this configuration has been moved to `functionPerRoute` inside the adapter.

- [#8264](https://github.com/withastro/astro/pull/8264) [`1f58a7a1b`](https://github.com/withastro/astro/commit/1f58a7a1bea6888868b689dac94801d554319b02) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fire `astro:unmount` event when island is disconnected

- [#8188](https://github.com/withastro/astro/pull/8188) [`2ae9d37f0`](https://github.com/withastro/astro/commit/2ae9d37f0a9cb21ab288d3c30aecb6d84db87788) Thanks [@ematipico](https://github.com/ematipico)! - Open to configured `base` when `astro dev --open` runs

- [#8188](https://github.com/withastro/astro/pull/8188) [`70f34f5a3`](https://github.com/withastro/astro/commit/70f34f5a355f42526ee9e5355f3de8e510002ea2) Thanks [@ematipico](https://github.com/ematipico)! - Remove StreamingCompatibleResponse polyfill

- [#8229](https://github.com/withastro/astro/pull/8229) [`ffc9e2d3d`](https://github.com/withastro/astro/commit/ffc9e2d3de46049bf3d82140ef018f524fb03187) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Paginate will now return exact types instead of a naive Record

- [#8099](https://github.com/withastro/astro/pull/8099) [`732111cdc`](https://github.com/withastro/astro/commit/732111cdce441639db31f40f621df48442d00969) Thanks [@bluwy](https://github.com/bluwy)! - Deprecate the `markdown.drafts` configuration option.

  If you'd like to create draft pages that are visible in dev but not in production, you can [migrate to content collections](https://docs.astro.build/en/guides/content-collections/#migrating-from-file-based-routing) and [manually filter out pages](https://docs.astro.build/en/guides/content-collections/#filtering-collection-queries) with the `draft: true` frontmatter property instead.

- [#8188](https://github.com/withastro/astro/pull/8188) [`33b8910cf`](https://github.com/withastro/astro/commit/33b8910cfdce5713891c50a84a0a8fe926311710) Thanks [@ematipico](https://github.com/ematipico)! - On back navigation only animate view transitions that were animated going forward.

- [#8196](https://github.com/withastro/astro/pull/8196) [`632579dc2`](https://github.com/withastro/astro/commit/632579dc2094cc342929261c89e689f0dd358284) Thanks [@bluwy](https://github.com/bluwy)! - Prevent bundling sharp as it errors in runtime

- [#8237](https://github.com/withastro/astro/pull/8237) [`3674584e0`](https://github.com/withastro/astro/commit/3674584e02b161a698b429ceb66723918fdc56ac) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `astro check` not finding the `@astrojs/check` package

- [#8258](https://github.com/withastro/astro/pull/8258) [`1db4e92c1`](https://github.com/withastro/astro/commit/1db4e92c12ed73681217f5cefd39f2f47542f961) Thanks [@matthewp](https://github.com/matthewp)! - Allow fallback animations on html element

- [#8270](https://github.com/withastro/astro/pull/8270) [`e7f872e91`](https://github.com/withastro/astro/commit/e7f872e91e852b901cf221a5151077dec64305bf) Thanks [@matthewp](https://github.com/matthewp)! - Prevent ViewTransition script from being added by mistake

- [#8271](https://github.com/withastro/astro/pull/8271) [`16f09dfff`](https://github.com/withastro/astro/commit/16f09dfff7722fda99dd0412e3006a7a39c80829) Thanks [@matthewp](https://github.com/matthewp)! - Fix video persistence regression

- [#8072](https://github.com/withastro/astro/pull/8072) [`4477bb41c`](https://github.com/withastro/astro/commit/4477bb41c8ed688785c545731ef5b184b629f4e5) Thanks [@matthewp](https://github.com/matthewp)! - Update Astro types to reflect that compress defaults to true

- [#8214](https://github.com/withastro/astro/pull/8214) [`55c10d1d5`](https://github.com/withastro/astro/commit/55c10d1d564e805efc3c1a7c48e0d9a1cdf0c7ed) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Automatically update user's env.d.ts with the proper types to help out migrating away from assets being experimental

- [#8130](https://github.com/withastro/astro/pull/8130) [`3e834293d`](https://github.com/withastro/astro/commit/3e834293d47ab2761a7aa013916e8371871efb7f) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add some polyfills for Stackblitz until they support Node 18. Running Astro on Node 16 is still not officially supported, however.

- [#8188](https://github.com/withastro/astro/pull/8188) [`a87cbe400`](https://github.com/withastro/astro/commit/a87cbe400314341d5f72abf86ea264e6b47c091f) Thanks [@ematipico](https://github.com/ematipico)! - fix: reinsert attribute to specify direction of ViewTransition (forward / back)

- [#8132](https://github.com/withastro/astro/pull/8132) [`767eb6866`](https://github.com/withastro/astro/commit/767eb68666eb777965baa0d6ade20bbafecf95bf) Thanks [@bluwy](https://github.com/bluwy)! - Deprecate returning simple objects from endpoints. Endpoints should only return a `Response`.

  To return a result with a custom encoding not supported by a `Response`, you can use the `ResponseWithEncoding` utility class instead.

  Before:

  ```ts
  export function GET() {
    return {
      body: '...',
      encoding: 'binary',
    };
  }
  ```

  After:

  ```ts
  export function GET({ ResponseWithEncoding }) {
    return new ResponseWithEncoding('...', undefined, 'binary');
  }
  ```

- Updated dependencies [[`d0679a666`](https://github.com/withastro/astro/commit/d0679a666f37da0fca396d42b9b32bbb25d29312), [`2aa6d8ace`](https://github.com/withastro/astro/commit/2aa6d8ace398a41c2dec5473521d758816b08191), [`0c7b42dc6`](https://github.com/withastro/astro/commit/0c7b42dc6780e687e416137539f55a3a427d1d10), [`6011d52d3`](https://github.com/withastro/astro/commit/6011d52d38e43c3e3d52bc3bc41a60e36061b7b7), [`e79e3779d`](https://github.com/withastro/astro/commit/e79e3779df0ad35253abcdb931d622847d9adb12), [`3e834293d`](https://github.com/withastro/astro/commit/3e834293d47ab2761a7aa013916e8371871efb7f), [`b675acb2a`](https://github.com/withastro/astro/commit/b675acb2aa820448e9c0d363339a37fbac873215)]:
  - @astrojs/telemetry@3.0.0
  - @astrojs/internal-helpers@0.2.0
  - @astrojs/markdown-remark@3.0.0

## 3.0.0-rc.11

### Patch Changes

- [#8271](https://github.com/withastro/astro/pull/8271) [`16f09dfff`](https://github.com/withastro/astro/commit/16f09dfff7722fda99dd0412e3006a7a39c80829) Thanks [@matthewp](https://github.com/matthewp)! - Fix video persistence regression

## 3.0.0-rc.10

### Patch Changes

- [#8266](https://github.com/withastro/astro/pull/8266) [`8450379db`](https://github.com/withastro/astro/commit/8450379db854fb1eaa9f38f21d65db240bc616cd) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `image.service` requiring to be set manually when `image.domains` or `image.remotePatterns` was assigned a value

- [#8270](https://github.com/withastro/astro/pull/8270) [`e7f872e91`](https://github.com/withastro/astro/commit/e7f872e91e852b901cf221a5151077dec64305bf) Thanks [@matthewp](https://github.com/matthewp)! - Prevent ViewTransition script from being added by mistake

## 3.0.0-rc.9

### Patch Changes

- [#8234](https://github.com/withastro/astro/pull/8234) [`0c7b42dc6`](https://github.com/withastro/astro/commit/0c7b42dc6780e687e416137539f55a3a427d1d10) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update telemetry notice

- [#8263](https://github.com/withastro/astro/pull/8263) [`9e021a91c`](https://github.com/withastro/astro/commit/9e021a91c57d10809f588dd47968fc0e7f8b4d5c) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add a type param to AstroGlobal to type params. This will eventually be used automatically by our tooling to provide typing and completions for `Astro.params`

- [#8264](https://github.com/withastro/astro/pull/8264) [`1f58a7a1b`](https://github.com/withastro/astro/commit/1f58a7a1bea6888868b689dac94801d554319b02) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fire `astro:unmount` event when island is disconnected

- [#8258](https://github.com/withastro/astro/pull/8258) [`1db4e92c1`](https://github.com/withastro/astro/commit/1db4e92c12ed73681217f5cefd39f2f47542f961) Thanks [@matthewp](https://github.com/matthewp)! - Allow fallback animations on html element

- Updated dependencies [[`0c7b42dc6`](https://github.com/withastro/astro/commit/0c7b42dc6780e687e416137539f55a3a427d1d10)]:
  - @astrojs/telemetry@3.0.0-rc.4

## 3.0.0-rc.8

### Patch Changes

- [#8251](https://github.com/withastro/astro/pull/8251) [`46c4c0e05`](https://github.com/withastro/astro/commit/46c4c0e053f830585b9ef229ce1c259df00a80f8) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds a link to the error reference in the CLI when an error occurs

- [#8253](https://github.com/withastro/astro/pull/8253) [`1048aca55`](https://github.com/withastro/astro/commit/1048aca550769415e528016e42b358ffbfd44b61) Thanks [@matthewp](https://github.com/matthewp)! - Fix, lazily initialize ResponseWithEncoding

- [#8229](https://github.com/withastro/astro/pull/8229) [`ffc9e2d3d`](https://github.com/withastro/astro/commit/ffc9e2d3de46049bf3d82140ef018f524fb03187) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Paginate will now return exact types instead of a naive Record

- [#8237](https://github.com/withastro/astro/pull/8237) [`3674584e0`](https://github.com/withastro/astro/commit/3674584e02b161a698b429ceb66723918fdc56ac) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `astro check` not finding the `@astrojs/check` package

## 3.0.0-rc.7

### Patch Changes

- [#8232](https://github.com/withastro/astro/pull/8232) [`a824863ab`](https://github.com/withastro/astro/commit/a824863ab1c451f4068eac54f28dd240573e1cba) Thanks [@matthewp](https://github.com/matthewp)! - Use .js to import logger

## 3.0.0-rc.6

### Major Changes

- [#8207](https://github.com/withastro/astro/pull/8207) [`e45f30293`](https://github.com/withastro/astro/commit/e45f3029340db718b6ed7e91b5d14f5cf14cd71d) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Change the [View Transition built-in animation](https://docs.astro.build/en/guides/view-transitions/#built-in-animation-directives) options.

  The `transition:animate` value `morph` has been renamed to `initial`. Also, this is no longer the default animation.

  If no `transition:animate` directive is specified, your animations will now default to `fade`.

  Astro also supports a new `transition:animate` value, `none`. This value can be used on a page's `<html>` element to disable animated full-page transitions on an entire page.

### Minor Changes

- [#8218](https://github.com/withastro/astro/pull/8218) [`44f7a2872`](https://github.com/withastro/astro/commit/44f7a28728c56c04ac377b6e917329f324874043) Thanks [@matthewp](https://github.com/matthewp)! - View Transitions unflagged

  View Transition support in Astro is now unflagged. For those who have used the experimental feature you can remove the flag in your Astro config:

  ```diff
  import { defineConfig } from 'astro'

  export default defineConfig({
  -  experimental: {
  -    viewTransitions: true,
  -  }
  })
  ```

  After removing this flag, please also consult the specific [upgrade to v3.0 advice](https://docs.astro.build/en/guides/view-transitions/#upgrade-to-v30-from-v2x) as some API features have changed and you may have breaking changes with your existing view transitions.

  See the [View Transitions guide](https://docs.astro.build/en/guides/view-transitions/) to learn how to use the API.

- [#8181](https://github.com/withastro/astro/pull/8181) [`a8f35777e`](https://github.com/withastro/astro/commit/a8f35777e7e322068a4e2f520c2c9e43ade19e58) Thanks [@matthewp](https://github.com/matthewp)! - Finalize View Transition event names

### Patch Changes

- [#8217](https://github.com/withastro/astro/pull/8217) [`c37632a20`](https://github.com/withastro/astro/commit/c37632a20d06164fb97a4c2fc48df6d960398832) Thanks [@martrapp](https://github.com/martrapp)! - Specify `data-astro-reload` (no value) on an anchor element to force the browser to ignore view transitions and fall back to default loading.

  This is helpful when navigating to documents that have different content-types, e.g. application/pdf, where you want to use the build in viewer of the browser.
  Example: `<a href='/my.pdf' data-astro-reload>...</a>`

- [#8156](https://github.com/withastro/astro/pull/8156) [`acf652fc1`](https://github.com/withastro/astro/commit/acf652fc1d5db166231e87e22d0d50444f5556d8) Thanks [@kurtextrem](https://github.com/kurtextrem)! - The scrollend mechanism is a better way to record the scroll position compared to throttling, so we now use it whenever a browser supports it.

- [#8196](https://github.com/withastro/astro/pull/8196) [`632579dc2`](https://github.com/withastro/astro/commit/632579dc2094cc342929261c89e689f0dd358284) Thanks [@bluwy](https://github.com/bluwy)! - Prevent bundling sharp as it errors in runtime

- [#8214](https://github.com/withastro/astro/pull/8214) [`55c10d1d5`](https://github.com/withastro/astro/commit/55c10d1d564e805efc3c1a7c48e0d9a1cdf0c7ed) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Automatically update user's env.d.ts with the proper types to help out migrating away from assets being experimental

## 3.0.0-rc.5

### Major Changes

- [#8142](https://github.com/withastro/astro/pull/8142) [`81545197a`](https://github.com/withastro/astro/commit/81545197a32fd015d763fc386c8b67e0e08b7393) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes for the `class:list` directive

  - Previously, `class:list` would ocassionally not be merged the `class` prop when passed to Astro components. Now, `class:list` is always converted to a `class` prop (as a string value).
  - Previously, `class:list` diverged from [`clsx`](https://github.com/lukeed/clsx) in a few edge cases. Now, `class:list` uses [`clsx`](https://github.com/lukeed/clsx) directly.
    - `class:list` used to deduplicate matching values, but it no longer does
    - `class:list` used to sort individual values, but it no longer does
    - `class:list` used to support `Set` and other iterables, but it no longer does

- [#8179](https://github.com/withastro/astro/pull/8179) [`6011d52d3`](https://github.com/withastro/astro/commit/6011d52d38e43c3e3d52bc3bc41a60e36061b7b7) Thanks [@matthewp](https://github.com/matthewp)! - Astro 3.0 Release Candidate

- [#8170](https://github.com/withastro/astro/pull/8170) [`be6bbd2c8`](https://github.com/withastro/astro/commit/be6bbd2c86b9bf5268e765bb937dda00ff15781a) Thanks [@bluwy](https://github.com/bluwy)! - Remove deprecated config option types, deprecated script/style attributes, and deprecated `image` export from `astro:content`

- [#8180](https://github.com/withastro/astro/pull/8180) [`f003e7364`](https://github.com/withastro/astro/commit/f003e7364317cafdb8589913b26b28e928dd07c9) Thanks [@ematipico](https://github.com/ematipico)! - The scoped hash created by the Astro compiler is now **lowercase**.

- [#8169](https://github.com/withastro/astro/pull/8169) [`e79e3779d`](https://github.com/withastro/astro/commit/e79e3779df0ad35253abcdb931d622847d9adb12) Thanks [@bluwy](https://github.com/bluwy)! - Remove pre-shiki v0.14 theme names for compatibility. Please rename to the new theme names to migrate:

  - `material-darker` -> `material-theme-darker`
  - `material-default` -> `material-theme`
  - `material-lighter` -> `material-theme-lighter`
  - `material-ocean` -> `material-theme-ocean`
  - `material-palenight` -> `material-theme-palenight`

### Patch Changes

- [#8147](https://github.com/withastro/astro/pull/8147) [`adf9fccfd`](https://github.com/withastro/astro/commit/adf9fccfdda107c2224558f1c2e6a77847ac0a8a) Thanks [@astrobot-houston](https://github.com/astrobot-houston)! - Do not throw Error when users pass an object with a "type" property

- [#8152](https://github.com/withastro/astro/pull/8152) [`582132328`](https://github.com/withastro/astro/commit/5821323285646aee7ff9194a505f708028e4db57) Thanks [@andremralves](https://github.com/andremralves)! - Displays a new config error if `outDir` is placed within `publicDir`.

- [#8147](https://github.com/withastro/astro/pull/8147) [`42785c7b7`](https://github.com/withastro/astro/commit/42785c7b784b151e6d582570e5d74482129e8eb8) Thanks [@astrobot-houston](https://github.com/astrobot-houston)! - Improve fidelity of time stats when running `astro build`

- [#8171](https://github.com/withastro/astro/pull/8171) [`95120efbe`](https://github.com/withastro/astro/commit/95120efbe817163663492181cbeb225849354493) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix missing type for `imageConfig` export from `astro:assets`

- [#8147](https://github.com/withastro/astro/pull/8147) [`2ae9d37f0`](https://github.com/withastro/astro/commit/2ae9d37f0a9cb21ab288d3c30aecb6d84db87788) Thanks [@astrobot-houston](https://github.com/astrobot-houston)! - Open to configured `base` when `astro dev --open` runs

- [#8099](https://github.com/withastro/astro/pull/8099) [`732111cdc`](https://github.com/withastro/astro/commit/732111cdce441639db31f40f621df48442d00969) Thanks [@bluwy](https://github.com/bluwy)! - Deprecate the `markdown.drafts` configuration option.

  If you'd like to create draft pages that are visible in dev but not in production, you can [migrate to content collections](https://docs.astro.build/en/guides/content-collections/#migrating-from-file-based-routing) and [manually filter out pages](https://docs.astro.build/en/guides/content-collections/#filtering-collection-queries) with the `draft: true` frontmatter property instead.

- [#8147](https://github.com/withastro/astro/pull/8147) [`33b8910cf`](https://github.com/withastro/astro/commit/33b8910cfdce5713891c50a84a0a8fe926311710) Thanks [@astrobot-houston](https://github.com/astrobot-houston)! - On back navigation only animate view transitions that were animated going forward.

- [#8163](https://github.com/withastro/astro/pull/8163) [`179796405`](https://github.com/withastro/astro/commit/179796405e053b559d83f84507e5a465861a029a) Thanks [@delucis](https://github.com/delucis)! - Make typing of `defineCollection` more permissive to support advanced union and intersection types

- [#8147](https://github.com/withastro/astro/pull/8147) [`a87cbe400`](https://github.com/withastro/astro/commit/a87cbe400314341d5f72abf86ea264e6b47c091f) Thanks [@astrobot-houston](https://github.com/astrobot-houston)! - fix: reinsert attribute to specify direction of ViewTransition (forward / back)

- [#8132](https://github.com/withastro/astro/pull/8132) [`767eb6866`](https://github.com/withastro/astro/commit/767eb68666eb777965baa0d6ade20bbafecf95bf) Thanks [@bluwy](https://github.com/bluwy)! - Deprecate returning simple objects from endpoints. Endpoints should only return a `Response`.

  To return a result with a custom encoding not supported by a `Response`, you can use the `ResponseWithEncoding` utility class instead.

  Before:

  ```ts
  export function GET() {
    return {
      body: '...',
      encoding: 'binary',
    };
  }
  ```

  After:

  ```ts
  export function GET({ ResponseWithEncoding }) {
    return new ResponseWithEncoding('...', undefined, 'binary');
  }
  ```

- Updated dependencies [[`6011d52d3`](https://github.com/withastro/astro/commit/6011d52d38e43c3e3d52bc3bc41a60e36061b7b7), [`e79e3779d`](https://github.com/withastro/astro/commit/e79e3779df0ad35253abcdb931d622847d9adb12)]:
  - @astrojs/markdown-remark@3.0.0-rc.1
  - @astrojs/telemetry@3.0.0-rc.3
  - @astrojs/internal-helpers@0.2.0-rc.2

## 3.0.0-beta.4

### Patch Changes

- [#8139](https://github.com/withastro/astro/pull/8139) [`db39206cb`](https://github.com/withastro/astro/commit/db39206cbb85b034859ac416179f141184bb2bff) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Use `undici` for File changeset for Node 16 compatibility

## 3.0.0-beta.3

### Major Changes

- [#8113](https://github.com/withastro/astro/pull/8113) [`2484dc408`](https://github.com/withastro/astro/commit/2484dc4080e5cd84b9a53648a1de426d7c907be2) Thanks [@Princesseuh](https://github.com/Princesseuh)! - This import alias is no longer included by default with astro:assets. If you were using this alias with experimental assets, you must convert them to relative file paths, or create your own [import aliases](https://docs.astro.build/en/guides/aliases/).

  ```diff
  ---
  // src/pages/posts/post-1.astro
  - import rocket from '~/assets/rocket.png'
  + import rocket from '../../assets/rocket.png';
  ---
  ```

- [#7979](https://github.com/withastro/astro/pull/7979) [`dbc97b121`](https://github.com/withastro/astro/commit/dbc97b121f42583728f1cdfdbf14575fda943f5b) Thanks [@bluwy](https://github.com/bluwy)! - Export experimental `dev`, `build`, `preview`, and `sync` APIs from `astro`. These APIs allow you to run Astro's commands programmatically, and replaces the previous entry point that runs the Astro CLI.

  While these APIs are experimental, the inline config parameter is relatively stable without foreseeable changes. However, the returned results of these APIs are more likely to change in the future.

  ```ts
  import { dev, build, preview, sync, type AstroInlineConfig } from 'astro';

  // Inline Astro config object.
  // Provide a path to a configuration file to load or set options directly inline.
  const inlineConfig: AstroInlineConfig = {
    // Inline-specific options...
    configFile: './astro.config.mjs',
    logLevel: 'info',
    // Standard Astro config options...
    site: 'https://example.com',
  };

  // Start the Astro dev server
  const devServer = await dev(inlineConfig);
  await devServer.stop();

  // Build your Astro project
  await build(inlineConfig);

  // Preview your built project
  const previewServer = await preview(inlineConfig);
  await previewServer.stop();

  // Generate types for your Astro project
  await sync(inlineConfig);
  ```

- [#8085](https://github.com/withastro/astro/pull/8085) [`68efd4a8b`](https://github.com/withastro/astro/commit/68efd4a8b29f248397667801465b3152dc98e9a7) Thanks [@bluwy](https://github.com/bluwy)! - Remove exports for `astro/internal/*` and `astro/runtime/server/*` in favour of `astro/runtime/*`. Add new `astro/compiler-runtime` export for compiler-specific runtime code.

  These are exports for Astro's internal API and should not affect your project, but if you do use these entrypoints, you can migrate like below:

  ```diff
  - import 'astro/internal/index.js';
  + import 'astro/runtime/server/index.js';

  - import 'astro/server/index.js';
  + import 'astro/runtime/server/index.js';
  ```

  ```diff
  import { transform } from '@astrojs/compiler';

  const result = await transform(source, {
  - internalURL: 'astro/runtime/server/index.js',
  + internalURL: 'astro/compiler-runtime',
    // ...
  });
  ```

- [#8030](https://github.com/withastro/astro/pull/8030) [`5208a3c8f`](https://github.com/withastro/astro/commit/5208a3c8fefcec7694857fb344af351f4631fc34) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Removed duplicate `astro/dist/jsx` export. Please use the `astro/jsx` export instead

- [#8118](https://github.com/withastro/astro/pull/8118) [`8a5b0c1f3`](https://github.com/withastro/astro/commit/8a5b0c1f3a4be6bb62db66ec70144109ff5b4c59) Thanks [@lilnasy](https://github.com/lilnasy)! - Astro is smarter about CSS! Small stylesheets are now inlined by default, and no longer incur the cost of additional requests to your server. Your visitors will have to wait less before they see your pages, especially those in remote locations or in a subway.

  This may not be news to you if you had opted-in via the `build.inlineStylesheets` configuration. Stabilized in Astro 2.6 and set to "auto" by default for Starlight, this configuration allows you to reduce the number of requests for stylesheets by inlining them into <style> tags. The new default is "auto", which selects assets smaller than 4kB and includes them in the initial response.

  To go back to the previous default behavior, change `build.inlineStylesheets` to "never".

  ```ts
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    build: {
      inlineStylesheets: 'never',
    },
  });
  ```

- [#7921](https://github.com/withastro/astro/pull/7921) [`b76c166bd`](https://github.com/withastro/astro/commit/b76c166bdd8e28683f62806aef968d1e0c3b06d9) Thanks [@Princesseuh](https://github.com/Princesseuh)! - `astro:assets` is now enabled by default. If you were previously using the `experimental.assets` flag, please remove it from your config. Also note that the previous `@astrojs/image` integration is incompatible, and must be removed.

  This also brings two important changes to using images in Astro:

  - New ESM shape: importing an image will now return an object with different properties describing the image such as its path, format and dimensions. This is a breaking change and may require you to update your existing images.
  - In Markdown, MDX, and Markdoc, the `![]()` syntax will now resolve relative images located anywhere in your project in addition to remote images and images stored in the `public/` folder. This notably unlocks storing images next to your content.

  Please see our existing [Assets page in Docs](https://docs.astro.build/en/guides/assets/) for more information about using `astro:assets`.

### Minor Changes

- [#8101](https://github.com/withastro/astro/pull/8101) [`ea7ff5177`](https://github.com/withastro/astro/commit/ea7ff5177dbcd7b2508cb1eef1b22b8ee1f47079) Thanks [@matthewp](https://github.com/matthewp)! - `astro:`namespace aliases for middleware and components

  This adds aliases of `astro:middleware` and `astro:components` for the middleware and components modules. This is to make our documentation consistent between are various modules, where some are virtual modules and others are not. Going forward new built-in modules will use this namespace.

### Patch Changes

- [#8128](https://github.com/withastro/astro/pull/8128) [`c2c71d90c`](https://github.com/withastro/astro/commit/c2c71d90c264a2524f99e0373ab59015f23ad4b1) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update error message when Sharp couldn't be found (tends to happen on pnpm notably)

- [#8092](https://github.com/withastro/astro/pull/8092) [`7177f7579`](https://github.com/withastro/astro/commit/7177f7579b6e866f0fd895b3fd079d8ba330b1a9) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Ensure dotfiles are cleaned during static builds

- [#8070](https://github.com/withastro/astro/pull/8070) [`097a8e4e9`](https://github.com/withastro/astro/commit/097a8e4e916c7df18eafdaa6c8d6ce2991c17ab6) Thanks [@lilnasy](https://github.com/lilnasy)! - Fix a handful of edge cases with prerendered 404/500 pages

- [#8078](https://github.com/withastro/astro/pull/8078) [`2540feedb`](https://github.com/withastro/astro/commit/2540feedb06785d5a20eecc3668849f147d778d4) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Reimplement https://github.com/withastro/astro/pull/7509 to correctly emit pre-rendered pages now that `build.split` is deprecated and this configuration has been moved to `functionPerRoute` inside the adapter.

- [#8105](https://github.com/withastro/astro/pull/8105) [`0e0fa605d`](https://github.com/withastro/astro/commit/0e0fa605d109cc91e08a1ae1cc560ea240fe631b) Thanks [@martrapp](https://github.com/martrapp)! - ViewTransition: bug fix for lost scroll position in browser history

- [#7778](https://github.com/withastro/astro/pull/7778) [`d6b494376`](https://github.com/withastro/astro/commit/d6b4943764989c0e89df2d6875cd19691566dfb3) Thanks [@y-nk](https://github.com/y-nk)! - Added support for optimizing remote images from authorized sources when using `astro:assets`. This comes with two new parameters to specify which domains (`image.domains`) and host patterns (`image.remotePatterns`) are authorized for remote images.

  For example, the following configuration will only allow remote images from `astro.build` to be optimized:

  ```ts
  // astro.config.mjs
  export default defineConfig({
    image: {
      domains: ['astro.build'],
    },
  });
  ```

  The following configuration will only allow remote images from HTTPS hosts:

  ```ts
  // astro.config.mjs
  export default defineConfig({
    image: {
      remotePatterns: [{ protocol: 'https' }],
    },
  });
  ```

- [#8072](https://github.com/withastro/astro/pull/8072) [`4477bb41c`](https://github.com/withastro/astro/commit/4477bb41c8ed688785c545731ef5b184b629f4e5) Thanks [@matthewp](https://github.com/matthewp)! - Update Astro types to reflect that compress defaults to true

- [#8130](https://github.com/withastro/astro/pull/8130) [`3e834293d`](https://github.com/withastro/astro/commit/3e834293d47ab2761a7aa013916e8371871efb7f) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add some polyfills for Stackblitz until they support Node 18. Running Astro on Node 16 is still not officially supported, however.

- Updated dependencies [[`3e834293d`](https://github.com/withastro/astro/commit/3e834293d47ab2761a7aa013916e8371871efb7f)]:
  - @astrojs/telemetry@3.0.0-beta.2

## 3.0.0-beta.2

### Patch Changes

- Updated dependencies [[`2aa6d8ace`](https://github.com/withastro/astro/commit/2aa6d8ace398a41c2dec5473521d758816b08191)]:
  - @astrojs/internal-helpers@0.2.0-beta.1

## 3.0.0-beta.1

### Major Changes

- [#7952](https://github.com/withastro/astro/pull/7952) [`3c3100851`](https://github.com/withastro/astro/commit/3c31008519ce68b5b1b1cb23b71fbe0a2d506882) Thanks [@astrobot-houston](https://github.com/astrobot-houston)! - Remove support for `Astro.__renderMarkdown` which is used by `@astrojs/markdown-component`.

  The `<Markdown />` component was deprecated in Astro v1 and is completely removed in v3. This integration must now be removed from your project.

  As an alternative, you can use community packages that provide a similar component like https://github.com/natemoo-re/astro-remote instead.

- [#8019](https://github.com/withastro/astro/pull/8019) [`34cb20021`](https://github.com/withastro/astro/commit/34cb2002161ba88df6bcb72fecfd12ed867c134b) Thanks [@bluwy](https://github.com/bluwy)! - Remove backwards-compatible kebab-case transform for camelCase CSS variable names passed to the `style` attribute. If you were relying on the kebab-case transform in your styles, make sure to use the camelCase version to prevent missing styles. For example:

  ```astro
  ---
  const myValue = 'red';
  ---

  <!-- input -->
  <div style={{ '--myValue': myValue }}></div>

  <!-- output (before) -->
  <div style="--my-value:var(--myValue);--myValue:red"></div>

  <!-- output (after) -->
  <div style="--myValue:red"></div>
  ```

  ```diff
  <style>
    div {
  -   color: var(--my-value);
  +   color: var(--myValue);
    }
  </style>
  ```

- [#7893](https://github.com/withastro/astro/pull/7893) [`7bd1b86f8`](https://github.com/withastro/astro/commit/7bd1b86f85c06fdde0a1ed9146d01bac69990671) Thanks [@ematipico](https://github.com/ematipico)! - Implements a new scope style strategy called `"attribute"`. When enabled, styles are applied using `data-*` attributes.

  The **default** value of `scopedStyleStrategy` is `"attribute"`.

  If you want to use the previous behaviour, you have to use the `"where"` option:

  ```diff
  import { defineConfig } from 'astro/config';

  export default defineConfig({
  +    scopedStyleStrategy: 'where',
  });
  ```

- [#7924](https://github.com/withastro/astro/pull/7924) [`519a1c4e8`](https://github.com/withastro/astro/commit/519a1c4e8407c7abcb8d879b67a9f4b960652cae) Thanks [@matthewp](https://github.com/matthewp)! - Astro's JSX handling has been refactored with better support for each framework.

  Previously, Astro automatically scanned your components to determine which framework-specific transformations should be used. In practice, supporting advanced features like Fast Refresh with this approach proved difficult.

  Now, Astro determines which framework to use with `include` and `exclude` config options where you can specify files and folders on a per-framework basis. When using multiple JSX frameworks in the same project, users should manually control which files belong to each framework using the `include` and `exclude` options.

  ```js
  export default defineConfig({
    // The `include` config is only needed in projects that use multiple JSX frameworks;
    // if only using one no extra config is needed.
    integrations: [
      preact({
        include: ['**/preact/*'],
      }),
      react({
        include: ['**/react/*'],
      }),
      solid({
        include: ['**/solid/*'],
      }),
    ],
  });
  ```

- [#7878](https://github.com/withastro/astro/pull/7878) [`0f637c71e`](https://github.com/withastro/astro/commit/0f637c71e511cb4c51712128d217a26c8eee4d40) Thanks [@bluwy](https://github.com/bluwy)! - The value of `import.meta.env.BASE_URL`, which is derived from the `base` option, will no longer have a trailing slash added by default or when `trailingSlash: "ignore"` is set. The existing behavior of `base` in combination with `trailingSlash: "always"` or `trailingSlash: "never"` is unchanged.

  If your `base` already has a trailing slash, no change is needed.

  If your `base` does not have a trailing slash, add one to preserve the previous behaviour:

  ```diff
  // astro.config.mjs
  - base: 'my-base',
  + base: 'my-base/',
  ```

### Minor Changes

- [#8012](https://github.com/withastro/astro/pull/8012) [`866ed4098`](https://github.com/withastro/astro/commit/866ed4098edffb052239cdb26e076cf8db61b1d9) Thanks [@ematipico](https://github.com/ematipico)! - Add a new `astro/errors` module. Developers can import `AstroUserError`, and provide a `message` and an optional `hint`

### Patch Changes

- [#7998](https://github.com/withastro/astro/pull/7998) [`65c354969`](https://github.com/withastro/astro/commit/65c354969e6fe0ef6d622e8f4c545e2f717ce8c6) Thanks [@bluwy](https://github.com/bluwy)! - Call `astro sync` once before calling `astro check`

- [#7952](https://github.com/withastro/astro/pull/7952) [`70f34f5a3`](https://github.com/withastro/astro/commit/70f34f5a355f42526ee9e5355f3de8e510002ea2) Thanks [@astrobot-houston](https://github.com/astrobot-houston)! - Remove StreamingCompatibleResponse polyfill

- [#8011](https://github.com/withastro/astro/pull/8011) [`5b1e39ef6`](https://github.com/withastro/astro/commit/5b1e39ef6ec6dcebea96584f95d9530bd9aa715d) Thanks [@bluwy](https://github.com/bluwy)! - Move hoisted script analysis optimization behind the `experimental.optimizeHoistedScript` option

- Updated dependencies [[`b675acb2a`](https://github.com/withastro/astro/commit/b675acb2aa820448e9c0d363339a37fbac873215)]:
  - @astrojs/telemetry@3.0.0-beta.1

## 3.0.0-beta.0

### Major Changes

- [`1eae2e3f7`](https://github.com/withastro/astro/commit/1eae2e3f7d693c9dfe91c8ccfbe606d32bf2fb81) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 16. The lowest supported version by Astro and all integrations is now v18.14.1. As a reminder, Node 16 will be deprecated on the 11th September 2023.

- [`76ddef19c`](https://github.com/withastro/astro/commit/76ddef19ccab6e5f7d3a5740cd41acf10e334b38) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Removed automatic flattening of `getStaticPaths` result. `.flatMap` and `.flat` should now be used to ensure that you're returning a flat array.

- [`3fdf509b2`](https://github.com/withastro/astro/commit/3fdf509b2731a9b2f972d89291e57cf78d62c769) Thanks [@ematipico](https://github.com/ematipico)! - The `build.split` and `build.excludeMiddleware` configuration options are deprecated and have been replaced by options in the adapter config.

  If your config includes the `build.excludeMiddleware` option, replace it with `edgeMiddleware` in your adapter options:

  ```diff
  import { defineConfig } from "astro/config";
  import netlify from "@astrojs/netlify/functions";

  export default defineConfig({
       build: {
  -        excludeMiddleware: true
       },
       adapter: netlify({
  +        edgeMiddleware: true
       }),
  });
  ```

  If your config includes the `build.split` option, replace it with `functionPerRoute` in your adapter options:

  ```diff
  import { defineConfig } from "astro/config";
  import netlify from "@astrojs/netlify/functions";

  export default defineConfig({
       build: {
  -        split: true
       },
       adapter: netlify({
  +        functionPerRoute: true
       }),
  });
  ```

- [`2f951cd40`](https://github.com/withastro/astro/commit/2f951cd403dfcc2c3ca6aae618ae3e1409516e32) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Sharp is now the default image service used for `astro:assets`. If you would prefer to still use Squoosh, you can update your config with the following:

  ```ts
  import { defineConfig, squooshImageService } from 'astro/config';

  // https://astro.build/config
  export default defineConfig({
    image: {
      service: squooshImageService(),
    },
  });
  ```

  However, not only do we recommend using Sharp as it is faster and more reliable, it is also highly likely that the Squoosh service will be removed in a future release.

- [`c022a4217`](https://github.com/withastro/astro/commit/c022a4217a805d223c1494e9eda4e48bbf810388) Thanks [@Princesseuh](https://github.com/Princesseuh)! - When using an adapter that supports neither Squoosh or Sharp, Astro will now automatically use an image service that does not support processing, but still provides the other benefits of `astro:assets` such as enforcing `alt`, no CLS etc to users

- [`67becaa58`](https://github.com/withastro/astro/commit/67becaa580b8f787df58de66b7008b7098f1209c) Thanks [@ematipico](https://github.com/ematipico)! - Removed support for old syntax of the API routes.

- [`dfc2d93e3`](https://github.com/withastro/astro/commit/dfc2d93e3c645995379358fabbdfa9aab99f43d8) Thanks [@bluwy](https://github.com/bluwy)! - Remove MDX plugin re-ordering hack

- [`3dc1ca2fa`](https://github.com/withastro/astro/commit/3dc1ca2fac8d9965cc5085a5d09e72ed87b4281a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Reduced the amount of polyfills provided by Astro. Astro will no longer provide (no-op) polyfills for several web apis such as HTMLElement, Image or Document. If you need access to those APIs on the server, we recommend using more proper polyfills available on npm.

- [`1be84dfee`](https://github.com/withastro/astro/commit/1be84dfee3ce8e6f5cc624f99aec4e980f6fde37) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update `tsconfig.json` presets with `moduleResolution: 'bundler'` and other new options from TypeScript 5.0. Astro now assumes that you use TypeScript 5.0 (March 2023), or that your editor includes it, ex: VS Code 1.77

- [`35f01df79`](https://github.com/withastro/astro/commit/35f01df797d23315f2bee2fc3fd795adb0559c58) Thanks [@Princesseuh](https://github.com/Princesseuh)! - The `astro check` command now requires an external package `@astrojs/check` and an install of `typescript` in your project. This was done in order to make the main `astro` package smaller and give more flexibility to users in regard to the version of TypeScript they use.

- [`3fdf509b2`](https://github.com/withastro/astro/commit/3fdf509b2731a9b2f972d89291e57cf78d62c769) Thanks [@ematipico](https://github.com/ematipico)! - The `build.split` and `build.excludeMiddleware` configuration options are deprecated and have been replaced by options in the adapter config.

  If your config includes the `build.excludeMiddleware` option, replace it with `edgeMiddleware` in your adapter options:

  ```diff
  import { defineConfig } from "astro/config";
  import vercel from "@astrojs/vercel/serverless";

  export default defineConfig({
       build: {
  -        excludeMiddleware: true
       },
       adapter: vercel({
  +        edgeMiddleware: true
       }),
  });
  ```

  If your config includes the `build.split` option, replace it with `functionPerRoute` in your adapter options:

  ```diff
  import { defineConfig } from "astro/config";
  import vercel from "@astrojs/vercel/serverless";

  export default defineConfig({
       build: {
  -        split: true
       },
       adapter: vercel({
  +        functionPerRoute: true
       }),
  });
  ```

- [`78de801f2`](https://github.com/withastro/astro/commit/78de801f21fd4ca1653950027d953bf08614566b) Thanks [@ematipico](https://github.com/ematipico)! - Lowercase names for endpoint functions are now deprecated.

  Rename functions to their uppercase equivalent:

  ```diff
  - export function get() {
  + export function GET() {
      return new Response(JSON.stringify({ "title": "Bob's blog" }));
  }

  - export function post() {
  + export function POST() {
      return new Response(JSON.stringify({ "title": "Bob's blog" }));
  }

  - export function put() {
  + export function PUT() {
      return new Response(JSON.stringify({ "title": "Bob's blog" }));
  }

  - export function all() {
  + export function ALL() {
      return new Response(JSON.stringify({ "title": "Bob's blog" }));
  }

  // you can use the whole word "DELETE"
  - export function del() {
  + export function DELETE() {
      return new Response(JSON.stringify({ "title": "Bob's blog" }));
  }
  ```

- [`59d6e569f`](https://github.com/withastro/astro/commit/59d6e569f63e175c97e82e94aa7974febfb76f7c) Thanks [@matthewp](https://github.com/matthewp)! - Astro.cookies.get(key) returns undefined if cookie doesn't exist

  With this change, Astro.cookies.get(key) no longer always returns a `AstroCookie` object. Instead it now returns `undefined` if the cookie does not exist.

  You should update your code if you assume that all calls to `get()` return a value. When using with `has()` you still need to assert the value, like so:

  ```astro
  ---
  if (Astro.cookies.has(id)) {
    const id = Astro.cookies.get(id)!;
  }
  ---
  ```

- [`7723c4cc9`](https://github.com/withastro/astro/commit/7723c4cc93298c2e6530e55da7afda048f22cf81) Thanks [@ematipico](https://github.com/ematipico)! - The property `compressHTML` is now `true` by default. Setting this value to `true` is no longer required.

  If you do not want to minify your HTML output, you must set this value to `false` in `astro.config.mjs`.

  ```diff
  import {defineConfig} from "astro/config";
  export default defineConfig({
  +  compressHTML: false
  })
  ```

- [`fb5cd6b56`](https://github.com/withastro/astro/commit/fb5cd6b56dc27a71366ed5e1ab8bfe9b8f96bac5) Thanks [@ematipico](https://github.com/ematipico)! - Astro's default port when running the dev or preview server is now `4321`.

  This will reduce conflicts with ports used by other tools.

- [`631b9c410`](https://github.com/withastro/astro/commit/631b9c410d5d66fa384674027ba95d69ebb5063f) Thanks [@bluwy](https://github.com/bluwy)! - Remove MDX special `components` export handling

### Minor Changes

- [`9b4f70a62`](https://github.com/withastro/astro/commit/9b4f70a629f55e461759ba46f68af7097a2e9215) Thanks [@ematipico](https://github.com/ematipico)! - Introduced the concept of feature map. A feature map is a list of features that are built-in in Astro, and an Adapter
  can tell Astro if it can support it.

  ```ts
  import { AstroIntegration } from './astro';

  function myIntegration(): AstroIntegration {
    return {
      name: 'astro-awesome-list',
      // new feature map
      supportedAstroFeatures: {
        hybridOutput: 'experimental',
        staticOutput: 'stable',
        serverOutput: 'stable',
        assets: {
          supportKind: 'stable',
          isSharpCompatible: false,
          isSquooshCompatible: false,
        },
      },
    };
  }
  ```

- [`bc37331d8`](https://github.com/withastro/astro/commit/bc37331d8154e3e95a8df9131e4e014e78a7a9e7) Thanks [@ematipico](https://github.com/ematipico)! - Integrations can now log messages using Astro’s built-in logger.

  The logger is available to all hooks as an additional parameter:

  ```ts
  import { AstroIntegration } from './astro';

  // integration.js
  export function myIntegration(): AstroIntegration {
    return {
      name: 'my-integration',
      hooks: {
        'astro:config:done': ({ logger }) => {
          logger.info('Configure integration...');
        },
      },
    };
  }
  ```

### Patch Changes

- Updated dependencies [[`1eae2e3f7`](https://github.com/withastro/astro/commit/1eae2e3f7d693c9dfe91c8ccfbe606d32bf2fb81)]:
  - @astrojs/telemetry@3.0.0-beta.0
  - @astrojs/internal-helpers@0.2.0-beta.0
  - @astrojs/markdown-remark@3.0.0-beta.0

## 2.10.14

### Patch Changes

- [#8206](https://github.com/withastro/astro/pull/8206) [`52606a390`](https://github.com/withastro/astro/commit/52606a3909f9de5ced9b9ba3ba25832f73a8689e) Thanks [@martrapp](https://github.com/martrapp)! - fix: View Transition: swap attributes of document's root element

## 2.10.13

### Patch Changes

- [#8152](https://github.com/withastro/astro/pull/8152) [`582132328`](https://github.com/withastro/astro/commit/5821323285646aee7ff9194a505f708028e4db57) Thanks [@andremralves](https://github.com/andremralves)! - Displays a new config error if `outDir` is placed within `publicDir`.

- [#8166](https://github.com/withastro/astro/pull/8166) [`fddd4dc71`](https://github.com/withastro/astro/commit/fddd4dc71af321bd6b4d01bb4b1b955284846e60) Thanks [@martrapp](https://github.com/martrapp)! - ViewTransitions: Fixes in the client-side router

- [#8182](https://github.com/withastro/astro/pull/8182) [`cfc465dde`](https://github.com/withastro/astro/commit/cfc465ddebcc58d20f29ecffaa857a77525435a9) Thanks [@martrapp](https://github.com/martrapp)! - View Transitions: self link (`href=""`) does not trigger page reload

- [#8171](https://github.com/withastro/astro/pull/8171) [`95120efbe`](https://github.com/withastro/astro/commit/95120efbe817163663492181cbeb225849354493) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix missing type for `imageConfig` export from `astro:assets`

- [#8187](https://github.com/withastro/astro/pull/8187) [`273335cb0`](https://github.com/withastro/astro/commit/273335cb01615c3c06d46c02464f4496a81f8d0b) Thanks [@bluwy](https://github.com/bluwy)! - Fix Astro components parent-child render order

- [#8184](https://github.com/withastro/astro/pull/8184) [`9142178b1`](https://github.com/withastro/astro/commit/9142178b113443749b87c1d259859b42a3d7a9c4) Thanks [@martrapp](https://github.com/martrapp)! - Fix: The scrolling behavior of ViewTransitions is now more similar to the expected browser behavior

- [#8163](https://github.com/withastro/astro/pull/8163) [`179796405`](https://github.com/withastro/astro/commit/179796405e053b559d83f84507e5a465861a029a) Thanks [@delucis](https://github.com/delucis)! - Make typing of `defineCollection` more permissive to support advanced union and intersection types

## 2.10.12

### Patch Changes

- [#8144](https://github.com/withastro/astro/pull/8144) [`04caa99c4`](https://github.com/withastro/astro/commit/04caa99c48ce604ca3b90302ff0df8dcdbeee650) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixed an issue where data entries' id included backslashes instead of forward slashes on Windows.

## 2.10.11

### Patch Changes

- [#8136](https://github.com/withastro/astro/pull/8136) [`97c8760d7`](https://github.com/withastro/astro/commit/97c8760d78ffd172149f7776442725861576fba7) Thanks [@andremralves](https://github.com/andremralves)! - Fix 404 response leading to an infinite loop when there is no 404 page.

## 2.10.10

### Patch Changes

- [#8127](https://github.com/withastro/astro/pull/8127) [`b12c8471f`](https://github.com/withastro/astro/commit/b12c8471f413c0291de4a9c444bfe3079a192034) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Do not throw Error when users pass an object with a "type" property

- [#8092](https://github.com/withastro/astro/pull/8092) [`7177f7579`](https://github.com/withastro/astro/commit/7177f7579b6e866f0fd895b3fd079d8ba330b1a9) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Ensure dotfiles are cleaned during static builds

- [#8122](https://github.com/withastro/astro/pull/8122) [`fa6b68a77`](https://github.com/withastro/astro/commit/fa6b68a776c5b3cc8167fc042b7d305234ebcff9) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improve fidelity of time stats when running `astro build`

- [#8070](https://github.com/withastro/astro/pull/8070) [`097a8e4e9`](https://github.com/withastro/astro/commit/097a8e4e916c7df18eafdaa6c8d6ce2991c17ab6) Thanks [@lilnasy](https://github.com/lilnasy)! - Fix a handful of edge cases with prerendered 404/500 pages

- [#8123](https://github.com/withastro/astro/pull/8123) [`1f6497c33`](https://github.com/withastro/astro/commit/1f6497c3341231ee76fc4538cfe7624cf4721d56) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Open to configured `base` when `astro dev --open` runs

- [#8105](https://github.com/withastro/astro/pull/8105) [`0e0fa605d`](https://github.com/withastro/astro/commit/0e0fa605d109cc91e08a1ae1cc560ea240fe631b) Thanks [@martrapp](https://github.com/martrapp)! - ViewTransition: bug fix for lost scroll position in browser history

- [#8116](https://github.com/withastro/astro/pull/8116) [`b290f0a99`](https://github.com/withastro/astro/commit/b290f0a99778a9b9c1045f3cd06b6aee934d7c03) Thanks [@martrapp](https://github.com/martrapp)! - On back navigation only animate view transitions that were animated going forward.

- [#7778](https://github.com/withastro/astro/pull/7778) [`d6b494376`](https://github.com/withastro/astro/commit/d6b4943764989c0e89df2d6875cd19691566dfb3) Thanks [@y-nk](https://github.com/y-nk)! - Added support for optimizing remote images from authorized sources when using `astro:assets`. This comes with two new parameters to specify which domains (`image.domains`) and host patterns (`image.remotePatterns`) are authorized for remote images.

  For example, the following configuration will only allow remote images from `astro.build` to be optimized:

  ```ts
  // astro.config.mjs
  export default defineConfig({
    image: {
      domains: ['astro.build'],
    },
  });
  ```

  The following configuration will only allow remote images from HTTPS hosts:

  ```ts
  // astro.config.mjs
  export default defineConfig({
    image: {
      remotePatterns: [{ protocol: 'https' }],
    },
  });
  ```

- [#8109](https://github.com/withastro/astro/pull/8109) [`da6e3da1c`](https://github.com/withastro/astro/commit/da6e3da1ce00bed625fc568cfe4693713448e93f) Thanks [@martrapp](https://github.com/martrapp)! - fix: reinsert attribute to specify direction of ViewTransition (forward / back)

## 2.10.9

### Patch Changes

- [#8091](https://github.com/withastro/astro/pull/8091) [`56e7c5177`](https://github.com/withastro/astro/commit/56e7c5177bd61b404978dc9b82e2d34d76a4b2f9) Thanks [@martrapp](https://github.com/martrapp)! - Handle `<noscript>` tags in `<head>` during ViewTransitions

## 2.10.8

### Patch Changes

- [#7702](https://github.com/withastro/astro/pull/7702) [`c19987df0`](https://github.com/withastro/astro/commit/c19987df0be3520cf774476cea270c03edd08354) Thanks [@shishkin](https://github.com/shishkin)! - Fix AstroConfigSchema type export

- [#8084](https://github.com/withastro/astro/pull/8084) [`560e45924`](https://github.com/withastro/astro/commit/560e45924622141206ff5b47d134cb343d6d2a71) Thanks [@hbgl](https://github.com/hbgl)! - Stream request body instead of buffering it in memory.

- [#8066](https://github.com/withastro/astro/pull/8066) [`afc45af20`](https://github.com/withastro/astro/commit/afc45af2022f7c43fbb6c5c04983695f3819e47e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add support for non-awaited imports to the Image component and `getImage`

- [#7866](https://github.com/withastro/astro/pull/7866) [`d1f7143f9`](https://github.com/withastro/astro/commit/d1f7143f9caf2ffa0e87cc55c0e05339d3501db3) Thanks [@43081j](https://github.com/43081j)! - Add second type argument to the AstroGlobal type to type Astro.self. This change will ultimately allow our editor tooling to provide props completions and intellisense for `<Astro.self />`

- [#8032](https://github.com/withastro/astro/pull/8032) [`3e46634fd`](https://github.com/withastro/astro/commit/3e46634fd540e5b967d2e5c9abd6235452cee2f2) Thanks [@natemoo-re](https://github.com/natemoo-re)! - `astro add` now passes down `--save-prod`, `--save-dev`, `--save-exact`, and `--no-save` flags for installation

- [#8035](https://github.com/withastro/astro/pull/8035) [`a12027b6a`](https://github.com/withastro/astro/commit/a12027b6af411be39700919ca47e240a335e9887) Thanks [@fyndor](https://github.com/fyndor)! - Removed extra double quotes from computed style in shiki code component

## 2.10.7

### Patch Changes

- [#8042](https://github.com/withastro/astro/pull/8042) [`4a145c4c7`](https://github.com/withastro/astro/commit/4a145c4c7d176a3fb56342844690c6999e880069) Thanks [@matthewp](https://github.com/matthewp)! - Treat same pathname with different search params as different page

## 2.10.6

### Patch Changes

- [#8027](https://github.com/withastro/astro/pull/8027) [`1b8d30209`](https://github.com/withastro/astro/commit/1b8d3020990130dabfaaf753db73a32c6e0c896a) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Ensure dev server restarts respect when `base` is removed

- [#8033](https://github.com/withastro/astro/pull/8033) [`405913cdf`](https://github.com/withastro/astro/commit/405913cdf20b26407aa351c090f0a0859a4e6f54) Thanks [@matthewp](https://github.com/matthewp)! - Prevent script re-evaluation on page transition

- [#8036](https://github.com/withastro/astro/pull/8036) [`87d4b1843`](https://github.com/withastro/astro/commit/87d4b18437c7565c48cad4bea81831c2a244ebb8) Thanks [@ematipico](https://github.com/ematipico)! - Fix a bug where the middleware entry point was passed to integrations even though the configuration `build.excludeMiddleware` was set to `false`.

- [#8022](https://github.com/withastro/astro/pull/8022) [`c23377caa`](https://github.com/withastro/astro/commit/c23377caafbc75deb91c33b9678c1b6868ad40ea) Thanks [@bluwy](https://github.com/bluwy)! - Always return a new array instance from `getCollection` in prod

- [#8013](https://github.com/withastro/astro/pull/8013) [`86bee2812`](https://github.com/withastro/astro/commit/86bee2812185df6e14025e5962a335f51853587b) Thanks [@martrapp](https://github.com/martrapp)! - Links with hash marks now trigger view transitions if they lead to a different page. Links to the same page do not trigger view transitions.

## 2.10.5

### Patch Changes

- [#8011](https://github.com/withastro/astro/pull/8011) [`5b1e39ef6`](https://github.com/withastro/astro/commit/5b1e39ef6ec6dcebea96584f95d9530bd9aa715d) Thanks [@bluwy](https://github.com/bluwy)! - Move hoisted script analysis optimization behind the `experimental.optimizeHoistedScript` option

## 2.10.4

### Patch Changes

- [#8003](https://github.com/withastro/astro/pull/8003) [`16161afb2`](https://github.com/withastro/astro/commit/16161afb2b3a04ca7605fcd16de06efe3fabdef2) Thanks [@JuanM04](https://github.com/JuanM04)! - Fixed `EndpointOutput` types with `{ encoding: 'binary' }`

- [#7995](https://github.com/withastro/astro/pull/7995) [`79376f842`](https://github.com/withastro/astro/commit/79376f842d25edfe4dc2948548e99b59e1c4d24f) Thanks [@belluzj](https://github.com/belluzj)! - Fix quadratic quote escaping in nested data in island props

- [#8007](https://github.com/withastro/astro/pull/8007) [`58b121d42`](https://github.com/withastro/astro/commit/58b121d42a9f58a5a992f0c378b036f37e9715fc) Thanks [@paperdave](https://github.com/paperdave)! - Support Bun by adjusting how `@babel/plugin-transform-react-jsx` is imported.

## 2.10.3

### Patch Changes

- [#7986](https://github.com/withastro/astro/pull/7986) [`8e5a27b48`](https://github.com/withastro/astro/commit/8e5a27b488b326c1f9be6f02c191a2fb0dafac56) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Ensure injectRoute is properly handled in `build` as well as `dev`

## 2.10.2

### Patch Changes

- [#7945](https://github.com/withastro/astro/pull/7945) [`a00cfb894`](https://github.com/withastro/astro/commit/a00cfb89429003b6e1ad28ec8cc6d46ab4ed244b) Thanks [@matthewp](https://github.com/matthewp)! - Fix race condition when performing swap for fallback

- [#7983](https://github.com/withastro/astro/pull/7983) [`6cd7290d2`](https://github.com/withastro/astro/commit/6cd7290d2c8380bdf4d7e36f3296948d10d5bc25) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix filename generation for `.astro` pages

- [#7946](https://github.com/withastro/astro/pull/7946) [`9d0070095`](https://github.com/withastro/astro/commit/9d0070095e90d4cbc31f5f9a1c6dd48a0dbeb379) Thanks [@andremralves](https://github.com/andremralves)! - Fix: missing CSS import when 404 server Response redirects to a custom 404 page.

- [#7977](https://github.com/withastro/astro/pull/7977) [`a4a637c8f`](https://github.com/withastro/astro/commit/a4a637c8f79fbbb8cc451e9155ef7b3b02c6a6d0) Thanks [@bluwy](https://github.com/bluwy)! - Fix inline root resolve logic

- [#7943](https://github.com/withastro/astro/pull/7943) [`c2682a17c`](https://github.com/withastro/astro/commit/c2682a17c05360bc80705032637159920be1f156) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Ensure that injected routes from `node_modules` are properly detected

## 2.10.1

### Patch Changes

- [#7935](https://github.com/withastro/astro/pull/7935) [`6035bb35f`](https://github.com/withastro/astro/commit/6035bb35f222fc6a80b418f13998b21c59da85b6) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Properly handle routing when multiple slashes are present in the request by collapsing them to a single `/`

- [#7936](https://github.com/withastro/astro/pull/7936) [`4b6deda36`](https://github.com/withastro/astro/commit/4b6deda360b2ba47d03427c377d5982b24ee894c) Thanks [@matthewp](https://github.com/matthewp)! - Export createTransitionScope for the runtime

- Updated dependencies [[`6035bb35f`](https://github.com/withastro/astro/commit/6035bb35f222fc6a80b418f13998b21c59da85b6)]:
  - @astrojs/internal-helpers@0.1.2

## 2.10.0

### Minor Changes

- [#7861](https://github.com/withastro/astro/pull/7861) [`41afb8405`](https://github.com/withastro/astro/commit/41afb84057f606b0e7f9a73c1e40487068e43948) Thanks [@matthewp](https://github.com/matthewp)! - Persistent DOM and Islands in Experimental View Transitions

  With `viewTransitions: true` enabled in your Astro config's experimental section, pages using the `<ViewTransition />` routing component can now access a new `transition:persist` directive.

  With this directive, you can keep the state of DOM elements and islands on the old page when transitioning to the new page.

  For example, to keep a video playing across page navigation, add `transition:persist` to the element:

  ```astro
  <video controls="" autoplay="" transition:persist>
    <source
      src="https://ia804502.us.archive.org/33/items/GoldenGa1939_3/GoldenGa1939_3_512kb.mp4"
      type="video/mp4"
    />
  </video>
  ```

  This `<video>` element, with its current state, will be moved over to the next page (if the video also exists on that page).

  Likewise, this feature works with any client-side framework component island. In this example, a counter's state is preserved and moved to the new page:

  ```astro
  <Counter count={5} client:load transition:persist />
  ```

  See our [View Transitions Guide](https://docs.astro.build/en/guides/view-transitions/#maintaining-state) to learn more on usage.

### Patch Changes

- [#7821](https://github.com/withastro/astro/pull/7821) [`c00b6f0c4`](https://github.com/withastro/astro/commit/c00b6f0c49027125ea3026e89b21fef84380d187) Thanks [@ottomated](https://github.com/ottomated)! - Fixes an issue that prevents importing `'astro/app'`

- [#7917](https://github.com/withastro/astro/pull/7917) [`1f0ee494a`](https://github.com/withastro/astro/commit/1f0ee494a5190356d130282f1f51ba2a5e6ea63f) Thanks [@bluwy](https://github.com/bluwy)! - Prevent integration hooks from re-triggering if the server restarts on config change, but the config fails to load.

- [#7901](https://github.com/withastro/astro/pull/7901) [`00cb28f49`](https://github.com/withastro/astro/commit/00cb28f4964a60bc609770108d491acc277997b9) Thanks [@bluwy](https://github.com/bluwy)! - Improve sourcemap generation and performance

- [#7911](https://github.com/withastro/astro/pull/7911) [`c264be349`](https://github.com/withastro/astro/commit/c264be3497db4aa8b3bcce0d2f79a26e35b8e91e) Thanks [@martrapp](https://github.com/martrapp)! - fix for #7882 by setting state in page navigation (view transitions)

- [#7909](https://github.com/withastro/astro/pull/7909) [`e1e958a75`](https://github.com/withastro/astro/commit/e1e958a75860292688569e82b4617fc141056202) Thanks [@tonydangblog](https://github.com/tonydangblog)! - Fix: ignore `.json` files nested in subdirectories within content collection directories starting with an `_` underscore.

## 2.9.7

### Patch Changes

- [#7754](https://github.com/withastro/astro/pull/7754) [`298dbb89f`](https://github.com/withastro/astro/commit/298dbb89f2963a547370b6e65cafd2650fdb1b27) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Refactor `404` and `500` route handling for consistency and improved prerendering support

- [#7885](https://github.com/withastro/astro/pull/7885) [`9e2203847`](https://github.com/withastro/astro/commit/9e22038472c8be05ed7a72620534b88324dce793) Thanks [@andremralves](https://github.com/andremralves)! - Fix incorrect build path logging for 404.astro pages.

- [#7887](https://github.com/withastro/astro/pull/7887) [`5c5da8d2f`](https://github.com/withastro/astro/commit/5c5da8d2fbb37830f3ee81830d4c9afcd2c1a3e3) Thanks [@ffxsam](https://github.com/ffxsam)! - Add logging for when JSON.parse fails within hydrate func

- [#7895](https://github.com/withastro/astro/pull/7895) [`0b8375fe8`](https://github.com/withastro/astro/commit/0b8375fe82a15bfff3f517f98de6454adb2779f1) Thanks [@bluwy](https://github.com/bluwy)! - Fix streaming Astro components

- [#7876](https://github.com/withastro/astro/pull/7876) [`89d015db6`](https://github.com/withastro/astro/commit/89d015db6ce4d15b5b1140f0eb6bfbef187d6ad7) Thanks [@ematipico](https://github.com/ematipico)! - Check for `getStaticPaths` only if the file has the `.astro` extension.

- [#7879](https://github.com/withastro/astro/pull/7879) [`ebf7ebbf7`](https://github.com/withastro/astro/commit/ebf7ebbf7ae767625d736fad327954cfb853837e) Thanks [@bluwy](https://github.com/bluwy)! - Refactor and improve Astro config loading flow

## 2.9.6

### Patch Changes

- [#7856](https://github.com/withastro/astro/pull/7856) [`861f10eaf`](https://github.com/withastro/astro/commit/861f10eafd4bf4fa08b8e943d64adec51a4c9c1d) Thanks [@matthewp](https://github.com/matthewp)! - Properly serialize redirect config for SSR

## 2.9.5

### Patch Changes

- [#7838](https://github.com/withastro/astro/pull/7838) [`e50f64675`](https://github.com/withastro/astro/commit/e50f646758f5a48e836523d1976d62e18e2893a4) Thanks [@bluwy](https://github.com/bluwy)! - Fix head propagation for MDX components

- [#7841](https://github.com/withastro/astro/pull/7841) [`2275c7d56`](https://github.com/withastro/astro/commit/2275c7d56b2b54e75ca1dbd1df5c7901cf358d52) Thanks [@ematipico](https://github.com/ematipico)! - Allow to return a redirect in dev mode when the original route is not present in the file system.

- [#7800](https://github.com/withastro/astro/pull/7800) [`49a4b2820`](https://github.com/withastro/astro/commit/49a4b28202cfc571897bcc74042b873a2ceecba4) Thanks [@matthewp](https://github.com/matthewp)! - Scroll position restoration with ViewTransitions router

## 2.9.4

### Patch Changes

- [#7826](https://github.com/withastro/astro/pull/7826) [`31c4031ba`](https://github.com/withastro/astro/commit/31c4031ba7aea132a861f2465f38a83741f0cd05) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `astro:assets` not working on Windows in build when using Squoosh

- [#7823](https://github.com/withastro/astro/pull/7823) [`5161cf919`](https://github.com/withastro/astro/commit/5161cf919c81bd3681af221def0abab7d25abec0) Thanks [@matthewp](https://github.com/matthewp)! - Adds an `astro:beforeload` event for the dark mode use-case

- [#7836](https://github.com/withastro/astro/pull/7836) [`59b556232`](https://github.com/withastro/astro/commit/59b556232696d3aba3c2263ea104cd9922085fd2) Thanks [@matthewp](https://github.com/matthewp)! - Upgrade compiler to bring in Image view transition support

- [#7824](https://github.com/withastro/astro/pull/7824) [`267487e63`](https://github.com/withastro/astro/commit/267487e63ea0a4cfcb771c667a088afb16c62ba6) Thanks [@matthewp](https://github.com/matthewp)! - Prevent navigation on hash change

- [#7829](https://github.com/withastro/astro/pull/7829) [`b063a2d8a`](https://github.com/withastro/astro/commit/b063a2d8aeaed18550d148511bfb68f9ba3cdb09) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `astro:assets` endpoint not working in dev and SSR if `experimental.assets` was enabled by an integration (such as Starlight)

- [#7734](https://github.com/withastro/astro/pull/7734) [`d5f526b33`](https://github.com/withastro/astro/commit/d5f526b3397cf24aa06353de2de91b2ba08cd4eb) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix some global state related to `astro:assets` not getting cleaned out properly in SSR with no pre-rendered pages

- [#7843](https://github.com/withastro/astro/pull/7843) [`7dbcbc86b`](https://github.com/withastro/astro/commit/7dbcbc86b3bd7e5458570906745364c9399d1a46) Thanks [@matthewp](https://github.com/matthewp)! - Fixes head propagation regression

## 2.9.3

### Patch Changes

- [#7782](https://github.com/withastro/astro/pull/7782) [`0f677c009`](https://github.com/withastro/astro/commit/0f677c009d102bc12232a966634136be58f34739) Thanks [@bluwy](https://github.com/bluwy)! - Refactor Astro rendering to write results directly. This improves the rendering performance for all Astro files.

- [#7786](https://github.com/withastro/astro/pull/7786) [`188eeddd4`](https://github.com/withastro/astro/commit/188eeddd47a61e04639670496924c37866180749) Thanks [@matthewp](https://github.com/matthewp)! - Execute scripts when navigating to a new page.

  When navigating to an new page with client-side navigation, scripts are executed (and re-executed) so that any new scripts on the incoming page are run and the DOM can be updated.

  However, `type=module` scripts never re-execute in Astro, and will not do so in client-side routing. To support cases where you want to modify the DOM, a new `astro:load` event listener been added:

  ```js
  document.addEventListener('astro:load', () => {
    updateTheDOMSomehow();
  });
  ```

## 2.9.2

### Patch Changes

- [#7777](https://github.com/withastro/astro/pull/7777) [`3567afac4`](https://github.com/withastro/astro/commit/3567afac4411c1054a5e999dd692e6d079825b4a) Thanks [@bluwy](https://github.com/bluwy)! - Fix rendering TextEncoder encoding error regression

- [#7759](https://github.com/withastro/astro/pull/7759) [`1792737da`](https://github.com/withastro/astro/commit/1792737dae1b24e3d678f8c4780f3cd17710944f) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix SharedImageService's types not properly reflecting that image services hooks can be async

- [#7766](https://github.com/withastro/astro/pull/7766) [`da7f1128b`](https://github.com/withastro/astro/commit/da7f1128bf749dab1d9bd43e50c29a67e8271746) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix missing `referrerpolicy` on ScriptHTMLAttributes

- [#7746](https://github.com/withastro/astro/pull/7746) [`0c9959704`](https://github.com/withastro/astro/commit/0c9959704fff703417eb4602965c668c7f7a3001) Thanks [@birkskyum](https://github.com/birkskyum)! - Update Vite to 4.4

## 2.9.1

### Patch Changes

- [#7756](https://github.com/withastro/astro/pull/7756) [`274e67532`](https://github.com/withastro/astro/commit/274e6753281edde72fcb4af1cf8a9f892ee46127) Thanks [@matthewp](https://github.com/matthewp)! - Fixes case where there is FOUC caused by stylesheets not loaded

- [#7742](https://github.com/withastro/astro/pull/7742) [`e52852628`](https://github.com/withastro/astro/commit/e528526289dd9fba98e254743ded47a5c6d418a8) Thanks [@andersk](https://github.com/andersk)! - Fix parsing image assets from a Markdown line along with other markup.

- [#7757](https://github.com/withastro/astro/pull/7757) [`c2d6cfd0c`](https://github.com/withastro/astro/commit/c2d6cfd0c26f4ebb81c715389347de1c3bf5f3e6) Thanks [@matthewp](https://github.com/matthewp)! - Prevent animations when prefers-reduced-motion

- [#7750](https://github.com/withastro/astro/pull/7750) [`201d32dcf`](https://github.com/withastro/astro/commit/201d32dcfc58ca82468ac9be43b07cdc60abad88) Thanks [@matthewp](https://github.com/matthewp)! - Trigger full page refresh on back nav from page without VT enabled

## 2.9.0

### Minor Changes

- [#7686](https://github.com/withastro/astro/pull/7686) [`ec745d689`](https://github.com/withastro/astro/commit/ec745d689abc79d27bc24477589533481f077ddb) Thanks [@matthewp](https://github.com/matthewp)! - Redirects configuration

  This change moves the `redirects` configuration out of experimental. If you were previously using experimental redirects, remove the following experimental flag:

  ```js
  experimental: {
    redirects: true,
  }
  ```

  If you have been waiting for stabilization before using redirects, now you can do so. Check out [the docs on redirects](https://docs.astro.build/en/core-concepts/routing/#redirects) to learn how to use this built-in feature.

- [#7707](https://github.com/withastro/astro/pull/7707) [`3a6e42e19`](https://github.com/withastro/astro/commit/3a6e42e190421c2e172d5c408c0a7592653fccef) Thanks [@ottomated](https://github.com/ottomated)! - Improved hoisted script bundling

  Astro's static analysis to determine which `<script>` tags to bundle together just got a little smarter!

  Astro create bundles that optimize script usage between pages and place them in the head of the document so that they are downloaded as early as possible. One limitation to Astro's existing approach has been that you could not dynamically use hoisted scripts. Each page received the same, all-inclusive bundle whether or not every script was needed on that page.

  Now, Astro has improved the static analysis to take into account the actual imports used.

  For example, Astro would previously bundle the `<script>`s from both the `<Tab>` and `<Accordian>` component for the following library that re-exports multiple components:

  **@matthewp/my-astro-lib**

  ```js
  export { default as Tabs } from './Tabs.astro';
  export { default as Accordion } from './Accordion.astro';
  ```

  Now, when an Astro page only uses a single component, Astro will send only the necessary script to the page. A page that only imports the `<Accordian>` component will not receive any `<Tab>` component's scripts:

  ```astro
  ---
  import { Accordion } from '@matthewp/my-astro-lib';
  ---
  ```

  You should now see more efficient performance with Astro now supporting this common library re-export pattern.

- [#7511](https://github.com/withastro/astro/pull/7511) [`6a12fcecb`](https://github.com/withastro/astro/commit/6a12fcecb076623769eb017da9d4a17cfb0815d3) Thanks [@matthewp](https://github.com/matthewp)! - Built-in View Transitions Support (experimental)

  Astro now supports [view transitions](https://developer.chrome.com/docs/web-platform/view-transitions/) through the new `<ViewTransitions />` component and the `transition:animate` (and associated) directives. View transitions are a great fit for content-oriented sites, and we see it as the best path to get the benefits of client-side routing (smoother transitions) without sacrificing the more simple mental model of MPAs.

  Enable support for view transitions in Astro 2.9 by adding the experimental flag to your config:

  ```js
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    experimental: {
      viewTransitions: true,
    },
  });
  ```

  This enables you to use the new APIs added.

  #### <ViewTransitions />

  This is a component which acts as the _router_ for transitions between pages. Add it to the `<head>` section of each individual page where transitions should occur _in the client_ as you navigate away to another page, instead of causing a full page browser refresh. To enable support throughout your entire app, add the component in some common layout or component that targets the `<head>` of every page.

  **CommonHead.astro**

  ```astro
  ---
  import { ViewTransitions } from 'astro:transitions';
  ---

  <meta charset="utf-8" />
  <title>{Astro.props.title}</title>
  <ViewTransitions />
  ```

  With only this change, your app will now route completely in-client. You can then add transitions to individual elements using the `transition:animate` directive.

  #### Animations

  Add `transition:animate` to any element to use Astro's built-in animations.

  ```astro
  <header transition:animate="slide"></header>
  ```

  In the above, Astro's `slide` animation will cause the `<header>` element to slide out to the left, and then slide in from the right when you navigate away from the page.

  You can also customize these animations using any CSS animation properties, for example, by specifying a duration:

  ```astro
  ---
  import { slide } from 'astro:transition';
  ---

  <header transition:animate={slide({ duration: 200 })}></header>
  ```

  #### Continue learning

  Check out the [client-side routing docs](https://docs.astro.build/en/guides/client-side-routing/) to learn more.

### Patch Changes

- [#7701](https://github.com/withastro/astro/pull/7701) [`019b797bf`](https://github.com/withastro/astro/commit/019b797bf83201d2d4834cc9e0dde30f6a48daa2) Thanks [@bluwy](https://github.com/bluwy)! - Fix redirects map object-form value validation

- [#7704](https://github.com/withastro/astro/pull/7704) [`d78db48ac`](https://github.com/withastro/astro/commit/d78db48ac48bec6bd550b937a896cbcc747625f1) Thanks [@bluwy](https://github.com/bluwy)! - Fix absolute path handling when passing `root`, `srcDir`, `publicDir`, `outDir`, `cacheDir`, `build.client`, and `build.server` configs in Windows

- [#7713](https://github.com/withastro/astro/pull/7713) [`d088351f5`](https://github.com/withastro/astro/commit/d088351f54d2518e2bb539d7bbf8691427ff8a7a) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update warning when `getStaticPaths` is detected but a route is not prerendered.

## 2.8.5

### Patch Changes

- [#7711](https://github.com/withastro/astro/pull/7711) [`72bbfac97`](https://github.com/withastro/astro/commit/72bbfac976c2965a523eea88ff0543e64d848d80) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix `status` code for custom `404` and `500` pages in the dev server

- [#7693](https://github.com/withastro/astro/pull/7693) [`d401866f9`](https://github.com/withastro/astro/commit/d401866f93bfe25a50c171bc54b2b1ee0f483cc9) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix loading of `/404.astro` page when dynamic route returns 404

- [#7706](https://github.com/withastro/astro/pull/7706) [`4f6b5ae2b`](https://github.com/withastro/astro/commit/4f6b5ae2ba8eb162e03f25cbd600a905d434f529) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix Markdoc integration not being able to import `emitESMImage` from Astro

- [#7694](https://github.com/withastro/astro/pull/7694) [`06c255716`](https://github.com/withastro/astro/commit/06c255716ae8e922fb9d4ffa5595cbb34146fff6) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix route matching behavior when `getStaticPaths` result includes hyphenated params

## 2.8.4

### Patch Changes

- [#7680](https://github.com/withastro/astro/pull/7680) [`cc8e9de88`](https://github.com/withastro/astro/commit/cc8e9de88179d2ed4b70980c60b41448db393429) Thanks [@ematipico](https://github.com/ematipico)! - Throw an error when `build.split` is set to `true` but `output` isn't set to `"server"`.

- [#7679](https://github.com/withastro/astro/pull/7679) [`1a6f833c4`](https://github.com/withastro/astro/commit/1a6f833c404ba2e64e3497929b64c863b5a348c8) Thanks [@bluwy](https://github.com/bluwy)! - Handle inlining non-string boolean environment variables

- [#7691](https://github.com/withastro/astro/pull/7691) [`cc0f81c04`](https://github.com/withastro/astro/commit/cc0f81c040e912cff0c09e89327ef1655f96b67d) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix not being able to build on Vercel Edge when `astro:assets` was enabled even when using a non-Node image service

## 2.8.3

### Patch Changes

- [#7637](https://github.com/withastro/astro/pull/7637) [`af5827d4f`](https://github.com/withastro/astro/commit/af5827d4f7af9437c0c3fcff5c0239577aa68498) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `astro:assets` not respecting EXIF rotation

- [#7644](https://github.com/withastro/astro/pull/7644) [`213e10991`](https://github.com/withastro/astro/commit/213e10991af337a7c4fd38c39be5c266c16fa600) Thanks [@matthewp](https://github.com/matthewp)! - Fix for allowing the root path / as a redirect

- [#7644](https://github.com/withastro/astro/pull/7644) [`213e10991`](https://github.com/withastro/astro/commit/213e10991af337a7c4fd38c39be5c266c16fa600) Thanks [@matthewp](https://github.com/matthewp)! - Fix static redirects prefered over dynamic regular routes

- [#7643](https://github.com/withastro/astro/pull/7643) [`4b82e55cf`](https://github.com/withastro/astro/commit/4b82e55cf15899babb61128a7393362e667ff724) Thanks [@alvinometric](https://github.com/alvinometric)! - Add support for using `.svg` files with `astro:assets`'s base services. The SVGs will NOT be processed and will be return as-is, however, proper attributes, alt enforcement etc will all work correctly.

## 2.8.2

### Patch Changes

- [#7623](https://github.com/withastro/astro/pull/7623) [`86e19c7cf`](https://github.com/withastro/astro/commit/86e19c7cf8696e065c1ccdc2eb841ad0a2b61ede) Thanks [@matthewp](https://github.com/matthewp)! - Allow our Response wrapper to be cloneable

## 2.8.1

### Patch Changes

- [#7611](https://github.com/withastro/astro/pull/7611) [`904921cbe`](https://github.com/withastro/astro/commit/904921cbe44e168477c751774a2e01a6cc972a16) Thanks [@bluwy](https://github.com/bluwy)! - Ignore content .json files prefixed with underscores (regression)

- [#7618](https://github.com/withastro/astro/pull/7618) [`3669e2d27`](https://github.com/withastro/astro/commit/3669e2d2762bf8a4909be00ed212a6c5e847eedf) Thanks [@ematipico](https://github.com/ematipico)! - Add a fallback label if `astro info` command can't determine the package manager used.

- [#7620](https://github.com/withastro/astro/pull/7620) [`831dfd151`](https://github.com/withastro/astro/commit/831dfd1516c8b900ec4a0c151a40121655cdedc6) Thanks [@delucis](https://github.com/delucis)! - Filter out `astro` from integration peer dependencies when running `astro add`

## 2.8.0

### Minor Changes

- [#7532](https://github.com/withastro/astro/pull/7532) [`9e5fafa2b`](https://github.com/withastro/astro/commit/9e5fafa2b25b5128084c7072aa282642fcfbb14b) Thanks [@ematipico](https://github.com/ematipico)! - The `astro/middleware` module exports a new utility called `trySerializeLocals`.

  This utility can be used by adapters to validate their `locals` before sending it
  to the Astro middleware.

  This function will throw a runtime error if the value passed is not serializable, so
  consumers will need to handle that error.

- [#7532](https://github.com/withastro/astro/pull/7532) [`9e5fafa2b`](https://github.com/withastro/astro/commit/9e5fafa2b25b5128084c7072aa282642fcfbb14b) Thanks [@ematipico](https://github.com/ematipico)! - Astro exposes the middleware file path to the integrations in the hook `astro:build:ssr`

  ```ts
  // myIntegration.js
  import type { AstroIntegration } from 'astro';
  function integration(): AstroIntegration {
    return {
      name: 'fancy-astro-integration',
      hooks: {
        'astro:build:ssr': ({ middlewareEntryPoint }) => {
          if (middlewareEntryPoint) {
            // do some operations
          }
        },
      },
    };
  }
  ```

  The `middlewareEntryPoint` is only defined if the user has created an Astro middleware.

- [#7432](https://github.com/withastro/astro/pull/7432) [`6e9c29579`](https://github.com/withastro/astro/commit/6e9c295799cb6524841adbcbec21ff628d8d19c8) Thanks [@ematipico](https://github.com/ematipico)! - Adds a new command `astro info`, useful for sharing debugging information about your current environment when you need help!

  ```shell
  astro info
  ```

  Output

  ```
  Astro version            v2.6.6
  Package manager          pnpm
  Platform                 darwin
  Architecture             arm64
  Adapter                  @astrojs/vercel/serverless
  Integrations             None
  ```

- [#7532](https://github.com/withastro/astro/pull/7532) [`9e5fafa2b`](https://github.com/withastro/astro/commit/9e5fafa2b25b5128084c7072aa282642fcfbb14b) Thanks [@ematipico](https://github.com/ematipico)! - The `astro/middleware` module exports a new API called `createContext`.

  This a low-level API that adapters can use to create a context that can be consumed by middleware functions.

- [#7532](https://github.com/withastro/astro/pull/7532) [`9e5fafa2b`](https://github.com/withastro/astro/commit/9e5fafa2b25b5128084c7072aa282642fcfbb14b) Thanks [@ematipico](https://github.com/ematipico)! - Introduced a new build option for SSR, called `build.excludeMiddleware`.

  ```js
  // astro.config.mjs
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    build: {
      excludeMiddleware: true,
    },
  });
  ```

  When enabled, the code that belongs to be middleware **won't** be imported
  by the final pages/entry points. The user is responsible for importing it and
  calling it manually.

### Patch Changes

- [#7532](https://github.com/withastro/astro/pull/7532) [`9e5fafa2b`](https://github.com/withastro/astro/commit/9e5fafa2b25b5128084c7072aa282642fcfbb14b) Thanks [@ematipico](https://github.com/ematipico)! - Correctly track the middleware during the SSR build.

## 2.7.4

### Patch Changes

- [#7544](https://github.com/withastro/astro/pull/7544) [`47b756e3e`](https://github.com/withastro/astro/commit/47b756e3e11703387407692e189f34c31f8565d6) Thanks [@johannesspohr](https://github.com/johannesspohr)! - Batch async iterator buffering to reduce numbers of calls to `setTimeout`

- [#7565](https://github.com/withastro/astro/pull/7565) [`5ffdec758`](https://github.com/withastro/astro/commit/5ffdec758061b55a328d2e8037684c3b2f1e0184) Thanks [@bluwy](https://github.com/bluwy)! - Fix style crawling logic for CSS HMR

## 2.7.3

### Patch Changes

- [#7527](https://github.com/withastro/astro/pull/7527) [`9e2426f75`](https://github.com/withastro/astro/commit/9e2426f75637a6318961f483de90b635f3fdadeb) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Default registry logic to fallback to NPM if registry command fails (sorry, Bun users!)

- [#7542](https://github.com/withastro/astro/pull/7542) [`cdc28326c`](https://github.com/withastro/astro/commit/cdc28326cf21f305924363e9c8c02ce54b6ff895) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix bug when using `define:vars` with a `style` object

- [#7521](https://github.com/withastro/astro/pull/7521) [`19c2d43ea`](https://github.com/withastro/astro/commit/19c2d43ea41efdd8741007de0774e7e394f174b0) Thanks [@knpwrs](https://github.com/knpwrs)! - Add `Props` generic for `APIRoute` type

- [#7531](https://github.com/withastro/astro/pull/7531) [`2172dd4f0`](https://github.com/withastro/astro/commit/2172dd4f0dd8f87d1adbc5ae90f44724e66eb964) Thanks [@wackbyte](https://github.com/wackbyte)! - Fix serialization of `undefined` in framework component props

- [#7539](https://github.com/withastro/astro/pull/7539) [`1170877b5`](https://github.com/withastro/astro/commit/1170877b51aaa13203e8c488dcf4e39d1b5553ee) Thanks [@jc1144096387](https://github.com/jc1144096387)! - Update registry logic, improving edge cases (http support, redirects, registries ending with '/')

## 2.7.2

### Patch Changes

- [#7273](https://github.com/withastro/astro/pull/7273) [`6dfd7081b`](https://github.com/withastro/astro/commit/6dfd7081b7a1532ab0fe3af8bcf079b10a5640a9) Thanks [@bluwy](https://github.com/bluwy)! - Fix error stacktrace from Vite SSR runtime

- [#7370](https://github.com/withastro/astro/pull/7370) [`83016795e`](https://github.com/withastro/astro/commit/83016795e9e149bc64e2441d477cf8c65ef5a117) Thanks [@bluwy](https://github.com/bluwy)! - Simplify nested hydration flow

- [#7488](https://github.com/withastro/astro/pull/7488) [`d3247851f`](https://github.com/withastro/astro/commit/d3247851f04e911c134cfedc22db17b7d61c53d9) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Pass `compressHTML` setting to server adapters

- [#7491](https://github.com/withastro/astro/pull/7491) [`a3928016c`](https://github.com/withastro/astro/commit/a3928016cc375842cf47e7a227835cd17e48a409) Thanks [@bluwy](https://github.com/bluwy)! - Fix CSS error line offset

- [#7494](https://github.com/withastro/astro/pull/7494) [`2726098bc`](https://github.com/withastro/astro/commit/2726098bc82f910edda4198b9fb94f2bfd048976) Thanks [@itsmatteomanf](https://github.com/itsmatteomanf)! - Replaces the instance of `setTimeout()` in the runtime to use `queueMicrotask()`, to resolve limitations on Cloudflare Workers.

- [#7509](https://github.com/withastro/astro/pull/7509) [`f4fea3b02`](https://github.com/withastro/astro/commit/f4fea3b02b0737053c7c7521a7d4dd235648918a) Thanks [@ematipico](https://github.com/ematipico)! - Correctly emit pre-rendered pages when `build.split` is set to `true`

## 2.7.1

### Patch Changes

- [#7490](https://github.com/withastro/astro/pull/7490) [`601403744`](https://github.com/withastro/astro/commit/60140374418ff0ee80899615be8e718ae57f791a) Thanks [@ematipico](https://github.com/ematipico)! - Fix the URL that belongs to `entryPoints` in the hook `astro:build:ssr`. The paths were created with the wrong output directory.

- [#7459](https://github.com/withastro/astro/pull/7459) [`869197aaf`](https://github.com/withastro/astro/commit/869197aafd9802d059dd8db1ef23794fdd938a91) Thanks [@bluwy](https://github.com/bluwy)! - Fix missing styles for Markdoc files in development

- [#7440](https://github.com/withastro/astro/pull/7440) [`2b7539952`](https://github.com/withastro/astro/commit/2b75399520bebfc537cca8204e483f0df3373904) Thanks [@bluwy](https://github.com/bluwy)! - Remove `slash` package

- [#7476](https://github.com/withastro/astro/pull/7476) [`478cd9d8f`](https://github.com/withastro/astro/commit/478cd9d8fa9452466a73e0981863ef6e82f87238) Thanks [@hirasso](https://github.com/hirasso)! - Allow astro to be installed underneath a folder with leading slashes

- [#7479](https://github.com/withastro/astro/pull/7479) [`57e603038`](https://github.com/withastro/astro/commit/57e603038fa51f5cf023c086705e2ced67434b38) Thanks [@bluwy](https://github.com/bluwy)! - Handle esbuild 0.18 changes

- [#7381](https://github.com/withastro/astro/pull/7381) [`f359d77b1`](https://github.com/withastro/astro/commit/f359d77b1844335ceeb103b9d3753eb2f440ed5f) Thanks [@matthewp](https://github.com/matthewp)! - Prevent accidental inclusion of page CSS in dev mode

- Updated dependencies [[`2b7539952`](https://github.com/withastro/astro/commit/2b75399520bebfc537cca8204e483f0df3373904)]:
  - @astrojs/internal-helpers@0.1.1

## 2.7.0

### Minor Changes

- [#7353](https://github.com/withastro/astro/pull/7353) [`76fcdb84d`](https://github.com/withastro/astro/commit/76fcdb84dd828ac373b2dc739e57fadf650820fd) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Remove legacy handling for MDX content collections. Ensure you are using `@astrojs/mdx` v0.18 or above.

- [#7385](https://github.com/withastro/astro/pull/7385) [`8e2923cc6`](https://github.com/withastro/astro/commit/8e2923cc6219eda01ca2c749f5c7fa2fe4319455) Thanks [@ematipico](https://github.com/ematipico)! - `Astro.locals` is now exposed to the adapter API. Node Adapter can now pass in a `locals` object in the SSR handler middleware.

- [#7220](https://github.com/withastro/astro/pull/7220) [`459b5bd05`](https://github.com/withastro/astro/commit/459b5bd05f562238f7250520efe3cf0fa156bb45) Thanks [@ematipico](https://github.com/ematipico)! - Shipped a new SSR build configuration mode: `split`.
  When enabled, Astro will "split" the single `entry.mjs` file and instead emit a separate file to render each individual page during the build process.

  These files will be emitted inside `dist/pages`, mirroring the directory structure of your page files in `src/pages/`, for example:

  ```
  ├── pages
  │   ├── blog
  │   │   ├── entry._slug_.astro.mjs
  │   │   └── entry.about.astro.mjs
  │   └── entry.index.astro.mjs
  ```

  To enable, set `build.split: true` in your Astro config:

  ```js
  // src/astro.config.mjs
  export default defineConfig({
    output: 'server',
    adapter: node({
      mode: 'standalone',
    }),
    build: {
      split: true,
    },
  });
  ```

- [#7220](https://github.com/withastro/astro/pull/7220) [`459b5bd05`](https://github.com/withastro/astro/commit/459b5bd05f562238f7250520efe3cf0fa156bb45) Thanks [@ematipico](https://github.com/ematipico)! - The Astro hook `astro:build:ssr` now receives a new option in their payload, called `entryPoints`.

  `entryPoints` is defined as a `Map<RouteData, URL>`, where `RouteData` represents the information of a Astro route and `URL` is the path to the physical file emitted at the end of the build.

  ```ts
  export function integration(): AstroIntegration {
    return {
      name: 'my-integration',
      hooks: {
        'astro:build:ssr': ({ entryPoints }) => {
          // do something with `entryPoints`
        },
      },
    };
  }
  ```

### Patch Changes

- [#7438](https://github.com/withastro/astro/pull/7438) [`30bb36371`](https://github.com/withastro/astro/commit/30bb363713e3d2c50d0d4816d970aa93b836a3b0) Thanks [@bluwy](https://github.com/bluwy)! - Fix `astro:build:setup` hook `updateConfig` utility, where the configuration wasn't correctly updated when the hook was fired.

- [#7436](https://github.com/withastro/astro/pull/7436) [`3943fa390`](https://github.com/withastro/astro/commit/3943fa390a0bd41317a673d0f841e0461c7499cd) Thanks [@kossidts](https://github.com/kossidts)! - Fix an issue related to the documentation. Destructure the argument of the function to customize the Astro dev server based on the command run.

- [#7424](https://github.com/withastro/astro/pull/7424) [`7877a06d8`](https://github.com/withastro/astro/commit/7877a06d829305eed356fbb8bfd1ef578cd5466e) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Update internal types for more stable builds for Astro maintainers.

- [#7427](https://github.com/withastro/astro/pull/7427) [`e314a04bf`](https://github.com/withastro/astro/commit/e314a04bfbf0526838b7c9aac452251b27d69719) Thanks [@ematipico](https://github.com/ematipico)! - Correctly emit the middleware code during the build phase. The file emitted is now `dist/middleware.mjs`

- [#7423](https://github.com/withastro/astro/pull/7423) [`33cdc8622`](https://github.com/withastro/astro/commit/33cdc8622a56c8e5465b7a50f627ecc568870c6b) Thanks [@bmenant](https://github.com/bmenant)! - Ensure injected `/_image` endpoint for image optimization is not prerendered on hybrid output.

## 2.6.6

### Patch Changes

- [#7418](https://github.com/withastro/astro/pull/7418) [`2b34fc492`](https://github.com/withastro/astro/commit/2b34fc49282cbf5bf89de46359b51a67a5c4b8bb) Thanks [@ematipico](https://github.com/ematipico)! - Correctly type the option `server.open`

- [#7429](https://github.com/withastro/astro/pull/7429) [`89a483520`](https://github.com/withastro/astro/commit/89a4835202f05d9571aeb42740dbe907a8afc28b) Thanks [@delucis](https://github.com/delucis)! - Fix telemetry reporting for integrations that return an array

## 2.6.5

### Patch Changes

- [#7414](https://github.com/withastro/astro/pull/7414) [`bb644834e`](https://github.com/withastro/astro/commit/bb644834ef03bc00048c7381f20a1c01388438e2) Thanks [@bluwy](https://github.com/bluwy)! - Simplify telemetry Vite version detection

- [#7399](https://github.com/withastro/astro/pull/7399) [`d2020c29c`](https://github.com/withastro/astro/commit/d2020c29cf285e699f92143a70ffa30a85122bb4) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix edge case where injected routes would cause builds to fail in a PNPM workspace

## 2.6.4

### Patch Changes

- [#7366](https://github.com/withastro/astro/pull/7366) [`42baf62e7`](https://github.com/withastro/astro/commit/42baf62e7ca0351a2f2c7d06ec58086f90519bb7) Thanks [@aappaapp](https://github.com/aappaapp)! - Fixed `RedirectConfig` type definition

- [#7380](https://github.com/withastro/astro/pull/7380) [`1c7b63595`](https://github.com/withastro/astro/commit/1c7b6359563f5e83325121efb2e61915d818a35a) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix missing stacktraces for Zod errors

## 2.6.3

### Patch Changes

- [#7341](https://github.com/withastro/astro/pull/7341) [`491c2db42`](https://github.com/withastro/astro/commit/491c2db424434167327e780ad57b8f665498003d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Improve error message for unsupported Zod transforms from the content config.

- [#7352](https://github.com/withastro/astro/pull/7352) [`0a8d178c9`](https://github.com/withastro/astro/commit/0a8d178c90f033fbba40666c54bcfc58c53ac905) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Raise error when multiple content collection entries have the same slug

## 2.6.2

### Patch Changes

- [#7310](https://github.com/withastro/astro/pull/7310) [`52f0480d1`](https://github.com/withastro/astro/commit/52f0480d14c328ab69bd1f2681ddfd83f7385ab1) Thanks [@Edo-San](https://github.com/Edo-San)! - Fixed a bug that threw an Exception when spreading potentially undefined values as HTML attributes

- [#7339](https://github.com/withastro/astro/pull/7339) [`e3271f8c1`](https://github.com/withastro/astro/commit/e3271f8c167288dc60b94242d01d459c162ec06d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add readable error message for invalid dynamic routes.

- [#7316](https://github.com/withastro/astro/pull/7316) [`e6bff651f`](https://github.com/withastro/astro/commit/e6bff651ff80466b3e862e637d2a6a3334d8cfda) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix Zod errors getting flagged as configuration errors

- [#7342](https://github.com/withastro/astro/pull/7342) [`bbcf69e7b`](https://github.com/withastro/astro/commit/bbcf69e7b8d4bbb759fe0c7e5fd2d2ed58090b59) Thanks [@matthewp](https://github.com/matthewp)! - Fix for experimental redirects in dev mode

- [#7326](https://github.com/withastro/astro/pull/7326) [`1430ffb47`](https://github.com/withastro/astro/commit/1430ffb4734edbb67cbeaaee7e89a9f78e00473c) Thanks [@calebdwilliams](https://github.com/calebdwilliams)! - Fixes issue where Astro doesn't respect custom npm registry settings during project creation

## 2.6.1

### Patch Changes

- [#7307](https://github.com/withastro/astro/pull/7307) [`8034edd9e`](https://github.com/withastro/astro/commit/8034edd9ecf805073395ba7f68f73cd5fc4d2c73) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix [Object AsyncGenerator] appearing in markup for Markdoc documents

## 2.6.0

### Minor Changes

- [#7067](https://github.com/withastro/astro/pull/7067) [`57f8d14c0`](https://github.com/withastro/astro/commit/57f8d14c027c30919363e12c664ccff4ed64d0fc) Thanks [@matthewp](https://github.com/matthewp)! - Experimental redirects support

  This change adds support for the redirects RFC, currently in stage 3: https://github.com/withastro/roadmap/pull/587

  Now you can specify redirects in your Astro config:

  ```js
  import { defineConfig } from 'astro/config';

  export defineConfig({
    redirects: {
      '/blog/old-post': '/blog/new-post'
    }
  });
  ```

  You can also specify spread routes using the same syntax as in file-based routing:

  ```js
  import { defineConfig } from 'astro/config';

  export defineConfig({
    redirects: {
      '/blog/[...slug]': '/articles/[...slug]'
    }
  });
  ```

  By default Astro will build HTML files that contain the `<meta http-equiv="refresh">` tag. Adapters can also support redirect routes and create configuration for real HTTP-level redirects in production.

- [#7237](https://github.com/withastro/astro/pull/7237) [`414eb19d2`](https://github.com/withastro/astro/commit/414eb19d2fcb55758f9d053076773b11b62f4c97) Thanks [@bluwy](https://github.com/bluwy)! - Remove experimental flag for custom client directives

- [#7274](https://github.com/withastro/astro/pull/7274) [`b5213654b`](https://github.com/withastro/astro/commit/b5213654b1b7f3ba573a48d3be688b2bdde7870f) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update base `tsconfig.json` template with `allowJs: true` to provide a better relaxed experience for users unfamilliar with TypeScript. `allowJs` is still set to `false` (its default value) when using the `strictest` preset.

- [#7180](https://github.com/withastro/astro/pull/7180) [`e3b8c6296`](https://github.com/withastro/astro/commit/e3b8c62969d680d1915a122c610d281d6711aa63) Thanks [@lilnasy](https://github.com/lilnasy)! - The Inline Stylesheets RFC is now stable!

  You can now control how Astro bundles your css with a configuration change:

  ```ts
  export default defineConfig({
      ...
      build: {
          inlineStylesheets: "auto"
      }
      ...
  })
  ```

  The options:

  - `inlineStylesheets: "never"`: This is the behavior you are familiar with. Every stylesheet is external, and added to the page via a `<link>` tag. Default.
  - `inlineStylesheets: "auto"`: Small stylesheets are inlined into `<style>` tags and inserted into `<head>`, while larger ones remain external.
  - `inlineStylesheets: "always"`: Every style required by the page is inlined.

  As always, css files in the `public` folder are not affected.

- [#7260](https://github.com/withastro/astro/pull/7260) [`39403c32f`](https://github.com/withastro/astro/commit/39403c32faea58399c61d3344b770f195be60d5b) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Unflags support for `output: 'hybrid'` mode, which enables pre-rendering by default. The additional `experimental.hybridOutput` flag can be safely removed from your configuration.

- [#7109](https://github.com/withastro/astro/pull/7109) [`101f03209`](https://github.com/withastro/astro/commit/101f032098148b3daaac8d46ff1e535b79232e43) Thanks [@ematipico](https://github.com/ematipico)! - Remove experimental flag for the middleware

### Patch Changes

- [#7296](https://github.com/withastro/astro/pull/7296) [`a7e2b37ff`](https://github.com/withastro/astro/commit/a7e2b37ff73871c46895c615846a86a539f45330) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix HTML component type causing an error when imported in the editor

- [#7294](https://github.com/withastro/astro/pull/7294) [`dd1a6b6c9`](https://github.com/withastro/astro/commit/dd1a6b6c941aeb7af934bd12db22412af262f5a1) Thanks [@matthewp](https://github.com/matthewp)! - Fix cookies not being set by middleware

- [#7197](https://github.com/withastro/astro/pull/7197) [`d72cfa7ca`](https://github.com/withastro/astro/commit/d72cfa7cad758192163712ceb269405659fd14bc) Thanks [@bluwy](https://github.com/bluwy)! - Fix nested astro-island hydration race condition

- [#7262](https://github.com/withastro/astro/pull/7262) [`144813f73`](https://github.com/withastro/astro/commit/144813f7308dcb9de64ebe3f0f2c6cba9ad81eb1) Thanks [@andremralves](https://github.com/andremralves)! - Fix injected scripts not injected to injected routes

- [#7242](https://github.com/withastro/astro/pull/7242) [`890a2bc98`](https://github.com/withastro/astro/commit/890a2bc9891a2449ab99b01b65468f6dddba6b12) Thanks [@JerryWu1234](https://github.com/JerryWu1234)! - remove the white space after the doctype according to the property compressHTML

## 2.5.7

### Patch Changes

- [#7215](https://github.com/withastro/astro/pull/7215) [`6e27f2f6d`](https://github.com/withastro/astro/commit/6e27f2f6dbd52f980c487e875faf1b066f65cffd) Thanks [@bmenant](https://github.com/bmenant)! - Node adapter fallbacks to `:authority` http2 pseudo-header when `host` is nullish.

- [#7233](https://github.com/withastro/astro/pull/7233) [`96ae37eb0`](https://github.com/withastro/astro/commit/96ae37eb09f7406f40fba93e14b2a26ccd46640c) Thanks [@bluwy](https://github.com/bluwy)! - Fix `getViteConfig` and Vitest setup with content collections

- [#7136](https://github.com/withastro/astro/pull/7136) [`fea306936`](https://github.com/withastro/astro/commit/fea30693609cc517d8660972151f4d12a0dd4e82) Thanks [@johannesspohr](https://github.com/johannesspohr)! - Render arrays of components in parallel

- [#7257](https://github.com/withastro/astro/pull/7257) [`5156c4f90`](https://github.com/withastro/astro/commit/5156c4f90e0922f62d25fa0c82bbefae39f4c2b6) Thanks [@thiti-y](https://github.com/thiti-y)! - fix: build fail upon have 'process.env' in \*.md file.

- [#7268](https://github.com/withastro/astro/pull/7268) [`9e7366567`](https://github.com/withastro/astro/commit/9e7366567e2b83d46a46db35e74ad508d1978039) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: ignore `.json` files within content collection directories starting with an `_` underscore.

- [#7185](https://github.com/withastro/astro/pull/7185) [`339529fc8`](https://github.com/withastro/astro/commit/339529fc820bac2d514b63198ecf54a1d88c0917) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Bring back improved style and script handling across content collection files. This addresses bugs found in a previous release to `@astrojs/markdoc`.

## 2.5.6

### Patch Changes

- [#7193](https://github.com/withastro/astro/pull/7193) [`8b041bf57`](https://github.com/withastro/astro/commit/8b041bf57c76830c4070330270521e05d8e58474) Thanks [@ematipico](https://github.com/ematipico)! - Refactor how pages are emitted during the internal bundling. Now each
  page is emitted as a separate entry point.

- [#7218](https://github.com/withastro/astro/pull/7218) [`6c7df28ab`](https://github.com/withastro/astro/commit/6c7df28ab34b756b8426443bf6976e24d4611a62) Thanks [@bluwy](https://github.com/bluwy)! - Fix CSS deduping and missing chunks

- [#7235](https://github.com/withastro/astro/pull/7235) [`ee2aca80a`](https://github.com/withastro/astro/commit/ee2aca80a71afe843af943b11966fcf77f556cfb) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Prioritize dynamic prerendered routes over dynamic server routes

- [#7192](https://github.com/withastro/astro/pull/7192) [`7851f9258`](https://github.com/withastro/astro/commit/7851f9258fae2f54795470253df9ce4bcd5f9cb0) Thanks [@ematipico](https://github.com/ematipico)! - Detect `mdx` files using their full extension

- [#7244](https://github.com/withastro/astro/pull/7244) [`bef3a75db`](https://github.com/withastro/astro/commit/bef3a75dbc48d584daff9f7f3d5a8937b0356170) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Remove the auto-generated `$entry` variable for Markdoc entries. To access frontmatter as a variable, you can pass `entry.data` as a prop where you render your content:

  ```astro
  ---
  import { getEntry } from 'astro:content';

  const entry = await getEntry('docs', 'why-markdoc');
  const { Content } = await entry.render();
  ---

  <Content frontmatter={entry.data} />
  ```

- [#7204](https://github.com/withastro/astro/pull/7204) [`52af9ad18`](https://github.com/withastro/astro/commit/52af9ad18840ffa4e2996386c82cbe34d9fd076a) Thanks [@bluwy](https://github.com/bluwy)! - Add error message if `Astro.glob` is called outside of an Astro file

- [#7246](https://github.com/withastro/astro/pull/7246) [`f5063d0a0`](https://github.com/withastro/astro/commit/f5063d0a01e3179da902fdc0a2b22f88cb3c95c7) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix content collection build errors for empty collections or underscore files of type `.json`.

- [#7062](https://github.com/withastro/astro/pull/7062) [`cf621340b`](https://github.com/withastro/astro/commit/cf621340b00fda441f4ef43196c0363d09eae70c) Thanks [@wulinsheng123](https://github.com/wulinsheng123)! - fix miss a head when the templaterender has a promise

- [#7189](https://github.com/withastro/astro/pull/7189) [`2bda7fb0b`](https://github.com/withastro/astro/commit/2bda7fb0bce346f7725086980e1648e2636bbefb) Thanks [@elevatebart](https://github.com/elevatebart)! - fix: add astro-static-slot to the list of inert tags in astro css

- [#7219](https://github.com/withastro/astro/pull/7219) [`af3c5a2e2`](https://github.com/withastro/astro/commit/af3c5a2e25bd3e7b2a3f7f08e41ee457093c8cb1) Thanks [@bluwy](https://github.com/bluwy)! - Use `AstroError` for `Astro.glob` errors

- [#7139](https://github.com/withastro/astro/pull/7139) [`f2f18b440`](https://github.com/withastro/astro/commit/f2f18b44055c6334a39d6379de88fe41e518aa1e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - The `src` property returned by ESM importing images with `astro:assets` is now an absolute path, unlocking support for importing images outside the project.

- Updated dependencies [[`bf63f615f`](https://github.com/withastro/astro/commit/bf63f615fc1b97d6fb84db55f7639084e3ada5af)]:
  - @astrojs/webapi@2.2.0

## 2.5.5

### Patch Changes

- [#6832](https://github.com/withastro/astro/pull/6832) [`904131aec`](https://github.com/withastro/astro/commit/904131aec3bacb2824ad60457a45772eba27b5ab) Thanks [@wulinsheng123](https://github.com/wulinsheng123)! - fix a bug when Fragment is as a slot

- [#7178](https://github.com/withastro/astro/pull/7178) [`57e65d247`](https://github.com/withastro/astro/commit/57e65d247f67de61bcc3a585c2254feb61ed2e74) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: revert Markdoc asset bleed changes. Production build issues were discovered that deserve a different fix.

## 2.5.4

### Patch Changes

- [#7125](https://github.com/withastro/astro/pull/7125) [`4ce8bf7c6`](https://github.com/withastro/astro/commit/4ce8bf7c62d2b19ff7bd3dd0fbad88fcac10feaa) Thanks [@bluwy](https://github.com/bluwy)! - Make vite-plugin-content-virtual-mod run `getEntrySlug` 10 at a time to prevent `EMFILE: too many open files` error

- [#7166](https://github.com/withastro/astro/pull/7166) [`626dd41d0`](https://github.com/withastro/astro/commit/626dd41d0a80155f59962e3a1b70d8dfd2719d25) Thanks [@ematipico](https://github.com/ematipico)! - Move generation of renderers code into their own file

- [#7174](https://github.com/withastro/astro/pull/7174) [`92d1f017e`](https://github.com/withastro/astro/commit/92d1f017e5c0a921973e028b90c7975e74dce433) Thanks [@ematipico](https://github.com/ematipico)! - Remove restriction around serialisable data for `Astro.locals`

- [#7172](https://github.com/withastro/astro/pull/7172) [`2ca94269e`](https://github.com/withastro/astro/commit/2ca94269ed0b5046033c47985ef50b7e7a637caf) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add types for `import.meta.env.ASSETS_PREFIX` and `import.meta.env.SITE`

- [#7134](https://github.com/withastro/astro/pull/7134) [`5b6a0312a`](https://github.com/withastro/astro/commit/5b6a0312a822565404a6334576677fc574cfcd56) Thanks [@alexvuka1](https://github.com/alexvuka1)! - value of var can be undefined when using `define:vars`

- [#7171](https://github.com/withastro/astro/pull/7171) [`79ba74832`](https://github.com/withastro/astro/commit/79ba74832fc46e6946c8235c33e9acfbb3a4139b) Thanks [@bluwy](https://github.com/bluwy)! - Prevent Vite watching on Astro config load

## 2.5.3

### Patch Changes

- [#6758](https://github.com/withastro/astro/pull/6758) [`f558a9e20`](https://github.com/withastro/astro/commit/f558a9e2056fc8f2e2d5814e74f199e398159fc4) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Improve style and script handling across content collection files. This addresses style bleed present in `@astrojs/markdoc` v0.1.0

- [#7143](https://github.com/withastro/astro/pull/7143) [`b41963b77`](https://github.com/withastro/astro/commit/b41963b775149b802eea9e12c5fe266bb9a02944) Thanks [@johannesspohr](https://github.com/johannesspohr)! - Render 404 page content when a `Response` with status 404 is returned from a page

## 2.5.2

### Patch Changes

- [#7144](https://github.com/withastro/astro/pull/7144) [`ba0636240`](https://github.com/withastro/astro/commit/ba0636240996f9f082d122a8414240196881cb96) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixed an issue where scripts that weren't safe to inline were inlined.

- [#7150](https://github.com/withastro/astro/pull/7150) [`8f418d13c`](https://github.com/withastro/astro/commit/8f418d13c5d5c9c40f05020205f24380b718654b) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - fix no matched path when using `getStaticPaths` without `prerender` export.

## 2.5.1

### Patch Changes

- [#7128](https://github.com/withastro/astro/pull/7128) [`72f686a68`](https://github.com/withastro/astro/commit/72f686a68930de52f9a274c13c98acad59925b31) Thanks [@johannesspohr](https://github.com/johannesspohr)! - Fix routes created by `injectRoute` for SSR

- [#7132](https://github.com/withastro/astro/pull/7132) [`319a0a7a0`](https://github.com/withastro/astro/commit/319a0a7a0a6a950387c942b467746d590bb32fda) Thanks [@ematipico](https://github.com/ematipico)! - Emit middleware as an entrypoint during build

- [#7036](https://github.com/withastro/astro/pull/7036) [`852d59a8d`](https://github.com/withastro/astro/commit/852d59a8d68e124f10852609e0f1619d5838ac76) Thanks [@ematipico](https://github.com/ematipico)! - Emit pages as dynamic import chunks during the build

- [#7126](https://github.com/withastro/astro/pull/7126) [`530fb9ebe`](https://github.com/withastro/astro/commit/530fb9ebee77646921ec29d45d9b66484bdfb521) Thanks [@bluwy](https://github.com/bluwy)! - Add route information when warning of `getStaticPaths()` ignored

- [#7118](https://github.com/withastro/astro/pull/7118) [`3257dd289`](https://github.com/withastro/astro/commit/3257dd28901c785a6a661211b98c5ef2cb3b9aa4) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix unnecessary warning showing on start when a collection folder was empty. The warning was also enhanced to add more information about possible causes.

## 2.5.0

### Minor Changes

- [#7071](https://github.com/withastro/astro/pull/7071) [`e186ecc5e`](https://github.com/withastro/astro/commit/e186ecc5e292de8c6a2c441a2d588512c0813068) Thanks [@johannesspohr](https://github.com/johannesspohr)! - Render sibling components in parallel

- [#6850](https://github.com/withastro/astro/pull/6850) [`c6d7ebefd`](https://github.com/withastro/astro/commit/c6d7ebefdd554a9ef29cfeb426ac55cab80d6473) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Content collections now support data formats including JSON and YAML. You can also create relationships, or references, between collections to pull information from one collection entry into another. Learn more on our [updated Content Collections docs](https://docs.astro.build/en/guides/content-collections/).

- [#6991](https://github.com/withastro/astro/pull/6991) [`719002ca5`](https://github.com/withastro/astro/commit/719002ca5b128744fb4316d4a52c5dcd46a42759) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Enable experimental support for hybrid SSR with pre-rendering enabled by default

  **astro.config.mjs**

  ```js
  import { defineConfig } from 'astro/config';
  export default defineConfig({
    output: 'hybrid',
    experimental: {
      hybridOutput: true,
    },
  });
  ```

  Then add `export const prerender =  false` to any page or endpoint you want to opt-out of pre-rendering.

  **src/pages/contact.astro**

  ```astro
  ---
  export const prerender = false;

  if (Astro.request.method === 'POST') {
    // handle form submission
  }
  ---

  <form method="POST">
    <input type="text" name="name" />
    <input type="email" name="email" />
    <button type="submit">Submit</button>
  </form>
  ```

- [#7074](https://github.com/withastro/astro/pull/7074) [`73ec6f6c1`](https://github.com/withastro/astro/commit/73ec6f6c16cadb71dafe9f664f0debde072c3173) Thanks [@bluwy](https://github.com/bluwy)! - Integrations can add new `client:` directives through the `astro:config:setup` hook's `addClientDirective()` API. To enable this API, the user needs to set `experimental.customClientDirectives` to `true` in their config.

  ```js
  import { defineConfig } from 'astro/config';
  import onClickDirective from 'astro-click-directive';

  export default defineConfig({
    integrations: [onClickDirective()],
    experimental: {
      customClientDirectives: true,
    },
  });
  ```

  ```js
  export default function onClickDirective() {
    return {
      hooks: {
        'astro:config:setup': ({ addClientDirective }) => {
          addClientDirective({
            name: 'click',
            entrypoint: 'astro-click-directive/click.js',
          });
        },
      },
    };
  }
  ```

  ```astro
  <Counter client:click />
  ```

  The client directive file (e.g. `astro-click-directive/click.js`) should export a function of type `ClientDirective`:

  ```ts
  import type { ClientDirective } from 'astro';

  const clickDirective: ClientDirective = (load, opts, el) => {
    window.addEventListener(
      'click',
      async () => {
        const hydrate = await load();
        await hydrate();
      },
      { once: true }
    );
  };

  export default clickDirective;
  ```

- [#6706](https://github.com/withastro/astro/pull/6706) [`763ff2d1e`](https://github.com/withastro/astro/commit/763ff2d1e44f54b899d7c65386f1b4b877c95737) Thanks [@wulinsheng123](https://github.com/wulinsheng123)! - Adds an opt-in way to minify the HTML output.

  Using the `compressHTML` option Astro will remove whitespace from Astro components. This only applies to components written in `.astro` format and happens in the compiler to maximize performance. You can enable with:

  ```js
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    compressHTML: true,
  });
  ```

  Compression occurs both in development mode and in the final build.

- [#7069](https://github.com/withastro/astro/pull/7069) [`c1669c001`](https://github.com/withastro/astro/commit/c1669c0011eecfe65a459d727848c18c189a54ca) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Added `Polymorphic` type helper to `astro/types` to easily create polymorphic components:

  ```astro
  ---
  import { HTMLTag, Polymorphic } from 'astro/types';

  type Props<Tag extends HTMLTag> = Polymorphic<{ as: Tag }>;

  const { as: Tag, ...props } = Astro.props;
  ---

  <Tag {...props} />
  ```

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

- [#7102](https://github.com/withastro/astro/pull/7102) [`4516d7b22`](https://github.com/withastro/astro/commit/4516d7b22c5979cde4537f196b53ae2826ba9561) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix image services not being usable on Edge runtimes

- [#7044](https://github.com/withastro/astro/pull/7044) [`914c439bc`](https://github.com/withastro/astro/commit/914c439bccee9fec002c6d92beaa501c398e62ac) Thanks [@Steffan153](https://github.com/Steffan153)! - Escape closing script tag with `define:vars`

- [#6851](https://github.com/withastro/astro/pull/6851) [`e9fc2c221`](https://github.com/withastro/astro/commit/e9fc2c2213036d47cd30a47a6cdad5633481a0f8) Thanks [@timozander](https://github.com/timozander)! - Added warning message when using unsupported file extensions in pages/

- [#7106](https://github.com/withastro/astro/pull/7106) [`075eee08f`](https://github.com/withastro/astro/commit/075eee08f2e2b0baea008b97f3523f2cb937ee44) Thanks [@ematipico](https://github.com/ematipico)! - Fix middleware for API endpoints that use `Response`, and log a warning for endpoints that don't use `Response`.

- [#7110](https://github.com/withastro/astro/pull/7110) [`fc52681ba`](https://github.com/withastro/astro/commit/fc52681ba2f8fe8bcd92eeedf3c6a52fd86a390e) Thanks [@delucis](https://github.com/delucis)! - Fix formatting in the `NoMatchingRenderer` error message.

- [#7095](https://github.com/withastro/astro/pull/7095) [`fb84622af`](https://github.com/withastro/astro/commit/fb84622af04f795de8d17f24192de105f70fe910) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Generate heading `id`s and populate the `headings` property for all Markdoc files

- [#7011](https://github.com/withastro/astro/pull/7011) [`cada10a46`](https://github.com/withastro/astro/commit/cada10a466f81f8edb0aa664f9cffdb6b5b8f307) Thanks [@TheOtterlord](https://github.com/TheOtterlord)! - Throw an error when unknown experimental keys are present

- [#7091](https://github.com/withastro/astro/pull/7091) [`cd410c5eb`](https://github.com/withastro/astro/commit/cd410c5eb71f825259279c27c4c39d0ad282c3f0) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Fix double prepended forward slash in SSR

- [#7108](https://github.com/withastro/astro/pull/7108) [`410428672`](https://github.com/withastro/astro/commit/410428672ed97bba7ca0b3352c1a7ee564921462) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix imports using ?raw and ?url not working when `experimental.assets` is enabled

- Updated dependencies [[`826e02890`](https://github.com/withastro/astro/commit/826e0289005f645b902375b98d5549c6a95ccafa)]:
  - @astrojs/markdown-remark@2.2.1

## 2.4.5

### Patch Changes

- [#7000](https://github.com/withastro/astro/pull/7000) [`c87d42e76`](https://github.com/withastro/astro/commit/c87d42e766d02db5352671cbf074dd637bdb23e0) Thanks [@craigjennings11](https://github.com/craigjennings11)! - Remove 'paths' requirement for tsconfig path aliasing

- [#7055](https://github.com/withastro/astro/pull/7055) [`4f1073a6a`](https://github.com/withastro/astro/commit/4f1073a6a4f3e5a4fc9df96a2ae59f2e929703fe) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix astro:assets interfering with SSR query params ending with image extensions

## 2.4.4

### Patch Changes

- [#7047](https://github.com/withastro/astro/pull/7047) [`48395c815`](https://github.com/withastro/astro/commit/48395c81522f7527126699c4f185f7b4488a4b9a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `/_image` endpoint not being prefixed with the `base` path in build SSR

- [#6916](https://github.com/withastro/astro/pull/6916) [`630f8c8ef`](https://github.com/withastro/astro/commit/630f8c8ef68fedfa393899c13a072e50145895e8) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add fast lookups for content collection entries when using `getEntryBySlug()`. This generates a lookup map to ensure O(1) retrieval.

## 2.4.3

### Patch Changes

- [#7034](https://github.com/withastro/astro/pull/7034) [`c00997033`](https://github.com/withastro/astro/commit/c0099703338cf81e2b381e6e754c73b442db4eab) Thanks [@bluwy](https://github.com/bluwy)! - Fix `astro:assets` SSR error

- [#7032](https://github.com/withastro/astro/pull/7032) [`157357e1f`](https://github.com/withastro/astro/commit/157357e1fb6ff2c14a717230cc485fb76a3fea03) Thanks [@raulfdm](https://github.com/raulfdm)! - fix middleware typing export for "moduleResolution: node"

## 2.4.2

### Patch Changes

- [#7009](https://github.com/withastro/astro/pull/7009) [`1d4db68e6`](https://github.com/withastro/astro/commit/1d4db68e64b7c3faf8863bf67f8332aa28e2f34b) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix types from `astro/client` not working properly due to `client-base.d.ts` being an non-ambient declaration file

- [#7010](https://github.com/withastro/astro/pull/7010) [`e9f0dd9b4`](https://github.com/withastro/astro/commit/e9f0dd9b473c4793c958a6c81e743fd9b02b4f64) Thanks [@ematipico](https://github.com/ematipico)! - Call `next()` without return anything should work, with a warning

## 2.4.1

### Patch Changes

- [#6995](https://github.com/withastro/astro/pull/6995) [`71332cf96`](https://github.com/withastro/astro/commit/71332cf9697755884e5e2e63d6d2499cc2c5edd1) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Move sharpImageService and squooshImageService functions to `astro/config` so they can be imported

## 2.4.0

### Minor Changes

- [#6990](https://github.com/withastro/astro/pull/6990) [`818252acd`](https://github.com/withastro/astro/commit/818252acda3c00499cea51ffa0f26d4c2ccd3a02) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Generated optimized images are now cached inside the `node_modules/.astro/assets` folder. The cached images will be used to avoid doing extra work and speed up subsequent builds.

- [#6659](https://github.com/withastro/astro/pull/6659) [`80e3d4d3d`](https://github.com/withastro/astro/commit/80e3d4d3d0f7719d8eae5435bba3805503057511) Thanks [@lilnasy](https://github.com/lilnasy)! - Implement Inline Stylesheets RFC as experimental

- [#6771](https://github.com/withastro/astro/pull/6771) [`3326492b9`](https://github.com/withastro/astro/commit/3326492b94f76ed2b0154dd9b9a1a9eb883c1e31) Thanks [@matthewp](https://github.com/matthewp)! - Implements a new class-based scoping strategy

  This implements the [Scoping RFC](https://github.com/withastro/roadmap/pull/543), providing a way to opt in to increased style specificity for Astro component styles.

  This prevents bugs where global styles override Astro component styles due to CSS ordering and the use of element selectors.

  To enable class-based scoping, you can set it in your config:

  ```js
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    scopedStyleStrategy: 'class',
  });
  ```

  Note that the 0-specificity `:where` pseudo-selector is still the default strategy. The intent is to change `'class'` to be the default in 3.0.

- [#6959](https://github.com/withastro/astro/pull/6959) [`cac4a321e`](https://github.com/withastro/astro/commit/cac4a321e814fb805eb0e3ced469e25261a50885) Thanks [@bluwy](https://github.com/bluwy)! - Support `<Code inline />` to output inline code HTML (no `pre` tag)

- [#6721](https://github.com/withastro/astro/pull/6721) [`831b67cdb`](https://github.com/withastro/astro/commit/831b67cdb8250f93f66e3b171fab024652bf80f2) Thanks [@ematipico](https://github.com/ematipico)! - Implements a new experimental middleware in Astro.

  The middleware is available under the following experimental flag:

  ```js
  export default defineConfig({
    experimental: {
      middleware: true,
    },
  });
  ```

  Or via CLI, using the new argument `--experimental-middleware`.

  Create a file called `middleware.{js,ts}` inside the `src` folder, and
  export a `onRequest` function.

  From `astro/middleware`, use the `defineMiddleware` utility to take advantage of type-safety, and use
  the `sequence` utility to chain multiple middleware functions.

  Example:

  ```ts
  import { defineMiddleware, sequence } from 'astro/middleware';

  const redirects = defineMiddleware((context, next) => {
    if (context.request.url.endsWith('/old-url')) {
      return context.redirect('/new-url');
    }
    return next();
  });

  const minify = defineMiddleware(async (context, next) => {
    const repsonse = await next();
    const minifiedHtml = await minifyHtml(response.text());
    return new Response(minifiedHtml, {
      status: 200,
      headers: response.headers,
    });
  });

  export const onRequest = sequence(redirects, minify);
  ```

- [#6932](https://github.com/withastro/astro/pull/6932) [`49514e4ce`](https://github.com/withastro/astro/commit/49514e4ce40fedb39bf7decd2c296258efbdafc7) Thanks [@bluwy](https://github.com/bluwy)! - Upgrade shiki to v0.14.1. This updates the shiki theme colors and adds the theme name to the `pre` tag, e.g. `<pre class="astro-code github-dark">`.

### Patch Changes

- [#6973](https://github.com/withastro/astro/pull/6973) [`0883fd487`](https://github.com/withastro/astro/commit/0883fd4875548a613df122f0b87a1ca8b7a7cf7d) Thanks [@matthewp](https://github.com/matthewp)! - Ensure multiple cookies set in dev result in multiple set-cookie headers

- Updated dependencies [[`49514e4ce`](https://github.com/withastro/astro/commit/49514e4ce40fedb39bf7decd2c296258efbdafc7)]:
  - @astrojs/markdown-remark@2.2.0

## 2.3.4

### Patch Changes

- [#6967](https://github.com/withastro/astro/pull/6967) [`a8a319aef`](https://github.com/withastro/astro/commit/a8a319aef744a64647ee16c7d558d74de6864c6c) Thanks [@bluwy](https://github.com/bluwy)! - Fix `astro-entry` error on build with multiple JSX frameworks

- [#6961](https://github.com/withastro/astro/pull/6961) [`a695e44ae`](https://github.com/withastro/astro/commit/a695e44aed6e2f5d32cb950d4237be6e5657ba98) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix getImage type

- [#6956](https://github.com/withastro/astro/pull/6956) [`367e61776`](https://github.com/withastro/astro/commit/367e61776196a17d61c28daa4dfbabb6244e040c) Thanks [@lilnasy](https://github.com/lilnasy)! - Changed where various parts of the build pipeline look to decide if a page should be prerendered. They now exclusively consider PageBuildData, allowing integrations to participate in the decision.

- [#6969](https://github.com/withastro/astro/pull/6969) [`77270cc2c`](https://github.com/withastro/astro/commit/77270cc2cd06c942d7abf1d882e36d9163edafa5) Thanks [@bluwy](https://github.com/bluwy)! - Avoid removing leading slash for `build.assetsPrefix` value in the build output

- [#6910](https://github.com/withastro/astro/pull/6910) [`895fa07d8`](https://github.com/withastro/astro/commit/895fa07d8b4b8359984e048daca5437e40f44390) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Inline `process.env` boolean values (`0`, `1`, `true`, `false`) during the build. This helps with DCE and allows for better `export const prerender` detection.

- [#6958](https://github.com/withastro/astro/pull/6958) [`72c6bf01f`](https://github.com/withastro/astro/commit/72c6bf01fe49b331ca8ad9206a7506b15caf5b8d) Thanks [@bluwy](https://github.com/bluwy)! - Fix content render imports flow

- [#6952](https://github.com/withastro/astro/pull/6952) [`e5bd084c0`](https://github.com/withastro/astro/commit/e5bd084c01e4f60a157969b50c05ce002f7b63d2) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update allowed Sharp versions to support 0.32.0

## 2.3.3

### Patch Changes

- [#6940](https://github.com/withastro/astro/pull/6940) [`a98df9374`](https://github.com/withastro/astro/commit/a98df9374dec65c678fa47319cb1481b1af123e2) Thanks [@delucis](https://github.com/delucis)! - Support custom 404s added via `injectRoute` or as `src/pages/404.html`

- [#6948](https://github.com/withastro/astro/pull/6948) [`50975f2ea`](https://github.com/withastro/astro/commit/50975f2ea3a59f9e023cc631a9372c0c7986eec9) Thanks [@imchell](https://github.com/imchell)! - Placeholders for slots are cleaned in HTML String that is rendered

- [#6848](https://github.com/withastro/astro/pull/6848) [`ebae1eaf8`](https://github.com/withastro/astro/commit/ebae1eaf87f49399036033c673b513338f7d9c42) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update `experimental.assets`'s `image.service` configuration to allow for a config option in addition to an entrypoint

- [#6953](https://github.com/withastro/astro/pull/6953) [`dc062f669`](https://github.com/withastro/astro/commit/dc062f6695ce577dc569781fc0678c903012c336) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update `astro check` to use version 1.0.0 of the Astro language server

- Updated dependencies [[`ac57b5549`](https://github.com/withastro/astro/commit/ac57b5549f828a17bdbebdaca7ace075307a3c9d)]:
  - @astrojs/telemetry@2.1.1
  - @astrojs/webapi@2.1.1

## 2.3.2

### Patch Changes

- [#6920](https://github.com/withastro/astro/pull/6920) [`b89042553`](https://github.com/withastro/astro/commit/b89042553ec45d5f6bc71747e0f3470ba969e679) Thanks [@bluwy](https://github.com/bluwy)! - Fix tsconfig alias baseUrl handling for "." and ".." imports

## 2.3.1

### Patch Changes

- [#6859](https://github.com/withastro/astro/pull/6859) [`4c7ba4da0`](https://github.com/withastro/astro/commit/4c7ba4da084d7508df91cbac03c2b099a8301e2b) Thanks [@andremralves](https://github.com/andremralves)! - Fix Astro.params does not contain path parameter from URL with non-English characters.

- [#6872](https://github.com/withastro/astro/pull/6872) [`b6154d2d5`](https://github.com/withastro/astro/commit/b6154d2d57bfb77767a3ccf9e91c1ae4051c81bc) Thanks [@bluwy](https://github.com/bluwy)! - Fix hoisted scripts path for linked package Astro components

- [#6862](https://github.com/withastro/astro/pull/6862) [`1f2699461`](https://github.com/withastro/astro/commit/1f2699461d4cdcc8007ae47ebff74ace62eee058) Thanks [@jcdogo](https://github.com/jcdogo)! - Fixes bug with assetsPrefix not being prepended to component-url and renderer-url in astro islands when using SSR mode.

- [#6877](https://github.com/withastro/astro/pull/6877) [`edabf01b4`](https://github.com/withastro/astro/commit/edabf01b44d8c99da160973cd0f779e0a0b93cd7) Thanks [@bluwy](https://github.com/bluwy)! - Upgrade to Vite 4.3

- [#6902](https://github.com/withastro/astro/pull/6902) [`0afff3274`](https://github.com/withastro/astro/commit/0afff32741247bc4c6709a30fc83787f58ec02b7) Thanks [@bluwy](https://github.com/bluwy)! - Disable Vite optimizer for sync and config loading. Improve first page load time for warm server startup.

## 2.3.0

### Minor Changes

- [#6816](https://github.com/withastro/astro/pull/6816) [`8539eb164`](https://github.com/withastro/astro/commit/8539eb1643864ae7e0f5a080915cd75535f7101b) Thanks [@bluwy](https://github.com/bluwy)! - Support tsconfig aliases in CSS `@import`

### Patch Changes

- [#6544](https://github.com/withastro/astro/pull/6544) [`a9c22994e`](https://github.com/withastro/astro/commit/a9c22994e41f92a586d8946988d29e3c62148778) Thanks [@wulinsheng123](https://github.com/wulinsheng123)! - Correctly generate directories for assets when users customise the output via rollup options.

- [#6825](https://github.com/withastro/astro/pull/6825) [`948a6d7be`](https://github.com/withastro/astro/commit/948a6d7be0c76fd1dd8550270bd29821075f799c) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix unnecessary warning when using images inside the `src/content` folder with `experimental.assets`

- Updated dependencies [[`2511d58d5`](https://github.com/withastro/astro/commit/2511d58d586af080a78e5ef8a63020b3e17770db)]:
  - @astrojs/markdown-remark@2.1.4

## 2.2.3

### Patch Changes

- [#6765](https://github.com/withastro/astro/pull/6765) [`6c09ac03b`](https://github.com/withastro/astro/commit/6c09ac03bf8f77ca9c1279dce570e0dcf3d439e3) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Properly include the needed WASM files for the Squoosh service for Netlify and Vercel in SSR

- [#6817](https://github.com/withastro/astro/pull/6817) [`f882bc163`](https://github.com/withastro/astro/commit/f882bc1636d5ce1c3b8faae47df36b4dc758045a) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix sourcemap warnings when using Content Collections and MDX with the `vite.build.sourcemap` option

- [#6819](https://github.com/withastro/astro/pull/6819) [`76dd53e3f`](https://github.com/withastro/astro/commit/76dd53e3f69d596754795710a457a1e570a3bad4) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Fix fallback content showing unexpectedly in some cases

- [#6582](https://github.com/withastro/astro/pull/6582) [`7653cf9e9`](https://github.com/withastro/astro/commit/7653cf9e9fedc6edc6038603248351e276191c3a) Thanks [@bluwy](https://github.com/bluwy)! - Fix CSS chunking and deduping between multiple Astro files and framework components

## 2.2.2

### Patch Changes

- [#6811](https://github.com/withastro/astro/pull/6811) [`60c16db6f`](https://github.com/withastro/astro/commit/60c16db6ff583b0656bc1937814c8bbf06831294) Thanks [@bluwy](https://github.com/bluwy)! - Fix check CLI fs load fallback behaviour

- [#6782](https://github.com/withastro/astro/pull/6782) [`c12ca5ece`](https://github.com/withastro/astro/commit/c12ca5ece34beef0fb53f911515a7c752cc2f3ad) Thanks [@amirhhashemi](https://github.com/amirhhashemi)! - Force error overlay direction to be LTR

## 2.2.1

### Patch Changes

- [#6766](https://github.com/withastro/astro/pull/6766) [`72fed684a`](https://github.com/withastro/astro/commit/72fed684a35f00d80c69bcf6e8af297fed0294fe) Thanks [@Xetera](https://github.com/Xetera)! - Exporting the ImageFunction in astro:content and grouping it under a SchemaContext

- [#6772](https://github.com/withastro/astro/pull/6772) [`45bff6fcc`](https://github.com/withastro/astro/commit/45bff6fccb3f5c71ff24c1ceb48cd532196c90f6) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Allow `import.meta.env` values of `0`, `1`, `true`, and `false` to be used for `export const prerender` statements

- [#6770](https://github.com/withastro/astro/pull/6770) [`52d7a4a01`](https://github.com/withastro/astro/commit/52d7a4a011a3bb722b522fffd88c5fe9a519a196) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updated types to match newer Vite versions

- [#6774](https://github.com/withastro/astro/pull/6774) [`9e88e0f23`](https://github.com/withastro/astro/commit/9e88e0f23c5913c07f7e3e96fa0555219ef710dc) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: remove old `slug()` type from `defineCollection()` helper

- [#6775](https://github.com/withastro/astro/pull/6775) [`fa84f1a7d`](https://github.com/withastro/astro/commit/fa84f1a7d2c290479c75199f16e8de489036d7ea) Thanks [@matthewp](https://github.com/matthewp)! - Support streaming inside of slots

- [#6779](https://github.com/withastro/astro/pull/6779) [`a98f6f418`](https://github.com/withastro/astro/commit/a98f6f418c92261a06ef79624a8c86e288c21eab) Thanks [@matthewp](https://github.com/matthewp)! - Prevent body head content injection in MDX when using layout

- [#6781](https://github.com/withastro/astro/pull/6781) [`7f74326b7`](https://github.com/withastro/astro/commit/7f74326b762bfc174ebe8e37ae03733563e4214f) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix `astro:server:setup` middlewares not applying. This resolves an issue with the Partytown integration in dev.

## 2.2.0

### Minor Changes

- [#6703](https://github.com/withastro/astro/pull/6703) [`a1108e037`](https://github.com/withastro/astro/commit/a1108e037115cdb67d03505286c7d3a4fc2a1ff5) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Move `image()` to come from `schema` instead to fix it not working with refine and inside complex types

  **Migration**:

  Remove the `image` import from `astro:content`, and instead use a function to generate your schema, like such:

  ```ts
  import { defineCollection, z } from 'astro:content';

  defineCollection({
    schema: ({ image }) =>
      z.object({
        image: image().refine((img) => img.width >= 200, {
          message: 'image too small',
        }),
      }),
  });
  ```

- [#6714](https://github.com/withastro/astro/pull/6714) [`ff0430786`](https://github.com/withastro/astro/commit/ff043078630e678348ae4f4757b3015b3b862c16) Thanks [@bluwy](https://github.com/bluwy)! - Add `build.assetsPrefix` option for CDN support. If set, all Astro-generated asset links will be prefixed with it. For example, setting it to `https://cdn.example.com` would generate `https://cdn.example.com/_astro/penguin.123456.png` links.

  Also adds `import.meta.env.ASSETS_PREFIX` environment variable that can be used to manually create asset links not handled by Astro.

### Patch Changes

- [#6753](https://github.com/withastro/astro/pull/6753) [`489dd8d69`](https://github.com/withastro/astro/commit/489dd8d69cdd9d7c243cf8bec96051a914984b9c) Thanks [@bluwy](https://github.com/bluwy)! - Fix `getViteConfig` return type

- [#6744](https://github.com/withastro/astro/pull/6744) [`a1a4f45b5`](https://github.com/withastro/astro/commit/a1a4f45b51a80215fa7598da83bd0d9c5acd20d2) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix remote images in Markdown throwing errors when using `experimental.assets`

- [#6762](https://github.com/withastro/astro/pull/6762) [`8b88e4cf1`](https://github.com/withastro/astro/commit/8b88e4cf15c8bea7942b3985380164e0edf7250b) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Improved error message when an error was encountered while generating types

- [#6719](https://github.com/withastro/astro/pull/6719) [`d54cbe413`](https://github.com/withastro/astro/commit/d54cbe41349e55f8544212ad9320705f07325920) Thanks [@matthewp](https://github.com/matthewp)! - Better errors for when response is already sent

  This adds clearer error messaging when a Response has already been sent to the browser and the developer attempts to use:

  - Astro.cookies.set
  - Astro.redirect

- [#6741](https://github.com/withastro/astro/pull/6741) [`4c347ab51`](https://github.com/withastro/astro/commit/4c347ab51e46f2319d614f8577fe502e3dc816e2) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix content-type header being wrong in dev on images from `astro:assets`

- [#6739](https://github.com/withastro/astro/pull/6739) [`2f2e572e9`](https://github.com/withastro/astro/commit/2f2e572e937fd25451bbc78a05d55b7caa1ca3ec) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Added more types and utilities exports related to `astro:assets` to help building custom image components and image services

- [#6759](https://github.com/withastro/astro/pull/6759) [`7116c021a`](https://github.com/withastro/astro/commit/7116c021a39eac15a6e1264dfbd11bef0f5d618a) Thanks [@bluwy](https://github.com/bluwy)! - Upgrade to Vite 4.2

- Updated dependencies [[`a1a4f45b5`](https://github.com/withastro/astro/commit/a1a4f45b51a80215fa7598da83bd0d9c5acd20d2)]:
  - @astrojs/markdown-remark@2.1.3

## 2.1.9

### Patch Changes

- [#6693](https://github.com/withastro/astro/pull/6693) [`c0b7864a4`](https://github.com/withastro/astro/commit/c0b7864a41dd9f31e5a588208d1ff806d4edf047) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: avoid calling `astro:server:setup` integration hook in production

- [#6676](https://github.com/withastro/astro/pull/6676) [`5e33c51a9`](https://github.com/withastro/astro/commit/5e33c51a9c3c3b731a33f2c4a020a36d1471b78b) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix next and previous links for index routes when using pagination

- [#6717](https://github.com/withastro/astro/pull/6717) [`c2d4ae1cb`](https://github.com/withastro/astro/commit/c2d4ae1cbed622b2fadeb1fe8cc8bbed5f5adc8f) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Dynamically import check command to improve startup speed and prevent Astro from crashing due to language-server stuff

- [#6679](https://github.com/withastro/astro/pull/6679) [`08e92f4f8`](https://github.com/withastro/astro/commit/08e92f4f8ece50e377af5b0caca4ad789e0f23c1) Thanks [@fcFn](https://github.com/fcFn)! - Fix incorrect path to file in error overlay on Win

- [#6649](https://github.com/withastro/astro/pull/6649) [`f0b732d32`](https://github.com/withastro/astro/commit/f0b732d326c609208f30485b9805a84a321a870e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Improve error handling when using `astro:assets`

- [#6710](https://github.com/withastro/astro/pull/6710) [`a0bdf4ce2`](https://github.com/withastro/astro/commit/a0bdf4ce2f36a0ce7045dc9f96c15dc7d9204c47) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix multiple Image / getImage calls with the same image causing multiple duplicate images to be generated

- [#6711](https://github.com/withastro/astro/pull/6711) [`c04ea0d43`](https://github.com/withastro/astro/commit/c04ea0d43cc2aa8ebe520a1def19dd89828cf662) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix InferGetStaticParamsType and InferGetStaticPropsType not working when getStaticPaths wasn't async

- [#6701](https://github.com/withastro/astro/pull/6701) [`46ecf4662`](https://github.com/withastro/astro/commit/46ecf466281450caedff5915cecde7a9fe3fdde0) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove unnecessary `.wasm` files inside build output when possible

## 2.1.8

### Patch Changes

- [#6675](https://github.com/withastro/astro/pull/6675) [`1f783e320`](https://github.com/withastro/astro/commit/1f783e32075c20b13063599696644f5d47b75d8d) Thanks [@matthewp](https://github.com/matthewp)! - Prevent frontmatter errors from crashing the dev server

- [#6688](https://github.com/withastro/astro/pull/6688) [`2e92e9aa9`](https://github.com/withastro/astro/commit/2e92e9aa976735c3ddb647152bb9c4850136e386) Thanks [@JohannesKlauss](https://github.com/JohannesKlauss)! - Add a additional check for `null` on the `req.body` check in `NodeApp.render`.

- [#6578](https://github.com/withastro/astro/pull/6578) [`adecda7d6`](https://github.com/withastro/astro/commit/adecda7d6009793c5d20519a997e3b7afb08ad57) Thanks [@wulinsheng123](https://github.com/wulinsheng123)! - add new flag with open for dev and preview

- [#6680](https://github.com/withastro/astro/pull/6680) [`386336441`](https://github.com/withastro/astro/commit/386336441ad70017eea22db0683591126131db21) Thanks [@koriwi](https://github.com/koriwi)! - Invalidates cache when changing serviceEntryPoint

- [#6653](https://github.com/withastro/astro/pull/6653) [`7c439868a`](https://github.com/withastro/astro/commit/7c439868a3bc7d466418da9af669966014f3d9fe) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Simplify Markdoc configuration with a new `markdoc.config.mjs` file. This lets you import Astro components directly to render as Markdoc tags and nodes, without the need for the previous `components` property. This new configuration also unlocks passing variables to your Markdoc from the `Content` component ([see the new docs](https://docs.astro.build/en/guides/integrations-guide/markdoc/#pass-markdoc-variables)).

  ## Migration

  Move any existing Markdoc config from your `astro.config` to a new `markdoc.config.mjs` file at the root of your project. This should be applied as a default export, with the optional `defineMarkdocConfig()` helper for autocomplete in your editor.

  This example configures an `aside` Markdoc tag. Note that components should be imported and applied to the `render` attribute _directly,_ instead of passing the name as a string:

  ```js
  // markdoc.config.mjs
  import { defineMarkdocConfig } from '@astrojs/markdoc/config';
  import Aside from './src/components/Aside.astro';

  export default defineMarkdocConfig({
    tags: {
      aside: {
        render: Aside,
      },
    },
  });
  ```

  You should also remove the `components` prop from your `Content` components. Since components are imported into your config directly, this is no longer needed.

  ```diff
  ---
  - import Aside from '../components/Aside.astro';
  import { getEntryBySlug } from 'astro:content';

  const entry = await getEntryBySlug('docs', 'why-markdoc');
  const { Content } = await entry.render();
  ---

  <Content
  - components={{ Aside }}
  />
  ```

- [#6639](https://github.com/withastro/astro/pull/6639) [`25cd3e574`](https://github.com/withastro/astro/commit/25cd3e574999c1c7294a089ad8c39df27ccdbf17) Thanks [@tony-sull](https://github.com/tony-sull)! - Fixes an attribute naming mismatch in the definition for <link> elements in astro.JSX

- [#6353](https://github.com/withastro/astro/pull/6353) [`4bf87c64f`](https://github.com/withastro/astro/commit/4bf87c64ff7e9ca49e0f5c27e06bd49faaf60542) Thanks [@wulinsheng123](https://github.com/wulinsheng123)! - Throw better error when a dynamic endpoint without additional extensions is prerendered with `undefined` params.

- [#6643](https://github.com/withastro/astro/pull/6643) [`fc0ed9c53`](https://github.com/withastro/astro/commit/fc0ed9c53cd374860bbdb2503318a55ca09a2662) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix images not having the proper path when using `base`

## 2.1.7

### Patch Changes

- [#6192](https://github.com/withastro/astro/pull/6192) [`b7194103e`](https://github.com/withastro/astro/commit/b7194103e39267bf59dcd6ba00f522e424219d16) Thanks [@erg208](https://github.com/erg208)! - Updated to fix the Node SSR fails on POST with Express JSON middleware

- [#6630](https://github.com/withastro/astro/pull/6630) [`cfcf2e2ff`](https://github.com/withastro/astro/commit/cfcf2e2ffdaa68ace5c84329c05b83559a29d638) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Support automatic image optimization for Markdoc images when using `experimental.assets`. You can [follow our Assets guide](https://docs.astro.build/en/guides/assets/#enabling-assets-in-your-project) to enable this feature in your project. Then, start using relative or aliased image sources in your Markdoc files for automatic optimization:

  ```md
  <!--Relative paths-->

  ![The Milky Way Galaxy](../assets/galaxy.jpg)

  <!--Or configured aliases-->

  ![Houston smiling and looking cute](~/assets/houston-smiling.jpg)
  ```

- [#6647](https://github.com/withastro/astro/pull/6647) [`45da39a86`](https://github.com/withastro/astro/commit/45da39a8642d64eb318840b18dfc2b5ccc6561bc) Thanks [@bluwy](https://github.com/bluwy)! - Fix --mode flag for builds

- [#6638](https://github.com/withastro/astro/pull/6638) [`7daef9a29`](https://github.com/withastro/astro/commit/7daef9a2993b5d457f3d243a1ebfd1dd383b3327) Thanks [@matthewp](https://github.com/matthewp)! - Avoid implicit head injection when a head is in the tree

## 2.1.6

### Patch Changes

- [#6633](https://github.com/withastro/astro/pull/6633) [`9caf2a9cc`](https://github.com/withastro/astro/commit/9caf2a9ccc2fd59af5cb2bb7ede9399fc491d38b) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix failed `astro sync` call when running `astro check`. This change also reverts alias support in CSS styles.

- [#6627](https://github.com/withastro/astro/pull/6627) [`d338b6f74`](https://github.com/withastro/astro/commit/d338b6f74a3e34b494be85d24739bec9b2566faf) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update frontmatter assets to be relative to the current file instead of `src/assets`

## 2.1.5

### Patch Changes

- [#6604](https://github.com/withastro/astro/pull/6604) [`7f7a8504b`](https://github.com/withastro/astro/commit/7f7a8504b5c2df4c99d3025931860c0d50992510) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix using optimized images in Markdown not working

- [#6617](https://github.com/withastro/astro/pull/6617) [`38e6ec21e`](https://github.com/withastro/astro/commit/38e6ec21e266ad8765d8ca2293034123b34e839a) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Fix tsconfig alias regression

- [#6588](https://github.com/withastro/astro/pull/6588) [`f42f47dc6`](https://github.com/withastro/astro/commit/f42f47dc6a91cdb6534dab0ecbf9e8e85f00ba40) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Allow access to content collection entry information (including parsed frontmatter and the entry slug) from your Markdoc using the `$entry` variable:

  ```mdx
  ---
  title: Hello Markdoc!
  ---

  # {% $entry.data.title %}
  ```

- Updated dependencies [[`7f7a8504b`](https://github.com/withastro/astro/commit/7f7a8504b5c2df4c99d3025931860c0d50992510)]:
  - @astrojs/markdown-remark@2.1.2

## 2.1.4

### Patch Changes

- [#6547](https://github.com/withastro/astro/pull/6547) [`04dddd783`](https://github.com/withastro/astro/commit/04dddd783da3235aa9ed523d2856adf86b792b5f) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix images having the wrong width and height when using the new astro:assets features if both dimensions were provided

- [#6566](https://github.com/withastro/astro/pull/6566) [`ea9b3dd72`](https://github.com/withastro/astro/commit/ea9b3dd72b98b3f5a542ca24a275f673faa6c7c5) Thanks [@bluwy](https://github.com/bluwy)! - Support tsconfig aliases in styles

- [#6472](https://github.com/withastro/astro/pull/6472) [`bf024cb34`](https://github.com/withastro/astro/commit/bf024cb3429c5929d98378108230bc946a376b17) Thanks [@wulinsheng123](https://github.com/wulinsheng123)! - don't finish the action of the copy before removing all files.

- [#6556](https://github.com/withastro/astro/pull/6556) [`22955b895`](https://github.com/withastro/astro/commit/22955b895ce4343e282355db64b3a5c1415f3944) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix Invalid Input error when trying to use a custom Image Service

- [#6568](https://github.com/withastro/astro/pull/6568) [`f413446a8`](https://github.com/withastro/astro/commit/f413446a859e497395b3612e44d1540cc6b9dad7) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix image() type to be compatible with ImageMetadata

- [#6559](https://github.com/withastro/astro/pull/6559) [`90e5f87d0`](https://github.com/withastro/astro/commit/90e5f87d03215a833bb6ac91f9548670a25ce659) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Vendor `image-size` to fix CJS-related issues

- [#6576](https://github.com/withastro/astro/pull/6576) [`388190102`](https://github.com/withastro/astro/commit/3881901028cbb586f5a4de1b4953e2d6730458ab) Thanks [@bluwy](https://github.com/bluwy)! - Simplify internal resolver in dev

- [#6536](https://github.com/withastro/astro/pull/6536) [`035c0c4df`](https://github.com/withastro/astro/commit/035c0c4df2a623bcc2f2a1cb9e490df35fa29adc) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix Image component and `getImage` not handling images from public correctly

- [#6601](https://github.com/withastro/astro/pull/6601) [`f112c12b1`](https://github.com/withastro/astro/commit/f112c12b15dfbb278d66699f54809674dd1bded0) Thanks [@bluwy](https://github.com/bluwy)! - Fix plugin apply args when filtering

- [#6586](https://github.com/withastro/astro/pull/6586) [`689884251`](https://github.com/withastro/astro/commit/68988425119255382f94c983796574050006f003) Thanks [@solelychloe](https://github.com/solelychloe)! - fix: Add missing --watch flag for astro check when running astro check --help

- [#6572](https://github.com/withastro/astro/pull/6572) [`fa132e35c`](https://github.com/withastro/astro/commit/fa132e35c23f2cfe368fd0a7239584a2bc5c4f12) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Properly handle empty markdown files in content collections

- [#6555](https://github.com/withastro/astro/pull/6555) [`f5fddafc2`](https://github.com/withastro/astro/commit/f5fddafc248bb1ef57b7349bfecc25539ae2b5ea) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add a `validateOptions` hook to the Image Service API in order to set default options and validate the passed options

- [#6605](https://github.com/withastro/astro/pull/6605) [`283734525`](https://github.com/withastro/astro/commit/28373452503bc6ca88221ffd39a5590e015e4d71) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update tsconfig.json templates to ignore TypeScript 5.0 deprecations for the moment

- [#6583](https://github.com/withastro/astro/pull/6583) [`66858f1f2`](https://github.com/withastro/astro/commit/66858f1f238a0edf6ded2b0f693bc738785d5aa3) Thanks [@francoromanol](https://github.com/francoromanol)! - Fix overflow title in error message

- [#6558](https://github.com/withastro/astro/pull/6558) [`6c465e958`](https://github.com/withastro/astro/commit/6c465e958e088ff55e5b895e67c64c0dfd4277a6) Thanks [@bluwy](https://github.com/bluwy)! - Fix prerendered 404 page handling in SSR

- Updated dependencies [[`90e5f87d0`](https://github.com/withastro/astro/commit/90e5f87d03215a833bb6ac91f9548670a25ce659), [`f5fddafc2`](https://github.com/withastro/astro/commit/f5fddafc248bb1ef57b7349bfecc25539ae2b5ea)]:
  - @astrojs/markdown-remark@2.1.1

## 2.1.3

### Patch Changes

- [#6530](https://github.com/withastro/astro/pull/6530) [`acf78c5e2`](https://github.com/withastro/astro/commit/acf78c5e271ec3d4f589782078e2a2044cc1c391) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix various inaccuracies with types related to the new Assets features:

  - getConfiguredImageService wasn't present on the astro:assets types.
  - ImageMetadata wasn't exported
  - Fixed wrong module declaration for `avif`, `heic` and `heif` files.
  - Add missing module declaration for SVGs imports

- [#6527](https://github.com/withastro/astro/pull/6527) [`04e624d06`](https://github.com/withastro/astro/commit/04e624d062c6ce385f6293afba26f3942c2290c6) Thanks [@bluwy](https://github.com/bluwy)! - Treeshake exported client components that are not imported

- [#6533](https://github.com/withastro/astro/pull/6533) [`cc90d7219`](https://github.com/withastro/astro/commit/cc90d72197e1139195e9545105b9a1d339f38e1b) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Added a warning when trying to use `experimental.assets` with a not compatible adapter

- [#6483](https://github.com/withastro/astro/pull/6483) [`a9a6ae298`](https://github.com/withastro/astro/commit/a9a6ae29812339ea00f3b9afd3de09bd9d3733a9) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix images defined in content collections schemas not working

- [#6537](https://github.com/withastro/astro/pull/6537) [`6a7cf0712`](https://github.com/withastro/astro/commit/6a7cf0712da23e2c095f4bc4f2512e618bceb38e) Thanks [@matthewp](https://github.com/matthewp)! - Prevent astro:content from depending on Node builtins

- [#6488](https://github.com/withastro/astro/pull/6488) [`bfd67ea74`](https://github.com/withastro/astro/commit/bfd67ea749dbc6ffa7c9a671fcc48bea6c04a075) Thanks [@matthewp](https://github.com/matthewp)! - Remove use of createRequire breaking non-Node hosts.

- [#6503](https://github.com/withastro/astro/pull/6503) [`f6eddffa0`](https://github.com/withastro/astro/commit/f6eddffa0414d54767e9f9e1ee5a936b8a20146b) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add caching to `getCollection()` queries for faster SSG production builds

- [#6508](https://github.com/withastro/astro/pull/6508) [`c63874090`](https://github.com/withastro/astro/commit/c6387409062f1d7c2afc93319748ad57086837c5) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Improve content collection error formatting:

  - Bold the collection and entry that failed
  - Consistently list the frontmatter key at the start of every error
  - Rich errors for union types

- [#6485](https://github.com/withastro/astro/pull/6485) [`d637d1ea5`](https://github.com/withastro/astro/commit/d637d1ea5b347b9c724adc895c9006c696ac8fc8) Thanks [@bluwy](https://github.com/bluwy)! - Fix `@astrojs/prism` edgecase with strict package managers

- [#6532](https://github.com/withastro/astro/pull/6532) [`637f9bc72`](https://github.com/withastro/astro/commit/637f9bc728ea7d56fc82a862d761385f0dcd9528) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `env.d.ts` changing types wrongly on every restart when `experimental.assets` is enabled

- [#6460](https://github.com/withastro/astro/pull/6460) [`77a046e88`](https://github.com/withastro/astro/commit/77a046e886c370b737208574b6934f5a1cf2b177) Thanks [@bluwy](https://github.com/bluwy)! - Add default `.npmrc` file when adding the Lit integration through `astro add lit` and using `pnpm`.

## 2.1.2

### Patch Changes

- [#6466](https://github.com/withastro/astro/pull/6466) [`ec0455352`](https://github.com/withastro/astro/commit/ec0455352568ab3ea3c5ec1625f582aa54d15bb7) Thanks [@matthewp](https://github.com/matthewp)! - In dev, load assets relative to the root

## 2.1.1

### Patch Changes

- [#6454](https://github.com/withastro/astro/pull/6454) [`05fc7ae54`](https://github.com/withastro/astro/commit/05fc7ae54c19442730971ea22d38f5dbc88050e5) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add support for ESM importing SVGs when using `astro:assets`

- [#6455](https://github.com/withastro/astro/pull/6455) [`cf0198316`](https://github.com/withastro/astro/commit/cf0198316db91a5df6750401ea3cbd7ce5330836) Thanks [@delucis](https://github.com/delucis)! - Document `image.service` configuration option

- [#6459](https://github.com/withastro/astro/pull/6459) [`964d55246`](https://github.com/withastro/astro/commit/964d55246b73410b1e09b5716914f709a97cb387) Thanks [@bluwy](https://github.com/bluwy)! - Prevent HTML-escape of raw strings in `<script>` and `<style>` tags of Astro JSX

- [#6465](https://github.com/withastro/astro/pull/6465) [`65c07ce1b`](https://github.com/withastro/astro/commit/65c07ce1b6ab8db50d3866bc36c2e387a9281c6c) Thanks [@matthewp](https://github.com/matthewp)! - Fixes ESM imported assets to be root relative

## 2.1.0

### Minor Changes

- [#6150](https://github.com/withastro/astro/pull/6150) [`b087b83fe`](https://github.com/withastro/astro/commit/b087b83fe266c431fe34a07d5c2293cc4ab011c6) Thanks [@morellodev](https://github.com/morellodev)! - Add getStaticPaths type helpers to infer params and props

- [#6344](https://github.com/withastro/astro/pull/6344) [`694918a56`](https://github.com/withastro/astro/commit/694918a56b01104831296be0c25456135a63c784) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add a new experimental flag (`experimental.assets`) to enable our new core Assets story.

  This unlocks a few features:

  - A new built-in image component and JavaScript API to transform and optimize images.
  - Relative images with automatic optimization in Markdown.
  - Support for validating assets using content collections.
  - and more!

  See [Assets (Experimental)](https://docs.astro.build/en/guides/assets/) on our docs site for more information on how to use this feature!

- [#6435](https://github.com/withastro/astro/pull/6435) [`a20610609`](https://github.com/withastro/astro/commit/a20610609863ae3b48afe96819b8f11ae4f414d5) Thanks [@matthewp](https://github.com/matthewp)! - Expose the manifest to plugins via the astro:ssr-manifest virtual module

- [#6394](https://github.com/withastro/astro/pull/6394) [`a4a74ab70`](https://github.com/withastro/astro/commit/a4a74ab70cd2aa0d812a1f6b202c4e240a8913bf) Thanks [@ematipico](https://github.com/ematipico)! - Add `--help` to various commands: `check`, `sync`, `dev`, `preview`, and `build`

- [#6356](https://github.com/withastro/astro/pull/6356) [`75921b3cd`](https://github.com/withastro/astro/commit/75921b3cd916d439f6392c487c21532fde35ed13) Thanks [@ematipico](https://github.com/ematipico)! - Added a new `--watch` flag to the command `astro check`

- [#6213](https://github.com/withastro/astro/pull/6213) [`afbbc4d5b`](https://github.com/withastro/astro/commit/afbbc4d5bfafc1779bac00b41c2a1cb1c90f2808) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updated compilation settings to disable downlevelling for Node 14

### Patch Changes

- [#6209](https://github.com/withastro/astro/pull/6209) [`fec583909`](https://github.com/withastro/astro/commit/fec583909ab62829dc0c1600e2387979365f2b94) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Introduce the (experimental) `@astrojs/markdoc` integration. This unlocks Markdoc inside your Content Collections, bringing support for Astro and UI components in your content. This also improves Astro core internals to make Content Collections extensible to more file types in the future.

  You can install this integration using the `astro add` command:

  ```
  astro add markdoc
  ```

  [Read the `@astrojs/markdoc` documentation](https://docs.astro.build/en/guides/integrations-guide/markdoc/) for usage instructions, and browse the [new `with-markdoc` starter](https://astro.new/with-markdoc) to try for yourself.

- Updated dependencies [[`694918a56`](https://github.com/withastro/astro/commit/694918a56b01104831296be0c25456135a63c784), [`afbbc4d5b`](https://github.com/withastro/astro/commit/afbbc4d5bfafc1779bac00b41c2a1cb1c90f2808)]:
  - @astrojs/markdown-remark@2.1.0
  - @astrojs/telemetry@2.1.0
  - @astrojs/webapi@2.1.0

## 2.0.18

### Patch Changes

- [#6412](https://github.com/withastro/astro/pull/6412) [`cd8469947`](https://github.com/withastro/astro/commit/cd8469947bb63b4233f3459614c5210feac1da96) Thanks [@liruifengv](https://github.com/liruifengv)! - Remove redundant comments when `astro add` update `astro.config.mjs`

- [#6426](https://github.com/withastro/astro/pull/6426) [`e0844852d`](https://github.com/withastro/astro/commit/e0844852d31d0f5680f2710aaa84e3e808aeb88d) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Prevent `?inline` and `?raw` css query suffixes from injecting style tags in development

- Updated dependencies [[`0abd1d3e4`](https://github.com/withastro/astro/commit/0abd1d3e42cf7bf5efb8c41f37e011b933fb0629)]:
  - @astrojs/webapi@2.0.3

## 2.0.17

### Patch Changes

- [#6391](https://github.com/withastro/astro/pull/6391) [`45501c531`](https://github.com/withastro/astro/commit/45501c531bf75f60063e1f8b7ac50f5d8d93eb6f) Thanks [@bluwy](https://github.com/bluwy)! - Teardown compiler after Vite build to free up memory when rendering pages

- [#6392](https://github.com/withastro/astro/pull/6392) [`ee8b2a067`](https://github.com/withastro/astro/commit/ee8b2a067201f94c6b06fbfc094288e068116c60) Thanks [@bluwy](https://github.com/bluwy)! - Run astro sync in build mode

- [#6368](https://github.com/withastro/astro/pull/6368) [`02a7266e3`](https://github.com/withastro/astro/commit/02a7266e3c32c196fe733a5d3480f9e308cb62ee) Thanks [@userquin](https://github.com/userquin)! - Fix regression that caused some stateful Vite plugins to assume they were running in `dev` mode during the `build` and vice versa.

- [#6358](https://github.com/withastro/astro/pull/6358) [`95164bfdd`](https://github.com/withastro/astro/commit/95164bfdd2c1cbe5f1fafeab9e998ee4c85df3e3) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add warning when using headers and encoding in endpoints in SSR

## 2.0.16

### Patch Changes

- [#6363](https://github.com/withastro/astro/pull/6363) [`d94aae776`](https://github.com/withastro/astro/commit/d94aae77656f14f56898d33c6d3f83c59112212e) Thanks [@matthewp](https://github.com/matthewp)! - Fixes cases where head is injected in body when using Astro.slots.render()

- Updated dependencies [[`5aa6580f7`](https://github.com/withastro/astro/commit/5aa6580f775405a4443835bf7eb81f0c65e5aed6)]:
  - @astrojs/webapi@2.0.2
  - @astrojs/telemetry@2.0.1

## 2.0.15

### Patch Changes

- [#6323](https://github.com/withastro/astro/pull/6323) [`5e26bc891`](https://github.com/withastro/astro/commit/5e26bc891cbebb3598acfa760c135a25c548d624) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updated Undici to 5.20.0. This fixes a security issue and handling of cookies in certain cases in dev

- [#6293](https://github.com/withastro/astro/pull/6293) [`a156ecbb7`](https://github.com/withastro/astro/commit/a156ecbb7f4df6a46124a9a12eb712f9163db2ed) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Warn about setting the `allowJs` compiler option only when the `content` directory exists.

- [#6320](https://github.com/withastro/astro/pull/6320) [`ccd72e6bb`](https://github.com/withastro/astro/commit/ccd72e6bb41e570d42b1b158e8124c8e04a1943d) Thanks [@wulinsheng123](https://github.com/wulinsheng123)! - fix #6020

- [#6347](https://github.com/withastro/astro/pull/6347) [`504c7bacb`](https://github.com/withastro/astro/commit/504c7bacb8c1f2308a31e6c412825ba34983ba33) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix internal `getSetCookie` usage for `undici@5.20.x`

- [#6333](https://github.com/withastro/astro/pull/6333) [`63dda6ded`](https://github.com/withastro/astro/commit/63dda6dedd4c6ea1d5ce72e9cf3fe5f88339a927) Thanks [@ematipico](https://github.com/ematipico)! - Correctly emit mode when passing `node` to the command `astro add`

- [#6330](https://github.com/withastro/astro/pull/6330) [`f91a7f376`](https://github.com/withastro/astro/commit/f91a7f376c223f18b4d8fbed81f95f6bea1cef8d) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Ensure prefixed underscore ignores only child paths of the content directory.

## 2.0.14

### Patch Changes

- [#6277](https://github.com/withastro/astro/pull/6277) [`d9474d467`](https://github.com/withastro/astro/commit/d9474d467e9c24bedf9cdb6100de9190ab0274d0) Thanks [@bluwy](https://github.com/bluwy)! - Bump Vite to 4.1

- [#6268](https://github.com/withastro/astro/pull/6268) [`933c651fb`](https://github.com/withastro/astro/commit/933c651fb1126b7ad1ff369cd11307c47949d0b6) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Do not transform `--camelCase` custom properties to `--camel-case` when they're in a `style` attribute.

  This bug fix is backwards-compatible because we will emit both `--camelCase` and `--camel-case` temporarily. This behavior will be removed in a future version of Astro.

- Updated dependencies [[`bb1801013`](https://github.com/withastro/astro/commit/bb1801013708d9efdbbcebc53a564ac375bf4b26)]:
  - @astrojs/webapi@2.0.1

## 2.0.13

### Patch Changes

- [#6248](https://github.com/withastro/astro/pull/6248) [`ef5cea4dc`](https://github.com/withastro/astro/commit/ef5cea4dc5c4ffa33bd57ea0886e6912afb24fec) Thanks [@wulinsheng123](https://github.com/wulinsheng123)! - Deno SSR with prerender=true complains about invalid URL scheme

- [#6257](https://github.com/withastro/astro/pull/6257) [`2fec47848`](https://github.com/withastro/astro/commit/2fec4784871f2b06fd780eb4cb0bb69866c6b065) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: prevent dev server hanging for `getCollection()` calls within a layout when using the `layout` prop

## 2.0.12

### Patch Changes

- [#6238](https://github.com/withastro/astro/pull/6238) [`deacd5443`](https://github.com/withastro/astro/commit/deacd5443aae8d0ee6508e2c442783dcc2e9a014) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: run integration setup hooks during `astro sync`

- [#6244](https://github.com/withastro/astro/pull/6244) [`1c678f7eb`](https://github.com/withastro/astro/commit/1c678f7ebff6b8ea843bf4b49ab73ca942a2a755) Thanks [@bluwy](https://github.com/bluwy)! - Fix hydrate loading path to prevent multiple instance loaded for circular imports

- [#6229](https://github.com/withastro/astro/pull/6229) [`c397be324`](https://github.com/withastro/astro/commit/c397be324f97bb9700da8cd6d845470530b7d18c) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Add support for `.js/.mjs` file extensions for Content Collections configuration file.

## 2.0.11

### Patch Changes

- [#6216](https://github.com/withastro/astro/pull/6216) [`79783fc01`](https://github.com/withastro/astro/commit/79783fc0181153a8e379d3f023422510a7467ead) Thanks [@matthewp](https://github.com/matthewp)! - Fix head injection in body with slots.render() and head buffering

- [#6218](https://github.com/withastro/astro/pull/6218) [`baa2dbb3b`](https://github.com/withastro/astro/commit/baa2dbb3b5678b2bd56fb80df99d386f32e274b7) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: internal content collection error on spaces in file name

- [#6049](https://github.com/withastro/astro/pull/6049) [`8b7cb64da`](https://github.com/withastro/astro/commit/8b7cb64dadfca93c65d62df54754633d398cb2ed) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Preserve `--root` CLI flag when restarting dev server

## 2.0.10

### Patch Changes

- [#6183](https://github.com/withastro/astro/pull/6183) [`436bd0934`](https://github.com/withastro/astro/commit/436bd09341693fc705f2a55d460eed3afa413432) Thanks [@Jutanium](https://github.com/Jutanium)! - Fixes the first-page value of `url.prev` when paginating a spread route at the root

- [#6198](https://github.com/withastro/astro/pull/6198) [`a9bdd9cc4`](https://github.com/withastro/astro/commit/a9bdd9cc4e41512fbe723620c995e6a110032ebf) Thanks [@matthewp](https://github.com/matthewp)! - Fixes usage of Code component in Vercel

- [#6182](https://github.com/withastro/astro/pull/6182) [`938ad514c`](https://github.com/withastro/astro/commit/938ad514cd75c09756cd24223346159172f5fd60) Thanks [@matthewp](https://github.com/matthewp)! - Ensure base configuration appended to content collection styles

- [#6197](https://github.com/withastro/astro/pull/6197) [`c75d319ee`](https://github.com/withastro/astro/commit/c75d319ee6b657402b902b1b46b9d3f2d0e5370b) Thanks [@BryceRussell](https://github.com/BryceRussell)! - Fix `border` and `frame` attribute types on `TableHTMLAttributes` interface

- [#6180](https://github.com/withastro/astro/pull/6180) [`6fa6025b3`](https://github.com/withastro/astro/commit/6fa6025b34b9447e142c4788c0cdc2dfe03f334f) Thanks [@matthewp](https://github.com/matthewp)! - Allow binary data to be returned from api routes in SSG

- [#6196](https://github.com/withastro/astro/pull/6196) [`3390cb844`](https://github.com/withastro/astro/commit/3390cb84443a43eb997f3efeb5ca298a8477aaf0) Thanks [@matthewp](https://github.com/matthewp)! - Fix head injection misplacement with Astro.slots.render()

## 2.0.9

### Patch Changes

- [#6176](https://github.com/withastro/astro/pull/6176) [`8bbdcf17d`](https://github.com/withastro/astro/commit/8bbdcf17dd6c9142c18bc1551ee4854a60bc58cb) Thanks [@matthewp](https://github.com/matthewp)! - Take dynamic import into account in CSS ordering

- [#6170](https://github.com/withastro/astro/pull/6170) [`ec2f2a31d`](https://github.com/withastro/astro/commit/ec2f2a31dec78e5749cdea524ae926a19df300e3) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Show content config errors in overlay, instead of stopping the dev server.

## 2.0.8

### Patch Changes

- [#6168](https://github.com/withastro/astro/pull/6168) [`c0e4b1df9`](https://github.com/withastro/astro/commit/c0e4b1df9fc2279a15eadb8aaa95efdc1c6e9cbf) Thanks [@matthewp](https://github.com/matthewp)! - Fix mixed usage of aliases and relative for client hydration

## 2.0.7

### Patch Changes

- [#6161](https://github.com/withastro/astro/pull/6161) [`f6fc662c3`](https://github.com/withastro/astro/commit/f6fc662c3c59d164584c6287a930fcd1c9086ee6) Thanks [@matthewp](https://github.com/matthewp)! - Prevent ?inline and ?raw CSS from being bundled as CSS

- [#6149](https://github.com/withastro/astro/pull/6149) [`592386b75`](https://github.com/withastro/astro/commit/592386b75541f3b7f7d95c631f86024b7e2d314d) Thanks [@bloycey](https://github.com/bloycey)! - Moved pagination error to AstroErrorData

- [#6153](https://github.com/withastro/astro/pull/6153) [`1b591a143`](https://github.com/withastro/astro/commit/1b591a1431b44eacd239ed8f76809916cabca1db) Thanks [@torchsmith](https://github.com/torchsmith)! - Respect `vite.build.emptyOutDir` setting during `astro build`

- [#6092](https://github.com/withastro/astro/pull/6092) [`bf8d7366a`](https://github.com/withastro/astro/commit/bf8d7366acb57e1b21181cc40fff55a821d8119e) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Ensure vite config (aliases, custom modules, etc) is respected when loading the content collection config

- [#6111](https://github.com/withastro/astro/pull/6111) [`ec38a8921`](https://github.com/withastro/astro/commit/ec38a8921f02a275949abcababe1b8afdf8184a2) Thanks [@e111077](https://github.com/e111077)! - Implement client:only functionality in Lit and add lit to the client:only warning

- [#6124](https://github.com/withastro/astro/pull/6124) [`f20a85b64`](https://github.com/withastro/astro/commit/f20a85b642994f240d8c94260fc55ffa1fd14294) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix outdated error message in `paginate()` function.

- [#6122](https://github.com/withastro/astro/pull/6122) [`9f22ac3d0`](https://github.com/withastro/astro/commit/9f22ac3d097ef2cb3b2bbe5343b8a8a49d83425d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Content collections: Fix accidental "use underscore to ignore" logs for `.DS_Store` files and underscored directory names.

- [#6163](https://github.com/withastro/astro/pull/6163) [`cee70f5c6`](https://github.com/withastro/astro/commit/cee70f5c6ac9b0d2edc1f8a6f8f5043605576026) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix returning hex / base64 images from endpoints not working in dev

- [#6114](https://github.com/withastro/astro/pull/6114) [`ac7fb04d6`](https://github.com/withastro/astro/commit/ac7fb04d6b162f28a337918138d5737e2c0fffad) Thanks [@bluwy](https://github.com/bluwy)! - Fix sourcemap generation when scanning files

- [#6152](https://github.com/withastro/astro/pull/6152) [`d1f5611fe`](https://github.com/withastro/astro/commit/d1f5611febfd020cca4078c71bafe599015edd16) Thanks [@matthewp](https://github.com/matthewp)! - Fix MDX related head placement bugs

  This fixes a variety of head content placement bugs (such as page `<link>`) related to MDX, especially when used in content collections. Issues fixed:

  - Head content being placed in the body instead of the head.
  - Head content missing when rendering an MDX component from within a nested Astro component.

- [#6119](https://github.com/withastro/astro/pull/6119) [`2189170be`](https://github.com/withastro/astro/commit/2189170be523f74f244e84ccab22c655219773ce) Thanks [@matthewp](https://github.com/matthewp)! - Fix hoisted script propagation in content collection pages

- [#6117](https://github.com/withastro/astro/pull/6117) [`32abe49bd`](https://github.com/withastro/astro/commit/32abe49bd073417b480b1b990f432a837c12eb6f) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix polyfills not being available in certain cases

## 2.0.6

### Patch Changes

- [#6107](https://github.com/withastro/astro/pull/6107) [`9bec6bc41`](https://github.com/withastro/astro/commit/9bec6bc410f324a41c67e5d185fa86f78d7625f2) Thanks [@matthewp](https://github.com/matthewp)! - Fixes head contents being placed in body in MDX components

## 2.0.5

### Patch Changes

- [#6052](https://github.com/withastro/astro/pull/6052) [`9793f19ec`](https://github.com/withastro/astro/commit/9793f19ecd4e64cbf3140454fe52aeee2c22c8c9) Thanks [@mayank99](https://github.com/mayank99)! - Error overlay will now show the error's `cause` if available.

- [#6070](https://github.com/withastro/astro/pull/6070) [`f91615f5c`](https://github.com/withastro/astro/commit/f91615f5c04fde36f115dad9110dd75254efd61d) Thanks [@AirBorne04](https://github.com/AirBorne04)! - \* safe guard against TextEncode.encode(HTMLString) [errors on vercel edge]

  - safe guard against html.replace when html is undefined

- [#6064](https://github.com/withastro/astro/pull/6064) [`2fb72c887`](https://github.com/withastro/astro/commit/2fb72c887f71c0a69ab512870d65b8c867774766) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Apply MDX `components` export when rendering as a content collection entry

## 2.0.4

### Patch Changes

- [#6045](https://github.com/withastro/astro/pull/6045) [`41e97158b`](https://github.com/withastro/astro/commit/41e97158ba90d23d346b6e3ff6c7c14b5ecbe903) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improve error handling when an Astro component is rendered manually

- [#6036](https://github.com/withastro/astro/pull/6036) [`e779c6242`](https://github.com/withastro/astro/commit/e779c6242418d1d4102e683ca5b851b764c89688) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improve error handling when top-level `return` is present

## 2.0.3

### Patch Changes

- [#6035](https://github.com/withastro/astro/pull/6035) [`b4432cd6b`](https://github.com/withastro/astro/commit/b4432cd6b65bad685a99fe15867710b0663c13b2) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: Astro component scripts now load in development when using MDX + Content Collections

- [#6024](https://github.com/withastro/astro/pull/6024) [`98a4a914b`](https://github.com/withastro/astro/commit/98a4a914bc47f3da2764b3bdc01577d25fe2e261) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Remove `rawContent()` and `compiledContent()` from MDX import types

- [#6034](https://github.com/withastro/astro/pull/6034) [`071e1dee7`](https://github.com/withastro/astro/commit/071e1dee7e1943be67d1ded39a9af1b7a2aafd02) Thanks [@matthewp](https://github.com/matthewp)! - Ensure CSS injections properly when using multiple layouts

- [#5927](https://github.com/withastro/astro/pull/5927) [`322e059d0`](https://github.com/withastro/astro/commit/322e059d0da9ab0d6a546a111fabda755bd5f1b6) Thanks [@izmttk](https://github.com/izmttk)! - Fix undefined `remarkPluginFrontmatter` after calling `render` method

- [#6006](https://github.com/withastro/astro/pull/6006) [`b994f6f35`](https://github.com/withastro/astro/commit/b994f6f35e29b2d93ff8ddc281a69c0af3cc3edf) Thanks [@tony-sull](https://github.com/tony-sull)! - Makes the `AstroCookies` type available as an import from the main "astro" package

- [#5998](https://github.com/withastro/astro/pull/5998) [`12c68343c`](https://github.com/withastro/astro/commit/12c68343c0aa891037d39d3c9b9378b004be6642) Thanks [@andersk](https://github.com/andersk)! - Update `getCollection()` filter to support type guards _or_ unknown values

## 2.0.2

### Patch Changes

- [#5983](https://github.com/withastro/astro/pull/5983) [`b53e0717b`](https://github.com/withastro/astro/commit/b53e0717b7f6b042baaeec7f87999e99c76c031c) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes a dev server edge case where prerender + getStaticPaths would not 404 on an unmatched route

- [#5992](https://github.com/withastro/astro/pull/5992) [`60b32d585`](https://github.com/withastro/astro/commit/60b32d58565d87e87573eb268408293fc28ec657) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Fix `Astro.url.protocol` when using the @astrojs/node SSR adapter with HTTPS

- [#5971](https://github.com/withastro/astro/pull/5971) [`883e0cc29`](https://github.com/withastro/astro/commit/883e0cc29968d51ed6c7515be035a40b28bafdad) Thanks [@JLarky](https://github.com/JLarky)! - improve error message: change @astrojs/solid to @astrojs/solid-js

- [#5970](https://github.com/withastro/astro/pull/5970) [`dabce6b8c`](https://github.com/withastro/astro/commit/dabce6b8c684f851c3535f8acead06cbef6dce2a) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add type guard support to filters on `getCollection()`

- [#5952](https://github.com/withastro/astro/pull/5952) [`aedf23f85`](https://github.com/withastro/astro/commit/aedf23f8582e32a6b94b81ddba9b323831f2b22a) Thanks [@wulinsheng123](https://github.com/wulinsheng123)! - Fix custom theme handling for `<Code>` component

- Updated dependencies [[`7abb1e905`](https://github.com/withastro/astro/commit/7abb1e9056c4b4fd0abfced347df32a41cdfbf28)]:
  - @astrojs/markdown-remark@2.0.1

## 2.0.1

### Patch Changes

- [#5969](https://github.com/withastro/astro/pull/5969) [`f4c71e5eb`](https://github.com/withastro/astro/commit/f4c71e5eb937ce92cc8803d4a6e19400d22ae611) Thanks [@matthewp](https://github.com/matthewp)! - Fix usage of logger in Vercel Edge

  This protects against usage of `process` global in shimmed environments.

- [#5962](https://github.com/withastro/astro/pull/5962) [`46b6e1426`](https://github.com/withastro/astro/commit/46b6e14265f81ffbf1a7511909d5a9954160b504) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Fix Content Collections not loading config file when there are spaces in the folder tree

- [#5972](https://github.com/withastro/astro/pull/5972) [`02549b8ce`](https://github.com/withastro/astro/commit/02549b8ced18bf193efc407a625d908b65b3979f) Thanks [@bluwy](https://github.com/bluwy)! - Correctly detect Node.js version

## 2.0.0

> **Note**
> This is a detailed changelog of all changes in Astro v2.  
> See our [upgrade guide](https://docs.astro.build/en/guides/upgrade-to/v2/) for an overview of steps needed to upgrade an existing project.

### Major Changes

- [#5687](https://github.com/withastro/astro/pull/5687) [`e2019be6f`](https://github.com/withastro/astro/commit/e2019be6ffa46fa33d92cfd346f9ecbe51bb7144) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Give remark and rehype plugins access to user frontmatter via frontmatter injection. This means `data.astro.frontmatter` is now the _complete_ Markdown or MDX document's frontmatter, rather than an empty object.

  This allows plugin authors to modify existing frontmatter, or compute new properties based on other properties. For example, say you want to compute a full image URL based on an `imageSrc` slug in your document frontmatter:

  ```ts
  export function remarkInjectSocialImagePlugin() {
    return function (tree, file) {
      const { frontmatter } = file.data.astro;
      frontmatter.socialImageSrc = new URL(frontmatter.imageSrc, 'https://my-blog.com/').pathname;
    };
  }
  ```

  When using Content Collections, you can access this modified frontmatter using the `remarkPluginFrontmatter` property returned when rendering an entry.

  **Migration instructions**

  Plugin authors should now **check for user frontmatter when applying defaults.**

  For example, say a remark plugin wants to apply a default `title` if none is present. Add a conditional to check if the property is present, and update if none exists:

  ```diff
  export function remarkInjectTitlePlugin() {
    return function (tree, file) {
      const { frontmatter } = file.data.astro;
  +    if (!frontmatter.title) {
        frontmatter.title = 'Default title';
  +    }
    }
  }
  ```

  This differs from previous behavior, where a Markdown file's frontmatter would _always_ override frontmatter injected via remark or reype.

- [#5891](https://github.com/withastro/astro/pull/5891) [`05caf445d`](https://github.com/withastro/astro/commit/05caf445d4d2728f1010aeb2179a9e756c2fd17d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Remove deprecated Markdown APIs from Astro v0.X. This includes `getHeaders()`, the `.astro` property for layouts, and the `rawContent()` and `compiledContent()` error messages for MDX.

- [#5778](https://github.com/withastro/astro/pull/5778) [`49ab4f231`](https://github.com/withastro/astro/commit/49ab4f231c23b34891c3ee86f4b92bf8d6d267a3) Thanks [@bluwy](https://github.com/bluwy)! - Remove proload to load the Astro config. It will now use NodeJS and Vite to load the config only.

- [#5728](https://github.com/withastro/astro/pull/5728) [`8fb28648f`](https://github.com/withastro/astro/commit/8fb28648f66629741cb976bfe34ccd9d8f55661e) Thanks [@natemoo-re](https://github.com/natemoo-re)! - The previously experimental features `--experimental-error-overlay` and `--experimental-prerender`, both added in v1.7.0, are now the default.

  You'll notice that the error overlay during `astro dev` has a refreshed visual design and provides more context for your errors.

  The `prerender` feature is now enabled by default when using `output: 'server'`. To prerender a particular page, add `export const prerender = true` to your frontmatter.

  > **Warning**
  > Integration authors that previously relied on the exact structure of Astro's v1.0 build output may notice some changes to our output file structure. Please test your integrations to ensure compatability.
  > Users that have configured a custom `vite.build.rollupOptions.output.chunkFileNames` should ensure that their Astro project is configured as an ESM Node project. Either include `"type": "module"` in your root `package.json` file or use the `.mjs` extension for `chunkFileNames`.

- [#5782](https://github.com/withastro/astro/pull/5782) [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 14. Minimum supported Node version is now >=16.12.0

- [#5771](https://github.com/withastro/astro/pull/5771) [`259a539d7`](https://github.com/withastro/astro/commit/259a539d7d70c783330c797794b15716921629cf) Thanks [@matthewp](https://github.com/matthewp)! - Removes support for astroFlavoredMarkdown

  In 1.0 Astro moved the old Astro Flavored Markdown (also sometimes called Components in Markdown) to a legacy feature. This change removes the `legacy.astroFlavoredMarkdown` option completely.

  In 2.0 this feature will not be available in Astro at all. We recommend migration to MDX for those were still using this feature in 1.x.

- [#5941](https://github.com/withastro/astro/pull/5941) [`304823811`](https://github.com/withastro/astro/commit/304823811eddd8e72aa1d8e2d39b40ab5cda3565) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Content collections: Introduce a new `slug` frontmatter field for overriding the generated slug. This replaces the previous `slug()` collection config option from Astro 1.X and the 2.0 beta.

  When present in a Markdown or MDX file, this will override the generated slug for that entry.

  ```diff
  # src/content/blog/post-1.md
  ---
  title: Post 1
  + slug: post-1-custom-slug
  ---
  ```

  Astro will respect this slug in the generated `slug` type and when using the `getEntryBySlug()` utility:

  ```astro
  ---
  import { getEntryBySlug } from 'astro:content';

  // Retrieve `src/content/blog/post-1.md` by slug with type safety
  const post = await getEntryBySlug('blog', 'post-1-custom-slug');
  ---
  ```

  **Migration**

  If you relied on the `slug()` config option, you will need to move all custom slugs to `slug` frontmatter properties in each collection entry.

  Additionally, Astro no longer allows `slug` as a collection schema property. This ensures Astro can manage the `slug` property for type generation and performance. Remove this property from your schema and any relevant `slug()` configuration:

  ```diff
  const blog = defineCollection({
    schema: z.object({
  -   slug: z.string().optional(),
    }),
  - slug({ defaultSlug, data }) {
  -   return data.slug ?? defaultSlug;
  - },
  })
  ```

- [#5753](https://github.com/withastro/astro/pull/5753) [`302e0ef8f`](https://github.com/withastro/astro/commit/302e0ef8f5d5232e3348afe680e599f3e537b5c5) Thanks [@bluwy](https://github.com/bluwy)! - Default preview host to `localhost` instead of `127.0.0.1`. This allows the static server and integration preview servers to serve under ipv6.

- [#5716](https://github.com/withastro/astro/pull/5716) [`dd56c1941`](https://github.com/withastro/astro/commit/dd56c19411b126439b8bc42d681b6fa8c06e8c61) Thanks [@bluwy](https://github.com/bluwy)! - Remove MDX Fragment hack. This was used by `@astrojs/mdx` to access the `Fragment` component, but isn't required anymore since `@astrojs/mdx` v0.12.1.

- [#5584](https://github.com/withastro/astro/pull/5584) [`9963c6e4d`](https://github.com/withastro/astro/commit/9963c6e4d50c392c3d1ac4492237020f15ccb1de) & [#5842](https://github.com/withastro/astro/pull/5842) [`c4b0cb8bf`](https://github.com/withastro/astro/commit/c4b0cb8bf2b41887d9106440bb2e70d421a5f481) Thanks [@wulinsheng123](https://github.com/wulinsheng123) and [@natemoo-re](https://github.com/natemoo-re)! - **Breaking Change**: client assets are built to an `_astro` directory in the build output directory. Previously these were built to various locations, including `assets/`, `chunks/` and the root of build output.

  You can control this location with the new `build` configuration option named `assets`.

- [#5893](https://github.com/withastro/astro/pull/5893) [`be901dc98`](https://github.com/withastro/astro/commit/be901dc98c4a7f6b5536540aa8f7ba5108e939a0) Thanks [@matthewp](https://github.com/matthewp)! - Rename `getEntry` to `getEntryBySlug`

  This change moves `getEntry` to `getEntryBySlug` and accepts a slug rather than an id.

  In order to improve support in `[id].astro` routes, particularly in SSR where you do not know what the id of a collection is. Using `getEntryBySlug` instead allows you to map the `[id]` param in your route to the entry. You can use it like this:

  ```astro
  ---
  import { getEntryBySlug } from 'astro:content';

  const entry = await getEntryBySlug('docs', Astro.params.id);

  if (!entry) {
    return new Response(null, {
      status: 404,
    });
  }
  ---

  <!-- You have an entry! Use it! -->
  ```

- [#5685](https://github.com/withastro/astro/pull/5685) [`f6cf92b48`](https://github.com/withastro/astro/commit/f6cf92b48317a19a3840ad781b77d6d3cae143bb) Thanks [@bluwy](https://github.com/bluwy)! - Upgrade to Vite 4. Please see its [migration guide](https://vitejs.dev/guide/migration.html) for more information.

- [#5724](https://github.com/withastro/astro/pull/5724) [`16c7d0bfd`](https://github.com/withastro/astro/commit/16c7d0bfd49d2b9bfae45385f506bcd642f9444a) Thanks [@bluwy](https://github.com/bluwy)! - Remove outdated Vue info log. Remove `toString` support for `RenderTemplateResult`.

- [#5684](https://github.com/withastro/astro/pull/5684) [`a9c292026`](https://github.com/withastro/astro/commit/a9c2920264e36cc5dc05f4adc1912187979edb0d) & [#5769](https://github.com/withastro/astro/pull/5769) [`93e633922`](https://github.com/withastro/astro/commit/93e633922c2e449df3bb2357b3683af1d3c0e07b) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Refine Markdown and MDX configuration options for ease-of-use.

  - **Markdown**

    - **Replace the `extendDefaultPlugins` option** with a `gfm` boolean and a `smartypants` boolean. These are enabled by default, and can be disabled to remove GitHub-Flavored Markdown and SmartyPants.

    - Ensure GitHub-Flavored Markdown and SmartyPants are applied whether or not custom `remarkPlugins` or `rehypePlugins` are configured. If you want to apply custom plugins _and_ remove Astro's default plugins, manually set `gfm: false` and `smartypants: false` in your config.

  - **Migrate `extendDefaultPlugins` to `gfm` and `smartypants`**

    You may have disabled Astro's built-in plugins (GitHub-Flavored Markdown and Smartypants) with the `extendDefaultPlugins` option. This has now been split into 2 flags to disable each plugin individually:

    - `markdown.gfm` to disable GitHub-Flavored Markdown
    - `markdown.smartypants` to disable SmartyPants

    ```diff
    // astro.config.mjs
    import { defineConfig } from 'astro/config';

    export default defineConfig({
      markdown: {
    -   extendDefaultPlugins: false,
    +   smartypants: false,
    +   gfm: false,
      }
    });
    ```

    Additionally, applying remark and rehype plugins **no longer disables** `gfm` and `smartypants`. You will need to opt-out manually by setting `gfm` and `smartypants` to `false`.

  - **MDX**

    - Support _all_ Markdown configuration options (except `drafts`) from your MDX integration config. This includes `syntaxHighlighting` and `shikiConfig` options to further customize the MDX renderer.

    - Simplify `extendPlugins` to an `extendMarkdownConfig` option. MDX options will default to their equivalent in your Markdown config. By setting `extendMarkdownConfig` to false, you can "eject" to set your own syntax highlighting, plugins, and more.

  - **Migrate MDX's `extendPlugins` to `extendMarkdownConfig`**

    You may have used the `extendPlugins` option to manage plugin defaults in MDX. This has been replaced by 3 flags:

    - `extendMarkdownConfig` (`true` by default) to toggle Markdown config inheritance. This replaces the `extendPlugins: 'markdown'` option.
    - `gfm` (`true` by default) and `smartypants` (`true` by default) to toggle GitHub-Flavored Markdown and SmartyPants in MDX. This replaces the `extendPlugins: 'defaults'` option.

- [#5717](https://github.com/withastro/astro/pull/5717) [`a3a7fc929`](https://github.com/withastro/astro/commit/a3a7fc9298e6d88abb4b7bee1e58f05fa9558cf1) Thanks [@bluwy](https://github.com/bluwy)! - Remove `style.postcss` Astro config. Refactor tailwind integration to configure through `vite` instead. Also disables `autoprefixer` in dev.

- [#5825](https://github.com/withastro/astro/pull/5825) [`52209ca2a`](https://github.com/withastro/astro/commit/52209ca2ad72a30854947dcb3a90ab4db0ac0a6f) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Baseline the experimental `contentCollections` flag. You're free to remove this from your astro config!

  ```diff
  import { defineConfig } from 'astro/config';

  export default defineConfig({
  - experimental: { contentCollections: true }
  })

  ```

- [#5707](https://github.com/withastro/astro/pull/5707) [`5eba34fcc`](https://github.com/withastro/astro/commit/5eba34fcc663def20bdf6e0daad02a6a5472776b) Thanks [@bluwy](https://github.com/bluwy)! - Remove deprecated `Astro` global APIs, including `Astro.resolve`, `Astro.fetchContent`, and `Astro.canonicalURL`.

  - **`Astro.resolve`**

    You can resolve asset paths using `import` instead. For example:

    ```astro
    ---
    import 'style.css';
    import imageUrl from './image.png';
    ---

    <img src={imageUrl} />
    ```

    See the [v0.25 migration guide](https://docs.astro.build/en/migrate/#deprecated-astroresolve) for more information.

  - **`Astro.fetchContent`**

    Use `Astro.glob` instead to fetch markdown files, or migrate to the [Content Collections](https://docs.astro.build/en/guides/content-collections/) feature.

    ```js
    let allPosts = await Astro.glob('./posts/*.md');
    ```

  - **`Astro.canonicalURL`**

    Use `Astro.url` instead to construct the canonical URL.

    ```js
    const canonicalURL = new URL(Astro.url.pathname, Astro.site);
    ```

- [#5608](https://github.com/withastro/astro/pull/5608) [`899214298`](https://github.com/withastro/astro/commit/899214298cee5f0c975c7245e623c649e1842d73) Thanks [@konojunya](https://github.com/konojunya)! - A trailing slash will not be automatically appended to `import.meta.env.SITE`. Instead, it will be the value of the `site` config as is. This may affect usages of `${import.meta.env.SITE}image.png`, which will need to be updated accordingly.

- [#5707](https://github.com/withastro/astro/pull/5707) [`5eba34fcc`](https://github.com/withastro/astro/commit/5eba34fcc663def20bdf6e0daad02a6a5472776b) Thanks [@bluwy](https://github.com/bluwy)! - Remove `buildConfig` option parameter from integration `astro:build:start` hook in favour of the `build.config` option in the `astro:config:setup` hook.

  ```js
  export default function myIntegration() {
    return {
      name: 'my-integration',
      hooks: {
        'astro:config:setup': ({ updateConfig }) => {
          updateConfig({
            build: {
              client: '...',
              server: '...',
              serverEntry: '...',
            },
          });
        },
      },
    };
  }
  ```

- [#5862](https://github.com/withastro/astro/pull/5862) [`1ca81c16b`](https://github.com/withastro/astro/commit/1ca81c16b8b66236e092e6eb6ec3f73f5668421c) Thanks [@bluwy](https://github.com/bluwy)! - Remove unused exports

### Minor Changes

- [#5901](https://github.com/withastro/astro/pull/5901) [`a342a486c`](https://github.com/withastro/astro/commit/a342a486c2831461e24e6c2f1ca8a9d3e15477b6) Thanks [@bluwy](https://github.com/bluwy)! - The fallback Svelte preprocessor will only be applied if a custom `preprocess` option is not passed to the `svelte()` integration option, or in the `svelte.config.js` file.

  To support IDE autocompletion, or if you're migrating from `@astrojs/svelte` v1, you can create a `svelte.config.js` file with:

  ```js
  import { vitePreprocess } from '@astrojs/svelte';

  export default {
    preprocess: vitePreprocess(),
  };
  ```

  This file will also be generated by `astro add svelte` by default.

- [#5786](https://github.com/withastro/astro/pull/5786) [`c2180746b`](https://github.com/withastro/astro/commit/c2180746b4f6d9ef1b6f86924f21f52cc6ab4e63) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Move generated content collection types to a `.astro` directory. This replaces the previously generated `src/content/types.generated.d.ts` file.

  If you're using Git for version control, we recommend ignoring this generated directory by adding `.astro` to your .gitignore.

  Astro will also generate the [TypeScript reference path](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-path-) to include `.astro` types in your project. This will update your project's `src/env.d.ts` file, or write one if none exists.

- [#5826](https://github.com/withastro/astro/pull/5826) [`840412128`](https://github.com/withastro/astro/commit/840412128b00a04515156e92c314a929d6b94f6d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Allow Zod objects, unions, discriminated unions, intersections, and transform results as content collection schemas.

  #### Migration

  Astro requires a `z.object(...)` wrapper on all content collection schemas. Update your content collections config like so:

  ```diff
  // src/content/config.ts
  import { z, defineCollection } from 'astro:content';

  const blog = defineCollection({
  - schema: {
  + schema: z.object({
    ...
  })
  ```

- [#5823](https://github.com/withastro/astro/pull/5823) [`1f49cddf9`](https://github.com/withastro/astro/commit/1f49cddf9e9ffc651efc171b2cbde9fbe9e8709d) Thanks [@delucis](https://github.com/delucis)! - Generate content types when running `astro check`

- [#5832](https://github.com/withastro/astro/pull/5832) [`2303f9514`](https://github.com/withastro/astro/commit/2303f95142aa740c99213a098f82b99dd37d74a0) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Add support for serving well-known URIs with the @astrojs/node SSR adapter

### Patch Changes

- [#5855](https://github.com/withastro/astro/pull/5855) [`16dc36a87`](https://github.com/withastro/astro/commit/16dc36a870df47a4151a8ed2d91d0bd1bb812458) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Remove legacy compiler error handling

- [#5822](https://github.com/withastro/astro/pull/5822) [`01f3f463b`](https://github.com/withastro/astro/commit/01f3f463bf2918b310d130a9fabbf3ee21d14029) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix edge case with bundle generation by emitting a single chunk for pages

- [#5803](https://github.com/withastro/astro/pull/5803) [`ae8a012a7`](https://github.com/withastro/astro/commit/ae8a012a7b6884a03c50494332ee37b4505c2c3b) Thanks [@bluwy](https://github.com/bluwy)! - Upgrade compiler and handle breaking changes

- [#5840](https://github.com/withastro/astro/pull/5840) [`cf2de5422`](https://github.com/withastro/astro/commit/cf2de5422c26bfdea4c75f76e57b57299ded3e3a) Thanks [@chenxsan](https://github.com/chenxsan)! - Persist CLI flags when restarting the dev server

- [#5884](https://github.com/withastro/astro/pull/5884) [`ce5c5dbd4`](https://github.com/withastro/astro/commit/ce5c5dbd46afbe738b03600758bf5c35113de522) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Add a theme toggle button to the error overlay

- [#5811](https://github.com/withastro/astro/pull/5811) [`ec09bb664`](https://github.com/withastro/astro/commit/ec09bb6642064dbd7d2f3369afb090363ae18de2) Thanks [@bluwy](https://github.com/bluwy)! - Simplify HMR handling

- [#5824](https://github.com/withastro/astro/pull/5824) [`665a2c222`](https://github.com/withastro/astro/commit/665a2c2225e42881f5a9550599e8f3fc1deea0b4) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Better handle content type generation failures:

  - Generate types when content directory is empty
  - Log helpful error when running `astro sync` without a content directory
  - Avoid swallowing `config.ts` syntax errors from Vite

- [#5791](https://github.com/withastro/astro/pull/5791) [`f7aa1ec25`](https://github.com/withastro/astro/commit/f7aa1ec25d1584f7abd421903fbef66b1c050e2a) Thanks [@ba55ie](https://github.com/ba55ie)! - Fix Lit slotted content

- [#5499](https://github.com/withastro/astro/pull/5499) [`4987d6f44`](https://github.com/withastro/astro/commit/4987d6f44cfd0d81d88f21f5c380503403dc1e6a) Thanks [@bluwy](https://github.com/bluwy)! - Handle custom injected entry files during build

- [#5734](https://github.com/withastro/astro/pull/5734) [`55cea0a9d`](https://github.com/withastro/astro/commit/55cea0a9d8c8df91a46590fc04a9ac28089b3432) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix `prerender` when used with `getStaticPaths`

- [#5845](https://github.com/withastro/astro/pull/5845) [`e818cc046`](https://github.com/withastro/astro/commit/e818cc0466a942919ea3c41585e231c8c80cb3d0) Thanks [@bluwy](https://github.com/bluwy)! - Fix importing client-side components with alias

- [#5849](https://github.com/withastro/astro/pull/5849) [`8c100a6fe`](https://github.com/withastro/astro/commit/8c100a6fe6cc652c3799d1622e12c2c969f30510) Thanks [@bluwy](https://github.com/bluwy)! - Handle server restart from Vite plugins

- [#5756](https://github.com/withastro/astro/pull/5756) [`116d8835c`](https://github.com/withastro/astro/commit/116d8835ca9e78f8b5e477ee5a3d737b69f80706) Thanks [@matthewp](https://github.com/matthewp)! - Fix for hoisted scripts in project with spaces in the file path

- [#5917](https://github.com/withastro/astro/pull/5917) [`7325df412`](https://github.com/withastro/astro/commit/7325df412107fc0e65cd45c1b568fb686708f723) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix duplicate CSS in dev mode when `vite.css.devSourcemap` is provided

- [#5743](https://github.com/withastro/astro/pull/5743) [`2a5786419`](https://github.com/withastro/astro/commit/2a5786419599b8674473c699300172b9aacbae2e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add error location during build for user-generated errors

- [#5773](https://github.com/withastro/astro/pull/5773) [`4a1cabfe6`](https://github.com/withastro/astro/commit/4a1cabfe6b9ef8a6fbbcc0727a0dc6fa300cedaa) Thanks [@bluwy](https://github.com/bluwy)! - Cleanup dependencies

- [#5905](https://github.com/withastro/astro/pull/5905) [`a8d3e7924`](https://github.com/withastro/astro/commit/a8d3e79246605d252dcddad159e358e2d79bd624) Thanks [@bluwy](https://github.com/bluwy)! - Fix CLI node version check

- [#5761](https://github.com/withastro/astro/pull/5761) [`fa8c131f8`](https://github.com/withastro/astro/commit/fa8c131f88ef67d14c62f1c00c97ed74d43a80ac) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add helpful error message when the MDX integration is missing.

- [#5896](https://github.com/withastro/astro/pull/5896) [`64b8082e7`](https://github.com/withastro/astro/commit/64b8082e776b832f1433ed288e6f7888adb626d0) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `@astrojs/compiler` to `v1.0.0`

- [#5829](https://github.com/withastro/astro/pull/5829) [`23dc9ea96`](https://github.com/withastro/astro/commit/23dc9ea96a10343852d965efd41fe6665294f1fb) Thanks [@giuseppelt](https://github.com/giuseppelt)! - Fix `Code.astro` shiki css class replace logic

- [#5836](https://github.com/withastro/astro/pull/5836) [`63a6ceb38`](https://github.com/withastro/astro/commit/63a6ceb38d88331451dca64d0034c7c58e3d26f1) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix route matching when path includes special characters

- [#5909](https://github.com/withastro/astro/pull/5909) [`5fd9208d4`](https://github.com/withastro/astro/commit/5fd9208d447f5ab8909a2188b6c2491a0debd49d) Thanks [@jasikpark](https://github.com/jasikpark)! - Update compiler to 1.0.1

- [#5852](https://github.com/withastro/astro/pull/5852) [`3a00ecb3e`](https://github.com/withastro/astro/commit/3a00ecb3eb4bc44be758c064f2bde6e247e8a593) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - Respect `vite.envPrefix` if provided

- [#5872](https://github.com/withastro/astro/pull/5872) [`b66d7195c`](https://github.com/withastro/astro/commit/b66d7195c17a55ea0931bc3744888bd4f5f01ce6) Thanks [@bluwy](https://github.com/bluwy)! - Enable `skipLibCheck` by default

- Updated dependencies [[`93e633922`](https://github.com/withastro/astro/commit/93e633922c2e449df3bb2357b3683af1d3c0e07b), [`e2019be6f`](https://github.com/withastro/astro/commit/e2019be6ffa46fa33d92cfd346f9ecbe51bb7144), [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a), [`12f65a4d5`](https://github.com/withastro/astro/commit/12f65a4d55e3fd2993c2f67b18794dd536280c69), [`46ecd5de3`](https://github.com/withastro/astro/commit/46ecd5de34df619e2ee73ccea39a57acd37bc0b8), [`16107b6a1`](https://github.com/withastro/astro/commit/16107b6a10514ef1b563e585ec9add4b14f42b94), [`c55fbcb8e`](https://github.com/withastro/astro/commit/c55fbcb8edca1fe118a44f68c9f9436a4719d171), [`a9c292026`](https://github.com/withastro/astro/commit/a9c2920264e36cc5dc05f4adc1912187979edb0d), [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a), [`52209ca2a`](https://github.com/withastro/astro/commit/52209ca2ad72a30854947dcb3a90ab4db0ac0a6f), [`7572f7402`](https://github.com/withastro/astro/commit/7572f7402238da37de748be58d678fedaf863b53)]:
  - @astrojs/markdown-remark@2.0.0
  - @astrojs/telemetry@2.0.0
  - @astrojs/webapi@2.0.0

## 2.0.0-beta.4

<details>
<summary>See changes in 2.0.0-beta.4</summary>

### Major Changes

- [#5941](https://github.com/withastro/astro/pull/5941) [`304823811`](https://github.com/withastro/astro/commit/304823811eddd8e72aa1d8e2d39b40ab5cda3565) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Content collections: Introduce a new `slug` frontmatter field for overriding the generated slug. This replaces the previous `slug()` collection config option from Astro 1.X and the 2.0 beta.

  When present in a Markdown or MDX file, this will override the generated slug for that entry.

  ```diff
  # src/content/blog/post-1.md
  ---
  title: Post 1
  + slug: post-1-custom-slug
  ---
  ```

  Astro will respect this slug in the generated `slug` type and when using the `getEntryBySlug()` utility:

  ```astro
  ---
  import { getEntryBySlug } from 'astro:content';

  // Retrieve `src/content/blog/post-1.md` by slug with type safety
  const post = await getEntryBySlug('blog', 'post-1-custom-slug');
  ---
  ```

  #### Migration

  If you relied on the `slug()` config option, you will need to move all custom slugs to `slug` frontmatter properties in each collection entry.

  Additionally, Astro no longer allows `slug` as a collection schema property. This ensures Astro can manage the `slug` property for type generation and performance. Remove this property from your schema and any relevant `slug()` configuration:

  ```diff
  const blog = defineCollection({
    schema: z.object({
  -   slug: z.string().optional(),
    }),
  - slug({ defaultSlug, data }) {
  -   return data.slug ?? defaultSlug;
  - },
  })
  ```

### Patch Changes

- [#5499](https://github.com/withastro/astro/pull/5499) [`4987d6f44`](https://github.com/withastro/astro/commit/4987d6f44cfd0d81d88f21f5c380503403dc1e6a) Thanks [@bluwy](https://github.com/bluwy)! - Handle custom injected entry files during build

- [#5917](https://github.com/withastro/astro/pull/5917) [`7325df412`](https://github.com/withastro/astro/commit/7325df412107fc0e65cd45c1b568fb686708f723) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix duplicate CSS in dev mode when `vite.css.devSourcemap` is provided

- [#5905](https://github.com/withastro/astro/pull/5905) [`a8d3e7924`](https://github.com/withastro/astro/commit/a8d3e79246605d252dcddad159e358e2d79bd624) Thanks [@bluwy](https://github.com/bluwy)! - Fix CLI node version check

- [#5909](https://github.com/withastro/astro/pull/5909) [`5fd9208d4`](https://github.com/withastro/astro/commit/5fd9208d447f5ab8909a2188b6c2491a0debd49d) Thanks [@jasikpark](https://github.com/jasikpark)! - Update compiler to 1.0.1

- Updated dependencies [[`46ecd5de3`](https://github.com/withastro/astro/commit/46ecd5de34df619e2ee73ccea39a57acd37bc0b8)]:
  - @astrojs/webapi@2.0.0-beta.1

</details>

## 2.0.0-beta.3

<details>
<summary>See changes in 2.0.0-beta.3</summary>

### Major Changes

- [#5891](https://github.com/withastro/astro/pull/5891) [`05caf445d`](https://github.com/withastro/astro/commit/05caf445d4d2728f1010aeb2179a9e756c2fd17d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Remove deprecated Markdown APIs from Astro v0.X. This includes `getHeaders()`, the `.astro` property for layouts, and the `rawContent()` and `compiledContent()` error messages for MDX.

- [#5893](https://github.com/withastro/astro/pull/5893) [`be901dc98`](https://github.com/withastro/astro/commit/be901dc98c4a7f6b5536540aa8f7ba5108e939a0) Thanks [@matthewp](https://github.com/matthewp)! - Move getEntry to getEntryBySlug

  This change moves `getEntry` to `getEntryBySlug` and accepts a slug rather than an id.

  In order to improve support in `[id].astro` routes, particularly in SSR where you do not know what the id of a collection is. Using `getEntryBySlug` instead allows you to map the `[id]` param in your route to the entry. You can use it like this:

  ```astro
  ---
  import { getEntryBySlug } from 'astro:content';

  const entry = await getEntryBySlug('docs', Astro.params.id);

  if (!entry) {
    return new Response(null, {
      status: 404,
    });
  }
  ---

  <!-- You have an entry! Use it! -->
  ```

- [#5608](https://github.com/withastro/astro/pull/5608) [`899214298`](https://github.com/withastro/astro/commit/899214298cee5f0c975c7245e623c649e1842d73) Thanks [@konojunya](https://github.com/konojunya)! - A trailing slash will not be automatically appended to `import.meta.env.SITE`. Instead, it will be the value of the `site` config as is. This may affect usages of `${import.meta.env.SITE}image.png`, which will need to be updated accordingly.

- [#5862](https://github.com/withastro/astro/pull/5862) [`1ca81c16b`](https://github.com/withastro/astro/commit/1ca81c16b8b66236e092e6eb6ec3f73f5668421c) Thanks [@bluwy](https://github.com/bluwy)! - Remove unused exports

### Minor Changes

- [#5901](https://github.com/withastro/astro/pull/5901) [`a342a486c`](https://github.com/withastro/astro/commit/a342a486c2831461e24e6c2f1ca8a9d3e15477b6) Thanks [@bluwy](https://github.com/bluwy)! - The fallback Svelte preprocessor will only be applied if a custom `preprocess` option is not passed to the `svelte()` integration option, or in the `svelte.config.js` file.

  To support IDE autocompletion, or if you're migrating from `@astrojs/svelte` v1, you can create a `svelte.config.js` file with:

  ```js
  import { vitePreprocess } from '@astrojs/svelte';

  export default {
    preprocess: vitePreprocess(),
  };
  ```

  This file will also be generated by `astro add svelte` by default.

### Patch Changes

- [#5855](https://github.com/withastro/astro/pull/5855) [`16dc36a87`](https://github.com/withastro/astro/commit/16dc36a870df47a4151a8ed2d91d0bd1bb812458) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Remove legacy compiler error handling

- [#5884](https://github.com/withastro/astro/pull/5884) [`ce5c5dbd4`](https://github.com/withastro/astro/commit/ce5c5dbd46afbe738b03600758bf5c35113de522) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Add a theme toggle button to the error overlay

- [#5845](https://github.com/withastro/astro/pull/5845) [`e818cc046`](https://github.com/withastro/astro/commit/e818cc0466a942919ea3c41585e231c8c80cb3d0) Thanks [@bluwy](https://github.com/bluwy)! - Fix importing client-side components with alias

- [#5849](https://github.com/withastro/astro/pull/5849) [`8c100a6fe`](https://github.com/withastro/astro/commit/8c100a6fe6cc652c3799d1622e12c2c969f30510) Thanks [@bluwy](https://github.com/bluwy)! - Handle server restart from Vite plugins

- [#5896](https://github.com/withastro/astro/pull/5896) [`64b8082e7`](https://github.com/withastro/astro/commit/64b8082e776b832f1433ed288e6f7888adb626d0) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `@astrojs/compiler` to `v1.0.0`

- [#5852](https://github.com/withastro/astro/pull/5852) [`3a00ecb3e`](https://github.com/withastro/astro/commit/3a00ecb3eb4bc44be758c064f2bde6e247e8a593) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - Respect `vite.envPrefix` if provided

- [#5872](https://github.com/withastro/astro/pull/5872) [`b66d7195c`](https://github.com/withastro/astro/commit/b66d7195c17a55ea0931bc3744888bd4f5f01ce6) Thanks [@bluwy](https://github.com/bluwy)! - Enable `skipLibCheck` by default

</details>

## 2.0.0-beta.2

<details>
<summary>See changes in 2.0.0-beta.2</summary>

### Major Changes

- [#5782](https://github.com/withastro/astro/pull/5782) [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 14. Minimum supported Node version is now >=16.12.0

- [#5753](https://github.com/withastro/astro/pull/5753) [`302e0ef8f`](https://github.com/withastro/astro/commit/302e0ef8f5d5232e3348afe680e599f3e537b5c5) Thanks [@bluwy](https://github.com/bluwy)! - Default preview host to `localhost` instead of `127.0.0.1`. This allows the static server and integration preview servers to serve under ipv6.

- [#5842](https://github.com/withastro/astro/pull/5842) [`c4b0cb8bf`](https://github.com/withastro/astro/commit/c4b0cb8bf2b41887d9106440bb2e70d421a5f481) Thanks [@natemoo-re](https://github.com/natemoo-re)! - **Breaking Change**: client assets are built to an `_astro` directory in the build output directory. Previously these were built to various locations, including `assets/`, `chunks/` and the root of build output.

  You can control this location with the new `build` configuration option named `assets`.

- [#5825](https://github.com/withastro/astro/pull/5825) [`52209ca2a`](https://github.com/withastro/astro/commit/52209ca2ad72a30854947dcb3a90ab4db0ac0a6f) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Baseline the experimental `contentCollections` flag. You're free to remove this from your astro config!

  ```diff
  import { defineConfig } from 'astro/config';

  export default defineConfig({
  - experimental: { contentCollections: true }
  })
  ```

### Minor Changes

- [#5786](https://github.com/withastro/astro/pull/5786) [`c2180746b`](https://github.com/withastro/astro/commit/c2180746b4f6d9ef1b6f86924f21f52cc6ab4e63) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Move generated content collection types to a `.astro` directory. This replaces the previously generated `src/content/types.generated.d.ts` file.

  If you're using Git for version control, we recommend ignoring this generated directory by adding `.astro` to your .gitignore.

  Astro will also generate the [TypeScript reference path](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-path-) to include `.astro` types in your project. This will update your project's `src/env.d.ts` file, or write one if none exists.

- [#5826](https://github.com/withastro/astro/pull/5826) [`840412128`](https://github.com/withastro/astro/commit/840412128b00a04515156e92c314a929d6b94f6d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Allow Zod objects, unions, discriminated unions, intersections, and transform results as content collection schemas.

  #### Migration

  Astro requires a `z.object(...)` wrapper on all content collection schemas. Update your content collections config like so:

  ```diff
  // src/content/config.ts
  import { z, defineCollection } from 'astro:content';

  const blog = defineCollection({
  - schema: {
  + schema: z.object({
    ...
  })
  ```

- [#5823](https://github.com/withastro/astro/pull/5823) [`1f49cddf9`](https://github.com/withastro/astro/commit/1f49cddf9e9ffc651efc171b2cbde9fbe9e8709d) Thanks [@delucis](https://github.com/delucis)! - Generate content types when running `astro check`

- [#5832](https://github.com/withastro/astro/pull/5832) [`2303f9514`](https://github.com/withastro/astro/commit/2303f95142aa740c99213a098f82b99dd37d74a0) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Add support for serving well-known URIs with the @astrojs/node SSR adapter

### Patch Changes

- [#5822](https://github.com/withastro/astro/pull/5822) [`01f3f463b`](https://github.com/withastro/astro/commit/01f3f463bf2918b310d130a9fabbf3ee21d14029) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix edge case with bundle generation by emitting a single chunk for pages

- [#5803](https://github.com/withastro/astro/pull/5803) [`ae8a012a7`](https://github.com/withastro/astro/commit/ae8a012a7b6884a03c50494332ee37b4505c2c3b) Thanks [@bluwy](https://github.com/bluwy)! - Upgrade compiler and handle breaking changes

- [#5840](https://github.com/withastro/astro/pull/5840) [`cf2de5422`](https://github.com/withastro/astro/commit/cf2de5422c26bfdea4c75f76e57b57299ded3e3a) Thanks [@chenxsan](https://github.com/chenxsan)! - Persist CLI flags when restarting the dev server

- [#5811](https://github.com/withastro/astro/pull/5811) [`ec09bb664`](https://github.com/withastro/astro/commit/ec09bb6642064dbd7d2f3369afb090363ae18de2) Thanks [@bluwy](https://github.com/bluwy)! - Simplify HMR handling

- [#5824](https://github.com/withastro/astro/pull/5824) [`665a2c222`](https://github.com/withastro/astro/commit/665a2c2225e42881f5a9550599e8f3fc1deea0b4) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Better handle content type generation failures:

  - Generate types when content directory is empty
  - Log helpful error when running `astro sync` without a content directory
  - Avoid swallowing `config.ts` syntax errors from Vite

- [#5791](https://github.com/withastro/astro/pull/5791) [`f7aa1ec25`](https://github.com/withastro/astro/commit/f7aa1ec25d1584f7abd421903fbef66b1c050e2a) Thanks [@ba55ie](https://github.com/ba55ie)! - Fix Lit slotted content

- [#5773](https://github.com/withastro/astro/pull/5773) [`4a1cabfe6`](https://github.com/withastro/astro/commit/4a1cabfe6b9ef8a6fbbcc0727a0dc6fa300cedaa) Thanks [@bluwy](https://github.com/bluwy)! - Cleanup dependencies

- [#5829](https://github.com/withastro/astro/pull/5829) [`23dc9ea96`](https://github.com/withastro/astro/commit/23dc9ea96a10343852d965efd41fe6665294f1fb) Thanks [@giuseppelt](https://github.com/giuseppelt)! - Fix `Code.astro` shiki css class replace logic

- [#5836](https://github.com/withastro/astro/pull/5836) [`63a6ceb38`](https://github.com/withastro/astro/commit/63a6ceb38d88331451dca64d0034c7c58e3d26f1) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix route matching when path includes special characters

- Updated dependencies [[`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a), [`12f65a4d5`](https://github.com/withastro/astro/commit/12f65a4d55e3fd2993c2f67b18794dd536280c69), [`16107b6a1`](https://github.com/withastro/astro/commit/16107b6a10514ef1b563e585ec9add4b14f42b94), [`c55fbcb8e`](https://github.com/withastro/astro/commit/c55fbcb8edca1fe118a44f68c9f9436a4719d171), [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a), [`52209ca2a`](https://github.com/withastro/astro/commit/52209ca2ad72a30854947dcb3a90ab4db0ac0a6f), [`7572f7402`](https://github.com/withastro/astro/commit/7572f7402238da37de748be58d678fedaf863b53)]:
  - @astrojs/telemetry@2.0.0-beta.0
  - @astrojs/markdown-remark@2.0.0-beta.2
  - @astrojs/webapi@2.0.0-beta.0

</details>

## 2.0.0-beta.1

<details>
<summary>See changes in 2.0.0-beta.1</summary>

### Major Changes

- [#5778](https://github.com/withastro/astro/pull/5778) [`49ab4f231`](https://github.com/withastro/astro/commit/49ab4f231c23b34891c3ee86f4b92bf8d6d267a3) Thanks [@bluwy](https://github.com/bluwy)! - Remove proload to load the Astro config. It will now use NodeJS and Vite to load the config only.

- [#5771](https://github.com/withastro/astro/pull/5771) [`259a539d7`](https://github.com/withastro/astro/commit/259a539d7d70c783330c797794b15716921629cf) Thanks [@matthewp](https://github.com/matthewp)! - Removes support for astroFlavoredMarkdown

  In 1.0 Astro moved the old Astro Flavored Markdown (also sometimes called Components in Markdown) to a legacy feature. This change removes the `legacy.astroFlavoredMarkdown` option completely.

  In 2.0 this feature will not be available in Astro at all. We recommend migration to MDX for those were still using this feature in 1.x.

- [#5717](https://github.com/withastro/astro/pull/5717) [`a3a7fc929`](https://github.com/withastro/astro/commit/a3a7fc9298e6d88abb4b7bee1e58f05fa9558cf1) Thanks [@bluwy](https://github.com/bluwy)! - Remove `style.postcss` Astro config. Refactor tailwind integration to configure through `vite` instead. Also disables `autoprefixer` in dev.

### Minor Changes

- [#5769](https://github.com/withastro/astro/pull/5769) [`93e633922`](https://github.com/withastro/astro/commit/93e633922c2e449df3bb2357b3683af1d3c0e07b) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Introduce a `smartypants` flag to opt-out of Astro's default SmartyPants plugin.

  ```js
  {
    markdown: {
      smartypants: false,
    }
  }
  ```

  #### Migration

  You may have disabled Astro's built-in plugins (GitHub-Flavored Markdown and Smartypants) with the `extendDefaultPlugins` option. This has now been split into 2 flags to disable each plugin individually:

  - `markdown.gfm` to disable GitHub-Flavored Markdown
  - `markdown.smartypants` to disable SmartyPants

  ```diff
  // astro.config.mjs
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    markdown: {
  -   extendDefaultPlugins: false,
  +   smartypants: false,
  +   gfm: false,
    }
  });
  ```

### Patch Changes

- [#5734](https://github.com/withastro/astro/pull/5734) [`55cea0a9d`](https://github.com/withastro/astro/commit/55cea0a9d8c8df91a46590fc04a9ac28089b3432) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix `prerender` when used with `getStaticPaths`

- [#5756](https://github.com/withastro/astro/pull/5756) [`116d8835c`](https://github.com/withastro/astro/commit/116d8835ca9e78f8b5e477ee5a3d737b69f80706) Thanks [@matthewp](https://github.com/matthewp)! - Fix for hoisted scripts in project with spaces in the file path

- [#5743](https://github.com/withastro/astro/pull/5743) [`2a5786419`](https://github.com/withastro/astro/commit/2a5786419599b8674473c699300172b9aacbae2e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add error location during build for user-generated errors

- [#5761](https://github.com/withastro/astro/pull/5761) [`fa8c131f8`](https://github.com/withastro/astro/commit/fa8c131f88ef67d14c62f1c00c97ed74d43a80ac) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add helpful error message when the MDX integration is missing.

- Updated dependencies [[`93e633922`](https://github.com/withastro/astro/commit/93e633922c2e449df3bb2357b3683af1d3c0e07b)]:
  - @astrojs/markdown-remark@2.0.0-beta.1

</details>

## 2.0.0-beta.0

<details>
<summary>See changes in 2.0.0-beta.0</summary>

### Major Changes

- [#5687](https://github.com/withastro/astro/pull/5687) [`e2019be6f`](https://github.com/withastro/astro/commit/e2019be6ffa46fa33d92cfd346f9ecbe51bb7144) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Give remark and rehype plugins access to user frontmatter via frontmatter injection. This means `data.astro.frontmatter` is now the _complete_ Markdown or MDX document's frontmatter, rather than an empty object.

  This allows plugin authors to modify existing frontmatter, or compute new properties based on other properties. For example, say you want to compute a full image URL based on an `imageSrc` slug in your document frontmatter:

  ```ts
  export function remarkInjectSocialImagePlugin() {
    return function (tree, file) {
      const { frontmatter } = file.data.astro;
      frontmatter.socialImageSrc = new URL(frontmatter.imageSrc, 'https://my-blog.com/').pathname;
    };
  }
  ```

  #### Content Collections - new `remarkPluginFrontmatter` property

  We have changed _inject_ frontmatter to _modify_ frontmatter in our docs to improve discoverability. This is based on support forum feedback, where "injection" is rarely the term used.

  To reflect this, the `injectedFrontmatter` property has been renamed to `remarkPluginFrontmatter`. This should clarify this plugin is still separate from the `data` export Content Collections expose today.

  #### Migration instructions

  Plugin authors should now **check for user frontmatter when applying defaults.**

  For example, say a remark plugin wants to apply a default `title` if none is present. Add a conditional to check if the property is present, and update if none exists:

  ```diff
  export function remarkInjectTitlePlugin() {
    return function (tree, file) {
      const { frontmatter } = file.data.astro;
  +    if (!frontmatter.title) {
        frontmatter.title = 'Default title';
  +    }
    }
  }
  ```

  This differs from previous behavior, where a Markdown file's frontmatter would _always_ override frontmatter injected via remark or reype.

- [#5728](https://github.com/withastro/astro/pull/5728) [`8fb28648f`](https://github.com/withastro/astro/commit/8fb28648f66629741cb976bfe34ccd9d8f55661e) Thanks [@natemoo-re](https://github.com/natemoo-re)! - The previously experimental features `--experimental-error-overlay` and `--experimental-prerender`, both added in v1.7.0, are now the default.

  You'll notice that the error overlay during `astro dev` has a refreshed visual design and provides more context for your errors.

  The `prerender` feature is now enabled by default when using `output: 'server'`. To prerender a particular page, add `export const prerender = true` to your frontmatter.

  > **Warning**
  > Integration authors that previously relied on the exact structure of Astro's v1.0 build output may notice some changes to our output file structure. Please test your integrations to ensure compatability.
  > Users that have configured a custom `vite.build.rollupOptions.output.chunkFileNames` should ensure that their Astro project is configured as an ESM Node project. Either include `"type": "module"` in your root `package.json` file or use the `.mjs` extension for `chunkFileNames`.

- [#5716](https://github.com/withastro/astro/pull/5716) [`dd56c1941`](https://github.com/withastro/astro/commit/dd56c19411b126439b8bc42d681b6fa8c06e8c61) Thanks [@bluwy](https://github.com/bluwy)! - Remove MDX Fragment hack. This was used by `@astrojs/mdx` to access the `Fragment` component, but isn't require anymore since `@astrojs/mdx` v0.12.1.

- [#5685](https://github.com/withastro/astro/pull/5685) [`f6cf92b48`](https://github.com/withastro/astro/commit/f6cf92b48317a19a3840ad781b77d6d3cae143bb) Thanks [@bluwy](https://github.com/bluwy)! - Upgrade to Vite 4. Please see its [migration guide](https://vitejs.dev/guide/migration.html) for more information.

- [#5724](https://github.com/withastro/astro/pull/5724) [`16c7d0bfd`](https://github.com/withastro/astro/commit/16c7d0bfd49d2b9bfae45385f506bcd642f9444a) Thanks [@bluwy](https://github.com/bluwy)! - Remove outdated Vue info log. Remove `toString` support for `RenderTemplateResult`.

- [#5684](https://github.com/withastro/astro/pull/5684) [`a9c292026`](https://github.com/withastro/astro/commit/a9c2920264e36cc5dc05f4adc1912187979edb0d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Refine Markdown and MDX configuration options for ease-of-use.

  #### Markdown

  - **Remove `remark-smartypants`** from Astro's default Markdown plugins.
  - **Replace the `extendDefaultPlugins` option** with a simplified `gfm` boolean. This is enabled by default, and can be disabled to remove GitHub-Flavored Markdown.
  - Ensure GitHub-Flavored Markdown is applied whether or not custom `remarkPlugins` or `rehypePlugins` are configured. If you want to apply custom plugins _and_ remove GFM, manually set `gfm: false` in your config.

  #### MDX

  - Support _all_ Markdown configuration options (except `drafts`) from your MDX integration config. This includes `syntaxHighlighting` and `shikiConfig` options to further customize the MDX renderer.
  - Simplify `extendDefaults` to an `extendMarkdownConfig` option. MDX options will default to their equivalent in your Markdown config. By setting `extendMarkdownConfig` to false, you can "eject" to set your own syntax highlighting, plugins, and more.

  #### Migration

  To preserve your existing Markdown and MDX setup, you may need some configuration changes:

  ##### Smartypants manual installation

  [Smartypants](https://github.com/silvenon/remark-smartypants) has been removed from Astro's default setup. If you rely on this plugin, [install `remark-smartypants`](https://github.com/silvenon/remark-smartypants#installing) and apply to your `astro.config.*`:

  ```diff
  // astro.config.mjs
  import { defineConfig } from 'astro/config';
  + import smartypants from 'remark-smartypants';

  export default defineConfig({
    markdown: {
  +   remarkPlugins: [smartypants],
    }
  });
  ```

  ##### Migrate `extendDefaultPlugins` to `gfm`

  You may have disabled Astro's built-in plugins (GitHub-Flavored Markdown and Smartypants) with the `extendDefaultPlugins` option. Since Smartypants has been removed, this has been renamed to `gfm`.

  ```diff
  // astro.config.mjs
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    markdown: {
  -   extendDefaultPlugins: false,
  +   gfm: false,
    }
  });
  ```

  Additionally, applying remark and rehype plugins **no longer disables** `gfm`. You will need to opt-out manually by setting `gfm` to `false`.

  ##### Migrate MDX's `extendPlugins` to `extendMarkdownConfig`

  You may have used the `extendPlugins` option to manage plugin defaults in MDX. This has been replaced by 2 flags:

  - `extendMarkdownConfig` (`true` by default) to toggle Markdown config inheritance. This replaces the `extendPlugins: 'markdown'` option.
  - `gfm` (`true` by default) to toggle GitHub-Flavored Markdown in MDX. This replaces the `extendPlugins: 'defaults'` option.

- [#5707](https://github.com/withastro/astro/pull/5707) [`5eba34fcc`](https://github.com/withastro/astro/commit/5eba34fcc663def20bdf6e0daad02a6a5472776b) Thanks [@bluwy](https://github.com/bluwy)! - Remove deprecated `Astro` global APIs, including `Astro.resolve`, `Astro.fetchContent`, and `Astro.canonicalURL`.

  #### `Astro.resolve`

  You can resolve asset paths using `import` instead. For example:

  ```astro
  ---
  import 'style.css';
  import imageUrl from './image.png';
  ---

  <img src={imageUrl} />
  ```

  See the [v0.25 migration guide](https://docs.astro.build/en/migrate/#deprecated-astroresolve) for more information.

  #### `Astro.fetchContent`

  Use `Astro.glob` instead to fetch markdown files, or migrate to the [Content Collections](https://docs.astro.build/en/guides/content-collections/) feature.

  ```js
  let allPosts = await Astro.glob('./posts/*.md');
  ```

  #### `Astro.canonicalURL`

  Use `Astro.url` instead to construct the canonical URL.

  ```js
  const canonicalURL = new URL(Astro.url.pathname, Astro.site);
  ```

- [#5707](https://github.com/withastro/astro/pull/5707) [`5eba34fcc`](https://github.com/withastro/astro/commit/5eba34fcc663def20bdf6e0daad02a6a5472776b) Thanks [@bluwy](https://github.com/bluwy)! - Remove `buildConfig` option parameter from integration `astro:build:start` hook in favour of the `build.config` option in the `astro:config:setup` hook.

  ```js
  export default function myIntegration() {
    return {
      name: 'my-integration',
      hooks: {
        'astro:config:setup': ({ updateConfig }) => {
          updateConfig({
            build: {
              client: '...',
              server: '...',
              serverEntry: '...',
            },
          });
        },
      },
    };
  }
  ```

### Patch Changes

- Updated dependencies [[`e2019be6f`](https://github.com/withastro/astro/commit/e2019be6ffa46fa33d92cfd346f9ecbe51bb7144), [`a9c292026`](https://github.com/withastro/astro/commit/a9c2920264e36cc5dc05f4adc1912187979edb0d)]:
  - @astrojs/markdown-remark@2.0.0-beta.0

</details>

## 1.9.2

### Patch Changes

- [#5776](https://github.com/withastro/astro/pull/5776) [`6a31433ed`](https://github.com/withastro/astro/commit/6a31433ed79c7f84fd3ce602005b42ad95007d84) Thanks [@ba55ie](https://github.com/ba55ie)! - Fix Lit slotted content

## 1.9.1

### Patch Changes

- [`adad7e966`](https://github.com/withastro/astro/commit/adad7e96680640e1d0a5ec270cd2516f350c7652) Thanks [@matthewp](https://github.com/matthewp)! - Fix for hoisted scripts in project with spaces in the file path

## 1.9.0

### Minor Changes

- [#5666](https://github.com/withastro/astro/pull/5666) [`bf210f784`](https://github.com/withastro/astro/commit/bf210f7841711439f7db6c2b1f369e54a70b03d3) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Correctly handle spaces and capitalization in `src/content/` file names. This introduces github-slugger for slug generation to ensure slugs are usable by `getStaticPaths`. Changes:
  - Resolve spaces and capitalization: `collection/Entry With Spaces.md` becomes `collection/entry-with-spaces`.
  - Truncate `/index` paths to base URL: `collection/index.md` becomes `collection`

### Patch Changes

- [#5720](https://github.com/withastro/astro/pull/5720) [`fe316be86`](https://github.com/withastro/astro/commit/fe316be86f4dfecff78effbecdc10f7348406d27) Thanks [@umarov](https://github.com/umarov)! - Do not add base path to a hoisted script body

- [#5706](https://github.com/withastro/astro/pull/5706) [`c2844a79c`](https://github.com/withastro/astro/commit/c2844a79c8c94466481f5f3a37af259bb4cbf276) Thanks [@bluwy](https://github.com/bluwy)! - Add preact and sitemap integration to config load external list

- [#5700](https://github.com/withastro/astro/pull/5700) [`3aa3e00a6`](https://github.com/withastro/astro/commit/3aa3e00a63b63ae443f824f11cffde2a194ea4bf) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix `import.meta.env.DEV` always being set to `true` when using Content Collections

## 1.8.0

### Minor Changes

- [#5647](https://github.com/withastro/astro/pull/5647) [`d72da5290`](https://github.com/withastro/astro/commit/d72da529075ccbcfd342bf2308df0e5ce59b1e3f) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add `astro sync` CLI command for type generation

### Patch Changes

- [#5668](https://github.com/withastro/astro/pull/5668) [`9674cf56c`](https://github.com/withastro/astro/commit/9674cf56c561af8f13def0266b0539507a80000d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Remove stray `console.log` from content collections error message

- [#5652](https://github.com/withastro/astro/pull/5652) [`0b5098758`](https://github.com/withastro/astro/commit/0b50987584120e0c0e549f9ff838dc8879dbfa30) Thanks [@bluwy](https://github.com/bluwy)! - Use acorn to postprocess Astro globs

- [#5648](https://github.com/withastro/astro/pull/5648) [`853081d1c`](https://github.com/withastro/astro/commit/853081d1c857d8ad8a9634c37ed8fd123d32d241) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Prevent relative image paths in `src/content/`

- [#5678](https://github.com/withastro/astro/pull/5678) [`f8f576829`](https://github.com/withastro/astro/commit/f8f57682948a76cad81eef579235ee059578fe91) Thanks [@bluwy](https://github.com/bluwy)! - Fix code generation quotes handling

- [#5635](https://github.com/withastro/astro/pull/5635) [`376f67011`](https://github.com/withastro/astro/commit/376f67011d220de3bf05d3f39779a708992fffd7) Thanks [@SegaraRai](https://github.com/SegaraRai)! - Add `server.headers` typing

- Updated dependencies [[`853081d1c`](https://github.com/withastro/astro/commit/853081d1c857d8ad8a9634c37ed8fd123d32d241), [`2c65b433b`](https://github.com/withastro/astro/commit/2c65b433bf840a1bb93b0a1947df5949e33512ff)]:
  - @astrojs/markdown-remark@1.2.0

## 1.7.2

### Patch Changes

- [#5641](https://github.com/withastro/astro/pull/5641) [`62580ed07`](https://github.com/withastro/astro/commit/62580ed07871606c88051b6a2007b865c636107e) Thanks [@chenxsan](https://github.com/chenxsan)! - Fix "Maximum call stack size exceeded" error in vite-plugin-head-propagation

- [#5644](https://github.com/withastro/astro/pull/5644) [`d5aff85db`](https://github.com/withastro/astro/commit/d5aff85db48ccc9234968071b378829369afba9b) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix static build regression where chunks would not be generated

- [#5639](https://github.com/withastro/astro/pull/5639) [`1ac1ed86e`](https://github.com/withastro/astro/commit/1ac1ed86e9e5ec5468e8bdc40875e05811863138) Thanks [@bluwy](https://github.com/bluwy)! - Fix `client:only` imports with `"importsNotUsedAsValues": "error"` tsconfig

## 1.7.1

### Patch Changes

- [#5617](https://github.com/withastro/astro/pull/5617) [`33dcaa05b`](https://github.com/withastro/astro/commit/33dcaa05bb821ff0c6d0c6021b912855386be340) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix error message when using Content Collections and an out-of-date `@astrojs/mdx` integration

## 1.7.0

### Minor Changes

- [#5297](https://github.com/withastro/astro/pull/5297) [`d2960984c`](https://github.com/withastro/astro/commit/d2960984c59af7b60a3ea472c6c58fb00534a8e6) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Introduces the **experimental** Prerender API.

  > **Note**
  > This API is not yet stable and is subject to possible breaking changes!

  - Deploy an Astro server without sacrificing the speed or cacheability of static HTML.
  - The Prerender API allows you to statically prerender specific `pages/` at build time.

  **Usage**

  - First, run `astro build --experimental-prerender` or enable `experimental: { prerender: true }` in your `astro.config.mjs` file.
  - Then, include `export const prerender = true` in any file in the `pages/` directory that you wish to prerender.

- [#5495](https://github.com/withastro/astro/pull/5495) [`31ec84797`](https://github.com/withastro/astro/commit/31ec8479721a1cd65538ec041458c5ffe8f50ee9) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add a new error overlay designed by @doodlemarks! This new overlay should be much more informative, clearer, astro-y, and prettier than the previous one.

- [#5291](https://github.com/withastro/astro/pull/5291) [`5ec0f6ed5`](https://github.com/withastro/astro/commit/5ec0f6ed55b0a14a9663a90a03428345baf126bd) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Introduce Content Collections experimental API

  - Organize your Markdown and MDX content into easy-to-manage collections.
  - Add type safety to your frontmatter with schemas.
  - Generate landing pages, static routes, and SSR endpoints from your content using the collection query APIs.

- [#5564](https://github.com/withastro/astro/pull/5564) [`dced4a8a2`](https://github.com/withastro/astro/commit/dced4a8a2657887ec569860d9862d20f695dc23a) Thanks [@riywo](https://github.com/riywo)! - Add `server.headers` option

- [#5341](https://github.com/withastro/astro/pull/5341) [`6b156dd3b`](https://github.com/withastro/astro/commit/6b156dd3b467884839a571c53114aadf26fa4b0b) Thanks [@alexpdraper](https://github.com/alexpdraper)! - Allow setting domain when deleting cookies

### Patch Changes

- [#5615](https://github.com/withastro/astro/pull/5615) [`d85ec7484`](https://github.com/withastro/astro/commit/d85ec7484ce14a4c7d3f480da8f38fcb9aff388f) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Sanitize dynamically rendered tags to strip out any attributes

## 1.6.15

### Patch Changes

- [#5572](https://github.com/withastro/astro/pull/5572) [`b2f0210c4`](https://github.com/withastro/astro/commit/b2f0210c400a547d3067fdae6d15663b827be3a6) Thanks [@matthewp](https://github.com/matthewp)! - Include base in 'page' stage injected scripts

- [#5554](https://github.com/withastro/astro/pull/5554) [`02bb0a1cc`](https://github.com/withastro/astro/commit/02bb0a1ccd53e38157eec3a750160731fce64b9c) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `@astrojs/compiler` to latest

- [#5577](https://github.com/withastro/astro/pull/5577) [`2bd23e454`](https://github.com/withastro/astro/commit/2bd23e454fc9559aa00b9a493772acd69ba9ce6c) Thanks [@jerzakm](https://github.com/jerzakm)! - Updated magic-string to 0.27.0

## 1.6.14

### Patch Changes

- [#5545](https://github.com/withastro/astro/pull/5545) [`9082a850e`](https://github.com/withastro/astro/commit/9082a850eef4ab0187fc3bfdd5a377f0c7040070) Thanks [@bluwy](https://github.com/bluwy)! - Exclude astro from Vite optimization

- [#5446](https://github.com/withastro/astro/pull/5446) [`4f7f20616`](https://github.com/withastro/astro/commit/4f7f20616ed2b63f94ebf43bc5fdc1be55062a94) Thanks [@jyasskin](https://github.com/jyasskin)! - Fix redirect() typing to allow all redirection status codes.

- [#5511](https://github.com/withastro/astro/pull/5511) [`05915fec0`](https://github.com/withastro/astro/commit/05915fec01a51f27ab5051644f01e6112ecf06bc) Thanks [@matthewp](https://github.com/matthewp)! - Low-level head propagation

  This adds low-level head propagation ability within the Astro runtime. This is not really usable within an Astro app at the moment, but provides the APIs necessary for `renderEntry` to do head propagation.

- [#5553](https://github.com/withastro/astro/pull/5553) [`1aeabe417`](https://github.com/withastro/astro/commit/1aeabe417077505bc0cdb8d2e47366ddbc616072) Thanks [@matthewp](https://github.com/matthewp)! - Fix Astro.params not having values when using base in SSR

- [#5549](https://github.com/withastro/astro/pull/5549) [`795f00f73`](https://github.com/withastro/astro/commit/795f00f73c549727e05d5b7bf0e39cce87add4e7) Thanks [@matthewp](https://github.com/matthewp)! - Use accumulated sort order when order production CSS

- [#5539](https://github.com/withastro/astro/pull/5539) [`2c836b9d1`](https://github.com/withastro/astro/commit/2c836b9d1283a0707128d172e92ee2bba767486c) Thanks [@wulinsheng123](https://github.com/wulinsheng123)! - Error reporting fails on undefined error index

- [#5548](https://github.com/withastro/astro/pull/5548) [`8f3f67c96`](https://github.com/withastro/astro/commit/8f3f67c96aee63be64de77f374293761ff73f6ce) Thanks [@ido-pluto](https://github.com/ido-pluto)! - Removed premature optimization

## 1.6.13

### Patch Changes

- [#5506](https://github.com/withastro/astro/pull/5506) [`f536a34e5`](https://github.com/withastro/astro/commit/f536a34e53121104f87f2ad117a539daf2b7d5ee) Thanks [@bluwy](https://github.com/bluwy)! - Dedupe Astro package when resolving

- [#5506](https://github.com/withastro/astro/pull/5506) [`f536a34e5`](https://github.com/withastro/astro/commit/f536a34e53121104f87f2ad117a539daf2b7d5ee) Thanks [@bluwy](https://github.com/bluwy)! - Refactor Astro compile flow

- [#5533](https://github.com/withastro/astro/pull/5533) [`58188e053`](https://github.com/withastro/astro/commit/58188e053672562dfe4b7703c3e25bb47d71567d) Thanks [@bluwy](https://github.com/bluwy)! - Refactor and remove esbuild dependency

- [#5501](https://github.com/withastro/astro/pull/5501) [`3c44033e4`](https://github.com/withastro/astro/commit/3c44033e4ebafd28472d5c6a43e55c0363c6b555) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Added a warning in build when trying to hydrate an Astro component

## 1.6.12

### Patch Changes

- [#5484](https://github.com/withastro/astro/pull/5484) [`731e99df8`](https://github.com/withastro/astro/commit/731e99df875d40e40f6b33feddd940c3122a5f83) Thanks [@Pimm](https://github.com/Pimm)! - Narrow type of `Params`, as its values cannot be numbers

- [#5480](https://github.com/withastro/astro/pull/5480) [`c13775279`](https://github.com/withastro/astro/commit/c137752797a1af39b758d207af97bf234b3ff08d) Thanks [@sapphi-red](https://github.com/sapphi-red)! - Fix astro preview not working on Windows

- [#5497](https://github.com/withastro/astro/pull/5497) [`ca01a71eb`](https://github.com/withastro/astro/commit/ca01a71eb0937eae3ddc34d48396df8161e830db) Thanks [@bluwy](https://github.com/bluwy)! - Refactor internal plugins code

- [#5460](https://github.com/withastro/astro/pull/5460) [`57888e069`](https://github.com/withastro/astro/commit/57888e06904c48959940fffc5e63ac2e320fd336) Thanks [@bluwy](https://github.com/bluwy)! - Fix linked Astro library style HMR

- [#5477](https://github.com/withastro/astro/pull/5477) [`5e693c214`](https://github.com/withastro/astro/commit/5e693c21438d3a4840cd1906a346d38f05fdb753) Thanks [@bluwy](https://github.com/bluwy)! - Prevent inlining SCSS partials in dev

- [#5498](https://github.com/withastro/astro/pull/5498) [`1a3923da7`](https://github.com/withastro/astro/commit/1a3923da780288e6435fa79ee8fb61e420af344c) Thanks [@bluwy](https://github.com/bluwy)! - Optimize JSX import source detection

## 1.6.11

### Patch Changes

- [#5433](https://github.com/withastro/astro/pull/5433) [`936c1e411`](https://github.com/withastro/astro/commit/936c1e411d77c69b2b60a061c54704200716800a) Thanks [@wtchnm](https://github.com/wtchnm)! - Add missing `fetchpriority` attribute to img, link, script and iframe elements

- [#5437](https://github.com/withastro/astro/pull/5437) [`4b188132e`](https://github.com/withastro/astro/commit/4b188132ef68f8d9951cec86418ef50bb4df4a96) Thanks [@bluwy](https://github.com/bluwy)! - Correctly transform third-party JSX files

- [#5434](https://github.com/withastro/astro/pull/5434) [`f5ed630bc`](https://github.com/withastro/astro/commit/f5ed630bca05ebbfcc6ac994ced3911e41daedcc) Thanks [@matthewp](https://github.com/matthewp)! - Use Vite's resolve to resolve paths for client:only

## 1.6.10

### Patch Changes

- [#5431](https://github.com/withastro/astro/pull/5431) [`1ab505855`](https://github.com/withastro/astro/commit/1ab505855f9942659e3d23cb1ac668f04b98889d) Thanks [@matthewp](https://github.com/matthewp)! - Fix regression with loading .ts in .mjs config

- [#5426](https://github.com/withastro/astro/pull/5426) [`ff35b4759`](https://github.com/withastro/astro/commit/ff35b4759bd0fecfee6c99bf510c2e32d2574992) Thanks [@bluwy](https://github.com/bluwy)! - Fix JSX tagging for anonymous higher-order components default export

- [#5430](https://github.com/withastro/astro/pull/5430) [`b22ba1c03`](https://github.com/withastro/astro/commit/b22ba1c03a3e384dad569feb38fa34ecf7ec3b93) Thanks [@bluwy](https://github.com/bluwy)! - Fix preview --host in Node.js 18

- [#5417](https://github.com/withastro/astro/pull/5417) [`a9f7ff966`](https://github.com/withastro/astro/commit/a9f7ff96676a40b78e22379edc8eb9ce60a29fb8) Thanks [@matthewp](https://github.com/matthewp)! - Prevent dev from crashing when there are errors in template

## 1.6.9

### Patch Changes

- [#5409](https://github.com/withastro/astro/pull/5409) [`9f80a4046`](https://github.com/withastro/astro/commit/9f80a4046ff90e379be68bf03c3c4dd4dd5d6d87) Thanks [@matthewp](https://github.com/matthewp)! - Fix Code component usage in Vercel

- [#5410](https://github.com/withastro/astro/pull/5410) [`3c5cb6948`](https://github.com/withastro/astro/commit/3c5cb69488c76bbf0e9774fff5d948d29990515c) Thanks [@impcyber](https://github.com/impcyber)! - Fix: https://github.com/withastro/astro/issues/5400

- [#5412](https://github.com/withastro/astro/pull/5412) [`a278c7ae6`](https://github.com/withastro/astro/commit/a278c7ae6f2e93cabfe56fc16eb8b82b904ffb3a) Thanks [@matthewp](https://github.com/matthewp)! - Restart dev server on package.json changes

- [#5377](https://github.com/withastro/astro/pull/5377) [`40226dd14`](https://github.com/withastro/astro/commit/40226dd14d9f2d00d943f508dcfc76654c352938) Thanks [@matthewp](https://github.com/matthewp)! - Uses vite to load astro.config.ts files

## 1.6.8

### Patch Changes

- [#5375](https://github.com/withastro/astro/pull/5375) [`f9104354b`](https://github.com/withastro/astro/commit/f9104354b8a2c2457b9cd64405ddf8a832628e26) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix regression causing nested arrays in `getStaticPaths`'s return value to throw an error

- [#5346](https://github.com/withastro/astro/pull/5346) [`f3181b5ad`](https://github.com/withastro/astro/commit/f3181b5adf2c7c9157a59f409962274cda3f77ab) Thanks [@bluwy](https://github.com/bluwy)! - Fix .html.astro file routing in dev

- [#5358](https://github.com/withastro/astro/pull/5358) [`9eee0f016`](https://github.com/withastro/astro/commit/9eee0f0166e678dbcc2f6e4ce18bfa6326c95d7e) Thanks [@matthewp](https://github.com/matthewp)! - Properly support trailingSlash: never with a base

- [#5345](https://github.com/withastro/astro/pull/5345) [`3ae2a961b`](https://github.com/withastro/astro/commit/3ae2a961b77da179d24c44734af54424e76a5049) Thanks [@bluwy](https://github.com/bluwy)! - Respect Vite user config for third-party packages config handling

- [#5371](https://github.com/withastro/astro/pull/5371) [`bee8c14af`](https://github.com/withastro/astro/commit/bee8c14afd475ad053b9fdf78a2d29bebdd86926) Thanks [@matthewp](https://github.com/matthewp)! - Prefer the `base` config rather than site config for creating URLs for links and scripts.

- [#5369](https://github.com/withastro/astro/pull/5369) [`e385076ef`](https://github.com/withastro/astro/commit/e385076efe297f457343275e2e7002f71b35792b) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Upgrade `@astrojs/compiler`, fixes regression with `body` handling when `head` contains a Component node

## 1.6.7

### Patch Changes

- [#5353](https://github.com/withastro/astro/pull/5353) [`b3d936ac2`](https://github.com/withastro/astro/commit/b3d936ac248c0b939ff830023d75694398094341) Thanks [@matthewp](https://github.com/matthewp)! - Updated the CSS naming algorithm to prevent clashes

- [#5294](https://github.com/withastro/astro/pull/5294) [`ae41f25e1`](https://github.com/withastro/astro/commit/ae41f25e10a3fb1e5ad72c979ebe27fe55071de3) Thanks [@mrienstra](https://github.com/mrienstra)! - Consistent Markdown frontmatter typing (`MarkdownAstroData["frontmatter"]` in particular was `object` before)

## 1.6.6

### Patch Changes

- [#5316](https://github.com/withastro/astro/pull/5316) [`a780f2595`](https://github.com/withastro/astro/commit/a780f2595db86a773be0be1fefcbd9cbab2e8fc2) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Improved error messages descriptions and hints to be more informative

- [#5331](https://github.com/withastro/astro/pull/5331) [`688f8e4bc`](https://github.com/withastro/astro/commit/688f8e4bc1d8a284ee3d29f6122dbdebc02310ff) Thanks [@matthewp](https://github.com/matthewp)! - Allow dynamic segments in injected routes

- [#5330](https://github.com/withastro/astro/pull/5330) [`7e19e8b30`](https://github.com/withastro/astro/commit/7e19e8b30d0b411d69eb7d9c1de9dc304f084b37) Thanks [@matthewp](https://github.com/matthewp)! - Prevent jsx throws from hanging server

- [#5328](https://github.com/withastro/astro/pull/5328) [`bcd0f8f8c`](https://github.com/withastro/astro/commit/bcd0f8f8c4c27d19296ec08d7bf7d8f5047d583e) Thanks [@matthewp](https://github.com/matthewp)! - 404 when not using subpath for items in public in dev

  Previously if using a base like `base: '/subpath/` you could load things from the root, which would break in prod. Now you must include the subpath.

- [#5339](https://github.com/withastro/astro/pull/5339) [`03a8f89d5`](https://github.com/withastro/astro/commit/03a8f89d5ff79f43f4025fda0c93fd3c85482412) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Upgrade `@astrojs/compiler` to latest

- [#5327](https://github.com/withastro/astro/pull/5327) [`0dcdc6fb1`](https://github.com/withastro/astro/commit/0dcdc6fb1e6160c8a225a65c4810f565e2b673b5) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update Astro language-server to 0.28.3

## 1.6.5

### Patch Changes

- [#5326](https://github.com/withastro/astro/pull/5326) [`88c1bbe3a`](https://github.com/withastro/astro/commit/88c1bbe3a71f85e92f42f13d0f310c6b2a264ade) Thanks [@matthewp](https://github.com/matthewp)! - Fix omitted island hydration scripts in slots

- [#5301](https://github.com/withastro/astro/pull/5301) [`a79a37cad`](https://github.com/withastro/astro/commit/a79a37cad549b21f91599ff86899e456d9dcc7df) Thanks [@bluwy](https://github.com/bluwy)! - Improve environment variable handling performance

## 1.6.4

### Patch Changes

- [#5290](https://github.com/withastro/astro/pull/5290) [`b2b291d29`](https://github.com/withastro/astro/commit/b2b291d29143703cece0d12c8e74b2e1151d2061) Thanks [@matthewp](https://github.com/matthewp)! - Handle base configuration in adapters

  This allows adapters to correctly handle `base` configuration. Internally Astro now matches routes when the URL includes the `base`.

  Adapters now also have access to the `removeBase` method which will remove the `base` from a pathname. This is useful to look up files for static assets.

- [#5292](https://github.com/withastro/astro/pull/5292) [`97e2b6ad7`](https://github.com/withastro/astro/commit/97e2b6ad7a6fa23e82be28b2f57cdf3f85fab112) Thanks [@MontelAle](https://github.com/MontelAle)! - Changes slow astro cli imports to dynamic

- [#5293](https://github.com/withastro/astro/pull/5293) [`4af4d8fa0`](https://github.com/withastro/astro/commit/4af4d8fa0035130fbf31c82d72777c3679bc1ca5) Thanks [@matthewp](https://github.com/matthewp)! - Prevent overcaching .astro HMR changes

- [#5314](https://github.com/withastro/astro/pull/5314) [`f6add3924`](https://github.com/withastro/astro/commit/f6add3924d5cd59925a6ea4bf7f2f731709bc893) Thanks [@matthewp](https://github.com/matthewp)! - Fixes regression with config file restarts

- [#5298](https://github.com/withastro/astro/pull/5298) [`247eb7411`](https://github.com/withastro/astro/commit/247eb7411f429317e5cd7d401a6660ee73641313) Thanks [@wulinsheng123](https://github.com/wulinsheng123)! - have not founded style when srcDir was root

## 1.6.3

### Patch Changes

- [#5273](https://github.com/withastro/astro/pull/5273) [`c7b9b14a1`](https://github.com/withastro/astro/commit/c7b9b14a1e8be22c21bd8b2982a340f101993924) Thanks [@matthewp](https://github.com/matthewp)! - Surface astro.config errors to the user

- [#5264](https://github.com/withastro/astro/pull/5264) [`0d27c4a2b`](https://github.com/withastro/astro/commit/0d27c4a2b67e3928cc6f7b5af5faad20926b6cbb) Thanks [@VladCuciureanu](https://github.com/VladCuciureanu)! - Fixed memleak caused by project dir names containing '.md' or '.mdx'

- [#5258](https://github.com/withastro/astro/pull/5258) [`74759cf78`](https://github.com/withastro/astro/commit/74759cf787aefeeccc3fc336fdb0a56b982733bb) Thanks [@bluwy](https://github.com/bluwy)! - Allow 200 response for endpoints in build

- [#5284](https://github.com/withastro/astro/pull/5284) [`126cd8e83`](https://github.com/withastro/astro/commit/126cd8e83fbed8d69320c55cad4bdaa2d6209de9) Thanks [@herteleo](https://github.com/herteleo)! - Include missing `class:list` within `HTMLAttributes` type

- [#5236](https://github.com/withastro/astro/pull/5236) [`1cc067052`](https://github.com/withastro/astro/commit/1cc067052438602d9378bf84dc7754c09afdfbe8) Thanks [@bluwy](https://github.com/bluwy)! - Refactor CSS preprocessing handling

- [#5198](https://github.com/withastro/astro/pull/5198) [`c77a6cbe3`](https://github.com/withastro/astro/commit/c77a6cbe345facbf72c453e2fddc00f20c98983f) Thanks [@matthewp](https://github.com/matthewp)! - HMR - Improved error recovery

  This improves error recovery for HMR. Now when the dev server finds itself in an error state (because a route contained an error), it will recover from that state and refresh the page when the user has corrected the mistake.

## 1.6.2

### Patch Changes

- [#5243](https://github.com/withastro/astro/pull/5243) [`7d678c9ed`](https://github.com/withastro/astro/commit/7d678c9ed05a33380a2153df54abdf87d374f970) Thanks [@matthewp](https://github.com/matthewp)! - Upgrade `@astrojs/compiler` to 0.29.x

- Updated dependencies [[`b6a478f37`](https://github.com/withastro/astro/commit/b6a478f37648491321077750bfca7bddf3cafadd)]:
  - @astrojs/webapi@1.1.1

## 1.6.1

### Patch Changes

- [#5233](https://github.com/withastro/astro/pull/5233) [`7f8987085`](https://github.com/withastro/astro/commit/7f8987085c9c5bdcd39b9a6700303e9b9f76b9f2) Thanks [@bluwy](https://github.com/bluwy)! - Support rendering `@motionone/solid` components

- [#5238](https://github.com/withastro/astro/pull/5238) [`26ff42905`](https://github.com/withastro/astro/commit/26ff429058c6244767276b9fa20ef58987be13ee) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Fix not included file extension in `url` metadata for newly added markdown files

- [#5217](https://github.com/withastro/astro/pull/5217) [`8c83359e3`](https://github.com/withastro/astro/commit/8c83359e385b47fb6e453c023aeac2e01a579f38) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix missing types.d.ts in npm package

- [#5212](https://github.com/withastro/astro/pull/5212) [`a609a8937`](https://github.com/withastro/astro/commit/a609a8937f9f35c46f3c934d38b83c445da425b9) Thanks [@bluwy](https://github.com/bluwy)! - Upgrade Vite to 3.2

- [#5206](https://github.com/withastro/astro/pull/5206) [`d64d5b9b5`](https://github.com/withastro/astro/commit/d64d5b9b52c66ac0b3435b85c92a877f374fb100) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Improve error messages related to CSS and compiler errors

- [#5212](https://github.com/withastro/astro/pull/5212) [`a609a8937`](https://github.com/withastro/astro/commit/a609a8937f9f35c46f3c934d38b83c445da425b9) Thanks [@bluwy](https://github.com/bluwy)! - Allow importing public files in SSR

## 1.6.0

### Minor Changes

- [#5147](https://github.com/withastro/astro/pull/5147) [`0bf0758fb`](https://github.com/withastro/astro/commit/0bf0758fb831a91f6628e10a5baabf02f30f1f41) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add `astro/types` entrypoint. These utilities can be used for common prop type patterns.

  ## `HTMLAttributes`

  If you would like to extend valid HTML attributes for a given HTML element, you may use the provided `HTMLAttributes` type—it accepts an element name and returns the valid HTML attributes for that element name.

  ```ts
  import { HTMLAttributes } from 'astro/types';
  interface Props extends HTMLAttributes<'a'> {
    myProp?: string;
  }
  ```

- [#5164](https://github.com/withastro/astro/pull/5164) [`4a8a346ca`](https://github.com/withastro/astro/commit/4a8a346ca9a6d6ed8def2fa32329c1db922893d2) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Add support for markdown files with the following extensions:

  - `.markdown`
  - `.mdown`
  - `.mkdn`
  - `.mkd`
  - `.mdwn`

- [#4917](https://github.com/withastro/astro/pull/4917) [`ddf2f8390`](https://github.com/withastro/astro/commit/ddf2f8390e8dcc64b44636524bdcddae977779f4) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add support for `--base` CLI argument, which will override the [`base`](https://docs.astro.build/en/reference/configuration-reference/#base) set in your `astro.config.mjs` file.

  ```
  astro --site https://astro.build --base /docs
  ```

### Patch Changes

- [#5203](https://github.com/withastro/astro/pull/5203) [`3d99fdd1e`](https://github.com/withastro/astro/commit/3d99fdd1e7ea563775d86d1b00196c4c0c024500) Thanks [@bluwy](https://github.com/bluwy)! - Improve Astro libraries config handling

## 1.5.3

### Patch Changes

- [#5133](https://github.com/withastro/astro/pull/5133) [`1c477dd8d`](https://github.com/withastro/astro/commit/1c477dd8d9026fcbd533b4e6d11908e167ce7247) Thanks [@bluwy](https://github.com/bluwy)! - Fix `.css?raw` usage

- [#5133](https://github.com/withastro/astro/pull/5133) [`1c477dd8d`](https://github.com/withastro/astro/commit/1c477dd8d9026fcbd533b4e6d11908e167ce7247) Thanks [@bluwy](https://github.com/bluwy)! - Update `@astrojs/compiler` and use the new `resolvePath` option. This allows removing much of the runtime code, which should improve rendering performance for Astro and MDX pages.

- [#5192](https://github.com/withastro/astro/pull/5192) [`8728ee0b9`](https://github.com/withastro/astro/commit/8728ee0b94ef28524900367a06b9fe806babd574) Thanks [@tony-sull](https://github.com/tony-sull)! - `astro add` no longer automatically installs optional peer dependencies

## 1.5.2

### Patch Changes

- [#5119](https://github.com/withastro/astro/pull/5119) [`430e0346c`](https://github.com/withastro/astro/commit/430e0346c9dc0def8af93e0a393dc2847e145d2f) Thanks [@bluwy](https://github.com/bluwy)! - Use `fs.promises.rm` to remove node deprecation warning

- [#5123](https://github.com/withastro/astro/pull/5123) [`9745009ae`](https://github.com/withastro/astro/commit/9745009ae0e7fe8691c75657c5c9586a548bf2e0) Thanks [@matthewp](https://github.com/matthewp)! - Fixes index page with build.format=file

- [#5116](https://github.com/withastro/astro/pull/5116) [`500acb3c1`](https://github.com/withastro/astro/commit/500acb3c117070ee5838a8b567e9bdcf68703227) Thanks [@matthewp](https://github.com/matthewp)! - Throws when using Response.redirect in SSG mode

## 1.5.1

### Patch Changes

- [#5110](https://github.com/withastro/astro/pull/5110) [`0edfdd325`](https://github.com/withastro/astro/commit/0edfdd325932b0b493b2228e3a121d217c38a727) Thanks [@bluwy](https://github.com/bluwy)! - Ensure CLI flags override function-style server config

- [#5106](https://github.com/withastro/astro/pull/5106) [`ef0c54316`](https://github.com/withastro/astro/commit/ef0c5431631665c9f6648ee5daee65a3ebf8e9ee) Thanks [@bluwy](https://github.com/bluwy)! - Support spread parameters for server endpoints

- [#5095](https://github.com/withastro/astro/pull/5095) [`ddfbef5ac`](https://github.com/withastro/astro/commit/ddfbef5acbd4c56d8ce1626a458b5cbb27da47fe) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `astro add` trying to add lines from extended configurations when adding frameworks

- [#5076](https://github.com/withastro/astro/pull/5076) [`6f9a88b31`](https://github.com/withastro/astro/commit/6f9a88b31ba0881acd56fcb62c4a554c867b14d6) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix jsconfig.json aliases not working anymore after 1.5.0

- [#5080](https://github.com/withastro/astro/pull/5080) [`90b715d5c`](https://github.com/withastro/astro/commit/90b715d5c86810ad1edb013156e4810be3252e55) Thanks [@matthewp](https://github.com/matthewp)! - Fix Astro-in-MDX dashes in slot attr

- [#5098](https://github.com/withastro/astro/pull/5098) [`f684e9d36`](https://github.com/withastro/astro/commit/f684e9d361e3780889ea6e6b3394c0f583bd839a) Thanks [@jkjustjoshing](https://github.com/jkjustjoshing)! - Separate type definitions for built-in HTML elements and custom elements. Helpful when implementing an "as" prop similar to [styled-components](https://styled-components.com/docs/api#as-polymorphic-prop).

- [#5108](https://github.com/withastro/astro/pull/5108) [`ce01225a7`](https://github.com/withastro/astro/commit/ce01225a700aff5b437d46f21161e5f557050e12) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix types not working properly when using `moduleResolution: 'node16'`

- [#5060](https://github.com/withastro/astro/pull/5060) [`5923dd77c`](https://github.com/withastro/astro/commit/5923dd77c17c80747f9fe746ff8270ad4c820003) Thanks [@AirBorne04](https://github.com/AirBorne04)! - api routes: adding cookies to the response, also when returning a simple result

- [#5087](https://github.com/withastro/astro/pull/5087) [`49a8d18b4`](https://github.com/withastro/astro/commit/49a8d18b4993d899a05ee8230fdd012fb633533f) Thanks [@JuanM04](https://github.com/JuanM04)! - Fix `astro add` pnpm command

## 1.5.0

### Minor Changes

- [#5056](https://github.com/withastro/astro/pull/5056) [`e55af8a23`](https://github.com/withastro/astro/commit/e55af8a23233b6335f45b7a04b9d026990fb616c) Thanks [@matthewp](https://github.com/matthewp)! - # Adapter support for `astro preview`

  Adapters are now about to support the `astro preview` command via a new integration option. The Node.js adapter `@astrojs/node` is the first of the built-in adapters to gain support for this. What this means is that if you are using `@astrojs/node` you can new preview your SSR app by running:

  ```shell
  npm run preview
  ```

  ## Adapter API

  We will be updating the other first party Astro adapters to support preview over time. Adapters can opt-in to this feature by providing the `previewEntrypoint` via the `setAdapter` function in `astro:config:done` hook. The Node.js adapter's code looks like this:

  ```diff
  export default function() {
    return {
  		name: '@astrojs/node',
  		hooks: {
  			'astro:config:done': ({ setAdapter, config }) => {
          setAdapter({
            name: '@astrojs/node',
            serverEntrypoint: '@astrojs/node/server.js',
  +          previewEntrypoint: '@astrojs/node/preview.js',
            exports: ['handler'],
          });

          // more here
        }
      }
    };
  }
  ```

  The `previewEntrypoint` is a module in the adapter's package that is a Node.js script. This script is run when `astro preview` is run and is charged with starting up the built server. See the Node.js implementation in `@astrojs/node` to see how that is implemented.

- [#4986](https://github.com/withastro/astro/pull/4986) [`ebd364e39`](https://github.com/withastro/astro/commit/ebd364e392035b379dd00b8f2f15a4cc09ee88e6) Thanks [@bluwy](https://github.com/bluwy)! - ## New properties for API routes

  In API routes, you can now get the `site`, `generator`, `url`, `clientAddress`, `props`, and `redirect` fields on the APIContext, which is the first parameter passed to an API route. This was done to make the APIContext more closely align with the `Astro` global in .astro pages.

  For example, here's how you might use the `clientAddress`, which is the user's IP address, to selectively allow users.

  ```js
  export function post({ clientAddress, request, redirect }) {
    if (!allowList.has(clientAddress)) {
      return redirect('/not-allowed');
    }
  }
  ```

  Check out the docs for more information on the newly available fields: https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes

- [#4959](https://github.com/withastro/astro/pull/4959) [`0ea6187f9`](https://github.com/withastro/astro/commit/0ea6187f95f68d1a3ed98ef4d660e71206883bac) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Added support for updating TypeScript settings automatically when using `astro add`

  The `astro add` command will now automatically update your `tsconfig.json` with the proper TypeScript settings needed for the chosen frameworks.

  For instance, typing `astro add solid` will update your `tsconfig.json` with the following settings, per [Solid's TypeScript guide](https://www.solidjs.com/guides/typescript):

  ```json
  {
    "compilerOptions": {
      "jsx": "preserve",
      "jsxImportSource": "solid-js"
    }
  }
  ```

- [#4947](https://github.com/withastro/astro/pull/4947) [`a5e3ecc80`](https://github.com/withastro/astro/commit/a5e3ecc8039c1e115ce5597362e18cd35d04e40b) Thanks [@JuanM04](https://github.com/JuanM04)! - - Added `isRestart` and `addWatchFile` to integration step `isRestart`.

  - Restart dev server automatically when tsconfig changes.

- [#4986](https://github.com/withastro/astro/pull/4986) [`ebd364e39`](https://github.com/withastro/astro/commit/ebd364e392035b379dd00b8f2f15a4cc09ee88e6) Thanks [@bluwy](https://github.com/bluwy)! - ## Support passing a custom status code for Astro.redirect

  New in this minor is the ability to pass a status code to `Astro.redirect`. By default it uses `302` but now you can pass another code as the second argument:

  ```astro
  ---
  // This page was moved
  return Astro.redirect('/posts/new-post-name', 301);
  ---
  ```

- [#5056](https://github.com/withastro/astro/pull/5056) [`e55af8a23`](https://github.com/withastro/astro/commit/e55af8a23233b6335f45b7a04b9d026990fb616c) Thanks [@matthewp](https://github.com/matthewp)! - # New build configuration

  The ability to customize SSR build configuration more granularly is now available in Astro. You can now customize the output folder for `server` (the server code for SSR), `client` (your client-side JavaScript and assets), and `serverEntry` (the name of the entrypoint server module). Here are the defaults:

  ```js
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    output: 'server',
    build: {
      server: './dist/server/',
      client: './dist/client/',
      serverEntry: 'entry.mjs',
    },
  });
  ```

  These new configuration options are only supported in SSR mode and are ignored when building to SSG (a static site).

  ## Integration hook change

  The integration hook `astro:build:start` includes a param `buildConfig` which includes all of these same options. You can continue to use this param in Astro 1.x, but it is deprecated in favor of the new `build.config` options. All of the built-in adapters have been updated to the new format. If you have an integration that depends on this param we suggest upgrading to do this instead:

  ```js
  export default function myIntegration() {
    return {
      name: 'my-integration',
      hooks: {
        'astro:config:setup': ({ updateConfig }) => {
          updateConfig({
            build: {
              server: '...',
            },
          });
        },
      },
    };
  }
  ```

### Patch Changes

- [#5057](https://github.com/withastro/astro/pull/5057) [`baf88ee9e`](https://github.com/withastro/astro/commit/baf88ee9e5e692a94981d7a696fbdcb4cd8ab2a6) Thanks [@bluwy](https://github.com/bluwy)! - Skip JSX tagging for export statements with source

- [#5044](https://github.com/withastro/astro/pull/5044) [`44ea0c6d9`](https://github.com/withastro/astro/commit/44ea0c6d941a26a3c38fc6dc045a8a25215d154a) Thanks [@JuanM04](https://github.com/JuanM04)! - Upgrade Astro compiler to 0.27.1

- [#5059](https://github.com/withastro/astro/pull/5059) [`f7fcdfe62`](https://github.com/withastro/astro/commit/f7fcdfe6210b3cf08cad92c49b64adf169b9e744) Thanks [@bluwy](https://github.com/bluwy)! - Support strict dependency install for libraries with JSX

- [#5047](https://github.com/withastro/astro/pull/5047) [`1e2799243`](https://github.com/withastro/astro/commit/1e27992437aa0371b8550acb3e3f79e62721a506) Thanks [@matthewp](https://github.com/matthewp)! - Update Astro.cookies.set types to allow booleans and numbers

  Note that booleans and numbers were already allowed, they just were not allowed by the type definitions.

## 1.4.7

### Patch Changes

- [#5035](https://github.com/withastro/astro/pull/5035) [`d7bfb144b`](https://github.com/withastro/astro/commit/d7bfb144ba1718d14664ec755adf6e2281a4ab71) Thanks [@AirBorne04](https://github.com/AirBorne04)! - preventing multiple doctype injection into html documents

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

- [#5036](https://github.com/withastro/astro/pull/5036) [`38fdb4ca6`](https://github.com/withastro/astro/commit/38fdb4ca6f7c6af2fff69fe5bd60bdf2c9d7a6f1) Thanks [@matthewp](https://github.com/matthewp)! - New algorithm for shorter CSS bundle names

## 1.4.6

### Patch Changes

- [#5013](https://github.com/withastro/astro/pull/5013) [`ffbe4e71e`](https://github.com/withastro/astro/commit/ffbe4e71e36f496f6b9f4315c3145d238e46eb7e) Thanks [@matthewp](https://github.com/matthewp)! - Fixes getViteConfig from astro/config

## 1.4.5

### Patch Changes

- [#4981](https://github.com/withastro/astro/pull/4981) [`1f890b336`](https://github.com/withastro/astro/commit/1f890b3363d8ce232571612056b485c13983e5ef) Thanks [@matthewp](https://github.com/matthewp)! - Ensure dynamic tags have their slot instructions yielded

- [#4886](https://github.com/withastro/astro/pull/4886) [`61d26f335`](https://github.com/withastro/astro/commit/61d26f3352bb701ccce04dece4e1879b007f0ccb) Thanks [@yuhang-dong](https://github.com/yuhang-dong)! - Fix: import.meta.env.BASE_URL will be '/' in client loaded component on dev mode

- [#4973](https://github.com/withastro/astro/pull/4973) [`c733d4fb8`](https://github.com/withastro/astro/commit/c733d4fb81ca15efa3316e2b27d8341ddfcab8a3) Thanks [@bluwy](https://github.com/bluwy)! - Support Astro.slots.render for mdx

- [#4918](https://github.com/withastro/astro/pull/4918) [`a6bb2694b`](https://github.com/withastro/astro/commit/a6bb2694b4f7307844995fbb4481a40993d09a0d) Thanks [@bluwy](https://github.com/bluwy)! - Refactor hydration path handling

- [#4977](https://github.com/withastro/astro/pull/4977) [`4f73b98ae`](https://github.com/withastro/astro/commit/4f73b98ae04148412b38b98afa89a6120b600fd3) Thanks [@tony-sull](https://github.com/tony-sull)! - Fixes a bug that logged route cache warnings in `astro dev`

- [#4887](https://github.com/withastro/astro/pull/4887) [`37cb2fc02`](https://github.com/withastro/astro/commit/37cb2fc02a03754d454b243579bc55e55cf72904) Thanks [@Calvin-LL](https://github.com/Calvin-LL)! - fix object styles not escaped

- [#4990](https://github.com/withastro/astro/pull/4990) [`8f9791d84`](https://github.com/withastro/astro/commit/8f9791d840929bebc2b418e5ce3e48b541dc5744) Thanks [@matthewp](https://github.com/matthewp)! - Upgrade Astro compiler to 0.26.0

## 1.4.4

### Patch Changes

- [#4967](https://github.com/withastro/astro/pull/4967) [`e6a881081`](https://github.com/withastro/astro/commit/e6a881081f456b83294e1d85179b20951d7677e9) Thanks [@matthewp](https://github.com/matthewp)! - Final perf fix from 1.3.0 regression

  A regression in rendering perf happened in 1.3.0. This is the final fix for the underlying issue.

## 1.4.3

### Patch Changes

- [#4956](https://github.com/withastro/astro/pull/4956) [`ee8dd424f`](https://github.com/withastro/astro/commit/ee8dd424fda90688ff3f3ed4e736fb6151d9b422) Thanks [@matthewp](https://github.com/matthewp)! - Fix perf regression in SSR

- [#4952](https://github.com/withastro/astro/pull/4952) [`5bcd76e3a`](https://github.com/withastro/astro/commit/5bcd76e3ab3dfaab1d84d0af46d7e5a55a2b6ce2) Thanks [@bluwy](https://github.com/bluwy)! - Refactor ViteConfigWithSSR type

## 1.4.2

### Patch Changes

- [#4932](https://github.com/withastro/astro/pull/4932) [`9898088c0`](https://github.com/withastro/astro/commit/9898088c0a976da2cbf7607d92e5daf5db6a4536) Thanks [@matthewp](https://github.com/matthewp)! - Prevent hydration mismatch in streaming SSR

- [#4939](https://github.com/withastro/astro/pull/4939) [`cf2bba1e4`](https://github.com/withastro/astro/commit/cf2bba1e4a32ff7d424cc1c4954d6328167af8d7) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix MDX error handling, preventing a memory leak

## 1.4.1

### Patch Changes

- [#4928](https://github.com/withastro/astro/pull/4928) [`7690849a8`](https://github.com/withastro/astro/commit/7690849a87a7e192e28119211b75446ddbbc2ae3) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix module definition of Markdown and MDX files not being available outside Astro files

## 1.4.0

### Minor Changes

- [#4907](https://github.com/withastro/astro/pull/4907) [`01c1aaa00`](https://github.com/withastro/astro/commit/01c1aaa00397c7fdc7a3ef7fb0212eb43aad6238) Thanks [@matthewp](https://github.com/matthewp)! - Order Astro styles last, to override imported styles

  This fixes CSS ordering so that imported styles are placed _higher_ than page/component level styles. This means that if you do:

  ```astro
  ---
  import '../styles/global.css';
  ---

  <style>
    body {
      background: limegreen;
    }
  </style>
  ```

  The `<style>` defined in this component will be placed _below_ the imported CSS. When compiled for production this will result in something like this:

  ```css
  /* /src/styles/global.css */
  body {
    background: blue;
  }

  /* /src/pages/index.astro */
  body:where(.astro-12345) {
    background: limegreen;
  }
  ```

  Given Astro's 0-specificity hashing, this change effectively makes it so that Astro styles "win" when they have the same specificity as global styles.

- [#4876](https://github.com/withastro/astro/pull/4876) [`d3091f89e`](https://github.com/withastro/astro/commit/d3091f89e92fcfe1ad48daca74055d54b1c853a3) Thanks [@matthewp](https://github.com/matthewp)! - Adds the Astro.cookies API

  `Astro.cookies` is a new API for manipulating cookies in Astro components and API routes.

  In Astro components, the new `Astro.cookies` object is a map-like object that allows you to get, set, delete, and check for a cookie's existence (`has`):

  ```astro
  ---
  type Prefs = {
    darkMode: boolean;
  };

  Astro.cookies.set<Prefs>(
    'prefs',
    { darkMode: true },
    {
      expires: '1 month',
    }
  );

  const prefs = Astro.cookies.get<Prefs>('prefs').json();
  ---

  <body data-theme={prefs.darkMode ? 'dark' : 'light'}></body>
  ```

  Once you've set a cookie with Astro.cookies it will automatically be included in the outgoing response.

  This API is also available with the same functionality in API routes:

  ```js
  export function post({ cookies }) {
    cookies.set('loggedIn', false);

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/login',
      },
    });
  }
  ```

  See [the RFC](https://github.com/withastro/rfcs/blob/main/proposals/0025-cookie-management.md) to learn more.

### Patch Changes

- [#4897](https://github.com/withastro/astro/pull/4897) [`fd9d323a6`](https://github.com/withastro/astro/commit/fd9d323a68c0f0cbb3b019e0a05e2c33450f3d33) Thanks [@bluwy](https://github.com/bluwy)! - Support Vue JSX

- [#4892](https://github.com/withastro/astro/pull/4892) [`ff7ba0ee0`](https://github.com/withastro/astro/commit/ff7ba0ee0fd652a92f5d06d9b644dd646cebe65c) Thanks [@matthewp](https://github.com/matthewp)! - Prevent multiple rendering of head content

- [#4842](https://github.com/withastro/astro/pull/4842) [`812658ad2`](https://github.com/withastro/astro/commit/812658ad2ab3732a99e35c4fd903e302e723db46) Thanks [@bluwy](https://github.com/bluwy)! - Add missing dependencies, support strict dependency installation (e.g. pnpm)

- [#4891](https://github.com/withastro/astro/pull/4891) [`87a7cf48e`](https://github.com/withastro/astro/commit/87a7cf48e7198ab94aa6310e58e9f30fd234c429) Thanks [@matthewp](https://github.com/matthewp)! - Hoist hydration scripts out of slot templates

- Updated dependencies [[`812658ad2`](https://github.com/withastro/astro/commit/812658ad2ab3732a99e35c4fd903e302e723db46), [`812658ad2`](https://github.com/withastro/astro/commit/812658ad2ab3732a99e35c4fd903e302e723db46)]:
  - @astrojs/markdown-remark@1.1.3
  - @astrojs/telemetry@1.0.1

## 1.3.1

### Patch Changes

- [#4861](https://github.com/withastro/astro/pull/4861) [`42fe8e0c7`](https://github.com/withastro/astro/commit/42fe8e0c7f40ebb9b81f29501a18969c6f335c41) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - use const instead of let for define:vars

- [#4878](https://github.com/withastro/astro/pull/4878) [`90c207299`](https://github.com/withastro/astro/commit/90c2072990952ff0331e8728e74abbcacc355fbf) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - add warning for post routes called when output is not server

- [#4855](https://github.com/withastro/astro/pull/4855) [`49ca9e129`](https://github.com/withastro/astro/commit/49ca9e1291616b0cbe5544ae451ea6d1c79ba93b) Thanks [@matthewp](https://github.com/matthewp)! - Fix TS errors when not using skipLibCheck

- [#4845](https://github.com/withastro/astro/pull/4845) [`3389f0ce9`](https://github.com/withastro/astro/commit/3389f0ce919dad14b15613f9ca24449ae02ab2e0) Thanks [@matthewp](https://github.com/matthewp)! - Prevent the root folder from being deleted during the build

- [#4841](https://github.com/withastro/astro/pull/4841) [`4b092269c`](https://github.com/withastro/astro/commit/4b092269c1f1c11327d7f61a8b543066b178f7ef) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - copy assets even if outDir is out of process.cwd()

- [#4849](https://github.com/withastro/astro/pull/4849) [`ee5fdeffd`](https://github.com/withastro/astro/commit/ee5fdeffddfee32a0d7708bbf6b64cee50e82aa7) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - append .html to the file URL in case build.format says file

- [#4867](https://github.com/withastro/astro/pull/4867) [`03e8b750a`](https://github.com/withastro/astro/commit/03e8b750ada926cca53d755947fc422e77285fb9) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - check if class:list's value is defined before converting

- [#4873](https://github.com/withastro/astro/pull/4873) [`83ed1cc1f`](https://github.com/withastro/astro/commit/83ed1cc1f20411ec876757f199cc0a1f182f2a80) Thanks [@bluwy](https://github.com/bluwy)! - Prevent /undefined catch-all routes in dev

- [#4454](https://github.com/withastro/astro/pull/4454) [`6a1a17dd2`](https://github.com/withastro/astro/commit/6a1a17dd28d884eb23faf2f2894fb66aff86acdc) Thanks [@bluwy](https://github.com/bluwy)! - Allow HMR for internal e2e tests

- [#4712](https://github.com/withastro/astro/pull/4712) [`17dbc6701`](https://github.com/withastro/astro/commit/17dbc670186188ba418a1c8842d9349ee557fa2a) Thanks [@Lifeni](https://github.com/Lifeni)! - Fix slashes for paths containing non-ASCII characters on Windows

- [#4850](https://github.com/withastro/astro/pull/4850) [`edb7bead6`](https://github.com/withastro/astro/commit/edb7bead6e42b463dce0f6837ea78ae733eab88b) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - add support for changing mode via CLI

- [#4868](https://github.com/withastro/astro/pull/4868) [`b99f9902b`](https://github.com/withastro/astro/commit/b99f9902b7ef90f2cb537b0204e41317c9f6ea83) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - remove all the ssr generated folders in static build if only empty

- Updated dependencies [[`5e4c5252b`](https://github.com/withastro/astro/commit/5e4c5252bd80cbaf6a7ee4d4503ece007664410f)]:
  - @astrojs/webapi@1.1.0

## 1.3.0

### Minor Changes

- [#4775](https://github.com/withastro/astro/pull/4775) [`b0cc93996`](https://github.com/withastro/astro/commit/b0cc93996169fe8a52a7b1119ce2180ae6101e70) Thanks [@tony-sull](https://github.com/tony-sull)! - Adds a new "astro:build:generated" hook that runs after SSG builds finish but **before** build artifacts are cleaned up. This is a very specific use case, "astro:build:done" is probably what you're looking for.

- [#4669](https://github.com/withastro/astro/pull/4669) [`a961aa3c2`](https://github.com/withastro/astro/commit/a961aa3c2fa946898fd209dfc70a7b5472b60817) Thanks [@aggre](https://github.com/aggre)! - astro-island now correctly passes Uint8Array/Uint16Array/Uint32Array

- [#4832](https://github.com/withastro/astro/pull/4832) [`73f215df7`](https://github.com/withastro/astro/commit/73f215df76d238a5ce0cb0e64543af032f468773) Thanks [@matthewp](https://github.com/matthewp)! - Allows Responses to be passed to set:html

  This expands the abilities of `set:html` to ultimate service this use-case:

  ```astro
  <div set:html={fetch('/legacy-post.html')} />
  ```

  This means you can take a legacy app that has been statically generated to HTML and directly consume that HTML within your templates. As is always the case with `set:html`, this should only be used on trusted content.

  To make this possible, you can also pass several other types into `set:html` now:

  - `Response` objects, since that is what fetch() returns:
    ```astro
    <div
      set:html={new Response('<span>Hello world</span>', {
        headers: { 'content-type': 'text/html' },
      })}
    />
    ```
  - `ReadableStream`s:
    ```astro
    <div
      set:html={new ReadableStream({
        start(controller) {
          controller.enqueue(`<span>read me</span>`);
          controller.close();
        },
      })}
    />
    ```
  - `AsyncIterable`s:
    ```astro
    <div
      set:html={(async function* () {
        for await (const num of [1, 2, 3, 4, 5]) {
          yield `<li>${num}</li>`;
        }
      })()}
    />
    ```
  - `Iterable`s (non-async):
    ```astro
    <div
      set:html={(function* () {
        for (const num of [1, 2, 3, 4, 5]) {
          yield `<li>${num}</li>`;
        }
      })()}
    />
    ```

### Patch Changes

- [#4831](https://github.com/withastro/astro/pull/4831) [`29b29e6a8`](https://github.com/withastro/astro/commit/29b29e6a8a54f6ed764e57bb97f1799657d39be7) Thanks [@yuhang-dong](https://github.com/yuhang-dong)! - Update vite-jsx-plugin for jsx export

- [#4754](https://github.com/withastro/astro/pull/4754) [`baae1b3fd`](https://github.com/withastro/astro/commit/baae1b3fd10cf0a74e880c0e0552ba8d58f24453) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update `astro check` to latest version of the language server

- [#4509](https://github.com/withastro/astro/pull/4509) [`a0619f086`](https://github.com/withastro/astro/commit/a0619f08699de34f1d4c3da8020ac9a9ad3b9ff9) Thanks [@bluwy](https://github.com/bluwy)! - Refactor server url logs

## 1.2.8

### Patch Changes

- [#4813](https://github.com/withastro/astro/pull/4813) [`be9eaa069`](https://github.com/withastro/astro/commit/be9eaa069287d16ac8efc69e13407a5dfa5e5808) Thanks [@bluwy](https://github.com/bluwy)! - Allow override `vite.build.target`

- [#4817](https://github.com/withastro/astro/pull/4817) [`a49bc2f02`](https://github.com/withastro/astro/commit/a49bc2f02e8fa6c3e26e73d28a1c9c0e40da082a) Thanks [@mohammed-elhaouari](https://github.com/mohammed-elhaouari)! - fix parsing integration names with astro add command

- [#4819](https://github.com/withastro/astro/pull/4819) [`518e8f7e2`](https://github.com/withastro/astro/commit/518e8f7e25e03df7bdc9323cc26ea19c6b5e6d8c) Thanks [@matthewp](https://github.com/matthewp)! - Allow passing promises to set:html

- [#4807](https://github.com/withastro/astro/pull/4807) [`44fa37818`](https://github.com/withastro/astro/commit/44fa378186d711f8efab2135247ffde980e94795) Thanks [@lucacasonato](https://github.com/lucacasonato)! - Remove explicit `Transfer-Encoding: chunked` header from streaming responses

- [#4803](https://github.com/withastro/astro/pull/4803) [`f53d97d56`](https://github.com/withastro/astro/commit/f53d97d56be809a4c4a7f7d7ad79a22b36d8cd28) Thanks [@Enteleform](https://github.com/Enteleform)! - replaces hard-coded `minify` values with `vite.build.minify`

- Updated dependencies [[`df54595a8`](https://github.com/withastro/astro/commit/df54595a8836448a621fceeb38fbaacde1bb27cf)]:
  - @astrojs/markdown-remark@1.1.2

## 1.2.7

### Patch Changes

- [#4802](https://github.com/withastro/astro/pull/4802) [`cf5ed5f3a`](https://github.com/withastro/astro/commit/cf5ed5f3a87ea7b3a7ac6b9dd5a8659e41084ce1) Thanks [@bluwy](https://github.com/bluwy)! - Update Vite 3.1.3

- [#4782](https://github.com/withastro/astro/pull/4782) [`8f9463e07`](https://github.com/withastro/astro/commit/8f9463e07f23f0b617ca420852acf7af5f3d04ef) Thanks [@matthewp](https://github.com/matthewp)! - Fixes client:only CSS in Svelte components

## 1.2.6

### Patch Changes

- [#4771](https://github.com/withastro/astro/pull/4771) [`f3a81d82f`](https://github.com/withastro/astro/commit/f3a81d82f6ab4516cb86bf6b5e3eb01cb3ba39fb) Thanks [@matthewp](https://github.com/matthewp)! - Internal refactor

## 1.2.5

### Patch Changes

- [#4768](https://github.com/withastro/astro/pull/4768) [`9a59e24e0`](https://github.com/withastro/astro/commit/9a59e24e0250617333c1a0fd89b7d52fd1c829de) Thanks [@matthewp](https://github.com/matthewp)! - nsure before-hydration is only loaded when used

- [#4759](https://github.com/withastro/astro/pull/4759) [`fc885eaea`](https://github.com/withastro/astro/commit/fc885eaea1f08429599c0ab4697ab6382f3d7fa4) Thanks [@matthewp](https://github.com/matthewp)! - Read jsxImportSource from tsconfig

## 1.2.4

### Patch Changes

- [#4736](https://github.com/withastro/astro/pull/4736) [`13ca686ea`](https://github.com/withastro/astro/commit/13ca686ea18346a68db6af37348ee6d50719350d) Thanks [@bluwy](https://github.com/bluwy)! - Handle builds with outDir outside of current working directory

- [#4748](https://github.com/withastro/astro/pull/4748) [`c5e134d03`](https://github.com/withastro/astro/commit/c5e134d0358b7548bebe60b5707366b861c2fe28) Thanks [@bluwy](https://github.com/bluwy)! - Fix console.error filtering

- [#4742](https://github.com/withastro/astro/pull/4742) [`cf8a7e933`](https://github.com/withastro/astro/commit/cf8a7e933d26125eee44ce8b4f84d1353cfed957) Thanks [@matthewp](https://github.com/matthewp)! - Allow file uploads in dev server

- [#4752](https://github.com/withastro/astro/pull/4752) [`1bedb9427`](https://github.com/withastro/astro/commit/1bedb9427ebbe92eb74a82fc70cb67a97a250f32) Thanks [@bluwy](https://github.com/bluwy)! - Support Vite 3.1

- [#4755](https://github.com/withastro/astro/pull/4755) [`f1efd88dd`](https://github.com/withastro/astro/commit/f1efd88ddefe078f64901b1754ebfbaf65d36b51) Thanks [@matthewp](https://github.com/matthewp)! - Upgrade to Vite 3.1

- [#4594](https://github.com/withastro/astro/pull/4594) [`005d5bacd`](https://github.com/withastro/astro/commit/005d5bacd9c4dca5635da0759d5f73427df68e50) Thanks [@matthewp](https://github.com/matthewp)! - Allow custom 404 route to handle API route missing methods

## 1.2.3

### Patch Changes

- [#4724](https://github.com/withastro/astro/pull/4724) [`6efafa4b0`](https://github.com/withastro/astro/commit/6efafa4b0e392563d5375ec62ac6e3ac8372ec61) Thanks [@matthewp](https://github.com/matthewp)! - Use import order to sort CSS in the build

## 1.2.2

### Patch Changes

- [#4705](https://github.com/withastro/astro/pull/4705) [`5b6173fd0`](https://github.com/withastro/astro/commit/5b6173fd031b7e85974cbadd39de7fa199075e44) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Properly show an error message when a renderer is not properly configured

- [#4723](https://github.com/withastro/astro/pull/4723) [`0dba3b6f3`](https://github.com/withastro/astro/commit/0dba3b6f3fbd013f922fd11b9d6d977d165a512a) Thanks [@matthewp](https://github.com/matthewp)! - Makes the dev server more resilient to crashes

## 1.2.1

### Patch Changes

- [#4703](https://github.com/withastro/astro/pull/4703) [`d28f7013c`](https://github.com/withastro/astro/commit/d28f7013c2b415cbf6b640f17c9678ef0ac53253) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: [astro add] Apply fetch polyfill before running

## 1.2.0

### Minor Changes

- [#4682](https://github.com/withastro/astro/pull/4682) [`d1e695914`](https://github.com/withastro/astro/commit/d1e69591479741022eecc122c43afb05985a94fd) Thanks [@bholmesdev](https://github.com/bholmesdev)! - astro add - move configuration updates to final step

- [#4549](https://github.com/withastro/astro/pull/4549) [`255636cc7`](https://github.com/withastro/astro/commit/255636cc7b4ed5f72045f75a2411ebd84a2bdb0d) Thanks [@altano](https://github.com/altano)! - Allow specifying custom encoding when using a non-html route. Only option before was 'utf-8' and now that is just the default.

- [#4578](https://github.com/withastro/astro/pull/4578) [`c706d845e`](https://github.com/withastro/astro/commit/c706d845ebf4786c33d2295954a98df8c5a7f183) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Restart dev server when config file is added, updated, or removed

### Patch Changes

- [#4699](https://github.com/withastro/astro/pull/4699) [`b85d05a84`](https://github.com/withastro/astro/commit/b85d05a841538b6a995808b6422b234f3e746804) Thanks [@matthewp](https://github.com/matthewp)! - Fix missing CSS in client:only in child packages

## 1.1.8

### Patch Changes

- [#4675](https://github.com/withastro/astro/pull/4675) [`63e49c3b6`](https://github.com/withastro/astro/commit/63e49c3b642274835cf99e2c0816a5bb655971c9) Thanks [@matthewp](https://github.com/matthewp)! - Prevent locking up when encountering invalid CSS

- [#4684](https://github.com/withastro/astro/pull/4684) [`919df13b9`](https://github.com/withastro/astro/commit/919df13b91eb561ae939e9be51e5a76ca97d8512) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes regression introduced in [#4646](https://github.com/withastro/astro/pull/4646) with better cyclic reference detection

- [#4683](https://github.com/withastro/astro/pull/4683) [`cc242d3af`](https://github.com/withastro/astro/commit/cc242d3af2cc39731cc40b07ac0aa1db687b2920) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `tsc` compilation errors when `skipLibCheck` wasn't enabled

- [#4667](https://github.com/withastro/astro/pull/4667) [`9290b2414`](https://github.com/withastro/astro/commit/9290b24143d753edd3daf25945990c25a58e5bde) Thanks [@Holben888](https://github.com/Holben888)! - Fix framework components on Vercel Edge

- [#4645](https://github.com/withastro/astro/pull/4645) [`f27ca6ab3`](https://github.com/withastro/astro/commit/f27ca6ab3edbf0ef55e213ffd09aac454ce07995) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix client-side scripts reloads on dev server in windows

## 1.1.7

### Patch Changes

- [#4646](https://github.com/withastro/astro/pull/4646) [`98f242cdc`](https://github.com/withastro/astro/commit/98f242cdcd860679ad787ffb387558cb1dc93b87) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add cyclic ref detection when serializing props

- [#4656](https://github.com/withastro/astro/pull/4656) [`6d845c353`](https://github.com/withastro/astro/commit/6d845c353d5688f30787c4361f86c605fb638dd9) Thanks [@matthewp](https://github.com/matthewp)! - Fix bug with using `assert` as import identifier

- [#4403](https://github.com/withastro/astro/pull/4403) [`d31e72c3b`](https://github.com/withastro/astro/commit/d31e72c3ba8270d1e8d33c533502b3c4c6390a15) Thanks [@JohnDaly](https://github.com/JohnDaly)! - Fix for components, declared with JSXMemberExpression nodes, that failed to hydrate due to incomplete 'component-export' metadata

## 1.1.6

### Patch Changes

- [#4623](https://github.com/withastro/astro/pull/4623) [`eb1862b4e`](https://github.com/withastro/astro/commit/eb1862b4e68b399eecc7267ea9e0bee36983b0cb) Thanks [@delucis](https://github.com/delucis)! - Improve third-party Astro package support

- [#4643](https://github.com/withastro/astro/pull/4643) [`307b7b97c`](https://github.com/withastro/astro/commit/307b7b97ce79d076ceb4fdc25fd28a27077deb34) Thanks [@matthewp](https://github.com/matthewp)! - Remove regression when there is duplicate client/server CSS

- [#4584](https://github.com/withastro/astro/pull/4584) [`29a5fdc15`](https://github.com/withastro/astro/commit/29a5fdc1535fc389035d8107025f7490bfa976ed) Thanks [@bluwy](https://github.com/bluwy)! - Correctly escape paths in file names

- [#4621](https://github.com/withastro/astro/pull/4621) [`0068afb87`](https://github.com/withastro/astro/commit/0068afb876342ae76154e552dfc5bb6832b665ed) Thanks [@AllanChain](https://github.com/AllanChain)! - Ensure SSR module is loaded before testing if it's CSS in dev

## 1.1.5

### Patch Changes

- [#4603](https://github.com/withastro/astro/pull/4603) [`36dee7169`](https://github.com/withastro/astro/commit/36dee7169be7f595825d3dfecb04e61cea1b2fe4) Thanks [@matthewp](https://github.com/matthewp)! - Fix error when no JSX renderer configured

## 1.1.4

### Patch Changes

- [#4586](https://github.com/withastro/astro/pull/4586) [`16814dc71`](https://github.com/withastro/astro/commit/16814dc718614c0cce46b788470c1bc40b5cc981) Thanks [@bluwy](https://github.com/bluwy)! - Move ast-types as dev dependency

- [#4585](https://github.com/withastro/astro/pull/4585) [`f018e365c`](https://github.com/withastro/astro/commit/f018e365cf22bd6b7235fe956e33b5d80fa059a1) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add docs link to "missing adapter" error msg

## 1.1.3

### Patch Changes

- [#4574](https://github.com/withastro/astro/pull/4574) [`b92c24f40`](https://github.com/withastro/astro/commit/b92c24f4097f264a458c6f5044528c33fc897f01) Thanks [@delucis](https://github.com/delucis)! - Update `astro add` to list official integrations & adapters with same organisation we use in docs

* [#4566](https://github.com/withastro/astro/pull/4566) [`9ad307a9f`](https://github.com/withastro/astro/commit/9ad307a9fca064dcd9b2f27c3243d09d9154a5dc) Thanks [@bluwy](https://github.com/bluwy)! - Remove unused CSS for `client:load` components

## 1.1.2

### Patch Changes

- [#4519](https://github.com/withastro/astro/pull/4519) [`a2e8e76c3`](https://github.com/withastro/astro/commit/a2e8e76c303e8d6f39c24c122905a10f06907997) Thanks [@JuanM04](https://github.com/JuanM04)! - Upgraded Shiki to v0.11.1

- [#4531](https://github.com/withastro/astro/pull/4531) [`2d2e38e47`](https://github.com/withastro/astro/commit/2d2e38e473166e1e79886d3a9c7854927995dda1) Thanks [@bluwy](https://github.com/bluwy)! - Remove hardcoded Vite middleware handling

- [#4553](https://github.com/withastro/astro/pull/4553) [`2f05f5d30`](https://github.com/withastro/astro/commit/2f05f5d3071f01bf011212b5a91a5ac0c84fcff1) Thanks [@matthewp](https://github.com/matthewp)! - Include trailingSlash in astro:build:done hook

  This change ensures that the `pages` provided in the `astro:build:done` hook conform to the `trailingSlash` and `build.format` configs.

- [#4526](https://github.com/withastro/astro/pull/4526) [`046bfd908`](https://github.com/withastro/astro/commit/046bfd908de8bbfe9d24d1531260f1e6df03e912) Thanks [@bluwy](https://github.com/bluwy)! - Skip clean SSR output if page generation fails

- [#4546](https://github.com/withastro/astro/pull/4546) [`bb71be78d`](https://github.com/withastro/astro/commit/bb71be78db8abfc1a95de26c4508b694894cbcfd) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Update "Add an Adapter" help heading to "Add an SSR Adapter"

- [#4548](https://github.com/withastro/astro/pull/4548) [`69b640b87`](https://github.com/withastro/astro/commit/69b640b87c5d0f346129cd0cbd23efaf366bc8b1) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix "failed to load for SSR" on styles when using tailwind

- [#4535](https://github.com/withastro/astro/pull/4535) [`ca28d7578`](https://github.com/withastro/astro/commit/ca28d7578b7168fbc407132dc9a0c4115e1be878) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add missing `slot` attributes to SVG definitions

- [#4524](https://github.com/withastro/astro/pull/4524) [`d431fbe4e`](https://github.com/withastro/astro/commit/d431fbe4e1b04deba96e10679ebaaeedfcd6a239) - fix import in the config type declarations

- Updated dependencies [[`a2e8e76c3`](https://github.com/withastro/astro/commit/a2e8e76c303e8d6f39c24c122905a10f06907997)]:
  - @astrojs/markdown-remark@1.1.1

## 1.1.1

### Patch Changes

- [#4507](https://github.com/withastro/astro/pull/4507) [`4e1af3f0e`](https://github.com/withastro/astro/commit/4e1af3f0e8f5627cea24e4ec76d711d0387e3176) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `import-meta.d.ts` not being included in the npm package

## 1.1.0

### Minor Changes

- [#4352](https://github.com/withastro/astro/pull/4352) [`cd154e447`](https://github.com/withastro/astro/commit/cd154e447ba7883531d484deea2fd046898d749b) Thanks [@matthewp](https://github.com/matthewp)! - Make Astro.url match the build.format configuration during the build

* [#4423](https://github.com/withastro/astro/pull/4423) [`d4cd7a59f`](https://github.com/withastro/astro/commit/d4cd7a59fd38d411c442a818cfaab40f74106628) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Update Markdown type signature to match new markdown plugin,and update top-level layout props for better alignment

- [#4474](https://github.com/withastro/astro/pull/4474) [`ac0321824`](https://github.com/withastro/astro/commit/ac03218247763e4782824e220a384fd20ae6d769) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add "extends" to markdown plugin config to preserve Astro defaults

* [#4138](https://github.com/withastro/astro/pull/4138) [`839097c84`](https://github.com/withastro/astro/commit/839097c84e830542c17c18d8337a88de8885c356) Thanks [@gtnbssn](https://github.com/gtnbssn)! - Makes remark-rehype options available in astro.config.mjs

- [#4182](https://github.com/withastro/astro/pull/4182) [`fcc36ac90`](https://github.com/withastro/astro/commit/fcc36ac908429733b1d9e51caddbc7590f9eeea5) Thanks [@Alxandr](https://github.com/Alxandr)! - Make type definitions available through package.json exports

### Patch Changes

- [#4500](https://github.com/withastro/astro/pull/4500) [`9874c7bf4`](https://github.com/withastro/astro/commit/9874c7bf42e48e8da214b77c5eb20c0f0cdce42f) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update `astro check` to use latest version of the Astro language server

* [#4439](https://github.com/withastro/astro/pull/4439) [`77ce6be30`](https://github.com/withastro/astro/commit/77ce6be30c9cb8054ebf69a4943b984eed90152e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add tsconfig templates for users to extend from

- [#4499](https://github.com/withastro/astro/pull/4499) [`1f42c0791`](https://github.com/withastro/astro/commit/1f42c0791c342740d3650dc04a15c3610f9ab00a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `tsc` not being able to find Vite's import.meta types on Linux

* [#4497](https://github.com/withastro/astro/pull/4497) [`78e06c8ec`](https://github.com/withastro/astro/commit/78e06c8ec01e041e3f78625cb85bcce0cf5be029) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Production build logging - Only log `[code].html` instead of `[code]/index.html` for 404 and 500 routes

* Updated dependencies [[`ac0321824`](https://github.com/withastro/astro/commit/ac03218247763e4782824e220a384fd20ae6d769), [`839097c84`](https://github.com/withastro/astro/commit/839097c84e830542c17c18d8337a88de8885c356)]:
  - @astrojs/markdown-remark@1.1.0

## 1.1.0-next.0

### Minor Changes

- [#4352](https://github.com/withastro/astro/pull/4352) [`cd154e447`](https://github.com/withastro/astro/commit/cd154e447ba7883531d484deea2fd046898d749b) Thanks [@matthewp](https://github.com/matthewp)! - Make Astro.url match the build.format configuration during the build

* [#4423](https://github.com/withastro/astro/pull/4423) [`d4cd7a59f`](https://github.com/withastro/astro/commit/d4cd7a59fd38d411c442a818cfaab40f74106628) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Update Markdown type signature to match new markdown plugin,and update top-level layout props for better alignment

- [#4474](https://github.com/withastro/astro/pull/4474) [`ac0321824`](https://github.com/withastro/astro/commit/ac03218247763e4782824e220a384fd20ae6d769) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add "extends" to markdown plugin config to preserve Astro defaults

* [#4138](https://github.com/withastro/astro/pull/4138) [`839097c84`](https://github.com/withastro/astro/commit/839097c84e830542c17c18d8337a88de8885c356) Thanks [@gtnbssn](https://github.com/gtnbssn)! - Makes remark-rehype options available in astro.config.mjs

- [#4182](https://github.com/withastro/astro/pull/4182) [`fcc36ac90`](https://github.com/withastro/astro/commit/fcc36ac908429733b1d9e51caddbc7590f9eeea5) Thanks [@Alxandr](https://github.com/Alxandr)! - Make type definitions available through package.json exports

### Patch Changes

- [#4439](https://github.com/withastro/astro/pull/4439) [`77ce6be30`](https://github.com/withastro/astro/commit/77ce6be30c9cb8054ebf69a4943b984eed90152e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add tsconfig templates for users to extend from

- Updated dependencies [[`ac0321824`](https://github.com/withastro/astro/commit/ac03218247763e4782824e220a384fd20ae6d769), [`839097c84`](https://github.com/withastro/astro/commit/839097c84e830542c17c18d8337a88de8885c356)]:
  - @astrojs/markdown-remark@1.1.0-next.0

## 1.0.9

### Patch Changes

- [#4457](https://github.com/withastro/astro/pull/4457) [`9490f0e22`](https://github.com/withastro/astro/commit/9490f0e2235a61984bc0bba7e2383d2383085cf2) Thanks [@matthewp](https://github.com/matthewp)! - Include styles imported by hoisted scripts

* [#4469](https://github.com/withastro/astro/pull/4469) [`8a2d6958f`](https://github.com/withastro/astro/commit/8a2d6958f1747ddc010464d7d8ccbad2d6838921) Thanks [@kagankan](https://github.com/kagankan)! - Fix load `base` option in build

- [#4451](https://github.com/withastro/astro/pull/4451) [`a38a56829`](https://github.com/withastro/astro/commit/a38a568299e6d23cb05ca2419b4a79e7ef5eef0b) Thanks [@bluwy](https://github.com/bluwy)! - Bump @astrojs/compiler dependency

* [#4473](https://github.com/withastro/astro/pull/4473) [`467108730`](https://github.com/withastro/astro/commit/467108730e4f45e4cd99779a7126b9dbd93d9ce5) Thanks [@bluwy](https://github.com/bluwy)! - Remove optional chaining in astro-island

- [#4475](https://github.com/withastro/astro/pull/4475) [`78334b976`](https://github.com/withastro/astro/commit/78334b9765f3044969b761053382db5fe208ed56) Thanks [@matthewp](https://github.com/matthewp)! - Fixes regression with JSX in Solid library

* [#4458](https://github.com/withastro/astro/pull/4458) [`aa555932b`](https://github.com/withastro/astro/commit/aa555932be9c4805c3dc3008a7edf244090155ea) Thanks [@bluwy](https://github.com/bluwy)! - Support `vite.build.cssCodeSplit: false` option

- [#4422](https://github.com/withastro/astro/pull/4422) [`85646918a`](https://github.com/withastro/astro/commit/85646918acbfe6a96be234ad3e93f60bc74a0b6e) Thanks [@bluwy](https://github.com/bluwy)! - Refactor CSS preprocess and deps HMR

* [#4456](https://github.com/withastro/astro/pull/4456) [`47e71ae8f`](https://github.com/withastro/astro/commit/47e71ae8f8735149facb34ce63d4d582f0dfd32e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Added an error message when the second argument of Astro.slots.render is not an array

## 1.0.8

### Patch Changes

- [#4330](https://github.com/withastro/astro/pull/4330) [`baa2ddd01`](https://github.com/withastro/astro/commit/baa2ddd0103c269c862258520020395135e823ec) Thanks [@bluwy](https://github.com/bluwy)! - Warn hydration directive for Astro components in JSX

* [#4427](https://github.com/withastro/astro/pull/4427) [`b2e976f39`](https://github.com/withastro/astro/commit/b2e976f39c383eda8de58a2c86e94cbc9b3d678c) Thanks [@cameronmcefee](https://github.com/cameronmcefee)! - Fix config types to allow falsy values in integrations list, to match docs

- [#4385](https://github.com/withastro/astro/pull/4385) [`8164fa6f1`](https://github.com/withastro/astro/commit/8164fa6f1a01152f00542be33baebecd8ac60818) Thanks [@krolebord](https://github.com/krolebord)! - Fix warning when using hooks inside the react components not exported as a function declaration

* [#4445](https://github.com/withastro/astro/pull/4445) [`df4e99928`](https://github.com/withastro/astro/commit/df4e999284ae912b2a3f8a56573598a6ff21aa2a) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add "waiting for X integration" log for long-running integration hooks

- [#4430](https://github.com/withastro/astro/pull/4430) [`dc42f2c00`](https://github.com/withastro/astro/commit/dc42f2c00fdc0c2f310ba43aa7f6ab15c525f18c) Thanks [@bholmesdev](https://github.com/bholmesdev)! - astro add - Fix third-party npm orgs, i.e. `@example/integration`

* [#4441](https://github.com/withastro/astro/pull/4441) [`ca0c7e8b8`](https://github.com/withastro/astro/commit/ca0c7e8b836b1be2db6a77698c9535a34ada8fe6) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Allow arbitrary strings on the target attribute

- [#4446](https://github.com/withastro/astro/pull/4446) [`27ac6a03a`](https://github.com/withastro/astro/commit/27ac6a03a1b58da836190922304de5645854b49b) Thanks [@matthewp](https://github.com/matthewp)! - Deterministic CSS ordering

  This makes our CSS link order deterministic. It uses CSS depth; that is how deeply a module import the CSS comes from, in order to determine which CSS is page-level vs. component-level CSS.

  This is intended to match dev ordering where, because we do not bundle, the page-level CSS always comes after component-level.

* [#4426](https://github.com/withastro/astro/pull/4426) [`f40065f51`](https://github.com/withastro/astro/commit/f40065f510b4fef40d3d3e069e8dc2d4d9a4edb2) Thanks [@matthewp](https://github.com/matthewp)! - Ensure index pages are generated on paginated results

## 1.0.7

### Patch Changes

- [#4415](https://github.com/withastro/astro/pull/4415) [`39088e11d`](https://github.com/withastro/astro/commit/39088e11db2ab69b370616d7cb369952cd9fd266) Thanks [@bluwy](https://github.com/bluwy)! - Bump Vite to 3.0.9

* [#4362](https://github.com/withastro/astro/pull/4362) [`aa5118e85`](https://github.com/withastro/astro/commit/aa5118e8543bb9ed240681acdabfcc09bdbb5438) Thanks [@joseph-lozano](https://github.com/joseph-lozano)! - Allow user config to set `markdown.drafts` option

- [#4344](https://github.com/withastro/astro/pull/4344) [`500332a42`](https://github.com/withastro/astro/commit/500332a426c8fa43e6534f0e41de5fc902f98ccd) Thanks [@bluwy](https://github.com/bluwy)! - Refactor static build config merge

* [#4364](https://github.com/withastro/astro/pull/4364) [`77b068086`](https://github.com/withastro/astro/commit/77b068086d923e99eb693d1c57b7d6cd906a1e8a) Thanks [@bluwy](https://github.com/bluwy)! - Preserve all error stack lines

- [#4405](https://github.com/withastro/astro/pull/4405) [`a70f69a06`](https://github.com/withastro/astro/commit/a70f69a06c069781c56393289f82efc1251fc37b) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Refactor JSX build plugin, improve performance

* [#4356](https://github.com/withastro/astro/pull/4356) [`beed20be4`](https://github.com/withastro/astro/commit/beed20be4a4dd01a52cff49887420b6a8b92b1a9) Thanks [@delucis](https://github.com/delucis)! - Provide correct MIME type for dynamic endpoint routes in dev

- [#4375](https://github.com/withastro/astro/pull/4375) [`5e82f6c24`](https://github.com/withastro/astro/commit/5e82f6c245be332764fcd5a90be491a430655c87) Thanks [@matthewp](https://github.com/matthewp)! - Fixes race condition between directives being defined

## 1.0.6

### Patch Changes

- [#4324](https://github.com/withastro/astro/pull/4324) [`45fdbc465`](https://github.com/withastro/astro/commit/45fdbc4650610bd8363a05c07f3863cc12391b28) Thanks [@BurntCaramel](https://github.com/BurntCaramel)! - Use TextEncoder instead of Buffer.byteLength() for Deno compatibility

* [#4334](https://github.com/withastro/astro/pull/4334) [`b55f76c1c`](https://github.com/withastro/astro/commit/b55f76c1cafb7918f7087c6df03dd1d59eeaa065) Thanks [@matthewp](https://github.com/matthewp)! - Fix double injecting of head content in md pages

- [#4329](https://github.com/withastro/astro/pull/4329) [`0274b8d47`](https://github.com/withastro/astro/commit/0274b8d47be6ad2f5a503f70e2efdd52e43dc9c4) Thanks [@tony-sull](https://github.com/tony-sull)! - Updates routing logic to allow multiple routes to match the same URL in SSR

* [#4347](https://github.com/withastro/astro/pull/4347) [`166b3b8a5`](https://github.com/withastro/astro/commit/166b3b8a544e6ba8f6a32960cf9c73bbb88c8b34) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix MDXLayoutProps type signature for linting

## 1.0.5

### Patch Changes

- [#4302](https://github.com/withastro/astro/pull/4302) [`1d3a0a16f`](https://github.com/withastro/astro/commit/1d3a0a16f33aa88c2b60088d6a497e4beaadb2dc) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Revert "Ensure hydration scripts inside of slots render ASAP (#4288)" to fix Svelte integration bug

* [#4284](https://github.com/withastro/astro/pull/4284) [`73f367c77`](https://github.com/withastro/astro/commit/73f367c77b8311707b1c142e03dd53952f14d934) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Prevent preview if 'output: server' is configured

## 1.0.4

### Patch Changes

- [#4268](https://github.com/withastro/astro/pull/4268) [`f7afdb889`](https://github.com/withastro/astro/commit/f7afdb889fe4e97177958c8ec92f80c5f6e5cb51) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Align MD with MDX on layout props and "glob" import results:
  - Add `Content` to MDX
  - Add `file` and `url` to MDX frontmatter (layout import only)
  - Update glob types to reflect differences (lack of `rawContent` and `compiledContent`)

* [#4265](https://github.com/withastro/astro/pull/4265) [`8f845ca95`](https://github.com/withastro/astro/commit/8f845ca9507965e3898b3c7b70952c849bef310e) Thanks [@matthewp](https://github.com/matthewp)! - Prevents automatic trailingSlash appending on getStaticPaths produced pages

- [#4288](https://github.com/withastro/astro/pull/4288) [`c21810068`](https://github.com/withastro/astro/commit/c218100684c90c2b5c490e73b0687ad59d0c58df) Thanks [@matthewp](https://github.com/matthewp)! - Ensure hydration scripts inside of slots render ASAP

* [#4282](https://github.com/withastro/astro/pull/4282) [`c0992e1fe`](https://github.com/withastro/astro/commit/c0992e1fefc105577e99ac94338d349dbabf38d8) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix bug where Astro's server runtime would end up in the browser

- [#4272](https://github.com/withastro/astro/pull/4272) [`24d2f7a6e`](https://github.com/withastro/astro/commit/24d2f7a6e6700c10c863f826f37bb653d70e3a83) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Properly handle hydration for namespaced components

* [#4289](https://github.com/withastro/astro/pull/4289) [`3ca905174`](https://github.com/withastro/astro/commit/3ca905174967d6339ba90aa5bc1756fbe2fafdb0) Thanks [@bholmesdev](https://github.com/bholmesdev)! - [astro add] Set `output: 'server'` when adding adapter

## 1.0.3

### Patch Changes

- [#4239](https://github.com/withastro/astro/pull/4239) [`a9baa45af`](https://github.com/withastro/astro/commit/a9baa45af35abdd3e1930fb49e8b6fb0a4340e2a) Thanks [@bluwy](https://github.com/bluwy)! - Fix Astro client scripts sourcemap 404

* [#4279](https://github.com/withastro/astro/pull/4279) [`42fd6936c`](https://github.com/withastro/astro/commit/42fd6936cdb7106aea3770bed5313e558fc8b6dc) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Handle "not found" imports without throwing an "Invalid URL" error

- [#4273](https://github.com/withastro/astro/pull/4273) [`0022f46b5`](https://github.com/withastro/astro/commit/0022f46b57946f4f71e7f9f6e265081ee4ae1565) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix build output adding `/index.html` at the end of endpoints route

* [#4270](https://github.com/withastro/astro/pull/4270) [`7127b1bb3`](https://github.com/withastro/astro/commit/7127b1bb35ca4e8f419e18683e380a4917eca4bb) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Make third-party integration names nicer when using `astro add`

## 1.0.2

### Patch Changes

- [#4247](https://github.com/withastro/astro/pull/4247) [`714a8399e`](https://github.com/withastro/astro/commit/714a8399e20f334d2ba341c98d8ef5d590af9c39) Thanks [@matthewp](https://github.com/matthewp)! - Return 404 status code for 404.astro in SSR

* [#4240](https://github.com/withastro/astro/pull/4240) [`561a34d91`](https://github.com/withastro/astro/commit/561a34d91209c9d4959f74beaa17008edb27ff5d) Thanks [@matthewp](https://github.com/matthewp)! - Properly invalidate Astro modules when a child script updates in HMR

- [#4234](https://github.com/withastro/astro/pull/4234) [`c38e7f189`](https://github.com/withastro/astro/commit/c38e7f1890ba5bc97ddacee91ea196bcfc7652e6) Thanks [@bluwy](https://github.com/bluwy)! - Remove dev server during build

* [#4213](https://github.com/withastro/astro/pull/4213) [`f8e385339`](https://github.com/withastro/astro/commit/f8e3853394c2f2f48fac4b5eb2284e1960e59a13) Thanks [@bluwy](https://github.com/bluwy)! - Bump Vite to 3.0.5

- [#4225](https://github.com/withastro/astro/pull/4225) [`e918b3883`](https://github.com/withastro/astro/commit/e918b3883e156a0de2148517b619a2cf451917d2) Thanks [@mayank99](https://github.com/mayank99)! - `astro add` now supports `-y`

## 1.0.1

### Patch Changes

- [`3a7f2385e`](https://github.com/withastro/astro/commit/3a7f2385eadadb21794a06c86b7fa20b83b2f8f8) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add rawContent and compiledContent to MD layout props

## 1.0.0

> Astro v1.0 is out! Read the [official announcement post](https://astro.build/blog/astro-1/).

> **Note**
> If you need help migrating an existing Astro project to the new Astro v1.0, check out our updated [Migration Guide](https://docs.astro.build/en/migrate/) and [full documentation website](https://docs.astro.build/).

## 0.X

For older changelog entries -- including all v0.X, v1.0 Beta, and v1.0 Release Candidate versions -- check out [the v0.X changelog](https://github.com/withastro/astro/blob/astro%401.0.0/packages/astro/CHANGELOG.md).
