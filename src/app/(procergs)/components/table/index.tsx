'use client'
import qs from 'querystring'

import { Box, Icon, Pagination } from '@/components'
import { useRouter } from 'next/navigation'
import styles from './styles.module.css'
import { TableProps } from './types'

import { paths } from '@/consts/paths'
import { paginate } from '@/utils/paginate'
import { useSearchParams } from 'next/navigation'
import { Search } from '../search'
import { useMemo, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

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

const isLike = (value: string, compare: string) => {
  return value.indexOf(compare) > -1
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
  const _defaultSearch = searchParams?.get('_search')|| ''

  const [search, setSearch] = useState(_defaultSearch)

  const _query = {
    _page,
    _order,
  }

  const perPage = 10

  const handleChangePage = (page: number) => {
    const query= qs.stringify({
      ..._query,
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

    const query = qs.stringify({
      ..._query,
      _sort: key,
      _order: orderValue,
    })

    router.push(`${paths.home}?${query}`)
  }

  const handlePushSearchToQuery = useDebounce((value: string) => {
    const query= qs.stringify({
      ..._query,
      _page: 1,
      _search: value
    }) 
    router.push(`${paths.home}?${query}`)
  }, 300)

  const handleSearchChange = (value: string) => {
    setSearch(value)
    handlePushSearchToQuery(value)
  }

  const filtered = search ? data.filter(value => 
    isLike(value.nome.toLocaleLowerCase(), search.toLocaleLowerCase())  
  ) : null

  const _sorted = sortBy(filtered || data, (_sort as any), _order as any)

  const paginateData = useMemo(() => 
    paginate((_sorted), perPage, _page), 
  [filtered, data, _page])

  const totalResults = filtered?.length || data.length
  const totalPages = Math.ceil(( totalResults || totalResults) / perPage)

  const renderRows = paginateData.map((value, index) => (
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
      <div className={styles.table__search}>
        <strong className={styles.table__title}>Classificados por nota</strong>
        <Search 
          value={search}
          onValueChange={handleSearchChange}
        />
      </div>
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