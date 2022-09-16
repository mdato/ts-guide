type CustomButtonProps = {
  variant: 'alert' | 'danger'
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({ variant, children, ...rest }: CustomButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  )
}
