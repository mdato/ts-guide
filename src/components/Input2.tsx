import { useState } from "react";

// no permite escribir texto en el input
type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input2 = (props: InputProps) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const algunTexto = e.target.value;
    setQuery(algunTexto);
    console.log(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="ingrese texto"
      />
    </div>
  );
};

export default Input2;
