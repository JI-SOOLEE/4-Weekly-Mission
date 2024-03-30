import { useState } from 'react';
import FolderListArea from '@/components/pages/folderPage/FolderListArea';
import LinkList from '@/components/pages/folderPage/LinkList';
import { totalFolderId } from '@/util/constants';

const FolderArea = () => {
  const [selectedFolderId, setSelectedFolderId] = useState(totalFolderId);

  const handleFolderNameClick = (id: string | number) => {
    setSelectedFolderId(id);
  };

  return (
    <>
      <FolderListArea
        selectedFolderId={selectedFolderId}
        onFolderNameClick={handleFolderNameClick}
      />
      <LinkList selectedFolderId={selectedFolderId} />
    </>
  );
};

export default FolderArea;
