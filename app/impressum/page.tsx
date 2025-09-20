export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <section className="space-y-4">
        <p><strong>SIN CITY INK UG (haftungsbeschränkt)</strong></p>
        <p>Rosenheimer Str. 167<br/>81671 München<br/>Deutschland</p>

        <p>
          <strong>Geschäftsführer:</strong><br/>
          Markus-Georg Jürgen Schneider
        </p>

        <p>
          <strong>Kontakt:</strong><br/>
          E-Mail: <a className="underline" href="mailto:info@sin-city-ink.app">info@sin-city-ink.app</a><br/>
          Telefon: <a className="underline" href="tel:+491795666840">+49 179 5666840</a>
        </p>

        <p>
          <strong>USt-IdNr.:</strong> DE 323193645<br/>
          <strong>Handelsregister:</strong> HRB 247058, Amtsgericht München
        </p>

        <p>
          <strong>Inhaltlich Verantwortlicher gem. § 18 Abs. 2 MStV:</strong><br/>
          Markus-Georg Jürgen Schneider, Anschrift wie oben
        </p>

        <h2 className="text-2xl font-semibold mt-8">Haftungsausschluss</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
          Autors bzw. Erstellers.
        </p>
      </section>

      <p className="mt-6 text-white/70">Stand: September 2025</p>
    </main>
  );
}
