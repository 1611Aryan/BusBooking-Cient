import { createContext, useContext, useState } from "react"

const BusContext = createContext()
export const useBus = () => useContext(BusContext)

const BusProvider = props => {
  const [bus, setBus] = useState()
  return (
    <BusContext.Provider value={{ bus, setBus }}>
      {props.children}
    </BusContext.Provider>
  )
}

export default BusProvider
