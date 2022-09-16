import { useContext } from "react";
import { ContextBase } from "./ContextBase";

export const ContextCaja = () => {
  const contextTema = useContext(ContextBase);
  return (
    <div
      style={{
        backgroundColor: contextTema.color1.base,
        color: contextTema.color1.texto,
        width: contextTema.color1.ancho,
        margin: contextTema.color1.margen,
        marginBottom: contextTema.color1.margenAbajo,
      }}
    >
      Como Usar useContext
    </div>
  );
};
