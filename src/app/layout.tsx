import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elyvate-ai.com'),
  title: {
    default: "Elyvate AI - Enterprise AI Solutions That Drive Real Results",
    template: "%s | Elyvate AI"
  },
  description: "Transform your business with AI-powered chatbots, voice agents and custom automation solutions. Reduce costs by 95% and scale your operations with 24/7 intelligent agents. Free AI audit worth £1,000.",
  keywords: [
    "AI solutions",
    "AI chatbots",
    "voice agents",
    "business automation",
    "AI consulting",
    "enterprise AI",
    "customer support automation",
    "AI workflow automation",
    "conversational AI",
    "AI implementation",
    "AI audit",
    "reduce business costs",
    "24/7 AI support",
    "custom AI agents",
    "AI voice calling",
    "intelligent automation",
    "AI for business"
  ],
  authors: [{ name: "Elyvate AI" }],
  creator: "Elyvate AI",
  publisher: "Elyvate AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elyvate-ai.com',
    siteName: 'Elyvate AI',
    title: 'Elyvate AI - Enterprise AI Solutions That Drive Real Results',
    description: 'Transform your business with AI-powered chatbots, voice agents and custom automation solutions. Reduce costs by 95% and scale your operations with 24/7 intelligent agents.',
    images: [
      {
        url: '/elyvate-logo.png',
        width: 1200,
        height: 630,
        alt: 'Elyvate AI - Enterprise AI Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elyvate AI - Enterprise AI Solutions That Drive Real Results',
    description: 'Transform your business with AI-powered chatbots, voice agents and custom automation. Reduce costs by 95%. Free £1,000 AI audit available.',
    images: ['/elyvate-logo.png'],
    creator: '@elyvateai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/elyvate-logo.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://elyvate-ai.com',
  },
  verification: {
    // Add your verification codes here when you get them
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#00999c" />
        <meta name="color-scheme" content="light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Elyvate AI" />
        
        {/* Geo targeting */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        
        {/* Business info */}
        <meta property="business:contact_data:email" content="hello@elyvateai.com" />
        <meta property="business:contact_data:phone_number" content="+44 20 1234 5678" />
        
        {/* Prevent phone number detection */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Elyvate AI",
              "url": "https://elyvate-ai.com",
              "logo": "https://elyvate-ai.com/elyvate-logo.png",
              "description": "Enterprise AI solutions provider specializing in chatbots, voice agents, and custom automation.",
              "email": "hello@elyvateai.com",
              "telephone": "+44-20-1234-5678",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB"
              },
              "sameAs": [
                "https://www.linkedin.com/company/elyvateai",
                "https://twitter.com/elyvateai",
                "https://www.facebook.com/elyvateai"
              ],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://elyvate-ai.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Elyvate AI",
              "url": "https://elyvate-ai.com",
              "description": "Transform your business with AI-powered chatbots, voice agents and custom automation solutions.",
              "publisher": {
                "@type": "Organization",
                "name": "Elyvate AI"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "AI Solutions",
              "provider": {
                "@type": "Organization",
                "name": "Elyvate AI"
              },
              "areaServed": "GB",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Chatbots",
                      "description": "24/7 intelligent conversational agents"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Voice Agents",
                      "description": "AI-powered calling systems with natural language processing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom AI Agents",
                      "description": "Bespoke AI solutions for specific business needs"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Audits",
                      "description": "Free comprehensive AI readiness evaluation"
                    },
                    "price": "0",
                    "priceCurrency": "GBP"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
