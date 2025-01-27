import { createClient } from "./client"

const supabase = createClient()


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


// art_work schema: name / size / url / alt