import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Pisos en El Vendrell | CRV",
  description:
    "Reforma de pisos costeros y vacacionales en El Vendrell, Coma-ruga, Sant Salvador. Renovación de instalaciones, suelos, carpintería y acabados. Coste pactado.",
  alternates: { canonical: "/servicios/reformas-pisos" },
  openGraph: {
    title: "Renovación y Reforma de Pisos a Medida en El Vendrell",
    description: "Pisos costeros años 70-80 en Coma-ruga, Sant Salvador y la primera línea del Baix Penedès.",
    url: "/servicios/reformas-pisos",
    images: ["/images/salon-luminoso-mediterraneo-vendrell.webp"],
  },
};

export default function ReformasPisosPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/servicios" },
        { name: "Reformas de Pisos", url: "/servicios/reformas-pisos" },
      ]} />
      <ServiceSchema
        name="Reformas de Pisos en El Vendrell"
        description="Reforma completa o por estancias de pisos costeros, vacacionales y de residencia habitual en El Vendrell y municipios del Baix Penedès."
        url="/servicios/reformas-pisos"
        image="/images/salon-luminoso-mediterraneo-vendrell.webp"
      />
      <HeroService title="Renovación y Reforma de Pisos a Medida en El Vendrell" subtitle="Pisos costeros años 70-80 en Coma-ruga y Sant Salvador, vivienda habitual o apartamento vacacional. Renovamos instalaciones, suelos, carpintería y acabados." image="/images/salon-luminoso-mediterraneo-vendrell.webp" imageAlt="Salón luminoso de piso reformado en El Vendrell" imageTitle="Reforma de pisos en El Vendrell - Clima Reformas Vendrell" h1Keyword="Reformas de pisos en El Vendrell" badge="Pisos costeros" showCTA trustItems={["Reforma parcial o completa", "Equipo propio", "Coste pactado"]} tall />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Pisos del Baix Penedès</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Reformas de pisos en El Vendrell y Coma-ruga
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                La mayoría de pisos que reformamos en El Vendrell tienen entre 40 y 50 años. Coma-ruga y Sant Salvador se levantaron entre los 70 y los 80 con un esquema repetido: pasillo central largo, cocina cerrada que da al patio interior, dos o tres dormitorios mínimos y un único baño con bañera empotrada. Buena ubicación, mala distribución para la vida actual.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Lo que pesa más en estos pisos no es la estética: es la patología. Carpintería de aluminio sin rotura de puente térmico, instalación eléctrica de los 70 sin diferenciales modernos, fontanería con tramos de plomo o hierro galvanizado, filtraciones recurrentes desde fachada y ruido entre vecinos por falta de aislamiento. Cada reforma seria empieza por resolver eso, no por elegir el suelo.
              </p>
              <p className="font-body font-semibold text-dark text-base">Una reforma bien hecha hoy le da a tu piso 30 años más de vida útil.</p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image src="/images/piso-reformado-completo-vendrell.webp" alt="Piso reformado con cocina y pasillo amplio en El Vendrell" title="Reforma completa de piso en El Vendrell" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">¿Reforma completa o parcial?</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Tipos de reforma de pisos: integral o parcial</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">Dos enfoques distintos según tu piso y tu uso, ambos con coste pactado.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] p-8 flex flex-col gap-4 shadow-sm">
              <span className="font-body text-accent text-xs uppercase tracking-[0.2em] font-bold">Opción A</span>
              <h3 className="font-display font-extrabold text-2xl text-dark leading-tight">Reforma integral del piso</h3>
              <p className="font-body text-subtitle text-sm leading-relaxed">
                Vaciado completo, redistribución si hace falta, instalaciones nuevas, suelos, baños, cocina, carpintería y pintura. La opción que tiene sentido cuando heredas un piso desfasado en Sant Salvador, cuando compras una segunda residencia para 20 años de uso, o cuando quieres que tu vivienda habitual quede como nueva tras décadas.
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {[
                  "Cambio de instalaciones eléctricas y boletines",
                  "Nueva fontanería completa y desagües",
                  "Carpintería exterior con rotura de puente térmico",
                  "Posibilidad de redistribuir tabiques no portantes",
                  "Coste pactado por partidas y trato directo",
                ].map((it) => (
                  <li key={it} className="flex gap-3 items-start">
                    <svg className="mt-1 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2.5"><path d="M5 13l4 4L19 7" /></svg>
                    <span className="font-body text-subtitle text-sm leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-[20px] p-8 flex flex-col gap-4 shadow-sm">
              <span className="font-body text-accent text-xs uppercase tracking-[0.2em] font-bold">Opción B</span>
              <h3 className="font-display font-extrabold text-2xl text-dark leading-tight">Reforma parcial por estancias</h3>
              <p className="font-body text-subtitle text-sm leading-relaxed">
                Intervenciones acotadas, una estancia o dos, sin tocar el resto. Lo elige quien acaba de mudarse y necesita el piso operativo desde la primera semana, quien arregla un apartamento de Coma-ruga para alquiler vacacional, o quien va renovando por fases según presupuesto.
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {[
                  "Cocina, baño o suelos como intervenciones independientes",
                  "Pintura completa y cambios de carpintería interior",
                  "Sustitución de ventanas por modelos eficientes",
                  "Plazos cortos: 2 a 5 semanas según alcance",
                  "Permite escalonar la inversión en el tiempo",
                ].map((it) => (
                  <li key={it} className="flex gap-3 items-start">
                    <svg className="mt-1 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2.5"><path d="M5 13l4 4L19 7" /></svg>
                    <span className="font-body text-subtitle text-sm leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Estancia por estancia</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Lo que cambia en cada zona del piso</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Salón y comedor", text: "Apertura visual a la cocina, sustitución de ventanas a balcón por carpintería con rotura de puente térmico, suelos en formato XXL para ganar amplitud y pintura mate de calidad. Donde más se nota una reforma." },
              { title: "Cocina", text: "Demolición, encimera de Dekton o porcelánico, mobiliario hidrófugo con herrajes inox, integración de placa, horno y campana. Si el cliente quiere abrirla al salón, lo gestionamos como obra mayor." },
              { title: "Baños", text: "Cambio de bañera por plato de obra, mampara fija de cristal templado, sanitarios suspendidos, grifería empotrada y porcelánico de gran formato. Lámina impermeabilizante bajo plato y juntas epoxi en zona de ducha." },
              { title: "Dormitorios", text: "Carpintería interior nueva o lacada, armarios empotrados a medida con interior de madera técnica, electricidad reorganizada con tomas a pie de cama y suelos cálidos. Aislamiento acústico entre vecinos cuando lo pide la finca." },
              { title: "Pasillos y entradas", text: "El típico pasillo largo del piso de los 70 se transforma con luz lineal LED, falsos techos parciales y un tratamiento de pintura distinto al resto. Pequeñas intervenciones que cambian la sensación de amplitud." },
              { title: "Terrazas y balcones", text: "En Coma-ruga y Sant Salvador la terraza es la pieza estrella en verano. Repaso de impermeabilización, gres porcelánico antideslizante apto para exterior, iluminación estanca y barandilla revisada. Punto y aparte." },
            ].map((b) => (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-3">
                <h3 className="font-body font-bold text-white text-lg">{b.title}</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Cómo trabajamos</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Nuestro proceso de reforma de pisos paso a paso</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">Cuatro fases sin sobresaltos: planificación, ejecución y entrega revisada.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Visita y patologías", text: "Recorremos el piso contigo, fotografiamos cada estancia, abrimos cajas eléctricas para ver instalación, comprobamos presión de agua y estado de carpintería. Detectamos lo que se ve y lo que no." },
              { step: "02", title: "Propuesta cerrada", text: "Te entregamos presupuesto detallado por partidas con materiales seleccionados, calendario por fases y plan de pagos. Si quieres comparar gama media frente a gama alta, lo hacemos en dos columnas." },
              { step: "03", title: "Obra por fases", text: "Demolición, instalaciones ocultas, albañilería, suelos y revestimientos, carpintería e instalaciones vistas, y pintura. En este orden. Te mantenemos informado del avance para que sigas la obra desde donde vivas." },
              { step: "04", title: "Repaso y entrega", text: "Visita conjunta para revisar acabado por acabado, certificados de instalaciones, prueba de electrodomésticos, limpieza profesional y entrega de la documentación correspondiente. Tu piso ya es tuyo." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-[16px] p-7 flex flex-col gap-4 shadow-sm">
                <span className="font-display font-extrabold text-[48px] text-accent/20 leading-none">{s.step}</span>
                <h3 className="font-body font-bold text-lg text-dark">{s.title}</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">FAQ — Reforma de pisos en El Vendrell</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta reformar un piso en El Vendrell?", a: "Como referencia orientativa por metro cuadrado: renovación parcial (suelos, pintura, una estancia) desde 380 €/m², reforma media (baño, cocina, suelos completos y pintura) desde 520 €/m² y reforma integral con redistribución, instalaciones y carpintería exterior desde 640 €/m². Cada piso parte del estado real de instalaciones, así que te cerramos el coste por partidas tras visitar la vivienda. Sin compromiso." },
              { q: "¿Reformáis pisos con la comunidad de propietarios encima?", a: "Es nuestro día a día en los edificios de Coma-ruga y Sant Salvador. Hablamos antes con la administración de la finca, presentamos calendario y horarios de trabajo, respetamos el reposo del mediodía si lo marca el reglamento interno y coordinamos accesos por ascensor para no entorpecer a vecinos. Si la finca tiene normas específicas para obras en verano, las cumplimos sin discusión." },
              { q: "¿Hay que pedir licencia al Ayuntamiento de El Vendrell?", a: "Depende del alcance. Si solo cambias acabados, basta con una comunicación previa que tramitamos nosotros. Si tocas tabiques no portantes o redistribuyes baño y cocina, hay que presentar declaración responsable con memoria firmada por técnico. Si afectas estructura o fachada, va a licencia mayor con proyecto visado. En el Centre histórico de El Vendrell hay normas adicionales que también gestionamos." },
              { q: "¿Trabajáis con propietarios de apartamentos turísticos?", a: "Sí, es uno de los perfiles que más nos llama en Coma-ruga. Para alquiler vacacional o licencia HUT, optimizamos el coste con materiales que aguantan rotación intensiva en verano: porcelánico antideslizante, mobiliario robusto, grifería de cuerpo macizo y acabados fáciles de limpiar entre estancias. También revisamos el cumplimiento de los requisitos de Generalitat para HUT." },
              { q: "¿Cuánto tarda la reforma de un piso de 80 m²?", a: "Una intervención parcial: 3-5 semanas. Una reforma media (cocina, baño, suelos, pintura): 7-10 semanas. Una reforma integral con instalaciones nuevas y redistribución: 12-16 semanas. Antes de empezar firmamos un calendario por fases y trabajamos para cumplirlo." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-[12px] shadow-sm overflow-hidden">
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-extrabold text-accent text-lg flex-shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-body font-bold text-dark text-base flex-1">{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-6 pb-6 pl-[56px]"><p className="font-body text-subtitle text-sm leading-relaxed">{faq.a}</p></div>
              </details>
            ))}
          </div>
          <p className="font-body text-subtitle/80 text-xs italic text-center mt-8 max-w-[640px] mx-auto">
            Precios orientativos por metro cuadrado. Cada piso se valora en visita técnica gratuita y se cierra por partidas.
          </p>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Solicita presupuesto para reformar tu piso</h2>
          <p className="font-body text-white/90 text-lg max-w-[500px]">Coordinamos la primera visita en El Vendrell, Coma-ruga, Sant Salvador o donde tengas el piso. Te entregamos propuesta detallada por escrito.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">Pedir valoración<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
            <a href="https://wa.me/34623760710" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-full font-body font-bold text-[15px] hover:bg-white/10 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
