import AdminLogin from "./Pages/AdminLogin"
import Dashboard from "./Pages/Dashboard"
import Home from "./Pages/Home"
import Seats from "./Pages/Seats"

const router = (user, bus) => [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: user ? <Dashboard /> : <Home />,
  },
  {
    path: "dashboard/book",
    element: bus ? <Seats /> : user ? <Dashboard /> : <Home />,
  },
]

export default router
