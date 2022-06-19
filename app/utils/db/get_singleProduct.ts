import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default function get_SingleProduct(name: string) {
  async function main() {
    // Connect the client

    await prisma.$connect();

    try {
      const get_product = await prisma.products.findUnique({
        where: { title: name },
      });
      return { error: false, message: "done", data: get_product, done: true };
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
