import { useEffect } from 'react'

import * as S from './RealEstateList.styled'
import { Card } from '../../../components/card/Card.tsx'

import { Divider, Select } from 'antd';
import { MinusOutlined } from '@ant-design/icons';

import { SearchForm } from '../../../components/searchForm/SearchForm.tsx';
import { useNavigate } from 'react-router-dom';


const handleChange = (value: string) => {
    // sort lai data

    console.log(`selected ${value}`);
};

export const RealEstateList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const url = "https://vignette.wikia.nocookie.net/oggyandthecockroaches/images/e/ea/Oggy's_House.png/revision/latest?cb=20180430192556"
    const number = 10
    const mockData = [
        {
            key: 1,
            image: 'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
            label: "Vinhomes Ocean Park 2 - The Empire",
            address: "H. Văn Giang, T. Hưng Yên",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "100"
        },
        {
            key: 2,
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/490206252.jpg?k=f6bdd69c9662c43e0f5b5d0763e4b2782c875dde057bef9e51424888c18f7017&o=&hp=1',
            label: "Shophouse hướng Đường trục chính Kinh Đô rộng 20m - Sao Biển",
            address: "H. Văn Giang, T. Hưng Yên",
            numberOfBedrooms: "3",
            numberOfBathrooms: "1",
            area: "80"
        },
        {
            key: 3,
            image: 'https://vnsalvation.net/wp-content/uploads/2022/04/home.jpg',
            label: "2PN S3.02 Tower - The Sapphire - Vinhomes Smart City",
            address: "32 Nguyen Trai Street, Ha Dong District , Ha Noi City",
            numberOfBedrooms: "2",
            numberOfBathrooms: "2",
            area: "70"
        },
        {
            key: 4,
            image: 'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
            label: "Căn Studio A Tower - Masteri West Heights",
            address: "Q. Nam Từ Liêm, TP. Hà Nội",
            numberOfBedrooms: "2",
            numberOfBathrooms: "1",
            area: "60"
        },
        {
            key: 5,
            image: 'https://edenbraehomes.com.au/assets/Uploads/HW-Leppington-Bristol-thumb.jpg',
            label: "Nhà mặt ngõ cách Đường Xuân La - Xuân Đỉnh 300m, diện tích 76.5m² x 5 tầng,",
            address: "32 Nguyen Trai Street, Ha Dong District , Ha Noi City",
            numberOfBedrooms: "1",
            numberOfBathrooms: "1",
            area: "50"
        },
        {
            key: 6,
            image: url,
            label: "Hai Quân",
            address: "Description 6",
            numberOfBedrooms: "3",
            numberOfBathrooms: "3",
            area: "120"
        },
        {
            key: 7,
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/409657866.jpg?k=44850352b52ce866daa39d1f88023d5bc3e40447cab9a816e47da76bd909eb24&o=&hp=1',
            label: "Nhà mặt ngõ cách Mễ Trì Thượng 70m, diện tích 50m² x 7 tầng, mặt tiền 5m",
            address: "32 Nguyen Trai Street, Ha Dong District , Ha Noi City",
            numberOfBedrooms: "2",
            numberOfBathrooms: "2",
            area: "80"
        },
        {
            key: 8,
            image: 'https://vnsalvation.net/wp-content/uploads/2022/04/home.jpg',
            label: "Title 8",
            address: "Description 8",
            numberOfBedrooms: "1",
            numberOfBathrooms: "1",
            area: "50"
        },
        {
            key: 9,
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/409657866.jpg?k=44850352b52ce866daa39d1f88023d5bc3e40447cab9a816e47da76bd909eb24&o=&hp=1',
            label: "Title 9",
            address: "Description 9",
            numberOfBedrooms: "3",
            numberOfBathrooms: "1",
            area: "100"
        },
        {
            key: 10,
            image: url,
            label: "Title 10",
            address: "Description 10",
            numberOfBedrooms: "2",
            numberOfBathrooms: "2",
            area: "90"
        },
        {
            key: 10,
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            key: 11,
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            key: 12,
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            key: 13,
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            key: 14,
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            key: 15,
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            key: 16,
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            key: 17,
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
    ];
    
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
                                    onClick={() => navigate(`/real-estate/detail/${card.key}`)}
                                    key={card.key}
                                    image={card.image}
                                    title={card.label}
                                    description={card.address}
                                    numberOfBedrooms={card.numberOfBedrooms}
                                    numberOfBathrooms={card.numberOfBathrooms}
                                    area={card.area}
                                />
                            )
                        })
                    }
                </S.GridContainer>
            </div>
        </>
    )
}
