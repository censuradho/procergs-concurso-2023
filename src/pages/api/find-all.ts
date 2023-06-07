import { NextApiRequest, NextApiResponse } from 'next'
import json from 'public/nota.json'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  const parsed = json.map(value => ({
    total: Number(value.total),
    inscricao: value.inscricao,
    legislacao: Number(value.legislacao || 0),
    portugues: Number(value.portugues || 0),
    nome: value.nome,
    conhecimentos_especificos: Number(value.conhecimentos_especificos || 0),
  }))

  return res.json(parsed)
}