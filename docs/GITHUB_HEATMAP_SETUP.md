# GitHub heatmap setup (footer)

The footer heatmap shows your GitHub contributions. To show **all** activity (including private repos), the token must have the right scope.

## Why you see ~127 instead of 1,355

GitHub’s API returns **only public** contributions when:

- No token is set, or
- The token has no **repo** scope (e.g. only `read:user` or no scopes).

Your profile on github.com shows 1,355 because you’re logged in and see private repos. The API needs a token **with `repo` scope** to include those.

## Fix: use a Classic PAT with `repo` scope

1. **Create a new Classic token**
   - Go to [GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens).
   - Click **“Generate new token (classic)”**.

2. **Set name and scope**
   - Note: e.g. `adrianbarkus-website heatmap`.
   - Under **Scopes**, check **`repo`** (full control of private repositories).  
     This is required for the contribution count to include private repos.

3. **Generate and copy**
   - Click **Generate token** and copy the token (starts with `ghp_`).
   - **If you regenerated an existing token:** the old value is invalid. You must update Vercel and local `.env.local` with the new token.

4. **Vercel (production)**
   - Project **adrianbarkus-website** → **Settings** → **Environment Variables**.
   - Edit `GITHUB_TOKEN` and paste the new token (or add it if missing).
   - Save, then **Redeploy** the latest deployment (Deployments → ⋮ → Redeploy).

5. **Local (optional)**
   - Put `.env.local` in the **project root** (same folder as `package.json`), **not** inside `app/` or `app/api/`. Next.js only loads env files from the root.
   - Add: `GITHUB_TOKEN=ghp_your_token_here` (no quotes).
   - Restart `npm run dev` if it’s running.

After redeploy, wait up to 5 minutes (API cache) and hard-refresh the site. The footer should then show the full contribution count (e.g. 1,355).
