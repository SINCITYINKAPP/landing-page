"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const search = useSearchParams();
  const err = search.get("error");

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-neutral-900 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <p className="text-white/70 mb-6">
          Melde dich an, um die SIN CITY INK App zu nutzen.
        </p>

        {err && (
          <div className="mb-4 rounded-lg bg-red-500/15 border border-red-500/40 p-3 text-sm">
            Hinweis: TikTok Login ist noch nicht konfiguriert ({err}).
          </div>
        )}

        <Link
          href="/api/auth/tiktok"
          className="block w-full text-center rounded-lg px-4 py-3 font-semibold bg-[#69C9D0] text-black hover:opacity-90 transition mb-3"
        >
          Mit TikTok einloggen
        </Link>

        <button
          type="button"
          className="w-full rounded-lg px-4 py-3 font-semibold border border-white/20 hover:bg-white/10 transition mb-6"
          disabled
          aria-disabled
          title="Bald verfügbar"
        >
          Mit E-Mail einloggen (bald)
        </button>

        <div className="text-center text-sm text-white/60">
          <Link href="/privacy" className="hover:text-white">Datenschutz</Link>
          <span className="mx-2">·</span>
          <Link href="/terms" className="hover:text-white">Nutzungsbedingungen</Link>
          <span className="mx-2">·</span>
          <Link href="/impressum" className="hover:text-white">Impressum</Link>
        </div>
      </div>
    </main>
  );
}
