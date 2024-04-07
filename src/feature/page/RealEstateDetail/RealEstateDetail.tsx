import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from '../../../components/card/Card.tsx';

import './RealEstateDetail.css'
import { Button } from 'antd';
import {  CheckMiniIcon } from '../../../assets/index.ts';
import { DetailImg } from '../../../assets/index.ts';

export const RealEstateDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams()

    const url = "https://vignette.wikia.nocookie.net/oggyandthecockroaches/images/e/ea/Oggy's_House.png/revision/latest?cb=20180430192556"
    const mockData = [
        {
            key: 1,
            image: url,
            title: "EM HỒNG",
            description: "Description 1",
            numberOfBedrooms: "3",
            numberOfBathrooms: "2",
            area: "100"
        },
        {
            key: 2,
            image: url,
            title: "Xin chào",
            description: "Description 2",
            numberOfBedrooms: "3",
            numberOfBathrooms: "1",
            area: "80"
        },
        {
            key: 3,
            image: url,
            title: "Nom Nom",
            description: "Description 3",
            numberOfBedrooms: "2",
            numberOfBathrooms: "2",
            area: "70"
        },
        {
            key: 4,
            image: url,
            title: "Hoàng Anh",
            description: "Description 4",
            numberOfBedrooms: "2",
            numberOfBathrooms: "1",
            area: "60"
        },
        {
            key: 5,
            image: url,
            title: "Thu Uyên",
            description: "Description 5",
            numberOfBedrooms: "1",
            numberOfBathrooms: "1",
            area: "50"
        },
        {
            key: 6,
            image: url,
            title: "Hai Quân",
            description: "Description 6",
            numberOfBedrooms: "3",
            numberOfBathrooms: "3",
            area: "120"
        },
        {
            key: 7,
            image: url,
            title: "Title 7",
            description: "Description 7",
            numberOfBedrooms: "2",
            numberOfBathrooms: "2",
            area: "80"
        },
        {
            key: 8,
            image: url,
            title: "Title 8",
            description: "Description 8",
            numberOfBedrooms: "1",
            numberOfBathrooms: "1",
            area: "50"
        },
        {
            key: 9,
            image: url,
            title: "Title 9",
            description: "Description 9",
            numberOfBedrooms: "3",
            numberOfBathrooms: "1",
            area: "100"
        },
        {
            key: 10,
            image: url,
            title: "Title 10",
            description: "Description 10",
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
    const mockData2 = [
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
    const card = mockData.find((item) => item.key === Number(id))
    const navigate = useNavigate();
    const handleInvest = () => {
        navigate('/real-estate/investment-contract');
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-3/4'>
                <div className='w-full flex justify-center items-center'>
                    <img src={DetailImg} alt="Img" className='' />
                </div>
                <div className='grid grid-cols-5 gap-5 w-full my-10'>
                    <div className='col-span-4 text-left'>
                        <div className="font-bold text-4xl">{card?.title}</div>
                        <div >{card?.description}</div>
                        <div className='h-px my-8 bg-gray-500 w-[300px]'></div>
                        <div className='font-bold text-2xl mb-3'>Investment status</div>
                        <div>
                            <ul className='list-disc ml-10'>
                                <li>Property Type</li>
                                <li>Growth & Income Fund Targer Raise</li>
                                <li>Target IRR:</li>
                                <li>Target Hold Period</li>
                                <li>Minium Investment</li>
                                <li>Expect price growth in the next 1-3 years:</li>
                            </ul>
                        </div>
                        <div className='font-bold text-2xl mb-3 mt-5'>Description</div>
                        <div>Welcome to your dream home nestled in the heart of {card?.title}. This stunning {card?.description} boasts {card?.numberOfBedrooms} bedrooms, {card?.numberOfBathrooms} bathrooms, and {card?.area} square feet of luxurious living space.
                            As you step through the grand entrance, you're greeted by an abundance of natural light and exquisite finishes throughout. The open-concept layout seamlessly connects the spacious living area with the gourmet kitchen, creating the perfect setting for entertaining guests or relaxing with family.
                            The chef-inspired kitchen is a culinary delight, featuring state-of-the-art appliances, sleek countertops, and ample storage space. Whether you're preparing a casual meal or hosting a dinner party, this kitchen is sure to impress even the most discerning chef.
                            Retreat to the serene master suite, where tranquility awaits. This private oasis features a generous walk-in closet and a spa-like ensuite bathroom complete with a luxurious soaking tub and a separate glass-enclosed shower.
                            Outside, the expansive backyard offers endless possibilities for outdoor enjoyment. From al fresco dining on the patio to lounging by the sparkling pool, this backyard oasis is the perfect place to unwind and soak up the California sunshine.
                            Conveniently located near [local amenities, schools, parks, etc.], this home offers the perfect blend of luxury, comfort, and convenience. Don't miss your opportunity to make this extraordinary property your own. Schedule a showing today and experience the epitome of modern living.</div>
                    </div>
                    <div className=''>
                        <div className='bg-white p-5 rounded-3xl flex flex-col drop-shadow-xl mb-10'>
                            <div className='text-left mb-5'>
                                <span className='text-[#2986FE] font-bold text-xl'>2.1B</span><span className='text-gray-400 font-bold text-lg'>/2.5B</span><span className='text-[#1C1D1F] text-sm ml-5'> 62 mil/m²</span>
                            </div>
                            <div className='mb-2'>
                                <Button className="w-full rounded-lg" type="primary" size='large' onClick={handleInvest}>Invest</Button>
                            </div>
                            <div className='mb-2'>
                                <Button className="w-full rounded-lg" type="default" size='large'>Ask for advice</Button>
                            </div>
                            <div className='my-5'>
                                <div className='flex text-left gap-2'>
                                    <img src={CheckMiniIcon} alt="Icon" />
                                    <div>Commitment to investment interest</div>
                                </div>
                                <div className='flex text-left gap-2'>
                                    <img src={CheckMiniIcon} alt="Icon" />
                                    <div>Ensure transaction safety</div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-5 rounded-3xl flex flex-col drop-shadow-xl text-left'>
                            <div className='font-bold text-2xl'>Question?</div>
                            <div className='text-sm text-gray-600'>If you have questions, we're here to help. Send us a message below and we will respond promptly</div>
                            <div>
                                <input type="text" className='border w-full my-3 h-10 rounded-xl px-3' placeholder='Write a question...' />
                            </div>
                            <div className='mb-2'>
                                <Button className="w-full rounded-lg" type="primary" size='large'>Send</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-20'>
                    <div className='text-left font-bold text-3xl my-5'>Some Related Properties</div>
                    <div className='grid grid-cols-4 gap-10'>
                        {mockData2.map((item) => {
                            return (
                                <Card
                                    image={item.image}
                                    title={item.label}
                                    description={item.address}
                                    numberOfBedrooms={item.numberOfBedrooms}
                                    numberOfBathrooms={item.numberOfBathrooms}
                                    area={item.area}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>


    )
}
