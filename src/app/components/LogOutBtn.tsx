'use client';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

const logOut = async () => {
  const supabase = createClient();
  // When the user signs out, Supabase revokes the refresh token and deletes the JWT from the client-side
  const { error } = await supabase.auth.signOut();
  console.log(`An error occured while loggin out: ${error}`);
};

function LogOutBtn() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    logOut();
    setTimeout(() => {
      router.push('/login');
    }, 1000);
  };

  return (
    <Button
      className="max-w-fit"
      variant="outline-danger"
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? 'Loading…' : 'Log Out'}
    </Button>
  );
}

export default LogOutBtn;
