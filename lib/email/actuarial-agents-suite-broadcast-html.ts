const ACCENT = "#00d1b2";
const INK = "#0a0a0a";
const MUTED = "#666666";

export type ActuarialAgentsSuiteBroadcastContent = {
  linkedInPostUrl: string;
  siteOrigin: string;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Builds HTML + plain text for a Resend broadcast (includes required unsubscribe merge tag). */
export function buildActuarialAgentsSuiteBroadcastEmail(
  opts: ActuarialAgentsSuiteBroadcastContent,
): { html: string; text: string } {
  const landingUrl = new URL("/actuarial-agents-suite", opts.siteOrigin).href;
  const demoUrl = new URL("/contact#demo", opts.siteOrigin).href;
  const linkedInHref = new URL(opts.linkedInPostUrl).href;

  const safeLanding = escapeHtml(landingUrl);
  const safeDemo = escapeHtml(demoUrl);
  const safeLinkedIn = escapeHtml(linkedInHref);

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>MaestrosAI Actuarial Agents Suite</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f4f5;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f4f5;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background-color:#ffffff;border:1px solid #eeeeee;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px 20px;border-bottom:2px solid ${ACCENT};">
                <p style="margin:0;font-family:Georgia,'IBM Plex Serif',serif;font-size:22px;font-weight:700;color:${INK};line-height:1.25;">
                  MaestrosAI
                </p>
                <p style="margin:6px 0 0;font-family:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:${MUTED};letter-spacing:0.04em;text-transform:uppercase;">
                  Actuarial Agents Suite
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;font-family:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;font-size:16px;line-height:1.6;color:${INK};">
                <p style="margin:0 0 16px;">Hi {{{FIRST_NAME|there}}},</p>
                <p style="margin:0 0 16px;">
                  We built the <strong>Actuarial Agents Suite</strong> so insurers can use agentic AI on
                  real actuarial work—reserving, pricing, model validation, experience studies, and
                  more—not generic chat alone.
                </p>
                <p style="margin:0 0 16px;">
                  It is a working product with <strong>traceable activity</strong>, <strong>review-friendly outputs</strong>,
                  and <strong>humans in the loop</strong>. If you are moving from pilots to something your teams can
                  actually use, we would love to show you a live walkthrough.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 28px;font-family:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;" align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 auto;">
                  <tr>
                    <td style="border-radius:6px;background-color:${ACCENT};">
                      <a href="${safeDemo}" style="display:inline-block;padding:14px 28px;font-family:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;font-size:15px;font-weight:600;color:#04201a;text-decoration:none;">
                        Book a demo
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="margin:20px 0 0;font-size:14px;line-height:1.5;color:${MUTED};">
                  <a href="${safeLanding}" style="color:${MUTED};text-decoration:underline;">Read the full product page</a>
                  ·
                  <a href="${safeLinkedIn}" style="color:${MUTED};text-decoration:underline;">See our LinkedIn post</a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 28px;font-family:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;line-height:1.55;color:${MUTED};border-top:1px solid #eeeeee;">
                <p style="margin:24px 0 12px;">
                  <strong style="color:${INK};">Why it matters:</strong> regulators and boards are asking for AI governance;
                  teams need outputs reviewers can stand behind. The suite is designed for that middle ground—speed with an audit trail.
                </p>
                <p style="margin:0;">
                  — The MaestrosAI team<br />
                  <a href="https://maestrosai.in" style="color:${ACCENT};text-decoration:none;">maestrosai.in</a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px;font-family:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;font-size:11px;line-height:1.5;color:#999999;border-top:1px solid #f0f0f0;">
                <p style="margin:0;">
                  You received this because you are on our list. If you prefer not to hear from us,
                  <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#888888;">unsubscribe here</a>.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();

  const text = [
    "Hi {{{FIRST_NAME|there}}},",
    "",
    "We built the MaestrosAI Actuarial Agents Suite so insurers can use agentic AI on real actuarial work—reserving, pricing, model validation, and more—with traceable activity and humans in the loop.",
    "",
    "Book a demo:",
    demoUrl,
    "",
    "Full product page:",
    landingUrl,
    "",
    "LinkedIn announcement:",
    linkedInHref,
    "",
    "— The MaestrosAI team",
    "https://maestrosai.in",
    "",
    "Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}",
  ].join("\n");

  return { html, text };
}
