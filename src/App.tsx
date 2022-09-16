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
import DateTime from "./components/state/DateTime";
import { DomRef } from "./components/refs/DomRef";
import { MutableRef } from "./components/refs/MutableRef";
import { AddRemove } from "./components/state/AddRemove";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { User2 } from "./components/state/User2";
import Status from "./components/Status";
import { Add1 } from "./components/class/Add1";
import { Secure } from "./components/auth/Secure";
import { User8 } from "./components/auth/User8";
import { List } from "./components/varios/List";
import { RandomValue } from "./components/varios/RandomValue";

import { Person1 } from "./components/Person1";
import { Basico } from "./components/Basico";
import { Person4 } from "./components/Person4";
import { States1 } from "./components/States1";
import { Person3 } from "./components/Person3";
import { States2 } from "./components/States2";
import { PopUp } from "./components/template/PopUp";
import { CustomButton } from "./components/page/CustomButton";
import { CustomInput } from "./components/page/CustomInput";
import { CustomComponents } from "./components/page/CustomComponents";
import { Poly } from "./components/page/Poly";

import { FC } from "react";
import { Enums1 } from "./components/Enums1";
import { Enums2, Bandera } from "./components/Enums2";
import { Types1 } from "./components/Types1";
import Context1 from "./components/Context1";

// function App() {
const App: FC = () => {
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
      <Secure isLoggedIn={true} Component={User8} />
      <p>---</p>

      <Poly as="label" size="small" color="primary" htmlFor="someId">
        label
      </Poly>
      <Poly as="h1" size="large">
        heading
      </Poly>
      <Poly as="p" size="medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
        vel.
      </Poly>
      <Poly as="h5" size="small">
        heading
      </Poly>
      <p>---</p>
      <DomRef />
      <p>---</p>

      <Context1 />
      <p>---</p>
      <Types1 equipo="Boca Juniors" titulosObtenidos={40} bandera={Bandera.azulAmarilla} />
      <p>---</p>
      <Enums1 />
      <p>---</p>
      <Enums2 equipo="Boca Juniors" titulosObtenidos={40} bandera={Bandera.azulAmarilla} />

      <Person1 nombre="Cacho" edad={25} />
      <p>---</p>
      <Basico />

      <p>---</p>
      <CustomComponents nombre="Bodie" numMensajes={25} estaLogueado={true} />
      <p>---</p>
      <CustomInput />
      <p>---</p>
      <CustomButton variant="danger" onClick={() => console.log("clicked")}>
        Button Danger
      </CustomButton>

      <p>---</p>
      <Person4 direccion="las heras 2340" telefono={45818745} />
      <p>---</p>

      <States1 />
      <p>---</p>

      <Person3 ciudad="Buenos Aires" codPais={54} />
      <States2 />

      <p>---</p>
      <PopUp position="center" />
      <p>---</p>
      <RandomValue value={50} isPositive />
      <p>---</p>

      {/* <List
        
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      />
      <List
       
        items={["mouse", "screen", "disk"]}
        onClick={(item) => console.log(item)}
      /> */}
      <List
        items={[
          {
            id: 1,
            alias: "bodie",
            tel: "77575578",
          },
          {
            id: 2,
            alias: "lemmy",
            tel: "3276854",
          },
        ]}
        onClick={(item) => console.log(item)}
      />

      <p>---</p>

      <Add1 message="the value is: " />
      <p>---</p>
      <DateTime />
      <p>---</p>
      <MutableRef />
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
};

export default App;
