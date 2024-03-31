import { useForm } from 'react-hook-form';

interface FormValue {
  email: string;
  password: string;
}

const Input = () => {
  const { register, handleSubmit } = useForm<FormValue>();

  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>이메일</label>
      <input
        type='email'
        {...register('email', { required: true })}
        placeholder='내용 입력'
      />
      <label>비밀번호</label>
      <input type='password' {...register('password', { required: true })} />
      <button type='submit'>로그인</button>
    </form>
  );
};

export default Input;
