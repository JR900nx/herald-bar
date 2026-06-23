import type { LoaderFunctionArgs, HeadersFunction } from "react-router";
import { useLoaderData } from "react-router";
import { authenticate } from "../shopify.server";
import { boundary } from "@shopify/shopify-app-react-router/server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = await authenticate.admin(request);
  return { shop: session.shop };
};

export default function Index() {
  const { shop } = useLoaderData<typeof loader>();
  const themeEditorUrl = `https://${shop}/admin/themes/current/editor?context=apps`;

  return (
    <s-page heading="Herald Bar">
      <s-section heading="Configure your Herald Bar">
        <s-paragraph>
          Your Herald Bar is configured directly in the theme editor. Click below to open it.
        </s-paragraph>
        <div style={{ marginTop: "16px" }}>
          <a href={themeEditorUrl} target="_top" rel="noreferrer" style={{ textDecoration: "none" }}>
            <s-button>Open theme editor</s-button>
          </a>
        </div>
      </s-section>

      <s-section heading="How to activate" slot="aside">
        <s-unordered-list>
          <s-list-item>Click "Open theme editor" above</s-list-item>
          <s-list-item>Click App embeds in the left sidebar</s-list-item>
          <s-list-item>Toggle Herald Bar on</s-list-item>
          <s-list-item>Customise your bar in the sidebar</s-list-item>
          <s-list-item>Click Save</s-list-item>
        </s-unordered-list>
      </s-section>

      <s-section heading="Tips" slot="aside">
        <s-paragraph>Changes preview live in the theme editor before you save.</s-paragraph>
        <s-paragraph>Visitors who close the bar will not see it again for the rest of their session.</s-paragraph>
        <s-paragraph>The bar automatically uses your theme font, no extra setup needed.</s-paragraph>
      </s-section>
    </s-page>
  );
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
