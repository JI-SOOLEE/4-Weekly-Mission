import { PropsWithChildren, useEffect, useState } from 'react';
import { getUser } from '@/apis/api';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import { SystemError } from '@/types/err';
import { User } from '@/types/api';

function Layout({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>();

  const handleUserLoad = async () => {
    try {
      const user = await getUser();

      setUser(user);
    } catch (error) {
      const err = error as SystemError;
      console.log(err.message);
    }
  };

  useEffect(() => {
    handleUserLoad();
  }, []);

  return (
    <>
      <Header user={user} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
