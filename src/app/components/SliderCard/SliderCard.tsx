'use client';
import { SliderCardProps } from '@/interfaces/SliderCard';
import React from 'react';
import { useRouter } from 'next/navigation';
import { url } from 'inspector';
import Image from 'next/image';

export default function SliderCard({ item, index }: SliderCardProps) {
    const router = useRouter();

    return (
        <React.Fragment>
            <div className='h-[280px] lg:h-[450px] md:h-[400px] sm:h-[200px] lg:w-[650px] md:w-[450px] sm:w-[300px] w-[300px] relative m-auto'>
                <div className='h-full w-full group cursor-all-scroll z-50 relative'>
                    <Image
                        src={item.images[0]}
                        alt='item thumbnail'
                        //layout='cover'
                        //width={600}
                        className='w-full h-[200px] lg:h-[350px] md:h-[300px] max-w-[100%] rounded-lg'
                    />
                </div>
                <div
                    className='absolute top-14 sm:left-12 rounded-lg bg-white h-[200px] lg:h-[350px] md:h-[300px] w-full'
                    style={{ boxShadow: '#8234E9 -10px 10px 20px 10px' }}
                >
                    <div className='relative h-[200px] lg:h-[350px] md:h-[300px] w-[100%]'>
                        <p className='absolute bottom-4 left-4 text-lg font-[300]'>{item.name}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
