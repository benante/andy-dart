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
      <main className=" bg-white p-4 lg:grid grid-cols-2  gap-6 h-screen">
        <section className="flex flex-col-reverse justify-between lg:flex-col">
          <FormAdmin></FormAdmin>
          <div className="mt-8">
            <h3>Log out</h3>
            <p>Hello {admin}</p>
            <LogOutBtn></LogOutBtn>
          </div>
        </section>
        <section className="">
          <DeleteDivAdmin art_work={art_work}></DeleteDivAdmin>
        </section>
      </main>
    </>
  );
}
