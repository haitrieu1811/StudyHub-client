import Tippy from '@tippyjs/react/headless'
import { Search, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import PATH from '@/constants/path'

export default function SearchBox() {
  const [query, setQuery] = React.useState<string>('')

  const searchBoxRef = React.useRef<HTMLInputElement>(null)

  const handleClearQuery = () => {
    setQuery('')
    searchBoxRef.current?.focus()
  }

  return (
    <Tippy
      interactive
      visible={!!query.trim()}
      placement='bottom-end'
      zIndex={1}
      render={() => (
        <div className='bg-background shadow w-[400px] border border-border rounded-lg space-y-2 py-2 text-sm'>
          <div className='px-4 pt-2'>
            <h3 className='text-muted-foreground'>Kết quả tìm kiếm cho từ khóa 'js'</h3>
          </div>
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <div key={index} className='space-y-1'>
                <div className='flex justify-between items-center space-x-3 px-4'>
                  <h3 className='font-medium'>Khóa học</h3>
                  <Button variant='link' className='text-muted-foreground p-0 text-xs'>
                    Xem thêm
                  </Button>
                </div>
                <div className='p-1'>
                  <Link
                    to={PATH.HOME}
                    className='px-4 py-2 hover:bg-muted transition-colors flex items-center space-x-2 rounded-md'
                  >
                    <img
                      src='https://files.fullstack.edu.vn/f8-prod/courses/13/13.png'
                      alt=''
                      className='w-10 aspect-square rounded-full object-cover'
                    />
                    <span className='line-clamp-2 text-muted-foreground'>
                      Hướng dẫn sử dụng Passport.js để đăng nhập với Password
                    </span>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      )}
    >
      <div className='relative'>
        <div className='absolute left-0 inset-y-0 w-10 flex justify-center items-center'>
          <Search className='w-4 h-4' />
        </div>
        <Input
          ref={searchBoxRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Tìm kiếm khóa học, bài viết, video,...'
          className='px-10 w-[400px] rounded-full'
        />
        <div className='absolute right-0 inset-y-0 w-10'>
          {!!query.trim() && (
            <button className='w-full h-full flex justify-center items-center' onClick={handleClearQuery}>
              <X className='w-4 h-4' />
            </button>
          )}
          {/* <div className='flex justify-center items-center w-full h-full'>
            <Loader2 className='w-4 h-4 animate-spin' />
          </div> */}
        </div>
      </div>
    </Tippy>
  )
}
