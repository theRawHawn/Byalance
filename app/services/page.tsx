
import type { Metadata } from 'next';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// SEO Tip: This is the page title, which is very important for SEO. 
// Make it descriptive and include your main keywords. 
// Example: "Comprehensive Accounting Services | Byalance"
export const metadata: Metadata = {
  title: "Our Services | Byalance",
  // SEO Tip: The description is also crucial for SEO. It should be a concise summary of the page content and include relevant keywords.
  // Example: "Byalance offers a wide range of accounting services, including bookkeeping, ITR filing, GST services, TDS compliance, and payroll processing. Contact us for expert financial solutions."
  description: "Explore the comprehensive range of accounting and financial services offered by Byalance. We provide expert solutions to meet all your business needs.",
};

// SEO Tip: Use descriptive titles and descriptions for your services. 
// These will be displayed on the page and are important for both users and search engines.
const services = [
  {
    title: "Accounting & Bookkeeping",
    // SEO Tip: Include keywords related to accounting and bookkeeping in this description.
    description: "We provide comprehensive accounting and bookkeeping services to ensure your financial records are accurate and up-to-date. From data entry to financial statements, we handle it all.",
    link: "/services/accounting-bookkeeping",
  },
  {
    title: "ITR Services",
    // SEO Tip: Include keywords related to ITR filing in this description.
    description: "Our ITR services are designed to help you stay compliant with tax regulations. We assist with ITR filing for individuals and businesses, ensuring accuracy and timeliness.",
    link: "/services/itr-services",
  },
  {
    title: "GST Services",
    // SEO Tip: Include keywords related to GST services in this description.
    description: "We offer a full range of GST services, including registration, filing, and compliance. Our experts help you navigate the complexities of GST and ensure your business is compliant.",
    link: "/services/gst-services",
  },
  {
    title: "TDS Services",
    // SEO Tip: Include keywords related to TDS services in this description.
    description: "Our TDS services cover everything from TAN application to return filing. We help you manage your TDS compliance, so you can focus on your business.",
    link: "/services/tds-services",
  },
  {
    title: "Payroll Processing",
    // SEO Tip: Include keywords related to payroll processing in this description.
    description: "We provide end-to-end payroll processing services, including salary calculation, statutory compliance, and reporting. Our services are designed to be efficient and accurate.",
    link: "/services/payroll-processing",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          {/* SEO Tip: This is the main heading of the page (H1). It should be descriptive and include your main keywords. */}
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          {/* SEO Tip: This is a good place to add a short paragraph that summarizes your services and includes some keywords. */}
          <p className="mt-4 text-lg text-gray-600">We offer a wide range of accounting and financial services to meet your business needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                {/* SEO Tip: These are subheadings (H3). Use them to describe your services and include relevant keywords. */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.link}>
                  <a className="text-primary-600 font-medium hover:text-primary-700 flex items-center justify-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
