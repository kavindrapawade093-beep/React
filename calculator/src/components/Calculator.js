// import React, { useState, useEffect } from "react";
// // Import React and two hooks: useState (for state) and useEffect (for side effects)

// function Calculator() {
//     // State to store calculator input
//     const [input, setInput] = useState("");

//     // Function to add numbers/operators to input
//     const handleClick = (value) => {
//         setInput((prev) => prev + value);
//         // prev = previous value, we append the new button value
//     };

//     // Function to clear the entire input
//     const clearInput = () => {
//         setInput("");
//     };

//     // Function to delete last character (Backspace)
//     const backspace = () => {
//         setInput((prev) => prev.slice(0, -1));
//         // slice removes the last character from the string
//     };

//     // Function to calculate result
//     const calculate = () => {
//         try {
//             setInput(eval(input).toString());
//             // eval evaluates the math expression
//         } catch {
//             setInput("Error");
//             // If invalid expression show error
//         }
//     };

//     // Keyboard Support
//     useEffect(() => {

//         // Function to detect keyboard key press
//         const handleKey = (e) => {

//             // Allow numbers and operators
//             if (!isNaN(e.key) || ["+", "-", "*", "/", "."].includes(e.key)) {
//                 setInput((prev) => prev + e.key);
//             }

//             // Press Enter to calculate
//             if (e.key === "Enter") calculate();

//             // Press Backspace to remove last character
//             if (e.key === "Backspace") backspace();

//             // Press Escape to clear calculator
//             if (e.key === "Escape") clearInput();
//         };

//         // Add keyboard event listener
//         window.addEventListener("keydown", handleKey);

//         // Cleanup function (remove listener when component unmounts)
//         return () => window.removeEventListener("keydown", handleKey);

//     }, []);
//     // [] means this effect runs only once when component loads

//     return (
//         <div className="calculator"> {/* Main calculator container */}

//             {/* Display screen */}
//             <div className="display">{input || "0"}</div>
//             {/* If input empty show 0 */}

//             <div className="buttons"> {/* Buttons grid */}

//                 {/* Clear button */}
//                 <button className="gray" onClick={clearInput}>AC</button>

//                 {/* Backspace button */}
//                 <button className="gray" onClick={backspace}>⌫</button>

//                 {/* Division */}
//                 <button className="orange" onClick={() => handleClick("/")}>÷</button>

//                 {/* Multiplication */}
//                 <button className="orange" onClick={() => handleClick("*")}>×</button>

//                 {/* Numbers */}
//                 <button onClick={() => handleClick("7")}>7</button>
//                 <button onClick={() => handleClick("8")}>8</button>
//                 <button onClick={() => handleClick("9")}>9</button>

//                 {/* Subtraction */}
//                 <button className="orange" onClick={() => handleClick("-")}>−</button>

//                 <button onClick={() => handleClick("4")}>4</button>
//                 <button onClick={() => handleClick("5")}>5</button>
//                 <button onClick={() => handleClick("6")}>6</button>

//                 {/* Addition */}
//                 <button className="orange" onClick={() => handleClick("+")}>+</button>

//                 <button onClick={() => handleClick("1")}>1</button>
//                 <button onClick={() => handleClick("2")}>2</button>
//                 <button onClick={() => handleClick("3")}>3</button>

//                 {/* Equal button */}
//                 <button className="equal" onClick={calculate}>=</button>

//                 {/* Zero button */}
//                 <button className="zero" onClick={() => handleClick("0")}>0</button>

//                 {/* Decimal */}
//                 <button onClick={() => handleClick(".")}>.</button>

//             </div>
//         </div>
//     );
// }

// export default Calculator;
// // Export component so it can be used in App.js


import React from 'react'


function Calculator() {
    return (
        <div className="calculater"></div>
    )
}

export default Calculator