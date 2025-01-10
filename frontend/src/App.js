import React from "react";
import { Provider } from "react-redux";
import store from "./store/store.js";
import LoginForm from "./Components/LoginForm.js";

function App() {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
}

export default App;
