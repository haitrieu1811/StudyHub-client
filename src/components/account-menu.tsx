import Tippy from '@tippyjs/react/headless'
import { Link } from 'react-router-dom'

import PATH from '@/constants/path'

export default function AccountMenu() {
  return (
    <Tippy
      interactive
      trigger='click'
      placement='bottom-end'
      zIndex={1}
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
  )
}
