
"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-primary-600">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-4 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button className="bg-primary-600 text-white hover:bg-primary-700">
            <Home className="w-4 h-4 mr-2" />
            Go to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
