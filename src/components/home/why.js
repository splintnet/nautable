const faqs = [
  {
    question: 'Kann ich Shopify auch mit Amazon verbinden?',
    answer:
      'Voraussetzung für eine Amazon-Shopify-Integration ist, dass Sie über einen Shopify-Shop und ein professionelles Amazon Seller-Konto verfügen. Da eine direkte Verbindung zwischen den Programmen Shopify und Amazon nicht möglich ist, benötigen Sie eine Drittanbieter-App. Diese finden Sie ähnlich wie bei Apple oder Android im Shopify App Store. <br/><br/>Sie möchten Ihren Shopify Store mit Amazon verbinden? Sprechen Sie uns an!',
  },
  {
    question: 'Mein Shopify Store ist sehr langsam. Woran kann das liegen?',
    answer:
      'Das Problem hinter der langsameren Geschwindigkeit von Shopify-Webseiten ist häufig die Anzahl der darauf ausgeführten Apps, zu viel nicht verwendeter Code oder asynchrone HTTP Anfragen, die nicht optimiert sind. Performance ist ein essentieller und wichtiger Bestandteil des Erfolges Ihres Stores. Wir untersuchen Ihren Store bis ins Detail und können valide Aussagen über Optimierungspotentiale aufdecken und lösen. Sprechen Sie uns gerne an!',
  },
]

export default function WhyShopify() {
  return (
    <div className="bg-black bg-opacity-20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-300">Wir lieben <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-200">Shopify</span>!
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Und damit sind wir nicht alleine: <span className="text-white">Shopify ist das führende, cloudbasierte Omnichannel-Shopsystem</span>,
              das bereits von über 1 Mio. Unternehmen jeder Größenordnung auf der ganzen Welt genutzt wird.
              <br/><br/>
              Unsere Kunden schätzen an Shopify vor allem die <span className="text-white">große Flexibilität und verlässliche Sicherheit</span>.
              Und mit
              unter das Beste an Shopify: endlich <span className="text-white">keinen Stress mehr mit Hosting und Payment-Integrationen, Shop &
              Server-Backups, Updates und Marketing und Analysen</span>. Konzentriere dich auf das Wesentliche: Dein
              Produkt
              und deinen Verkauf.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-300">{faq.question}</dt>
                  <dd className="mt-2 text-base text-gray-400" dangerouslySetInnerHTML={{__html: faq.answer}}></dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
