import { PropsWithChildren } from "react";
import { TypographyProps } from "./types";
import { theme } from "@/config/theme";

export function Typography<T extends React.ElementType = 'span'> (props: PropsWithChildren<TypographyProps<T>>) {
  const {
    as,
    children,
    color = 'ancesst1',
    size = 'xsm',
    fontWeight = 500
  } = props

  const Component = as || 'span'

  return (
    <Component
      style={{
        color: theme.colors[color],
        fontSize: theme.fontSizes[size],
        fontWeight
      }}
    >{children}</Component>
  )
}