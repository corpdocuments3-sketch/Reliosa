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
        <p className="text-xl text-[#6b7280]">
          Last Updated: 07 February, 2026
        </p>
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
            credits for purchases made through{" "}
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
            <strong>Privacy Policy</strong>. All payments for Reliosa are
            processed by <strong>Paddle</strong>, which acts as our{" "}
            <strong>Merchant of Record</strong>. Paddle’s Buyer Terms and refund
            rules apply to all transactions.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 2. ELIGIBILITY */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            2. ELIGIBILITY FOR REFUNDS
          </h2>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            2.1 Refundable Purchases
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Monthly subscription plans</li>
            <li>Annual subscription plans</li>
            <li>One-time license or feature purchases</li>
            <li>Plan upgrades or add-ons</li>
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            2.2 Non-Refundable Items
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Custom development or implementation services</li>
            <li>Consulting, training, or onboarding services once delivered</li>
            <li>Data migration services once completed</li>
            <li>Usage-based or API access fees once activated</li>
            <li>Taxes (GST, VAT, or similar) already remitted</li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 3. 14-DAY REFUND PERIOD */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            3. 14-DAY REFUND PERIOD (PADDLE COMPLIANT)
          </h2>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Customers may cancel their purchase and request a refund within{" "}
              <strong>14 days of the initial purchase date</strong>
            </li>
            <li>
              Applies to <strong>subscriptions and one-time purchases</strong>
            </li>
            <li>
              Refund requests submitted after 14 days are generally not eligible
            </li>
            <li>
              Applies regardless of billing frequency (monthly or annual)
            </li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 4. ANNUAL PLANS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            4. ANNUAL SUBSCRIPTIONS
          </h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Refundable only within 14 days of purchase</li>
            <li>Non-refundable after the 14-day period</li>
            <li>No partial or prorated refunds unless required by law</li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 5. HOW TO REQUEST */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            5. HOW TO REQUEST A REFUND
          </h2>

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
            <li>Subject: <strong>Refund Request</strong></li>
            <li>
              Include your full name, account email, order ID, and refund reason
            </li>
          </ul>

          <p className="mb-4">
            Requests are reviewed within{" "}
            <strong>5–7 business days</strong>.
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Refunds are processed via Paddle</li>
            <li>Returned to the original payment method</li>
            <li>Processing time: 5–10 business days</li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 6. CANCELLATION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            6. CANCELLATION POLICY
          </h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Subscriptions may be cancelled at any time</li>
            <li>Cancellation stops future billing only</li>
            <li>No refunds outside the 14-day period</li>
            <li>Access continues until the end of the paid term</li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 7. DATA */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            7. DATA HANDLING AFTER REFUND
          </h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Account may be closed after refund approval</li>
            <li>Data may be deleted within 30 days</li>
            <li>You must export data before requesting a refund</li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 8. PADDLE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            8. PADDLE AS MERCHANT OF RECORD
          </h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Paddle handles payments, taxes, and refunds</li>
            <li>Paddle Buyer Terms apply</li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 9. CONTACT */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            9. CONTACT INFORMATION
          </h2>
          <p>Email: support@reliosa.com</p>
          <p>Phone: +91 89057 58042</p>
        </div>
      </section>

      <div className="bg-[#f3f4f6] text-center py-6 px-6 border-t border-gray-700">
        <p className="text-[#6b7280] font-medium">END OF REFUND POLICY</p>
      </div>
    </div>
  );
}
