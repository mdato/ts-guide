// tsrpfc
import { FC } from "react";

interface Props {
  ciudad: string;
  codPais: number;
}

export const Person3: FC<Props> = ({ ciudad, codPais }) => {
  return (
    <div>
      <h4>{ciudad}</h4>
      <h4>{codPais}</h4>
    </div>
  );
};
