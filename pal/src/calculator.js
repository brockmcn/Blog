import React from 'react'

export function Calculator() {
    return (
        <div id="calculator">
            <textarea></textarea>
            <div id="digit">
                <button onClick={() => { console.log("0"); }}>0</button>
                <button onClick={() => { console.log("1"); }}>1</button>
                <button onClick={() => { console.log("2"); }}>2</button>
                <button onClick={() => { console.log("3"); }}>3</button>
                <button onClick={() => { console.log("4"); }}>4</button>
                <button onClick={() => { console.log("5"); }}>5</button>
                <button onClick={() => { console.log("6"); }}>6</button>
                <button onClick={() => { console.log("7"); }}>7</button>
                <button onClick={() => { console.log("8"); }}>8</button>
                <button onClick={() => { console.log("9"); }}>9</button>
                <button onClick={() => { console.log("+"); }}>+</button>
                <button onClick={() => { console.log("="); }}>=</button>
            </div>
        </div>
    );
}