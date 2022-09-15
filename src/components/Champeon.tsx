// cual es type de un componente de react ?
type ChampeonProps = {
    children: React.ReactNode  // "children" es valor que toma props y  usamos "React.ReactNode" como type
}
const Champeon = (props:ChampeonProps) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Champeon