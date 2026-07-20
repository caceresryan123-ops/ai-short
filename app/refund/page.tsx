export default function RefundPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-2 text-5xl font-bold text-white">
          Refund Policy
        </h1>

        <p className="mb-12 text-zinc-400">
          Last Updated: July 20, 2026
        </p>

        <div className="space-y-10 text-zinc-300 leading-8">

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              1. Overview
            </h2>

            <p>
              We strive to provide a reliable AI video generation service.
              This Refund Policy explains when refunds may or may not be available.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              2. AI Video Credits
            </h2>

            <p>
              Each AI video generation consumes one credit once the generation
              process begins.
            </p>

            <p className="mt-3">
              Credits that have already been used cannot be refunded.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              3. Subscription Refunds
            </h2>

            <p>
              Subscription payments are generally non-refundable once processed,
              except where required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              4. Failed Generations
            </h2>

            <p>
              If a generation fails due to a technical issue on our platform,
              we may restore the credit or provide another appropriate solution
              after reviewing the case.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              5. User Errors
            </h2>

            <p>
              Refunds are not provided for generations based on user mistakes,
              including unclear prompts, accidental submissions, or dissatisfaction
              with creative AI results.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              6. Contact Us
            </h2>

            <p>
              If you believe you experienced a technical issue, please contact
              our support team with your account information and project details.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}