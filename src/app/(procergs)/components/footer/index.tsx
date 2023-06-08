import { Box, Typography } from '@/components'
import styles from './styles.module.css'

export function Footer () {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Box flexDirection="column" gap={2}>
          <Box flexDirection="column" gap={0.5}>
            <strong className={styles.footer__list_title}>Links oficiais</strong>
            <ul className={styles.footer__list}>
              <li>
                <a href="https://www.procergs.rs.gov.br/concurso-publico-2023" target="_blank" rel="noreferrer">Portal oficial</a>
              </li>
              <li>
                <a href="https://www.procergs.rs.gov.br/upload/arquivos/202306/05131013-consulta-as-notas-preliminares-das-provas-objetivas.pdf" target="_blank" rel="noreferrer">Documento referente a esse portal</a>
              </li>
            </ul>
          </Box>
          <Typography size="xsm" color="ancesst1"  fontWeight={400}>Última atualização 08/06/2023</Typography>
          <Box justifyContent="center">
            <a href="https://gustavoleite.vercel.app" target="_blank" rel="noreferrer">
              <Typography>Powered by Gustavo Leite</Typography>
            </a>
          </Box>
        </Box>
      </div>
    </footer>
  )
}