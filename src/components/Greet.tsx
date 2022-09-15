type SalutiProps = {
  nombre: string;    // "nombre" es lo que pasamos como props a la App.tsx
  numMensajes: number;   // "numMensajes" es lo que pasamos como props a la App.tsx
  estaLogueado: boolean;  // "estaLogueado" es lo que pasamos como props a la App.tsx
};

const Greet = (props: SalutiProps) => {
  return (
    <div>
      <h3>
        {props.estaLogueado
          ? `welcome ${props.nombre} Capo, tenes ${props.numMensajes} mensajes`
          : `no estas logueado`}
      </h3>
    </div>
  );
};

export default Greet;
