// tsrpfc
// import * as React from "react"; // si no usamos Vite
import { FC } from "react";

// "enum" define un set de diferentes opciones e "interface" define objetos
export enum Bandera {
  rojaBlanca = "gallinas.....Son rojo y blanco",
  azulAmarilla = "Boquita es azul y amarillo",
  celesteBlanca = "la acadeeeee, es celeste y blanca",
}

interface Props {
  equipo: string; // ? quiere decir que es opcional
  titulosObtenidos: number;
  bandera: Bandera;
}

export const Enums2: FC<Props> = ({ equipo, titulosObtenidos, bandera }) => {
  return (
    <div>
      <h5>Campeon: {equipo}</h5>
      <h5>Titulos Obtenidos: {titulosObtenidos}</h5>
      <h5>Trapos: {bandera}</h5>
    </div>
  );
};
