import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://quote-garden.onrender.com/api/v3/quotes/random?count=1",
      { cache: "no-store" }
    );
    const res = await response.json();
    const data = res.data[0].quoteText;
    return NextResponse.json({
      message: "Successfully fetched",
      success: true,
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
