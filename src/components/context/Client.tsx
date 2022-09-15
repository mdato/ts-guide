import { useContext } from "react";
import { ClientContext } from "./ClientContext";

export const Client = () => {
  const clientContext = useContext(ClientContext);
  const handleLogin = () => {
    clientContext.setClient({
      alias: "Bodie",
      city: "Buenos Aires",
    });
  };
  const handleLogout = () => {
    clientContext.setClient(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <div>
        {clientContext.client?.alias
          ? "​🙋​ client alias is " + clientContext.client?.alias
          : "client is logged out"}
      </div>
      <div>
        {clientContext.client?.alias
          ? "client city is " + clientContext.client?.city
          : "👨​"}
      </div>
    </div>
  );
};
