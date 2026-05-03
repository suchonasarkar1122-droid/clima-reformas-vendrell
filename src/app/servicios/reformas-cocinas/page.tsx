import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Cocinas en El Vendrell | CRV",
  description:
    "Cocinas a medida en El Vendrell y Baix Penedès: encimeras porcelánicas, mobiliario hidrófugo y herrajes inox aptos para la humedad costera. Presupuesto gratis.",
  alternates: { canonical: "/servicios/reformas-cocinas" },
  openGraph: {
    title: "Especialistas en Reformas de Cocinas a Medida en El Vendrell",
    description: "Diseño, mobiliario hecho a medida y ejecución con equipo propio.",
    url: "/servicios/reformas-cocinas",
    images: ["/images/cocina-amplia-reforma-vendrell.webp"],
  },
};

export default function ReformasCocinasPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/servicios" },
        { name: "Reformas de Cocinas", url: "/servicios/reformas-cocinas" },
      ]} />
      <ServiceSchema
        name="Reformas de Cocinas en El Vendrell"
        description="Diseño y ejecución de cocinas a medida en pisos costeros y casas del Baix Penedès. Materiales pensados para la humedad marina."
        url="/servicios/reformas-cocinas"
        image="/images/cocina-amplia-reforma-vendrell.webp"
      />

      <HeroService
        title="Especialistas en Reformas de Cocinas a Medida en El Vendrell"
        subtitle="Cocinas con isla, en U o lineales para pisos costeros y casas de pueblo. Materiales que aguantan la humedad marina y un diseño que aprovecha la luz mediterránea."
        image="/images/cocina-amplia-reforma-vendrell.webp"
        imageAlt="Cocina de diseño reformada en piso costero de El Vendrell"
        imageTitle="Reforma de cocinas en El Vendrell - Clima Reformas Vendrell"
        h1Keyword="Reformas de cocinas en El Vendrell"
        badge="Cocinas a medida"
        showCTA
        trustItems={["Diseño a medida", "Materiales antihumedad", "Plazo firme"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Cocinas que se viven</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Reforma de cocina en El Vendrell, llave en mano
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                En el Baix Penedès la cocina es donde se acaba juntando todo el mundo: el café del domingo, la cena improvisada cuando vienen los abuelos desde L&apos;Arboç, los desayunos de verano antes de bajar a Coma-ruga. Por eso planteamos cada reforma de cocina pensando primero en cómo se va a usar, no en cómo se ve en una foto de catálogo.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Cubrimos el ciclo entero: derribo controlado, retirada de mobiliario antiguo, picado de revestimientos, nuevas tomas de agua, electricidad y desagües, encimeras de Dekton o porcelánico, frentes lacados o de roble natural, integración de electrodomésticos y puesta en marcha. Un solo equipo y un único interlocutor que te da la cara durante toda la obra.
              </p>
              <p className="font-body font-semibold text-dark text-base">Te explicamos la propuesta a fondo antes de firmar. Si no encaja, lo ajustamos.</p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image src="/images/cocina-antes-despues-reforma-vendrell.webp" alt="Cocina moderna reformada en piso costero de El Vendrell" title="Reforma de cocina moderna en El Vendrell - Clima Reformas Vendrell" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Tipologías</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Tres formatos que repetimos en El Vendrell</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Cocina abierta al salón", text: "El proyecto estrella en los pisos años 70-80 de Coma-ruga y Sant Salvador. La cocina original cabe justa para dos personas; tirando el tabique no estructural ganas comedor, luz natural y la sensación de un piso nuevo sin moverte de barrio." },
              { title: "Cocina con isla central", text: "Para chalets y adosados de El Tancat, El Mas Borràs o Segur de Calafell. La isla concentra la zona de cocción y el fregadero, deja sitio para taburetes y libera la pared perimetral para columnas de horno y nevera integradas." },
              { title: "Cocina en galera de casa de pueblo", text: "En las casas estrechas del Centre histórico y de La Riera, donde la cocina suele dar al patio interior, trabajamos en formato lineal o en L. Aprovechamos cada centímetro de altura con muebles hasta el techo y mantenemos la circulación libre." },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-[16px] p-7 flex flex-col gap-3 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
                </div>
                <h3 className="font-body font-bold text-dark text-lg">{b.title}</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Materiales y equipamiento</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Lo que recomendamos para la costa del Baix Penedès</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Encimeras porcelánicas y Dekton", text: "Aguantan el sol directo de las cocinas con ventanas a poniente sin decolorarse, no se manchan con vino ni aceite, y soportan el cambio brusco de temperatura cuando dejas la sartén caliente. Es lo que más vendemos en segundas residencias de Coma-ruga." },
              { title: "Frentes hidrófugos con herrajes inox", text: "El aire salino del Mediterráneo oxida los herrajes baratos en pocos veranos. Trabajamos con bisagras y guías Blum o Hettich y tableros con núcleo hidrófugo. Cierres suaves, ajuste milimétrico y mantenimiento mínimo durante 15 años." },
              { title: "Inducción y extracción seria", text: "En pisos pequeños recomendamos placas de inducción flexibles y campanas perimetrales con motor potente. Si la cocina se ha abierto al salón, el control del olor es crítico: nadie quiere que el sofá huela a sardina." },
              { title: "Iluminación por capas", text: "General empotrada en techo, lineal LED bajo muebles altos para la encimera y suspensión decorativa sobre la isla. La cocina deja de ser un único punto de luz cenital para convertirse en un espacio que cambia según la hora." },
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

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Cómo lo hacemos</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Nuestro proceso de reforma de cocina paso a paso</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">De la primera visita a la primera cena, sin sobresaltos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Toma de medidas y briefing", text: "Pasamos por tu vivienda en El Vendrell, medimos con láser, fotografiamos instalaciones existentes y te preguntamos cómo cocinas: si haces calçotades, si necesitas zona de office, si vives solo o entran ocho personas el sábado." },
              { step: "02", title: "Propuesta y selección", text: "Te presentamos una propuesta de distribución y, cuando una funciona, vamos contigo al showroom: tocas encimeras, abres cajones, comparas frentes. Ningún material se elige por catálogo." },
              { step: "03", title: "Obra coordinada por fases", text: "Demolición y vaciado en los primeros días, instalaciones nuevas, replanteo del mobiliario, encimera medida en obra y cortada a la semana, montaje de electrodomésticos y puesta en marcha. Te mantenemos informado del avance." },
              { step: "04", title: "Repaso y entrega", text: "Revisamos cada cajón, regulamos puertas, comprobamos siliconas, certificamos electricidad y dejamos la cocina limpia. Te explicamos el mantenimiento básico de la encimera y entregamos la documentación correspondiente." },
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">FAQ — Reforma de cocina en El Vendrell</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta una reforma de cocina en El Vendrell?", a: "Como referencia, las cocinas se mueven en tres tramos orientativos por metro cuadrado: línea funcional desde 480 €/m², línea media con encimera porcelánica y mobiliario hidrófugo desde 620 €/m², y línea premium con isla, frentes lacados y electrodomésticos integrados desde 780 €/m². Cada cocina se valora en visita y te entregamos detalle por partidas, sin compromiso." },
              { q: "¿Hay que pedir licencia al Ayuntamiento de El Vendrell?", a: "Si solo cambias mobiliario, encimera y revestimientos, basta con una comunicación previa, que tramitamos nosotros. Si tiras tabiques para abrir la cocina al salón —incluso uno no estructural— el Ayuntamiento de El Vendrell pide una declaración responsable con memoria firmada por técnico. Si el muro es de carga, se sube a licencia mayor. Lo gestionamos todo." },
              { q: "¿Qué encimera funciona mejor con la humedad de Coma-ruga o Sant Salvador?", a: "Para segundas residencias cerca del mar recomendamos Dekton o porcelánico macizo. No se mancha, no necesita sellados anuales como el mármol y soporta el sol directo cuando la cocina tiene una ventana grande hacia el balcón. Si buscas calidez visual, el porcelánico imitación piedra natural es la mejor decisión coste-durabilidad." },
              { q: "¿Cuántas semanas estoy sin cocina?", a: "Una cocina sin tirar tabiques: entre 3 y 5 semanas desde que entramos en obra. Si abrimos al salón con viga vista o oculta y replanteamos instalaciones: 5-7 semanas. En segundas residencias coordinamos con tu calendario de uso para que la obra termine antes del puente que tienes pensado bajar." },
              { q: "¿Trabajáis con mi cocinista de confianza si ya tengo una propuesta?", a: "Sí, montamos cocinas que vienen de tienda especializada (Santos, Schmidt, Gunni, etc.), encajamos la albañilería y las instalaciones a su medición y nos coordinamos con su técnico. Si prefieres que te llevemos el proyecto entero, también: trabajamos con varios fabricantes nacionales con showroom en Tarragona y Vilafranca." },
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
            Precios orientativos por metro cuadrado. Cada cocina se valora en visita técnica gratuita y se cierra por partidas.
          </p>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Solicita presupuesto para tu reforma de cocina</h2>
          <p className="font-body text-white/90 text-lg max-w-[520px]">Visita técnica gratuita y propuesta cerrada por escrito. Sin compromiso de contratar.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">
              Cuéntame mi cocina
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
