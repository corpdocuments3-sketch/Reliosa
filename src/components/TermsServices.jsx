import { FileText } from "lucide-react";

export default function TermsServices() {
  return (
    <div className="bg-[#f3f4f6]">
      {/* Header Section */}
      <section className="bg-linear-to-tr from-[#e0f7fa] via-[#f3e5f5] to-[#eddec3] text-[#333333] py-20 px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="shadow-lg p-4 rounded-full">
            <FileText size={48} className="text-[#e05d38]" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Terms of Service
        </h1>
        <p className="text-[#6b7280] font-bold">Reliosa.com</p>
        <p className="text-xl text-[#6b7280]">Last Updated: January 30, 2026</p>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-[#6b7280] leading-relaxed font-sans">
        {/* 1. WHO WE ARE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            1. WHO WE ARE
          </h2>
          <p className="mb-4">
            Reliosa ("Reliosa", "we", "us", "our") operates the software and
            services made available at{" "}
            <a
              href="https://www.reliosa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e05d38] hover:underline"
            >
              https://www.reliosa.com
            </a>{" "}
            (the "Service").
          </p>
          <p className="mb-2 font-bold">Contact Details:</p>

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
          <p className="mb-2">
            Address: S/O: Ravindra Gurjar, Balwanta, Rajosi, Bhwani Khera,
            Ajmer, Rajasthan – 305401, India
          </p>

          <p>
            For certain transactions, payments are processed by{" "}
            <strong>Paddle</strong>, which acts as our{" "}
            <strong>Merchant of Record</strong>, as explained in Section 6.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 2. ELIGIBILITY AND ACCOUNTS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            2. ELIGIBILITY AND ACCOUNTS
          </h2>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            2.1 Business Use
          </h3>
          <p className="mb-4">
            The Service is intended for business and professional use only. By
            using the Service, you confirm that you are acting on behalf of a
            business or organization.
          </p>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            2.2 Account Registration
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              You must provide accurate, complete, and current information when
              creating an account.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              login credentials.
            </li>
            <li>
              You are responsible for all activity that occurs under your
              account.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            2.3 Authorized Users
          </h3>
          <p className="mb-2">
            You may allow employees or contractors ("Authorized Users") to
            access your account. You are responsible for their compliance with
            these Terms.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 3. LICENSE AND ACCEPTABLE USE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            3. LICENSE AND ACCEPTABLE USE
          </h2>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            3.1 License Grant
          </h3>
          <p className="mb-4">
            Subject to your compliance with these Terms and payment of
            applicable fees, Reliosa grants you a limited, non-exclusive,
            non-transferable, non-sublicensable license to access and use the
            Service for your internal business purposes during the subscription
            term.
          </p>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            3.2 Acceptable Use
          </h3>
          <p className="mb-2">You must not:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Use the Service in violation of applicable laws or regulations
            </li>
            <li>Upload malware, unlawful, abusive, or infringing content</li>
            <li>Reverse engineer, copy, or attempt to extract source code</li>
            <li>Bypass security, usage limits, or access controls</li>
            <li>Use the Service to build or support a competing product</li>
          </ul>
          <p>
            Reliosa may suspend or terminate access for violations of these
            Terms or Paddle’s acceptable use requirements.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            4. CUSTOMER DATA AND PRIVACY
          </h2>
          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            4.1 Customer Data Ownership
          </h3>
          <p className="mb-4">
            You retain ownership of all data submitted to the Service ("Customer
            Data"). You are responsible for ensuring you have the legal right to
            use and upload such data.
          </p>
          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            4.2 License to Process Data
          </h3>
          <p className="mb-4">
            You grant Reliosa a limited license to host, process, and use
            Customer Data solely to provide, secure, and improve the Service and
            to comply with legal obligations.
          </p>
          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            4.3 Data Protection
          </h3>
          <p className="mb-4">
            Personal data is processed in accordance with our{" "}
            <strong>Privacy Policy</strong>. Where required by law, a Data
            Processing Agreement (DPA) may be provided upon request.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            5. SERVICE AVAILABILITY AND MODIFICATIONS
          </h2>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The Service is provided on an "as available" basis.</li>
            <li>We do not guarantee uninterrupted or error-free operation.</li>
            <li>
              We may modify, suspend, or discontinue features with reasonable
              notice where practicable.
            </li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 6. FEES, PAYMENTS, AND BILLING */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            6. FEES, PAYMENTS, AND BILLING
          </h2>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            6.1 Subscriptions
          </h3>
          <p className="mb-4">
            Access to the Service is provided on a subscription basis (monthly
            or annual), as described on the website or checkout page.
          </p>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            6.2 Paddle as Merchant of Record
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Paddle acts as the Merchant of Record for most transactions</li>
            <li>
              Paddle processes payments, collects taxes, and issues invoices
            </li>
            <li>Paddle’s Buyer Terms and Privacy Policy apply at checkout</li>
            Paddle’s Buyer Terms and Privacy Policy apply at checkout
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            6.3 Renewals and Cancellation
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Subscriptions renew automatically unless cancelled</li>
            <li>
              You may cancel at any time; cancellation stops future billing only
            </li>
            <li>
              Refunds are governed by our <strong>Refund Policy</strong> and
              Paddle’s rules
            </li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 7. INTELLECTUAL PROPERTY */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            7. INTELLECTUAL PROPERTY
          </h2>

          <p className="mb-4">
            All intellectual property rights in the Service remain with Reliosa.
            No rights are granted except as expressly stated in these Terms.
          </p>
          <p className="mb-4">
            If you submit feedback or suggestions, you grant Reliosa a
            royalty-free, perpetual license to use them without restriction.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 8. THIRD-PARTY SERVICES */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            8. THIRD-PARTY SERVICES
          </h2>
          <p className="mb-4">
            The Service may integrate with third-party tools or services.
            Reliosa is not responsible for third-party services, which are
            governed by their own terms and policies.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 9. SUSPENSION AND TERMINATION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            9. SUSPENSION AND TERMINATION
          </h2>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            9.1 Suspension
          </h3>
          <p className="mb-2">We may suspend access if:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Fees are overdue</li>
            <li>There is suspected fraud or abuse</li>
            <li>Required by law or security reasons</li>
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            9.2 Termination
          </h3>
          <p className="mb-4">
            You may stop using the Service at any time. We may terminate access
            for material breach or if the Service is discontinued.
          </p>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            9.3 Effects of Termination
          </h3>
          <p className="mb-2">
            Upon termination, access ends and Customer Data may be deleted after
            a reasonable retention period.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 10. DISCLAIMERS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            10. DISCLAIMERS
          </h2>
          <p className="mb-4">
            The Service is provided "as is" and "as available". To the maximum
            extent permitted by law, we disclaim all warranties, express or
            implied.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 11. LIMITATION OF LIABILITY */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            11. LIMITATION OF LIABILITY
          </h2>
          <p className="mb-2">To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Reliosa is not liable for indirect or consequential damages</li>
            <li>
              Total liability is limited to fees paid by you in the 12 months
              preceding the claim
            </li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 12. INDEMNIFICATION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            12. INDEMNIFICATION
          </h2>
          <p className="mb-2">
            You agree to indemnify Reliosa against claims arising from your
            misuse of the Service or violation of these Terms.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 13. CHANGES TO THESE TERMS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            13. CHANGES TO THESE TERMS
          </h2>
          <p className="mb-4">
            We may update these Terms from time to time. Continued use of the
            Service after changes take effect constitutes acceptance.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 14. GOVERNING LAW */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            14. GOVERNING LAW
          </h2>
          <p className="mb-4">
            These Terms are governed by the laws of India. Courts located in
            India shall have exclusive jurisdiction, unless otherwise required
            by applicable law.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 15. CONTACT */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            15. CONTACT
          </h2>
          <p className="mb-2">
            If you have any questions about these Terms, contact:
          </p>
          <p className="mb-2 font-bold">Reliosa</p>
          <ul className="list-none mb-4 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:support@reliosa.com"
                className="text-[#e05d38] hover:underline"
              >
                support@reliosa.com
              </a>
            </li>
            <li>Phone: +91 89057 58042</li>
            <li>
              Address: S/O: Ravindra Gurjar, Balwanta, Rajosi, Bhwani Khera,
              Ajmer, Rajasthan – 305401, India
            </li>
          </ul>
        </div>
      </section>

      {/* Footer Note */}
      <div className="bg-[#f3f4f6] text-center py-6 px-6 border-t border-gray-700">
        <p className="text-[#6b7280] font-medium">END OF TERMS OF SERVICE</p>
        <p className="text-[#6b7280] text-sm mt-2">
          This Terms of Service is effective as of January 30, 2026. Your
          continued use of Reliosa constitutes acceptance of these Terms.
        </p>
      </div>
    </div>
  );
}
