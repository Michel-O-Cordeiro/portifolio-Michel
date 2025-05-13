'use client';
import Home from '@/app/components/Home';
import { Hind } from 'next/font/google';
import MySlider from './components/SliderCard';
import AboutMe from './components/AboutMe';
import CallToAction from './components/CallToAction';

const hind = Hind({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export default function App() {
    return (
        <main className='min-h-screen relative'>
            <Home />
            <div
                id='portfolio'
                className='mt-0 pt-5 -mb-40'
                style={{
                    backgroundImage: 'linear-gradient(-62deg, #EEF7FB 0 50%, white 0% 100%)',
                    width: '100%',
                }}
            >
                <div className='container m-auto'>
                    <p
                        className='text-[300px] text-[#F7FBFD] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden'
                        style={{ transform: 'translate(0px, -20px)' }}
                    >
                        Portfólio
                    </p>
                    <div style={{ transform: 'translate(0px, -250px)' }}>
                        <p className='text-[#8234E9] md:pl-[80px] px-5 font-extrabold text-5xl'>Projetos Recentes</p>
                        <p className={`max-w-2xl md:pl-[80px] px-5 text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}>
                            Aqui estão alguns dos meus projetos recentes.
                        </p>
                    </div>
                </div>
                <div style={{ transform: 'translate(0px, -170px)' }}>
                    <MySlider />
                </div>
            </div>
            <AboutMe />
            <CallToAction />
        </main>
    );
}
