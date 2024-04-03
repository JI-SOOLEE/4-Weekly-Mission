import { OnCloseModal } from '@/types/onCloseModal';
import Frame from '@/components/common/modal/frame/Frame';
import SubmitButton from '@/components/common/modal/submitButton/SubmitButton';
import Title from '@/components/common/modal/title/Title';

interface DeleteLinkProps extends OnCloseModal {
  link: string;
}

const DeleteLink = ({ link, onCloseModal }: DeleteLinkProps) => (
  <Frame onCloseModal={onCloseModal}>
    <Title title='링크 삭제' content={link} />
    <SubmitButton className='red' content='삭제하기' />
  </Frame>
);

export default DeleteLink;
