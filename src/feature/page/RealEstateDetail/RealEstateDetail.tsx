import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from '../../../components/card/Card.tsx';

import './RealEstateDetail.css'
import { Button } from 'antd';
import { CheckMiniIcon } from '../../../assets/index.ts';
import { mockData, mockTypeData } from '../../../assets/mockdata.ts';
import { formatter } from '../../../utils/currency.ts';

export const RealEstateDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams()

    const card = mockData.find((item) => item.key == Number(id))
    const mockData2 = mockData.filter((item) => item.key != Number(id) && (item.price >= (card?.price || 0) || item.type == card?.type || item.district == card?.district)).sort((a, b) => a.price - b.price).slice(0, 4)
    console.log(mockData2);
    
    console.log(card);

    const navigate = useNavigate();
    const handleInvest = () => {
        navigate('/real-estate/investment-contract');
    }
    const type = mockTypeData.find((item) => item.key == card?.type)?.label
    const expectPrice = formatter((card?.price || 0) * 1.4564)
    const miniInvest = formatter((card?.price || 0) * 0.013654)
    const unitPrice = formatter((card?.price || 0) / (card?.area || 1))
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-3/4'>
                <div className='w-full flex justify-center items-center'>
                    <img src={card?.image} alt="Img" className='h-[600px]' />
                </div>
                <div className='grid grid-cols-5 gap-5 w-full my-10'>
                    <div className='col-span-4 text-left'>
                        <div className="font-bold text-4xl bg-white p-5 rounded-3xl flex flex-col drop-shadow-xl text-left">{card?.label}</div>
                        {/* <div >{card?.description}</div> */}
                        <div className='bg-white p-5 rounded-3xl flex flex-col drop-shadow-xl text-left mt-10'>

                            <div className='font-bold text-2xl mb-3'>Investment status</div>
                            <div>
                                <ul className='list-disc ml-10'>
                                    <li>Property Type: <b>{type}</b></li>
                                    <li>Area: <b>{card?.area}m²</b></li>
                                    <li>Bedroom: <b>{card?.numberOfBedrooms}</b></li>
                                    <li>Bathroom: <b>{card?.numberOfBathrooms}</b></li>
                                    <li>Minium Investment: <b>{miniInvest} VNĐ</b></li>
                                    <li>Expect price growth in the next 1-3 years: <b>{expectPrice} VNĐ</b></li>
                                    <li>Address: <b>{card?.address}</b></li>
                                </ul>
                            </div>
                        </div>
                        <div className='bg-white p-5 rounded-3xl flex flex-col drop-shadow-xl text-left mt-10'>
                            <div className='font-bold text-2xl mb-3 mt-5'>Description</div>
                            <div>{card?.description}</div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='bg-white p-5 rounded-3xl flex flex-col drop-shadow-xl mb-10'>
                            <div className='text-right mb-5'>
                                <div className='text-[#2986FE] font-bold text-xl'>{formatter(card?.price || 0)} VNĐ</div><div className='text-[#1C1D1F] text-sm'> {unitPrice}/m²</div>
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
                                    esID={item.key}
                                    image={item.image}
                                    title={item.label || ""}
                                    description={item.address}
                                    numberOfBedrooms={item.numberOfBedrooms}
                                    numberOfBathrooms={item.numberOfBathrooms}
                                    area={item.area}
                                    price={item.price}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>


    )
}
