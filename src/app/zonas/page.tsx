import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Zonas de servicio · Reformas en Baix Penedès | CRV",
  description:
    "Clima Reformas Vendrell trabaja en todo el Baix Penedès: Calafell, Cunit, L'Arboç, Roda de Berà y Banyeres del Penedès. Equipo propio desde El Vendrell.",
  alternates: { canonical: "/zonas" },
  openGraph: {
    title: "Zonas de servicio · Clima Reformas Vendrell",
    description: "Reformas en El Vendrell y municipios del Baix Penedès: Calafell, Cunit, L'Arboç, Roda de Berà y Banyeres del Penedès.",
    url: "/zonas",
    images: ["/images/hero-reforma-luminosa-vendrell.webp"],
  },
};

const zones = [
  { name: "Calafell", slug: "reformas-calafell", description: "Pisos costeros en Calafell Platja, chalets en Segur de Calafell y casas en Calafell Poble. A 8 km." },
  { name: "Cunit", slug: "reformas-cunit", description: "Reformas en pisos vacacionales de Cunit Platja y casas familiares de Cunit Poble. A 12 km." },
  { name: "L'Arboç", slug: "reformas-arboc", description: "Rehabilitación de casas tradicionales del Centre y Arboçar. Trabajo de oficio en pueblo medieval. A 9 km." },
  { name: "Roda de Berà", slug: "reformas-roda-de-bera", description: "Pisos en urbanizaciones de Costa Daurada y casas en Roda de Mar. Junto al Arc de Berà. A 18 km." },
  { name: "Banyeres del Penedès", slug: "reformas-banyeres-penedes", description: "Casas familiares en Banyeres centre y Saifores. Interior tranquilo del Baix Penedès. A 7 km." },
];

export default function ZonasPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Zonas de servicio", url: "/zonas" },
      ]} />

      <HeroService
        title="Cobertura en todo el Baix Penedès"
        h1Keyword="Zonas de servicio"
        subtitle="Trabajamos desde nuestra sede en El Vendrell con presencia constante en los cinco municipios costeros e interiores con más demanda de la comarca."
        image="/images/hero-reforma-luminosa-vendrell.webp"
        imageAlt="Reformas en el Baix Penedès"
        badge="Baix Penedès completo"
        showCTA
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Municipios donde trabajamos</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-dark leading-[1.1]">Reformas en el Baix Penedès y zonas cercanas</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">Sede en El Vendrell con alcance comarcal: trabajamos cada municipio con el mismo equipo y los mismos plazos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/" className="bg-accent rounded-[20px] p-8 flex flex-col gap-4 text-white hover:bg-accent-dark transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <h3 className="font-body font-bold text-xl">El Vendrell</h3>
              <p className="text-white/85 text-sm leading-relaxed">Capital de comarca. Sede de la empresa en la calle Apel·les Fenosa. Reformas en Centre, Coma-ruga, Sant Salvador, El Tancat, El Mas Borràs y La Riera.</p>
              <span className="inline-flex items-center gap-1 text-white/70 text-xs font-bold uppercase tracking-wider mt-auto">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />Municipio principal
              </span>
            </Link>

            {zones.map((zone) => (
              <Link key={zone.slug} href={`/zonas/${zone.slug}`} className="group bg-white rounded-[20px] p-8 flex flex-col gap-4 border border-dark/5 hover:border-accent/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <h3 className="font-body font-bold text-dark text-xl group-hover:text-accent transition-colors">{zone.name}</h3>
                <p className="text-subtitle text-sm leading-relaxed">{zone.description}</p>
                <span className="font-body font-bold text-accent text-sm inline-flex items-center gap-1 mt-auto">
                  Ver zona <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Reformas en otros municipios del Penedès y Tarragona</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">¿Tu municipio no aparece? Damos servicio puntual también en municipios limítrofes del Alt Penedès, Garraf y norte de Tarragona. Cuéntanos dónde está la vivienda y te confirmamos disponibilidad.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-dark-card transition-colors">
            Consultar mi municipio <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
