// para usar este tipo en otros componentes debemos exportalo
export type suNombreCompleto = {
    nombre: string,
    apellido: string, 
}
export type PersonProps = {
    suNombre: suNombreCompleto
}