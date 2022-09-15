// no permite escribir texto en el input
type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
// const Input = (props: InputProps) => {
const InputDestructuring = ({ value, handleChange }: InputProps) => {
  return (
    <div>
      {/* <input type="text" value={props.value} onChange={props.handleChange} /> */}
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default InputDestructuring;
