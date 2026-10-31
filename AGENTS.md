<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Admin sign-in is protected by Google reCAPTCHA v3, verified server-side in src/server.ts (keys in RECAPTCHA_SITE_KEY / RECAPTCHA_SECRET_KEY); never add a client-only bypass.
- Contact inquiries and admin sessions are stored in Lovable Cloud tables (inquiries, admin_sessions; session tokens stored as SHA-256 hashes) and accessed only from src/server.ts with the service-role client; RLS on with no public policies so browsers can never read them directly.
