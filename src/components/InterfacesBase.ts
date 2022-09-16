export interface User {
    nombre?: string; // ? quiere decir que es opcional
    edad?: number;
    //   obtengoNombre: (nombre: string) => string;
  }

  export interface Calle {
    direccion: string;
    telefono: number;
  }

  export interface City {
    ciudad: string;
    codPais: number;
  }