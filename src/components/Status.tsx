type StatusProps = {
  // usamos union of literal string, para que solo acepte estos valores
  estado: "loading" | "ok" | "error"; // "estado" es lo que pasamos como props a la App.tsx
};
const Status = (props: StatusProps) => {
  let mensaje;
  if (props.estado === "loading") {
    mensaje = "Cargando";
  } else if (props.estado === "ok") {
    mensaje = "Carga Ok";
  } else if (props.estado === "error") {
    mensaje = "Hubo un Error";
  }
  return (
    <div>
      <h3>Estado: {mensaje}</h3>
    </div>
  );
};

export default Status;
