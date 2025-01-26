import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import LogOutBtn from '../../components/LogOutBtn';
import FormAdmin from '@/app/components/FormAdmin';

export default async function AdminPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const admin = data.user.user_metadata.full_name;

  return (
    <>
      <main className="grid bg-white py-5 justify-center">
        <p>Hello {admin}</p>
        <LogOutBtn></LogOutBtn>
        <FormAdmin></FormAdmin>
      </main>
    </>
  );
}
