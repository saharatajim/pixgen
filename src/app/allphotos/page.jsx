import dns from "node:dns"
dns.setServers(["8.8.8.8","8.8.4.4"])

import Category from "@/components/category";
import PhotoCard from "@/components/PhotoCard";
import { getAllImage } from "@/lib/GetAllPic";


const AllPhotopage = async({searchParams}) => {
    const {category}=await searchParams
    // console.log(category)
    const categoryFill=category?.replace(/\s+/g, '').toLowerCase()

const AllPhoto=await getAllImage()
const filterPhotos=category? AllPhoto.filter(photo=>photo.category.replace(/\s+/g, '').toLowerCase()==categoryFill) :AllPhoto
console.log(filterPhotos)



//  photo.category.replace(/\s+/g, '').toLowerCase())==category.replace(/\s+/g, '').toLowerCase()

    return (
        <div className='max-w-7xl mx-auto'>
            <Category/>
            <h1 className='text-2xl font-bold my-5 text-center '>All Photos</h1>
            <div className='animate__animated animate__pulse 
            animate__slow grid gap-5 grid-cols-3'>
                {
                  filterPhotos.map(photo=>
                    <PhotoCard key={photo.id} photo={photo}/>
                  )  
                }
            </div>
        </div>
    );
};

export default AllPhotopage;