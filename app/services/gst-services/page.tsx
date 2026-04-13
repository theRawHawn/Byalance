
import type { Metadata } from 'next';
import GSTServices from "@/components/services/gst-services";

// SEO Tip: This is the page title, which is very important for SEO. 
// Make it descriptive and include your main keywords. 
// Example: "Expert GST Registration & Filing Services | Byalance"
export const metadata: Metadata = {
  title: "GST Services | Byalance",
  // SEO Tip: The description is also crucial for SEO. It should be a concise summary of the page content and include relevant keywords.
  // Example: "Byalance offers comprehensive GST services, including registration, filing, and reconciliation. Our experts ensure your business remains compliant with all GST regulations."
  description: "Complete GST compliance and filing services to keep your business tax-compliant. From registration to filing and reconciliation, we have you covered.",
};

export default function GSTServicesPage() {
  return <GSTServices />;
}
