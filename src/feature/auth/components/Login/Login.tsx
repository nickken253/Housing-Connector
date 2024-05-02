import React from 'react'
import { HomeSec1Img, HomeCard1Img, HomeCard2Img, CheckIcon, HomeIcon, CoinIcon } from '../../../../assets';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
// import { TextField, Button } from '@mui/material';
export const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='max-h-[calc(100vh-390px)] overflow-hidden flex justify-end'>
            <img className="min-h-[400px] h-full" src={HomeSec1Img} alt='Back' />
            <div className="absolute top-40 left-40 w-96">
                <div className='w-full'>
                    <div className='w-full text-left mb-5 text-6xl font-bold'>Login</div>
                    <Form
                        layout={'vertical'}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 30 }}>
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input placeholder="Email" size='large' />
                        </Form.Item>
                        <Form.Item className='my-0' label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input placeholder="Password" size='large' />
                        </Form.Item>
                        <Form.Item className='my-3'>
                            <div className='flex justify-end'>
                                <a href=''>Forgot password?</a>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size='large' shape='round' className='w-full'>Confirm</Button>
                        </Form.Item>
                        <Form.Item className='my-3'>
                            <div className='flex justify-center gap-1'>
                                <span>Don't have an account? </span>
                                <span>
                                    <a className='text-blue-500 font-bold' href='/auth/signup'> Become a new member</a>
                                </span>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div >
    )
}
