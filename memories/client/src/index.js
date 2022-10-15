import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from 'react-router-dom';

import reducers from "./reducers";
import App from "./App";
import './index.css';

const initialState = {};
const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(thunk))
);

const theme = createTheme({
  spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
