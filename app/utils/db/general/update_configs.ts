import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default function update_configs(
  site: string = "YAZCOD",
  configs: object
) {
  async function main() {
    // Connect the client

    await prisma.$connect();
    delete configs?.OriginalSiteTitle;
    delete configs?.siteLogoOld;
    delete configs?.siteCoverOld;
    delete configs?.siteTopMessageActive;
    delete configs?.siteTopMessage;
    delete configs?.topMessageBackground;
    // console.log(configs);
    // return "";
    try {
      const update_configs = await prisma.configs.update({
        where: {
          siteTitle: site,
        },
        data: configs,
      });

      return {
        error: false,
        message: "done",
        data: update_configs,
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
