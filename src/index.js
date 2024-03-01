// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
import i18n from './i18n';
import { store } from './store'; // Import the store you created

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provide the Redux store to the app */}
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
