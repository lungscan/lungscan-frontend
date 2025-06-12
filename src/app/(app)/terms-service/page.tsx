import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <main className="space-y-5">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Aceite dos Termos</h2>
          <p className="leading-relaxed">
            Ao utilizar a plataforma LungScan AI, você concorda em cumprir e
            estar vinculado a estes termos de serviço. Se você não concorda com
            qualquer parte destes termos, não utilize nossa plataforma.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Descrição do Serviço</h2>
          <p className="leading-relaxed mb-4">
            O LungScan AI oferece uma plataforma para análise de imagens de
            raio-x de tórax utilizando inteligência artificial para fins de
            pesquisa e apoio educacional. Nossos serviços incluem:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Análise automatizada de imagens de raio-x
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Detecção de possíveis patologias pulmonares
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Relatórios educacionais sobre condições identificadas
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Geração de imagens sintéticas para testes
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Limitações de Uso</h2>

          <Alert variant="destructive" className="p-4 mb-4">
            <AlertTriangle className="size-4" />
            <AlertTitle>IMPORTANTE!</AlertTitle>
            <AlertDescription>
              <h1 className="font-semibold">
                Esta plataforma é destinada EXCLUSIVAMENTE para fins de
                pesquisa, educação e demonstração tecnológica. NÃO DEVE ser
                utilizada para diagnóstico médico.
              </h1>
            </AlertDescription>
          </Alert>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Não substitui consulta médica profissional
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Não deve influenciar decisões de tratamento
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Os resultados podem conter imprecisões
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              O uso comercial é proibido sem autorização expressa
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            4. Responsabilidades do Usuário
          </h2>
          <p className="leading-relaxed mb-4">
            Ao utilizar nossa plataforma, você concorda em:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Utilizar o serviço apenas para fins de pesquisa e educação
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Não enviar imagens que violem direitos de terceiros
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Manter a confidencialidade dos dados médicos
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Não tentar comprometer a segurança da plataforma
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Buscar orientação médica profissional para questões de saúde
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            5. Limitação de Responsabilidade
          </h2>
          <p className="leading-relaxed mb-4">
            O LungScan AI não se responsabiliza por:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Decisões médicas baseadas em nossos resultados
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Imprecisões ou erros na análise das imagens
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Danos decorrentes do uso inadequado da plataforma
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Interrupções ou indisponibilidade do serviço
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            6. Propriedade Intelectual
          </h2>
          <p className="leading-relaxed">
            Todos os direitos de propriedade intelectual relacionados à
            plataforma, incluindo algoritmos, interface, documentação e
            resultados gerados, permanecem de propriedade do LungScan AI. É
            concedida ao usuário apenas uma licença limitada de uso.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            7. Disponibilidade do Serviço
          </h2>
          <p className="leading-relaxed">
            Buscamos manter a plataforma disponível, mas não garantimos
            funcionamento ininterrupto. Podemos realizar manutenções,
            atualizações ou suspender temporariamente o serviço quando
            necessário.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            8. Modificações dos Termos
          </h2>
          <p className="leading-relaxed">
            Reservamo-nos o direito de modificar estes termos a qualquer
            momento. Mudanças significativas serão comunicadas com pelo menos 30
            dias de antecedência. O uso continuado da plataforma após alterações
            constitui aceitação dos novos termos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">9. Encerramento</h2>
          <p className="leading-relaxed">
            Podemos suspender ou encerrar o acesso à plataforma a qualquer
            momento, especialmente em casos de violação destes termos. Você pode
            deixar de utilizar a plataforma a qualquer momento.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">10. Legislação Aplicável</h2>
          <p className="leading-relaxed">
            Estes termos são regidos pela legislação brasileira. Quaisquer
            disputas serão resolvidas nos tribunais competentes do Brasil.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">11. Contato</h2>
          <p className="leading-relaxed">
            Para dúvidas sobre estes termos de serviço, entre em contato conosco
            pela página de contato.
          </p>
        </section>
      </div>
    </main>
  )
}
