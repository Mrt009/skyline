# SkyLine static site

This folder is ready for GitHub and Cloudflare Pages.

## Deploy with GitHub + Cloudflare Pages

1. Push the contents of this folder to a GitHub repository.
2. In Cloudflare Pages, choose **Create a project** → **Connect to Git**.
3. Select the repository and use these settings:
   - Framework preset: **None**
   - Build command: leave empty
   - Build output directory: `/`
4. Deploy.

The `_headers` file supplies the security headers and cache policy. No server-side secrets are present in this static demo.

## Important security note

The demo login values are intentionally visible in client-side JavaScript because this is a front-end demo. They must not be reused as real production credentials. A real login requires a server-side identity provider or API, with secrets kept in Cloudflare environment variables.

Public HTML, CSS, JavaScript, and images can never be made impossible to copy. The site includes practical protections against common browser attacks and accidental exposure, but visual assets should be protected by ownership/licensing and server-side controls where necessary.
