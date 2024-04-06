import React from 'react';
import * as S from "./Card.styled";
import { Divider } from 'antd';
import { BathIcon, BedIcon, Img, SquareIcon } from '../../assets';

interface CardProps {
    image: string;
    title: string;
    description: string;
}

export const Card = ({ image, title, description }: CardProps) => {
    return (
        <S.Card>
            
            <S.Image src={image} alt="image nom" />
            <S.PriceContainer>
                <S.ContributePrice>2.1B</S.ContributePrice>
                <S.FullPrice>/2.5B</S.FullPrice>
            </S.PriceContainer>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.Divide />

            <S.GridContainer>
                <S.GridItem>
                    <S.Icon src={BedIcon} alt="icon bed" />
                    <S.Info>3 Bedrooms</S.Info>
                </S.GridItem>
                
                <S.GridItem>
                    <S.Icon src={BathIcon} alt="icon bath" />
                    <S.Info>2 Bathrooms</S.Info>
                </S.GridItem>

                <S.GridItem>
                    <S.Icon src={SquareIcon} alt="icon square" />
                    <S.Info>120m2</S.Info>
                </S.GridItem>
            </S.GridContainer>


        </S.Card>
    )
}
