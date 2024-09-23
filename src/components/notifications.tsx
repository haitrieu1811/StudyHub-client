import Tippy from '@tippyjs/react/headless'
import { Bell, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import PATH from '@/constants/path'
import { cn } from '@/lib/utils'

export default function Notifications() {
  return (
    <TooltipProvider>
      <Tippy
        interactive
        trigger='click'
        placement='bottom-end'
        zIndex={1}
        render={() => (
          <div className='bg-background rounded-lg shadow border border-border py-2 w-[400px] space-y-2'>
            <div className='flex justify-between items-center space-x-3 px-4'>
              <h3 className='font-medium'>Thông báo</h3>
              <Button asChild variant='link' size='sm' className='p-0'>
                <Link to={PATH.HOME}>Đánh dấu tất cả đã đọc</Link>
              </Button>
            </div>
            <div className='space-y-1 overflow-y-auto max-h-[400px] px-2'>
              {Array(10)
                .fill(0)
                .map((_, index) => {
                  const isUnRead = index % 2 === 0
                  return (
                    <Link
                      key={index}
                      to={PATH.HOME}
                      className={cn('flex items-center space-x-3 px-4 py-2 rounded-md', {
                        'hover:bg-muted': !isUnRead,
                        'bg-primary/10 hover:bg-primary/20': isUnRead
                      })}
                    >
                      <img
                        src='https://fullstack.edu.vn/assets/images/f8_avatar.png'
                        alt=''
                        className='w-10 aspect-square rounded-full object-cover flex-shrink-0'
                      />
                      <div className='flex-1 space-y-1'>
                        <div className='text-sm line-clamp-2'>
                          Bài học Tham gia cộng đồng F8 trên Discord mới được thêm vào.
                        </div>
                        <div className='flex items-center'>
                          <Calendar className='w-4 h-4 mr-2' />
                          <span className='flex-1 text-xs font-medium'>một ngày trước</span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
            </div>
            <div className='flex justify-center'>
              <Button asChild variant='link' size='sm'>
                <Link to={PATH.HOME}>Xem tất cả thông báo</Link>
              </Button>
            </div>
          </div>
        )}
      >
        <div className='relative'>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className='bg-muted w-9 aspect-square rounded-full flex justify-center items-center'>
                <Bell strokeWidth={1.5} className='w-5 h-5' />
              </button>
            </TooltipTrigger>
            <TooltipContent>Thông báo</TooltipContent>
          </Tooltip>
          <div className='absolute -top-1 -right-1 w-4 aspect-square rounded-full bg-destructive flex justify-center items-center text-[10px] text-white font-semibold'>
            9
          </div>
        </div>
      </Tippy>
    </TooltipProvider>
  )
}
