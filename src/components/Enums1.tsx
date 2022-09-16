// tsrpfc
// import * as React from "react"; // si no usamos Vite

// "enum" define un set de diferentes opciones e "interface" define objetos
  enum ColorFavorito {
    Rojo = "tu color favorito es rojo, color de la pasion",
    Verde = "tu color favorito es verde, por que te gusta el campo",
    Rosa = "tu color favorito es rosa, x la pantera"
  }
  
  export const Enums1 = () => {
    return (
      <div>
        {ColorFavorito.Verde} 
      </div>
    );
  };