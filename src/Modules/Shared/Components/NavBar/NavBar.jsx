import React, { useEffect } from 'react'
import { useStore } from '@/Store/AuthState/AuthState'
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import { Bell, Search } from 'lucide-react';

export default function NavBar() {

  let { loginData, getLoginData } = useStore();

  useEffect(() => {
    getLoginData()
  }, [])

  const { open } = useSidebar()

  return (
    <>
      <Tooltip>
        <TooltipTrigger className='w-fit bg-white'><SidebarTrigger className='text-[#6728ee]' /></TooltipTrigger>
        <TooltipContent side="right">
          <small>{open ? "Collapse" : "Expand"}</small>
        </TooltipContent>
      </Tooltip>

      <nav className="relative flex h-16 items-center justify-between after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 !pb-4 !px-4">

            <div className="mt-4 flex items-center gap-2">
              <img src={loginData?.image} alt="pp" className="h-10 w-10" />
              <div className="text-sm">
                <p className="font-medium">{loginData?.firstName} {loginData?.lastName}</p>
                <p className="text-[11px] text-gray-500">Welcome back to Synergy 👋🏻</p>
              </div>
            </div>

        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Search size={18} color="#5C5C5C" strokeWidth={1.5} className='!me-5' />
          <Bell size={20} color="#5C5C5C" strokeWidth={1.5} />
        </div>


      </nav>
    </>
  )
}
