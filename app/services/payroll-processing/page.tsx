
import type { Metadata } from 'next';
import PayrollProcessing from "@/components/services/payroll-processing";

export const metadata: Metadata = {
  title: "Payroll Processing Services | Byalance",
  description: "Complete payroll management with accurate calculations and compliance. We handle everything from employee master creation to PF/ESI/PT/EDLI returns.",
};

export default function PayrollProcessingPage() {
  return <PayrollProcessing />;
}
