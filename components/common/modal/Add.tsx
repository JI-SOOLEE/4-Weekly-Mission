import { useContext } from 'react';
import Frame from '@/components/common/modal/frame/Frame';
import Title from '@/components/common/modal/title/Title';
import SubmitButton from '@/components/common/modal/submitButton/SubmitButton';
import styles from '@/components/common/modal/Add.module.css';
import { FoldersContext } from '@/components/context/foldersContext';
import { OnCloseModal } from '@/types/onCloseModal';

interface AddProps extends OnCloseModal {
  link: string;
}

const Add = ({ link, onCloseModal }: AddProps) => {
  const folders = useContext(FoldersContext);

  return (
    <Frame onCloseModal={onCloseModal}>
      <Title title='폴더에 추가' content={link} />
      <ul className={styles.optionList}>
        {folders.map(({ id, name, link: { count } }) => (
          <li className={styles.optionName} key={id}>
            <input
              type='radio'
              id={String(id)}
              name='folder'
              value={name}
              className={styles.inputRadio}
            />
            <label className={styles.label} htmlFor={String(id)}>
              <div className={styles.folderInfo}>
                <span className={styles.folderName}>{name}</span>
                <span className={styles.linkCount}>{count}개 링크</span>
              </div>
              <span className={styles.icon} />
            </label>
          </li>
        ))}
      </ul>
      <SubmitButton className='gradient' content='추가하기' />
    </Frame>
  );
};

export default Add;
