import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [invalidInput, setInvalidInput] = useState(false);

  const handleCalculation = (operation) => {
    const url = `https://4qw9xng9i5.execute-api.ap-southeast-1.amazonaws.com/Alpha/${operation}`;

    if ((num1 !== "" && isNaN(num1)) || (num2 !== "" && isNaN(num2))) {
      setInvalidInput(true);
      setResult(null);
      return;
    } else {
      setInvalidInput(false);
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        num1: num1 || "0",
        num2: num2 || "0",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setResult(JSON.parse(data.body).result);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form className="w-50">
        <div className="mb-3">
          <input
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            type="text"
            placeholder="Number 1"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            type="text"
            placeholder="Number 2"
            className="form-control"
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-success mx-2"
            onClick={() => handleCalculation("add")}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-danger mx-2"
            onClick={() => handleCalculation("subtract")}
          >
            Subtract
          </button>
        </div>
        {invalidInput && <div className="mt-3 text-danger">Invalid input</div>}
        {result !== null && <div className="mt-3">Result: {result}</div>}
      </form>
    </div>
  );
}

export default App;
