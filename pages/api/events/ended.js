import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default function handler(req, res) {
    const date=new Date()
    const ok = new Date('2020-04-10T10:20:30Z');
    if(ok>date)
    return res.status(200).send('ok')
    else 
    return res.status(200).send('ko')

  }
  