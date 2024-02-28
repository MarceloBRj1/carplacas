import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'

const DropdownSide = () => {
  return (
    <div className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-blue-900 transition-all duration-200 bg-orange-400 border border-transparent rounded-md lg:inline-flex hover:bg-white focus:bg-blue-900" role="button">
      <DropdownMenu>
      <DropdownMenuTrigger className=' hover:text-blue-900'><a target='_blank' href="https://api.whatsapp.com/send?phone=5585996950064&text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento!
">Compre sua Placa</a></DropdownMenuTrigger>
      
      </DropdownMenu>
    </div>
  )
}

export default DropdownSide