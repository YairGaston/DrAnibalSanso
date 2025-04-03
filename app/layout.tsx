import { Inter } from "next/font/google"; // Importa la fuente "Inter"
import "../styles/globals.css";
import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] }); // Inicializa la fuente


export const metadata: Metadata = {
  
  title: "Dr. Aníbal Sansó | Urólogo y Sexólogo en Tierra del Fuego | Río Grande y Ushuaia",
  description:
    "Atención urológica y sexológica especializada con el Dr. Aníbal Sansó en CEMEP Río Grande, Hospital Naval y Clínica BioSur de Ushuaia. Reserve su consulta.",
  keywords:
    "urólogo, sexólogo, Tierra del Fuego, Río Grande, Ushuaia, CEMEP, Hospital Naval, Clínica BioSur, salud masculina, problemas urológicos, disfunción eréctil, consulta urológica",
  authors: [{ name: "Dr. Aníbal Sansó" }],
  openGraph: {
    title: "Dr. Aníbal Sansó | Urólogo y Sexólogo en Tierra del Fuego",
    description: "Atención especializada en urología y sexología en Río Grande y Ushuaia. Consulte por turnos.",
    url: "https://www.dranibalsanso.com.ar",
    siteName: "Dr. Aníbal Sansó - Urólogo y Sexólogo",
    images: [
      {
        url: "/images/avatar-anibal.png",
        width: 800,
        height: 600,
        alt: "Dr. Aníbal Sansó - Urólogo y Sexólogo en Tierra del Fuego",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dranibalsanso.com.ar",
  },
    generator: 'v0.dev'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="geo.region" content="AR-V" />
        <meta name="geo.placename" content="Tierra del Fuego" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        {children} {/* Renderiza los hijos aquí */}
        <Script
          id="schema-doctor"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": "Dr. Aníbal Sansó",
            "medicalSpecialty": ["Urología", "Sexología"],
            "image": "/images/avatar-anibal.png",
            "description": "Urólogo y Sexólogo con más de 15 años de experiencia en Tierra del Fuego, Argentina",
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Río Grande",
                "addressRegion": "Tierra del Fuego",
                "addressCountry": "Argentina",
                "streetAddress": "20 de Junio 815"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Ushuaia",
                "addressRegion": "Tierra del Fuego",
                "addressCountry": "Argentina",
                "streetAddress": "Yaganes 299"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Ushuaia",
                "addressRegion": "Tierra del Fuego",
                "addressCountry": "Argentina",
                "streetAddress": "Hipólito Irigoyen 1792"
              }
            ],
            "workLocation": [
              {
                "@type": "MedicalClinic",
                "name": "CEMEP",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Río Grande",
                  "addressRegion": "Tierra del Fuego",
                  "addressCountry": "Argentina",
                  "streetAddress": "20 de Junio 815"
                },
                "telephone": "2964 420050"
              },
              {
                "@type": "Hospital",
                "name": "Hospital Naval Ushuaia",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Ushuaia",
                  "addressRegion": "Tierra del Fuego",
                  "addressCountry": "Argentina",
                  "streetAddress": "Yaganes 299"
                },
                "telephone": "2901 528802"
              },
              {
                "@type": "MedicalClinic",
                "name": "Clínica BioSur",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Ushuaia",
                  "addressRegion": "Tierra del Fuego",
                  "addressCountry": "Argentina",
                  "streetAddress": "Hipólito Irigoyen 1792"
                },
                "telephone": "2901 411898"
              }
            ]
          })}
        </Script>
      </body>
    </html>
  );
}