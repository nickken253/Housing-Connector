import * as S from '../Layout.styled'
import { Input, Button, Form, Select } from 'antd'

export const InvestmentProfile = () => {
    return (
        <S.Wrapper>
            <S.Header>Investment profile</S.Header>
            <Form className='w-full'>
                <S.ContentWrapper className='divide-y'>
                    <S.Item>
                        <S.Title>Investment Budget</S.Title>
                        <S.ItemContent>
                            <S.Des>A financial plan that allocates funds specifically for investments.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="name" rules={[{ required: true, message: 'Please input your budget!' }]}>
                                    <Input placeholder="Name" />
                                </Form.Item>
                            </S.EditWrapper>
                        </S.ItemContent>
                    </S.Item>
                        <S.Item>
                        <S.Title>Favorite Area</S.Title>
                        <S.ItemContent>
                            <S.Des>The area you want to have.</S.Des>
                            <S.EditWrapper>
                                <Form.Item className='w-full' name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                                    
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
