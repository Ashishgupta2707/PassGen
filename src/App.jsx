import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  let [password, setPassword] = useState("Select options");
  let [length, setLength] = useState(8);
  let [isUpperCase, toogleUpperCase] = useState(true);
  let [isLowerCase, toogleLowerCase] = useState(true);
  let [isNumber, toogleNumber] = useState(false);
  let [isSymbols, toogleSymbols] = useState(false);
  let [isCopied, toogleCopied] = useState(false);

  const passRef = useRef(null);

  const setPasswordLength = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    if (value) {
      setLength(value);
    }
  };

  const generatePassword = useCallback(() => {
    let str = "";
    if (isLowerCase) {
      str += "abcdefghijklmnopqrstuvwxyz";
    }

    if (isUpperCase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (isNumber) {
      str += "123456789";
    }

    if (isSymbols) {
      str += "!@#$%^&*-+=[]{}`~";
    }

    let pass = "";
    if (str.length) {
      for (let i = 1; i <= length; i++) {
        let ch = Math.floor(Math.random() * (str.length + 1));
        pass += str.charAt(ch);
      }
    } else {
      pass = "Select options";
    }

    setPassword(pass);
  }, [length, isLowerCase, isUpperCase, isNumber, isSymbols, setPassword]);

  const toggleCopy = () => {
    toogleCopied(true);
    setTimeout(() => {
      toogleCopied(false);
    }, 2000);
    passRef.current.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    generatePassword();
  }, [length, isLowerCase, isUpperCase, isNumber, isSymbols, setPassword]);

  return (
    <>
      <div className="bg-slate-900 text-slate-300 flex items-center justify-center min-h-screen p-4 transition-colors duration-300">
        <div className="w-full max-w-2xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-100">
              Password Generator
            </h1>
            <p className="text-slate-400 mt-2">
              Create secure and random passwords
            </p>
          </header>

          <main className="space-y-6">
            <div className="bg-slate-800 rounded-lg p-4 flex items-center justify-between shadow-lg">
              {/* <span
                id="password-display"
                className="font-mono text-xl md:text-2xl text-slate-100 break-all pr-4"
                ref={passRef}
              >
                {password}
              </span> */}
              <input
                ref={passRef}
                value={password}
                readOnly
                className="font-mono text-xl md:text-2xl text-slate-100 bg-transparent outline-none"
              />
              <button
                id="copy-button"
                disabled={isCopied}
                onClick={toggleCopy}
                className={`p-2 rounded-md bg-slate-700 hover:bg-slate-500 active:scale-95 transition-transform flex-shrink-0 ${isCopied ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                {isCopied ? (
                  <span
                    id="copy-message"
                    className=" text-emerald-400 text-sm font-semibold"
                  >
                    Copied!
                  </span>
                ) : (
                  <span>copy</span>
                )}
              </button>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label
                        htmlFor="length"
                        className="font-semibold text-slate-100"
                      >
                        Character Length
                      </label>
                      <span
                        id="length-value"
                        className="text-2xl font-bold text-emerald-400"
                      >
                        {length}
                      </span>
                    </div>
                    <input
                      type="range"
                      id="length"
                      min="4"
                      max="50"
                      value={length}
                      onChange={(e) => {
                        setPasswordLength(e);
                      }}
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="uppercase"
                        checked={isUpperCase}
                        onChange={() => toogleUpperCase((prev) => !prev)}
                        className="custom-checkbox h-5 w-5 rounded bg-slate-700 border-slate-600 appearance-none transition-colors"
                      />
                      <label htmlFor="uppercase" className="text-slate-200">
                        Uppercase
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="lowercase"
                        checked={isLowerCase}
                        onChange={() => toogleLowerCase((prev) => !prev)}
                        className="custom-checkbox h-5 w-5 rounded bg-slate-700 border-slate-600 appearance-none transition-colors"
                      />
                      <label htmlFor="lowercase" className="text-slate-200">
                        Lowercase
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="numbers"
                        checked={isNumber}
                        onChange={() => toogleNumber((prev) => !prev)}
                        className="custom-checkbox h-5 w-5 rounded bg-slate-700 border-slate-600 appearance-none transition-colors"
                      />
                      <label htmlFor="numbers" className="text-slate-200">
                        Numbers
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="symbols"
                        checked={isSymbols}
                        onChange={() => toogleSymbols((prev) => !prev)}
                        className="custom-checkbox h-5 w-5 rounded bg-slate-700 border-slate-600 appearance-none transition-colors"
                      />
                      <label htmlFor="symbols" className="text-slate-200">
                        Symbols
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between mt-6 md:mt-0">
                  <div className="bg-slate-900 rounded-md p-4 flex items-center justify-between w-full">
                    <span className="text-slate-400 font-medium">STRENGTH</span>
                    <div className="flex items-center space-x-2">
                      <span
                        id="strength-text"
                        className="text-lg font-bold text-slate-100"
                      >
                        MEDIUM
                      </span>
                      <div id="strength-bars" className="flex space-x-1">
                        <div className="h-6 w-2 rounded-sm bg-slate-700"></div>
                        <div className="h-6 w-2 rounded-sm bg-slate-700"></div>
                        <div className="h-6 w-2 rounded-sm bg-slate-700"></div>
                        <div className="h-6 w-2 rounded-sm bg-slate-700"></div>
                      </div>
                    </div>
                  </div>

                  <button
                    id="generate-button"
                    onClick={generatePassword}
                    className="w-full bg-emerald-500 text-slate-900 font-bold py-3 rounded-lg hover:bg-emerald-400 active:scale-95 transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 mt-6 md:mt-4"
                  >
                    GENERATE PASSWORD
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
