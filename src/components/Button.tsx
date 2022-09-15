type ButtonProps = {
  handleClick: () => void; // handle click en lo que pasamos como props
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>Click-1</button>;
};

export default Button;
