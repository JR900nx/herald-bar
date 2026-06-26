import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: PrismaClient;
}

function getDbUrl() {
  const url = process.env.POSTGRES_PRISMA_URL || process.env.DATABASE_URL || "";
  if (!url) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}connection_limit=1&pool_timeout=30&connect_timeout=30`;
}

if (!global.prismaGlobal) {
  global.prismaGlobal = new PrismaClient({
    datasources: { db: { url: getDbUrl() } },
  });
}

const prisma = global.prismaGlobal;

export default prisma;
