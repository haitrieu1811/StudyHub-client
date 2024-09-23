import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PATH from '@/constants/path'
import LearningLayout from '@/layouts/learning-layout'
import MainLayout from '@/layouts/main-layout'
import CourseDetail from '@/pages/course-detail'
import Home from '@/pages/home'
import Learning from '@/pages/learning'
import Login from '@/pages/login'
import { ThemeProvider } from '@/providers/theme.provider'

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
  },
  {
    path: PATH.COURSE_DETAIL_WITHOUT_ID,
    element: (
      <MainLayout>
        <CourseDetail />
      </MainLayout>
    )
  },
  {
    path: PATH.LEARNING_WITHOUT_COURSE_ID,
    element: (
      <LearningLayout>
        <Learning />
      </LearningLayout>
    )
  }
])

export default function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
