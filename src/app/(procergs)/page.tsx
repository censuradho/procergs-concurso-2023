import { findAll } from '@/services/api'
import { sortRules } from '@/utils/sortRules'
import { MinMax, Search, Table } from './components'
import styles from './styles.module.css'
import { Box } from '@/components'

export const metadata = {
  title: 'PROCERGS Concurso Nº 03/2023 - Ênfase em desenvolvimento Front-End',
  description: 'Reuni algumas informações sobre as notas preliminares',
}


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
        <Box marginTop={4} flexDirection="column" gap={1} alignItems="flex-start">
          <MinMax data={dataAddClassification} />
          <Table data={dataAddClassification} />
        </Box>
      </div>
    </main>
  )
}