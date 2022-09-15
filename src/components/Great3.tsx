type SalutiProps = {
    nombre: string;    // "nombre" es lo que pasamos como props a la App.tsx
    numMensajes?: number;   // "?" indica que es un campo opcional y no hace falta invocarlo en la App. numMensajes" es lo que pasamos como props a la App.tsx
    estaLogueado: boolean;  // "estaLogueado" es lo que pasamos como props a la App.tsx
  };
  
  const Greet3 = (props: SalutiProps) => {
    const {numMensajes = 0} = props
    return (
      <div>
        <h3>
          {props.estaLogueado
            ? `welcome ${props.nombre} Capo, tenes ${numMensajes} mensajes`
            : `no estas logueado`}
        </h3>
      </div>
    );
  };
  
  export default Greet3;
  