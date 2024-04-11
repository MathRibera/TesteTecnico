import Social from '@/Components/Social';
import Infos from '@/Components/Infos';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-[full] max-w-full overflow-hidden flex flex-col items-center justify-start pt-[199.5px] pb-[215.5px] pr-[21px] pl-5 box-border gap-[40px] leading-[normal] tracking-[normal] text-center text-[60px] text-black font-inter mq450:gap-[35px] mq675:gap-[70px]'>
      <h1 className='m-0 w-[491px] text-4xl relative text-inherit font-inherit inline-block font-bold'>
        Sign up
      </h1>
      <div className='w-[491px] hidden max-w-full' />
      <div className='w-[490px] flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-[16px] mq675:gap-[16px]'>
        <form className='m-0 self-stretch flex flex-col items-center justify-center gap-[16px] max-w-full'>

          <Infos />
        </form>
        <Social text='Registrar' />
        <div className='self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full'>
          <div className='self-stretch h-0 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full'>
            <div className='h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-aliceblue' />
          </div>
          <div className='self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5'>
            <div className='relative leading-[16px]'>
              <span>Já tem uma conta?</span>
              <Link href='/'>
                {' '}
                <strong>Entrar</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
