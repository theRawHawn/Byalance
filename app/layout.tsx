
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"], display: 'swap' });


{
/*
* SPF (Sender Policy Framework) Record for G Suite:
*
* To authorize Google Workspace (G Suite) to send emails on your behalf,
* you need to add a TXT record to your domain's DNS settings.
*
* Follow these steps:
* 1. Log in to your domain provider's website (e.g., GoDaddy, Namecheap).
* 2. Navigate to the DNS management section.
* 3. Create a new TXT record with the following values:
*    - Host/Name: @
*    - Value: v=spf1 include:_spf.google.com ~all
* 4. Save the record.
*
* Note: DNS changes can take up to 24 hours to propagate.
*/
}


export const metadata: Metadata = {
  title: "Byalance: Accounting, GST, ITR & TDS Services",
  description: "Expert accounting, GST, ITR, and TDS filing services from Byalance. We simplify financial compliance for small and medium businesses across India.",
  openGraph: {
    title: "Byalance: Accounting, GST, ITR & TDS Services",
    description: "Expert accounting, GST, ITR, and TDS filing services from Byalance. We simplify financial compliance for small and medium businesses across India.",
    url: "https://www.byalance.in",
    siteName: "Byalance",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Byalance: Accounting, GST, ITR & TDS Services",
    description: "Expert accounting, GST, ITR, and TDS filing services from Byalance. We simplify financial compliance for small and medium businesses across India.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: { url: "/brandlogo-converted-from-png.svg", sizes: "70x70" },
    apple: { url: "/brandlogo-converted-from-png.svg", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Byalance',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '#38, Dollars Colony, 4th Phase, JP Nagar',
      'addressLocality': 'Bengaluru',
      'addressRegion': 'Karnataka',
      'postalCode': '580073',
      'addressCountry': 'IN'
    },
    'telephone': '+91 93805 97443',
    'email': 'info@byalance.in',
    'url': 'https://www.byalance.in',
    'logo': 'https://www.byalance.in/brandlogo-converted-from-png.svg',
    'sameAs': [
      'https://www.facebook.com/byalance',
      'https://www.twitter.com/byalance',
      'https://www.linkedin.com/company/byalance'
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <SpeedInsights/>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LC2DSK5J0G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LC2DSK5J0G');
          `}
        </Script>
      </body>
    </html>
  );
}
