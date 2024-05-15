import { useEffect, useState } from 'react'

import * as S from './RealEstateList.styled'
import { Card } from '../../../components/card/Card.tsx'

import { Divider, Select } from 'antd';
import { MinusOutlined } from '@ant-design/icons';

import { SearchForm } from '../../../components/searchForm/SearchForm.tsx';
import { useNavigate } from 'react-router-dom';
import { mockData } from '../../../assets/mockdata.ts';
import AOS from "aos";
import "aos/dist/aos.css";

export const RealEstateList = () => {
    const [dataSorted, setDataSorted] = useState(mockData);
    const handleChange = (value: number) => {    
        console.log(`selected ${value}`);
        if (value === 1) {
            setDataSorted(mockData);
        }
        if (value === 2) {
            setDataSorted([...mockData].sort((a, b) => a.key - b.key));
        }
        if (value === 3) {
            setDataSorted([...mockData].sort((a, b) => a.price - b.price));
        }
        if (value === 4) {
            setDataSorted([...mockData].sort((a, b) => b.price - a.price));
        }
    };
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(dataSorted);
        
    }, [dataSorted]);
    const number = mockData.length;
    const navigate = useNavigate();
    return (
        <>
            <SearchForm/>
            <Divider />
            <div style={{ display: "flex", margin: 10 }}>
                <S.Title>There are <b>{number}</b> properties being saled</S.Title>
                <MinusOutlined />
                <S.Title>Sort by</S.Title>
                <Select
                    size='large'
                    defaultValue={1}
                    style={{ width: 200, color: '#2986FE' }}
                    onChange={handleChange}
                    options={[
                        { value: 1, label: 'Suggestions for you' },
                        { value: 2, label: 'Newest listings' },
                        { value: 3, label: 'Price from low to high' },
                        { value: 4, label: 'Price from high to low' },
                    ]}
                />
            </div>

            <div className='flex items-center justify-center flex-col'>
                <S.GridContainer className='w-4/5 my-10'>
                    {
                        dataSorted.map((card) => {
                            return (
                                <Card
                                    data-aos="fade-up" data-aos-delay="50"
                                    className=''
                                    onClick={() => navigate(`/real-estate/detail/${card.key}`)}
                                    key={card.key}
                                    image={card.image}
                                    title={card.label || ""}
                                    description={card.address}
                                    numberOfBedrooms={card.numberOfBedrooms}
                                    numberOfBathrooms={card.numberOfBathrooms}
                                    area={card.area}
                                    esID={card.key}
                                    price={card.price}
                                />
                            )
                        })
                    }
                </S.GridContainer>
            </div>
        </>
    )
}
