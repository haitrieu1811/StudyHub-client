import Autoplay from 'embla-carousel-autoplay'
import { Crown, Timer, Video } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import PATH from '@/constants/path'

export default function Home() {
  return (
    <div className='py-2 space-y-10'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000
          })
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className='bg-[#7c49fa] rounded-2xl overflow-hidden flex justify-between items-center space-x-10'>
              <div className='space-y-5 pl-10'>
                <h3 className='tracking-tight font-bold text-3xl text-white'>Mở bán khóa JavaScript Pro</h3>
                <div className='text-white'>
                  Từ 08/08/2024 khóa học sẽ có giá 1.399k (-200k nếu pre-order khóa HTML CSS Pro). Khi full khóa học sẽ
                  trở về giá gốc.
                </div>
                <Button variant='outline' className='rounded-full'>
                  Học thử miễn phí
                </Button>
              </div>
              <img
                src='https://files.fullstack.edu.vn/f8-prod/banners/37/66b5a6b16d31a.png'
                alt=''
                className='h-[260px] object-contain'
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl overflow-hidden flex justify-between items-center space-x-10'>
              <div className='space-y-5 pl-10'>
                <h3 className='tracking-tight font-bold text-3xl text-white'>Mở bán áo polo F8 đợt 2</h3>
                <div className='text-white'>
                  Áo Polo F8 với thiết kế tối giản, lịch sự, phù hợp mặc mọi lúc, mọi nơi. Chất áo mềm mại, thoáng mát,
                  ngực và tay áo in logo F8 - Fullstack.
                </div>
                <Button variant='outline' className='rounded-full'>
                  Đặt áo ngay
                </Button>
              </div>
              <img
                src='https://files.fullstack.edu.vn/f8-prod/banners/1/657686da32787.png'
                alt=''
                className='h-[260px] object-contain'
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='-left-4' />
        <CarouselNext className='-right-4' />
      </Carousel>
      <div className='space-y-5'>
        <h3 className='font-bold tracking-tight text-2xl flex items-center'>
          <Crown className='w-6 h-6 mr-4' />
          Khóa học Pro
        </h3>
        <div className='grid grid-cols-12 gap-5'>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index} className='col-span-3'>
                <div className='rounded-2xl border-b-[3px] border-b-transparent hover:border-b-primary transition-colors'>
                  <Link to={PATH.HOME}>
                    <img
                      src='https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'
                      alt=''
                      className='rounded-t-2xl aspect-video object-cover'
                    />
                  </Link>
                  <div className='bg-muted rounded-b-2xl space-y-2 px-6 py-4'>
                    <Link to={PATH.HOME} className='font-semibold'>
                      HTML CSS Pro
                    </Link>
                    <div className='flex items-center space-x-3 text-sm'>
                      <div className='line-through text-muted-foreground'>2.500.000đ</div>
                      <div className='font-semibold'>1.299.000đ</div>
                    </div>
                    <div className='flex items-center space-x-3 text-xs'>
                      <div className='flex items-center'>
                        <Video className='w-4 h-4 mr-2' />
                        590
                      </div>
                      <div className='flex items-center'>
                        <Timer className='w-4 h-4 mr-2' />
                        116h44p
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
