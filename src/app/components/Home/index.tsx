import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Hind } from 'next/font/google';

const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function Home() {
  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage: 'linear-gradient(62deg, #EEF7FB 0 50%, #9152e2 0% 100%)',
          minHeight: '500px',
          maxHeight: '1200px',
          height: '100%',
          width: '100%',
        }}
      >
        <div className="container m-auto">
          <div className="grid grid-cols-12">
            <div className="bg-white flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent">
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
                  <p className={`text-[#934eee text-3xl md:text-base lg:text-2xl ${hind.className}`}>
                    Olá!
                  </p>
                  <h1 className="text-[#223740] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">
                    Sou o Michel
                  </h1>
                  <h2 className={`text-[#223740] py-2 font-bold uppercase md:text-xl ${hind.className}`}>
                    Desenvolvedor front-end & Mobile
                  </h2>
                  <a
                    href="/#portfolio"
                    className={`inline-block bg-[#934eee] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#223740] hover:shadow-lg transform hover:translate-y-1 cursor-pointer ${hind.className}`}
                  >
                    Portfólio
                  </a>
                  {/* // #47AEDE dsadsad */}
                  <a
                    href="/Currículo - Michel.pdf"
                    download="Currículo - Michel.pdf"
                    className={`ml-10 inline-block bg-[#223740] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#223740] hover:shadow-lg transform hover:translate-y-1 cursor-pointer ${hind.className}`}
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-[50px] md:pt-[130px] md:bg-transparent bg-[#d9eef7] md:col-span-7">
              <div className="container m-auto">
                <img src="/profile.png" decoding="async" alt="profile"  style={{ opacity: 0 }}/>
              </div>
            </div>
          </div>
          <div className="container m-auto absolute">
            <div className="px-3">
              <div
                className="relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow-auto mx-auto bg-white rounded-2xl z-20"
                style={{
                  boxShadow: '#8234E9 -10px 25px 50px 10px',
                }}
              >
                <div className="lg:py-10 md:py-6 sm:py-6 cursor-all-scroll">
                  <Swiper spaceBetween={10} slidesPerView={3} loop={true} autoplay={{ delay: 3000 }}>
                    <SwiperSlide>
                      <img src="/nextjs.png" alt="nextjs" className="h-12 ml-2" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/nodejs.png" alt="nodejs" className="h-12 ml-2" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}