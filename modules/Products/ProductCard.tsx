import { CompareIcon, LikeIcon, SavedIcon } from '@/assets/icons'
import Button from '@/components/Button'
import { IMG_API } from '@/hooks/getEnv'
import { ProductType } from '@/types/ProductType'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { FC } from 'react'

const ProductCard: FC<{ item: ProductType }> = ({ item }) => {
  const t = useTranslations("Products")
  function formatNumber(num:number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  return (
    <div className='max-w-[273px]'>
      <div className='bg-[#EBEFF3] cursor-pointer rounded-[8px] mb-4 relative h-[180px] sm:h-[280px] flex items-center justify-center'>
        <Image className='w-[130px] sm:w-[202px] h-[130px] sm:h-[202px]' src={`${IMG_API}/${item.image}`} alt='Product img' width={202} height={202} priority />
        <button className='absolute top-[12px] sm:top-[20px] right-[12px] sm:right-[24px] cursor-pointer'> <LikeIcon/> </button>
      </div>
      <p className='text-[#545D6A] line-clamp-1 sm:line-clamp-none text-[12px] sm:text-[14px] mb-[20px] sm:mb-[28px]'>{item.description}</p>
      <div className='flex flex-col sm:flex-row w-full justify-between items-start sm:items-center'>
        <strong className='text-[#0A1729] text-[15px] sm:text-[20px] mb-[10px]'>{formatNumber(item.price)} usz</strong>
        <div className='flex gap-[10px] w-full sm:w-auto'>
          <Button extraClass='!bg-transparent !p-0 w-[30%] sm:!w-[52px] !h-[52px] border-[1px] border-[#EBEFF3]'> <CompareIcon /> </Button>
          <Button extraClass='hidden sm:flex !w-[52px] !p-0 !h-[52px]'> <SavedIcon /> </Button>
          <Button icon={<SavedIcon />} iconPosition='right' extraClass='sm:hidden !w-[70%] text-[12px] !font-normal !py-[12px]'> {t("basket")} </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard