export const metadata = {
  title: "Datenschutz | Sin City Ink",
  description:
    "Informationen zur Datenverarbeitung und DSGVO-Konformität bei Sin City Ink.",
};

export default function PrivacyPage() {
  return (
    <main className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Datenschutzrichtlinie</h1>
      <p>Wir verarbeiten nur Daten, die für die App nötig sind:</p>
      <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Keine Weitergabe an Dritte ohne Zustimmung.</li>
        <li>Du kannst Auskunft und Löschung beantragen.</li>
        <li>Datenspeicherung DSGVO-konform.</li>
      </ul>
      <p className="mt-6">Stand: September 2025</p>
    </main>
  );
}
