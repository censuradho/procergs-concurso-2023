import json from 'public/nota.json'

export type Data = typeof json

export type GroupedByTotal = Record<string, Data>
