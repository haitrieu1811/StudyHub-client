import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PATH from '@/constants/path'
import Home from '@/pages/home'
import Login from '@/pages/login'

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Home />
  },
  {
    path: PATH.LOGIN,
    element: <Login />
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
