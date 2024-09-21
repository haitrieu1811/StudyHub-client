const PATH = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  COURSE_DETAIL: (id: string) => `/courses/${id}`,
  COURSE_DETAIL_WITHOUT_ID: '/courses/:courseId'
} as const

export default PATH
