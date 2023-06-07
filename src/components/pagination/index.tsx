import { PaginationProps } from "./types";

import styles from './styles.module.css'
import { Box } from "../box";

export function Pagination (props: PaginationProps) {
  const {
    currentPage,
    totalPages,
    onPageChange
  } = props
  const forward2x = ">>"
  const forward = ">"
  const backward2x = "<<"
  const backward = "<"

  const isBiggerThanMin = currentPage > 1
  const isLessThanMax = currentPage < totalPages


  const handlePageChange = (value: number) => {
    onPageChange(value + Number(currentPage))
  }

  return (
    <div className={styles.pagination__root}>
      <span>{`${currentPage} de ${totalPages}`}</span>
      <Box gap={0.3}>
        <button 
          className={styles.pagination__bullet} 
          disabled={!isBiggerThanMin} 
          onClick={() => handlePageChange(-2)}>{backward2x}</button>
        <button
          className={styles.pagination__bullet} 
          disabled={!isBiggerThanMin} 
          onClick={() => handlePageChange(-1)}
        >{backward}</button>
        <input 
          className={styles.pagination__input}
        />
        <button 
          className={styles.pagination__bullet} 
          disabled={!isLessThanMax} 
          onClick={() => handlePageChange(1)}
        >{forward}</button>
        <button 
          className={styles.pagination__bullet} 
          disabled={!isLessThanMax} 
          onClick={() => handlePageChange(2)}
        >{forward2x}</button>
      </Box>
    </div>
  )
}