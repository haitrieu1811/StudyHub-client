import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginForm() {
  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label>Email</Label>
        <Input />
      </div>
      <div className='space-y-2'>
        <Label>Mật khẩu</Label>
        <Input type='password' />
      </div>
      <Button className='w-full'>Đăng nhập</Button>
      <div className='flex justify-end'>
        <Button variant='link' className='h-auto p-0'>
          Quên mật khẩu?
        </Button>
      </div>
    </div>
  )
}
