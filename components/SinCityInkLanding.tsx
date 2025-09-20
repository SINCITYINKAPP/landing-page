"use client";
import Image from "next/image";
import Link from "next/link";

export default function SinCityInkLanding() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <header className="bg-black">
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <Image
            src="/SCI_APP_Logo_weiß.png"
            alt="Sin City Ink Logo"
            width={160}
            height={60}
          />
          <ul className="hidden md:flex space-x-8 text-white/80">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#preise" className="hover:text-white">Preise</a></li>
            <li><a href="#onboarding" className="hover:text-white">Onboarding</a></li>
            <li><a href="#kontakt" className="hover:text-white">Kontakt</a></li>
            {/* Optional: sofort-Links zu den Rechtstexten im Header */}
            {/* <li><Link href="/privacy" className="hover:text-white">Datenschutz</Link></li>
            <li><Link href="/terms" className="hover:text-white">AGB</Link></li> */}
          </ul>
        </nav>

        <div className="text-center py-28 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Die komplette Automatisierungs-App für Tattoo-Studios
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Von Marketing bis Terminverwaltung – alles in einer App.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#preise"
              className="bg-[#e11d48] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
            >
              Jetzt starten
            </a>
            <a
              href="#demo"
              className="border-2 border-[#e11d48] text-[#e11d48] px-6 py-3 rounded-lg font-semibold hover:bg-[#e11d48] hover:text-white"
            >
              Demo ansehen
            </a>
          </div>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
          {[
            "Influencer-Autopilot (Social Media Content & Reichweite)",
            "Local-SEO Autopilot (Google Business optimiert automatisch)",
            "Broadcast-Kampagnen (WhatsApp & E-Mail Aktionen)",
            "Video-Ideen-Engine (trendbasierte Content-Ideen)",
            "Nudge-Engine (smarte Erinnerungen & Freigaben)",
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshot / Visual */}
      <section className="py-20 bg-neutral-900 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Alles in einem Tool – sofort einsatzbereit
        </h2>
        <div className="flex justify-center">
          <Image
            src="/screenshot.png"
            alt="App Screenshot"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Preise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Basisversion", price: "250 € / Monat" },
            { title: "Premiumversion", price: "500 € / Monat" },
          ].map((plan, idx) => (
            <div key={idx} className="bg-white text-black p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
              <p className="text-2xl font-bold mb-6">{plan.price}</p>
              <a
                href="#abo"
                className="block bg-[#e11d48] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-red-700"
              >
                Jetzt Abo starten
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding */}
      <section id="onboarding" className="py-20 bg-neutral-900 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Schnelles Onboarding</h2>
        <p className="text-white/80 mb-4">In 3–4 Tagen startklar.</p>
        <p className="text-white/80">Individuelle Einrichtung Schritt für Schritt.</p>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Kundenstimmen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p>„Beste Automatisierung, spart mir täglich Stunden!“</p>
            <p className="mt-4 font-semibold">– Max Mustermann</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p>„Endlich eine App speziell für Tattoo-Studios!“</p>
            <p className="mt-4 font-semibold">– Anna Beispiel</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-neutral-900 text-white px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">Kann ich kündigen?</summary>
          <p className="mt-2 text-white/80">Ja, jederzeit monatlich kündbar.</p>
        </details>
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">Ist die App DSGVO-konform?</summary>
          <p className="mt-2 text-white/80">Ja, alle Daten werden DSGVO-konform gespeichert.</p>
        </details>
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">Funktioniert WhatsApp?</summary>
          <p className="mt-2 text-white/80">Ja, WhatsApp-Integration ist direkt eingebaut.</p>
        </details>
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">Welche Zahlungsarten gibt es?</summary>
          <p className="mt-2 text-white/80">Kreditkarte, PayPal, SEPA-Lastschrift.</p>
        </details>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center text-white/70">
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noreferrer">TikTok</a>
          <a href="#" target="_blank" rel="noreferrer">YouTube</a>
        </div>
        <p>© 2025 Sin City Ink – Alle Rechte vorbehalten</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="/impressum">Impressum</Link>
          <Link href="/privacy">Datenschutz</Link>
          <Link href="/terms">Nutzungsbedingungen</Link>
        </div>
      </footer>
    </div>
  );
}
