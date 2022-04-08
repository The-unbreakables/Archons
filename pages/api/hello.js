import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req, res) {
  const date = await prisma.events.findMany({
    where: {
      start_date: {
        gt:  new Date()
      },
    },
  });
  res.status(200).json({date})
}
