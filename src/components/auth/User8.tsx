export type UserProps = {
  alias: string;
  country: string;
};

export const User8 = ({ alias, country }: UserProps) => {
  return (
    <div style={{ marginTop: "10px" }}>
      🔐​ My name is
      <span style={{ fontWeight: "bolder", fontSize: "18px" }}> {alias} </span>
      and I am from ​🇩🇰​🌍
      <span
        style={{
          padding: "5px",
          fontWeight: "bolder",
          color: "#f8f8f8",
          backgroundColor: "red",
        }}
      >
        {country}
      </span>
    </div>
  );
};
