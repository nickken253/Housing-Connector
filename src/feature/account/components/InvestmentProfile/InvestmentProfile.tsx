import * as S from '../Layout.styled'
import { Button, Form, Select } from 'antd'
import { mockUserData } from '../../../../assets/mockdata'
import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';

export const InvestmentProfile = () => {
    const investmentProfile = mockUserData[0].investmentProfile;
    const [isEditenable, setIsEditenable] = useState<boolean>(false);
    const handleClick = () => {
        setIsEditenable(!isEditenable);
    }
    return (
        <S.Wrapper>
            <S.Header>Investment profile</S.Header>
            <Form className='w-full'>
                <S.ContentWrapper className='divide-y'>
                    <S.Item>
                        <S.Title>Investment Budget
                            <Button onClick={() => {handleClick()}} title='Edit'><EditOutlined /></Button>
                        </S.Title>
                        <S.ItemContent>
                            <S.Des>A financial plan that allocates funds specifically for investments.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="budget" rules={[{ required: true, message: 'Please select your budget!' }]}>
                                    <Select defaultValue={investmentProfile.investmentBudget}
                                        disabled={!isEditenable}
                                        onChange={() => console.log("Option Changed")}
                                        options={[
                                            { value: 1, label: '100M - 200M' },
                                            { value: 2, label: '200M - 500M' },
                                            { value: 3, label: '500M - 1B' },
                                            { value: 4, label: '1B - 10B' },
                                        ]}
                                    />
                                </Form.Item>
                            </S.EditWrapper>
                        </S.ItemContent>
                    </S.Item>
                    <S.Item>
                        <S.Title>Favorite Area</S.Title>
                        <S.ItemContent>
                            <S.Des>The area you want to have.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="area" rules={[{ required: true, message: 'Please select the area!' }]}>
                                    <Select defaultValue={investmentProfile.favoriteArea}
                                        onChange={() => console.log("Option Changed")}
                                        disabled={!isEditenable}
                                        options={[
                                            { value: 1, label: 'Ha Dong District' },
                                            { value: 2, label: 'Hoan Kiem District' },
                                            { value: 3, label: 'Tay Ho District' },
                                            { value: 4, label: 'Dong Da District' },
                                        ]}
                                    />
                                </Form.Item>
                            </S.EditWrapper>
                        </S.ItemContent>
                    </S.Item>

                    <S.Item>
                        <S.Title>Properties Type Interested</S.Title>
                        <S.ItemContent>
                            <S.Des>The kind of real estate that you is interested in.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="type" rules={[{ required: true, message: 'Please select this field!' }]}>
                                    <Select defaultValue={investmentProfile.propertiesTypeInterested}
                                        // 1: House, 2: Apartment, 3: Townhouse, 4: Villa, 5: Shophouse, 6: Penthouse
                                        onChange={() => console.log("Option Changed")}
                                        disabled={!isEditenable}
                                        options={[
                                            { value: 1, label: 'House' },
                                            { value: 2, label: 'Apartment' },
                                            { value: 3, label: 'Townhouse' },
                                            { value: 4, label: 'Villa' },
                                            { value: 5, label: 'Shophouse' },
                                            { value: 6, label: 'Penthouse' },
                                        ]}
                                    />
                                </Form.Item>
                            </S.EditWrapper>
                        </S.ItemContent>
                    </S.Item>

                    <S.Item>
                        <S.Title>Acceptable Level of Risk</S.Title>
                        <S.ItemContent>
                            <S.Des>The amount of potential loss you're comfortable with.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="riskLevel" rules={[{ required: true, message: 'Please select the level of risk!' }]}>
                                    <Select defaultValue={investmentProfile.acceptableLevelOfRisk}
                                        // High, Medium, Low
                                        onChange={() => console.log("Option Changed")}
                                        disabled={!isEditenable}
                                        options={[
                                            { value: 1, label: 'High' },
                                            { value: 2, label: 'Medium' },
                                            { value: 3, label: 'Low' },
                                        ]}
                                    />
                                </Form.Item>
                            </S.EditWrapper>
                        </S.ItemContent>
                    </S.Item>


                    <S.Item>
                        <S.Title>Estimated Resale Time</S.Title>
                        <S.ItemContent>
                            <S.Des>The amount of time it likely takes to resell a property.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="resaleTime" rules={[{ required: true, message: 'Please select the resale time!' }]}>
                                    <Select defaultValue={investmentProfile.estimatedResaleTime}
                                        // Sort-Term, Medium-Term, Long-Term
                                        onChange={() => console.log("Option Changed")}
                                        disabled={!isEditenable}
                                        options={[
                                            { value: 1, label: 'Sort-Term' },
                                            { value: 2, label: 'Medium-Term' },
                                            { value: 3, label: 'Long-Term' },
                                        ]}
                                    />
                                </Form.Item>
                            </S.EditWrapper>
                        </S.ItemContent>
                    </S.Item>

                </S.ContentWrapper>

                <Form.Item className='text-center'>
                    <Button className='w-1/3' size='large' type="primary" htmlType="submit" disabled={!isEditenable} onClick={() => {handleClick()}}>Save</Button>
                </Form.Item>
            </Form>
        </S.Wrapper>
    )
}
