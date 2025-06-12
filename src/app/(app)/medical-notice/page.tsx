import { AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function MedicalNoticePage() {
  return (
    <main className="space-y-5">
      <section>
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Importante!</AlertTitle>
          <AlertDescription>
            Esta plataforma é uma ferramenta de pesquisa e demonstração
            tecnológica. NÃO substitui a avaliação médica profissional e NÃO
            DEVE ser usada para diagnóstico médico.
          </AlertDescription>
        </Alert>
      </section>

      <div className="flex items-center space-x-3 mb-4">
        <h1 className="text-2xl font-bold">
          Limitações da inteligência artificial
        </h1>
      </div>

      <section>
        <div className="space-y-4">
          <p>
            Embora nossa tecnologia de IA seja avançada, ela possui limitações
            importantes que você deve entender:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <strong>Falsos positivos: </strong> A IA pode identificar
              incorretamente uma condição que não está presente.
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <strong>Falsos negativos:</strong> A IA pode não detectar
              patologias existentes.
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <strong>Contexto limitado:</strong> A IA não considera histórico
              médico, sintomas ou outros exames.
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <strong>Qualidade da imagem:</strong> Os resultados dependem da
              qualidade e adequação da imagem fornecida.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="flex items-center space-x-3 mb-4">
          <h2 className="text-2xl font-bold">
            Quando procurar atendimento médico
          </h2>
        </div>

        <Alert variant="destructive" className="mb-4">
          <AlertTriangle className="size-4" />
          <AlertDescription>
            <p className="font-semibold">
              Procure ATENDIMENTO MÉDICO IMEDIATO se você tiver:
            </p>
          </AlertDescription>
        </Alert>

        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Dor torácica intensa ou persistente
          </li>
          <li className="flex items-start">
            <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Dificuldade extrema para respirar
          </li>
          <li className="flex items-start">
            <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Tosse com sangue
          </li>
          <li className="flex items-start">
            <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Febre alta persistente
          </li>
          <li className="flex items-start">
            <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Qualquer outro sintoma respiratório preocupante
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Finalidade da plataforma</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-green-700 mb-3">
              Usos apropriados:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block size-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Pesquisa científica
              </li>
              <li className="flex items-start">
                <span className="inline-block size-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Educação médica
              </li>
              <li className="flex items-start">
                <span className="inline-block size-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Demonstração tecnológica
              </li>
              <li className="flex items-start">
                <span className="inline-block size-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Aprendizado sobre IA médica
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-red-700 mb-3">
              Usos inapropriados:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block size-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Diagnóstico médico
              </li>
              <li className="flex items-start">
                <span className="inline-block size-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Decisões de tratamento
              </li>
              <li className="flex items-start">
                <span className="inline-block size-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Substituição de consulta médica
              </li>
              <li className="flex items-start">
                <span className="inline-block size-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Uso comercial não autorizado
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center space-x-3 mb-4">
          <h2 className="text-2xl font-bold">Responsabilidade profissional</h2>
        </div>
        <div className="space-y-4">
          <p className="leading-relaxed">
            Se você é um profissional de saúde utilizando esta plataforma:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Use apenas como ferramenta educacional ou de pesquisa
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Mantenha seu julgamento clínico independente
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Respeite todas as diretrizes éticas e regulatórias
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Informe os pacientes sobre as limitações da IA
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Dados médicos e privacidade</h2>

        <Alert variant="destructive" className="mb-4">
          <AlertTriangle className="size-4" />
          <AlertDescription>
            <p className="leading-relaxed">
              <strong>Importante:</strong> Não envie imagens contendo
              informações pessoais identificáveis. Remova todos os dados DICOM,
              metadados e identificadores antes de fazer o upload. Consulte
              nossa Política de Privacidade para mais informações.
            </p>
          </AlertDescription>
        </Alert>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Regulação e conformidade</h2>
        <p className="leading-relaxed">
          Esta plataforma não é um dispositivo médico regulado pela ANVISA ou
          outros órgãos reguladores. Não possui aprovação para uso clínico.
          Profissionais de saúde devem seguir as diretrizes de seus conselhos
          profissionais e utilizar apenas ferramentas aprovadas para diagnóstico
          e tratamento.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Em caso de emergência</h2>

        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>
            Em caso de emergência médica, procure imediatamente:
          </AlertTitle>
          <AlertDescription>
            <ul className="list-inside list-disc text-sm">
              <li>Pronto-socorro mais próximo</li>
              <li>Ligue 192 (SAMU)</li>
              <li>Ligue 193 (Bombeiros)</li>
              <li>Seu médico de confiança</li>
            </ul>
          </AlertDescription>
        </Alert>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          Contato para questões médicas
        </h2>
        <p className="leading-relaxed">
          Para dúvidas sobre aspectos médicos desta plataforma ou para relatar
          problemas relacionados ao uso médico inadequado, entre em contato
          conosco pela página de contato.
        </p>
      </section>
    </main>
  )
}
