import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { GroupedByTotal } from '@/services/api/types'
import { findGroupedByTotal } from '@/services/api'
import { Table } from './components'

export default async function Page  () {
  const { data } = await findGroupedByTotal()

  return (
    <main className={styles.home}>
      <div className="container">
        <h1 className={styles.home__title}>PROCERGS Concurso 2023</h1>
        <strong className={styles.home__subtitle}>Analista em Computação / ênfase em Desenvolvimento Front-End</strong>
        <Table data={data} />
      </div>
    </main>
  )
}