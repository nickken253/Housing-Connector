import React, { useState } from 'react';
import {DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Select, Input } from 'antd';


import { SearchProps } from 'antd/es/input/Search';

//Search
const { Search } = Input;
const { Option } = Select;

const selectBefore = (
    <Select defaultValue="Căn đang bán" style={{backgroundColor: '#f0f0f0'}}>
      <Option value="Căn đang bán">Căn đang bán</Option>
      <Option value="Dự án">Dự án</Option>
    </Select>
);

//menu
const items: MenuProps['items'] = [
    {
        label: 'Mua',
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
        label: 'Bán',
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
    {
        label: 'Phân tích & So sánh',
        key: 'SubMenu3',
        mode: 'horizontal',
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
        icon: <DownOutlined />,
    },
];

const Header = () => {

// Menu
const [current, setCurrent] = useState('mail');

const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
};

// Search

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />


            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                addonBefore={selectBefore}
            />
        </>
    );
};

export default Header;