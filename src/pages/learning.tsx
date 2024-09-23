import { Bookmark, CircleCheckBig, Save, Search, Video, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import PATH from '@/constants/path'
import { cn } from '@/lib/utils'

export default function Learning() {
  return (
    <div className='container pt-2'>
      <div className='flex justify-between items-start space-x-5'>
        <div className='flex-1'>
          <div>
            {/* Video */}
            <div className='aspect-video bg-muted rounded-lg' />
            <div className='mt-6 space-y-4'>
              {/* Lesson name */}
              <div className='space-y-2'>
                <div className='flex items-center space-x-4'>
                  <h2 className='text-2xl font-semibold tracking-tight'>Cài đặt babel-plugin-module-resolver</h2>
                  <button>
                    <Bookmark className='w-5 h-5' />
                  </button>
                </div>
                <p className='text-xs text-muted-foreground'>Xuất bản ngày 23 tháng 9 năm 2024</p>
              </div>

              {/* Description */}
              <div>
                <Tabs defaultValue='account'>
                  <TabsList>
                    <TabsTrigger value='account'>Bài giảng</TabsTrigger>
                    <TabsTrigger value='password'>Tài liệu</TabsTrigger>
                    <TabsTrigger value='password1'>Bài tập</TabsTrigger>
                  </TabsList>
                  <TabsContent value='account'>Make changes to your account here.</TabsContent>
                  <TabsContent value='password'>Change your password here.</TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons */}
        <div className='w-1/4 sticky top-[64px] bottom-0'>
          <div className='py-2 flex items-center space-x-3'>
            {/* Search */}
            <div className='relative flex-1'>
              <div className='absolute inset-y-0 left-0 w-10 flex justify-center items-center'>
                <Search className='w-4 h-4' />
              </div>
              <Input placeholder='Tìm theo tên bài học' className='rounded-full pl-10' />
              <button className='absolute inset-y-0 right-0 w-10 flex justify-center items-center'>
                <X className='w-4 h-4' />
              </button>
            </div>

            {/* Saved lessons */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size='icon' variant='outline' className='rounded-full'>
                  <Save size={18} strokeWidth={1.5} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Bài học đã lưu</TooltipContent>
            </Tooltip>
          </div>

          {/* Lessons */}
          <div className='max-h-full overflow-y-auto'>
            <Accordion type='single' collapsible>
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <AccordionItem key={index} value='item-1'>
                    <AccordionTrigger className='px-4'>Chương 1. Tìm hiểu về JavaScipt</AccordionTrigger>
                    <AccordionContent className='p-0'>
                      <Link
                        to={PATH.HOME}
                        className={cn(
                          'w-full flex justify-between items-center px-4 py-2 hover:bg-muted text-muted-foreground transition-colors rounded-md',
                          {
                            'bg-muted pointer-events-none': index === 0
                          }
                        )}
                      >
                        <div className='flex-1'>
                          <div className='flex items-center'>
                            <Video className='w-4 h-4 mr-4' />
                            <div className='space-y-2'>
                              <div>Bài 1: Javascript là gì ?</div>
                              <div className='text-xs'>18:44</div>
                            </div>
                          </div>
                        </div>
                        <CircleCheckBig className='w-4 h-4 stroke-green-600' />
                      </Link>
                      <Link
                        to={PATH.HOME}
                        className='w-full flex justify-between items-center px-4 py-2 hover:bg-muted text-muted-foreground transition-colors rounded-md'
                      >
                        <div className='flex-1'>
                          <div className='flex items-center'>
                            <Video className='w-4 h-4 mr-4' />
                            <div className='space-y-2'>
                              <div>Bài 2: Javascript viết tắt là gì ?</div>
                              <div className='text-xs'>18:44</div>
                            </div>
                          </div>
                        </div>
                        <CircleCheckBig className='w-4 h-4 stroke-green-600' />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
