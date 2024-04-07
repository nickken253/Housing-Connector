import React from 'react';
import * as S from "./Card.styled";
import { Divider } from 'antd';
import { BathIcon, BedIcon, Img, SquareIcon } from '../../assets';

interface CardProps extends React.HTMLAttributes<HTMLDivElement>{
    image: string;
    title: string;
    description: string;
    numberOfBedrooms?: string;
    numberOfBathrooms?: string;
    area?: string;
}

export const Card = ({ image, title, description, numberOfBedrooms, numberOfBathrooms, area, ...rest }: CardProps) => {
    return (
        <S.Card {...rest}>
            <S.Image src={image} alt="image nom" />
            <S.PriceContainer>
                <S.ContributePrice>2.1B</S.ContributePrice>
                <S.FullPrice>/2.5B</S.FullPrice>
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
