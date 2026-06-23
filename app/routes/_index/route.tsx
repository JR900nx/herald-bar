import type { LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { login } from "../../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }
  return { showForm: Boolean(login) };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Herald Bar — Announcement bars for Shopify</title>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
            background: #0c0c10;
            color: #a0a0b8;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 24px;
            text-align: center;
          }
          .wrap { max-width: 480px; width: 100%; }
          .logo { font-size: 13px; font-weight: 700; color: #fff; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 40px; display: flex; align-items: center; justify-content: center; gap: 8px; }
          .logo-dot { width: 8px; height: 8px; background: #4d9fff; border-radius: 50%; }
          .bar-preview { background: #1a1a1a; border-radius: 10px; padding: 14px 24px; display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 40px; font-size: 14px; color: #fff; }
          .bar-preview .pill { background: #fff; color: #1a1a1a; padding: 4px 12px; border-radius: 5px; font-weight: 700; font-size: 12px; }
          h1 { font-size: 32px; font-weight: 800; color: #fff; letter-spacing: -1px; line-height: 1.1; margin-bottom: 14px; }
          p { font-size: 16px; color: #5a5a72; line-height: 1.6; margin-bottom: 32px; }
          .install-btn {
            display: inline-block;
            background: #4d9fff;
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            padding: 14px 32px;
            border-radius: 8px;
            text-decoration: none;
            letter-spacing: -0.2px;
          }
          .install-btn:hover { background: #3a8ff0; }
          .footer { margin-top: 40px; font-size: 12px; color: #2e2e48; }
          .footer a { color: #2e2e48; text-decoration: none; }
          .footer a:hover { color: #5a5a72; }
        `}</style>
      </head>
      <body>
        <div className="wrap">
          <div className="logo"><div className="logo-dot"></div>Delovu Labs</div>
          <div className="bar-preview">
            <span>Free shipping on orders over $50</span>
            <span className="pill">Shop now</span>
          </div>
          <h1>Announcement bars that just work</h1>
          <p>Herald Bar lives inside your theme editor — customise colors, messages, timers, and more without touching any code.</p>
          <a className="install-btn" href="https://apps.shopify.com/herald-bar">Add to Shopify</a>
          <div className="footer">
            <a href="https://delovulabs.com">Delovu Labs</a> &nbsp;·&nbsp; <a href="https://delovulabs.com/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </body>
    </html>
  );
}
