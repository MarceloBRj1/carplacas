import { ChatBubbleIcon } from "@radix-ui/react-icons";
import Image from "next/image";


export default function BannerTop() {
  return (
    <div className="  relative isolate flex items-center gap-x-6 overflow-hidden  px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
        </p>
        <a
          href="#"
          className=" flex flex-row rounded-full bg-blue-800 px-3.5 py-1 text-sm font-semibold text-white  hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Entre em contato
        </a>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=5585996950064&text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento!
">
          <strong className="font-semibold">(85)99695-0064   </strong>
          </a>
          <a href="#contato">
          </a>
      </div>

      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
        </button>
      </div>
    </div>
  )
}
