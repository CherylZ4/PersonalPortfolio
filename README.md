> **Warning**  
> The `@remix-run/netlify` runtime adapter has been deprecated in favor of
> `@netlify/remix-adapter` and will be removed in Remix v2. Please update your
> code by changing all `@remix-run/netlify` imports to `@netlify/remix-adapter`.  
> Keep in mind that `@netlify/remix-adapter` requires `@netlify/functions@^1.0.0`,
> which is a breaking change compared to the current supported `@netlify/functions`
> versions in `@remix-run/netlify`.

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
- [Netlify Functions](https://www.netlify.com/products/functions/)

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

The Remix dev server starts your app in development mode, rebuilding assets on file changes. To start the Remix dev server:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!


