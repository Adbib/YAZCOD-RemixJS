import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default function get_configs() {
  async function main() {
    // Connect the client

    await prisma.$connect();

    try {
      const getConfigs = await prisma.configs.findMany({ take: 1 });
      //   console.log("getConfigs", getConfigs);
      return {
        error: false,
        message: "done",
        data: getConfigs,
        done: true,
      };
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
