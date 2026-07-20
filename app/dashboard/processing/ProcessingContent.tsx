import { Suspense } from "react";
import ProcessingContent from "./ProcessingContent";

export default function ProcessingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <ProcessingContent />
    </Suspense>
  );
}