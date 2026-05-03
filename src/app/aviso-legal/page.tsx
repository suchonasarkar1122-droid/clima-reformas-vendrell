import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal · Clima Reformas Vendrell",
  description: "Aviso legal de Clima Reformas Vendrell. Información sobre el titular del sitio web reformasvendrell.es, condiciones de uso y propiedad intelectual.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <>
      <section className="bg-dark px-5 pt-32 pb-16">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="font-body font-black text-[36px] md:text-[52px] text-white uppercase leading-[1]">
            Aviso Legal
          </h1>
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px] font-body text-dark space-y-8">
          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              1. Datos identificativos del titular
            </h2>
            <p className="text-subtitle leading-relaxed">
              En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), a continuación se reflejan los siguientes datos:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-subtitle mt-3">
              <li><strong>Denominación social:</strong> Clima Reformas Vendrell</li>
              <li><strong>Domicilio:</strong> C/ Apel·les Fenosa, 16, 43700 El Vendrell, Tarragona</li>
              <li><strong>Teléfono:</strong> 877 278 163</li>
              <li><strong>Email:</strong> info@reformasvendrell.es</li>
              <li><strong>Sitio web:</strong> reformasvendrell.es</li>
            </ul>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              2. Objeto
            </h2>
            <p className="text-subtitle leading-relaxed">
              El presente sitio web tiene como finalidad dar a conocer los servicios de reformas integrales, reformas de cocinas, baños, pisos y locales comerciales que ofrece Clima Reformas Vendrell en el municipio de El Vendrell y localidades del Baix Penedès y la provincia de Tarragona.
            </p>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              3. Condiciones de uso
            </h2>
            <p className="text-subtitle leading-relaxed">
              El acceso al sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Clima Reformas Vendrell ofrece a través de su sitio web, absteniéndose de emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal.
            </p>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              4. Propiedad intelectual e industrial
            </h2>
            <p className="text-subtitle leading-relaxed">
              Todos los contenidos del sitio web, incluyendo sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Clima Reformas Vendrell o de terceros que han autorizado su uso, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual.
            </p>
            <p className="text-subtitle leading-relaxed mt-3">
              Queda prohibida la reproducción, distribución, comunicación pública y transformación de la totalidad o parte de los contenidos de este sitio web sin el consentimiento expreso y por escrito de Clima Reformas Vendrell.
            </p>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              5. Exclusión de responsabilidad
            </h2>
            <p className="text-subtitle leading-relaxed">
              Clima Reformas Vendrell no se hace responsable de los daños y perjuicios de toda naturaleza que pudieran derivarse de la falta de disponibilidad, continuidad o calidad del funcionamiento del sitio web y de sus contenidos, ni del incumplimiento de la expectativa de utilidad que los usuarios hubieran podido atribuir al sitio web.
            </p>
            <p className="text-subtitle leading-relaxed mt-3">
              Clima Reformas Vendrell se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que estos aparezcan presentados o localizados en su portal.
            </p>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              6. Enlaces de terceros
            </h2>
            <p className="text-subtitle leading-relaxed">
              En el caso de que en el sitio web se incluyesen enlaces o hipervínculos hacía otros sitios de internet, Clima Reformas Vendrell no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en dichos hipervínculos u otros sitios de internet.
            </p>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              7. Legislación aplicable y jurisdicción
            </h2>
            <p className="text-subtitle leading-relaxed">
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Tarragona.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
