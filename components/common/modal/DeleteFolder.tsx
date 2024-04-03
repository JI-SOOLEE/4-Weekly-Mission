import Title from '@/components/common/modal/title/Title';
import Frame from '@/components/common/modal/frame/Frame';
import SubmitButton from '@/components/common/modal/submitButton/SubmitButton';
import { OnCloseModal } from '@/types/onCloseModal';

interface DeleteFolderProps extends OnCloseModal {
  selectedFolderName: string;
}

const DeleteFolder = ({
  selectedFolderName,
  onCloseModal,
}: DeleteFolderProps) => (
  <Frame onCloseModal={onCloseModal}>
    <Title title='폴더삭제' content={selectedFolderName} />
    <SubmitButton className='red' content='삭제하기' />
  </Frame>
);

export default DeleteFolder;
