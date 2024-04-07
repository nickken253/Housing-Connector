import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../../../components/card/Card.tsx';

import './RealEstateDetail.css'


export const RealEstateDetail = () => {
    
    const { id } = useParams()
    


    const url = "https://vignette.wikia.nocookie.net/oggyandthecockroaches/images/e/ea/Oggy's_House.png/revision/latest?cb=20180430192556"
    const number = 10
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
    ]

    const card = mockData.find((item) => item.key === Number(id))
    console.log(card)
  return (
    <div style={{ width:'100%', padding:60}}>
        
        
        <div>RealEstateDetail nom nom </div>
        {/* <div className="container">
            <div className=".images">
                <img src={url} alt="Image 1"/>
                <img src={url} alt="Image 2"/>
                <img src={url} alt="Image 3"/>
                <img src={url} alt="Image 4"/>
            </div>
            <div className="content">
                <div className="left">
                    <div className="info1">
                        <h2>Căn 1PN+ toà A - Masteri West Heights</h2>
                        <p>Palm Harbor</p>
                        <p>Ha Dong, Ha Noi</p>
                    </div>
                    <div className="info2">
                        <h2>2.1B/10B 82 millm</h2>
                        <p>Investment status: Invest</p>
                        <p>Property Type: Ask for advice</p>
                    </div>
                    <div className="info3">
                        <h2>Growth & Income Fund Targer Reise</h2>
                        <p>Target IRR: 10%</p>
                        <p>Target Hold Period: 5 years</p>
                        <p>Minium Investment: $100,000</p>
                    </div>
                </div>
                <div className="right">
                    <div className="card1">
                        <h2>Expect price growth in the next 1-3 years:</h2>
                        <p>10-15%</p>
                    </div>
                    <div className="card2">
                        <h2>Ensure transaction safety</h2>
                        <p>Escrow account</p>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
    
    
  )
}
