import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default function AddProduct(data: any) {
  async function main() {
    // Connect the client

    await prisma.$connect();

    if (
      data &&
      data.title &&
      data.title.length > 3 &&
      data.category &&
      data.price &&
      data.price.length > 0
    ) {
      const addPage = await prisma.products.create({
        data: {
          title: data.title,
          desc: data.desc,
          img: data.img,
          price: parseFloat(data.price),
          category: data.category,
          blockedCountries: data.blockedCountries || [],
          priceByCountry: data.priceByCountry || [],
        },
      });

      return addPage;
    } else {
      return { error: true, message: "Missing data", done: false };
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
