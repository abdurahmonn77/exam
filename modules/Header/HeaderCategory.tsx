"use client"
import HeaderCategorySkleton from '@/components/HeaderCategorySkleton'
import { Link } from '@/i18n/navigation'
import getCategory from '@/service/getCategory'
import { CategoryType } from '@/types/HeaderType'
import React from 'react'

const HeaderCategory = () => {
    const {data:categoryList, isLoading} = getCategory()
    
  return (
    <div className='containers !mt-[20px] hidden header-category sm:flex items-center justify-between'>
        {isLoading ? <HeaderCategorySkleton/> : categoryList.map((item:CategoryType) => <Link className='text-[#545D6A] text-[16px]' key={item.id} href={`#`}>{item.name}</Link>)} 
    </div>
  )
}

export default HeaderCategory