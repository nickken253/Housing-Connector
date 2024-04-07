import './homepage.css';
import HeaderNavigation from '../../misc/HeaderNavigation/HeaderNavigation';
import * as S from './HomePage.styled';
import { HomeSec1Img, HomeCard1Img, HomeCard2Img, CheckIcon, HomeIcon, CoinIcon } from '../../../assets';
import { Tabs, TabsProps, Select, Button, notification } from "antd";
import StickyBox from 'react-sticky-box';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { set } from 'firebase/database';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Card } from '../../../components/card/Card.tsx'
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const [citis, setCitis] = useState(0);
    const [district, setDistrict] = useState<{ label: string; value: string; }[]>([]);
    const [wards, setWards] = useState([]);
    const mockData = [
        {
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
            image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            label: "Palm Harbor",
            address: "2699 Green Valley, Highland Lake, FL",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "8x16",
        },
        {
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
        <S.HomePageContainer>
            <S.SectionContainer className="relative">
                <S.SectionBackground className="a" src={HomeSec1Img} alt='Back' />
                <div className='grid grid-cols-2 absolute top-0 w-full h-full pt-20 px-20 text-left'>
                    <div>
                        <div className='font-bold'>
                            <div className='text-7xl text-[#000929] pr-10 leading-[100px]'>
                                Invest into new property easily with
                            </div>
                            <div className='text-7xl text-[#2986FE]  leading-[100px]'>
                                Housing Connector
                            </div>
                        </div>
                        <div className='my-10 mb-20 text-3xl'>Where Smart Real Estate Investments Happen!</div>
                        <div className='flex'>
                            <div className='w-[3px] bg-[#C6C7C7] mr-7'></div>
                            <div className='mr-20'>
                                <div className='text-3xl text-[#2986FE] font-bold'>50k+</div>
                                <div className='text-[#6C727F]'>Property</div>
                            </div>
                            <div className='w-[3px] bg-[#C6C7C7] mr-7'></div>
                            <div className='mr-10'>
                                <div className='text-3xl text-[#2986FE] font-bold'>10k+</div>
                                <div className='text-[#6C727F]'>Investors</div>
                            </div>
                        </div>
                        <Tabs defaultActiveKey="1" left type="card" className="my-24">
                            <Tabs.TabPane tab="Apartment" key="1" className="rounded-e-3xl rounded-b-3xl bg-white p-5 py-10">
                                <div className='grid grid-cols-4 divide-x'>
                                    <div className=''>
                                        <div className='text-gray-500 text-lg font-medium mb-3'>Province</div>
                                        <Select
                                            id="citis"
                                            defaultValue="Select Province"
                                            className='w-4/5'
                                            options={[
                                                { label: 'Ha Noi', value: '1' },
                                            ]}
                                        />
                                    </div>
                                    <div className='pl-2'>
                                        <div className='text-gray-500 text-lg font-medium mb-3'>District</div>
                                        <Select
                                            id="district"
                                            defaultValue="Select District"
                                            className='w-4/5'
                                            options={[
                                                { label: 'Cau Giay', value: '11' },
                                                { label: 'Ba Dinh', value: '12' },
                                                { label: 'Hoan Kiem', value: '13' },
                                                { label: 'Hai Ba Trung', value: '14' },
                                                { label: 'Hoang Mai', value: '15' },
                                                { label: 'Dong Da', value: '16' },
                                                { label: 'Tay Ho', value: '17' },
                                            ]}
                                        />
                                    </div>
                                    <div className='pl-2'>
                                        <div className='text-gray-500 text-lg font-medium mb-3'>Address</div>
                                        <input type="text" placeholder='Address' className='border h-[32px] w-4/5 px-2 rounded-lg border-gray-300' />
                                    </div>
                                    <Button type="primary" className='rounded-3xl h-full text-xl'  onClick={() => navigate('/real-estate/invest')}>Browse Properties</Button>
                                </div>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Villa" key="2" className="rounded-e-3xl rounded-b-3xl bg-white p-5 py-10">
                                <div className='grid grid-cols-5 divide-x'>
                                    <div className=''>
                                        <div className='text-gray-500 text-lg font-medium mb-3'>Province</div>
                                        <Select
                                            id="citis"
                                            defaultValue="Select Province"
                                            className='w-4/5'
                                            options={[
                                                { label: 'Ha Noi', value: '1' },
                                            ]}
                                        />
                                    </div>
                                    <div className='pl-2'>
                                        <div className='text-gray-500 text-lg font-medium mb-3'>District</div>
                                        <Select
                                            id="district"
                                            defaultValue="Select District"
                                            className='w-4/5'
                                            options={[
                                                { label: 'Cau Giay', value: '11' },
                                                { label: 'Ba Dinh', value: '12' },
                                                { label: 'Hoan Kiem', value: '13' },
                                                { label: 'Hai Ba Trung', value: '14' },
                                                { label: 'Hoang Mai', value: '15' },
                                                { label: 'Dong Da', value: '16' },
                                                { label: 'Tay Ho', value: '17' },
                                            ]}
                                        />
                                    </div>
                                    <div className='pl-2'>
                                        <div className='text-gray-500 text-lg font-medium mb-3'>Tower</div>
                                        <Select
                                            id="district"
                                            defaultValue="Select Tower"
                                            className='w-4/5'
                                            options={[
                                                { label: 'VinHome D2', value: '111' },
                                                { label: 'Vin Pearl', value: '121' },
                                                { label: 'Nova Land', value: '131' },
                                                { label: 'ProPTIT', value: '141' },
                                                { label: 'Jecta Clap', value: '151' },
                                                { label: 'Landmak', value: '161' },
                                                { label: 'Lend Tail', value: '171' },
                                            ]}
                                        />
                                    </div>
                                    <div className='pl-2'>
                                        <div className='text-gray-500 text-lg font-medium mb-3'>Address</div>
                                        <input type="text" placeholder='Address' className='border h-[32px] w-4/5 px-2 rounded-lg border-gray-300' />
                                    </div>
                                    <Button type="primary" className='rounded-3xl h-full text-lg' onClick={() => navigate('/real-estate/invest')}>Browse Properties</Button>
                                </div>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Real Estate" key="3" className="rounded-e-3xl rounded-b-3xl bg-white p-5 py-10">
                                <div className='grid grid-cols-4 divide-x'>
                                    <div className=''>
                                        <div className='text-gray-500 text-lg font-medium mb-3'>Province</div>
                                        <Select
                                            id="citis"
                                            defaultValue="Select Province"
                                            className='w-4/5'
                                            options={[
                                                { label: 'Ha Noi', value: '1' },
                                            ]}
                                        />
                                    </div>
                                    <div className='pl-2'>
                                        <div className='text-gray-500 text-lg font-medium mb-3'>District</div>
                                        <Select
                                            id="district"
                                            defaultValue="Select District"
                                            className='w-4/5'
                                            options={[
                                                { label: 'Cau Giay', value: '11' },
                                                { label: 'Ba Dinh', value: '12' },
                                                { label: 'Hoan Kiem', value: '13' },
                                                { label: 'Hai Ba Trung', value: '14' },
                                                { label: 'Hoang Mai', value: '15' },
                                                { label: 'Dong Da', value: '16' },
                                                { label: 'Tay Ho', value: '17' },
                                            ]}
                                        />
                                    </div>
                                    <div className='pl-2'>
                                        <div className='text-gray-500 text-lg font-medium mb-3'>Address</div>
                                        <input type="text" placeholder='Address' className='border h-[32px] w-4/5 px-2 rounded-lg border-gray-300' />
                                    </div>
                                    <Button type="primary" className='rounded-3xl h-full text-xl' onClick={() => navigate('/real-estate/invest')}>Browse Properties</Button>
                                </div>
                            </Tabs.TabPane>
                        </Tabs>
                    </div>
                    <div className='relative'>
                        <img src={HomeCard1Img} className='absolute top-16 left-4' alt="1" />
                        <img src={HomeCard2Img} className='absolute bottom-2 right-32' alt="2" />
                    </div>
                </div>
            </S.SectionContainer>
            <S.SectionContainer className="my-20 flex flex-col items-center">
                <div className='font-bold text-5xl'>
                    “Invest with Ease, Housing Connector’s Smart Squeeze”
                </div>
                <div className='flex w-full items-center justify-center my-5 py-10'>
                    <div className="py-20 px-14 w-[352px] h-[247px] bg-white rounded-3xl text-center drop-shadow-xl">
                        <div className='text-[#2986FE] text-6xl font-bold'>730K+</div>
                        <div className='text-gray-500 text-2xl'>Registered Members</div>
                    </div>
                    <div className='h-[80px] w-[2px] bg-gray-400 mx-10'></div>
                    <div className="py-20 px-14 w-[352px] h-[247px] bg-white rounded-3xl text-center drop-shadow-xl">
                        <div className='text-[#2986FE] text-6xl font-bold'>450B+</div>
                        <div className='text-gray-500 text-2xl line-clamp-2'>Vietnamese Dong Invested</div>
                    </div>
                    <div className='h-[80px] w-[2px] bg-gray-400 mx-10'></div>
                    <div className="py-20 px-14 w-[352px] h-[247px] bg-white rounded-3xl text-center drop-shadow-xl">
                        <div className='text-[#2986FE] text-6xl font-bold'>2500+</div>
                        <div className='text-gray-500 text-2xl'>Deals Funded</div>
                    </div>
                </div>
                <div className='text-2xl w-2/3'>Dubbed "Smart, safe, fast real estate investment system" in 2024</div>
                <div className=' text-sm w-2/3 mb-10 text-gray-400'>*According to Vietnam.net's survey report on April 4, 2024</div>
                <div className='h-[50px] mb-20'>
                    <Button type="primary" className='rounded-3xl h-full text-xl items-center' onClick={() => navigate('/real-estate/invest')}>Get started<ArrowRightOutlined /></Button>
                </div>
            </S.SectionContainer>
            <S.SectionContainer className="my-20 flex flex-col items-center">
                <div className='font-bold text-5xl'>
                    Housing Connector - More than a safe, fast investment platform
                </div>
                <div className='text-2xl w-2/3 my-8'>Our mission is to provide attractive, diverse and quality investment opportunities for investors. We are proud to be a pioneer in ensuring data transparency and reliability.</div>
                <div className='flex w-full items-center justify-center my-5 py-10'>
                    <div className="py-20 px-14 w-[352px] h-[473px] bg-white rounded-3xl flex flex-col items-center justify-start drop-shadow-xl mx-10">
                        <img src={CheckIcon} alt="Icon" />
                        <div className='text-xl font-bold my-3'>Safe and Transparent</div>
                        <div className='text-gray-500'>Transparent and secure information helps you make decisions to pursue your financial goals.</div>
                    </div>
                    <div className="py-20 px-14 w-[352px] h-[473px] bg-white rounded-3xl flex flex-col items-center justify-start drop-shadow-xl mx-10">
                        <img src={HomeIcon} alt="Icon" />
                        <div className='text-xl font-bold my-3'>Diverse Types of Real Estate</div>
                        <div className='text-gray-500'>Explore a wide range of commercial real estate investments that are always updated 24/7 nationwide!</div>
                    </div>
                    <div className="py-20 px-14 w-[352px] h-[473px] bg-white rounded-3xl  flex flex-col items-center justify-start drop-shadow-xl mx-10">
                        <img src={CoinIcon} alt="Icon" />
                        <div className='text-xl font-bold my-3'>High Potential Brings Attractive Income</div>
                        <div className='text-gray-500'>With Housing Connector's diverse investment opportunities, investors can take advantage of significant profit potential, ensuring a stable passive income source over time</div>
                    </div>
                </div>
            </S.SectionContainer>
            <S.SectionContainer className="flex justify-center flex-col items-center">
                <div className='grid grid-cols-2 w-4/5'>
                    <div className='text-left pl-5'>
                        <div className='text-[#4361EE] text-xl'>
                            CHECK OUT OUR NEW
                        </div>
                        <div className='text-4xl font-semibold'>Latest Listed Properties</div>
                        <div className='text-gray-400 w-full mt-4 pr-20'>With detailed descriptions, images, and key information readily available, finding your next property has never been easier</div>
                    </div>
                </div>
                <div className='w-4/5 my-10 flex items-center justify-center'>

                    <div className='grid grid-cols-4'>
                        {mockData.map((item, index) => (
                            <div className='p-5'>

                                <Card className='' key={index} image={item.image} title={item.label} description={item.address} numberOfBedrooms={item.numberOfBedrooms} numberOfBathrooms={item.numberOfBathrooms} area={item.area} />
                            </div>
                        ))}
                    </div>
                </div>
            </S.SectionContainer>
        </S.HomePageContainer>
    );
}

export default HomePage;