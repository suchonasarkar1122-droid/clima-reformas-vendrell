"use client";

import Image from "next/image";
import HeroForm from "@/components/HeroForm";

export default function PruebasHero() {
  return (
    <main className="bg-beige">
      {/* TOP NAVIGATION (debajo del navbar fijo de la web) */}
      <div className="sticky top-[80px] z-40 bg-accent text-white shadow-lg">
        <div className="max-w-[1400px] mx-auto px-5 py-3 flex flex-wrap items-center justify-between gap-4">
          <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
            Pruebas hero · 4 variantes
          </span>
          <nav className="flex flex-wrap gap-1.5 text-xs">
            <a href="#hero-a" className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">A · Split</a>
            <a href="#hero-b" className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">B · Editorial</a>
            <a href="#hero-c" className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">C · Asimétrico</a>
            <a href="#hero-d" className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">D · Minimal ✓</a>
            <a href="#hero-e" className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">E · Form-left</a>
            <a href="#hero-f" className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">F · Booking-bar</a>
            <a href="#hero-g" className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">G · Bento</a>
            <a href="#hero-h" className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">H · Dock</a>
          </nav>
        </div>
      </div>

      {/* ===== VARIANTE A: SPLIT CLÁSICO (el actual) ===== */}
      <SectionLabel id="hero-a" letter="A" title="Split clásico · texto izquierda, formulario derecha" desc="Es el layout actual de las 4 webs. Texto + trust pills a la izquierda, form card a la derecha. Familiar y efectivo, pero el más 'cloneable'." />
      <HeroVariantA />

      {/* ===== VARIANTE B: EDITORIAL ===== */}
      <SectionLabel id="hero-b" letter="B" title="Editorial · titular gigante centrado, form en barra horizontal debajo" desc="Hero centrado tipo portada de revista. Tipografía masiva, mucho aire. Form abajo en barra horizontal con todos los campos en línea." />
      <HeroVariantB />

      {/* ===== VARIANTE C: ASIMÉTRICO ===== */}
      <SectionLabel id="hero-c" letter="C" title="Asimétrico · split vertical 50/50, form centrado debajo" desc="Mitad izquierda con fondo dark + texto. Mitad derecha con imagen + tarjeta de stat flotante. Form como tarjeta destacada centrada justo debajo." />
      <HeroVariantC />

      {/* ===== VARIANTE D: MINIMAL PREMIUM ===== */}
      <SectionLabel id="hero-d" letter="D" title="Minimal premium · texto centrado mínimo, form 'search bar' full-width ← APLICADO A VENDRELL" desc="Hero muy minimalista, textos breves, mucho aire. Form abajo estilo barra de búsqueda redondeada — moderno y compacto, todos los campos en una sola línea." />
      <HeroVariantD />

      {/* ===== VARIANTE E: FORM LEFT ===== */}
      <SectionLabel id="hero-e" letter="E" title="Form-left · panel formulario izquierda + imagen+H1 grande derecha" desc="Espejo de A: el formulario protagoniza la columna izquierda (40% del ancho), el contenido visual + H1 va a la derecha sobre imagen. Vibe de plataforma de servicios / booking site." />
      <HeroVariantE />

      {/* ===== VARIANTE F: BOOKING-BAR ===== */}
      <SectionLabel id="hero-f" letter="F" title="Booking-bar · hero compacto + form bar flotando entre hero y siguiente sección" desc="Hero más compacto (65vh) con texto izquierda + imagen derecha. Form bar horizontal flotando debajo del hero, sobresaliendo encima de la siguiente sección. Estilo Booking.com / Airbnb." />
      <HeroVariantF />

      {/* ===== VARIANTE G: BENTO ===== */}
      <SectionLabel id="hero-g" letter="G" title="Bento grid · composición tipo dashboard moderno con cards" desc="Hero como una cuadrícula de cards: card grande con H1+imagen, card de stat (+120 obras), card de imagen secundaria, card de testimonio, card de CTA. Form abajo en card centrada. Look moderno tipo Apple / Linear." />
      <HeroVariantG />

      {/* ===== VARIANTE H: DOCK ===== */}
      <SectionLabel id="hero-h" letter="H" title="Dock · hero a pantalla completa con dock de form en la base" desc="Hero ocupa 100vh con imagen de fondo a tope. Texto centrado arriba. Dock semi-transparente fijado en la base del hero con todos los campos del formulario en línea. Vibe de booking widget de hotel/destino." />
      <HeroVariantH />

      {/* FOOTER NOTA */}
      <div className="bg-dark py-12 text-center">
        <p className="text-white/40 text-sm font-body">Página de pruebas · Solo accesible en /pruebashero · 8 variantes</p>
      </div>
    </main>
  );
}

// ====== VARIANTE E: FORM LEFT ======
function HeroVariantE() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[440px_1fr] min-h-[88vh] overflow-hidden">
      {/* LEFT: form panel */}
      <div className="bg-dark p-8 md:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
        <p className="font-body text-accent text-xs uppercase tracking-[0.3em] font-semibold mb-3">Pide tu presupuesto</p>
        <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl mb-2">Te llamamos en 24h</h2>
        <p className="text-white/50 text-sm font-body mb-8">Sin compromiso. Valoración a medida.</p>
        <HeroForm />
      </div>
      {/* RIGHT: image + text overlay */}
      <div className="relative bg-dark min-h-[420px] lg:min-h-[88vh] order-1 lg:order-2">
        <Image
          src="/images/salon-luminoso-mediterraneo-vendrell.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
        <div className="relative z-10 h-full flex items-center px-8 md:px-14 lg:px-20 py-16 lg:py-20">
          <div className="max-w-[600px]">
            <p className="font-body text-accent text-xs uppercase tracking-[0.3em] mb-5">Empresa de reformas en El Vendrell</p>
            <h1 className="font-display font-extrabold text-white text-[40px] md:text-[60px] lg:text-[76px] xl:text-[88px] leading-[1] tracking-tight mb-6">
              Reformas en <span className="text-accent">El Vendrell</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg font-body leading-[1.6] max-w-[440px]">
              Pisos costeros y casas de pueblo en el Baix Penedès. Equipo propio, presupuesto cerrado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== VARIANTE F: BOOKING BAR ======
function HeroVariantF() {
  return (
    <section className="relative bg-dark overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] lg:min-h-[65vh]">
        {/* LEFT: text */}
        <div className="px-6 md:px-10 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
          <p className="font-body text-accent text-xs uppercase tracking-[0.3em] font-semibold mb-4">Reformas en el Baix Penedès</p>
          <h1 className="font-display font-extrabold text-white text-[40px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-tight mb-6">
            Reformas en <span className="text-accent">El Vendrell</span>
          </h1>
          <p className="text-white/60 max-w-[400px] font-body leading-[1.6]">Pisos costeros, casas de pueblo y segundas residencias. Equipo propio en el Baix Penedès.</p>
        </div>
        {/* RIGHT: image */}
        <div className="relative min-h-[300px] lg:min-h-[65vh]">
          <Image
            src="/images/hero-reforma-luminosa-vendrell.webp"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 lg:hidden bg-dark/30" />
        </div>
      </div>
      {/* Form bar overlapping bottom of hero */}
      <div className="relative -mt-16 lg:-mt-20 mx-5 md:mx-10 lg:mx-16 z-10">
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-2 md:p-3 max-w-[1300px] mx-auto border border-grey-light">
          <form className="grid grid-cols-1 md:grid-cols-[2fr_2fr_2fr_2fr_auto] gap-2">
            <div className="px-4 py-3 md:border-r border-grey-light">
              <label className="block text-[10px] uppercase text-grey-text tracking-wider font-semibold mb-0.5">Nombre</label>
              <input className="w-full text-sm bg-transparent outline-none font-body text-dark placeholder:text-grey-text/60" placeholder="Tu nombre" />
            </div>
            <div className="px-4 py-3 md:border-r border-grey-light">
              <label className="block text-[10px] uppercase text-grey-text tracking-wider font-semibold mb-0.5">Teléfono</label>
              <input className="w-full text-sm bg-transparent outline-none font-body text-dark placeholder:text-grey-text/60" placeholder="Tu teléfono" />
            </div>
            <div className="px-4 py-3 md:border-r border-grey-light">
              <label className="block text-[10px] uppercase text-grey-text tracking-wider font-semibold mb-0.5">Localidad</label>
              <select className="w-full text-sm bg-transparent outline-none font-body text-dark cursor-pointer" defaultValue="">
                <option value="" disabled>Selecciona</option>
                <option>El Vendrell</option>
                <option>Calafell</option>
              </select>
            </div>
            <div className="px-4 py-3 md:border-r border-grey-light">
              <label className="block text-[10px] uppercase text-grey-text tracking-wider font-semibold mb-0.5">Reforma</label>
              <select className="w-full text-sm bg-transparent outline-none font-body text-dark cursor-pointer" defaultValue="">
                <option value="" disabled>Tipo</option>
                <option>Integral</option>
                <option>Cocina</option>
              </select>
            </div>
            <button type="submit" className="bg-accent text-white px-6 py-4 rounded-xl font-display font-bold text-sm hover:bg-accent-light transition-colors whitespace-nowrap">
              Solicitar →
            </button>
          </form>
        </div>
      </div>
      <div className="h-20 lg:h-24" />
    </section>
  );
}

// ====== VARIANTE G: BENTO ======
function HeroVariantG() {
  return (
    <section className="bg-dark py-20 lg:py-28 px-5 md:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[230px]">
        {/* Big H1 + imagen card */}
        <div className="md:col-span-2 md:row-span-2 bg-dark-card rounded-3xl p-8 md:p-12 flex flex-col justify-end relative overflow-hidden border border-white/5">
          <Image src="/images/hero-reforma-luminosa-vendrell.webp" alt="" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent" />
          <div className="relative z-10">
            <p className="font-body text-accent text-xs uppercase tracking-[0.3em] mb-4 font-semibold">Empresa de reformas</p>
            <h1 className="font-display font-extrabold text-white text-[40px] md:text-[56px] lg:text-[64px] leading-[1] tracking-tight">
              Reformas en<br/><span className="text-accent">El Vendrell</span>
            </h1>
            <p className="text-white/60 mt-5 max-w-[400px] font-body text-sm md:text-base leading-[1.6]">Pisos costeros y casas de pueblo en el Baix Penedès.</p>
          </div>
        </div>
        {/* Stats card */}
        <div className="bg-accent rounded-3xl p-7 flex flex-col justify-center text-white">
          <div className="font-display font-extrabold text-5xl mb-2 leading-none">+120</div>
          <div className="text-sm font-body leading-[1.4]">Obras entregadas en el Baix Penedès</div>
        </div>
        {/* Image card */}
        <div className="rounded-3xl overflow-hidden relative bg-dark-card">
          <Image src="/images/cocina-amplia-reforma-vendrell.webp" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
        </div>
        {/* CTA card */}
        <div className="md:col-span-2 bg-beige rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-dark text-xl md:text-2xl mb-1">¿Empezamos tu reforma?</h3>
            <p className="text-grey font-body text-sm">Rellena el formulario y te llamamos hoy mismo.</p>
          </div>
          <a href="#form-g" className="bg-accent text-white px-6 py-3 rounded-full font-display font-bold whitespace-nowrap text-sm hover:bg-accent-light transition-colors">Pide presupuesto →</a>
        </div>
        {/* Quote card */}
        <div className="bg-dark-card rounded-3xl p-7 border border-white/5 flex items-center">
          <p className="text-white/70 italic text-sm font-body leading-[1.6]">"Plazos firmes y un trato muy cercano."<br/><span className="block text-white/40 text-xs mt-3 not-italic uppercase tracking-[0.15em]">Marta · Coma-ruga</span></p>
        </div>
      </div>
      {/* Form section below */}
      <div id="form-g" className="max-w-[700px] mx-auto mt-16 md:mt-20">
        <div className="bg-white rounded-2xl shadow-2xl p-7 md:p-9">
          <h3 className="font-display font-bold text-dark text-xl text-center mb-5">Pide tu presupuesto</h3>
          <HeroForm />
        </div>
      </div>
    </section>
  );
}

// ====== VARIANTE H: DOCK ======
function HeroVariantH() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image src="/images/hero-reforma-luminosa-vendrell.webp" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/15 to-dark" />

      {/* Top text */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 pt-32 lg:pt-44 text-center">
        <p className="font-body text-accent text-xs uppercase tracking-[0.4em] font-semibold mb-6">Clima Reformas Vendrell</p>
        <h1 className="font-display font-extrabold text-white text-[44px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[1] tracking-tight">
          Reformas en <span className="text-accent">El Vendrell</span>
        </h1>
        <p className="text-white/70 mt-6 text-base md:text-lg max-w-[520px] mx-auto font-body">Equipo propio, presupuesto cerrado, trato cercano.</p>
      </div>

      {/* Bottom dock form */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-dark/85 backdrop-blur-md border-t border-white/10 px-5 py-6 md:py-7">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex items-center justify-center mb-3">
            <p className="font-body text-accent text-[11px] uppercase tracking-[0.3em] font-semibold">Pide tu presupuesto · Te llamamos en 24h</p>
          </div>
          <form className="grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
            <input placeholder="Nombre *" className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/10 text-sm focus:outline-none focus:border-accent/50 font-body" />
            <input placeholder="Teléfono *" className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/10 text-sm focus:outline-none focus:border-accent/50 font-body" />
            <select defaultValue="" className="px-4 py-3 rounded-xl bg-white/10 text-white/40 border border-white/10 text-sm focus:outline-none focus:border-accent/50 font-body cursor-pointer">
              <option value="" disabled>Localidad *</option>
              <option className="text-dark">El Vendrell</option>
            </select>
            <select defaultValue="" className="px-4 py-3 rounded-xl bg-white/10 text-white/40 border border-white/10 text-sm focus:outline-none focus:border-accent/50 font-body cursor-pointer">
              <option value="" disabled>Tipo de obra</option>
              <option className="text-dark">Integral</option>
            </select>
            <button className="col-span-2 lg:col-span-1 bg-accent text-white py-3 rounded-xl font-display font-bold text-sm hover:bg-accent-light">Solicitar →</button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ====== SECTION LABEL ======
function SectionLabel({ id, letter, title, desc }: { id: string; letter: string; title: string; desc: string }) {
  return (
    <div id={id} className="bg-beige-warm border-y-2 border-accent/30 py-8 px-5">
      <div className="max-w-[1400px] mx-auto flex items-start gap-5">
        <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent text-white font-display font-extrabold text-2xl md:text-3xl flex items-center justify-center">
          {letter}
        </div>
        <div className="flex-1">
          <h2 className="font-display font-extrabold text-xl md:text-2xl text-dark mb-2">{title}</h2>
          <p className="text-grey font-body text-sm md:text-base max-w-[800px]">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ====== VARIANTE A: SPLIT CLÁSICO ======
function HeroVariantA() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-dark">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-reforma-luminosa-vendrell.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark/70" />

      <div className="relative z-10 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-5 sm:px-6 md:px-10 lg:px-20 pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[100vh]">
        <div>
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-3">Empresa de reformas en El Vendrell</p>
          <h1 className="font-display font-extrabold text-[40px] sm:text-[52px] md:text-[68px] lg:text-[76px] text-white leading-[1] tracking-tight mb-6">
            Reformas en <span className="text-accent">El Vendrell</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-[1.6] mb-8 max-w-[480px]">
            Reformas integrales, cocinas, baños y locales en el Baix Penedès. Equipo propio, presupuesto cerrado, acabados cuidados.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/60 text-sm">
            <span>Presupuesto cerrado</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-accent" />
            <span>Equipo propio</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-accent" />
            <span>Acabados cuidados</span>
          </div>
        </div>
        <div className="lg:flex lg:justify-end">
          <div className="w-full lg:w-[420px]">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== VARIANTE B: EDITORIAL ======
function HeroVariantB() {
  return (
    <>
      <section className="relative min-h-[80vh] bg-dark flex items-center justify-center overflow-hidden pt-32 pb-20">
        <Image
          src="/images/hero-reforma-luminosa-vendrell.webp"
          alt=""
          fill
          className="object-cover opacity-30"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/50" />

        <div className="relative z-10 text-center max-w-[1100px] px-5">
          <p className="font-body text-accent text-xs sm:text-sm uppercase tracking-[0.4em] mb-8">Clima Reformas · Baix Penedès</p>
          <h1 className="font-display font-extrabold text-white tracking-tight leading-[0.92] text-[56px] sm:text-[88px] md:text-[120px] lg:text-[160px] xl:text-[180px]">
            Reformas en
            <span className="block text-accent italic">El Vendrell</span>
          </h1>
          <p className="text-white/60 text-base md:text-xl leading-[1.6] max-w-[640px] mx-auto mt-10 font-body">
            Reformas integrales, cocinas, baños, pisos y locales pensados para la costa del Penedès.
          </p>
        </div>
      </section>

      {/* Horizontal form bar below hero */}
      <section className="bg-dark border-t border-white/10 py-8 md:py-10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
            <div className="lg:flex-shrink-0">
              <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-1">Pide tu presupuesto</h3>
              <p className="text-white/50 text-sm">Sin compromiso · te llamamos en menos de 24h</p>
            </div>
            <form className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <input type="text" placeholder="Tu nombre *" className="px-4 py-3.5 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:border-accent/50 text-sm" />
              <input type="tel" placeholder="Teléfono *" className="px-4 py-3.5 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:border-accent/50 text-sm" />
              <select className="px-4 py-3.5 rounded-xl bg-white/10 text-white/40 border border-white/10 focus:outline-none focus:border-accent/50 text-sm" defaultValue="">
                <option value="" disabled>Localidad *</option>
                <option className="text-dark">El Vendrell</option>
                <option className="text-dark">Calafell</option>
                <option className="text-dark">Cunit</option>
              </select>
              <select className="px-4 py-3.5 rounded-xl bg-white/10 text-white/40 border border-white/10 focus:outline-none focus:border-accent/50 text-sm" defaultValue="">
                <option value="" disabled>Tipo de obra</option>
                <option className="text-dark">Reforma integral</option>
                <option className="text-dark">Cocina</option>
                <option className="text-dark">Baño</option>
              </select>
              <button type="submit" className="bg-accent text-white py-3.5 rounded-xl font-display font-bold text-sm hover:bg-accent-light transition-colors">
                Solicitar →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

// ====== VARIANTE C: ASIMÉTRICO ======
function HeroVariantC() {
  return (
    <>
      <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] overflow-hidden">
        {/* LEFT: dark con texto */}
        <div className="relative bg-dark flex items-center px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24 py-20 lg:py-32">
          <div className="max-w-[540px]">
            <p className="font-body text-accent text-sm uppercase tracking-[0.3em] font-semibold mb-5">Reformas en El Vendrell</p>
            <h1 className="font-display font-extrabold text-white leading-[1] tracking-tight text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] xl:text-[80px] mb-6">
              Reformas con criterio en <span className="text-accent">la costa del Penedès</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-[1.7] mb-10 max-w-[440px]">
              Equipo propio, presupuesto cerrado y materiales pensados para la humedad marina. Reformas integrales, cocinas, baños y locales.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#form-c" className="inline-flex items-center gap-2 bg-accent text-white px-7 py-4 rounded-full font-display font-bold text-sm hover:bg-accent-light transition-colors">
                Pide presupuesto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="tel:+34877278163" className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-4 rounded-full font-body text-sm hover:bg-white/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                877 278 163
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: imagen + tarjeta flotante */}
        <div className="relative min-h-[400px] lg:min-h-[85vh] bg-dark">
          <Image
            src="/images/salon-luminoso-mediterraneo-vendrell.webp"
            alt="Reforma de salón en El Vendrell"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-dark/40 via-transparent to-transparent" />
          {/* Tarjeta de stat flotante */}
          <div className="absolute bottom-6 right-6 left-6 lg:bottom-10 lg:right-10 lg:left-auto lg:max-w-[300px] bg-dark/90 backdrop-blur-md text-white p-6 lg:p-7 rounded-2xl border border-white/10 shadow-2xl">
            <div className="text-accent font-display font-extrabold text-4xl lg:text-5xl leading-none">+120</div>
            <div className="text-sm text-white/60 mt-2 font-body leading-[1.5]">Obras entregadas en el Baix Penedès</div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-accent font-display font-bold text-xl leading-none">+15 años</div>
              <div className="text-xs text-white/50 mt-1 font-body">construyendo confianza</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form card centrado, "flotando" sobre el siguiente bloque */}
      <section id="form-c" className="bg-beige py-16 md:py-20 -mt-12 md:-mt-16 relative z-10">
        <div className="max-w-[640px] mx-auto px-5">
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-7 md:p-9 border border-grey-light">
            <div className="text-center mb-6">
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-dark mb-2">Pide tu valoración sin coste</h3>
              <p className="text-grey font-body text-sm">Te llamamos en menos de 24h con una propuesta a medida.</p>
            </div>
            <HeroForm />
          </div>
        </div>
      </section>
    </>
  );
}

// ====== VARIANTE D: MINIMAL PREMIUM ======
function HeroVariantD() {
  return (
    <>
      <section className="bg-dark min-h-[75vh] flex items-center justify-center text-center px-5 py-32 relative overflow-hidden">
        {/* Sutil gradiente decorativo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-[860px]">
          <span className="inline-block text-accent uppercase tracking-[0.4em] text-xs font-body font-semibold mb-8">
            Clima Reformas Vendrell
          </span>
          <h1 className="font-display font-extrabold text-white leading-[1.05] tracking-tight text-[44px] sm:text-[60px] md:text-[80px] lg:text-[100px]">
            Reformas en
            <br />
            <span className="text-accent">El Vendrell</span>
          </h1>
          <p className="text-white/55 mt-10 text-base md:text-xl font-body leading-[1.6] max-w-[520px] mx-auto">
            Equipo propio, presupuesto cerrado y atención al detalle.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a href="#form-d" className="bg-accent text-white px-8 py-4 rounded-full font-display font-bold text-sm hover:bg-accent-light transition-colors">
              Pide presupuesto gratis
            </a>
            <a href="https://wa.me/34711270568" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-8 py-4 rounded-full font-body text-sm hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>
              WhatsApp
            </a>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/40 text-xs font-body uppercase tracking-[0.2em]">
            <span>Sin compromiso</span>
            <span className="hidden sm:inline">·</span>
            <span>Respuesta en 24h</span>
            <span className="hidden sm:inline">·</span>
            <span>Cobertura Baix Penedès</span>
          </div>
        </div>
      </section>

      {/* Form "search bar" estilo Apple/Linear */}
      <section id="form-d" className="bg-beige-warm py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-center mb-8">
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-dark mb-2">Empieza tu reforma en 30 segundos</h3>
            <p className="text-grey font-body text-sm">Rellena los campos y te llamamos hoy mismo.</p>
          </div>
          <form className="bg-white rounded-2xl md:rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col md:flex-row md:items-center gap-2 p-2 border border-grey-light">
            <div className="flex-1 px-5 py-3 md:border-r border-grey-light/50">
              <label className="block text-[10px] text-grey-text uppercase tracking-wider font-semibold mb-0.5">Nombre</label>
              <input className="block w-full bg-transparent outline-none text-sm font-body text-dark placeholder:text-grey-text/60" placeholder="Tu nombre" />
            </div>
            <div className="flex-1 px-5 py-3 md:border-r border-grey-light/50">
              <label className="block text-[10px] text-grey-text uppercase tracking-wider font-semibold mb-0.5">Teléfono</label>
              <input className="block w-full bg-transparent outline-none text-sm font-body text-dark placeholder:text-grey-text/60" placeholder="Tu teléfono" />
            </div>
            <div className="flex-1 px-5 py-3 md:border-r border-grey-light/50">
              <label className="block text-[10px] text-grey-text uppercase tracking-wider font-semibold mb-0.5">Localidad</label>
              <select className="block w-full bg-transparent outline-none text-sm font-body text-dark" defaultValue="">
                <option value="" disabled>Selecciona</option>
                <option>El Vendrell</option>
                <option>Calafell</option>
                <option>Cunit</option>
              </select>
            </div>
            <div className="flex-1 px-5 py-3 md:border-r border-grey-light/50">
              <label className="block text-[10px] text-grey-text uppercase tracking-wider font-semibold mb-0.5">Reforma</label>
              <select className="block w-full bg-transparent outline-none text-sm font-body text-dark" defaultValue="">
                <option value="" disabled>Tipo</option>
                <option>Integral</option>
                <option>Cocina</option>
                <option>Baño</option>
              </select>
            </div>
            <button type="submit" className="bg-accent text-white px-8 py-4 rounded-xl md:rounded-full font-display font-bold text-sm whitespace-nowrap hover:bg-accent-light transition-colors mt-2 md:mt-0">
              Pide presupuesto →
            </button>
          </form>
          <p className="text-grey-text text-xs text-center mt-5 font-body">Sin compromiso · 100% gratuito · Respondemos en menos de 24 horas</p>
        </div>
      </section>
    </>
  );
}
