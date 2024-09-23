import { ArrowLeft, ArrowRight, ArrowRightFromLine, MessagesSquare } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { TooltipProvider } from '@/components/ui/tooltip'
import Header from '@/layouts/learning-layout/components/header'

export default function LearningLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <TooltipProvider>
      <Header />
      <main>{children}</main>
      <div className='sticky bottom-0 inset-x-0 border-t border-t-border bg-background'>
        <div className='container flex justify-between items-center space-x-3 py-2'>
          {/* Questions */}
          <div className='w-1/3'>
            <Button variant='ghost' className='font-semibold rounded-full'>
              <MessagesSquare strokeWidth={1.5} className='w-5 h-5 mr-3' />
              Trao đổi về bài học
            </Button>
          </div>

          {/* Next, prev button */}
          <div className='flex-1'>
            <div className='flex justify-center items-center space-x-3'>
              <Button variant='outline' className='rounded-full'>
                <ArrowLeft className='w-4 h-4 mr-2' />
                Bài trước
              </Button>
              <Button className='rounded-full'>
                Bài tiếp theo
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </div>
          </div>

          {/* Toggle lessons menu */}
          <div className='w-1/3'>
            <div className='flex justify-end'>
              <Button variant='ghost' className='font-semibold rounded-full'>
                Bài 9: Cài đặt babel-plugin-module-resolver
                <ArrowRightFromLine className='w-5 h-5 ml-3' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
