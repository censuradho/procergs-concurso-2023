import { appSettings } from '@/config/app'
import axios from 'axios'
import { Data, GroupedByTotal } from './types'

export const api = axios.create({
  baseURL: `${appSettings.siteUrl}/api`
})

export async function findAll () {
  return await api.get<Data>('/find-all')
}

export async function findGroupedByTotal () {
  return await api.get<GroupedByTotal>('/grouped-by-total')
}