import { CSSProperties, ReactNode } from 'react'

type ViewStyle = Pick<
  CSSProperties,
  | 'alignItems'
  | 'flex'
  | 'justifyContent'
  | 'flexDirection'
  | 'flexWrap'
  | 'backgroundColor'
>;

interface BoxProps extends ViewStyle {
  children: ReactNode;
  fullWidth?: boolean;
  maxWidth?: number
  className?: string
  gap?: number;
}

export function Box (props: BoxProps) {
  const {
    children,
    fullWidth,
    gap,
    className,
    ...otherProps
  } = props

  return (
    <div
      className={className}
      style={{
        ...otherProps,
        display: 'flex',
        width: fullWidth ? '100%' : 'auto',
        ...(gap && { gap: `${gap}rem` }),
      }}
    >
      {children}
    </div>
  )
}