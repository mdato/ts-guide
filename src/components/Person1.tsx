// tsrpfc
// import * as React from "react"; // si no usamos Vite

interface Props {
  nombre?: string; // ? quiere decir que es opcional
  edad?: number;
  //   obtengoNombre: (nombre: string) => string;
}

export const Person1 = (props: Props) => {
  return (
    <div>
      <h3>{props.nombre}</h3>
      <h3>{props.edad}</h3>
    </div>
  );
};
