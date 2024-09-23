import { TooltipTrigger } from '@radix-ui/react-tooltip'
import Tippy from '@tippyjs/react/headless'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { useTheme } from '@/providers/theme.provider'

export default function ThemeToggle() {
  const { setTheme } = useTheme()
  return (
    <TooltipProvider>
      <Tippy
        interactive
        trigger='click'
        placement='bottom-end'
        zIndex={1}
        render={() => (
          <div className='bg-background rounded-lg shadow border border-border p-1 w-[200px] space-y-1'>
            <Button variant='ghost' className='w-full justify-start' onClick={() => setTheme('light')}>
              Giao diện sáng
            </Button>
            <Button variant='ghost' className='w-full justify-start' onClick={() => setTheme('dark')}>
              Giao diện tối
            </Button>
            <Button variant='ghost' className='w-full justify-start' onClick={() => setTheme('system')}>
              Giao diện hệ thống
            </Button>
          </div>
        )}
      >
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className='bg-muted w-9 aspect-square rounded-full flex justify-center items-center'>
                <Sun strokeWidth={1.5} className='w-5 h-5 dark:hidden transition-all' />
                <Moon strokeWidth={1.5} className='w-5 h-5 hidden dark:block transition-all' />
              </button>
            </TooltipTrigger>
            <TooltipContent>Giao diện ứng dụng</TooltipContent>
          </Tooltip>
        </div>
      </Tippy>
    </TooltipProvider>
  )
}
