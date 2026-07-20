export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-2 text-5xl font-bold text-white">
          Terms of Service
        </h1>

        <p className="mb-12 text-zinc-400">
          Last Updated: July 20, 2026
        </p>

        <div className="space-y-10 text-zinc-300 leading-8">

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              1. Acceptance of Terms
            </h2>

            <p>
              By accessing or using our platform, you agree to these
              Terms of Service. If you do not agree with these terms,
              you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              2. Our Service
            </h2>

            <p>
              We provide an AI-powered platform that allows users to
              generate short videos from text prompts.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              3. User Accounts
            </h2>

            <p>
              You are responsible for maintaining the security of your
              account and for all activity that occurs under your account.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              4. AI Video Credits
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>1 AI Video = 1 Credit.</li>
              <li>Credits are consumed when a video generation begins.</li>
              <li>Unused credits have no cash value.</li>
              <li>Credits cannot be transferred between accounts.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              5. Acceptable Use
            </h2>

            <p>
              You agree not to use the platform to create, upload, or
              request content that includes:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Illegal content.</li>
              <li>Sexually explicit material.</li>
              <li>Child exploitation.</li>
              <li>Graphic violence.</li>
              <li>Hate speech.</li>
              <li>Harassment.</li>
              <li>Copyright infringement.</li>
              <li>Any activity that violates applicable laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              6. AI Generated Content
            </h2>

            <p>
              AI-generated videos are created automatically. We do not
              guarantee that every result will exactly match your prompt
              or expectations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              7. Subscriptions
            </h2>

            <p>
              Paid subscriptions automatically renew unless canceled.
              Subscription management is handled through our payment
              provider.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              8. Suspension of Accounts
            </h2>

            <p>
              We reserve the right to suspend or permanently terminate
              accounts that violate these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              9. Limitation of Liability
            </h2>

            <p>
              Our service is provided "as is" without warranties of any
              kind. We are not liable for indirect, incidental, or
              consequential damages resulting from the use of our
              platform.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              10. Changes to These Terms
            </h2>

            <p>
              We may update these Terms of Service at any time.
              Continued use of the platform constitutes acceptance
              of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              11. Contact
            </h2>

            <p>
              For questions regarding these Terms of Service,
              please contact us through our support page.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}