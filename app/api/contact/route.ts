
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { z } from "zod";

// Define the schema for the contact form submission
const insertContactSubmissionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  mobile: z.string().min(1, "Mobile number is required"),
  email: z.string().email("Invalid email address"),
  businessType: z.string().optional(),
  message: z.string().optional(),
});

const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = process.env;

async function updateGoogleSheet(validatedData: z.infer<typeof insertContactSubmissionSchema>) {
  // Ensure required environment variables are present
  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    throw new Error("Google API credentials are not set in the environment variables.");
  }

  try {
    const auth = new google.auth.JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ auth, version: 'v4' });

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'Client Details',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            validatedData.name,
            validatedData.mobile,
            validatedData.email,
            validatedData.businessType ?? '',
            validatedData.message ?? '',
          ],
        ],
      },
    });
  } catch (error) {
    // Log the detailed error and re-throw it to be caught by the POST handler
    console.error("Error updating Google Sheet:", error);
    if (error instanceof Error) {
        throw new Error(`Google Sheets API Error: ${error.message}`);
    }
    throw new Error("Failed to update Google Sheet due to an unknown error.");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = insertContactSubmissionSchema.parse(body);

    await updateGoogleSheet(validatedData);

    return NextResponse.json({ success: true, message: "Form submitted successfully" });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Validation error",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    // --- DEBUGGING CHANGE ---
    // Return the actual error message in the response to make it visible.
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Contact form error:", errorMessage);
    return NextResponse.json(
      { message: "Failed to submit contact form.", error: errorMessage },
      { status: 500 }
    );
  }
}
