import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: { absolute: "Humedad y condensación en pisos de playa en invierno" },
  description:
    "Por qué aparece moho en los pisos de Coma-ruga y Sant Salvador que pasan el invierno cerrados, qué puedes hacer tú y qué conviene resolver en una reforma.",
  alternates: { canonical: "/blog/humedad-condensacion-pisos-playa-invierno" },
  openGraph: {
    title: "Humedad y condensación en pisos de playa en invierno",
    description: "Guía práctica para propietarios de segundas residencias en la costa del Vendrell: causas del moho invernal y soluciones.",
    url: "/blog/humedad-condensacion-pisos-playa-invierno",
    type: "article",
    images: ["/images/blog/humedad-condensacion-pisos-playa-invierno.webp"],
  },
};

export default function BlogHumedadCondensacion() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Humedad y condensación en pisos de playa en invierno",
    description:
      "Causas de la condensación y el moho en segundas residencias cerradas de la costa del Vendrell, medidas sencillas y soluciones de obra.",
    image: "https://reformasvendrell.es/images/blog/humedad-condensacion-pisos-playa-invierno.webp",
    author: { "@type": "Organization", name: "Clima Reformas Vendrell" },
    publisher: {
      "@id": "https://reformasvendrell.es/#business",
      "@type": "Organization",
      name: "Clima Reformas Vendrell",
    },
    datePublished: "2026-11-15",
    dateModified: "2026-11-15",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Humedad y condensación en pisos de playa en invierno", url: "/blog/humedad-condensacion-pisos-playa-invierno" },
      ]} />

      <section className="relative h-[400px] md:h-[480px] w-full overflow-hidden">
        <Image src="/images/blog/humedad-condensacion-pisos-playa-invierno.webp" alt="Humedad y condensación en pisos de playa en invierno en El Vendrell" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[820px] flex flex-col items-center gap-4">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Mantenimiento</span>
            <h1 className="font-display font-extrabold text-[28px] md:text-[44px] lg:text-[56px] text-white leading-[1.1]">
              Humedad y condensación en pisos de playa en invierno
            </h1>
            <p className="text-white/65 text-sm">15 noviembre 2026 · 9 min de lectura</p>
          </div>
        </div>
      </section>

      <article className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[780px]">
          <div className="font-body text-dark space-y-6 text-base leading-relaxed">
            <p className="text-lg text-subtitle">
              Llega noviembre, el piso de Coma-ruga o de Sant Salvador se queda con las persianas bajadas y, cuando la familia vuelve en Semana Santa, encuentra puntos negros en el techo del baño, olor a cerrado en los armarios y la ropa de cama con un tacto húmedo. Es una de las consultas que más recibimos en cuanto empieza el frío, y casi siempre tiene la misma explicación: no es agua que entra, es agua que ya estaba en el aire y se condensa en las superficies frías. En este artículo te contamos por qué pasa, cómo distinguirlo de otras humedades, qué puedes hacer este invierno sin obras y qué merece la pena resolver si estás pensando en reformar.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Por qué la costa favorece la condensación</h2>
            <p>
              El aire junto al mar lleva mucho vapor de agua durante casi todo el año. En verano no se nota porque las paredes están templadas y el piso se ventila a diario. En invierno cambian dos cosas a la vez: los muros exteriores y los cristales se enfrían, sobre todo por la noche, y la vivienda deja de ventilarse porque nadie abre las ventanas. Cuando ese aire húmedo toca una superficie que está por debajo de su punto de rocío, el vapor se convierte en gotas. Si la situación se repite noche tras noche, la superficie no llega a secarse y el moho encuentra el ambiente que necesita.
            </p>
            <p>
              Los bloques de apartamentos construidos en la costa del Vendrell entre los años sesenta y ochenta lo ponen especialmente fácil: fachadas sin aislamiento o con una cámara de aire mínima, frentes de forjado y pilares que actúan como puentes térmicos, ventanas correderas de aluminio sin rotura de puente térmico y baños interiores que solo ventilan por un conducto. Por eso las manchas aparecen siempre en los mismos sitios: esquinas de techo en la fachada norte, detrás de los armarios pegados a un muro exterior, alrededor de las ventanas y en el techo del baño.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Cómo saber si es condensación u otra cosa</h2>
            <p>
              Antes de gastar dinero conviene identificar bien el origen, porque cada tipo de humedad tiene un tratamiento distinto. Algunas pistas que usamos en las visitas:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Condensación:</strong> manchas de moho repartidas en puntos fríos, cristales empañados por la mañana, empeora en los meses fríos y mejora cuando el piso se habita y se ventila. No suele haber cercos con sales ni pintura abombada.</li>
              <li><strong>Filtración:</strong> mancha localizada que crece después de una lluvia fuerte o un temporal de levante, a menudo bajo una terraza, junto a una jardinera o en el encuentro con la fachada. Suele dejar cercos marrones.</li>
              <li><strong>Capilaridad:</strong> típica de plantas bajas y casas antiguas, sube desde el suelo hasta una altura más o menos constante y deja sales blanquecinas y pintura que se desprende. En pisos altos de un bloque es raro.</li>
              <li><strong>Fuga de instalación:</strong> mancha que aparece aunque no llueva, cerca de un baño o una cocina, y que no mejora al ventilar. Aquí lo urgente es encontrar la tubería, propia o del vecino.</li>
            </ul>
            <p>
              Un higrómetro barato, de los que miden temperatura y humedad relativa, ayuda mucho. Si dentro del piso cerrado ves de forma habitual valores por encima del 65-70 %, la condensación es casi segura. Si la humedad es moderada pero hay una mancha concreta que crece, sospecha de una filtración o de una fuga.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Lo que puedes hacer este invierno sin obras</h2>
            <p>
              Si el piso va a pasar meses vacío, hay medidas sencillas que reducen mucho el problema mientras decides si reformar:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>No lo cierres a cal y canto.</strong> Dejar una microventilación en alguna ventana o las rejillas de ventilación despejadas permite que el aire se renueve un poco. Un piso totalmente estanco y frío es el peor escenario.</li>
              <li><strong>Separa los muebles de las paredes frías.</strong> Unos centímetros entre el armario y el muro de fachada permiten que el aire circule y evitan el moho escondido detrás.</li>
              <li><strong>Deja abiertas puertas interiores y armarios.</strong> Así la humedad no se concentra en un rincón sin ventilación.</li>
              <li><strong>Retira textiles.</strong> Colchones, cojines y ropa de cama absorben humedad. Guardarlos en fundas transpirables o llevárselos evita el olor al volver.</li>
              <li><strong>Pide a alguien que ventile.</strong> Si tienes un vecino de confianza o un servicio de mantenimiento, abrir el piso una hora cada pocas semanas en un día seco y soleado ayuda.</li>
              <li><strong>Valora un deshumidificador.</strong> En pisos con mucho problema, un equipo con desagüe directo al fregadero o a la ducha puede funcionar en ausencia. Conviene que tenga rearme automático tras un corte de luz.</li>
            </ul>
            <p>
              Si ya hay moho, límpialo con un producto específico, deja secar bien y repinta con pintura antimoho solo cuando la superficie esté seca. Pintar encima sin más solo esconde el problema unas semanas.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Lo que de verdad lo soluciona: obra bien planteada</h2>
            <p>
              Las medidas anteriores alivian, pero la condensación crónica se resuelve atacando sus dos causas: superficies frías y falta de ventilación. Cuando un propietario nos llama para reformar un apartamento de playa, estas son las partidas que solemos proponer si el piso tiene antecedentes de humedad:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Ventanas con rotura de puente térmico y doble acristalamiento.</strong> El cristal y el marco dejan de ser el punto más frío de la casa. Es la mejora que más se nota en la primera temporada.</li>
              <li><strong>Trasdosado interior aislado en las fachadas más frías.</strong> Una placa con aislante sobre los muros orientados al norte o en los dormitorios afectados eleva la temperatura superficial y corta el puente térmico del frente de forjado.</li>
              <li><strong>Ventilación mecánica en baños interiores.</strong> Un extractor con sensor de humedad, bien conectado al conducto, que funcione aunque nadie se acuerde de encenderlo.</li>
              <li><strong>Microventilación controlada.</strong> Aireadores en la carpintería o rejillas que permitan una renovación mínima y constante sin crear corrientes molestas.</li>
              <li><strong>Pinturas transpirables y acabados que no retienen agua.</strong> En baños, juntas resistentes y piezas grandes con pocas juntas; en el resto, pinturas que dejan respirar el soporte.</li>
            </ul>
            <p>
              Tienes más detalle de cómo integramos estas soluciones en la página de <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline">reformas de pisos</Link>, y de cómo tratamos la impermeabilización y la extracción en la de <Link href="/servicios/reformas-banos" className="text-accent font-semibold underline">reformas de baños</Link>. Si el piso necesita además instalaciones nuevas, lo más eficiente es plantearlo como una <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline">reforma integral</Link>: abrir paredes una sola vez y resolver aislamiento, ventilación y acabados en la misma obra.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Cuándo intervienen la comunidad y el Ajuntament</h2>
            <p>
              Cambiar ventanas en un bloque de la costa puede requerir respetar el color y el despiece que fija la comunidad para mantener la fachada uniforme, así que conviene consultarlo antes de encargar la carpintería. Si la humedad viene de una fachada agrietada, de la cubierta o de una bajante común, la reparación corresponde a la comunidad de propietarios y hay que llevarla a la junta con fotos y una valoración técnica.
            </p>
            <p>
              Las obras interiores de aislamiento y cambio de ventanas suelen tramitarse en el Ajuntament del Vendrell como comunicación previa. Si se modifica la fachada de forma visible, el trámite puede ser distinto. En cualquier caso, lo comprobamos en la visita y preparamos la documentación.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">El invierno, buen momento para decidir</h2>
            <p>
              Para quien solo usa el piso en verano, los meses de otoño e invierno son los mejores para reformar: la vivienda está vacía, la comunidad está tranquila y hay margen para terminar antes de Semana Santa. Además, es justo ahora cuando las humedades se ven, se pueden fotografiar y medir, y es más fácil diagnosticar el origen que en julio.
            </p>
            <p>
              Si tu piso en la costa del Vendrell o en un municipio cercano tiene moho cada invierno, podemos visitarlo, medir la humedad, revisar ventanas, fachadas y ventilación y explicarte qué es condensación, qué no lo es y qué tendría sentido hacer. <Link href="/contacto" className="text-accent font-semibold underline">Escríbenos</Link> y concretamos una visita.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Tu piso coge humedad cada invierno?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Lo revisamos sin compromiso y te explicamos el origen antes de proponerte ninguna obra.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-dark-card transition-colors">
            Pedir revisión <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
