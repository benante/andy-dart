import { createClient } from "./client"

const supabase = createClient()

// STORAGE BUCKET
export const uploadStorage = async (imgFile: File ) => {
    console.log("upload in progress....")
    const { data, error } = await supabase
      .storage
      .from('art_work_imgs')
      .upload(`${imgFile.name}`, imgFile, {
        cacheControl: '3600',
        upsert: false
      })
    try {
        console.log(data)
    }
    catch {
        console.log(error)
    }
    
}

export const retrieveUrl = async (imgName: string) => {
  const {data } = supabase
  .storage
  .from('art_work_imgs')
  .getPublicUrl(`${imgName}`)
  
  const publicUrl = data.publicUrl
  return publicUrl
}

export const deleteBucketRow = async (filePath: string) => {
  const { data, error } = await supabase
  .storage
  .from('art_work_imgs')
  .remove([filePath])
  if (error) {
    console.error("Error deleting file:", error.message);
  } else {
    console.log("Delete file:", data);
  }

}

// ART_WORK
// schema: name / size / url / alt

type PaintingData = {
  name: string, size: string, url: string, alt: string , imgFileName: string
}

export const uploadInfo = async ( paintingData: PaintingData ) => {
  const { error } = await supabase
  .from('art_work')
  .insert({ name: `${paintingData.name}`, size: `${paintingData.size}`, url: `${paintingData.url}` , alt: `${paintingData.name} painting`, imgFileName: `${paintingData.imgFileName}` })
  if(error) console.log(error)

} 

export const deleteInfo = async (id: string) => {
  const response = await supabase
  .from('art_work')
  .delete()
  .eq('id', id)
}