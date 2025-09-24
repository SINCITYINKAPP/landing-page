import { NextResponse } from "next/server";

export async function GET() {
  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const redirectUri = process.env.TIKTOK_REDIRECT_URI; // z.B. https://sin-city-ink.app/api/auth/tiktok/callback
  const state = Math.random().toString(36).slice(2);

  if (!clientKey || !redirectUri) {
    // Noch nicht konfiguriert -> zurück zur Login-Seite mit Hinweis
    const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    return NextResponse.redirect(new URL("/login?error=not-configured", base));
  }

  const authorize = new URL("https://www.tiktok.com/v2/auth/authorize/");
  authorize.searchParams.set("client_key", clientKey);
  authorize.searchParams.set("response_type", "code");
  authorize.searchParams.set("scope", "user.info.basic");
  authorize.searchParams.set("redirect_uri", redirectUri);
  authorize.searchParams.set("state", state);

  return NextResponse.redirect(authorize.toString());
}
