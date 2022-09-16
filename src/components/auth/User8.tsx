export type UserProps = {
  alias: string;
  country: string;
};

export const User8 = ({ alias, country }: UserProps) => {
  return (
    <div>
      🔐​ My name is
      <span style={{ fontWeight: "bolder", fontSize: "18px" }}>{alias}</span>
      and I am from ​🇩🇰​🌍
      <span style={{ color: "#f8f8f8", backgroundColor: "red" }}>
        {country}
      </span>
    </div>
  );
};
