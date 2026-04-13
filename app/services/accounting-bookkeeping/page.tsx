
import type { Metadata } from 'next';
import AccountingBookkeeping from "@/components/services/accounting-bookkeeping";

// SEO Tip: This is the page title, which is very important for SEO. 
// Make it descriptive and include your main keywords. 
// Example: "Expert Accounting & Bookkeeping Services | Byalance"
export const metadata: Metadata = {
  title: "Accounting & Bookkeeping Services | Byalance",
  // SEO Tip: The description is also crucial for SEO. It should be a concise summary of the page content and include relevant keywords.
  // Example: "Byalance offers professional accounting and bookkeeping services for businesses of all sizes. We handle everything from data entry to financial reporting, ensuring your books are always accurate."
  description: "Comprehensive accounting and bookkeeping services from Byalance. We keep your books accurate and up-to-date, so you can focus on your business.",
};

export default function AccountingBookkeepingPage() {
  return <AccountingBookkeeping />;
}
