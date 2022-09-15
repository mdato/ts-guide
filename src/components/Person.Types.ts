// para usar este tipo en otros componentes debemos exportalo

export type PersonProps = {
    nombreCompleto: {   // "nombreCompleto" es lo que pasamos como props a la App.tsx
        nombre: string,
        apellido: string,
    }
}