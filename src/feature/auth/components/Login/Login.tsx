import { HomeSec1Img } from '../../../../assets';
import { Form, Input, Button } from 'antd';
import type { FormProps } from 'antd';
// import { TextField, Button } from '@mui/material';
import storage from '../../../../utils/storage'
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
export const mockUserData = [
    {
        key: 1,
        name: "Nguyễn Quốc An",
        phone: "0976765654",
        email: "AnNQ@gmail.com",
        password: "123",
        citizenID: "123456789",
        investmentProfile: {
            investmentBudget: 5000000000,
            favoriteArea: 1, // 1: Hà Nội, 2: Hồ Chí Minh
            propertiesTypeInterested: 2, // 1: House, 2: Apartment, 3: Townhouse, 4: Villa, 5: Shophouse, 6: Penthouse
            acceptableLevelOfRisk: 2, // 1: High, 2: Medium, 3: Low
            estimatedResaleTime: 1, // 1: Short-term, 2: Medium-term, 3: Long-term
        },
    },
]

type FieldType = {
    email?: string;
    password?: string;
};

export const Login = () => {
    const navigate = useNavigate();
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        const user = mockUserData.find(user => user.email === values.email && user.password === values.password);
        if (user) {
            notification.success({
                placement: 'bottomRight',
                message: 'Login success',
                description: 'You have been login as ' + user.name + ' successfully!',
            });
            storage.set('isLogin', true)
            navigate('/');
        } else {
            console.log('Failed:', values);
        }
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='max-h-[calc(100vh-390px)] overflow-hidden flex justify-end'>
            <img className="min-h-[400px] h-full" src={HomeSec1Img} alt='Back' />
            <div className="absolute top-40 left-40 w-96">
                <div className='w-full'>
                    <div className='w-full text-left mb-5 text-6xl font-bold'>Login</div>
                    <Form
                        layout={'vertical'}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 30 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
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
