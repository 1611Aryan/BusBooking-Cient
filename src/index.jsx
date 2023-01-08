import { Global } from "@emotion/react"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import BusProvider from "./Context/BusProvider"
import UserProvider from "./Context/UserProvider"
import GlobalStyle from "./Global"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <UserProvider>
      <BusProvider>
        <App />
      </BusProvider>
    </UserProvider>
  </React.StrictMode>
)
