type ContainerProps = {
  estilos: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.estilos}>Container - aqui va el texto</div>;
};

export default Container;
