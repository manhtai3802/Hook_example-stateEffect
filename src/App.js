import { useState } from "react";
import Ref from "./Ref";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <Ref />}
    </div>
  );
}

export default App;
