const PATH = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  COURSE_DETAIL: (courseId: string) => `/courses/${courseId}`,
  COURSE_DETAIL_WITHOUT_ID: '/courses/:courseId',
  LEARNING: (courseId: string) => `/learning/${courseId}`,
  LEARNING_WITHOUT_COURSE_ID: '/learning/:courseId'
} as const

export default PATH
