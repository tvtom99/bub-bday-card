import Image from "next/image";
import { Edu_VIC_WA_NT_Beginner, Qwitcher_Grypen } from 'next/font/google'

const eduFont = Edu_VIC_WA_NT_Beginner({ subsets: ['latin'] })
const qwitch = Qwitcher_Grypen({ weight: ["400", "700"], subsets: ['latin'] })

// Log the fonts in console so they actually are used lol
console.log(eduFont, qwitch)

export default function Home() {
  return (
    <main className='bg-gradient-to-b from-[#fff5fa] via-[#F7ACD4] to-[#fff5fa] flex flex-col items-center pb-24 font-[eduFont] scroll-smooth text-black'>
      {/* Top Section */}
      <div className='flex flex-col items-center min-h-screen justify-center gap-14 w-full'>
        <div className="w-[400px] h-[400px] bg-zinc-300 rounded-full shadow-lg overflow-hidden border-2 border-pink-300">
          <Image src='/one.jpg' alt='Really REALLY cute bubs' width='1000' height='1000' />
        </div>
        <div className="font-bold text-6xl text-center flex flex-col md:flex-row gap-4 md:gap-0">
          <p>Happy Birthday, Shabah!</p> 
          <p>🎈</p>
        </div>
      </div>

      {/* Blank Space */}
      <div className="w-full min-h-[250px] flex justify-center items-center">
        <div className='mx-28 w-full h-[8px] bg-white' />
      </div>


      {/* Card Section */}
      <div className='flex flex-col gap-24 italic font-[qwitch]'>
        <div className='flex flex-col md:flex-row gap-24 items-center justify-center'>
          <div className="md:w-[30%] max-w-[70%] flex flex-col gap-6 text-3xl">
            <p className="font-bold">
              Dear Shabah,
            </p>
            <p>
              Happy Birthday! I can’t believe this is another year done already.
              Every year, I have the privilege of seeing you grow. And this year - more than ever - you have truly shown yourself just how much you are capable of!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className='w-[300px] h-[200px] md:w-[600px] md:h-[400px] bg-zinc-300 rounded-lg overflow-hidden border-2 border-pink-300 shadow-xl'>
              <div className='-translate-y-[20%]'>
                <Image src='/20240214_183228.jpg' alt='Cute cutie at cute cafe' width='3000' height='3600' />
              </div>
            </div>
            <p className='text-xl bg-black/5 px-4'>Big smiles! <span className="not-italic">😁</span></p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-24 items-center justify-center '>
          <div className='md:order-1 order-2 flex flex-col items-center'>
            <div className='w-[300px] h-[200px] md:w-[600px] md:h-[400px] bg-zinc-300 rounded-lg overflow-hidden border-2 border-pink-300 shadow-xl'>
              <div className='w-[400px] md:w-[800px] -translate-x-[15%]'>
                <Image src='/20240616_120248.jpg' alt='Really REALLY cute bubs' width='2000' height='2000' />
              </div>
            </div>
            <p className='text-xl bg-black/5 px-4'>Bubby secrets were whispered here <span className="not-italic">😲</span></p>
          </div>
          <div className="order-1 md:w-[30%] max-w-[70%] flex flex-col gap-6 text-3xl">
            <p>
              You have worked so hard and achieved so much (Masters, PhD, tutoring, moving out, wow!). You will always be my inspiration. It’s been so amazing to spend this time with you. I feel so lucky!
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-24 items-center justify-center'>
          <div className="md:w-[30%] max-w-[70%] flex flex-col gap-6 text-3xl">
            <p>
              You have fostered and demonstrated your strengths constantly, being a role-model for everyone in your life. Your contagious smile and beautiful personality make you the highlight of any room you’re in.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className='w-[300px] h-[200px] md:w-[600px] md:h-[400px] bg-zinc-300 rounded-lg overflow-hidden border-2 border-pink-300 shadow-xl'>
              <Image src='/20240810_125754.jpg' alt='Really REALLY cute bubs' width='1560' height='4000' className='-translate-y-[17%]' />
            </div>
            <p className='text-sm md:text-xl bg-black/5 px-4'>With that smile, not even the camera could focus on the alpaca <span className="not-italic">🦙</span></p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-24 items-center justify-center'>
          <div className="md:order-1 order-2 flex flex-col items-center">
            <div className='w-[300px] h-[200px] md:w-[600px] md:h-[400px] bg-zinc-300 rounded-lg overflow-hidden border-2 border-pink-300 shadow-xl'>
              <div className='w-[325px] md:w-[650px]'>
                <Image src='/20240505_193644.jpg' alt='Really REALLY cute bubs' width='2736' height='2736' className='-translate-y-[19%] -translate-x-[7%]' />
              </div>
            </div>
            <p className='text-xl bg-black/5 px-4'>My forhead is gone, but you are so cute <span className="not-italic">😍</span></p>
          </div>
          <div className="order-1 md:w-[30%] max-w-[70%] flex flex-col gap-6 text-3xl">
            <p>
              I hope you have a wonderful birthday and get spoilt like you should! I can’t wait for many, many more years spent together.
            </p>
            <p className="font-bold">
              Love Tom xx
            </p>
          </div>
        </div>
      </div>

      {/* Blank Space */}
      <div className="w-full min-h-[250px] flex justify-center items-center">
        <div className='mx-28 w-full h-[8px] bg-white' />
      </div>

      {/* Wonderful List For Bub */}
      <div className='flex md:flex-row flex-col md:max-w-full max-w-[70%] justify-center items-center md:pb-14 gap-10'>
        <div className='flex flex-col items-center justify-center gap-10 '>
          <h1 className="font-bold text-4xl">
            Wonderful List Of Why Bubby Is So Amazing:
          </h1>
          <ul className="text-3xl font-thin list-disc italic font-[qwitch]">
            <li>She is friendly, kind and thoughtful.</li>
            <li>She is the smartest person I know.</li>
            <li>She always thinks of others before herself (to a fault!).</li>
            <li>She loves helping people whenever she can.</li>
            <li>Her smile is the most beautiful thing in the world.</li>
            <li>She has the best sense of fashion.</li>
            <li>Her cooking skills are second to none!</li>
            <li>The way she giggles when making cheeky jokes melts my heart.</li>
            <li>She is so funny, I get a sore stomach from laughing so much with her.</li>
            <li>She is the most hard-working, disciplined person I know. </li>
            <li>This list will get too long if I keep going... But ask me any time for more xx</li>
          </ul>
        </div>
        <div className='flex flex-col items-center'>
          <div className='h-[400px] w-[300px] rounded-lg bg-zinc-300 overflow-hidden border-2 border-pink-200 shadow-xl'>
            <Image src='/20240605_182716.jpg' alt='Very cute cutie eaten cute tacos' width='1560' height='4000' className="-translate-y-[30%]" />
          </div>
          <p className='text-xl bg-black/5 px-4 italic font-[qwitch]'>Taco Tuesday <span className="not-italic">🌮</span></p>
        </div>
      </div>

    </main>
  );
}
