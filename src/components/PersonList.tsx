type PersonListProps = {
  nombres: {  // "nombres" es lo que pasamos como props a la App.tsx
    nombre: string;
    apellido: string;
  }[]; // fundamental poner los corchetes para que funcione el map
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.nombres.map((nombre) => {
        return (
          <h3 key={nombre.apellido}>
            {nombre.nombre} {nombre.apellido}
          </h3>
        );
      })}
    </div>
  );
};

export default PersonList;
