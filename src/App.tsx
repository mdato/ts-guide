import "./App.css";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import Champeon from "./components/Champeon";
import Container from "./components/Container";
import { Box } from "./components/context/Box";
import { Client } from "./components/context/Client";
import { ClientContextProvider } from "./components/context/ClientContext";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Greet3 from "./components/Great3";
import Greet from "./components/Greet";
import Greet2 from "./components/Greet2";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Input2 from "./components/Input2";
import InputDestructuring from "./components/InputDestructuring";
import Person from "./components/Person";
import Person2 from "./components/Person2";
import PersonList from "./components/PersonList";
import PersonList8 from "./components/PersonList8";
import { AddRemove } from "./components/state/AddRemove";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { User2 } from "./components/state/User2";
import Status from "./components/Status";

function App() {
  const personName = {
    nombre: "Papa",
    apellido: "Lemmy",
  };

  // nameList es un array de 3 objetos y cada objeto contiene nombre y apellido como propiedades
  const nameList = [
    {
      nombre: "Lemmy",
      apellido: "Kilmister",
    },
    {
      nombre: "Ozzy",
      apellido: "Osbourne",
    },
    {
      nombre: "Rob",
      apellido: "Halford",
    },
  ];

  return (
    <div className="App">
      <p>---</p>
      <ClientContextProvider>
        <Client />
      </ClientContextProvider>
      <p>---</p>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <p>---</p>
      <User2 />
      <p>---</p>
      <AddRemove />
      <p>---</p>
      <User />
      <p>---</p>
      <LoggedIn />
      <p>---</p>
      <PersonList8 nombres={nameList} />
      <p>---</p>
      <Person2 nombreCompleto={personName} />
      <p>---</p>
      <InputDestructuring value="" handleChange={(e) => console.log(e)} />
      <p>---</p>
      <Container
        estilos={{
          border: "1px solid black",
          padding: "1rem",
          margin: "auto",
          width: "200px",
          marginBottom: "10px",
          marginTop: "10px",
          backgroundColor: "#73a373",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      />
      <p>---</p>
      <Input2 value="" handleChange={(e) => console.log(e)} />
      <p>---</p>
      <Button2
        handleClick={(e, id) => {
          console.log("Hicimos Click", e, id);
        }}
      />
      <p>---</p>
      <Input value="" handleChange={(e) => console.log(e)} />
      <p>---</p>
      <Button
        handleClick={() => {
          console.log("Hicimos Click");
        }}
      />
      <p>---</p>
      <Greet3 nombre="Bodie" estaLogueado={true} />
      {/* devuelve el valor por defecto de numMensajes. aqui no pasamos el campo opcional de numMensajes */}
      <p>---</p>
      <Greet2 nombre="Bodie" estaLogueado={true} />
      {/* devuelve undefined en numMensajes. aqui no pasamos el campo opcional de numMensajes */}
      <p>---</p>
      <Champeon>
        <Heading>El campeon es Boca Juniors !</Heading>
      </Champeon>
      <p>---</p>
      <Heading children="ejemplo con children" />
      <p>---</p>
      <Heading>otro ejemplo con children</Heading>
      <p>---</p>
      <Greet nombre="Bodie" numMensajes={20} estaLogueado={true} />
      <p>---</p>
      <Person nombreCompleto={personName} />
      <p>---</p>
      <PersonList nombres={nameList} />
      <p>---</p>
      <Status estado="error" />
    </div>
  );
}

export default App;
