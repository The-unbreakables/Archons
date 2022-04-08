import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req, res) {
    const events=await prisma.events.findMany()

    res.status(200).json({events})
  }
  