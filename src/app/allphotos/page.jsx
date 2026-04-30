import PhotoCard from "@/components/PhotoCard";
import { getAllImage } from "@/lib/GetAllPic";


const AllPhotopage = async() => {
const AllPhoto=await getAllImage()

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold my-5 text-center '>All Photos</h1>
            <div className='grid gap-5 grid-cols-3'>
                {
                  AllPhoto.map(photo=>
                    <PhotoCard key={photo.id} photo={photo}/>
                  )  
                }
            </div>
        </div>
    );
};

export default AllPhotopage;