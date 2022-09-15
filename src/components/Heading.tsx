type HeadingProps = {
    children: string,  // "children es el valor q pasamos como props"
}
const Heading = (props:HeadingProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Heading