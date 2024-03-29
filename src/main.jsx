import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store.js";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* store which is configure in app/store.js */}
      <PersistGate loading={null} persistor={persistor}>
        {/*  null for no loading or any other ui */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
