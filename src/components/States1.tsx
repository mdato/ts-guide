// tsrpfc
import { FC, useState } from "react";
// React.ChangeEvent<HTMLInputElement> se obtiene al pasar el mouse sobre la letra e del event

export const States1 = () => {
  const [pais, setPais] = useState<string | null>("");
  // const [pais, setPais] = useState<string | null>(null);
  return (
    <div>
      <input
        placeholder="insert pais..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPais(e.target.value);
        }}
      />
      <h3>{pais ? pais : "ingresar pais"}</h3>
    </div>
  );
};
