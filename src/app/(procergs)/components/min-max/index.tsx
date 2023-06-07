import { Box, Typography } from '@/components'
import styles from './styles.module.css'

import { MinMaxProps } from './types'
import { classGroupe } from '@/utils/classNames'
import { appSettings } from '@/config/app'

export function MinMax (props: MinMaxProps) {
  const { data } = props
  
  const approved = data.filter(value => 
    Number(value.legislacao) >= appSettings.rules.grade.legislacao
    && Number(value.portugues) >= appSettings.rules.grade.portugues
    && Number(value.conhecimentos_especificos) >= appSettings.rules.grade.especificas  
  )

  const disapproved = data.filter(value => 
    Number(value.legislacao) < appSettings.rules.grade.legislacao
    || Number(value.portugues) < appSettings.rules.grade.portugues
    || Number(value.conhecimentos_especificos) < appSettings.rules.grade.especificas  
  )

  const approvedAmount = approved.length
  const disapprovedAmount = disapproved.length
  
  const passRate = ((approvedAmount / disapprovedAmount) * 100).toFixed(2)

  return (
    <section className={styles.min_max__root}>
      <Box gap={1} justifyContent="space-evenly">
        <div className={styles.min_max__item}>
          <Typography
            as="strong"
            fontWeight={500} 
            size="xsm" 
            color="background"
          >Aprovados</Typography>
          <Typography
            as="span"
            fontWeight={700} 
            size="md" 
            color="background"
          >{approvedAmount}</Typography>
        </div>
        <div className={classGroupe(styles.min_max__item, styles['min_max__item--secondary'])}>
          <Typography
            as="strong"
            fontWeight={500} 
            size="xsm" 
            color="background"
          >Reprovados</Typography>
          <Typography
            as="span"
            fontWeight={700} 
            size="md" 
            color="background"
          >{disapprovedAmount}</Typography>
        </div>
      </Box>

      <Box flexDirection="column" gap={0.5}>
        <Typography as="strong" color="background" size="xsm">Taxa de aprovação</Typography>
        <span className={styles.min_max__percent}>{`${passRate}%`}</span>
      </Box>
    </section>
  )
}