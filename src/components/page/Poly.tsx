import React from 'react'

type PolyOwnProps<E extends React.ElementType> = {
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary'
  children: React.ReactNode
  as?: E
}

type PolyProps<E extends React.ElementType> = PolyOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof PolyOwnProps<E>>

export const Poly = <E extends React.ElementType = 'div'>({
  size,
  color,
  children,
  as
}: PolyProps<E>) => {
  const Component = as || 'div'
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  )
}
