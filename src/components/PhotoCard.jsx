import { Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PhotoCard = ({photo}) => {
    return (
        <div>
             <div className="p-5 max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300
             ">
     <div className='relative aspect-square '>
         <Image 
        fill
        className='object-cover rounded-2xl'
        src={photo.imageUrl}
        alt={photo.title}
        sizes="(max-width:768px)100vw,(max-width:1200px)50vw,30vw,"
      />
     </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{photo.title}</h3>
        <p className="text-sm text-gray-500 mt-1">Category: {photo.category}</p>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            ❤️ <span>{photo.likes} Likes</span>
          </span>
          <span className="flex items-center gap-1">
            ⬇️ <span>{photo.downloads} Downloads</span>
          </span>
        </div>
<Separator orientation='vertical'/>
       <div>
         <button className="mt-5 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        <Link href={`/allphotos/${photo.id}`}>View</Link>
        </button>
       </div>
      </div>
    </div>
        </div>
    );
};

export default PhotoCard;