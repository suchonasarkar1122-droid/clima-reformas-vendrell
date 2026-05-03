export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": "https://reformasvendrell.es/#business",
    name: "Clima Reformas Vendrell",
    url: "https://reformasvendrell.es",
    logo: "https://reformasvendrell.es/images/hero-reforma-luminosa-vendrell.webp",
    image: "https://reformasvendrell.es/images/hero-reforma-luminosa-vendrell.webp",
    telephone: "+34877278163",
    email: "info@reformasvendrell.es",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer d'Apel·les Fenosa, 16",
      addressLocality: "El Vendrell",
      addressRegion: "Tarragona",
      postalCode: "43700",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.2186,
      longitude: 1.5350,
    },
    areaServed: [
      { "@type": "City", name: "El Vendrell" },
      { "@type": "City", name: "Calafell" },
      { "@type": "City", name: "Cunit" },
      { "@type": "City", name: "L'Arboç" },
      { "@type": "City", name: "Roda de Berà" },
      { "@type": "City", name: "Banyeres del Penedès" },
    ],
    sameAs: [],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:30",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
