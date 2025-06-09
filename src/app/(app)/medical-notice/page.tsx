import { AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function MedicalNoticePage() {
  return (
    <main className="space-y-5">
      <section>
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Important!</AlertTitle>
          <AlertDescription>
            <h1>
              This platform is a research and technological demonstration tool.
              DO NOT substitute professional medical evaluation and SHOULD not
              be used for medical diagnosis.
            </h1>
          </AlertDescription>
        </Alert>
      </section>

      <div className="flex items-center space-x-3 mb-4">
        <h1 className="text-2xl font-bold">
          Limitations of Artificial Intelligence
        </h1>
      </div>

      <section>
        <div className="space-y-4">
          <p>
            Although our AI technology is advanced, it has important limitations
            that you should understand:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <strong>False Positives: </strong> The AI may incorrectly identify
              a condition that is not present.
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <strong>False Negatives:</strong> The AI may not detect existing
              pathologies.
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <strong>Limited Context:</strong> The AI does not consider medical
              history, symptoms, or other tests.
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <strong>Image Quality:</strong> Results depend on the quality and
              appropriateness of the provided image
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="flex items-center space-x-3 mb-4">
          <h2 className="text-2xl font-bold">When to Seek Medical Attention</h2>
        </div>

        <Alert variant="destructive" className="mb-4">
          <AlertTriangle className="size-4" />
          <AlertDescription>
            <p className="font-semibold">
              Seek IMMEDIATE medical attention if you have:
            </p>
          </AlertDescription>
        </Alert>

        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Severe or persistent chest pain
          </li>
          <li className="flex items-start">
            <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Extreme difficulty breathing
          </li>
          <li className="flex items-start">
            <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Coughing up blood
          </li>
          <li className="flex items-start">
            <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Persistent high fever
          </li>
          <li className="flex items-start">
            <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Any other concerning respiratory symptom
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Platform Purpose</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-green-700 mb-3">
              Appropriate Uses:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block size-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Scientific research
              </li>
              <li className="flex items-start">
                <span className="inline-block size-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Medical education
              </li>
              <li className="flex items-start">
                <span className="inline-block size-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Technological demonstration
              </li>
              <li className="flex items-start">
                <span className="inline-block size-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Learning about medical AI
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-red-700 mb-3">
              Inappropriate Uses:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block size-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Medical diagnosis
              </li>
              <li className="flex items-start">
                <span className="inline-block size-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Treatment decisions
              </li>
              <li className="flex items-start">
                <span className="inline-block size-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Replacement for medical consultation
              </li>
              <li className="flex items-start">
                <span className="inline-block size-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Unauthorized commercial use
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center space-x-3 mb-4">
          <h2 className="text-2xl font-bold">Professional Responsibility</h2>
        </div>
        <div className="space-y-4">
          <p className="leading-relaxed">
            If you are a healthcare professional using this platform:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Use only as an educational or research tool
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Maintain your independent clinical judgment
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Respect all ethical and regulatory guidelines
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Inform patients about the limitations of AI
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Medical Data and Privacy</h2>

        <Alert variant="destructive" className="mb-4">
          <AlertTriangle className="size-4" />
          <AlertDescription>
            <p className="leading-relaxed">
              <strong>Important:</strong> Do not submit images containing
              personally identifiable information. Remove all DICOM data,
              metadata, and identifiers before uploading. Please see our Privacy
              Policy for more information.
            </p>
          </AlertDescription>
        </Alert>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Regulation and Compliance</h2>
        <p className="leading-relaxed">
          This platform is not a medical device regulated by ANVISA or other
          regulatory agencies. It does not have approval for clinical use.
          Healthcare professionals should follow the guidelines of their
          professional boards and use only approved tools for diagnosis and
          treatment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">In Case of Emergency</h2>

        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>
            In case of medical emergency, seek immediately:
          </AlertTitle>
          <AlertDescription>
            <ul className="list-inside list-disc text-sm">
              <li>Nearest emergency room</li>
              <li>Call 192 (SAMU)</li>
              <li>Call 193 (Bombeiros)</li>
              <li>Your trusted doctor</li>
            </ul>
          </AlertDescription>
        </Alert>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Contact for Medical Issues</h2>
        <p className="leading-relaxed">
          For questions about the medical aspects of this platform or to report
          issues related to inappropriate medical use, please contact us through
          the contact page.
        </p>
      </section>
    </main>
  )
}
