import { useState } from "react";
import A from "./components/A";
import B from "./components/B";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <A count={count} increase={increase} />
      <B setCount={setCount} />
    </div>
  );
};

export default App;
