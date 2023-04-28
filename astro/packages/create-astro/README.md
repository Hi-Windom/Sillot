# create-astro

## Scaffolding for Astro projects

**With NPM:**

```bash
npm create astro@latest
```

**With Yarn:**

```bash
yarn create astro
```

`create-astro` automatically runs in _interactive_ mode, but you can also specify your project name and template with command line arguments.

```bash
# npm 6.x
npm create astro@latest my-astro-project --template minimal

# npm 7+, extra double-dash is needed:
npm create astro@latest my-astro-project -- --template minimal

# yarn
yarn create astro my-astro-project --template minimal
```
[Check out the full list][examples] of example templates, available on GitHub.

You can also use any GitHub repo as a template:

```bash
npm create astro@latest my-astro-project -- --template cassidoo/shopify-react-astro
```

### CLI Flags

May be provided in place of prompts

| Name         | Description                                         |
|:-------------|:----------------------------------------------------|
| `--template <name>` | Specify your template. |
| `--install` / `--no-install` | Install dependencies (or not). |
| `--git` / `--no-git` | Initialize git repo (or not). |
| `--yes` (`-y`) | Skip all prompt by accepting defaults. |
| `--no` (`-n`) | Skip all prompt by declining defaults. |
| `--dry-run` | Walk through steps without executing. |
| `--skip-houston` | Skip Houston animation. |
| `--typescript <option>` | TypeScript option: `strict` / `strictest` / `relaxed`. |

[examples]: https://github.com/withastro/astro/tree/main/examples
[typescript]: https://github.com/withastro/astro/tree/main/packages/astro/tsconfigs
