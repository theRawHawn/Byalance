
import { Calculator, FileText, Receipt, Users, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Calculator className="w-12 h-12 text-primary-600" />,
    title: "Accounting & Bookkeeping",
    description: "Comprehensive accounting services to keep your books accurate and up-to-date.",
    features: [
      "Sales, Purchase, Expense Entries",
      "Bank Reconciliation",
      "Cash Book Maintenance",
      "Journal Entries & Depreciation",
      "Ledgers/Vendors Reconciliation",
      "Trial Balance, P&L, Balance Sheet",
      "Receivables & Payables Tracking",
      "Data Setup & Cleanup",
      "Month-End & Year-End Closing Support",
    ],
  },
  {
    icon: <FileText className="w-12 h-12 text-primary-600" />,
    title: "ITR Services",
    description: "Expert ITR filing services for individuals and businesses.",
    features: [
      "ITR Filing for Individuals & Businesses",
      "Tax Planning and Advisory",
      "Revised Return Filing",
      "Notice and Scrutiny Support",
    ],
  },
  {
    icon: <FileText className="w-12 h-12 text-primary-600" />,
    title: "GST Services",
    description: "Complete GST compliance and filing services to keep your business tax-compliant.",
    features: [
      "GST Registration",
      "GSTR-1, 3B, 9 Filing",
      "GST Input Credit Matching (2B vs Books)",
      "Late Fee and Penalty Resolution",
    ],
  },
  {
    icon: <Receipt className="w-12 h-12 text-primary-600" />,
    title: "TDS Services",
    description: "Comprehensive TDS management and filing services for your business.",
    features: [
      "TAN Application",
      "Filing of Form 24Q, 26Q",
      "Advance Tax & Challan Management",
      "Form 16/16A Generation",
    ],
  },
  {
    icon: <Users className="w-12 h-12 text-primary-600" />,
    title: "Payroll Processing",
    description: "Complete payroll management with accurate calculations and compliance.",
    features: [
      "Employee Master Creation (PAN, Aadhar, Bank)",
      "Monthly Salary Calculations",
      "Payroll Register",
      "Issuing Salary Slips",
      "TDS on Salary & Form 16",
      "PF/ESI/PT/EDLI Return",
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Complete accounting solutions tailored for your business</p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-lg text-gray-600 font-semibold">{service.description}</p>
                  </div>
                </div>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 ${service.title === "Accounting & Bookkeeping" || service.title === "Payroll Processing" ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-x-8 gap-y-4`}>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-base text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
