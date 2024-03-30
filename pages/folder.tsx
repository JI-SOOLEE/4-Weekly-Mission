import { useEffect, useState } from 'react';
import { getUserFolders } from '@/apis/api';
import FolderSection from '@/components/pages/folderPage/FolderSection';
import AddLinkArea from '@/components/pages/folderPage/AddLinkArea';
import { FoldersContext } from '@/components/context/foldersContext';
import { Folder } from '@/types/api';
import Layout from '@/components/layout/Layout';

const FolderPage = () => {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const handleFolderLoad = async () => {
      try {
        const folders = await getUserFolders();
        setFolders(folders);
      } catch {
        setFolders([]);
      }
    };

    handleFolderLoad();
  }, []);

  return (
    <Layout>
      <FoldersContext.Provider value={folders}>
        <AddLinkArea />
        <FolderSection />
      </FoldersContext.Provider>
    </Layout>
  );
};

export default FolderPage;
