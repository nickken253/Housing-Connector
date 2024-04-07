import React from 'react'

import * as S from './InvestmentContractPage.styled'
import { EditableInput } from '../../../components/editableInput/EditableInput';
import './InvestmentContract.css'
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { SuccessInForm } from '../../../assets';

interface InvestmentContractPageProps extends React.HTMLAttributes<HTMLDivElement>{
    projectName?: string;
    projectType?: string;
    investmentTerm?: string;
    expectedProfit?: string;

    investorName?: string;
    investorPhone?: string;
    investorEmail?: string;
    investorCitizenID?: string;
    investmentAmount?: string;
}

export const InvestmentContractPage = ({ projectName, projectType, investmentTerm, expectedProfit, investorName, investorPhone, investorEmail, investorCitizenID, investmentAmount }: InvestmentContractPageProps) => {

    const [open, setOpen] = useState(false);
  return (
    <div >
        <h1 className='Heading'>Investment Contract</h1>
        <div >
            <h2 className='SubHeading'>Investment Contract Information</h2>
            <div>
                <div className='InputField'>
                    <S.Label>Project name</S.Label>
                    <EditableInput initValue={projectName} />
                </div>
                    
                <div>
                    <S.Label>Project type</S.Label>
                    <EditableInput initValue={projectType} />
                </div>
                
                <div>
                    <S.Label>Investment term</S.Label>
                    <EditableInput initValue={investmentTerm} />
                </div>

                <div>
                    <S.Label>Expected profit</S.Label>
                    <EditableInput initValue={expectedProfit} />
                </div>                
            </div>
        </div>

        <div style={{width: 1600, backgroundColor:'#FFFFFF', justifyContent:'flex-start', justifyItems:'flex-start'}}>
            <h2 className='SubHeading'>Investor Information</h2>
            <div>
                <S.Label>Investor name</S.Label>
                <EditableInput initValue={investorName} />
            </div>

            <div>
                <S.Label>Investor phone</S.Label>
                <EditableInput initValue={investorPhone} />
            </div>

            <div>
                <S.Label>Investor email</S.Label>
                <EditableInput initValue={investorEmail} />
            </div>
            <div>
                <S.Label>Investor citezen identity</S.Label>
                <EditableInput initValue={investorCitizenID} />
            </div>

            <div>
                <S.Label>Investment amount</S.Label>
                <EditableInput initValue={investmentAmount} />
            </div>
        </div>

        <div>
            <h2 className='SubHeading'>Contract Terms</h2>
            <div>
                <S.Label>Part 1</S.Label>
                <li>
                    <ul>he selling price of the house will be within the range of A billion - B billion within X months.</ul>
                    <ul>Profit will be distributed as a percentage of the contribution ratio.</ul>
                    <ul>If the X-month period elapses and the house is still not sold, the system will automatically activate measures to consult investors, such as: extending the investment period; listing the house at a lower price to increase the likelihood of sale; or reinvesting in other projects to optimize profits.</ul>
                </li>
            </div>

            <div>
                <S.Label>Part 2</S.Label>
                <li>
                    <ul>Sign the contract with a digital signature, and transaction information, investment history will be stored and transparently recorded in the blockchain, ensuring trust for all parties involved.</ul>
                    <ul>By default, the system is linked to electronic wallets or banks, and when signing with a digital signature, the system will simultaneously deduct funds from the account and issue an online certificate acknowledging the investor's investment.</ul>       
                </li>
            </div>
        </div>

        <div>
            <div>
                <S.Label>Digital Signature</S.Label>
            </div>
            <Button 
                style={{backgroundColor:'#2986FE', width:380, height:60, borderRadius:20, }} 
                size="large" 
                type="primary"
                onClick={() => setOpen(true)}
            >
                CONFIRM
            </Button>

            <Modal
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={800}
                
            >
                <img src={SuccessInForm} alt="Success" style={{width: 50, height: 50}}/>
                <S.Label style={{color:'#0078D4'}}>You have invested successfully!</S.Label>
                
                <p>Thank you for your investment.</p>
                <p>Your investment contract has been confirmed!</p>
                
            </Modal>
        </div>

    </div>
  )
}
