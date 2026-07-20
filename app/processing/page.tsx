"use client";

import { useEffect, useState } from "react";

const steps = [
  "Analyzing prompt",
  "Preparing generation",
  "Generating video",
  "Finalizing",
];

export default function ProcessingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }

        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-8 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          Creating your AI video
        </h1>

        <p className="mt-3 text-zinc-400">
          Your video is being generated.
        </p>

        <div
          className="
            mt-10
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-900/50
            p-8
          "
        >
          <h2 className="text-xl font-semibold">
            Generation Progress
          </h2>

          <div className="mt-6 space-y-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3"
              >
                <div>
                  {index < currentStep
                    ? "✓"
                    : index === currentStep
                    ? "◉"
                    : "○"}
                </div>

                <span
                  className={
                    index <= currentStep
                      ? "text-white"
                      : "text-zinc-500"
                  }
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-zinc-800 p-4">
            Status:
            <span className="ml-2 font-semibold">
              {currentStep === steps.length - 1
                ? "Completed"
                : "Processing"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}