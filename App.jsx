import React, { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const pass_gen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "~@#!#$%^&*()+_{}[]?><";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, number, char]);

  useEffect(() => {
    pass_gen();
  }, [length, number, char, pass_gen]);

  const handleCopy = () => {
    alert("Password copied to clipboard!");
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-5 text-orange-600 bg-gray-800">
        <h1 className="text-white text-center p-6">Pass_Generator</h1>

        <div className="flex shadow rounded-xl overflow-hidden mb-4 text-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button onClick={handleCopy}>Copy_Text</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>

          <div className="flex items-cneter gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Number:{number.toString()}</label>
          </div>

          <div className="flex items-cneter gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label>Character:{char.toString()}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
