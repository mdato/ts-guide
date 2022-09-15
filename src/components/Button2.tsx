type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void; // handle click en lo que pasamos como props
};

const Button2 = (props: ButtonProps) => {
  return <button onClick={(e) => props.handleClick(e, 1)}>Click-2</button>;
};

export default Button2;
