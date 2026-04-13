
import { Calculator, FileText, Receipt, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

const services = [
  {
    icon: <Calculator className="w-12 h-12" />,
    title: "Accounting & Bookkeeping",
    description: "Complete accounting services from data entry to financial reports.",
    link: "/services/accounting-bookkeeping",
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "ITR Services",
    description: "Expert ITR filing services for individuals and businesses.",
    link: "/services/itr-services",
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "GST Services",
    description: "GST registration, filing, and compliance management made simple.",
    link: "/services/gst-services",
  },
  {
    icon: <Receipt className="w-12 h-12" />,
    title: "TDS Services",
    description: "TAN application, return filing, and TDS compliance support.",
    link: "/services/tds-services",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Payroll Processing",
    description: "Complete payroll management with salary calculations and compliance.",
    link: "/services/payroll-processing",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive accounting solutions for your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl text-primary-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
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
      </div>
    </section>
  );
}
