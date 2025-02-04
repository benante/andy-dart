import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import LogOutBtn from '../../components/LogOutBtn';
import FormAdmin from '@/app/components/FormAdmin';
import DeleteDivAdmin from '@/app/components/DeleteAdmin';

export default async function AdminPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }
  const admin = data.user.user_metadata.full_name;

  const { data: art_work } = await supabase.from('art_work').select();
  if (!art_work) return <p>Cards preview not retrieved</p>;

  return (
    <>
      <main className="grid bg-white py-5 justify-center">
        <p>Hello {admin}</p>
        <LogOutBtn></LogOutBtn>
        <FormAdmin></FormAdmin>
        <DeleteDivAdmin art_work={art_work}></DeleteDivAdmin>
      </main>
    </>
  );
}
