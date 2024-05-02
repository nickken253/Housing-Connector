import React from 'react'
import * as S from '../Layout.styled'
import { Input, Button, Form } from 'antd'

export const Profile = () => {
    return (
        <S.Wrapper>
            <S.Header>Personal Info</S.Header>
            <Form className='w-full'>
                <S.ContentWrapper className='divide-y'>
                    <S.Item>
                        <S.Title>Name</S.Title>
                        <S.ItemContent>
                            <S.Des>Personalize your account and update your sign in preferences.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                                    <Input placeholder="Name" />
                                </Form.Item>
                            </S.EditWrapper>
                        </S.ItemContent>
                    </S.Item>
                        <S.Item>
                        <S.Title>Phone Number</S.Title>
                        <S.ItemContent>
                            <S.Des>The phone number associated with your account.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                                    <Input placeholder="Name" />
                                </Form.Item>
                                <Button className='ml-5' type="primary" shape='round'>Verify</Button>
                            </S.EditWrapper>
                        </S.ItemContent>
                    </S.Item>

                    <S.Item>
                        <S.Title>Email</S.Title>
                        <S.ItemContent>
                            <S.Des>The email address associated with your account.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                    <Input placeholder="Email" />
                                </Form.Item>
                                <Button className='ml-5' type="primary" shape='round'>Verify</Button>
                            </S.EditWrapper>
                        </S.ItemContent>
                    </S.Item>

                    <S.Item>
                        <S.Title>Citizen Identity</S.Title>
                        <S.ItemContent>
                            <S.Des>Make your account extra secure.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="citizen" rules={[{ required: true, message: 'Please input your citizen identity!' }]}>
                                    <Input disabled placeholder="Citizen Identity" defaultValue={1234567890} />
                                </Form.Item>
                                <Button className='ml-5' type="primary" shape='round'>Verify</Button>
                            </S.EditWrapper>
                        </S.ItemContent>
                    </S.Item>

                </S.ContentWrapper>
                
                <Form.Item className='text-center'>
                    <Button className='w-1/3' size='large' type="primary" htmlType="submit">Save</Button>
                </Form.Item>
            </Form>
        </S.Wrapper>
    )
}
