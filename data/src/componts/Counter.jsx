import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times increase</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>

   <p>You clicked {count} times  Decrease</p>
       <button onClick={() => setCount(count - 1)}>
        Click Me
      </button>
 <p>You clicked times reset</p>
       <button onClick={() => setCount(0)}>
        Click Me
      </button>
    </div>
  );
}

export default Counter;