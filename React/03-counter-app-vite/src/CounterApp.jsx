import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) =>
{
    const [counter, setCounter] = useState(value);
    const handleAdd = () => 
    {
        //setCounter(counter + 1); otra forma
        setCounter(c => c + 1);
    }

    const handleSubstract = () => 
    {
        //setCounter(counter + 1); otra forma
        setCounter(c => c - 1);
    }

    const handleReset = () =>
    {
        setCounter(c => value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <div>

                <button onClick={handleAdd}>
                    +1
                </button>
                <button onClick={handleSubstract}> 
                    -1
                </button>
                <button onClick={handleReset}>
                    reset
                </button>
            </div>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

