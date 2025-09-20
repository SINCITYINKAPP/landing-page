export default function TermsPage() {
  return (
    <main className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Nutzungsbedingungen</h1>

      <p>Diese Bedingungen regeln die Nutzung der SIN CITY INK Tattoo-Studio App.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Nutzung</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Die App ist für geschäftliche Nutzung durch Tattoo-Studios bestimmt.</li>
        <li>Du bist für die Rechtmäßigkeit deiner Inhalte verantwortlich.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. KI-Analyse von Konversationen</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Unsere KI darf Konversationen zwischen dir und deinen Kunden (z. B. via WhatsApp)
          automatisiert analysieren, um die Antwortqualität zu verbessern und neue Funktionen zu entwickeln.
        </li>
        <li>Es findet keine unautorisierte Weitergabe an Dritte statt; die Verarbeitung erfolgt DSGVO-konform.</li>
        <li>Du stellst sicher, dass du deine Kunden hierüber informierst, soweit erforderlich.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Verfügbarkeit & Änderungen</h2>
      <p>Wir können Funktionen ändern/erweitern und Wartungsarbeiten durchführen.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Haftung</h2>
      <p>Wir haften nur nach den gesetzlichen Vorschriften; bei leichter Fahrlässigkeit nur bei Verletzung wesentlicher Pflichten.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Schlussbestimmungen</h2>
      <p>Es gilt deutsches Recht. Gerichtsstand – soweit zulässig – ist München.</p>

      <p className="mt-6">Stand: September 2025</p>
    </main>
  );
}
