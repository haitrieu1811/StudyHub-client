import { Battery, Check, Clock, Film, Gauge, Minus, PencilLine, Play, Video } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router-dom'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function CourseDetail() {
  const params = useParams()
  console.log(params)

  const [isOpenIntroVideo, setIsOpenIntroVideo] = React.useState<boolean>(false)

  return (
    <React.Fragment>
      <div className='pt-10'>
        <div className='flex items-start space-x-10'>
          <div className='w-1/3 sticky top-[150px]'>
            <div className='space-y-8 flex flex-col items-center'>
              {/* Intro video */}
              <div className='relative cursor-pointer' onClick={() => setIsOpenIntroVideo(true)}>
                <img
                  src='https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'
                  alt=''
                  className='w-full aspect-video rounded-2xl'
                />
                <div className='absolute inset-0 bg-black/40 rounded-2xl flex justify-center items-center'>
                  <Play size={60} strokeWidth={1.5} className='stroke-white' />
                </div>
                <p className='absolute bottom-4 inset-x-0 text-sm text-white text-center font-semibold'>
                  Xem giới thiệu khóa học
                </p>
              </div>

              {/* Price */}
              <div className='text-3xl font-medium text-center'>Miễn phí</div>

              {/* Subscribe button */}
              <Button size='lg' className='rounded-full text-lg bg-blue-500 hover:bg-blue-600'>
                Đăng ký học
              </Button>

              {/* Info list */}
              <div className='text-sm space-y-4 font-medium'>
                <div className='flex items-center'>
                  <Gauge size={16} className='mr-2' />
                  Trình độ cơ bản
                </div>
                <div className='flex items-center'>
                  <Film size={16} className='mr-2' />
                  Tổng số 37 bài học
                </div>
                <div className='flex items-center'>
                  <Clock size={16} className='mr-2' />
                  Thời lượng 12 giờ 09 phút
                </div>
                <div className='flex items-center'>
                  <Battery size={16} className='mr-2' />
                  Học mọi lúc mọi nơi
                </div>
              </div>
            </div>
          </div>

          <div className='flex-1 space-y-8'>
            {/* Title and description */}
            <div className='space-y-1.5'>
              <h1 className='font-semibold text-2xl tracking-tight'>Xây Dựng Website với ReactJS</h1>
              <p className='text-sm text-muted-foreground text-justify'>
                Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án
                thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi
                xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.
              </p>
            </div>

            <div className='space-y-2'>
              <h3 className='font-semibold tracking-tight text-lg'>Bạn sẽ học được gì?</h3>
              <div className='text-sm text-muted-foreground'>
                <div className='flex items-center'>
                  <Check strokeWidth={3} className='w-4 h-4 mr-2 stroke-destructive' />
                  Nắm chắc lý thuyết chung trong việc xây dựng web
                </div>
              </div>
            </div>

            <div className='space-y-1.5'>
              <h3 className='font-semibold tracking-tight text-lg'>Nội dung khóa học</h3>
              <div className='flex items-center space-x-3 text-sm text-muted-foreground'>
                <div>
                  <span className='font-semibold text-primary'>3</span> chương
                </div>
                <Minus size={12} />
                <div>
                  <span className='font-semibold text-primary'>37</span> bài học
                </div>
                <Minus size={12} />
                <div>
                  Thời lượng <span className='font-semibold text-primary'>12 giờ 09 phút</span>
                </div>
              </div>
            </div>

            <div>
              <Accordion type='multiple' defaultValue={['item-1']}>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>1. Bắt đầu</AccordionTrigger>
                  <AccordionContent>
                    {Array(10)
                      .fill(0)
                      .map((_, index) => (
                        <div key={index} className='flex justify-between items-center space-x-4 py-3'>
                          <div className='flex items-center'>
                            {index % 2 === 0 && <Video strokeWidth={1.5} className='w-5 h-5 mr-4' />}
                            {index % 2 !== 0 && <PencilLine strokeWidth={1.5} className='w-5 h-5 mr-4' />}
                            1. Lời khuyên trước khóa học
                          </div>
                          <div className='text-xs'>08:04</div>
                        </div>
                      ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>2. Kiến thức cốt lõi</AccordionTrigger>
                  <AccordionContent>
                    {Array(10)
                      .fill(0)
                      .map((_, index) => (
                        <div key={index} className='flex justify-between items-center space-x-4 py-3'>
                          <div>1. Lời khuyên trước khóa học</div>
                          <div>08:04</div>
                        </div>
                      ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Intro video */}
      <Dialog open={isOpenIntroVideo} onOpenChange={(value) => setIsOpenIntroVideo(value)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Giới thiệu khóa học</DialogTitle>
            <DialogDescription>Xây Dựng Website với ReactJS</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
