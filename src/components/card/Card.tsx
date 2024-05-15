import React from 'react';
import * as S from "./Card.styled";
import { BathIcon, BedIcon, SquareIcon } from '../../assets';
import { ProgressBar } from '../progressBar/ProgressBar';
import { formatter } from '../../utils/currency';

import { mockInvestedData } from '../../assets/mockdata';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    esID: number;
    image: string;
    title: string;
    description: string;
    numberOfBedrooms?: string;
    numberOfBathrooms?: string;
    area?: number;
    price: number;
}

export const Card = ({ esID, image, title, description, numberOfBedrooms, numberOfBathrooms, price, area, ...rest }: CardProps) => {
    const amount = mockInvestedData.find((item) => item.realEsateID === esID)?.investedPrice || 0;
    return (
        <S.Card {...rest} >
            <div className='w-full overflow-hidden'>
                <S.Image src={image} alt="image nom" className='hover:scale-110 ease-in-out delay-100 transition-all' />
            </div>
            <ProgressBar amount={amount} total={price} />
            <S.PriceContainer>
                <S.ContributePrice>{formatter(price)} VNĐ</S.ContributePrice>
            </S.PriceContainer>
            <S.Title className='line-clamp-1'>{title}</S.Title>
            <S.Description className='line-clamp-1'>{description}</S.Description>
            <S.Divide />

            <S.GridContainer>
                <S.GridItem>
                    <S.Icon src={BedIcon} alt="icon bed" />
                    <S.Info>{numberOfBedrooms} Bedrooms</S.Info>
                </S.GridItem>

                <S.GridItem>
                    <S.Icon src={BathIcon} alt="icon bath" />
                    <S.Info>{numberOfBathrooms} Bathrooms</S.Info>
                </S.GridItem>

                <S.GridItem>
                    <S.Icon src={SquareIcon} alt="icon square" />
                    <S.Info>{area} m²</S.Info>
                </S.GridItem>
            </S.GridContainer>
        </S.Card>
    )
}
