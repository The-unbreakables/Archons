import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req, res) {
    const register=await prisma.user.findMany({
      where:{
        id:req.body.id,
        register: req.body.event
      }
    })
  }
  