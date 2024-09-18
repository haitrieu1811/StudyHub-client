import { Button } from '@/components/ui/button'
import PATH from '@/constants/path'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-zinc-900'>
      <div className='container py-10'>
        <div className='grid grid-cols-12 gap-10'>
          <div className='col-span-3 space-y-5'>
            <div className='flex items-center space-x-2'>
              <Link to={PATH.HOME}>
                <img
                  src='https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png'
                  alt=''
                  className='w-10 aspect-square object-cover rounded-md'
                />
              </Link>
              <div className='text-white font-semibold tracking-tight'>Học lập trình để đi làm</div>
            </div>
            <div className='text-muted text-sm space-y-2'>
              <div>
                <span className='font-semibold'>Điện thoại:</span> 0775.939.704
              </div>
              <div>
                <span className='font-semibold'>Email:</span> contact@fullstack.edu.vn
              </div>
              <div>
                <span className='font-semibold'>Địa chỉ:</span> Số 1, ngõ 41, Trần Duy Hưng, Cầu Giấy, Hà Nội
              </div>
            </div>
          </div>
          <div className='col-span-2 space-y-5'>
            <h3 className='font-semibold tracking-tight text-white text-lg'>Về F8</h3>
            <ul className='text-sm'>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Giới thiệu</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Liên hệ</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Điều khoản</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Bảo mật</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className='col-span-2 space-y-5'>
            <h3 className='font-semibold tracking-tight text-white text-lg'>Sản phẩm</h3>
            <ul className='text-sm'>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Game Nested</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Game CSS Dinner</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Game CSS Selectors</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Game Froggy</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Game Froggy Pro</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Game Scoops</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className='col-span-2 space-y-5'>
            <h3 className='font-semibold tracking-tight text-white text-lg'>Công cụ</h3>
            <ul className='text-sm'>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Tạo CV xin việc</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Rút gọn liên kết</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Clip-path maker</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Snippet generator</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>CSS Grid generator</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant='link' className='text-white p-0'>
                  <Link to={PATH.HOME}>Cảnh báo sờ tay lên mặt</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className='col-span-3 space-y-5'>
            <h3 className='font-semibold tracking-tight text-white text-lg'>Công ty cổ phần công nghệ giáo dục F8</h3>
            <div className='text-muted text-sm space-y-2'>
              <div>
                <span className='font-semibold'>Mã số thuế:</span> 0109922901
              </div>
              <div>
                <span className='font-semibold'>Ngày thành lập:</span> 04/03/2022
              </div>
              <div className='text-justify'>
                <span className='font-semibold'>Lĩnh vực hoạt động:</span> Giáo dục, công nghệ - lập trình. Chúng tôi
                tập trung xây dựng và phát triển các sản phẩm mang lại giá trị cho cộng đồng lập trình viên Việt Nam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
