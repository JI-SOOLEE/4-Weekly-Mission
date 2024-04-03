import { OnCloseModal } from '@/types/onCloseModal';
import FolderNameInput from '@/components/common/modal/folderNameInput/folderNameInput';
import Frame from '@/components/common/modal/frame/Frame';
import SubmitButton from '@/components/common/modal/submitButton/SubmitButton';
import Title from '@/components/common/modal/title/Title';

const AddFolder = ({ onCloseModal }: OnCloseModal) => (
  <Frame onCloseModal={onCloseModal}>
    <Title title='폴더 추가' />
    <FolderNameInput />
    <SubmitButton className='gradient' content='추가하기' />
  </Frame>
);

export default AddFolder;
