
import { Receipt, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TDSServices() {
  return (
    <Card className="mb-8">
      <CardContent className="p-8">
        <div className="flex items-start mb-6">
          <div className="text-4xl text-primary-600 mr-6 mt-2">
            <Receipt className="w-12 h-12" />
          </div>
          <div>
            {/* SEO Tip: This is a subheading (H3). Use it to describe the service and include relevant keywords. */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">TDS Services</h3>
            {/* SEO Tip: This is a good place to add a short paragraph that summarizes the service and includes some keywords. */}
            <p className="text-gray-600 font-bold mb-6">Comprehensive TDS management and filing services for your business.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            // SEO Tip: Use this list to highlight the specific services you offer. Include keywords where appropriate.
            "TAN Application",
            "Filing of Form 24Q, 26Q",
            "Advance Tax & Challan Management",
            "Form 16/16A Generation"
          ].map((service, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
              {service}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
