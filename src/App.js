import React from "react";
import ReactDOM from "react-dom/client";
import PostDetails from "./components/PostDetails/PostDetailsComponent";

const Main = () => {
  return (
    <div className="main-app">
      <PostDetails />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
