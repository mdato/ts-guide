import { ContextBaseProvider } from "./ContextBase";
import { ContextCaja } from "./ContextCaja";

function Context1() {
  return (
    <div>
      <ContextBaseProvider>
        <ContextCaja />
      </ContextBaseProvider>
    </div>
  );
}

export default Context1;
