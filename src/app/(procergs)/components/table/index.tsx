'use client'

import { Box, Icon } from '@/components'
import styles from './styles.module.css'
import { TableProps } from './types'


const headers = [
  {
    label: 'Classificação',
    key: 'classification'
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

export function Table (props: TableProps) {
  const { data } = props

  const renderRows = data.map((value, index) => (
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
        <Box>
          <Icon name="arrowDropUpFill" />
          <Icon name="arrowDropDownFill" />
        </Box>
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
    </div>
  )
}