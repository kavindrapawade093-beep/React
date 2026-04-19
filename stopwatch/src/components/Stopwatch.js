import React, { useState, useEffect } from "react";

function Stopwatch() {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {

        let interval;

        if (running) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);

    }, [running]);

    return (
        <div className="card">
            <h1>Stopwatch</h1>
            <h2>{time} seconds</h2>

            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Stop</button>
            <button onClick={() => setTime(0)}>Reset</button>
        </div>
    );
}

export default Stopwatch;