import styles from './styles.module.css'

import { MinMaxProps } from './types'

export function MinMax (props: MinMaxProps) {
  const { data } = props
  
  return (
    <section className={styles.min_max__root}>
      <h2 className={styles.min_max__title}>Pessoas que atingiram</h2>
      <h3>Min</h3>
    </section>
  )
}