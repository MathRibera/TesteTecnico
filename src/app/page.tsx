import Login from '@/Components/Login';
import Social from '@/Components/Social';

export default function Home() {
  return (
    <main
      className='w-full h-screen flex flex-col items-center justify-center gap-4'
    >
      <section
        className='w-[375px] md:w-[490px] h-[80px] flex items-center justify-center'
      >
        <div>
          <h1
            className='text-4xl font-bold'
          >Sign in</h1>
        </div>
      </section>
      <Login />
      <Social text='Entrar'/>
    </main>
  );
}
