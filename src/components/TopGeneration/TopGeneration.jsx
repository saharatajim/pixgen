import { getAllImage } from '@/lib/GetAllPic';
import React from 'react';
import PhotoCard from '../PhotoCard';

const TopGeneration = async() => {
   const AllPhoto=await getAllImage()

   const topPhotos=AllPhoto.slice(0,3)

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold my-5 text-center'>Top Generation</h1>
            <div className='grid gap-5 grid-cols-3'>
                {
                  topPhotos.map(photo=>
                    <PhotoCard key={photo.id} photo={photo}/>
                  )  
                }
            </div>
        </div>
    );
};

export default TopGeneration;