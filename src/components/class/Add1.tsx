import { Component } from "react";

type Add1Props = {
  message: string;
};
type Add1State = {
  count: number;
};

//si el componente no usa props colocamos un objeto vacio
// export class Add1 extends Component<{}, Add1State> {
//si el componente no usa state, solo quitamos el state type
// export class Add1 extends Component<Add1Props> {
export class Add1 extends Component<Add1Props, Add1State> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <h5>Counter using Class Component</h5>
        <button onClick={this.handleClick}>Add One</button>
        <p>
          {this.props.message} {this.state.count}
        </p>
      </div>
    );
  }
}
