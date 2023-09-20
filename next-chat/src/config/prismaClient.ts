import { PrismaClient } from "@prisma/client";
import { env } from "process";

declare global {
  var prisma: PrismaClient;
}

const client = globalThis.prisma || new PrismaClient();

if (env.NODE_ENV === "development") globalThis.prisma = client;

export const prisma = client;
