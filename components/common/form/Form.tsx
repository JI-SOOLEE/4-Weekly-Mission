import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import eyeOn from '@/public/assets/eye-on.svg';
import eyeOff from '@/public/assets/eye-off.svg';
import Styles from '@/components/common/form/Form.module.css';

interface FormValue {
  email: string;
  password: string;
}

const Input = () => {
  const {
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
    <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={Styles.inputGroup}>
        <label className={Styles.inputName}>이메일</label>
        <input
          className={Styles.emailInput}
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
      </div>

      <div className={`${Styles.inputGroup} ${Styles.pwGroup}`}>
        <label className={Styles.inputName}>비밀번호</label>
        <input
          className={Styles.pwInput}
          type={inputType}
          {...register('password', { required: true })}
          placeholder='비밀번호를 입력해주세요.'
        />
        <Image
          className={Styles.eye}
          onClick={handleInputType}
          src={inputType === 'password' ? eyeOff : eyeOn}
          alt='Toggle Password Visibility'
        />
      </div>

      <button className={Styles.loginBtn} type='submit'>
        로그인
      </button>
    </form>
  );
};

export default Input;
