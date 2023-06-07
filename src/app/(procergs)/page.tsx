'use client'

import { findGroupedByTotal } from "@/services/api"
import { GroupedByTotal } from "@/services/api/types"
import { useEffect, useState } from "react"

import styles from './styles.module.css'

export default function Page () {
  const [groupedByTotal, setGroupedByTotal] = useState<GroupedByTotal>({})

  const getResults = async () => {
    const { data } = await findGroupedByTotal()

    setGroupedByTotal(data)
  }

  useEffect(() => {
    getResults()
  }, [])

  return (
    <main className={styles.home}>
      <div className="container">
        <h1>PROCERGS Concurso 2023</h1>
        <strong>Analista em Computação / ênfase em Desenvolvimento Front-End</strong>
      </div>
    </main>
  )
}