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
    <div className="items-center justify-center hidden px- py-2 ml-10 text-base font-semibold hover:text-blue-900 transition-all duration-200 bg-orange-400 border border-transparent text-white rounded-md lg:inline-flex hover:bg-white focus:bg-blue-900" role="button">
      <a className='p-2' target='_blank' 
      href="https://api.whatsapp.com/send?phone=5585996950064&text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento!
">Compre sua Placa</a>  
    </div>
  )
}

export default DropdownSide