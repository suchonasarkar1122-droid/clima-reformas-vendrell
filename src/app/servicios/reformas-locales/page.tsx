import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Locales en El Vendrell",
  description:
    "Reforma de locales en El Vendrell: comercios del centro, bares de Coma-ruga, despachos y consultas. Trámites municipales, obra y certificados. 877 278 163.",
  alternates: { canonical: "/servicios/reformas-locales" },
  openGraph: {
    title: "Reforma de locales comerciales en El Vendrell",
    description: "Comercios, hostelería, oficinas y consultas en el Baix Penedès: trámites, obra y documentación para abrir.",
    url: "/servicios/reformas-locales",
    images: ["/images/local-comercial-reformado-vendrell.webp"],
  },
};

export default function ReformasLocalesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/servicios" },
        { name: "Reformas de Locales", url: "/servicios/reformas-locales" },
      ]} />
      <ServiceSchema
        name="Reformas de Locales en El Vendrell"
        description="Adecuación de comercios, bares, restaurantes, despachos y consultas en El Vendrell y el Baix Penedès, con tramitación municipal y certificados finales."
        url="/servicios/reformas-locales"
        image="/images/local-comercial-reformado-vendrell.webp"
      />
      <HeroService title="Tu negocio abierto en la fecha que necesitas" subtitle="Tiendas en las calles comerciales del centro, bares y heladerías cerca del paseo de Coma-ruga, despachos y consultas. Proyecto, permisos, obra y papeles para abrir." image="/images/local-comercial-reformado-vendrell.webp" imageAlt="Local comercial reformado en El Vendrell" imageTitle="Reforma de locales comerciales en El Vendrell - Clima Reformas Vendrell" h1Keyword="Reformas de locales en El Vendrell" badge="Locales y oficinas" showCTA trustItems={["Cronograma firme", "Licencias gestionadas", "Llave en mano"]} tall />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Locales del municipio</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                En un local, la fecha de apertura manda
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                El Vendrell tiene dos ritmos comerciales muy distintos. En el centro, alrededor de la Rambla y las calles peatonales, el comercio funciona todo el año y lo que más pesa es no cerrar demasiadas semanas. En la costa, en cambio, muchos negocios viven de Semana Santa a septiembre: un bar que abre en junio en lugar de abril ha perdido buena parte de su año. Por eso la primera pregunta que te hacemos es cuándo necesitas levantar la persiana.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                A partir de esa fecha trabajamos hacia atrás: cuánto tarda el trámite que corresponde a tu actividad, cuánto la obra y qué materiales tienen plazo de fabricación largo. Nos ocupamos del proyecto con técnico colegiado cuando hace falta, de la presentación en el Ajuntament, de la ejecución y de la documentación final: boletines, certificados de instalaciones y lo que pida tu tipo de licencia.
              </p>
              <p className="font-body font-semibold text-dark text-base">Calendario realista desde el primer día; si algo lo pone en riesgo, te lo decimos en cuanto lo sabemos.</p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image src="/images/reforma-local-negocio-vendrell.webp" alt="Reforma de local comercial en El Vendrell" title="Acondicionamiento de local comercial en El Vendrell" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Tipos de local</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Qué tipo de negocios reformamos</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">Cada actividad tiene sus exigencias técnicas y su propio camino administrativo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Bares, restaurantes y heladerías", text: "Cocina con salida de humos a cubierta, separador de grasas, barra con tomas bien situadas, aseos adaptados y materiales que se limpian rápido. Habitual en los bajos cercanos a la playa de Coma-ruga y en Sant Salvador." },
              { title: "Tiendas del centro", text: "Escaparate pensado para quien pasa por la acera, iluminación que respeta el color del producto, almacén ordenado y un suelo que aguante el tránsito diario. Para comercio de proximidad del núcleo urbano." },
              { title: "Despachos, consultas y oficinas", text: "Tabiques con aislamiento acústico real para que no se oiga la conversación de al lado, climatización por zonas, red de datos y, en consultas sanitarias, los requisitos específicos de la actividad." },
              { title: "Locales que pasan a ser vivienda", text: "Algunos bajos comerciales del centro se reconvierten en viviendas. No siempre es posible: depende del planeamiento, de la altura libre, de la ventilación y de la luz natural. Lo estudiamos con el técnico antes de que compres o firmes nada." },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-[16px] p-7 flex flex-col gap-3 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2"><path d="M3 21h18M3 7v14M21 7v14M5 11h14M5 15h14M5 19h14M9 3h6l3 4H6l3-4z" /></svg>
                </div>
                <h3 className="font-body font-bold text-dark text-lg">{b.title}</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
          <div className="max-w-[860px] mx-auto mt-14 space-y-5 font-body text-subtitle text-base leading-relaxed">
            <h3 className="font-body font-bold text-dark text-xl">Antes de firmar el alquiler de un local</h3>
            <p>
              Una parte de los disgustos que vemos se habría evitado con una visita técnica antes de firmar el contrato. Merece la pena comprobar si el local tiene salida de humos o la posibilidad de hacerla, qué potencia eléctrica tiene contratada, si hay acometida de agua independiente, si los aseos se pueden adaptar y si la actividad que quieres está permitida en esa calle. En hostelería, además, la normativa de ruido y la convivencia con los vecinos de arriba condicionan mucho el proyecto.
            </p>
            <p>
              Si eres arrendatario, revisamos contigo qué obras autoriza el contrato y qué quedará para el propietario al terminar. Si eres propietario y quieres alquilar, te proponemos un acondicionamiento neutro y sólido que sirva para distintas actividades. Y si el local forma parte de un edificio que también vas a renovar, lo encajamos dentro de una <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline">reforma integral</Link> para compartir instalaciones y calendario.
            </p>
            <p>
              También acondicionamos negocios en los municipios del entorno, como los comercios del centro de <Link href="/zonas/reformas-arboc" className="text-accent font-semibold underline">L&apos;Arboç</Link>, siguiendo la tramitación propia de cada ayuntamiento.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Licencias y normativa</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Los trámites más habituales</h2>
            <p className="font-body text-white/55 text-base md:text-lg max-w-[560px] mx-auto mt-4">Qué suele pedir el Ajuntament del Vendrell según el tipo de obra y de actividad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Comunicación previa de obras", text: "Para acondicionar un local sin tocar estructura ni fachada y manteniendo una actividad similar a la anterior suele bastar este trámite. Lo preparamos con la descripción de la obra y el presupuesto." },
              { title: "Actividades con incidencia ambiental", text: "Bares, restaurantes y negocios con cocina o con música necesitan un expediente de actividad más completo, con técnico competente, justificación de ruido, ventilación y protección contra incendios." },
              { title: "Cambio de uso a vivienda", text: "Exige proyecto técnico y cumplir las condiciones de habitabilidad: superficie mínima, altura, ventilación e iluminación natural. Además tiene que permitirlo el planeamiento de la zona." },
              { title: "Accesibilidad y papeles finales", text: "Entrada sin escalón o con rampa, anchos de paso, aseo adaptado cuando corresponde. Al terminar entregamos boletines, certificados de instalaciones y la documentación que pida tu licencia." },
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Cómo trabajamos</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Del local vacío a la primera venta</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">Trámite y obra avanzan coordinados para no perder semanas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Estudio de viabilidad", text: "Visitamos el local, comprobamos acometidas, alturas, salida de humos y accesos, y te decimos con franqueza si tu actividad encaja y qué trámite le corresponde." },
              { step: "02", title: "Proyecto y expediente", text: "Planos, memoria y mediciones con el técnico. Presentamos la documentación en el Ajuntament y hacemos el seguimiento hasta tener respuesta." },
              { step: "03", title: "Obra por fases", text: "Derribo, instalaciones, climatización, falso techo, revestimientos, mobiliario fijo y fachada. Cuando el negocio no puede cerrar, trabajamos por zonas o fuera de horario." },
              { step: "04", title: "Pruebas y apertura", text: "Comprobación de instalaciones, certificados, limpieza y entrega del local listo para que montes el género y abras." },
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Dudas sobre reformar un local en El Vendrell</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuál es el precio orientativo por metro cuadrado?", a: "Un comercio o despacho con suelo, pintura, falso techo, iluminación y mobiliario sencillo parte de 380 €/m². Una oficina con divisiones acústicas, climatización y red de datos, de 540 €/m². Un local de hostelería con cocina, extracción y separador de grasas, de 820 €/m². Cada actividad tiene requisitos distintos, así que el precio definitivo sale de la visita." },
              { q: "¿Os encargáis de la licencia?", a: "Sí. Contamos con técnicos colegiados que firman la documentación y la presentamos en el Ajuntament del Vendrell o en el ayuntamiento del municipio donde esté el local. Ajustamos el calendario de obra a los plazos previsibles del trámite." },
              { q: "¿Cuánto tarda la obra de un local?", a: "Un comercio o despacho sin actividad regulada, entre 4 y 7 semanas. Una oficina con climatización y red de datos, entre 6 y 9. Un bar o restaurante con cocina y extracción, entre 9 y 13. A eso se suma el plazo administrativo cuando la actividad lo requiere." },
              { q: "Soy inquilino, ¿qué puedo reformar?", a: "Depende del contrato. Lo revisamos juntos antes de presupuestar para distinguir lo que puedes hacer libremente, lo que necesita autorización del propietario y lo que tendrías que dejar como estaba al marcharte." },
              { q: "¿Se puede reformar sin cerrar el negocio?", a: "En comercios y consultas, muchas veces sí: trabajamos por zonas, en horario de cierre o en fines de semana, y dejamos cada parte operativa antes de pasar a la siguiente. La obra se alarga algo, pero no dejas de atender." },
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
            Importes orientativos por metro cuadrado. Cada local se presupuesta tras la visita y según la actividad.
          </p>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">¿Qué día quieres abrir?</h2>
          <p className="font-body text-white/90 text-lg max-w-[500px]">Dinos la fecha y la actividad. Te diremos qué trámite toca, cuánto puede durar la obra y qué hace falta para llegar a tiempo.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">Hablemos del local<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
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
