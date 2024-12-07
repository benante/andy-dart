import { createClient } from '@/utils/supabase/server';
import Gallery from '../components/Gallery';

export default async function Art_work() {
  const supabase = await createClient();
  const { data: art_work } = await supabase.from('art_work').select();
  console.log(art_work);

  return <Gallery imglist={art_work} />;
}
