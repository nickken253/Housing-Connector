import React from 'react';
import * as S from "./Card.styled";
import { Divider } from 'antd';

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
            <Divider />


        </S.Card>
    )
}
