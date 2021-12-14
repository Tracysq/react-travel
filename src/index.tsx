import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n/config";
import store from "./redux/store";
import { Provider } from "react-redux";
import axios from 'axios'

axios.defaults.headers.common['x-icode'] = 'BBB18956425E4624'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
