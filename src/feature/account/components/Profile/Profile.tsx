import { EditOutlined } from '@ant-design/icons'
import * as S from '../Layout.styled'
import { Input, Button, Form } from 'antd'
import { useState } from 'react';
import { mockUserData } from '../../../../assets/mockdata'

export const Profile = () => {
    const profile = mockUserData[0];
    const [isEditenable, setIsEditenable] = useState<boolean>(false);
    const handleClick = () => {
        setIsEditenable(!isEditenable);
    }
    return (
        <S.Wrapper>
            <S.Header>Personal Info</S.Header>
            <Form className='w-full'>
                <S.ContentWrapper className='divide-y'>
                    <S.Item>
                        <S.Title>Name
                            <Button onClick={() => { handleClick() }} title='Edit'><EditOutlined /></Button>
                        </S.Title>
                        <S.ItemContent>
                            <S.Des>Personalize your account and update your sign in preferences.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="name" >
                                    <Input placeholder="Name" disabled={!isEditenable} defaultValue={profile.name}/>
                                </Form.Item>
                            </S.EditWrapper>
                        </S.ItemContent>
                    </S.Item>
                    <S.Item>
                        <S.Title>Phone Number</S.Title>
                        <S.ItemContent>
                            <S.Des>The phone number associated with your account.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="phone" >
                                    <Input placeholder="Name" disabled={!isEditenable} defaultValue={profile.phone}/>
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
                                <Form.Item className='w-full' name="email">
                                    <Input placeholder="Email" disabled={!isEditenable} defaultValue={profile.email} />
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
                                <Form.Item className='w-full' name="citizen">
                                    <Input disabled placeholder="Citizen Identity" defaultValue={1234567890} />
                                </Form.Item>
                                <Button className='ml-5' type="primary" shape='round'>Verify</Button>
                            </S.EditWrapper>
                        </S.ItemContent>
                    </S.Item>

                </S.ContentWrapper>

                <Form.Item className='text-center'>
                    <Button className='w-1/3' size='large' type="primary" htmlType="submit" disabled={!isEditenable} onClick={handleClick}>Save</Button>
                </Form.Item>
            </Form>
        </S.Wrapper>
    )
}
