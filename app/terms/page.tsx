export default function TermsPage() {
  return (
    <main className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Nutzungsbedingungen</h1>
      <p>Willkommen bei „Sin City Ink“. Mit der Nutzung dieser App stimmst du zu:</p>

      <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Nur für geschäftliche Nutzung durch Tattoo-Studios.</li>
        <li>Keine unerlaubte Weitergabe von Inhalten.</li>
        <li>Der Service kann jederzeit angepasst werden.</li>
        <li>
          Die KI der SIN CITY INK Tattoo-Studio-App darf Konversationen zwischen
          Nutzern und deren Kunden via WhatsApp analysieren, um die Qualität der
          Antworten zu verbessern und neue Funktionen zu entwickeln.
        </li>
        <li>Die Analyse erfolgt ausschließlich automatisiert und unter Beachtung der DSGVO.</li>
        <li>Es findet keine unautorisierte Weitergabe der Daten an Dritte statt.</li>
      </ul>

      <p className="mt-6">Stand: September 2025</p>
    </main>
  );
}
