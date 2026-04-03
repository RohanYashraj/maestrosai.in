import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildActuarialAgentsSuiteBroadcastEmail } from "@/lib/email/actuarial-agents-suite-broadcast-html";

const FROM = "MaestrosAI <newsletter@sutra.rohanyashraj.com>";

type Body = {
  /** If true, sends immediately (or at scheduledAt). Default false = draft in Resend. */
  send?: boolean;
  scheduledAt?: string;
};

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function POST(req: Request) {
  const secret = process.env.BROADCAST_TRIGGER_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Set BROADCAST_TRIGGER_SECRET in the environment." },
      { status: 503 },
    );
  }

  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return unauthorized();
  }

  const apiKey = process.env.RESEND_API_KEY;
  const segmentId = process.env.RESEND_AUDIENCE_ID;
  const linkedInPostUrl = process.env.MAESTROS_LINKEDIN_POST_URL;
  const siteOrigin =
    process.env.BROADCAST_SITE_ORIGIN?.replace(/\/$/, "") ?? "https://maestrosai.in";

  if (!apiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not set." },
      { status: 500 },
    );
  }
  if (!segmentId) {
    return NextResponse.json(
      { error: "RESEND_AUDIENCE_ID is not set (segment ID in Resend)." },
      { status: 500 },
    );
  }
  if (!linkedInPostUrl) {
    return NextResponse.json(
      { error: "MAESTROS_LINKEDIN_POST_URL is not set." },
      { status: 500 },
    );
  }

  let body: Body = {};
  try {
    body = (await req.json()) as Body;
  } catch {
    body = {};
  }

  const send = body.send === true;
  const scheduledAt = body.scheduledAt;

  const resend = new Resend(apiKey);
  const { html, text } = buildActuarialAgentsSuiteBroadcastEmail({
    linkedInPostUrl,
    siteOrigin,
  });

  const base = {
    segmentId,
    name: `Actuarial Agents Suite — ${new Date().toISOString().slice(0, 10)}`,
    subject: "MaestrosAI Actuarial Agents Suite — live demos open",
    previewText:
      "Agentic AI for reserving, pricing, and validation—with governance and a clear audit trail.",
    from: FROM,
    html,
    text,
  } as const;

  const { data, error } = send
    ? await resend.broadcasts.create({
        ...base,
        send: true,
        ...(scheduledAt ? { scheduledAt } : {}),
      })
    : await resend.broadcasts.create({
        ...base,
        send: false,
      });

  if (error) {
    console.error("[Resend broadcast]", error);
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({
    id: data?.id,
    send,
    scheduledAt: send ? scheduledAt ?? null : null,
    message: send
      ? scheduledAt
        ? "Broadcast scheduled."
        : "Broadcast queued / sent per Resend."
      : "Broadcast saved as draft. Send from the Resend dashboard or POST again with send: true.",
  });
}
