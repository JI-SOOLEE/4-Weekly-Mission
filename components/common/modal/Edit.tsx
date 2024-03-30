import { OnCloseModal } from '@/types/onCloseModal';
import FolderNameInput from '@/components/common/modal/folderNameInput/folderNameInput';
import Frame from '@/components/common/modal/frame/Frame';
import SubmitButton from '@/components/common/modal/submitButton/SubmitButton';
import Title from '@/components/common/modal/title/Title';

interface EditProps extends OnCloseModal {
  selectedFolderName: string;
}

const Edit = ({ onCloseModal, selectedFolderName = '' }: EditProps) => (
  <Frame onCloseModal={onCloseModal}>
    <Title title='폴더 이름 변경' />
    <FolderNameInput folderName={selectedFolderName} />
    <SubmitButton className='gradient' content='변경하기' />
  </Frame>
);

export default Edit;
