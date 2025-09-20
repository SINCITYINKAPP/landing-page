export const metadata = {
  title: "Nutzungsbedingungen | Sin City Ink",
  description:
    "Nutzungsbedingungen für die Nutzung der Sin City Ink App für Tattoo-Studios.",
};

export default function TermsPage() {
  return (
    <main className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Nutzungsbedingungen</h1>
      <p>Willkommen bei „Sin City Ink“. Mit der Nutzung dieser App stimmst du zu:</p>
      <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Nur für geschäftliche Nutzung durch Tattoo-Studios.</li>
        <li>Keine unautorisierte Weitergabe von Inhalten.</li>
        <li>Der Service kann jederzeit angepasst werden.</li>
      </ul>
      <p className="mt-6">Stand: September 2025</p>
    </main>
  );
}
