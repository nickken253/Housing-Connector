import React, { useState } from 'react'
import { HomeSec1Img, HomeCard1Img, HomeCard2Img, CheckIcon, HomeIcon, CoinIcon } from '../../../../assets';
import { Form, Input, Button, Select, DatePicker, Space, Flex, message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
// import { TextField, Button } from '@mui/material';
import '../FormCss.css'
import { InfoCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
export const SignUp = () => {
    const navigate = useNavigate()
    const props: UploadProps = {
        name: 'file',
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <div className=' flex justify-end'>
            <img className="min-h-[400px] h-[calc(100vh+160px)]" src={HomeSec1Img} alt='Back' />
            <div className="absolute top-20 left-40 ">
                <div className='w-full'>
                    <div className='w-full text-left mb-2 text-6xl font-bold'>Sign Up</div>
                    <div className='w-full text-left mb-5 text-2xl font-bold'>Personal Infomation</div>
                    <Form
                        layout={'vertical'}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 30 }}
                        requiredMark='optional'
                    >
                        <Form.Item required label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input placeholder="Email" size='large' />
                        </Form.Item>
                        <Form.Item className='' label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input placeholder="Password" size='large' />
                        </Form.Item>
                        <div className='grid grid-cols-2 gap-x-7'>
                            <Form.Item label="First Name" name="firstname" className='w-full' rules={[{ required: true, message: 'Please input your first name!' }]}>
                                <Input placeholder="First Name" size='large' />
                            </Form.Item>
                            <Form.Item label="Last Name" name="lastname" rules={[{ required: true, message: 'Please input your last name!' }]}>
                                <Input placeholder="Last Name" size='large' />
                            </Form.Item>
                            <Form.Item label="Gender" name='gender' rules={[{ required: true, message: 'Please select your gender!' }]}>
                                <Select className='text-left' placeholder="Select your gender" size='large' onChange={() => console.log("")} options={[
                                    { value: 'male', label: 'Male' },
                                    { value: 'female', label: 'Female' },
                                    { value: 'other', label: 'Other' },
                                ]} />
                            </Form.Item>
                            <Form.Item label="Date of Birth" name='dob' rules={[{ required: true, message: 'Please select your date of birth!' }]}>
                                <DatePicker className='w-full' size='large' />
                            </Form.Item>
                            <Form.Item label='Phone Number' name='phonenumber' rules={[{ required: true, message: 'Please select your phone number!' }]}>
                                <Space.Compact>
                                    <Select className='max-w-[75px]' size='large' defaultValue="+84" options={PhoneNumberOptions} />
                                    <Input placeholder="Phone Number" size='large' />
                                </Space.Compact>
                            </Form.Item>
                            <Form.Item label='City' name='city' rules={[{ required: true, message: 'Please input your city!' }]}>
                                <Select className='text-left' options={CityOptions} size='large' placeholder='Choose City' />
                            </Form.Item>
                        </div>
                        <Form.Item label='Address' name='address' rules={[{ required: true, message: 'Please input your address!' }]}>
                            <Input placeholder="Address" size='large' />
                        </Form.Item>
                        <Form.Item label='Citizen ID Number' name='citizenid' rules={[{ required: true, message: 'Please input your citizen ID number!' }]}>
                            <Input placeholder="Citizen ID Number" size='large' />
                        </Form.Item>
                        <div className='grid grid-cols-2 border-2 border-dashed divide-dashed divide-x-2 p-5 mb-7'>
                            <Form.Item label='Front ID Card' name='frontidcard' rules={[{ required: true, message: 'Please upload ID Card!' }]}>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Upload</Button>
                                </Upload>
                            </Form.Item>
                            <Form.Item className='pl-7' label='Back ID Card' name='backidcard' rules={[{ required: true, message: 'Please upload ID Card!' }]}>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Upload</Button>
                                </Upload>
                            </Form.Item>
                        </div>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size='large' shape='round' className='w-full'>Sign Up</Button>
                        </Form.Item>
                        <Form.Item className='my-3'>
                            <div className='flex justify-center gap-1'>
                                <span>Have an account ? </span>
                                <span>
                                    <a className='text-blue-500 font-bold' href='/auth/login'> Back to Login</a>
                                </span>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
const PhoneNumberOptions = [
    { value: '+84', label: '+84' },
    { value: '+1', label: '+1' },
    { value: '+81', label: '+81' },
    { value: '+82', label: '+82' },
    { value: '+86', label: '+86' },
]

const CityOptions = [
    { value: 'Ha Noi', label: 'Ha Noi' },
    { value: 'Ho Chi Minh', label: 'Ho Chi Minh' },
    { value: 'Da Nang', label: 'Da Nang' },
    { value: 'Hue', label: 'Hue' },
    { value: 'Hai Phong', label: 'Hai Phong' },
]