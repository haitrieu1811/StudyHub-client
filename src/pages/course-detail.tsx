import React from 'react'
import { useParams } from 'react-router-dom'

export default function CourseDetail() {
  const params = useParams()

  console.log(params)

  return <div>CourseDetail</div>
}
