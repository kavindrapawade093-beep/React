import { useState } from "react";
import LoginPage from "../components/LoginPage";


function CounterPage() {
    const [number, setNumber] = useState(0);

    const increment = () => {
        if (number < 24) setNumber(number + 1);
        else alert("not included more than 24");
    };

    const decrement = () => {
        if (number > 0) setNumber(number - 1);
        else alert("not included negative number");
    };

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <p>Counter: {number}</p>

                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>

            <LoginPage />
        </>
    );
}

export default CounterPage;
