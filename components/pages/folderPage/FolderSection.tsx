import styled from 'styled-components';
import SearchBar from '@/components/common/SearchBar';
import FolderArea from '@/components/pages/folderPage/FolderArea';

const MainArea = styled.main`
  margin: 0 auto;
  padding: 4rem 3.2rem;
  max-width: 106rem;
`;

const FolderSection = () => (
  <MainArea>
    <SearchBar />
    <FolderArea />
  </MainArea>
);

export default FolderSection;