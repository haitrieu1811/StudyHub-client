import Tippy from '@tippyjs/react/headless'
import { BookText, ChevronLeft, CircleHelp, House, Map, Megaphone } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import logo from '@/assets/logo.png'
import AccountMenu from '@/components/account-menu'
import Notifications from '@/components/notifications'
import ThemeToggle from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { TooltipProvider } from '@/components/ui/tooltip'
import PATH from '@/constants/path'
import LoginForm from '@/layouts/main-layout/components/login-form'
import SearchBox from '@/layouts/main-layout/components/search-box'

const IS_AUTHENTICATED = true

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <TooltipProvider>
      <header className='bg-background sticky top-0 left-0 right-0 z-10'>
        <div className='flex justify-between items-center container py-3'>
          {/* Logo and slogan */}
          <div className='flex items-center space-x-3'>
            <Link to={PATH.HOME}>
              <img src={logo} alt='Logo' className='rounded-md object-cover aspect-square w-10 h-10' />
            </Link>
            {location.pathname === PATH.HOME && (
              <span className='text-sm font-semibold tracking-tight'>Học lập trình để đi làm</span>
            )}
            {location.pathname !== PATH.HOME && (
              <Button variant='link' className='p-0 text-muted-foreground' onClick={() => navigate(-1)}>
                <ChevronLeft className='w-4 h-4 mr-1' />
                Quay lại
              </Button>
            )}
          </div>

          {/* Search box */}
          <SearchBox />

          {/* Not logged */}
          {!IS_AUTHENTICATED && (
            <div className='flex space-x-2'>
              {/* Register */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant='ghost' className='rounded-full'>
                    Đăng ký
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Đăng ký</DialogTitle>
                    <DialogDescription>Điền email và mật khẩu để đăng ký tài khoản</DialogDescription>
                  </DialogHeader>
                  <LoginForm />
                </DialogContent>
              </Dialog>
              {/* Login */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className='rounded-full'>Đăng nhập</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Đăng nhập</DialogTitle>
                    <DialogDescription>Điền email và mật khẩu để đăng nhập vào hệ thống</DialogDescription>
                  </DialogHeader>
                  <LoginForm />
                </DialogContent>
              </Dialog>
            </div>
          )}

          {/* Is logged */}
          {IS_AUTHENTICATED && (
            <div className='flex items-center space-x-8'>
              {/* My courses */}
              <Tippy
                interactive
                trigger='click'
                placement='bottom-end'
                offset={[0, 0]}
                render={() => (
                  <div className='bg-background rounded-lg shadow border border-border w-[400px] py-2 space-y-2'>
                    <div className='flex justify-between items-center space-x-3 px-4'>
                      <h3 className='font-medium'>Khóa học của tôi</h3>
                      <Button asChild variant='link' size='sm' className='p-0'>
                        <Link to={PATH.HOME}>Xem tất cả</Link>
                      </Button>
                    </div>
                    <div className='space-y-1 overflow-y-auto max-h-[400px] p-1'>
                      {Array(10)
                        .fill(0)
                        .map((_, index) => (
                          <Link
                            key={index}
                            to={PATH.HOME}
                            className='px-4 py-2 flex items-center space-x-3 transition-colors hover:bg-muted rounded-lg'
                          >
                            <img
                              src='https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png'
                              alt=''
                              className='w-[120px] aspect-video rounded-lg object-cover flex-shrink-0'
                            />
                            <div className='space-y-2 flex-1'>
                              <div className='text-sm font-medium leading-none line-clamp-1'>JavaScript Pro</div>
                              <div className='text-xs text-muted-foreground'>Học cách đây 1 tuần</div>
                              <div>
                                <Progress value={40} />
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                )}
              >
                <Button variant='link' className='p-0'>
                  Khóa học của tôi
                </Button>
              </Tippy>
              <div className='flex items-center space-x-4'>
                {/* Notifications */}
                <Notifications />
                {/* Theme */}
                <ThemeToggle />
                {/* My account */}
                <AccountMenu />
              </div>
            </div>
          )}
        </div>
        <nav className='border-y border-y-border'>
          <div className='container py-1 flex justify-end'>
            <Button asChild variant='ghost'>
              <Link to={PATH.HOME} className='flex items-center'>
                <House className='w-4 h-4 mr-2' />
                <div>Trang chủ</div>
              </Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link to={PATH.HOME} className='flex items-center'>
                <Map className='w-4 h-4 mr-2' />
                <div>Lộ trình</div>
              </Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link to={PATH.HOME} className='flex items-center'>
                <BookText className='w-4 h-4 mr-2' />
                <div>Bài viết</div>
              </Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link to={PATH.HOME} className='flex items-center'>
                <CircleHelp className='w-4 h-4 mr-2' />
                <div>Hỏi đáp</div>
              </Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link to={PATH.HOME} className='flex items-center'>
                <Megaphone className='w-4 h-4 mr-2' />
                <div>Bảng tin</div>
              </Link>
            </Button>
          </div>
        </nav>
      </header>
    </TooltipProvider>
  )
}
