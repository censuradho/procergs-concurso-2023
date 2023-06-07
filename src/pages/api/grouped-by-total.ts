import { findAll } from '@/services/api';
import { NextApiRequest, NextApiResponse } from 'next';

export const groupBy = <T, K extends keyof T>(key: K, value: T[]) => {
  
  return value.reduce<Record<string, T[]>>(
    (prev, curr) => {
      const target =  curr[key as keyof typeof curr] as string

      return  ({
        ...prev,
        [target]: [...(prev?.[target] || []), curr],
      })
    },
    {},
  );
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { data } = await findAll()

  const result = groupBy('total', data)

  return res.json(result)
}