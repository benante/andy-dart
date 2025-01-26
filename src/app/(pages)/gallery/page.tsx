import { createClient } from '@/utils/supabase/server';
import Gallery from '../../components/Gallery';

export default async function Art_work() {
  const supabase = await createClient();
  const { data: art_work } = await supabase.from('art_work').select();

  if (!art_work)
    return (
      <p className="text-center mt-20">
        Failed to retrieve images from the database (Supabase). Please try again
        later.
      </p>
    );

  console.log(art_work);

  return <Gallery imglist={art_work} />;
}
