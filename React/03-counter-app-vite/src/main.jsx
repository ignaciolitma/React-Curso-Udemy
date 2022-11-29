import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { HelloWoldApp } from './HelloWoldApp';
import "./styles.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <HelloWoldApp /> */}
        {/* <FirstApp title="Hola, Soy Goku" /> */}
        <CounterApp value={100}/>
    </React.StrictMode>
);