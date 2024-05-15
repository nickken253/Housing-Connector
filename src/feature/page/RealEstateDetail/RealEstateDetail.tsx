import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from '../../../components/card/Card.tsx';

import './RealEstateDetail.css'
import { Button } from 'antd';
import { CheckMiniIcon } from '../../../assets/index.ts';
import { mockData, mockTypeData, mockRadarData, mockInvestedData } from '../../../assets/mockdata.ts';
import { formatter } from '../../../utils/currency.ts';

import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { ProgressBar } from '../../../components/progressBar/ProgressBar.tsx';
import AOS from "aos";
import "aos/dist/aos.css";
export const RealEstateDetail = () => {

    ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    const { id } = useParams()

    const card = mockData.find((item) => item.key == Number(id))
    const mockData2 = mockData.filter((item) => item.key != Number(id) && (item.price >= (card?.price || 0) || item.type == card?.type || item.district == card?.district)).sort((a, b) => a.price - b.price).slice(0, 4)
    const thisRadardata = mockRadarData.find((item) => item.key == card?.type);
    const dta = [(thisRadardata?.investmentBudget || 0) * 100, (thisRadardata?.distance || 0) * 100, (thisRadardata?.propertiesTypeInterested || 0) * 100, (thisRadardata?.acceptableLevelRisk || 0) * 100, (thisRadardata?.estimatedResaleTime || 0) * 100]
    const dtaAvg = dta.reduce((a, b) => a + b, 0) / dta.length;
    const radarData = {
        labels: ['Investment Budget', 'Favorite Area', 'Properties Type Interested', 'Acceptable Level of Risk', 'Estimated Resale Time'],
        datasets: [
            {
                label: 'AI Prediction',
                max: 100,
                data: dta,
                fill: true,
                backgroundColor: 'rgba(41, 134, 254, 0.2)',
                borderColor: 'rgba(41, 134, 254, 1)',
                pointBackgroundColor: 'rgb(41, 134, 254)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(41, 134, 254)',
            }
        ]
    }
    const radarOption = {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100,
            }
        }
    }
    const navigate = useNavigate();
    const handleInvest = () => {
        navigate('/real-estate/investment-contract', { state: card });
    }
    const type = mockTypeData.find((item) => item.key == card?.type)?.label
    const expectPrice = formatter((card?.price || 0) * 1.4564)
    const miniInvest = formatter((card?.price || 0) * 0.013654)
    const unitPrice = formatter((card?.price || 0) / (card?.area || 1))
    const amount = mockInvestedData.find((item) => item.realEsateID === card?.key)?.investedPrice || 0;
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-3/4'>
                <div className='w-full flex justify-center items-center' data-aos="fade-up" data-aos-delay="50">
                    <img src={card?.image} alt="Img" className='h-[600px]' />
                </div>
                <div className='grid grid-cols-5 gap-5 w-full my-10'>
                    <div className='col-span-4 text-left'>
                        <div className="font-bold text-4xl bg-white p-5 rounded-3xl flex flex-col drop-shadow-xl text-left" data-aos="fade-up" data-aos-delay="50">{card?.label}</div>
                        {/* <div >{card?.description}</div> */}
                        <div className='bg-white p-5 rounded-3xl flex flex-col drop-shadow-xl text-left mt-10' data-aos="fade-up" data-aos-delay="50">

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
                        <div className='bg-white p-5 rounded-3xl flex flex-col drop-shadow-xl text-left mt-10' data-aos="fade-up" data-aos-delay="50">
                            <div className='font-bold text-2xl mb-3 mt-5'>Description</div>
                            <div>{card?.description}</div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='bg-white p-5 rounded-3xl flex flex-col drop-shadow-xl mb-10' data-aos="fade-up" data-aos-delay="50">
                            <ProgressBar amount={amount} total={card?.price || 0} />
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
                        <div className='bg-white p-5 rounded-3xl flex flex-col drop-shadow-xl text-left' data-aos="fade-up" data-aos-delay="50">
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
                <div className="bg-white p-5 rounded-3xl flex drop-shadow-xl text-left mt-10" data-aos="fade-up" data-aos-delay="50">
                    <div style={{ width: '1200px', padding: '0px' }} className='' data-aos="fade-up" data-aos-delay="250">
                        <Radar data={radarData} options={radarOption} />
                    </div>
                    <div className='w-full items-center flex flex-col' >
                        <div className='flex justify-between w-[90%] items-center' data-aos="fade-up" data-aos-delay="250">
                            <div className='w-[80%]'>
                                <div className='text-3xl'>Your suitability for this investment.</div>
                                <div className='text-sm'><i>The Housing Connector AI system calculates based on the investment information you provide.</i></div>
                            </div>
                            <div className='text-xl text-white font-bold bg-[#2986FE] rounded-full aspect-square flex items-center justify-center p-3'>{dtaAvg} %</div>
                        </div>
                        <div className="bg-gray-400 w-[90%] h-px flex justify-center my-5" data-aos="fade-up" data-aos-delay="250"></div>
                        <div className='w-full' data-aos="fade-up" data-aos-delay="350">
                            <div className='ml-10'>Investment Budget</div>
                            <div className='w-full'><ProgressBar amount={dta[0]} total={100} /></div>
                        </div>
                        <div className='w-full' data-aos="fade-up" data-aos-delay="450">
                            <div className='ml-10'>Favorite Area</div>
                            <div className='w-full'><ProgressBar amount={dta[1]} total={100} /></div>
                        </div>
                        <div className='w-full' data-aos="fade-up" data-aos-delay="550">
                            <div className='ml-10'>Properties Type Interested</div>
                            <div className='w-full'><ProgressBar amount={dta[2]} total={100} /></div>
                        </div>
                        <div className='w-full' data-aos="fade-up" data-aos-delay="650">
                            <div className='ml-10'>Acceptable Level of Risk</div>
                            <div className='w-full'><ProgressBar amount={dta[3]} total={100} /></div>
                        </div>
                        <div className='w-full' data-aos="fade-up" data-aos-delay="750">
                            <div className='ml-10'>Estimated Resale Time</div>
                            <div className='w-full'><ProgressBar amount={dta[4]} total={100} /></div>
                        </div>
                    </div>
                </div>
                <div className='my-20' data-aos="fade-up" data-aos-delay="50">
                    <div className='text-left font-bold text-3xl my-5'>Some Related Properties</div>
                    <div className='grid grid-cols-4 gap-10'>
                        {mockData2.map((item) => {
                            return (

                                    <Card
                                        onClick={() => {navigate(`/real-estate/detail/${item.key}`); window.scrollTo(0, 0);}}
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
