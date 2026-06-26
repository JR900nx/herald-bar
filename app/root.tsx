import type { LinksFunction, MetaFunction } from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

export const loader = () => ({
  // eslint-disable-next-line no-undef
  apiKey: process.env.SHOPIFY_API_KEY || "",
});

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { name: "shopify-api-key", content: data?.apiKey ?? "" },
];

export const links: LinksFunction = () => [
  { rel: "preload", href: "https://cdn.shopify.com/shopifycloud/app-bridge.js", as: "script" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
