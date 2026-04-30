import { getAllImage } from "@/lib/GetAllPic";
import Image from "next/image";
import Link from "next/link";

const PhotoDetailsPage = async({params}) => {
    const {id}=await params
    const AllPhoto=await getAllImage()
    const SelectedDetailPhoto=AllPhoto.find(p=>p.id==id)
    console.log(id,"params")
    console.log(AllPhoto)
    console.log(SelectedDetailPhoto)
    return (
        <div>
              
               <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-2xl font-bold text-gray-800">{SelectedDetailPhoto.title}</h1>
      <div className="relative aspect-square">
        <Image src={SelectedDetailPhoto.imageUrl}
      fill

      alt={SelectedDetailPhoto.id}
      className="object-cover"/>
      </div>
      
      <p className="mt-4 text-gray-600">
        {SelectedDetailPhoto.prompt}
      </p>

      <div className="mt-6">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          <Link href={'/allphotos'}>Back</Link>
        </button>
      </div>
    </div>

        </div>
    );
};

export default PhotoDetailsPage;