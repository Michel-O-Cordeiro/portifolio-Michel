interface ItemSliderCard {
    title: string;
    name: string;
    description: string;
    complement: string[];
    images: string[];
}

export interface SliderCardProps {
    item: ItemSliderCard;
    index: number | string;
}
