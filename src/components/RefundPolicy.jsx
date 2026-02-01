import { RefreshCcw } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="bg-[#f3f4f6]">
      {/* Header Section */}
      <section className="bg-linear-to-tr from-[#e0f7fa] via-[#f3e5f5] to-[#eddec3] text-[#333333] py-20 px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="shadow-lg p-4 rounded-full">
            <RefreshCcw size={48} className="text-[#e05d38]" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
        <p className="text-xl text-[#6b7280]">Reliosa.com</p>
        <p className="text-xl text-[#6b7280]">Last Updated: January 30, 2026</p>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-[#6b7280] leading-relaxed font-sans">
        {/* 1. OVERVIEW */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            1. OVERVIEW
          </h2>
          <p className="mb-4">
            This Refund Policy ("Policy") explains how <strong>Reliosa</strong>{" "}
            ("Reliosa", "we", "us", "our") handles refunds, cancellations, and
            credits for subscriptions and purchases made through{" "}
            <a
              href="https://www.reliosa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e05d38] hover:underline"
            >
              https://www.reliosa.com
            </a>
            .
          </p>
          <p className="mb-4">
            This Policy should be read together with our{" "}
            <strong>Terms of Service</strong> and{" "}
            <strong>Privacy Policy</strong>. Payments for Reliosa are processed
            through <strong>Paddle</strong>, which acts as our{" "}
            <strong>Merchant of Record</strong>. Paddle’s refund rules may also
            apply.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 2. REFUND ELIGIBILITY */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            2. ELIGIBILITY FOR REFUNDS
          </h2>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            2.1 Refundable Purchases
          </h3>
          <p className="mb-2">Refunds may be available for:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Monthly subscription plans</li>
            <li>Annual subscription plans</li>
            <li>One-time license or feature purchases</li>
            <li>Plan upgrades or add-ons</li>
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            2.2 Non-Refundable Items
          </h3>
          <p className="mb-2">
            The following are <strong>non-refundable</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Custom development or implementation services</li>
            <li>Consulting, training, or onboarding services once delivered</li>
            <li>Data migration services once completed</li>
            <li>Usage-based or API access fees once activated</li>
            <li>Taxes, GST, VAT, or similar fees already remitted</li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 3. REFUND TIMELINE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            3. REFUND TIMELINE
          </h2>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            3.1 30-Day Money-Back Guarantee
          </h3>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              You may request a refund within{" "}
              <strong>30 days of your initial purchase</strong>
            </li>
            <li>
              Applies only to the <strong>first billing cycle</strong> of a
              subscription
            </li>
            <li>Requests submitted after 30 days are generally not eligible</li>
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            3.2 Exceptions
          </h3>
          <p className="mb-2">
            Refunds may be considered outside the 30-day window in the following
            circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              There is a verified billing error (duplicate or incorrect charge)
            </li>
            <li>
              Reliosa fails to provide core service functionality for more than
              7 consecutive days
            </li>
            <li>Service is discontinued by Reliosa</li>
            <li>
              A refund is required under applicable consumer protection laws
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            3.3 Annual Plans
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Annual subscriptions are refundable within 30 days of purchase
            </li>
            <li>After 30 days, annual plans are non-refundable</li>
            <li>No partial refunds for unused months unless required by law</li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 4. HOW TO REQUEST A REFUND */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            4. HOW TO REQUEST A REFUND
          </h2>

          <p className="mb-4">To request a refund:</p>

          <ul className="list-decimal pl-6 mb-4 space-y-2">
            <li>
              Email{" "}
              <a
                href="mailto:support@reliosa.com"
                className="text-[#e05d38] hover:underline"
              >
                support@reliosa.com
              </a>
            </li>
            <li>
              Subject line: <strong>"Refund Request"</strong>
            </li>
            <li>
              Include:
              <ul className="list-disc pl-6 space-y-1">
                <li>Full name</li>
              </ul>
              <ul className="list-disc pl-6 space-y-1">
                <li>Account email</li>
              </ul>
              <ul className="list-disc pl-6 space-y-1">
                <li>Order ID / transaction reference</li>
              </ul>
              <ul className="list-disc pl-6 space-y-1">
                <li>Reason for the refund</li>
              </ul>
            </li>
          </ul>

          <p className="mb-4">
            We will review refund requests within{" "}
            <strong>5–7 business days</strong>.
          </p>

          <p className="mb-4">If approved:</p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Refunds are processed via Paddle</li>
            <li>Funds are returned to the original payment method</li>
            <li>
              Processing time: <strong>5–10 business days</strong>{" "}
              (bank-dependent)
            </li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 5. CANCELLATION POLICY */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            5. CANCELLATION POLICY
          </h2>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            5.1 Subscription Cancellation
          </h3>
          <p className="mb-2">You may cancel your subscription at any time.</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Cancellation stops <strong>future billing</strong> only
            </li>
            <li>No refunds for the current billing period</li>
            <li>Access continues until the end of the paid term</li>
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            5.2 How to Cancel
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Via Paddle subscription management link</li>
            <li>Through your Reliosa account dashboard</li>
            <li>
              By emailing{" "}
              <a
                href="mailto:support@reliosa.com"
                className="text-[#e05d38] hover:underline"
              >
                support@reliosa.com
              </a>
            </li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 6. DATA HANDLING AFTER REFUND */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            6. DATA HANDLING AFTER REFUND
          </h2>

          <p className="mb-2">If a refund is approved:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Your account may be closed</li>
            <li>
              All stored data may be permanently deleted within{" "}
              <strong>30 days</strong>
            </li>
            <li>
              You are responsible for exporting data before requesting a refund
            </li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 7. PADDLE AS MERCHANT OF RECORD */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            7. PADDLE AS MERCHANT OF RECORD
          </h2>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Paddle handles payment processing, taxes, invoicing, and refunds
            </li>
            <li>
              Paddle may enforce its own refund rules in addition to this Policy
            </li>
            <li>
              Paddle Privacy Policy:{" "}
              <a
                href="https://www.paddle.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F9CF9] hover:underline"
              >
                https://www.paddle.com/legal/privacy
              </a>
            </li>
            <li>
              Paddle Buyer Terms:{" "}
              <a
                href="https://www.paddle.com/legal/checkout-buyer-terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F9CF9] hover:underline"
              >
                https://www.paddle.com/legal/checkout-buyer-terms
              </a>
            </li>
          </ul>

          <p className="mb-4">
            In case of conflict, applicable consumer law will prevail.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 8. CHARGEBACKS & DISPUTES */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            8. CHARGEBACKS & DISPUTES
          </h2>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Initiating a chargeback without contacting Reliosa first may
              result in account suspension
            </li>
            <li>
              We strongly encourage resolving billing issues via{" "}
              <a
                href="mailto:support@reliosa.com"
                className="text-[#e05d38] hover:underline"
              >
                support@reliosa.com
              </a>
            </li>
            <li>
              Fraudulent chargebacks may lead to permanent account termination
            </li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 9. REGIONAL RIGHTS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            9. REGIONAL RIGHTS
          </h2>

          <p className="mb-2">
            Customers in certain regions may have additional rights:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>EU / UK:</strong> 14-day cooling-off period (unless
              service has been fully used)
            </li>
            <li>
              <strong>India:</strong> Refunds governed by applicable consumer
              protection laws
            </li>
            <li>
              <strong>Other regions:</strong> Local consumer laws apply where
              stronger protections exist
            </li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 10. CHANGES TO THIS POLICY */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            10. CHANGES TO THIS POLICY
          </h2>

          <p className="mb-2">
            We may update this Refund Policy from time to time. Updates will be
            posted on this page with a revised "Last Updated" date.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 11. CONTACT INFORMATION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            11. CONTACT INFORMATION
          </h2>

          <p className="mb-2">For refund or billing questions, contact:</p>
          <p className="mb-1 font-bold">Reliosa</p>
          <p className="mb-1">
            Email:{" "}
            <a
              href="mailto:support@reliosa.com"
              className="text-[#e05d38] hover:underline"
            >
              support@reliosa.com
            </a>
          </p>
          <p className="mb-1">Phone: +91 89057 58042</p>
          <p className="mb-1">
            Address: S/O: Ravindra Gurjar, Balwanta, Rajosi, Bhwani Khera,
            Ajmer, Rajasthan – 305401, India
          </p>
        </div>

        <hr className="border-gray-700 my-8" />
      </section>

      {/* Footer Note */}
      <div className="bg-[#f3f4f6] text-center py-6 px-6 border-t border-gray-700">
        <p className="text-[#6b7280] font-medium">END OF REFUND POLICY</p>
        <p className="text-[#6b7280] text-sm mt-2">
          This Refund Policy is effective as of January 30, 2026. Your use of
          Reliosa is subject to this Policy and our Terms of Service.
        </p>
      </div>
    </div>
  );
}
