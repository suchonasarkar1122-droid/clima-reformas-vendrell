import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Locales en El Vendrell | CRV",
  description:
    "Reforma de locales en El Vendrell, Coma-ruga y Calafell: hostelería, retail y oficinas. Cumplimiento normativo, llave en mano y plazos firmes. 877 278 163.",
  alternates: { canonical: "/servicios/reformas-locales" },
  openGraph: {
    title: "Reforma de Locales Comerciales: Diseño y Obra en El Vendrell",
    description: "Adecuación de bares, comercios, despachos y oficinas en el Baix Penedès.",
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
        description="Adecuación llave en mano de locales comerciales y oficinas en El Vendrell, Coma-ruga, Calafell y Cunit. Hostelería, retail y servicios."
        url="/servicios/reformas-locales"
        image="/images/local-comercial-reformado-vendrell.webp"
      />
      <HeroService title="Reforma de Locales Comerciales: Diseño y Obra en El Vendrell" subtitle="Bares y restaurantes en el paseo marítimo, comercios en el Centre, oficinas y consultas en zonas residenciales. Diseño, normativa al día y llave en mano." image="/images/local-comercial-reformado-vendrell.webp" imageAlt="Local comercial reformado en El Vendrell" imageTitle="Reforma de locales comerciales en El Vendrell - Clima Reformas Vendrell" h1Keyword="Reformas de locales en El Vendrell" badge="Locales y oficinas" showCTA trustItems={["Cronograma firme", "Licencias gestionadas", "Llave en mano"]} tall />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Locales en el Baix Penedès</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Reforma de locales comerciales en El Vendrell
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Reformar un local en El Vendrell, Coma-ruga o Calafell es ante todo una operación contra el calendario. Si lo abres en mayo, capturas la temporada turística completa de Coma-ruga y Sant Salvador. Si lo abres en julio, has perdido casi todo el verano. Por eso lo primero que negociamos contigo no es el material: es la fecha de apertura.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Nos hacemos cargo del proyecto técnico, de la tramitación de licencia ante el Ayuntamiento de El Vendrell o el municipio que corresponda, de la ejecución con equipo propio y de toda la documentación final: certificado de instalación eléctrica, boletines de fontanería, prueba de salida de humos en hostelería y cumplimiento de accesibilidad. Lo entregamos listo para abrir puerta.
              </p>
              <p className="font-body font-semibold text-dark text-base">Acordamos un calendario realista contigo y trabajamos para que la apertura llegue cuando la necesitas.</p>
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Tipos de reforma de locales en El Vendrell</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">Sectores con los que trabajamos a menudo en el Baix Penedès.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Hostelería con estacionalidad", text: "Bares, restaurantes y heladerías de Coma-ruga, Sant Salvador y el paseo de El Vendrell. Cocina industrial con extracción de humos hasta cubierta, salida de aguas grises con separador de grasas, terraza y barra. Adaptamos el cronograma a la fecha en la que tienes que abrir antes del puente o de Sant Joan." },
              { title: "Comercio del Centre histórico", text: "Boutiques, tiendas de proximidad y comercio del eje peatonal de El Vendrell y de núcleos como L&apos;Arboç o Roda de Berà. Escaparate orientado a flujo, iluminación LED de alta reproducción cromática, suelo resistente al tránsito y zona de almacén optimizada al milímetro." },
              { title: "Oficinas y consultas", text: "Despachos profesionales, gabinetes médicos, clínicas dentales y centros de fisio en zonas residenciales del Vendrell y Calafell. Divisiones acústicas reales (no falsos techos sin masa), instalación de datos categoría 6, climatización por conductos y accesibilidad obligatoria." },
              { title: "Apartamentos turísticos y locales HUT", text: "Adecuación para alquiler vacacional con licencia HUT en Coma-ruga, Calafell Platja o Sant Salvador. Materiales que aguantan rotación intensiva en julio y agosto, distribuciones funcionales con dos baños siempre que el espacio lo permita y acabados pensados para limpieza rápida entre estancias." },
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
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Licencias y normativa</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Licencias para reformar un local en El Vendrell</h2>
            <p className="font-body text-white/55 text-base md:text-lg max-w-[560px] mx-auto mt-4">El papeleo que muchos olvidan: lo gestionamos por ti ante el ayuntamiento.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Comunicación previa o declaración responsable", text: "Para reformas sin cambio de uso (mismo epígrafe que el anterior arrendatario), basta con una declaración responsable presentada en el Ayuntamiento de El Vendrell. La preparamos con memoria descriptiva, planos y certificación de habitabilidad." },
              { title: "Licencia ambiental para hostelería", text: "Bares, restaurantes y locales con cocina entran en régimen de licencia ambiental con técnico colegiado: estudio de ruido, salida de humos justificada, certificación contra incendios y separador de grasas. Lo gestionamos íntegramente." },
              { title: "Cambio de uso de local a vivienda", text: "Si vienes con un local en planta baja del Centre y quieres reconvertirlo en vivienda, hace falta proyecto técnico visado, justificación de ventilación, altura libre y certificado energético. Estudiamos viabilidad antes de presupuestar." },
              { title: "Accesibilidad y certificados finales", text: "Anchura de paso, baño adaptado en locales con superficie regulada, salida de evacuación. Al cierre, entregamos boletines eléctricos, certificado de fontanería, prueba de extracción y toda la documentación que la actividad necesite para operar." },
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Nuestro proceso de reforma de locales paso a paso</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">De local vacío a primera caja con calendario firme y licencia gestionada.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Visita y viabilidad", text: "Nos reunimos en el local, revisamos acometidas, salida de humos disponible, altura libre, normativa que aplica a tu actividad y plazo objetivo de apertura. Te decimos en la primera reunión si el calendario es realista." },
              { step: "02", title: "Proyecto y licencias", text: "Elaboramos memoria, planos y mediciones. Tramitamos comunicación previa, declaración responsable o licencia ambiental según el caso, presentamos en el Ayuntamiento y movemos el expediente." },
              { step: "03", title: "Obra coordinada", text: "Demolición, instalaciones eléctricas y de fontanería, climatización por conductos, falso techo registrable, mobiliario a medida, suelo técnico o continuo, escaparate y rotulación. Equipo propio coordinado por una sola persona." },
              { step: "04", title: "Apertura y certificados", text: "Pruebas finales de instalaciones, boletines, certificado energético si aplica, limpieza profesional y entrega del local con toda la documentación lista para operar. Tú abres puerta el día acordado." },
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">FAQ — Reforma de locales en El Vendrell</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta reformar un local comercial en El Vendrell?", a: "Como referencia orientativa por metro cuadrado: comercio o despacho con suelos, pintura, falso techo, iluminación y mobiliario sencillo desde 380 €/m². Oficina con divisiones acústicas, climatización y red de datos desde 540 €/m². Hostelería con cocina industrial, extracción y separador de grasas desde 820 €/m². Cada actividad tiene normativa distinta, así que cerramos el coste por partidas tras la visita al local. Sin compromiso." },
              { q: "¿Vosotros tramitáis la licencia de apertura?", a: "Sí. Trabajamos con técnicos colegiados que firman la documentación y presentamos directamente al Ayuntamiento de El Vendrell —o al de Calafell, Cunit, L&apos;Arboç, Roda de Berà o Banyeres del Penedès, según donde esté el local—. Conocemos los tiempos de cada consistorio del Baix Penedès y planificamos el cronograma para que la licencia y la obra acaben al mismo tiempo." },
              { q: "¿Cuánto se tarda en reformar un local?", a: "Un comercio o despacho sin actividad regulada: 4-7 semanas. Una oficina con instalaciones de climatización y red de datos: 6-9 semanas. Un bar, restaurante u hostelería con cocina y extracción: 9-13 semanas. Si tu apertura está atada a temporada (Semana Santa, Sant Joan, agosto), nos sentamos con la fecha objetivo y planificamos hacia atrás." },
              { q: "¿Trabajáis con propietario y con arrendatario?", a: "Con ambos. Si eres arrendatario, antes de empezar revisamos contigo el contrato de alquiler para confirmar qué partidas puedes ejecutar (instalaciones, divisiones, fachada) y qué retornará al propietario al final del arrendamiento. Si eres propietario reformando para alquilar, te ayudamos a definir un acabado neutro y robusto que valga para varios sectores de actividad." },
              { q: "¿Podéis reformar un local que sigue operativo?", a: "Sí, lo hacemos en comercios y consultas que no pueden cerrar y solo paran fines de semana o jornadas reducidas. Planificamos por fases, trabajamos en horario nocturno o turno alterno y dejamos cada zona operativa antes de pasar a la siguiente. El cronograma se alarga algo, pero tu negocio sigue facturando." },
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
            Precios orientativos por metro cuadrado. Cada local se valora en visita técnica y se cierra por partidas según actividad y normativa aplicable.
          </p>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Solicita presupuesto para tu reforma de local</h2>
          <p className="font-body text-white/90 text-lg max-w-[500px]">¿Cuándo quieres abrir puerta? Dinos la fecha objetivo y planificamos hacia atrás: licencia, obra y certificados. Calendario por fases y trato directo durante toda la obra.</p>
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
