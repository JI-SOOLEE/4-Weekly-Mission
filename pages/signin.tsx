import Input from '@/components/common/form/Form';
import Link from 'next/link';
import Image from 'next/image';
import linkbrary from '@/public/assets/linkbrary-logo.svg';

const SignIn = () => {
  return (
    <>
      <Link href='/'>
        <Image
          // src='assets/linkbrary-logo.svg'
          src={linkbrary}
          alt='로고'
          width={133}
          height={24}
        />
      </Link>
      <h2>회원이 아니신가요?</h2>
      <Link href='/signup'>회원 가입하기</Link>
      <Input />
    </>
  );
};

export default SignIn;
