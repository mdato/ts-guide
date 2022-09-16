import { useRef, useEffect } from "react";

// para DomRef debemos especificar dom element type <HTMLInputElement>
export const DomRef = () => {
  // const inputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null!); // ponemos null! si estamos seguros que nunca es un valor nulo cuando accedemos, podemos quitar el signo de pregunta de inputRef.current?.focus()
  useEffect(() => {
    // inputRef.current?.focus();
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h5>when the page load this input have the focus</h5>
      <input type="text" ref={inputRef} />
    </div>
  );
};
