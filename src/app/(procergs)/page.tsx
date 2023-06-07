import { findAll } from '@/services/api'
import { sortRules } from '@/utils/sortRules'
import { Table } from './components'
import styles from './styles.module.css'

export default async function Page  () {
  const { data } = await findAll()
  
  const sortedByRules = sortRules(data)

  const dataAddClassification = sortedByRules.map((value, index) => ({
    ...value,
    classification: index + 1
  }))

  return (
    <main className={styles.home}>
      <div className="container">
        <h1 className={styles.home__title}>PROCERGS Concurso 2023</h1>
        <strong className={styles.home__subtitle}>Analista em Computação / ênfase em Desenvolvimento Front-End</strong>
        <Table data={dataAddClassification} />
      </div>
    </main>
  )
}