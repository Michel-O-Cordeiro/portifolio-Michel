'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Hind } from 'next/font/google';
import Image from 'next/image';

const hind = Hind({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export default function PortfolioDetailDesign({ data, id, DataArray }: any) {
    const router = useRouter();

    const [next, setNext] = useState<number>(id);
    const [prev, setPrev] = useState<number>(id);

    useEffect(() => {
        if (JSON.parse(id) === DataArray.length - 1) {
            setNext(0);
        } else {
            setNext(JSON.parse(id) + 1);
        }
        if (JSON.parse(id) === DataArray.length - 1) {
            setPrev(DataArray.length - 2);
        } else if (JSON.parse(id) === 0) {
            setPrev(DataArray.length - 1);
        } else {
            setPrev(JSON.parse(id) - 1);
        }
    }, [setPrev, setNext, id, DataArray]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <React.Fragment>
            <div className='overlay h-[400px] lg:top-[96px] sm:top-0 z-20 border-t border-gray-300' />
            <div className='relative'>
                <img
                    src={data?.images[0]}
                    alt='bg photo'
                    className='h-[150px] lg:mt-24 sm:mt-0 object-fill'
                    style={{ backgroundSize: 'cover' }}
                    width={'100%'}
                />
            </div>

            <div className='absolute z-30 top-[42px] sm:top-[200px] sm:left-[65px] justify-center items-center w-full px-10 sm:w-3/4 xl:w-1/2 sm:px-0 sm:text-left'>
                <div className='container m-auto'>
                    <div className='max-w-[650px] w-[100%] m-auto'>
                        <p className='opacity-3 sm:text-left text-center font-sans text-[#223740] mb-3'>Projeto</p>
                        <h1 className='opacity-3 text-[#223740] sm:text-left text-center w-full sm:w-3/4 font-recoletaBold text-4xl md:text-4xl lg:text-4xl xl:text-4xl'>
                            {data?.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div
                className='grid grid-cols-12 relative space-x-0 lg:space-x-8'
                style={{
                    background: 'linear-gradient(90deg, rgba(238, 247, 251, 1) 58%, rgba(255, 255, 255, 1) 52%)',
                }}
            >
                <div className='col-span-12 lg:col-span-8 mb-20 scrol lg:px-0 sm:px-20'>
                    {data.images.map((item: any, index: number) => (
                        <div key={index.toString()} className='flex justify-center lg:justify-end items-center'>
                            <Image src={item} alt='porfolio photos' width={800} quality={100} className='mt-20 z-30 rounded-lg' />
                        </div>
                    ))}
                </div>

                <div className='col-span-12 lg:col-span-4 lg:px-0 sm:px-0 z-30'>
                    <div className='mt-10 sm:mt-24 w-full lg:max-w-[300px] lg:px-1 px-3 sticky top-36 pb-14'>
                        <h1 className='text-3xl mb-4 text-[#8234E9]'>{data?.name}</h1>
                        <p className='text-[14px] font-sans mb-4 text-[#223740]'>{data?.description}</p>
                        <p id='highlight' className='my-2 text-dark text-[20px] font-sans'>
                            Tecnologias aplicadas
                        </p>
                        {/* <p className='text-[14px] font-sans mb-4 text-[#223740]'>{data?.complement}</p> */}
                        <div className='flex flex-wrap'>
                            {data?.complement.map((item: any, index: number) => (
                                <h1
                                    key={index.toString()}
                                    className='mr-5 text-[14px] bg-[#63C5F1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]'
                                >
                                    {item}
                                </h1>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative flex bg-accent-color h-48 text-white'>
                <div
                    className={`group w-1/2 flex items-center justify-center bg-cover ${hind.className}`}
                    style={{
                        backgroundImage: `url(${DataArray[prev]?.images[0]})`,
                    }}
                >
                    <a
                        className='flex justify-center group:hover:bg-[#223740] cursor-pointer transition-colors duration-300 bg-[#405B66] bg-opacity-90 items-center w-full h-full'
                        onClick={() => router.push(`/portfolio-detail/${prev}`)}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            aria-hidden='true'
                            className='transform transition-transform group-hover:-translate-x-3 duration-300 w-5 h-5 mr-2'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' d='M7 16l-4-4m0 0l4-4m-4 4h18'></path>
                        </svg>
                        Anterior
                    </a>
                </div>

                <div
                    className={`group w-1/2 flex items-center justify-center bg-cover ${hind.className}`}
                    style={{
                        backgroundImage: `url(${DataArray[next]?.images[0]})`,
                    }}
                >
                    <a
                        className='flex justify-center group:hover:bg-[#223740] cursor-pointer transition-colors duration-300 bg-[#405B66] bg-opacity-90 items-center w-full h-full'
                        onClick={() => router.push(`/portfolio-detail/${next}`)}
                    >
                        Próximo
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            aria-hidden='true'
                            className='transform transition-transform group-hover:translate-x-3 duration-300 w-5 h-5 ml-2'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3'></path>
                        </svg>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}
