import { NextRequest, NextResponse } from "next/server";

export default async function GET(req: NextRequest) {
  return NextResponse.json({ message: "this works" });
}
