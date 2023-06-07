'use client'
import qs from 'querystring'

import { Box, Icon, Pagination } from '@/components'
import styles from './styles.module.css'
import { TableProps } from './types'
import { useRouter } from 'next/navigation';

import { useSearchParams } from 'next/navigation'
import { paths } from '@/consts/paths'
import { paginate } from '@/utils/paginate'
import { useState } from 'react'


const headers = [
  {
    label: 'Classificação',
    key: 'classification',
    sortable: true
  },
  {
    label: 'Nome',
    key: 'nome'
  },
  {
    label: 'Inscrição',
    key: 'inscricao'
  },
  {
    label: 'Total',
    key: 'total'
  },
  {
    label: 'Técnico',
    key: 'conhecimentos_especificos'
  },
  {
    label: 'Português',
    key: 'portugues'
  },
  {
    label: 'Legislação',
    key: 'legislacao'
  }
]

const Orders = {
  asc: 'asc',
  desc: 'desc',
}

const baseSort = {
  key: 'classification',
  order: Orders.asc
}


export function sortBy <T, K extends keyof T>(data: T[], key: K, order: keyof typeof Orders) {
  return data.sort((a, b) => {
    if (order === 'asc') {
      if (a[key] > b[key]) return 1
      if (a[key] < b[key]) return -1
      return 0
    }
    if (a[key] < b[key]) return 1
    if (a[key] > b[key]) return -1
    return 0
  })
}

export function Table (props: TableProps) {
  const { data } = props
  const router = useRouter()
  const searchParams   = useSearchParams()

  const _page = Number(searchParams?.get('_page') || 1);
  const _order = searchParams?.get('_order') || baseSort.order
  const _sort = searchParams?.get('_sort')|| baseSort.key

  const totalResults = data.length
  const perPage = 10
  const totalPages = Math.ceil(totalResults / perPage)

  const handleChangePage = (page: number) => {
    const query= qs.stringify({
      _order,
      _page: page
    }) 
    router.push(`${paths.home}?${query}`)
  }

  const handleSort = (key: string) => {
    const isAsc = _order === 'desc'

    const orderParsed = {
      asc: isAsc,
      desc: !isAsc
    }

    const [orderValue] = Object
      .entries(orderParsed)
      .filter(([key, value]) => value)
      .map(([key]) => key)

    const _query = qs.stringify({
      _sort: key,
      _page,
      _order: orderValue,
    })

    router.push(`${paths.home}?${_query}`)
  }

  const paginateData = paginate(data, perPage, _page)
  const sorted = sortBy(paginateData, (_sort as any), _order as any)

  const renderRows = sorted.map((value, index) => (
    <tr key={index}>
      <td>{value.classification}</td>
      <td>{value.nome}</td>
      <td>{value.inscricao}</td>
      <td>{value.total}</td>
      <td>{value.conhecimentos_especificos}</td>
      <td>{value.portugues}</td>
      <td>{value.legislacao}</td>
    </tr>
  ))

  const renderHeaders = headers.map((value, index) => (
    <td key={index}>
      <Box alignItems="center" gap={0.5}>
        <span>{value.label}</span>
        {value.sortable && (
          <Box>
            <button 
              onClick={() => handleSort(value.key)}>
              <Icon 
                name="arrowDropUpFill" 
                color={_order === Orders.asc ? 'primary' : 'foreground'} 
              />
            </button>
            <button 
              onClick={() => handleSort(value.key)}>
              <Icon 
                name="arrowDropDownFill" 
                color={_order === Orders.desc ? 'primary' : 'foreground'} 
              />
            </button>
          </Box>
        )}
      </Box>
    </td>
  ))

  return (
    <div className={styles.table__root}>
      <strong className={styles.table__title}>Classificados por nota</strong>
      <div style={{ overflow: 'auto', position: 'relative' }}>
        <table>
          <thead>
            <tr>
              {renderHeaders}
            </tr>
          </thead>
          <tbody>
            {renderRows}
          </tbody>
        </table>
      </div>
      <Box fullWidth justifyContent="flex-end">
        <Pagination 
          currentPage={_page}
          onPageChange={handleChangePage}
          totalPages={totalPages}
        />
      </Box>
    </div>
  )
}