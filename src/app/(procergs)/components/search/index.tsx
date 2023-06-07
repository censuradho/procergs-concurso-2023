'use client'

import { Icon } from '@/components'
import { ChangeEvent } from 'react'
import styles from './styles.module.css'
import { SearchProps } from './types'


export function Search (props: SearchProps) {
  const { onValueChange, value } = props

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    onValueChange?.(value)
  }
  return (
    <div className={styles.search__root}>
      <div className={styles.search__icon}>
        <Icon name="search" color="ancesst2" />
      </div>
      <input 
        placeholder="Pesquisar"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}