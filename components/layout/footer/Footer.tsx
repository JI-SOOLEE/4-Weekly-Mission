import styles from '@/components/layout/footer/Footer.module.css';
import IconWithLink from '@/components/layout/footer/IconWithLink';
// import facebookIcon from '@/assets/facebook.svg';
// import twitterIcon from '@/assets/twitter.svg';
// import youtubeIcon from '@/assets/youtube.svg';
// import instagramIcon from '@/assets/instagram.svg';

const SNS_ITEMS = [
  {
    name: 'facebook',
    address: 'https://www.facebook.com/',
    imgUrl: '/assets/facebook.svg',
    //기존 react에서 사용하던 이미지를 import해오던 방식이 적용이 안돼서 경로를 직접 넣어줬는데 왜 import 방식이 안되는지 이유를 모르겠습니다...
  },
  {
    name: 'twitter',
    address: 'https://twitter.com/',
    imgUrl: '/assets/twitter.svg',
  },
  {
    name: 'youtube',
    address: 'https://www.youtube.com/',
    imgUrl: '/assets/youtube.svg',
  },
  {
    name: 'instagram',
    address: 'https://www.instagram.com/',
    imgUrl: '/assets/instagram.svg',
  },
];

const LINK_ITEMS = [
  {
    name: 'Privacy Policy',
    address: '/privacy',
  },
  {
    name: 'FAQ',
    address: '/faq',
  },
];

function Footer() {
  return (
    <footer className={styles.footerArea}>
      <div className={styles.footerGroup}>
        <span className={styles.copyright}>©codeit - 2023</span>
        <ul className={styles.linkList}>
          {LINK_ITEMS.map(({ name, address }) => (
            <IconWithLink key={name} name={name} address={address} />
          ))}
        </ul>
        <ul className={styles.snsList}>
          {SNS_ITEMS.map(({ name, address, imgUrl }) => (
            <IconWithLink
              key={name}
              name={name}
              address={address}
              imgUrl={imgUrl}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
