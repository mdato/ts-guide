// tsrpfc
import { ChangeEvent, useState } from "react";
// ChangeEvent<HTMLInputElement>
// se obtiene al pasar el mouse sobre la letra e del event
// en este caso NO se coloca la palabra React primero

export const States2 = () => {
  const [articulo, setArticulo] = useState<string | null>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArticulo(e.target.value);
  };
  return (
    <div>
      <input placeholder="insert articulo..." onChange={handleChange} />
      <h3>{articulo ? articulo : "ingresar articulo"}</h3>
    </div>
  );
};
