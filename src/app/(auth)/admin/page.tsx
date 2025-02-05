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
  console.log(art_work);

  return (
    <>
      <main className=" bg-white ">
        <section>
          <p>Hello {admin}</p>
          <LogOutBtn></LogOutBtn>
        </section>
        <section className="p-2">
          <h3>Upload</h3>
          <FormAdmin></FormAdmin>
        </section>
        <section className="p-2">
          <h3>Delete</h3>
          <DeleteDivAdmin art_work={art_work}></DeleteDivAdmin>
        </section>
      </main>
    </>
  );
}
