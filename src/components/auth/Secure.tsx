import { LogIn } from "./LogIn";
import { UserProps } from "./User8";

type SecureProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<UserProps>;
};

export const Secure = ({ isLoggedIn, Component }: SecureProps) => {
  if (isLoggedIn) {
    return <Component alias="Bodie" country="Denmark" />;
  } else {
    return <LogIn />;
  }
};
