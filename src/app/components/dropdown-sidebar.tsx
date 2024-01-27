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
    <div className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button">

      <DropdownMenu>
      <DropdownMenuTrigger>Compre sua Placa</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Button className='hover:bg-blue-700 focus:bg-blue-700 bg-blue-600'>Placa para Carro</Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuLabel>
        <Button className='hover:bg-blue-700 focus:bg-blue-700 bg-blue-600'>Placa para Moto</Button>
        </DropdownMenuLabel>
      </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DropdownSide