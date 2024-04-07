import { PropsWithChildren, useEffect, useState } from 'react';
import { getUserById } from '@/apis/api';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import { User } from '@/types/api';

function Layout({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>();

  const handleUserLoad = async () => {
    try {
      const user = await getUserById();

      setUser(user);
    } catch (error) {
      const err = error as Error;
      console.error(err.message);
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
