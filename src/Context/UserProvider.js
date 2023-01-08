import React, { createContext, useContext, useEffect, useState } from "react"
export const UserContext = createContext()

const UserProvider = props => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("User")))

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify(user))
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)

export default UserProvider
