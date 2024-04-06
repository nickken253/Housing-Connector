import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 352px;
    height: 423px;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    
    background-color: #FFFFFF;
    color: #000000;
`;

export const Image = styled.img`
    width: 100%;
    height: 200px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const Title = styled.h3`
    font-size: 20px;
    margin: 10px 0;
    padding-left: 24px;
`;

export const Description = styled.p`
    font-size: 16px;
    margin: 10px 0;
    padding-left: 24px;

`;

export const ContributePrice = styled.p`
    font-size: 24px;
    margin: 0;
    padding-left: 24px;

`;


export const FullPrice = styled.p`
    font-size: 16px;
    margin: 0;
    color: #000000;
    
`;

export const PriceContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    

`;