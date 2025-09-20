export default function PrivacyPage() {
  return (
    <main className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      <p><strong>Verantwortlicher</strong><br/>
      SIN CITY INK UG (haftungsbeschränkt), Rosenheimer Str. 167, 81671 München, Deutschland<br/>
      E-Mail: info@sin-city-ink.app · Tel.: +49 179 5666840</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Verarbeitete Daten</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Stammdaten (z. B. Name, Kontakt), Nutzungs-/Logdaten</li>
        <li>Inhalte von Nachrichten, die in der App verarbeitet werden (z. B. WhatsApp-Konversationen mit Kunden)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Zwecke</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Bereitstellung der App, Support, Sicherheit</li>
        <li>KI-gestützte Analyse von Konversationen zur Qualitätsverbesserung und Feature-Entwicklung</li>
        <li>Optionale Produkt-/Service-Informationen (sofern zulässig)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Rechtsgrundlagen (Art. 6 DSGVO)</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Art. 6 Abs. 1 b) Vertragserfüllung (Bereitstellung der App)</li>
        <li>Art. 6 Abs. 1 f) berechtigte Interessen (Qualitätsverbesserung, Sicherheit); Widerspruch jederzeit möglich</li>
        <li>Art. 6 Abs. 1 a) Einwilligung, sofern gesetzlich erforderlich (z. B. Marketing)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Empfänger & Drittland</h2>
      <p>Es erfolgt keine unautorisierte Weitergabe an Dritte. Bei Einsatz von Auftragsverarbeitern schließen wir AV-Verträge; ein Drittlandtransfer erfolgt nur mit geeigneten Garantien (Art. 44 ff. DSGVO).</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Speicherdauer</h2>
      <p>So lange wie für die genannten Zwecke erforderlich bzw. gesetzlich vorgeschrieben; anschließend Löschung/Anonymisierung.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Betroffenenrechte</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit</li>
        <li>Widerspruch gegen Verarbeitung auf Grundlage von Art. 6 Abs. 1 f) DSGVO</li>
        <li>Beschwerderecht bei einer Aufsichtsbehörde</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Kontakt Datenschutz</h2>
      <p>info@sin-city-ink.app</p>

      <p className="mt-6">Stand: September 2025</p>
    </main>
  );
}
