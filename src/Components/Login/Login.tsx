import Link from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <section className='md:w-[490px] w-[375px] h-[264px] gap-4 ml-2 mr-2 p-4 border-1 border-solid border-gray-300 rounded-4px flex flex-col justify-between bg-accent-white'>
      <div className='flex flex-col gap-4 w-full h-96px'>
        <input
          type='text'
          placeholder='Username'
          className="w-full [border:none] [outline:none] bg-background-bg-background h-10 flex-1 rounded-radius-rounded-md overflow-hidden flex flex-row items-center justify-start py-2.5 px-3 box-border font-inter text-sm text-text-text-muted-foreground min-w-[153px]"
        />
        <input
          type='text'
          className="w-full [border:none] [outline:none] bg-background-bg-background h-10 flex-1 rounded-radius-rounded-md overflow-hidden flex flex-row items-center justify-start py-2.5 px-3 box-border font-inter text-sm text-text-text-muted-foreground min-w-[153px]"
          placeholder='Password'
        />
      </div>
      <div className='flex gap-4 w-full h-48px items-center justify-between'>
        <label className='flex gap-1 items-center'>
          <input
            type='checkbox'
            className='w-[16px] h-[16px] border-1 border-solid border-gray-300 rounded-4px accent-white'
          />
          Lembrar me
        </label>
        <Link href='/forgot-password'>
          <strong>Esqueceu a senha?</strong>
        </Link>
      </div>
      <div className='w-full h-48px'>
        <button className='w-full h-[40px] cursor-pointer [border:none] py-2.5 px-5 bg-main-orange self-stretch rounded-radius-rounded-md flex flex-row items-center justify-center gap-[8px] text-white font-bold'>
          ENTRAR
        </button>
      </div>
      <div className='flex justify-center'>
        <p>
          Não tem uma conta?{' '}
          <strong>
            <Link href='/signup'>Cadastre-se</Link>
          </strong>
        </p>
      </div>
    </section>
  );
}
