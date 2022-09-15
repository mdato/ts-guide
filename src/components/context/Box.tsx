import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.colorTwo.main,
        color: theme.colorTwo.text,
        width: "300px",
        margin: "auto",
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      }}
    >
      Theme context
    </div>
  );
};
