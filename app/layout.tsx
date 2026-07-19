import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { AnalyticsConsent } from '@/components/AnalyticsConsent';
import { AttributionCapture } from '@/components/AttributionCapture';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Bexhearts | Christian Couples App',
    template: '%s | Bexhearts',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bexhearts | Grow closer to God and each other',
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bexhearts | Christian Couples App',
    description: siteConfig.description,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const dataFastWebsiteId = process.env.NEXT_PUBLIC_DATAFAST_WEBSITE_ID;
  const dataFastDomain = process.env.NEXT_PUBLIC_DATAFAST_DOMAIN;
  const organizationId = `${siteConfig.url}/#organization`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { '@id': organizationId },
    },
  ];

  return (
    <html lang="en">
      <head>
        {dataFastWebsiteId && dataFastDomain && (
          <>
            <Script id="datafast-queue" strategy="beforeInteractive">
              {`window.datafast=window.datafast||function(){window.datafast.q=window.datafast.q||[];window.datafast.q.push(arguments);};`}
            </Script>
            <Script
              id="datafast-analytics"
              src="https://datafa.st/js/script.cookieless.js"
              data-website-id={dataFastWebsiteId}
              data-domain={dataFastDomain}
              strategy="afterInteractive"
            />
          </>
        )}
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
        <AttributionCapture />
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
