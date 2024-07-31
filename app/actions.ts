import { prisma } from "@/prisma/prisma-client";
import { Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const createdUser = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: hashSync(body.password, 10),
        verified: "",
      },
    });
  } catch (err) {
    console.log("Error [CREATE_USER]", err);
    throw err;
  }
}
