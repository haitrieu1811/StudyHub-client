import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PATH from '@/constants/path'
import MainLayout from '@/layouts/main-layout'
import Home from '@/pages/home'
import Login from '@/pages/login'

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    )
  },
  {
    path: PATH.LOGIN,
    element: <Login />
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
