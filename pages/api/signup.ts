import { prisma } from '../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fullName, email, password, category, parentId } = req.body

  try {
    await prisma.user.create({
      data: {
        fullName,
        email,
        password,
        category,
        parentId,
      },
    })
    res.status(200).json({ message: 'user added Added' })
  } catch (error) {
    console.log('Failure')
  }
}
