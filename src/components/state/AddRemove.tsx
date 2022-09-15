import { useReducer } from "react";

type AddRemoveState = {
  count: number;
};

// discriminated unions
type UpdateAction = {
  type: "add" | "remove";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type AddRemoveAction = UpdateAction | ResetAction;
// fin discriminated unions

const initialState = { count: 0 };

// "state" is an object con una propiedad "count" cuyo valor es un numero
// "action" is un objeto con 2 propiedades "type" que es un string y "payload" que es un numero
function reducer(state: AddRemoveState, action: AddRemoveAction) {
  switch (action.type) {
    case "add":
      return { count: state.count + action.payload };
    case "remove":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const AddRemove = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // const dispatch: React.Dispatch<AddRemoveAction>
  return (
    <>
      <h5>Value: {state.count}</h5>
      <button onClick={() => dispatch({ type: "add", payload: 1 })}>
        Add 1
      </button>
      <button onClick={() => dispatch({ type: "remove", payload: 1 })}>
        Remove 1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
