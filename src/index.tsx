import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Login } from "./pages";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
