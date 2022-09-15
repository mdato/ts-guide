import { useState } from "react";

type AuthUser = {
  alias: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null); // inicializamos user con "null"
  const handleLogin = () => {
    setUser({
      alias: "capobodie",
      email: "capobodie@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        {user?.alias
          ? "​🙋​ User alias is " + user?.alias
          : "User is logged out"}
      </div>
      <div>{user?.alias ? "User email is " + user?.email : "👨​"}</div>
    </div>
  );
};
