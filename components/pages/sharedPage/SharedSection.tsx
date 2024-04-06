import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSampleFolder } from '@/apis/api';
import SearchBar from '@/components/common/SearchBar';
import FolderList from '@/components/pages/sharedPage/FolderList';

const SharedArea = styled.section`
  margin: 0 auto;
  padding: 4rem 0;
  max-width: 112.4rem;

  @media (max-width: 1199px) {
    padding: 4rem 3.2rem;
  }

  @media (max-width: 767px) {
    padding: 2rem 3.2rem;
  }
`;

const SharedSection = () => {
  const [folderList, setFolderList] = useState([]);

  const fetchFolder = async () => {
    try {
      const {
        folder: { links },
      } = await getSampleFolder();
      setFolderList(links);
    } catch (error) {
      const err = error as Error;
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchFolder();
  }, []);

  return (
    <SharedArea>
      <SearchBar />
      <FolderList folderList={folderList} />
    </SharedArea>
  );
};

export default SharedSection;
