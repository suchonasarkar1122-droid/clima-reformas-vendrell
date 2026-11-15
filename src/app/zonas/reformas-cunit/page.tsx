import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Cunit · Pisos costeros y casas",
  description:
    "Reformas en Cunit: apartamentos de la zona de playa, casas del pueblo y adosados de urbanización. Permisos, obra y coste por partidas. 877 278 163.",
  alternates: { canonical: "/zonas/reformas-cunit" },
  openGraph: {
    title: "Reformas en Cunit",
    description: "Pisos de playa, casas del pueblo y adosados en Cunit, con equipo propio desde El Vendrell.",
    url: "/zonas/reformas-cunit",
    images: ["/images/piso-reformado-completo-vendrell.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Vaciado y renovación completa de apartamentos de playa y adosados de urbanización, con instalaciones nuevas.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas pequeñas que se abren al comedor, con muebles y encimeras preparados para el ambiente húmedo.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "De bañera a ducha, con impermeabilización y extractor en los baños interiores de los bloques.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Ventanas, electricidad, suelos y pintura para pasar de piso de verano a vivienda de todo el año.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Comercios y negocios de hostelería en el centro y cerca del paseo, con trámites incluidos.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Reformáis pisos que se alquilan en verano?", a: "Sí. En esos casos priorizamos materiales que aguanten mucho uso y se limpien rápido, una cocina y un baño robustos y una obra planificada en temporada baja para que el piso esté listo antes de la temporada. Recuerda que el alquiler turístico requiere registro y que conviene confirmar las condiciones municipales antes de invertir." },
  { q: "¿Cuánto se tarda en reformar cocina y baño en un piso de Cunit?", a: "En un piso de 60 a 75 m², con fontanería y electricidad nuevas en esas estancias, entre 4 y 6 semanas. Si solo se cambian muebles y acabados, entre 2 y 3." },
  { q: "Vivo fuera, ¿puedo seguir la obra a distancia?", a: "Es lo habitual con propietarios que viven en Barcelona o en otras ciudades. Te enviamos fotos al cerrar cada fase, gestionamos el acceso al edificio con la comunidad y solo hace falta que vengas al principio y a la entrega." },
  { q: "¿Mi piso cogerá menos humedad después de la reforma?", a: "Si el problema es condensación, sí mejora mucho al cambiar ventanas, aislar las paredes más frías y ventilar los baños interiores. Si es una filtración de fachada o cubierta, hay que resolverla con la comunidad. En la visita te decimos qué es cada cosa." },
];

export default function ZonaCunitPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Zonas", url: "/zonas" },
        { name: "Reformas en Cunit", url: "/zonas/reformas-cunit" },
      ]} />

      <HeroService
        title="Reformas en Cunit, en el límite norte de la comarca"
        h1Keyword="Reformas en Cunit"
        subtitle="Apartamentos junto al paseo, casas del núcleo antiguo y adosados en las urbanizaciones que suben desde la playa. Un responsable de obra y un calendario por escrito."
        image="/images/piso-reformado-completo-vendrell.webp"
        imageAlt="Reforma de piso costero en Cunit"
        badge="Zona de servicio"
        showCTA
        trustItems={["Cercanía: 12 km", "Pisos vacacionales", "Coste cerrado"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Cunit · Baix Penedès</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-3">Cómo es reformar una vivienda en Cunit</h2>
          <p className="font-body text-subtitle text-base md:text-lg leading-relaxed mb-6">El último municipio de la provincia de Tarragona antes de entrar en el Garraf, con mucha vivienda de temporada y cada vez más gente que vive aquí todo el año.</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Cunit ha cambiado mucho en pocas décadas. Lo que era un pueblo pequeño con su núcleo alrededor de la iglesia y el castillo se convirtió, a partir de los años setenta, en un destino de veraneo para familias del área de Barcelona, y más tarde en un lugar de residencia habitual para quien trabaja en el Garraf, en el Penedès o incluso en la capital y aprovecha la conexión por tren y por la C-32. Esa mezcla se ve en el tipo de vivienda: bloques de apartamentos cerca de la playa, calles de casas del pueblo y urbanizaciones de adosados y unifamiliares hacia el interior.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Apartamentos de la zona de playa</h3>
            <p>Son el encargo más habitual. Pisos de 50 a 80 m² con terraza, cocina pequeña y un baño, construidos para pasar el verano. Muchos han pasado ya por varias manos y conservan la instalación eléctrica original, ventanas correderas que no aíslan y baños con bañera. Cuando su propietario decide vivir aquí todo el año, descubre que en invierno el piso es frío y húmedo. La reforma suele incluir ventanas nuevas, electricidad completa, baño con ducha y una cocina que se abra al comedor para ganar luz. Si quieres ver cómo enfocamos este tipo de obra, lo explicamos en <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline">reformas de pisos</Link>.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Casas del núcleo y adosados</h3>
            <p>En el pueblo quedan casas entre medianeras de dos plantas, algunas con patio, que piden revisar cubierta, humedades en planta baja y escaleras. En las urbanizaciones, los adosados de los ochenta y noventa necesitan sobre todo actualizar baños y cocina, mejorar el aislamiento y cambiar sistemas de calefacción poco eficientes. En estos casos la <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline">reforma integral</Link> suele ser más rentable que ir cambiando piezas sueltas.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Trámites con el Ajuntament de Cunit</h3>
            <p>Como en el resto de la comarca, las obras interiores sin afectar a estructura ni fachada se tramitan normalmente con una comunicación previa, y las que modifican distribución de forma importante, fachada o elementos estructurales necesitan proyecto técnico y licencia. Si el contenedor va en la calle, se pide además la ocupación de vía pública. Preparamos la documentación y te avisamos con tiempo de los plazos.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Por qué trabajamos aquí desde El Vendrell</h3>
            <p>Cunit está a unos 12 km de nuestra oficina, un trayecto corto por la C-32 o la N-340. Eso nos permite pasar por la obra con frecuencia, resolver imprevistos el mismo día y coordinar entregas de material sin recargos de desplazamiento. Es la misma lógica con la que trabajamos en <Link href="/zonas/reformas-calafell" className="text-accent font-semibold underline">Calafell</Link>, a medio camino entre los dos municipios.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-white leading-[1.05]">Qué reformamos en Cunit</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-3 hover:border-accent/40 transition-colors">
                <h3 className="font-body font-bold text-white text-lg group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                <span className="font-body font-bold text-accent text-sm inline-flex items-center gap-1 mt-auto pt-2">Ver detalles <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Dudas habituales</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Preguntas sobre reformas en Cunit</h2>
          </div>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-[16px] border border-dark/5 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-body font-bold text-dark text-base list-none">
                  {faq.q}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" className="flex-shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-6 pb-6 font-body text-subtitle text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-12">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="font-body font-bold text-dark text-base uppercase mb-6 text-center">También trabajamos en</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "El Vendrell", slug: "/" },
              { name: "Calafell", slug: "/zonas/reformas-calafell" },
              { name: "L'Arboç", slug: "/zonas/reformas-arboc" },
              { name: "Roda de Berà", slug: "/zonas/reformas-roda-de-bera" },
              { name: "Banyeres del Penedès", slug: "/zonas/reformas-banyeres-penedes" },
            ].map((z) => (
              <Link key={z.slug} href={z.slug} className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full font-body font-semibold text-dark text-sm border border-dark/10 hover:border-accent hover:text-accent transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Reformas en {z.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Tienes un piso o una casa en Cunit?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Pasamos a verlo sin coste y te dejamos un presupuesto por partidas, con el calendario de obra por escrito.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
