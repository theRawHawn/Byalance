
import { Users, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PayrollProcessing() {
  return (
    <Card className="mb-8">
      <CardContent className="p-8">
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0">
            <Users className="w-12 h-12 text-primary-600" />
          </div>
          <div className="ml-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Payroll Processing</h3>
            <p className="text-lg text-gray-600">Complete payroll management with accurate calculations and compliance.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
          {[
            "Employee Master Creation (PAN, Aadhar, Bank)",
            "Monthly Salary Calculations",
            "Payroll Register",
            "Issuing Salary Slips",
            "TDS on Salary & Form 16",
            "PF/ESI/PT/EDLI Return"
          ].map((service, index) => (
            <div key={index} className="flex items-center">
              <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-800">{service}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
