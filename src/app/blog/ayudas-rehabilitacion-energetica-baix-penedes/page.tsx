import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: { absolute: "Ayudas a la rehabilitación energética en el Baix Penedès" },
  description:
    "Ayudas y deducciones para ventanas, aislamiento o aerotermia en El Vendrell y el Baix Penedès: cómo saber si siguen abiertas y qué piden.",
  alternates: { canonical: "/blog/ayudas-rehabilitacion-energetica-baix-penedes" },
  openGraph: {
    title: "Ayudas a la rehabilitación energética en el Baix Penedès",
    description: "Guía práctica para propietarios de El Vendrell y comarca: tipos de ayuda, obras que suelen encajar y pasos para no perder la convocatoria.",
    url: "/blog/ayudas-rehabilitacion-energetica-baix-penedes",
    type: "article",
    images: ["/images/blog/ayudas-rehabilitacion-energetica-baix-penedes.webp"],
  },
};

export default function BlogAyudasRehabilitacion() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ayudas a la rehabilitación energética en el Baix Penedès",
    description: "Tipos de ayudas y deducciones para mejorar la eficiencia energética de viviendas en El Vendrell y el Baix Penedès, y cómo prepararse para solicitarlas.",
    image: "https://reformasvendrell.es/images/blog/ayudas-rehabilitacion-energetica-baix-penedes.webp",
    author: { "@type": "Organization", name: "Clima Reformas Vendrell" },
    publisher: {
      "@id": "https://reformasvendrell.es/#business",
      "@type": "Organization",
      name: "Clima Reformas Vendrell",
    },
    datePublished: "2026-02-12",
    dateModified: "2026-11-15",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Ayudas a la rehabilitación energética en el Baix Penedès", url: "/blog/ayudas-rehabilitacion-energetica-baix-penedes" },
      ]} />

      <section className="relative h-[400px] md:h-[480px] w-full overflow-hidden">
        <Image src="/images/blog/ayudas-rehabilitacion-energetica-baix-penedes.webp" alt="Ayudas a la rehabilitación energética en el Baix Penedès" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[820px] flex flex-col items-center gap-4">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Ayudas y subvenciones</span>
            <h1 className="font-display font-extrabold text-[28px] md:text-[44px] lg:text-[56px] text-white leading-[1.1]">
              Ayudas a la rehabilitación energética en el Baix Penedès
            </h1>
            <p className="text-white/65 text-sm">12 febrero 2026 · Actualizado el 15 noviembre 2026 · 9 min de lectura</p>
          </div>
        </div>
      </section>

      <article className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[780px]">
          <div className="font-body text-dark space-y-6 text-base leading-relaxed">
            <p className="text-lg text-subtitle">
              Cambiar las ventanas de un apartamento de Sant Salvador, aislar la cubierta de un adosado de El Tancat o sustituir una caldera de gasoil por aerotermia en una casa de Banyeres son obras que, además de bajar la factura, a veces pueden recibir ayudas públicas o desgravar en la declaración de la renta. El problema es que el mapa de ayudas cambia de un año a otro: unas convocatorias se cierran al agotar fondos, otras se prorrogan y aparecen líneas nuevas. Esta guía no pretende darte cifras que mañana pueden haber cambiado, sino explicarte qué tipos de ayuda existen, qué obras suelen encajar y cómo prepararte para no perder la oportunidad.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Los tres tipos de apoyo que conviene conocer</h2>
            <h3 className="font-body font-bold text-dark text-xl">Programas de rehabilitación con fondos europeos</h3>
            <p>
              Desde 2021 los programas de rehabilitación residencial financiados con fondos europeos (regulados por el Real Decreto 853/2021) han sido la principal fuente de ayudas para eficiencia energética. Distinguen entre actuaciones en edificios completos, en viviendas individuales y en barrios delimitados. En Cataluña las convocatorias las gestiona la Agència de l&apos;Habitatge de Catalunya. Muchas de estas líneas tenían plazos ligados al calendario europeo, así que antes de contar con ellas comprueba en la web de la Agència si la convocatoria que te interesa sigue abierta y si quedan fondos.
            </p>
            <h3 className="font-body font-bold text-dark text-xl">Convocatorias autonómicas y locales</h3>
            <p>
              La Generalitat publica periódicamente ayudas para rehabilitación de edificios, accesibilidad y mejora energética, y algunos ayuntamientos complementan con bonificaciones en el impuesto de construcciones para obras que mejoren la eficiencia o instalen energía solar. Vale la pena preguntar en el Ajuntament del Vendrell, o en el del municipio donde esté la vivienda, si existe alguna bonificación vigente antes de pedir la licencia.
            </p>
            <h3 className="font-body font-bold text-dark text-xl">Deducciones en el IRPF</h3>
            <p>
              Las deducciones estatales por obras que reducen la demanda de calefacción y refrigeración o el consumo de energía no renovable han permitido recuperar en la renta una parte importante de la inversión, con porcentajes que han llegado hasta el 60 % en algunos supuestos y con límites por vivienda. Se han ido prorrogando por periodos, por lo que hay que confirmar que estén vigentes en el ejercicio en que pagues la obra. Requieren certificado energético antes y después.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Qué obras suelen encajar</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Ventanas:</strong> sustituir correderas de aluminio sin rotura de puente térmico por carpintería eficiente con doble acristalamiento. Es la mejora más frecuente en los bloques de la costa y una de las que más se nota.</li>
              <li><strong>Aislamiento de fachada o cubierta:</strong> por el exterior cuando la comunidad lo aprueba, o con trasdosado interior en la vivienda cuando no es posible tocar la fachada.</li>
              <li><strong>Climatización eficiente:</strong> sustituir calderas de gasoil o radiadores eléctricos por aerotermia, muy habitual en casas unifamiliares de urbanización y de los pueblos de interior.</li>
              <li><strong>Placas solares:</strong> autoconsumo en cubiertas de casas y adosados, con buena orientación sur en buena parte de la comarca.</li>
            </ul>
            <p>
              Cambiar suelos, sanitarios o pintar no se considera mejora energética. Si la reforma combina ambas cosas, lo que puede acogerse a ayuda es solo la parte energética, y conviene que el presupuesto la separe claramente.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Comunidad de propietarios: donde está el mayor ahorro</h2>
            <p>
              En los bloques de apartamentos de Coma-ruga, Sant Salvador o de la costa vecina de Cunit, las actuaciones sobre el edificio completo (fachada, cubierta, instalaciones comunes) suelen ser las que más ahorro energético consiguen y las que han tenido porcentajes de ayuda más altos. La dificultad es que necesitan acuerdo en junta, un técnico que redacte el proyecto y, a menudo, un agente que coordine la gestión. Si tu comunidad tiene la fachada pendiente de reparar, es un buen momento para plantear que la reparación incluya aislamiento.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Pasos para prepararte</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Certificado energético inicial.</strong> Casi todas las ayudas y deducciones lo exigen antes de empezar la obra. Sin él no hay forma de demostrar la mejora.</li>
              <li><strong>No empieces antes de tiempo.</strong> Algunas convocatorias solo admiten obras iniciadas después de la solicitud. Infórmate antes de firmar el contrato de obra.</li>
              <li><strong>Presupuesto separado.</strong> Distingue partidas energéticas del resto para que la justificación sea clara.</li>
              <li><strong>Guarda facturas y pagos bancarios.</strong> Los pagos en efectivo suelen quedar fuera de las deducciones.</li>
              <li><strong>Certificado final.</strong> Al terminar, un nuevo certificado acredita la mejora conseguida.</li>
            </ul>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Cómo te ayudamos desde Clima Reformas Vendrell</h2>
            <p>
              Cuando una obra tiene componente energético, la planteamos con un técnico colaborador que emite los certificados antes y después y estima la mejora prevista. Te orientamos sobre qué líneas pueden aplicar en ese momento, preparamos un presupuesto con las partidas energéticas separadas y te facilitamos la documentación técnica que pidan. La solicitud la firmas tú como titular, y la decisión final sobre la ayuda corresponde siempre a la administración.
            </p>
            <p>
              Si estás pensando en una renovación completa, encaja bien con una <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline">reforma integral</Link>, porque permite aislar y cambiar ventanas mientras la casa está vacía. Si solo quieres mejorar el confort de un apartamento, revisa también nuestra guía sobre <Link href="/blog/humedad-condensacion-pisos-playa-invierno" className="text-accent font-semibold underline">condensación en pisos de playa en invierno</Link>, porque muchas veces el mismo cambio de ventanas resuelve ambos problemas.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">¿Tu obra podría tener ayuda?</h2>
            <p>
              Cuéntanos qué quieres hacer y dónde está la vivienda, en El Vendrell, en <Link href="/zonas/reformas-banyeres-penedes" className="text-accent font-semibold underline">Banyeres del Penedès</Link> o en cualquier municipio del Baix Penedès, y te decimos qué partidas podrían encajar. <Link href="/contacto" className="text-accent font-semibold underline">Contacta con nosotros</Link>.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Revisamos si tu reforma puede tener ayuda?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Te orientamos sin coste y preparamos con un técnico la documentación que pida la convocatoria.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-dark-card transition-colors">
            Consultar ayudas <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
