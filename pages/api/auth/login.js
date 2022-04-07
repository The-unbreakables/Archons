import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if(req.method!="POST")
    return res.status(405).json({message:"Only POST method is accepted"})
    const email=req.body.email
    const password=req.body.password
    const result=await prisma.user.findMany({
        where:{
            email,password
        } 
    })
    if(result.length===0)
    return res.status(400).json({message:"email/password is incorrect"})
    res.status(200).json({message:"Successfully logged in"})

    res.status(200).json({ email })

  }
  