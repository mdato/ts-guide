// tsrpfc
// import * as React from "react"; // si no usamos Vite

interface Props {
    direccion: string;
    telefono: number;
  }
  
  export const Person4 = ({ direccion, telefono }: Props) => {
    return (
      <div>
        <h3>{direccion}</h3>
        <h3>{telefono}</h3>
      </div>
    );
  };
  