
import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";


// FETCH ALL CATEGORIES
export const GET = async () => {
  try {
    await prisma.$connect();
    const categories = await prisma.category.findMany();
    console.log(categories, " api categories log");
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  } finally{
    await prisma.$disconnect()
  }
};
