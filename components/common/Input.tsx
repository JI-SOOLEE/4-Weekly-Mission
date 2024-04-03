import Image from 'next/image';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import eyeOn from '@/public/assets/eye-on.svg';
import eyeOff from '@/public/assets/eye-off.svg';
interface FormValue {
  email: string;
  password: string;
}

const Input = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  const [inputType, setInputType] = useState('password');

  const handleInputType = () => {
    setInputType((currentInputType) =>
      currentInputType === 'password' ? 'text' : 'password'
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>이메일</label>
      <input
        type='text'
        {...register('email', {
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}
        placeholder='이메일을 입력해주세요.'
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label>비밀번호</label>
      <input type={inputType} {...register('password', { required: true })} />
      <Image
        onClick={handleInputType}
        src={inputType === 'password' ? eyeOff : eyeOn}
        alt='Toggle Password Visibility'
      />
      <button type='submit'>로그인</button>
    </form>
  );
};

export default Input;
