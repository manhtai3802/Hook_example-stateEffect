import { useState, useEffect, useLayoutEffect } from "react";

function Layout() {
  const [number, setNumber] = useState(0);

  useLayoutEffect(() => {
    if (number > 3) {
      setNumber(0);
    }
  }, [number]);

  const handleNUmber = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleNUmber}>Run</button>
    </div>
  );
}

export default Layout;
