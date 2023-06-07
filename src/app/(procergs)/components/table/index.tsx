import { Select } from '@/components'
import styles from './styles.module.css'
import { TableProps } from './types'

export function Table (props: TableProps) {
  const { data } = props

  const grades = Object.keys(data)

  return (
    <div className={styles.table}>
      <strong className={styles.table__title}>Resultados</strong>
      <Select
        placeholder="resultados por nota"
        options={grades.map(value => ({
          label: value,
          value
        }))}
      />
    </div>
  )
}