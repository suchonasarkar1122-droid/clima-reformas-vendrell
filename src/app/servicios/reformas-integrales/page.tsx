import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas Integrales en El Vendrell | CRV",
  description:
    "Reforma integral de pisos costeros, casas de pueblo y segundas residencias en El Vendrell y Baix Penedès. Coste pactado, equipo propio y trato cercano.",
  alternates: { canonical: "/servicios/reformas-integrales" },
  openGraph: {
    title: "Reforma Integral de Viviendas en El Vendrell · CRV",
    description: "Renovación llave en mano para pisos, casas de pueblo y segundas residencias en el Baix Penedès.",
    url: "/servicios/reformas-integrales",
    images: ["/images/reforma-integral-vivienda-vendrell.webp"],
  },
};

export default function ReformasIntegralesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/servicios" },
        { name: "Reformas Integrales", url: "/servicios/reformas-integrales" },
      ]} />
      <ServiceSchema
        name="Reformas Integrales en El Vendrell"
        description="Reforma integral llave en mano de pisos costeros, casas de pueblo y segundas residencias en El Vendrell y todo el Baix Penedès."
        url="/servicios/reformas-integrales"
        image="/images/reforma-integral-vivienda-vendrell.webp"
      />

      <HeroService
        title="Reforma Integral de Viviendas en El Vendrell: Proyecto Llave en Mano"
        subtitle="Renovamos tu piso costero, casa de pueblo o segunda residencia desde el primer alicatado hasta el último interruptor. Coste pactado y obra coordinada por una sola persona."
        image="/images/reforma-integral-vivienda-vendrell.webp"
        imageAlt="Reforma integral llave en mano en El Vendrell"
        imageTitle="Reforma integral residencial en El Vendrell"
        h1Keyword="Reformas integrales en El Vendrell"
        badge="Servicio integral"
        showCTA
        trustItems={["Obras entregadas", "Experiencia en el Baix Penedès", "Coste pactado"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">
                Reforma integral residencial
              </p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Reforma integral llave en mano en El Vendrell
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Tu vivienda renovada sin gestionar diez gremios distintos. Coordinar una reforma integral cuando trabajas en otra ciudad o pasas pocos días al mes en El Vendrell es agotador. Nos hacemos cargo de todo: derribo, fontanería, eléctrica, carpintería, suelos, pintura, sanitarios y acabados. Un único contrato, un único interlocutor.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Trabajamos sobre pisos costeros años 70-80 (Coma-ruga, Sant Salvador, Calafell Platja, Cunit Platja), casas de pueblo del centro histórico de El Vendrell o L&apos;Arboç, y viviendas en zonas residenciales como El Tancat o Segur de Calafell. Cada tipología pide soluciones técnicas específicas.
              </p>
              <p className="font-body font-semibold text-dark text-base">
                Coste fijo desde la firma del proyecto. Sin partidas ocultas.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/cocina-funcional-reforma-vendrell.webp"
                alt="Cocina abierta al salón en reforma integral en El Vendrell"
                title="Reforma integral con cocina abierta en El Vendrell"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Beneficios</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">
              Por qué tiene sentido la reforma integral
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Revaloriza tu vivienda", text: "Un piso reformado en Coma-ruga o Calafell Platja se vende un 25-40% más caro y se alquila en plataformas vacacionales con tarifa premium. La inversión retorna." },
              { title: "Un solo contrato", text: "Olvídate de coordinar fontanero, electricista, albañil y carpintero por separado. Un proyecto, un cronograma, un presupuesto y un responsable al que llamar." },
              { title: "Eficiencia energética", text: "Aprovechamos la obra para cambiar carpinterías por aluminio o PVC con rotura de puente térmico, reforzar aislamientos y modernizar climatización. Menos gasto en facturas." },
              { title: "Materiales pensados para la costa", text: "Porcelánicos antideslizantes, pinturas hidrófugas, herrajes inox, sellados resistentes a sal. La humedad marina del Mediterráneo no perdona los atajos." },
            ].map((b) => (
              <div key={b.title} className="flex gap-5 bg-white/5 border border-white/10 rounded-[16px] p-7">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-body font-bold text-lg text-white">{b.title}</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Cómo lo hacemos</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Nuestro proceso de reforma integral paso a paso</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">El método CRV en cuatro pasos: planificación seria y resultados visibles cada semana.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Visita técnica gratuita", text: "Pasamos por tu piso o casa en El Vendrell, evaluamos el estado real, escuchamos tu plan y resolvemos dudas técnicas en el momento." },
              { step: "02", title: "Proyecto y presupuesto", text: "Elaboramos planos, fichas de materiales y cronograma. Firmamos un coste pactado por partidas para que sepas dónde va cada euro." },
              { step: "03", title: "Ejecución coordinada", text: "Equipo propio que avanza por fases. Te mantenemos informado del avance para que sigas la obra aunque vivas fuera de la comarca." },
              { step: "04", title: "Entrega cuidada", text: "Te devolvemos la vivienda con limpieza profesional, revisión punto a punto y la documentación correspondiente al cierre de obra." },
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

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Qué cubre el servicio</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Lo que incluye una reforma integral</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Demolición y gestión de residuos", "Fontanería y desagües nuevos", "Eléctrica certificada y boletines", "Suelos y revestimientos cerámicos", "Carpintería interior y exterior", "Pintura y acabados finales"].map((item) => (
              <div key={item} className="flex items-center gap-4 bg-white rounded-[12px] p-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-body font-semibold text-dark text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">FAQ — Reforma integral en El Vendrell</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta una reforma integral en El Vendrell?", a: "Trabajamos con tres rangos orientativos por metro cuadrado, según acabados: gama esencial desde 450 €/m², gama media-alta desde 580 €/m² y gama premium desde 720 €/m². Cada vivienda parte del estado real de instalaciones y estructura, así que el cierre del coste se hace siempre tras la visita técnica con detalle por partidas. Sin sorpresas a mitad de obra." },
              { q: "¿Cuánto tiempo lleva una reforma integral?", a: "Un piso costero de 70-90 m² lleva entre 8 y 12 semanas. Una casa de pueblo de tres plantas, 14-20 semanas. En la primera visita marcamos un calendario por fases y nos comprometemos con él." },
              { q: "¿Tengo que mudarme durante la obra?", a: "Para una reforma integral con instalaciones nuevas y movimiento de tabiques, sí. Si tu vivienda en El Vendrell es segunda residencia, no es problema. Si es la habitual, planificamos la obra en periodos de vacaciones o coordinamos un alojamiento temporal." },
              { q: "¿Los materiales están incluidos en el presupuesto?", a: "Sí. El coste pactado cubre la mano de obra del equipo propio, todos los materiales seleccionados (cerámica, sanitarios, mobiliario base, pintura, carpintería), retirada de escombros y limpieza final. Si quieres acabados premium fuera del presupuesto base, te lo presupuestamos aparte." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-[12px] shadow-sm overflow-hidden">
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-extrabold text-accent text-lg flex-shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-body font-bold text-dark text-base flex-1">{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-6 pb-6 pl-[56px]">
                  <p className="font-body text-subtitle text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
          <p className="font-body text-subtitle/80 text-xs italic text-center mt-8 max-w-[640px] mx-auto">
            Precios orientativos por metro cuadrado. Cada proyecto se valora en visita técnica gratuita y se cierra por partidas.
          </p>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">¿Listo para una reforma integral en El Vendrell?</h2>
          <p className="font-body text-white/90 text-lg max-w-[520px]">Visita técnica gratuita y valoración por partidas. Sin obligación de contratar.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">
              Pedir valoración
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
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
