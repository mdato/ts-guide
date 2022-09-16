import React from 'react'
import Greet3 from '../Great3'

export const CustomComponents = (props: React.ComponentProps<typeof Greet3>) => {
  return <div>
    <h3>
          {props.estaLogueado
            ? `welcome ${props.nombre}, tenes ${props.numMensajes} mensajes`
            : `no estas logueado`}
        </h3>
    </div>
}
