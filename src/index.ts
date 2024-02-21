import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function createUser(
  email: String,
  firstName: String,
  lastname: String,
  password: String
) {
    await prisma.user.create({
        email
        firstname
        lastName
        Password
    })
}
