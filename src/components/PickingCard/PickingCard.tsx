import React from 'react'
import * as S from './PickingCard.styled'
import { RightOutlined } from '@ant-design/icons'

interface PickingCardProps {
    icon: React.ReactNode
    title: string
    des: string
    onClick?: () => void
}
export const PickingCard = (props: PickingCardProps) => {
    const { icon, title, des, onClick } = props
    return (
        <S.Wrapper onClick={onClick}>
            <S.Content>
                {icon}
                <S.TextWrapper>
                    <S.Title>{title}</S.Title>
                    <S.Des>{des}</S.Des>
                </S.TextWrapper>
            </S.Content>
            <S.IconWrapper><RightOutlined className='text-[#2986FE] text-6xl' /></S.IconWrapper>
        </S.Wrapper>
    )
}
