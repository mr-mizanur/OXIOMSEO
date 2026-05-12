import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

// app/layout.js

export const metadata = {
  title: "Oxiom SEO | Premium SEO Agency for Digital Growth",
  description: "High-performance digital marketing solutions and SEO strategies architected for modern agencies.",
  metadataBase: new URL('https://oxiomseo.vercel.app'),
  alternates: {
    canonical: '/',
  },
  // গুগল সাইট ভেরিফিকেশন এখানে যোগ করুন
  verification: {
    google: "chDhbXsqdq3gt6mJi7A_-jdAMjmDWra_vE4TOdIU46Q",
  },
  openGraph: {
    title: "Oxiom SEO | Premium SEO Agency",
    description: "Elevate your digital presence with our bespoke SEO solutions.",
    url: 'https://oxiomseo.vercel.app',
    siteName: 'Oxiom SEO',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oxiom SEO | Premium SEO Agency',
    description: 'High-performance digital marketing solutions architected by MizDev.',
    images: ['/og-image.png'],
    creator: '@yourhandle', 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data for the Agency
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Oxiom SEO",
    "image": "https://oxiomseo.vercel.app/og-image.png",
    "url": "https://oxiomseo.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BD"
    },
    "description": "High-performance digital marketing solutions architected for modern agencies.",
    "founder": {
      "@type": "Person",
      "name": "MizDev"
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        {/* Structured Data Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main className="pt-20"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}