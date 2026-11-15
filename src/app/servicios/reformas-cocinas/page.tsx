import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Cocinas en El Vendrell",
  description:
    "Reforma de cocinas en El Vendrell: abrir la cocina al salón, islas, encimeras porcelánicas y muebles que resisten la humedad del mar. Visita sin coste.",
  alternates: { canonical: "/servicios/reformas-cocinas" },
  openGraph: {
    title: "Reforma de cocinas en El Vendrell y el Baix Penedès",
    description: "Distribución, instalaciones, mobiliario y encimera en una sola obra, adaptada a pisos de playa y casas del Centre.",
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
        description="Reforma completa de cocinas en pisos de playa, casas de pueblo y adosados de El Vendrell y el Baix Penedès, con instalaciones nuevas y materiales para ambiente marino."
        url="/servicios/reformas-cocinas"
        image="/images/cocina-amplia-reforma-vendrell.webp"
      />

      <HeroService
        title="Cocinas que se adaptan a cómo comes, no al catálogo"
        subtitle="Desde la cocina cerrada de un apartamento de Coma-ruga hasta la del patio de una casa del Centre: redistribución, instalaciones, muebles y encimera con un solo equipo."
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
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Antes de elegir muebles</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Una cocina nueva empieza por las tuberías y la luz
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                La primera conversación casi nunca va de colores. Va de cuántos sois en casa, si cocináis a diario o solo en vacaciones, dónde queréis comer y qué os molesta de la cocina actual: que no cabe el lavavajillas, que el humo llega al dormitorio, que la única ventana da a un patio de luces oscuro. Con eso decidimos la distribución, y solo entonces hablamos de frentes y tiradores.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                La obra incluye retirar los muebles viejos, picar alicatados, llevar agua y desagüe a donde haga falta, rehacer la instalación eléctrica con líneas propias para horno, placa y lavavajillas, nivelar suelo y paredes, montar el mobiliario, medir la encimera sobre los muebles ya colocados y conectar los electrodomésticos. Coordinamos albañil, fontanero, electricista y montador para que no pases semanas con la cocina a medias.
              </p>
              <p className="font-body font-semibold text-dark text-base">Te enseñamos la propuesta en plano y con muestras reales; si algo no te convence, se cambia antes de pedir nada.</p>
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Tres cocinas típicas del municipio y cómo las resolvemos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "La cocina cerrada del apartamento de playa", text: "En los bloques de Sant Salvador y Coma-ruga es habitual una cocina estrecha con puerta al pasillo y galería al fondo. Si el tabique que la separa del comedor no es de carga, abrirla cambia el piso entero: entra luz de la terraza y la mesa pasa a formar parte de la cocina." },
              { title: "La cocina con salida al jardín", text: "En los adosados de El Tancat, Mas Borràs o Sant Vicenç de Calders la familia suele querer conectar cocina y porche. Una península o una isla con zona de desayuno, buena extracción y un ventanal practicable hacen que la cocina se use también en verano." },
              { title: "La cocina de la casa entre medianeras", text: "En el casco antiguo la cocina ocupa muchas veces la crujía del fondo, junto al patio. Planteamos muebles lineales o en L hasta el techo, aprovechamos la altura que dan los forjados antiguos y resolvemos la salida de humos sin afectar a la fachada principal." },
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
          <div className="max-w-[860px] mx-auto mt-14 space-y-5 font-body text-subtitle text-base leading-relaxed">
            <h3 className="font-body font-bold text-dark text-xl">Lo que el salitre le hace a una cocina</h3>
            <p>
              A pocas manzanas de la playa la cocina sufre más de lo que parece. El aire húmedo y con sal oxida bisagras y guías de baja calidad, hincha los cantos de los tableros de aglomerado normal y deja marcas en las encimeras porosas. En un piso que pasa cerrado de octubre a abril, además, la falta de ventilación acelera todo. Por eso recomendamos tablero hidrófugo en los módulos bajos, cantos bien sellados, herrajes de marcas con recambios disponibles y encimeras compactas que no necesitan mantenimiento.
            </p>
            <p>
              Si quieres ideas de acabados y distribuciones que funcionan en pisos de costa, las recogimos en el artículo sobre <Link href="/blog/tendencias-cocinas-2026" className="text-accent font-semibold underline">tendencias en cocinas para 2026</Link>. Y si la cocina es solo una parte de algo mayor, quizá te interese ver cómo planteamos una <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline">reforma integral de la vivienda</Link>, porque abrir la cocina suele arrastrar suelos, electricidad y pintura del resto de la casa.
            </p>
            <p>
              Trabajamos cocinas en todo el municipio y también en la costa vecina, desde los apartamentos de Roda de Mar en <Link href="/zonas/reformas-roda-de-bera" className="text-accent font-semibold underline">Roda de Berà</Link> hasta las casas de interior del Baix Penedès.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Materiales y equipamiento</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Qué solemos aconsejar y por qué</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Encimera compacta o porcelánica", text: "No absorbe el aceite ni el vino, aguanta una olla caliente y no pierde color aunque le dé el sol de la tarde. Para una vivienda que se usa por temporadas es la opción que menos cuidados pide." },
              { title: "Módulos bajos hidrófugos y buenos herrajes", text: "La zona del fregadero y el lavavajillas es la que antes se estropea. Tablero resistente al agua, cantos sellados y bisagras y guías de calidad evitan puertas descolgadas al cabo de pocos años." },
              { title: "Extracción proporcionada a la cocina", text: "Si la cocina queda abierta al salón, la campana tiene que estar bien dimensionada y con salida adecuada. Revisamos si el edificio tiene conducto aprovechable antes de elegir modelo." },
              { title: "Luz de trabajo y luz de ambiente", text: "Tira LED bajo los muebles altos para la encimera, puntos empotrados para la luz general y una lámpara colgante si hay isla o mesa. Con circuitos separados, cada momento del día tiene su luz." },
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">De la medición a la primera comida</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">Cuatro etapas con fechas que conoces desde el principio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Medición y hábitos", text: "Tomamos medidas, localizamos bajantes, ventilaciones y pilares, y hablamos de cómo usáis la cocina: si hacéis comidas grandes los domingos, si necesitáis despensa, dónde va la basura selectiva." },
              { step: "02", title: "Plano y muestras", text: "Te presentamos una o dos distribuciones con alzados y, cuando una encaja, eliges frentes, encimera y suelo con las muestras en la mano o en exposición." },
              { step: "03", title: "Obra en orden", text: "Desmontaje y derribo, instalaciones nuevas, paredes y suelo, montaje de muebles, plantilla de encimera y colocación, y por último electrodomésticos y remates." },
              { step: "04", title: "Ajustes y entrega", text: "Regulamos puertas y cajones, sellamos juntas, probamos cada aparato y te dejamos la cocina limpia junto con las instrucciones de cuidado de la encimera." },
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Lo que nos preguntan sobre cocinas en El Vendrell</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Qué rango de precio tiene una cocina reformada?", a: "Usamos tres tramos orientativos por metro cuadrado: funcional desde 480 €/m², media con encimera porcelánica y muebles hidrófugos desde 620 €/m², y alta con isla, frentes lacados y electrodomésticos integrados desde 780 €/m². El importe exacto sale de la visita, con cada partida separada." },
              { q: "¿Necesito permiso del Ajuntament para cambiar la cocina?", a: "Cambiar muebles, encimera y revestimientos se tramita normalmente como comunicación previa. Si se derriba un tabique para abrir la cocina, el Ajuntament puede pedir documentación técnica, y si el muro es estructural hará falta proyecto y licencia. Lo comprobamos en la visita y preparamos los papeles." },
              { q: "¿Qué encimera aguanta mejor cerca del mar?", a: "Las compactas sinterizadas y las porcelánicas. No son porosas, no hay que tratarlas cada año y no se decoloran con el sol. Si te gusta el aspecto de la piedra, hay acabados imitación que mantienen esas ventajas." },
              { q: "¿Cuánto tiempo estaré sin cocina?", a: "Si se mantiene la distribución, entre 3 y 5 semanas desde el primer día de obra. Si se abre al salón y se reubican tomas, entre 5 y 7. En segundas residencias ajustamos el inicio para que la cocina esté lista antes de la fecha en que pensáis volver." },
              { q: "Ya tengo el proyecto de una tienda de cocinas, ¿podéis hacer la obra?", a: "Sí. Nos coordinamos con el técnico de la tienda, adaptamos fontanería, electricidad y albañilería a sus planos y dejamos paredes y suelo listos para el montaje. Si lo prefieres, también podemos encargarnos del mobiliario." },
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
            Importes orientativos por metro cuadrado. Cada cocina se presupuesta tras la visita, partida por partida.
          </p>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Cuéntanos cómo es tu cocina ahora</h2>
          <p className="font-body text-white/90 text-lg max-w-[520px]">Vamos a medirla sin coste y te entregamos una propuesta por escrito, con plano y precio desglosado.</p>
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
