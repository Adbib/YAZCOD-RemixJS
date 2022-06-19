import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default function Get_HomeProducts(items: number = 4) {
  async function main() {
    // Connect the client

    await prisma.$connect();

    try {
      const get_products = await await prisma.products.findMany({
        take: items,
        orderBy: {
          createdAt: "desc",
        },
      });
      // .sort({ createdAt: "desc" });
      // .pretty();
      return { error: false, message: "done", data: get_products, done: true };
    } catch (error: any) {
      return { error: true, message: error?.message, done: false, data: null };
    }
  }

  return main()
    .catch((e) => {
      throw e;
    })

    .finally(async () => {
      await prisma.$disconnect();
    });
}
