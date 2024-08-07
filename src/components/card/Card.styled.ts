import styled from "styled-components";
import { Divider } from 'antd';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 04px 4px 8px 0 rgba(0, 128, 255, 0.2);
    border-line: 0px;
    background-color: #FFFFFF;
    color: #000000;
    &:hover {
        cursor: pointer;
        drop-shadow: 0px 8px 16px 0 rgba(0, 128, 255, 0.2);
        border: 1px solid #2986FE;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 200px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-line: 0px;
`;

export const Title = styled.h3`
    font-size: 24px;
    margin: 0;
    text-align: left;
    margin-top: 10px;
    padding-left: 24px;
`;

export const Description = styled.p`
    font-size: 16px;
    margin: 10px 0;
    padding-left: 24px;
    opacity: 0.5;
`;

export const ContributePrice = styled.p`
    font-size: 24px;
    margin: 0px 20px 0px 24px;
    
    color: #2986FE;
    font-weight: bold;
`;


export const FullPrice = styled.p`
    font-size: 16px;
    margin: 0;
    color: #000000;
    
`;

export const PriceContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
`;

export const Icon = styled.img`
  width: 18px;
`;

export const Info = styled.p`
    margin: 0 ;
    padding-left: 2px;
    font-size: 10px;
`

export const GridItem = styled.div`
    display: flex;
    align-items: center;
`;

export const GridContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    margin-left: 24px;
    margin-bottom: 24px;
`;

export const Divide = styled(Divider)`
    margin: 12px 0 12px 0px;
`

export const ProgressBar = styled.div`
    width: 100%;
    height: 10px;
    background-color: #F0F0F0;
    border-radius: 5px;
    margin-top: 10px;
`;