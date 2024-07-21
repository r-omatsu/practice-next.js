import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ liked: true }, { status: 404 });
}
