import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <main className="space-y-5">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By using the LungScan AI platform, you agree to comply with and be
            bound by these terms of service. If you do not agree with any part
            of these terms, do not use our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
          <p className="leading-relaxed mb-4">
            LungScan AI offers a platform for analyzing chest X-ray images using
            artificial intelligence for research and educational support
            purposes. Our services include:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Automated analysis of X-ray images
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Detection of possible lung pathologies
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Educational reports on identified conditions
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Generation of synthetic images for testing
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Limitações de Uso</h2>

          <Alert variant="destructive" className="p-4 mb-4">
            <AlertTriangle className="size-4" />
            <AlertTitle>IMPORTANT!</AlertTitle>
            <AlertDescription>
              <h1 className="font-semibold">
                This platform is intended EXCLUSIVELY for research, educational,
                and technological demonstration purposes. It MUST NOT be used
                for medical diagnosis.
              </h1>
            </AlertDescription>
          </Alert>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Does not replace professional medical consultation
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Should not influence treatment decisions
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Results may contain inaccuracies
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Commercial use is prohibited without express authorization
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
          <p className="leading-relaxed mb-4">
            By using our platform, you agree to:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Use the service only for research and educational purposes
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Do not upload images that violate third-party rights
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Maintain the confidentiality of medical data
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Do not attempt to compromise the security of the platform
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Seek professional medical guidance for health-related matters
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            5. Limitation of Liability
          </h2>
          <p className="leading-relaxed mb-4">
            LungScan AI is not responsible for:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Medical decisions based on our results
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Inaccuracies or errors in image analysis
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Damages resulting from improper use of the platform
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Service interruptions or unavailability
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
          <p className="leading-relaxed">
            All intellectual property rights related to the platform, including
            algorithms, interface, documentation, and generated results, remain
            the property of LungScan AI. Users are granted only a limited
            license to use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Service Availability</h2>
          <p className="leading-relaxed">
            We strive to keep the platform available, but do not guarantee
            uninterrupted operation. We may perform maintenance, updates, or
            temporarily suspend the service when necessary.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            8. Modifications to the Terms
          </h2>
          <p className="leading-relaxed">
            We reserve the right to modify these terms at any time. Significant
            changes will be communicated at least 30 days in advance. Continued
            use of the platform after changes constitutes acceptance of the new
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
          <p className="leading-relaxed">
            We may suspend or terminate access to the platform at any time,
            especially in cases of violation of these terms. You may stop using
            the platform at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
          <p className="leading-relaxed">
            These terms are governed by Brazilian law. Any disputes will be
            resolved in the competent courts of Brazil.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">11. Contact</h2>
          <p className="leading-relaxed">
            For questions about these terms of service, please contact us
            through the contact page.
          </p>
        </section>
      </div>
    </main>
  )
}
