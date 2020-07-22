import * as React from "react";
import { AppContext } from '../../App'

// const AppContext = React.createContext({});
// const { useContext } = require("react")

export const Message = () => {
  const { userName } = React.useContext(AppContext)
  return (
    <div>
      <h1>Message</h1>
      {userName}
    </div>
  )
}