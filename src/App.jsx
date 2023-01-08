import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useBus } from "./Context/BusProvider"
import { useUser } from "./Context/UserProvider"
import router from "./Router"

const App = () => {
  const { user } = useUser()
  const { bus } = useBus()

  const routes = createBrowserRouter(router(user, bus))

  return <RouterProvider router={routes} />
}
export default App
