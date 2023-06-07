'use client'
import * as RadixSelect from '@radix-ui/react-select';
import { SelectProps } from './types';

import styles from './styles.module.css'
import { Icon } from '../icons';

export function Select (props: SelectProps) {
  const {
    options,
    placeholder,
    onValueChange,
    value
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

  return (
    <div className={styles.select__root}>
      <RadixSelect.Root
        value={value}
        onValueChange={onValueChange}
      >
        <RadixSelect.Trigger className={styles.select__trigger}>
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon>
            <Icon name="arrowDown" />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={styles.select__content}>
            <RadixSelect.Viewport>
              {renderOptions}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  )
}