import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req, res) {
    if(req.method!=='POST')
    return res.status(405)
    const email=req.body.email
    const result=await prisma.user.findMany({
        where: {
            email
        }
    })
    if(result.length!==0)
    return res.status(400).json({message:"This email already exists"})
    await prisma.user.create({
        data: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
      })

   // res.status(200).json({ name: 'John Doe' })
  }
  