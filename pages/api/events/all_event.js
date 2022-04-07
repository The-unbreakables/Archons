// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if(req.method==='PUT')
    return res.send("oh ho is this put?")
    res.status(200).json({ name: 'John Doe',method:req.method })
  }
  