import { Suspense } from "react";
import LoginContent from "./content";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-8 text-white">Lade…</div>}>
      <LoginContent />
    </Suspense>
  );
}
