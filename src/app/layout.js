// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, generateMetadata } from "../lib/seo";
import { Suspense } from "react";
import Script from "next/script";
import { GA_TRACKING_ID } from "../lib/gtag";
import GAClientTracker from "./ga-tracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Generate default metadata
export const metadata = generateMetadata();

// JSON-LD Structured Data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  'name': siteConfig.name,
  'url': siteConfig.url,
  'description': siteConfig.description,
  'address': {
    '@type': 'PostalAddress',
    'addressRegion': 'Punjab',
    'addressCountry': 'India'
  },
  'areaServed': 'India',
  'educationalLevel': 'High School to Competitive Exams',
  'keywords': siteConfig.keywords
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        {GA_TRACKING_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
        
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Punjab, India" />
        <meta name="geo.position" content="31.1471;75.3412" />
        <meta name="ICBM" content="31.1471, 75.3412" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {GA_TRACKING_ID ? (
          <Suspense fallback={null}>
            <GAClientTracker />
          </Suspense>
        ) : null}
        {children}
      </body>
    </html>
  );
}