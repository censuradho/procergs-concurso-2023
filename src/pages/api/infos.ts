import { findGroupedByTotal } from '@/services/api'
import { NextApiRequest, NextApiResponse } from 'next'

import json from 'public/nota.json'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { data } = await findGroupedByTotal()

  const amountByGrades = Object
    .entries(data)
    .map(([key, value]) => ({
      grade: key,
      total: value.length
    }))


  const infos = {
    total: json.length,
    higher_incidence: 2,
    amountByGrades
    // lower_incidence: Math.min(...amountByGrades),
  }

  return res.json(infos)
}