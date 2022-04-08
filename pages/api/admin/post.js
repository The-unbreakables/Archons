import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req, res) {
 
  await prisma.user.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        img: req.body.img
      },
    })
  }