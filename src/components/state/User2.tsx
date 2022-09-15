import { useState } from "react";

type AuthUser = {
  alias: string;
  email: string;
};

export const User2 = () => {
  const [user, setUser] = useState<AuthUser>({}as AuthUser); // inicializamos user con un empty object as "AuthUser"
  const handleLogin = () => {
    setUser({
      alias: "titocapo",
      email: "titocapo@frezzemail.com",
    });
  };
  const handleLogout = () => {
    setUser({}as AuthUser);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        {user.alias
          ? "​🙋​ User2 alias is " + user.alias
          : "User2 is logged out"}
      </div>
      <div>{user.alias ? "User2 email is " + user.email : "👨​"}</div>
    </div>
  );
};
