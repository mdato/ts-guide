// no permite escribir texto en el input
type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = (props: InputProps) => {
  return (
    <div>
      <h5>not allow insert text, but view message from console</h5>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  );
};

export default Input;
