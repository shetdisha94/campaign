import React from "react";
import ReactDOM from "react-dom/client";
import Feed from "./components/feed/feed";

const Main = () => {
  return <Feed />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
