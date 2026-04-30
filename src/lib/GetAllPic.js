export const getAllImage=async()=>{
     const res=await fetch("https://pix-gen-project.vercel.app/data.json")
    const allImage=await res.json()
    return(allImage)
}
export const getCategory=async()=>{
     const res=await fetch("https://pix-gen-project.vercel.app/category.json")
    const allCategory=await res.json()
    return(allCategory)
}