import React from "react";
import ReactDOM from "react-dom/client";

const Main = () => {
  console.log("Main component");
  return (
    <div>
      <h1>React App</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
