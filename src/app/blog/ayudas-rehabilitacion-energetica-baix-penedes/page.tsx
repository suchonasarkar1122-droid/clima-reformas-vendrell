import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Ayudas a la rehabilitación energética en el Baix Penedès | CRV",
  description:
    "Fondos Next Generation, ayudas de la Generalitat e IDAE para rehabilitación energética de pisos y casas en el Baix Penedès. Tramitación incluida.",
  alternates: { canonical: "/blog/ayudas-rehabilitacion-energetica-baix-penedes" },
  openGraph: {
    title: "Ayudas a la rehabilitación energética en el Baix Penedès",
    description: "Subvenciones disponibles para mejorar la eficiencia energética de tu vivienda en El Vendrell, Calafell, Cunit y comarca.",
    url: "/blog/ayudas-rehabilitacion-energetica-baix-penedes",
    type: "article",
    images: ["/images/casa-eficiencia-energetica-vendrell.webp"],
  },
};

export default function BlogAyudasRehabilitacion() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ayudas a la rehabilitación energética en el Baix Penedès en 2026",
    description: "Guía de subvenciones para rehabilitación energética en pisos y casas del Baix Penedès.",
    image: "https://reformasvendrell.es/images/casa-eficiencia-energetica-vendrell.webp",
    author: { "@type": "Organization", name: "Clima Reformas Vendrell" },
    publisher: {
      "@id": "https://reformasvendrell.es/#business",
      "@type": "Organization",
      name: "Clima Reformas Vendrell",
    },
    datePublished: "2026-02-12",
    dateModified: "2026-02-12",
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
        <Image src="/images/casa-eficiencia-energetica-vendrell.webp" alt="Casa moderna con jardín y eficiencia energética en el Baix Penedès" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[820px] flex flex-col items-center gap-4">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Ayudas y subvenciones</span>
            <h1 className="font-display font-extrabold text-[28px] md:text-[44px] lg:text-[56px] text-white leading-[1.1]">
              Ayudas a la rehabilitación energética en el Baix Penedès
            </h1>
            <p className="text-white/65 text-sm">12 febrero 2026 · 9 min de lectura</p>
          </div>
        </div>
      </section>

      <article className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[780px]">
          <div className="font-body text-dark space-y-6 text-base leading-relaxed">
            <p className="text-lg text-subtitle">
              Si vives en El Vendrell o cualquier municipio del Baix Penedès y te estás planteando una reforma que incluya mejoras energéticas, hay varias líneas de ayudas activas en 2026 que pueden financiar entre el 40% y el 80% del coste. Repasamos las principales y qué hace falta para solicitarlas.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">1. Fondos Next Generation: Programas 1, 3 y 4</h2>
            <p>
              Las ayudas estatales financiadas con fondos europeos siguen activas en 2026 a través de los Programas del Real Decreto 853/2021. Las más relevantes para viviendas individuales del Baix Penedès son:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Programa 4 (vivienda unifamiliar o piso):</strong> hasta 18.800 € por vivienda si se reduce el consumo de energía primaria no renovable un 30% o más. Habitual en pisos años 70 con cambio de carpintería y aislamiento.</li>
              <li><strong>Programa 3 (edificios):</strong> hasta el 80% del coste si la comunidad de vecinos aborda una rehabilitación que mejore al menos dos letras la calificación energética. Muy útil en edificios costeros de Coma-ruga o Cunit Platja.</li>
              <li><strong>Programa 1 (barrios):</strong> ayudas a actuaciones a nivel barrio para Entornos Residenciales de Rehabilitación Programada (ERRP). Consulta en el ayuntamiento si tu barrio está incluido.</li>
            </ul>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">2. Ayudas de la Generalitat de Catalunya</h2>
            <p>
              La Agència de l&apos;Habitatge de Catalunya gestiona ayudas autonómicas complementarias para mejora de eficiencia energética, accesibilidad y rehabilitación estructural. Suelen abrirse convocatorias anuales con plazos limitados, así que conviene tener el proyecto listo para presentarlo cuando se publica el BOE/DOGC.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">3. Programa MOVES III y deducciones IRPF</h2>
            <p>
              MOVES III financia puntos de recarga para vehículo eléctrico (interesante si tu casa o garaje en El Vendrell, Calafell o Cunit lo permite). Y la deducción del IRPF por obras de mejora de eficiencia energética llega hasta el 60% del coste deducible (con límites por vivienda).
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">4. Qué obras se subvencionan habitualmente</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Sustitución de carpintería exterior por ventanas con rotura de puente térmico (muy común en pisos de Coma-ruga y Sant Salvador).</li>
              <li>Aislamiento de fachadas por el exterior (SATE) o por el interior si SATE no es viable.</li>
              <li>Cambio de calderas de gasoil por sistemas de aerotermia o caldera de condensación de alta eficiencia.</li>
              <li>Instalación de paneles solares fotovoltaicos en cubiertas (muy aprovechable en casas de Banyeres del Penedès o Saifores).</li>
            </ul>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">5. Cómo lo gestionamos en Clima Reformas Vendrell</h2>
            <p>
              Si la obra que estás planificando tiene componente energético, lo coordinamos con un técnico colaborador (arquitecto o ingeniero) que prepara el certificado energético antes y después, calcula la mejora prevista y redacta la memoria justificativa para la solicitud de ayudas. Tú firmas la solicitud y nosotros nos encargamos del seguimiento administrativo.
            </p>
            <p>
              No todas las reformas son subvencionables: si solo cambias suelos, sanitarios y pintura, no aplica. Pero si vas a tocar carpintería exterior, climatización o aislamiento, vale la pena estudiarlo.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">¿Tu obra puede aprovechar ayudas?</h2>
            <p>
              Si quieres saber si tu reforma en El Vendrell, Calafell, Cunit u otro municipio del Baix Penedès es elegible para alguna ayuda activa, escríbenos. Te decimos qué partidas pueden subvencionarse y, si tiene sentido, ajustamos el proyecto para maximizar el retorno. <Link href="/contacto" className="text-accent font-semibold underline">Contáctanos</Link>.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Tu reforma puede acogerse a ayudas?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Te asesoramos sin coste sobre qué partidas pueden subvencionarse y gestionamos la documentación con un técnico colaborador.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-dark-card transition-colors">
            Consultar ayudas <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
