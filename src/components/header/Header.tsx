import React, { useEffect, useState } from 'react';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Select, Input, Button } from 'antd';
import * as S from './Header.styled';

import { SearchProps } from 'antd/es/input/Search';
import { Logo } from '../../assets'
import { useNavigate } from 'react-router-dom';
import storage from '../../utils/storage'
import { notification } from 'antd';
//Search
const { Search } = Input;
const { Option } = Select;

const selectBefore = (
    <Select defaultValue="Căn đang bán" style={{ backgroundColor: '#f0f0f0' }}>
        <Option value="Căn đang bán">Căn đang bán</Option>
        <Option value="Dự án">Dự án</Option>
    </Select>
);

//menu
const items: MenuProps['items'] = [
    {
        label: 'Buy',
        key: 'SubMenu1',
        icon: <DownOutlined />,
        children: [
            {
                type: 'group',
                label: 'Mua chung cư',
                children: [
                    {
                        label: 'Vinhome Ocean Park',
                        key: 'setting:1',
                    },
                    {
                        label: 'Vinhome Smart City',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: 'Sell',
        key: 'SubMenu2',
        icon: <DownOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
];

export const Header = () => {
    const navigate = useNavigate();

    // Menu
    const [current, setCurrent] = useState('mail');
    const [isLogin, setIsLogin] = useState(false)

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    // Search

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    const handleLogin = () => {
        storage.set('isLogin', true)
        setIsLogin(true)
        navigate('/')
        notification.success({
            placement: 'bottomRight',
            message: 'Login success',
            description: 'You have been logged in',
        });
    }
    const handleLogout = () => {
        storage.remove('isLogin')
        setIsLogin(false)
        notification.success({
            placement: 'bottomRight',
            message: 'Logout success',
            description: 'You have been logged out',
        });
    }
    const handleRegis = () => {
        navigate('/')
        notification.success({
            placement: 'bottomRight',
            message: 'Register success',
            description: 'You have been registered',
        });
    }

    useEffect(() => {
        const isLoginn = storage.get('isLogin')
        if (isLoginn) {
            setIsLogin(true)
        }
    }, [isLogin])

    return (
        <S.HeaderContainer>
            <S.LogoNameContainer className='cursor-pointer' onClick={() => navigate("/")}>
                <S.Logo src={Logo} alt="logo" />
                <S.Name>Housing Connector</S.Name>
            </S.LogoNameContainer>
            <div className='flex justify-center items-center'>
                <S.MenuDropdownContainer className='bg-[#F4F6F7]' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                <div className='h-full cursor-pointer px-5 hover:bg-gray-200 flex items-center' onClick={() => navigate("/real-estate/invest")}>Invest</div>
                <div className='h-full cursor-pointer px-5 hover:bg-gray-200 flex items-center' onClick={() => navigate("/")}>Policies and terms</div>
            </div>
            <S.ButtonContainer>
                {!isLogin &&
                    <>
                        <S.CustomButton type="default" style={{ border: '2px solid #2986fe', color: "#2986fe" }} shape='round' onClick={handleLogin}>Login</S.CustomButton>
                        <S.CustomButton type="primary" shape='round' onClick={handleRegis}>Register</S.CustomButton>
                    </>
                }
                {isLogin &&
                    <>
                        <S.CustomButton type="primary" shape='round' onClick={() => navigate("/real-estate/history")}>History</S.CustomButton>
                        <S.CustomButton type="default" style={{ border: '2px solid red', color: "red" }} shape='round' onClick={handleLogout}><LogoutOutlined /></S.CustomButton>
                    </>
                }
            </S.ButtonContainer>
        </S.HeaderContainer>
    );
};
