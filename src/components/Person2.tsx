import { PersonProps } from "./Person.Types"

const Person2 = (props:PersonProps) => {
  return (
    <div>{props.nombreCompleto.nombre} {props.nombreCompleto.apellido}</div>
  )
}

export default Person2