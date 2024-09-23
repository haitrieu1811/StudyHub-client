import { Timer, Video } from 'lucide-react'
import { Link } from 'react-router-dom'

import PATH from '@/constants/path'

export default function CourseItem() {
  return (
    <div className='rounded-xl border border-b-[2px] hover:border-b-primary transition-colors p-4 space-y-4'>
      <Link to={PATH.COURSE_DETAIL('1')}>
        <img
          src='https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'
          alt=''
          className='rounded-xl aspect-video object-cover'
        />
      </Link>

      <div className='space-y-3'>
        <Link to={PATH.LEARNING('1')} className='font-semibold line-clamp-2'>
          HTML CSS Pro
        </Link>
        <div className='flex items-center space-x-3 text-sm'>
          <div className='line-through text-muted-foreground'>2.500.000đ</div>
          <div className='font-semibold'>1.299.000đ</div>
        </div>
        <div className='flex items-center flex-wrap space-x-4 text-xs'>
          <div className='flex items-center space-x-2'>
            <div className='w-6 flex justify-center items-center aspect-square rounded-full bg-blue-100'>
              <Video className='w-4 h-4 stroke-blue-600' />
            </div>
            <span>590 video</span>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-6 flex justify-center items-center aspect-square rounded-full bg-blue-100'>
              <Timer className='w-4 h-4 stroke-blue-600' />
            </div>
            <span>16 giờ 44 phút</span>
          </div>
        </div>
      </div>
    </div>
  )
}
