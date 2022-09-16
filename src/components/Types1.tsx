// tsrpfc
// import * as React from "react"; // si no usamos Vite
import { FC } from "react";

// "enum" define un set de diferentes opciones, "interface" define objetos, "type" define solo los valores que le pongamos
export enum Bandera {
  rojaBlanca = "River.....es rojo y blanco",
  azulAmarilla = "Boquita es azul y amarillo",
  celesteBlanca = "la Acadeeeee, es celeste y blanca",
}

interface Props {
  equipo: string; // ? quiere decir que es opcional
  titulosObtenidos: number;
  bandera: Bandera;
}

export const Types1: FC<Props> = ({ equipo, titulosObtenidos, bandera }) => {
  type NombreType = "Bodie" | "Lemmy";
  const nombreDelTipo: NombreType = "Lemmy";

  return (
    <div>
      <h4>Campeon: {equipo}</h4>
      <h4>Titulos Obtenidos: {titulosObtenidos}</h4>
      <h4>Trapos: {bandera}</h4>
      <h4>Hincha (no lo paso como props): {nombreDelTipo}</h4>
    </div>
  );
};
