'use client'
import * as RadixSelect from '@radix-ui/react-select';
import { SelectProps } from './types';

import styles from './styles.module.css'

export function Select (props: SelectProps) {
  const {
    options,
    placeholder
  } = props

  const renderOptions = options.map((option, index) => (
    <RadixSelect.Item 
      className={styles.select__item} 
      value={option.value} 
      key={index}
    >
      <RadixSelect.ItemText>
        {option.label}
      </RadixSelect.ItemText>
    </RadixSelect.Item>
  ))

  console.log(renderOptions)
  return (
    <div className={styles.select__root}>
      <RadixSelect.Root>
        <RadixSelect.Trigger 
          placeholder={placeholder}
          className={styles.select__trigger}
        >
          <RadixSelect.Value />
          <RadixSelect.Icon>
         
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content>
            <RadixSelect.Viewport>
              {renderOptions}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  )
}