import styles from '@/components/common/modal/shareBtn/ShareBtn.module.css';
import Image from 'next/image';

interface ShareBtnProps {
  name?: string;
  imgUrl: string;
  backgroundColor?: string;
}

const ShareBtn = ({ name, imgUrl, backgroundColor = '' }: ShareBtnProps) => (
  <div className={styles.btnShare}>
    <div
      className={`${styles.icon} ${
        backgroundColor ? styles[backgroundColor] : ''
      }`}
    >
      <Image src={imgUrl} alt={`${name} 로고`} className={styles.img} fill />
    </div>
    <span className={styles.name}>{name}</span>
  </div>
);

export default ShareBtn;
