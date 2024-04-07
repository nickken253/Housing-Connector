import React, { useEffect } from 'react'

import * as S from './InvestmentContractPage.styled'
import { EditableInput } from '../../../components/editableInput/EditableInput';
import './InvestmentContract.css'
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { SuccessInForm } from '../../../assets';
import { useNavigate } from 'react-router-dom';

interface InvestmentContractPageProps extends React.HTMLAttributes<HTMLDivElement> {
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
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='w-3/4'>
                <h1 className='text-left w-full font-bold text-4xl'>Investment Contract</h1>
                <div className='bg-white p-10 rounded-3xl drop-shadow-lg my-10'>
                    <div className='font-bold text-2xl text-left'>Investment Contract Information</div>
                    <div className='h-px bg-gray-300 my-7'></div>
                    <div>
                        <div className='flex items-center justify-between my-3'>
                            <S.Label>Project name</S.Label>
                            <EditableInput initValue={projectName || ''} />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                            <S.Label>Project type</S.Label>
                            <EditableInput initValue={projectType  || ''} />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                            <S.Label>Investment term</S.Label>
                            <EditableInput initValue={investmentTerm  || ''} />
                        </div>

                        <div className='flex items-center justify-between my-3'>
                            <S.Label>Expected profit</S.Label>
                            <EditableInput initValue={expectedProfit  || ''} />
                        </div>
                    </div>
                </div>

                <div className='bg-white p-10 rounded-3xl drop-shadow-lg my-10'>
                    <div className='font-bold text-2xl text-left'>Investor Information</div>
                    <div className='h-px bg-gray-300 my-7'></div>
                    <div className='flex items-center justify-between my-3'>
                        <S.Label>Investor name</S.Label>
                        <EditableInput initValue={investorName  || ''} />
                    </div>

                    <div className='flex items-center justify-between my-3'>
                        <S.Label>Investor phone</S.Label>
                        <EditableInput initValue={investorPhone  || ''} />
                    </div>

                    <div className='flex items-center justify-between my-3'>
                        <S.Label>Investor email</S.Label>
                        <EditableInput initValue={investorEmail || ''} />
                    </div>
                    <div className='flex items-center justify-between my-3'>
                        <S.Label>Investor citezen identity</S.Label>
                        <EditableInput initValue={investorCitizenID || ''} />
                    </div>

                    <div className='flex items-center justify-between my-3'>
                        <S.Label>Investment amount</S.Label>
                        <EditableInput initValue={investmentAmount || ''} />
                    </div>
                </div>

                <div className='bg-white p-10 rounded-3xl drop-shadow-lg my-10'>
                    <div className='font-bold text-2xl text-left'>Contract Terms</div>
                    <div className='h-px bg-gray-300 my-7'></div>
                    <div>
                        <S.Label>Part 1</S.Label>
                        <ul className='text-left list-disc ml-5'>
                            <li>He selling price of the house will be within the range of A billion - B billion within X months.</li>
                            <li>Profit will be distributed as a percentage of the contribution ratio.</li>
                            <li>If the X-month period elapses and the house is still not sold, the system will automatically activate measures to consult investors, such as: extending the investment period; listing the house at a lower price to increase the likelihood of sale; or reinvesting in other projects to optimize profits.</li>
                        </ul>
                    </div>
                    <div className='h-px bg-gray-300 my-7'></div>
                    <div>
                        <S.Label>Part 2</S.Label>
                        <ul className='text-left list-disc ml-5'>
                            <li>Sign the contract with a digital signature, and transaction information, investment history will be stored and transparently recorded in the blockchain, ensuring trust for all parties involved.</li>
                            <li>By default, the system is linked to electronic wallets or banks, and when signing with a digital signature, the system will simultaneously deduct funds from the account and issue an online certificate acknowledging the investor's investment.</li>
                        </ul>
                    </div>
                </div>

                <div className='grid grid-cols-4 h-fit'>
                    <div className='col-start-4'>
                        <div className='bg-white h-[300px] p-10 rounded-3xl drop-shadow-lg'>
                            <S.Label>Digital Signature</S.Label>
                        </div>
                        <Button
                            className='my-5 w-full rounded-lg'
                            size="large"
                            type="primary"
                            onClick={() => setOpen(true)}
                        >
                            CONFIRM
                        </Button>

                    </div>
                </div>
                <Modal
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={800}
                    footer={[
                        <Button
                        type="primary"
                        onClick={() => navigate('/')}
                        >
                            Back to Home
                        </Button>,
                    ]}
                >
                    <div className='flex flex-col justify-center gap-4 text-center items-center py-10'>
                        <img src={SuccessInForm} alt="Success" style={{ width: 50, height: 50 }} />
                        <S.Label className=''>You have invested successfully!</S.Label>
                        <p className='w-full'>Thank you for your investment.</p>
                        <p className='w-full'>Your investment contract has been confirmed!</p>
                    </div>

                </Modal>

            </div>
        </div>
    )
}
