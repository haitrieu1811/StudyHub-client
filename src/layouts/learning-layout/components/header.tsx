import { Calendar, NotebookPen, Pencil, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo.png'
import AccountMenu from '@/components/account-menu'
import Notifications from '@/components/notifications'
import ThemeToggle from '@/components/theme-toggle'
import { Progress } from '@/components/ui/progress'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import PATH from '@/constants/path'

export default function Header() {
  return (
    <header className='bg-background border-b border-b-border sticky top-0 inset-x-0 z-10'>
      <div className='container h-14 flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          {/* Logo */}
          <Link to={PATH.HOME}>
            <img src={logo} alt='' className='w-10 aspect-square rounded-full object-cover flex-shrink-0' />
          </Link>

          {/* Course name */}
          <h3 className='font-bold tracking-tight'>JavaScript Pro</h3>
        </div>

        <div className='flex items-center space-x-8'>
          {/* Progress */}
          <div className='space-y-1.5'>
            <Progress value={50} />
            <div className='flex justify-between items-center space-x-5'>
              <div className='text-xs text-muted-foreground font-medium'>28 trên 56 bài học</div>
              <div className='text-xs font-semibold'>50%</div>
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            {/* Notes */}
            <Sheet>
              <SheetTrigger asChild>
                <div className='relative'>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className='bg-muted w-9 aspect-square rounded-full flex justify-center items-center'>
                          <NotebookPen strokeWidth={1.5} className='w-5 h-5' />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>Ghi chú</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </SheetTrigger>
              <SheetContent className='min-w-[600px] max-h-screen overflow-y-auto'>
                <SheetHeader>
                  <SheetTitle>Ghi chú của tôi</SheetTitle>
                </SheetHeader>
                <div className='mt-4'>
                  {Array(10)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className='space-y-4 p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer group'
                      >
                        <div className='flex items-center space-x-6'>
                          <div className='font-semibold text-sm'>Làm việc với mảng cơ bản</div>
                          <div className='text-muted-foreground text-xs'>Làm việc với Arrays</div>
                        </div>
                        <div className='text-muted-foreground text-sm text-justify'>
                          Phương thức này sử dụng same-value-zero comparison algorithm để xác định xem một mảng có chứa
                          một giá trị nhất định hay không. Điều này khác biệt so với strict equality (===) ở chỗ nó coi
                          NaN là bằng nhau (trong khi NaN === NaN trả về false).
                        </div>
                        <div className='flex justify-between items-center space-x-6'>
                          <div className='flex items-center text-muted-foreground text-xs'>
                            <Calendar className='w-4 h-4 mr-2' />
                            một ngày trước
                          </div>
                          <div className='flex items-center text-muted-foreground opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all'>
                            <button className='p-2'>
                              <Pencil className='w-4 h-4' />
                            </button>
                            <button className='p-2'>
                              <Trash className='w-4 h-4' />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </SheetContent>
            </Sheet>
            {/* Notification */}
            <Notifications />
            {/* Theme toggle */}
            <ThemeToggle />
            {/* My account */}
            <AccountMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
