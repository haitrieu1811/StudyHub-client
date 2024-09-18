import Tippy from '@tippyjs/react/headless'
import { Bell, BookText, Calendar, CircleHelp, House, Map, Megaphone } from 'lucide-react'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo.png'
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
import PATH from '@/constants/path'
import LoginForm from '@/layouts/main-layout/components/login-form'
import SearchBox from '@/layouts/main-layout/components/search-box'
import { cn } from '@/lib/utils'

const IS_AUTHENTICATED = true

export default function Header() {
  return (
    <header className='bg-background sticky top-0 left-0 right-0 z-10'>
      <div className='flex justify-between items-center container py-3'>
        {/* Logo and slogan */}
        <div className='flex items-center space-x-3'>
          <Link to={PATH.LOGIN}>
            <img src={logo} alt='Logo' className='rounded-md object-cover aspect-square w-10 h-10' />
          </Link>
          <span className='text-sm font-semibold tracking-tight'>Học lập trình để đi làm</span>
        </div>
        {/* Search box */}
        <SearchBox />
        {/* Authentication */}
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
        {IS_AUTHENTICATED && (
          <div className='flex items-center space-x-6'>
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
                  <div className='space-y-1 overflow-y-auto max-h-[400px]'>
                    {Array(10)
                      .fill(0)
                      .map((_, index) => (
                        <Link
                          key={index}
                          to={PATH.HOME}
                          className='px-4 py-2 flex items-center space-x-3 transition-colors hover:bg-muted'
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
            {/* Notifications */}
            <Tippy
              interactive
              trigger='click'
              placement='bottom-end'
              render={() => (
                <div className='bg-background rounded-lg shadow border border-border py-2 w-[400px] space-y-2'>
                  <div className='flex justify-between items-center space-x-3 px-4'>
                    <h3 className='font-medium'>Thông báo</h3>
                    <Button asChild variant='link' size='sm' className='p-0'>
                      <Link to={PATH.HOME}>Đánh dấu tất cả đã đọc</Link>
                    </Button>
                  </div>
                  <div className='space-y-1 overflow-y-auto max-h-[400px]'>
                    {Array(10)
                      .fill(0)
                      .map((_, index) => {
                        const isUnRead = index % 2 === 0
                        return (
                          <Link
                            key={index}
                            to={PATH.HOME}
                            className={cn('flex items-center space-x-3 px-4 py-2', {
                              'hover:bg-muted': !isUnRead,
                              'bg-orange-100/50 hover:bg-orange-100/90': isUnRead
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
                <button className='bg-muted w-9 aspect-square rounded-full flex justify-center items-center'>
                  <Bell strokeWidth={1.5} className='w-5 h-5' />
                </button>
                <div className='absolute -top-1 -right-1 w-4 aspect-square rounded-full bg-destructive flex justify-center items-center text-[10px] text-primary-foreground font-semibold'>
                  9
                </div>
              </div>
            </Tippy>
            {/* My account */}
            <Tippy
              interactive
              trigger='click'
              placement='bottom-end'
              render={() => (
                <div className='bg-background rounded-lg shadow border border-border'>
                  <Link to={PATH.HOME} className='flex items-center space-x-3 p-5 border-b border-b-border'>
                    <img
                      src='https://files.fullstack.edu.vn/f8-prod/user_avatars/140337/626ea3c13e427.jpg'
                      alt=''
                      className='w-12 aspect-square rounded-full object-cover flex-shrink-0'
                    />
                    <div className='flex-1 space-y-1 text-sm'>
                      <div className='font-medium'>Hải Triều</div>
                      <div className='text-muted-foreground'>@haiitrieuu</div>
                    </div>
                  </Link>
                  <div className='space-y-2'>
                    <div className='border-b border-b-border'>
                      <Link
                        to={PATH.HOME}
                        className='text-sm text-muted-foreground transition-colors hover:text-primary block pl-4 pr-24 py-2'
                      >
                        Trang cá nhân
                      </Link>
                    </div>
                    <div className='border-b border-b-border'>
                      <Link
                        to={PATH.HOME}
                        className='text-sm text-muted-foreground transition-colors hover:text-primary block pl-4 pr-24 py-2'
                      >
                        Viết blog
                      </Link>
                      <Link
                        to={PATH.HOME}
                        className='text-sm text-muted-foreground transition-colors hover:text-primary block pl-4 pr-24 py-2'
                      >
                        Bài viết của tôi
                      </Link>
                      <Link
                        to={PATH.HOME}
                        className='text-sm text-muted-foreground transition-colors hover:text-primary block pl-4 pr-24 py-2'
                      >
                        Bài viết đã lưu
                      </Link>
                    </div>
                    <div className='border-b border-b-border'>
                      <Link
                        to={PATH.HOME}
                        className='text-sm text-muted-foreground transition-colors hover:text-primary block pl-4 pr-24 py-2'
                      >
                        Cài đặt
                      </Link>
                      <Link
                        to={PATH.HOME}
                        className='text-sm text-muted-foreground transition-colors hover:text-primary block pl-4 pr-24 py-2'
                      >
                        Đăng xuất
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            >
              <div className='cursor-pointer'>
                <img
                  src='https://files.fullstack.edu.vn/f8-prod/user_avatars/140337/626ea3c13e427.jpg'
                  alt=''
                  className='w-9 aspect-square rounded-full object-cover'
                />
              </div>
            </Tippy>
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
  )
}
