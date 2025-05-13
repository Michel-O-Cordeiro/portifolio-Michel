import React from 'react';
import { DataArray } from '@/app/utils/data';
import SliderCard from './SliderCard';
import { SliderCardSettings } from '@/app/utils/SliderCardSettings';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function MySlider() {
    return (
        <Slider {...SliderCardSettings}>
            {DataArray.map((item, index) => {
                return (
                    <div key={index} className='my-slider'>
                        <SliderCard item={item} index={index} />
                    </div>
                );
            })}
        </Slider>
    );
}
