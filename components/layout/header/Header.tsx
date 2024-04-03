import styles from '@/components/layout/header/Header.module.css';
import { User } from '@/types/api';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import linkbrary from '@/public/assets/linkbrary-logo.svg';

//undefined 생각해보기
function Header({ user }: { user: User | undefined }) {
  const { pathname } = useRouter();
  const headerPosition = pathname === '/folder' ? styles.static : '';

  return (
    <header className={`${styles.headerArea} ${headerPosition}`}>
      <div className={styles.headerGroup}>
        <Link href='/' className={styles.logoArea}>
          <Image
            // src='assets/linkbrary-logo.svg'
            src={linkbrary}
            alt='로고'
            className={styles.logoImg}
            width={133}
            height={24}
          />
        </Link>
        <button className={styles.btnGroup}>
          {user ? (
            <>
              <Image
                src={user.imageSource}
                alt='프로필 사진'
                className={styles.userProfile}
                width={10}
                height={10}
              />
              <span className={styles.userEmail}>{user.email}</span>
            </>
          ) : (
            <a className={styles.btn} href='/signin.html'>
              로그인
            </a>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
