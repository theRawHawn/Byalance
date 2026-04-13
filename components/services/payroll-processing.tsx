
import { Users, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PayrollProcessing() {
  return (
    <Card>
      <CardContent className="p-8">
        <div className="flex items-start mb-6">
          <div className="text-4xl text-primary-600 mr-6 mt-2">
            <Users className="w-12 h-12" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Payroll Processing</h3>
            <p className="text-gray-600 font-bold mb-6">Complete payroll management with accurate calculations and compliance.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Employee Master Creation (PAN, Aadhar, Bank)",
            "Monthly Salary Calculations",
            "Payroll Register",
            "Issuing Salary Slips",
            "TDS on Salary & Form 16",
            "PF/ESI/PT/EDLI Return"
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
