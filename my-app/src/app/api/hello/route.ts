import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}

// NOTE: GET,HEAD以外のHTTP関数のexportは動的Route Handlerの原因となる
export async function POST(request: NextRequest) {
  return NextResponse.json({ liked: true }, { status: 404 });
}
