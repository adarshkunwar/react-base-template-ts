import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background-500 text-foreground-950 font-sans">
      <div className="flex items-center justify-center pt-8 text-4xl">
        <a href="https://vite.dev" target="_blank" className="mr-4">
          <img src={viteLogo} className="logo h-16 w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="ml-4">
          <img
            src={reactLogo}
            className="logo react h-16 w-16"
            alt="React logo"
          />
        </a>
      </div>

      <div className="text-center py-8">
        <h1 className="text-3xl font-bold mb-8 text-primary-950">
          Vite + React
        </h1>

        <div className="card bg-white/10 backdrop-blur-sm rounded-lg p-6 mx-auto max-w-md mb-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-primary-950 text-background-500 px-6 py-3 rounded-md font-medium hover:bg-primary-800 transition-colors mb-4"
          >
            count is {count}
          </button>
          <p className="text-sm text-foreground-800">
            Edit{" "}
            <code className="bg-black/20 px-2 py-1 rounded text-xs font-mono">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>

        <p className="read-the-docs text-sm text-foreground-700 max-w-md mx-auto">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
