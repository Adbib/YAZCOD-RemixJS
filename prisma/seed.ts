import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const createConfig = await db.configs.create({
    data: {
      siteTitle: "YAZCOD",
      siteDescription: "Anothor description",
      siteKeywords: { keywords: ["YAZCOD", "YAZCOD", "YAZCOD"] },
      siteLogo: "https://www.yazcod.com/images/logo.png",
      siteCover:
        "http://localhost:3000/uploads/shopping-online-24-hours-online-store-website-application-background-digital-marketing-shop-concept-3d-illustration_250043-254.jpg",
    },
    topMessage: {
      message: "Welcome to YAZCOD",
      active: true,
      color: "#9021f3",
    },
    menus: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "Categories",
        link: "/categories",
      },
    ],
  });
  const options = new Array().fill(0);
  await Promise.all([createConfig]);
}

seed();
// node --require esbuild-register prisma/seed.ts
