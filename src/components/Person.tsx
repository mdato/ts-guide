type PersonProps = {
    nombreCompleto: {   // "nombreCompleto" es lo que pasamos como props a la App.tsx
        nombre: string,
        apellido: string,
    }
}

const Person = (props:PersonProps) => {
  return (
    <div>{props.nombreCompleto.nombre} {props.nombreCompleto.apellido}</div>
  )
}

export default Person