import { saveMessage } from "@/server/saveMessage";
import { NextApiRequest } from "next";

export default async function POST(req: NextApiRequest) {
  const message = req.body.message;

  saveMessage(message);
}
