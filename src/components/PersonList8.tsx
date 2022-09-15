import {suNombreCompleto} from './Person8.Type'

type PersonListProps = {
    nombres: suNombreCompleto[]; // fundamental poner los corchetes para que funcione el map
  };
  
  const PersonList8 = (props: PersonListProps) => {
    return (
      <div>
        {props.nombres.map((nombre) => {
          return (
            <h4 key={nombre.apellido}>
              {nombre.nombre} {nombre.apellido}
            </h4>
          );
        })}
      </div>
    );
  };
  
  export default PersonList8;
  