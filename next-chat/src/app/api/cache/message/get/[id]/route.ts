import { getMessagesFromCache } from "@/server/getMessagesFromCache";
import { NextRequest, NextResponse } from "next/server";

export default async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const messages = getMessagesFromCache(params.id);

  console.log("messages", messages);

  return NextResponse.json({ id: params.id });
}
