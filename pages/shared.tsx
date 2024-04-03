import { useEffect, useState } from 'react';
import { getSampleFolder } from '@/apis/api';
import UserFolderNameArea from '@/components/pages/sharedPage/UserFolderNameArea';
import SharedSection from '@/components/pages/sharedPage/SharedSection';
import { SystemError } from '@/types/err';
import Layout from '@/components/layout/Layout';

function SharedPage() {
  const [folderName, setFolderName] = useState('');
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const handleFolderLoad = async () => {
    try {
      const {
        folder: { name, owner },
      } = await getSampleFolder();

      setFolderName(name);
      setUserName(owner.name);
      setProfileImage(owner.profileImageSource);
    } catch (error) {
      const err = error as SystemError;
      console.error(err.message);
    }
  };

  useEffect(() => {
    handleFolderLoad();
  }, []);

  return (
    <>
      <Layout>
        <UserFolderNameArea
          folderName={folderName}
          userName={userName}
          imgSrc={profileImage}
        />
        <SharedSection />
      </Layout>
    </>
  );
}

export default SharedPage;
