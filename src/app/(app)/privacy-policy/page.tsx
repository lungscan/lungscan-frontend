export default function PrivacyPolicyPage() {
  return (
    <main className="space-y-5">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
          <p className="leading-relaxed">
            O LungScan AI está comprometido com a proteção da sua privacidade.
            Esta política descreve como coletamos, usamos e protegemos suas
            informações ao utilizar nossa plataforma de análise de imagens de
            raio-x de tórax.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            2. Informações que Coletamos
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mb-2">2.1 Imagens Médicas</h3>
              <p className="leading-relaxed">
                Coletamos as imagens de raio-x que você envia para análise.
                Essas imagens são processadas temporariamente em nossos
                servidores e não são armazenadas permanentemente.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">2.2 Dados de Uso</h3>
              <p className="leading-relaxed">
                Coletamos informações sobre como você utiliza nossa plataforma,
                incluindo horários de análise, tipos de arquivos enviados e
                resultados gerados.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">
                2.3 Informações Técnicas
              </h3>
              <p className="leading-relaxed">
                Coletamos informações técnicas como endereço IP, tipo de
                navegador, sistema operacional e dados de desempenho para
                melhorar nossos serviços.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            3. Como Usamos Suas Informações
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Processar e analisar imagens de raio-x usando inteligência
              artificial
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Melhorar a precisão e eficiência de nossos algoritmos
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Fornecer suporte técnico e responder às suas solicitações
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Realizar pesquisas científicas de forma anonimizada
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Proteção de Dados</h2>
          <p className="leading-relaxed mb-4">
            Implementamos medidas de segurança robustas para proteger suas
            informações:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Criptografia dos dados em trânsito e em repouso
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Acesso restrito aos dados apenas para pessoal autorizado
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Exclusão automática das imagens após o processamento
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Auditorias de segurança regulares
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            5. Compartilhamento de Dados
          </h2>
          <p className="leading-relaxed">
            Não compartilhamos, vendemos ou alugamos suas informações pessoais
            para terceiros. Dados anonimizados podem ser utilizados para
            pesquisas científicas colaborativas, sempre respeitando padrões
            éticos e legais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Seus Direitos</h2>
          <p className="leading-relaxed mb-4">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o
            direito de:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Solicitar acesso aos seus dados pessoais
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Solicitar a correção de dados incorretos
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Solicitar a exclusão dos seus dados
            </li>
            <li className="flex items-start">
              <span className="inline-block size-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Revogar o consentimento a qualquer momento
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Contato</h2>
          <p className="leading-relaxed">
            Para dúvidas sobre esta política de privacidade ou para exercer seus
            direitos, entre em contato conosco pela página de contato.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            8. Alterações nesta Política
          </h2>
          <p className="leading-relaxed">
            Podemos atualizar esta política periodicamente. Mudanças
            significativas serão comunicadas em nosso site com pelo menos 30
            dias de antecedência.
          </p>
        </section>
      </div>
    </main>
  )
}
