import { SelectProps as RadixSelectProps } from '@radix-ui/react-select'

interface Option {
  label: string
  value: string
}

export interface SelectProps extends Pick<RadixSelectProps,
  | 'value'
  | 'onValueChange'
> {
  options: Option[]
  placeholder: string
}