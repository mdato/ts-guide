// import * as React from "react"; // si no usamos Vite

interface Props {
  nombre?: string; // ? quiere decir que es opcional
  edad?: number;
}

export const Basico = (props: Props) => {
  const nombre: string = "Bodie";
  const edad: number = 15;
  const estaCasado: boolean = false;

  // const edadSegunNombre = (nombre: string): void => {  // en caso que la funcion no retorne nada
  const edadSegunNombre = (nombre: string): number => {
    if (nombre === "Bodie") {
      return 20;
    } else {
      return 50;
    }
  };

  return (
    <div className="App">
      <p>{nombre}</p>
      <p>{edad}</p>
      <p>{estaCasado ? "casado" : "soltero"}</p>
      <p>{edadSegunNombre("Bodie")}</p>
    </div>
  );
};
