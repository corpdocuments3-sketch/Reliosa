import { Shield, Lock } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#f3f4f6]">
      {/* Header Section */}
      <section className="bg-linear-to-tr from-[#e0f7fa] via-[#f3e5f5] to-[#eddec3] text-[#333333] py-20 px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="shadow-lg p-4 rounded-full">
            <Shield size={48} className="text-[#e05d38]" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-[#6b7280] font-bold">Reliosa.com</p>
        <p className="text-xl text-[#6b7280]">Last Updated: January 30, 2026</p>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-[#6b7280] leading-relaxed font-sans">
        {/* 1. INTRODUCTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            1. INTRODUCTION
          </h2>
          <p className="mb-4">
            This Privacy Policy ("Policy") explains how <strong>Reliosa</strong>{" "}
            ("Reliosa", "we", "us", "our") collects, uses, discloses, and
            protects personal data when you visit{" "}
            <a
              href="https://www.reliosa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e05d38] hover:underline"
            >
              https://www.reliosa.com
            </a>{" "}
            , create an account, or use our software and related services
            (collectively, the "Services").
          </p>
          <p className="mb-4">
            This Policy applies to visitors, customers, prospective customers,
            and users of our Services ("you"). It has been drafted with
            reference to standard SaaS privacy practices and is structured to
            meet{" "}
            <strong>Paddle Merchant of Record compliance requirements</strong>,
            including GDPR, UK GDPR, and other applicable data protection laws.
          </p>
          <p className="mb-4">
            By using our Services, you agree to the collection and use of
            information in accordance with this Policy.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 2. INFORMATION WE COLLECT */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            2. INFORMATION WE COLLECT
          </h2>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            2.1 Information You Provide Directly
          </h3>
          <p className="mb-2">
            We may collect personal data that you voluntarily provide,
            including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              <strong>Identification and Contact Information:</strong> Name,
              email address, phone number, postal address
            </li>
            <li>
              <strong>Account Information:</strong> Login credentials, profile
              details, preferences
            </li>
            <li>
              <strong>Billing Information:</strong> Billing address, tax details
              (payments are processed by Paddle)
            </li>
            <li>
              <strong>Communication Data:</strong> Emails, support requests,
              feedback
            </li>
            <li>
              <strong>Business Data:</strong> Information you upload or enter
              while using our Services
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            2.2 Information Collected Automatically
          </h3>
          <p className="mb-2">
            When you access our website or Services, we may automatically
            collect:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>IP address, browser type, device information</li>
            <li>Usage data (pages visited, actions taken, timestamps)</li>
            <li>General location data (city/country level)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mb-2 mt-6">
            2.3 Information from Third Parties
          </h3>
          <p className="mb-2">We may receive information from:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              <strong>Paddle</strong> (Payment and transaction details)
            </li>
            <li>Analytics and hosting service providers</li>
            <li>Legal or regulatory authorities when required by law</li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 3. LEGAL BASIS FOR PROCESSING */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            3. LEGAL BASIS FOR PROCESSING
          </h2>
          <p className="mb-4">
            We process personal data only when a lawful basis applies, including
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              <strong>Performance of a Contract</strong> – to provide and manage
              our Services
            </li>
            <li>
              <strong>Legal Obligation</strong> – compliance with tax,
              accounting, and regulatory laws
            </li>
            <li>
              <strong>Legitimate Interests</strong> – security, fraud
              prevention, service improvemen
            </li>
            <li>
              <strong>Consent</strong> – marketing communications and
              non-essential cookies
            </li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 4. HOW WE USE YOUR INFORMATION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            4. HOW WE USE YOUR INFORMATION
          </h2>
          <p className="mb-4">We use personal data to:</p>

          <div className="space-y-6">
            <div>
              {/* <p className="font-bold text-[#D946EF]">
                4.1 Delivery of Services
              </p> */}
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, operate, and maintain our Services</li>
                <li>Manage accounts and customer support</li>
                <li>Process subscriptions and payments via Paddle</li>
                <li>Send service-related and transactional communications</li>
                <li>Improve performance, security, and user experience</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 5. HOW WE SHARE YOUR INFORMATION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            5. PAYMENT PROCESSING (PADDLE)
          </h2>
          <p className="mb-4">Reliosa uses Paddle as its Merchant of Record.</p>

          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              Paddle handles payment processing, tax calculation, invoicing, and
              compliance
            </li>
            <li>
              Personal data such as name, email, billing address, IP address,
              and transaction details are shared with Paddle
            </li>
            <li>Paddle acts as an independent data controller</li>
          </ul>
          <p className="mb-4">
            <p>
              Paddle's Privacy Policy:
              <a
                href="https://www.paddle.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F9CF9] hover:underline"
              >
                https://www.paddle.com/legal/privacy
              </a>
            </p>
            <p>
              Paddle Checkout Terms:
              <a
                href="https://www.paddle.com/legal/checkout-buyer-terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F9CF9] hover:underline"
              >
                https://www.paddle.com/legal/checkout-buyer-terms
              </a>
            </p>
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 6. DATA SHARING */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            6. DATA SHARING
          </h2>
          <p className="mb-4">
            We do <strong>not sell</strong> personal data. We may share data
            with:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Paddle (payment processing)</li>
            <li>Hosting, analytics, and communication service providers</li>
            <li>Legal authorities if required by law</li>
            <li>Professional advisors (legal, accounting)</li>
          </ul>
          <p className="mb-4">
            All third parties are bound by confidentiality and data protection
            obligations.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />
        {/* 7. INTERNATIONAL DATA TRANSFERS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            7. INTERNATIONAL DATA TRANSFERS
          </h2>
          <p className="mb-4">
            Your data may be processed outside your country of residence. Where
            required, we use appropriate safeguards such as:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Adequacy decisions</li>
            <li>Secure contractual arrangements</li>
          </ul>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 8. DATA RETENTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            8. DATA RETENTION
          </h2>
          <p className="mb-4">
            We retain personal data only as long as necessary:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              Account data: While the account is active and a reasonable period
              after closure
            </li>
            <li>Billing data: As required by tax and financial laws</li>
            <li>Support communications: Up to 24 months</li>
          </ul>
          <p className="mb-4">
            Data is securely deleted or anonymized once no longer required.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 9. COOKIES */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">9. COOKIES</h2>
          <p className="mb-4">We use cookies to:</p>

          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Enable essential website functionality</li>
            <li>Analyze usage and improve performance</li>
            <li>Remember preferences</li>
          </ul>

          <p className="mb-4">
            You can manage cookies through your browser settings. Disabling
            cookies may affect functionality.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 10. DATA SECURITY */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            10. DATA SECURITY
          </h2>
          <p className="mb-4">
            We implement reasonable technical and organizational measures
            including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>SSL/TLS encryption</li>
            <li>Access controls and authentication</li>
            <li>Secure hosting infrastructure</li>
            <li>Monitoring and incident response procedures</li>
          </ul>

          <p className="mb-4">
            However, no system is 100% secure, and users are responsible for
            safeguarding their credentials.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 11. YOUR RIGHTS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            11. YOUR RIGHTS
          </h2>
          <p className="mb-4">
            Depending on your location, you may have rights including:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Access to your personal data</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of data (subject to legal limits)</li>
            <li>Restriction or objection to processing</li>
            <li>Data portability</li>
            <li>Withdrawal of consent</li>
          </ul>

          <p className="mb-4">
            To exercise your rights, contact us using the details below.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 12. CHILDREN'S PRIVACY */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            12. CHILDREN'S PRIVACY
          </h2>
          <p className="mb-4">
            Reliosa does not knowingly collect data from individuals under the
            age of 16. If such data is identified, it will be deleted promptly.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 13. THIRD-PARTY LINKS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            13. THIRD-PARTY LINKS
          </h2>
          <p className="mb-4">
            Our Services may contain links to third-party websites. We are not
            responsible for their privacy practices. Please review their
            policies separately
          </p>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* 14. CHANGES TO THIS POLICY */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            14. CHANGES TO THIS POLICY
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated "Last Updated" date.
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 15. CONTACT INFORMATION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            15. CONTACT INFORMATION
          </h2>
          <p className="mb-4">
            If you have questions or requests regarding this Privacy Policy,
            contact us at:
          </p>
          <div className="rounded-lg mb-4">
            <p className="mb-1">
              <strong>Reliosa</strong>
            </p>
            <p className="mb-1">Domain: https://www.reliosa.com</p>
            <p className="mb-1">Name: Pintu Poswal</p>
            <p className="mb-1">Email: support@reliosa.com</p>
            <p className="mb-1">Phone: +91 89057 58042</p>
            <p className="mb-1">
              Address: S/O: Ravindra Gurjar, Balwanta, Rajosi, Bhwani Khera,
              Ajmer, Rajasthan – 305401, India
            </p>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="bg-[#f3f4f6] text-center py-6 px-6 border-t border-gray-700">
        <p className="text-[#6b7280] font-medium">END OF PRIVACY POLICY</p>
        <p className="text-[#6b7280] text-sm mt-2">
          This Privacy Policy is effective as of January 30, 2026. If you have
          any questions, please contact us at support@reliosa.com.
        </p>
      </div>
    </div>
  );
}
