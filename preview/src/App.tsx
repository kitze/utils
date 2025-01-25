import { useState } from "react";
import * as utils from "@kitze/utils";

function App() {
  const [count, setCount] = useState(0);
  const isCheckedUrl = utils.url.isURL("https://www.google.com");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>@kitze/utils Preview</h1>

      {isCheckedUrl ? "true" : "false"}

      <div style={{ marginTop: "2rem" }}>
        <h2>Available Utilities:</h2>
        <pre
          style={{
            background: "#f5f5f5",
            padding: "1rem",
            borderRadius: "4px",
            overflow: "auto",
            maxHeight: "400px",
          }}
        >
          {JSON.stringify(utils, null, 2)}
        </pre>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            padding: "0.5rem 1rem",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Count is: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
