import { Menu, MenuItem } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/Images/Synergy.png'
import expand from '../../../../assets/Images/expand-up-down-line.png'
import homeIcon from '../../../../assets/Images/homeIcon.png'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarTrigger,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Home,
  Users,
  Settings,
  Box,
  Tags,
  BarChart3,
  Layers,
  HelpCircle,
  ListCheck,
  IdCard,
  Tag,
  WandSparkles,
  CreditCard,
  SlidersHorizontal,
  List,
  BadgeCheck,
  ChevronsUpDown,
} from "lucide-react"
import { useStore } from '@/Store/AuthState/AuthState'
import { useEffect } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip'


export default function SideBar() {

  let { loginData, getLoginData } = useStore();

  useEffect(() => {
    getLoginData()
  }, [])

  const { open, isMobile } = useSidebar()

  return (
    <Sidebar collapsible='icon' className="h-screen bg-white !px-3">


      

      <SidebarHeader className="h-[12%] !pb-5 flex-row items-center bg-white">
        <img src={logo} alt="Synergy Logo" className="w-10" />
        {open && <ChevronsUpDown className='w-5 h-5 !px-0.5 cursor-pointer border rounded-sm text-gray-600 border-gray-300' />}




      </SidebarHeader>

      <SidebarContent className="flex flex-col bg-white">

        {/* Home */}
        {(open || isMobile) &&
          <SidebarGroup className='bg-[#6728ee1f] !py-2 w-[90%] rounded-md flex-row items-center !px-3'>
            <img src={homeIcon} alt="home" className='w-[8%]' />
            <span className='text-sm font-medium text-[#6728ee] !ms-2'>Home</span>
          </SidebarGroup>
        }


        <SidebarGroup>
          <SidebarGroupLabel className='text-[#b0b0b0] uppercase text-[12px]'>Team Management</SidebarGroupLabel>
          <SidebarGroupContent className={`${(open || isMobile) && '!px-1.5'}`}>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Users className="h-4 w-4" />
                    <span className='text-[14px] '>Members</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Layers className="h-4 w-4" />
                    <span>Departments</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <ListCheck className="h-4 w-4" />
                    <span>Bulk Adjustments</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className='text-[#b0b0b0] uppercase text-[12px] !mt-2'>Leads Management</SidebarGroupLabel>
          <SidebarGroupContent className={`${(open || isMobile) && '!px-1.5'}`}>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <IdCard className="h-4 w-4" />
                    <span>Leads</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Tag className="h-4 w-4" />
                    <span>Tags</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className='text-[#b0b0b0] uppercase text-[12px] !mt-2'>Brands & Products</SidebarGroupLabel>
          <SidebarGroupContent className={`${(open || isMobile) && '!px-1.5'}`}>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <WandSparkles className="h-4 w-4" />
                    <span>Customization</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <CreditCard className="h-4 w-4" />
                    <span>Products</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className='text-[#b0b0b0] uppercase text-[12px] !mt-2'>Configuration</SidebarGroupLabel>
          <SidebarGroupContent className={`${(open || isMobile) && '!px-1.5'}`}>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span>Integrations</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className='text-[#b0b0b0] uppercase text-[12px] !mt-2'>Support</SidebarGroupLabel>
          <SidebarGroupContent className={`${(open || isMobile) && '!px-1.5'}`}>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <List className="h-4 w-4" />
                    <span>FAQs</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        <SidebarFooter className="!mt-auto !py-2 border-t-2">
          <div className="mt-4 flex items-center gap-2">
            <img src={loginData?.image} alt="pp" className="h-7 w-7" />
            <div className="text-sm">
              <p className="font-medium flex items-center">{loginData?.firstName} {loginData?.lastName} <BadgeCheck className="h-4 w-4 !ms-1 !mt-0.5 bg-blue-400 rounded-full text-white" /></p>
              <p className="text-[11px] text-gray-500">{loginData?.email}</p>
            </div>
          </div>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}
