import * as React from "react";
import { AppContext } from '../../App'

// const AppContext = React.createContext({});
// const { useContext } = require("react")
export const Navbar = () => {
  const { userName } = React.useContext(AppContext)
  return (
    <div>
      <h1>NavBar</h1>
      {userName}
    </div>
  )
}