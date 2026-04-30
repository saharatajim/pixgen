import { getCategory } from '@/lib/GetAllPic';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async() => {
const categoryList=await getCategory()

    return (
        <div className='max-w-7xl mx-auto grid grid-cols-7 justify-center items-center gap-4 m-10'>
            {
              categoryList.map(category=>
              <Button key={category.id}>

                <Link href={`/allphotos?category=${category.name.replace(/\s+/g, '').toLowerCase()}`}>{category.name}</Link>
            
               
              </Button>)
            }
        </div>
    );
};

export default Category;