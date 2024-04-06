import React from 'react'

import * as S from './RealEstateList.styled'
import { Card } from '../../../components/card/Card.tsx'

import { Divider, Select } from 'antd';
import { MinusOutlined } from '@ant-design/icons';

import { useState } from 'react'
import { Selector } from '../../../components/selector/Selector.tsx';
import { SearchForm } from '../../../components/searchForm/SearchForm.tsx';
import { useNavigate } from 'react-router-dom';


const handleChange = (value: string) => {
    // sort lai data

    console.log(`selected ${value}`);
};

export const RealEstateList = () => {
    const url = "https://vignette.wikia.nocookie.net/oggyandthecockroaches/images/e/ea/Oggy's_House.png/revision/latest?cb=20180430192556"
    const number = 10
    const mockData = [
        {
            key: 1,
            image: url,
            title: "EM HỒNG",
            description: "Description 1"
        },
        {
            key: 2,
            image: url,
            title: "Xin chào",
            description: "Description 2"
        },
        {
            key: 3,
            image: url,
            title: "Nom Nom",
            description: "Description 3"
        },
        {
            key: 4,
            image: url,
            title: "Hoàng Anh",
            description: "Description 4"
        },
        {
            key: 5,
            image: url,
            title: "Thu Uyên",
            description: "Description 5"
        },
        {
            key: 6,
            image: url,
            title: "Hai Quân",
            description: "Description 6"
        },
        {
            key: 7,
            image: url,
            title: "Title 7",
            description: "Description 7"
        },
        {
            key: 8,
            image: url,
            title: "Title 8",
            description: "Description 8"
        },
        {
            key: 9,
            image: url,
            title: "Title 9",
            description: "Description 9"
        },
        {
            key: 10,
            image: url,
            title: "Title 10",
            description: "Description 10"
        },
    ]
    const navigate = useNavigate();
    return (
        <>
            <SearchForm />
            <Divider />
            <div style={{ display: "flex", margin: 10 }}>
                <S.Title>There are <b>{number}</b> properties being saled</S.Title>
                <MinusOutlined />
                <S.Title>Sort by</S.Title>
                <Select
                    size='large'
                    defaultValue="suggestion"
                    style={{ width: 200, color: '#2986FE' }}
                    onChange={handleChange}
                    options={[
                        { value: 'suggestion', label: 'Suggestions for you' },
                        { value: 'newest', label: 'Newest listings' },
                        { value: 'asc', label: 'Price from low to high' },
                        { value: 'des', label: 'Price from high to low' },
                    ]}
                />
            </div>

            <div className='flex items-center justify-center flex-col'>
                <S.GridContainer className='w-4/5 my-10'>
                    {
                        mockData.map((card) => {
                            return (
                                <Card
                                    className=''
                                    onClick={() => navigate(`/detail/${card.key}`)}
                                    key={card.key}
                                    image={card.image}
                                    title={card.title}
                                    description={card.description}
                                />
                            )
                        })
                    }
                </S.GridContainer>
            </div>
        </>
    )
}
