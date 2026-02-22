import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "E-mailadres is verplicht." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Ongeldig e-mailadres." },
        { status: 400 }
      );
    }

    // TODO: Store email in database (e.g., DynamoDB, Supabase, or other storage)
    console.log("[Waitlist] New signup received");

    return NextResponse.json({
      success: true,
      message: "Je staat op de lijst.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Er is iets misgegaan." },
      { status: 500 }
    );
  }
}
