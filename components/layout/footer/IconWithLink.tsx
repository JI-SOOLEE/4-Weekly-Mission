import styles from '@/components/layout/footer/IconWithLink.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface IconWithLinkProps {
  name: string;
  address: string;
  imgUrl?: string;
}

const IconWithLink = ({ name, address, imgUrl }: IconWithLinkProps) => {
  const target = /^http/.test(address) ? '_blank' : '_self';
  const rel = target === '_blank' ? 'noopener noreferrer' : '';

  return (
    <li>
      <Link href={address} target={target} rel={rel} className={styles.item}>
        {imgUrl ? (
          <Image src={imgUrl} alt={name} width={17} height={17} />
        ) : (
          `${name}`
        )}
      </Link>
    </li>
  );
};

export default IconWithLink;
