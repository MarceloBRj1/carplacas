import React from 'react';

interface CardPriceProps {
  modelo: string;
  price: string;
  Image: React.ElementType;
  imgProps: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  children?: React.ReactNode;
  parcela?: string;
}

const CardPrice: React.FC<CardPriceProps> = ({ modelo, price, Image, imgProps, parcela }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <div className='h-full w-full object-contain object-center lg:h-full lg:w-full'>
          <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
          <Image className='h-full w-full object-contain object-center lg:h-full lg:w-full' {...imgProps} />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-1xl text-gray-700">
            <div className='cursor-pointer'>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {modelo}
            </div>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900"> <span className='text-lime-500'>R$</span> {price}</p>
      </div>
      <p className='text-end text-sm'>{parcela}</p>
    </div>
  );
};

export default CardPrice;
