import { createClient } from '@/utils/supabase/server';

export default async function Art_work() {
  const supabase = await createClient();
  const { data: art_work } = await supabase.from('art_work').select();

  return <pre>{JSON.stringify(art_work, null, 2)}</pre>;
}
