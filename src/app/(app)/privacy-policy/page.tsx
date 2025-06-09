export default function PrivacyPolicyPage() {
  return (
    <main className="space-y-5">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="leading-relaxed">
            LungScan AI is committed to protecting your privacy. This policy
            describes how we collect, use, and protect your information when
            using our chest X-ray image analysis platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mb-2">2.1 Medical Images</h3>
              <p className="leading-relaxed">
                We collect the X-ray images you upload for analysis. These
                images are temporarily processed on our servers and are not
                stored permanently.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">2.2 Usage Data</h3>
              <p className="leading-relaxed">
                We collect information about how you use our platform, including
                analysis timestamps, types of files uploaded, and results
                generated.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-mediummb-2">
                2.3 Technical Information
              </h3>
              <p className="leading-relaxed">
                We collect technical information such as IP address, browser
                type, operating system, and performance data to improve our
                services.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            3. How We Use Your Information
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Process and analyze X-ray images using artificial intelligence
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Improve the accuracy and efficiency of our algorithms
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Provide technical support and respond to your inquiries
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Conduct scientific research in an anonymized manner
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Data Protection</h2>
          <p className="leading-relaxed mb-4">
            We have implemented robust security measures to protect your
            information:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Encryption of data in transit and at rest
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Restricted data access to authorized personnel only
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Automatic deletion of images after processing
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Regular security audits
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Data Sharing</h2>
          <p className="leading-relaxed">
            We do not share, sell, or rent your personal information to third
            parties. Anonymized data may be used for collaborative scientific
            research, always respecting ethical and legal standards.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
          <p className="leading-relaxed mb-4">
            According to the General Data Protection Law (LGPD), you have the
            right to:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Request access to your personal data
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Request correction of inaccurate data
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Request deletion of your data
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Revoke consent at any time
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
          <p className="leading-relaxed">
            For questions about this privacy policy or to exercise your rights,
            please contact us through the contact page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Changes to this Policy</h2>
          <p className="leading-relaxed">
            We may update this policy periodically. Significant changes will be
            communicated through our website at least 30 days in advance.
          </p>
        </section>
      </div>
    </main>
  )
}
