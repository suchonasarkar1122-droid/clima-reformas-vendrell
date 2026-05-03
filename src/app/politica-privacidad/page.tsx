import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad · Clima Reformas Vendrell",
  description: "Política de privacidad de reformasvendrell.es. Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD aplicable a Clima Reformas Vendrell.",
  alternates: { canonical: "/politica-privacidad" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <section className="bg-dark px-5 pt-32 pb-16">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="font-body font-black text-[36px] md:text-[52px] text-white uppercase leading-[1]">
            Política de Privacidad
          </h1>
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px] font-body text-dark space-y-8">
          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              1. Responsable del tratamiento
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-subtitle">
              <li><strong>Responsable:</strong> Clima Reformas Vendrell</li>
              <li><strong>Dirección:</strong> C/ Apel·les Fenosa, 16, 43700 El Vendrell, Tarragona</li>
              <li><strong>Teléfono:</strong> 877 278 163</li>
              <li><strong>Email:</strong> info@reformasvendrell.es</li>
            </ul>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              2. Finalidad del tratamiento
            </h2>
            <p className="text-subtitle leading-relaxed">
              Los datos personales facilitados a través de los formularios de esta web serán tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle mt-3">
              <li>Gestionar las solicitudes de presupuesto y contacto realizadas por los usuarios.</li>
              <li>Enviar información comercial sobre los servicios de Clima Reformas Vendrell, siempre que el usuario haya dado su consentimiento expreso.</li>
              <li>Mantener la relación contractual con los clientes, incluyendo la facturación y gestión administrativa derivada de los servicios contratados.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              3. Legitimación
            </h2>
            <p className="text-subtitle leading-relaxed">
              La base legal para el tratamiento de los datos es:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle mt-3">
              <li><strong>Consentimiento del interesado:</strong> al rellenar y enviar el formulario de contacto, el usuario otorga su consentimiento expreso para el tratamiento de sus datos con la finalidad indicada.</li>
              <li><strong>Ejecución de un contrato:</strong> cuando el usuario solicita un presupuesto o contrata un servicio.</li>
              <li><strong>Interés legítimo:</strong> para la gestión administrativa y contable de la relación comercial.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              4. Destinatarios de los datos
            </h2>
            <p className="text-subtitle leading-relaxed">
              Los datos personales no serán cedidos a terceros salvo obligación legal. No se realizan transferencias internacionales de datos. Los datos podrán ser comunicados a las administraciones públicas competentes en caso de obligación legal (Hacienda, Seguridad Social, etc.).
            </p>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              5. Plazo de conservación
            </h2>
            <p className="text-subtitle leading-relaxed">
              Los datos personales se conservarán mientras se mantenga la relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales. Los datos de usuarios que soliciten presupuesto sin contratar se conservarán durante un máximo de 12 meses desde la última comunicación, salvo que el usuario solicite su eliminación antes de dicho plazo.
            </p>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              6. Derechos de los interesados
            </h2>
            <p className="text-subtitle leading-relaxed">
              De acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), el usuario puede ejercer los siguientes derechos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle mt-3">
              <li><strong>Derecho de acceso:</strong> conocer qué datos personales están siendo tratados.</li>
              <li><strong>Derecho de rectificación:</strong> solicitar la corrección de datos inexactos.</li>
              <li><strong>Derecho de supresión:</strong> solicitar la eliminación de los datos cuando ya no sean necesarios.</li>
              <li><strong>Derecho de oposición:</strong> oponerse al tratamiento de los datos en determinadas circunstancias.</li>
              <li><strong>Derecho de limitación:</strong> solicitar la limitación del tratamiento en determinados supuestos.</li>
              <li><strong>Derecho de portabilidad:</strong> recibir los datos en un formato estructurado y de uso común.</li>
            </ul>
            <p className="text-subtitle leading-relaxed mt-3">
              Para ejercer cualquiera de estos derechos, el usuario puede dirigirse a <strong>info@reformasvendrell.es</strong> acompañando una copia de su documento de identidad.
            </p>
            <p className="text-subtitle leading-relaxed mt-3">
              Asimismo, el usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent underline">www.aepd.es</a>) si considera que sus derechos no han sido debidamente atendidos.
            </p>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              7. Medidas de seguridad
            </h2>
            <p className="text-subtitle leading-relaxed">
              Clima Reformas Vendrell ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado, conforme al estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
            </p>
          </div>

          <div>
            <h2 className="font-body font-black text-[20px] md:text-[24px] uppercase text-dark mb-4">
              8. Modificaciones de la política
            </h2>
            <p className="text-subtitle leading-relaxed">
              Clima Reformas Vendrell se reserva el derecho de modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. En dichos supuestos, se anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
