import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Baños en El Vendrell | CRV",
  description:
    "Reforma de baños en El Vendrell: sustitución de bañera por plato de obra, mampara fija, suelos antideslizantes y materiales antihumedad. Presupuesto gratis.",
  alternates: { canonical: "/servicios/reformas-banos" },
  openGraph: {
    title: "Tu Reforma de Baño en El Vendrell: Diseño, Confort y Calidad",
    description: "Sustitución de bañera por ducha, mamparas fijas y materiales antideslizantes en pisos costeros del Baix Penedès.",
    url: "/servicios/reformas-banos",
    images: ["/images/bano-natural-reformado-vendrell.webp"],
  },
};

export default function ReformasBanosPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/servicios" },
        { name: "Reformas de Baños", url: "/servicios/reformas-banos" },
      ]} />
      <ServiceSchema
        name="Reformas de Baños en El Vendrell"
        description="Reforma integral de baños en pisos costeros y casas de pueblo del Baix Penedès. Sustitución de bañera por plato de obra y mampara fija."
        url="/servicios/reformas-banos"
        image="/images/bano-natural-reformado-vendrell.webp"
      />
      <HeroService title="Tu Reforma de Baño en El Vendrell: Diseño, Confort y Calidad" subtitle="Sustitución de bañera por plato de obra, mampara fija, suelos antideslizantes y materiales pensados para la humedad costera. Bienestar real en tu piso o casa del Baix Penedès." image="/images/bano-natural-reformado-vendrell.webp" imageAlt="Baño moderno reformado en El Vendrell" imageTitle="Reforma de baños en El Vendrell - Clima Reformas Vendrell" h1Keyword="Reformas de baños en El Vendrell" badge="Baños actuales" showCTA trustItems={["Cambio bañera por ducha", "Impermeabilización de obra", "Acabados duraderos"]} tall />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Reforma de baños</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Reforma de baño en El Vendrell con impermeabilización
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                En la costa del Baix Penedès, los baños son la pieza más castigada de la vivienda: humedad ambiente alta casi todo el año, ventilación pobre en pisos sin patio, agua dura del Mediterráneo y baños que en muchas segundas residencias no se han tocado desde los 80. Antes de pensar en sanitarios o griferías, lo que decide la durabilidad es lo que no se ve.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Cada reforma de baño que hacemos en El Vendrell empieza por demolición a hueso, revisión de bajantes y desagües, sustitución de tuberías de plomo o hierro si aún las tiene la finca, lámina impermeabilizante en zona de ducha hasta 1,80 m de altura, y enfoscado maestreado antes del alicatado. Solo después llegan los acabados. Es la única manera de que un baño aguante 15 años sin retoques.
              </p>
              <p className="font-body font-semibold text-dark text-base">Impermeabilización de obra ejecutada con criterio: lámina, sellados y juntas pensadas para que el baño aguante años sin retoques.</p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image src="/images/bano-ducha-cristal-vendrell.webp" alt="Baño con ducha de cristal y madera reformado en El Vendrell" title="Reforma de baño con ducha de cristal en El Vendrell" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Capa por capa</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Cómo impermeabilizamos tu reforma de baño</h2>
            <p className="font-body text-white/55 text-base md:text-lg max-w-[560px] mx-auto mt-4">Capa por capa: el sistema con el que protegemos los baños costeros del Baix Penedès.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Lámina impermeabilizante en ducha", text: "Membrana flexible aplicada antes del alicatado, subiendo hasta 1,80 m en muros de la zona de ducha. Es lo que evita que el agua se filtre a la habitación de al lado o al piso de abajo cuando una junta envejezca con los años." },
              { title: "Mortero hidrófugo y juntas epoxi", text: "Mortero de agarre hidrófugo bajo el plato y en zonas húmedas. Las juntas epoxi en la ducha no se ennegrecen ni absorben agua, a diferencia del cemento gris tradicional. Diferencia visible al tercer año de uso intensivo." },
              { title: "Pendientes y desagüe sifónico", text: "Pendiente mínima del 2% hacia el desagüe lineal o central, con sifón de carga hidráulica que impide olores ascendentes desde la bajante. En segundas residencias cerradas semanas, esto importa mucho." },
              { title: "Ventilación con sensor de humedad", text: "Extractor mecánico con detector que se activa solo al subir la humedad y mantiene el baño aireado los minutos justos tras la ducha. Adiós al moho perimetral de los baños sin ventana, muy habituales en pisos compactos del Centre." },
            ].map((b) => (
              <div key={b.title} className="flex gap-5 bg-white/5 border border-white/10 rounded-[16px] p-7">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Tipos de baño</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Lo que más nos piden en El Vendrell</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Cambio de bañera por ducha", text: "La intervención más recurrente en pisos de Coma-ruga, Sant Salvador y el Centre. Se retira la bañera, se impermeabiliza la zona, se coloca plato de resina o porcelánico continuo y mampara fija de cristal templado. Entre 7 y 10 días de obra." },
              { title: "Baño accesible para mayores", text: "Suelo continuo sin escalones ni cambios de cota, asiento abatible, barras de apoyo cromadas y grifería termostática para evitar quemaduras. Frecuente en pisos del Centre con dos generaciones viviendo juntas." },
              { title: "Suite con baño en master", text: "En chalets de El Tancat, El Mas Borràs o segundas residencias amplias creamos baños en suite con doble lavabo, ducha de obra grande y, si hay sitio, bañera exenta. La distribución se gana abriendo armario o redistribuyendo dormitorio." },
              { title: "Aseo de cortesía en hueco recuperado", text: "Bajo escalera, en pasillo ancho o aprovechando un trastero pequeño. Sanitario suspendido, mueble lavabo a medida y luz indirecta. Suma valor a casas de pueblo de la zona vieja sin restar metros útiles." },
              { title: "Baño wellness con piedra y madera", text: "Travertino, microcemento en tonos arena y madera de teca tratada. Para clientes que tratan su segunda residencia como refugio de fin de semana y quieren entrar al baño y desconectar del ritmo de Barcelona o Tarragona." },
              { title: "Baño de uso intensivo para alquiler", text: "Porcelánico de gran formato (menos juntas, menos limpieza), grifería de cuerpo macizo, mampara abatible y sanitario suspendido para barrer fácil. Pensado para apartamentos turísticos de Coma-ruga con rotación alta en verano." },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-[16px] p-7 flex flex-col gap-3 shadow-sm">
                <h3 className="font-body font-bold text-dark text-lg">{b.title}</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Proceso</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Nuestro proceso de reforma de baño paso a paso</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">De baño viejo a baño firmado en cuatro fases coordinadas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Visita y diagnóstico", text: "Inspeccionamos bajantes, presión de agua, ventilación natural y estado del solado. Detectamos si hay humedad por capilaridad o filtración antigua antes de presupuestar." },
              { step: "02", title: "Materiales sobre la mesa", text: "Selección de azulejos, sanitarios suspendidos, grifería empotrada o monomando y plato de ducha. Te llevamos a showroom en Tarragona o Vilafranca si quieres tocarlo todo en persona." },
              { step: "03", title: "Demolición e impermeabilización", text: "Retirada controlada de azulejos, plato y sanitarios, sustitución de instalaciones, lámina impermeabilizante y maestreado de paredes. La obra sucia ya está hecha." },
              { step: "04", title: "Acabados y entrega", text: "Alicatado con juntas finas, montaje de sanitarios y mampara, prueba de estanqueidad de la ducha, limpieza profesional y entrega con la documentación correspondiente." },
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
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">FAQ — Reforma de baño en El Vendrell</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta una reforma de baño en El Vendrell?", a: "Trabajamos con tres rangos orientativos por metro cuadrado: línea funcional (cambio de bañera por ducha y acabados estándar) desde 520 €/m², línea media con sanitarios suspendidos y porcelánico de gran formato desde 680 €/m², y línea wellness con piedra natural, suelo radiante y bañera exenta desde 880 €/m². Cada baño se valora en visita técnica con detalle por partidas. Sin sorpresas." },
              { q: "¿Hace falta licencia del Ayuntamiento de El Vendrell para reformar un baño?", a: "Si solo cambias revestimientos, sanitarios y mampara sin tocar bajantes ni mover el baño de sitio, basta con una comunicación previa de obra menor, que tramitamos nosotros. Si cambias la ubicación del inodoro o el plato (afecta saneamiento general del edificio), el Ayuntamiento de El Vendrell pide una declaración responsable con memoria técnica. Si tu vivienda es del Centre histórico, conviene consultar antes por las normas específicas del casco antiguo." },
              { q: "¿Cuántos días estoy sin baño?", a: "Un cambio de bañera por ducha lo completamos en 7-10 días laborables. Una reforma integral de baño tipo medio: 12-18 días. Si en tu vivienda hay un segundo baño usable, planificamos para que siempre tengas uno disponible. En segundas residencias cerradas, ejecutamos la obra en bloque para que llegues con todo terminado." },
              { q: "¿Cómo evitáis que el moho vuelva a aparecer en un baño costero?", a: "Tres factores combinados: ventilación mecánica con sensor de humedad, juntas epoxi en zona de ducha (no absorben agua) y porcelánico de gran formato para reducir el número de juntas. En baños sin ventana exterior, muy comunes en pisos compactos del Centre o de Coma-ruga, esto cambia totalmente la durabilidad del acabado." },
              { q: "¿Cómo aseguráis la impermeabilización del baño?", a: "Aplicamos lámina impermeabilizante en zona de ducha hasta 1,80 m, mortero hidrófugo bajo plato y sellado perimetral cuidado. Estas tareas críticas las ejecuta personal del propio equipo con experiencia, no se delegan a la ligera. Cubrimos los plazos legales de garantía y, si surge cualquier ajuste dentro de ellos, volvemos sin discusión." },
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
            Precios orientativos por metro cuadrado. Cada baño se valora en visita técnica gratuita y se cierra por partidas.
          </p>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Solicita presupuesto para tu reforma de baño</h2>
          <p className="font-body text-white/90 text-lg max-w-[500px]">Visita técnica gratuita. Pasamos por tu baño en El Vendrell, te explicamos qué hay debajo del azulejo y te entregamos propuesta cerrada por escrito. Sin compromiso.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">
              Pedir visita técnica
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
