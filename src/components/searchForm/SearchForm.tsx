import { Form, Input } from 'antd'
import Search from 'antd/es/input/Search'
import React, { Component } from 'react'

import { SearchProps } from 'antd/es/input/Search'
import { Selector } from '../selector/Selector'

import './SearchForm.css'

export const SearchForm = () =>  {

    const [form] = Form.useForm();

    const options = [
        {
            value: '1',
            label: 'Not Identified',
        },
        {
            value: '2',
            label: 'Closed',
        },
        {
            value: '3',
            label: 'Communicated',
        },
    ]

    const priceOptions = [
        {
            value: '1',
            label: '< 2 tỷ',
        },
        {
            value: '2',
            label: '2 - 4 tỷ',
        },
        {
            value: '3',
            label: '4 - 6 tỷ',
        },
        {
            value: '4',
            label: '6 - 8 tỷ',
        },
        {
            value: '5',
            label: '8 - 10 tỷ',
        },
        {
            value: '6',
            label: '> 10 tỷ',
        },
    ]

    const areaOptions = [
        {
            value: '1',
            label: '< 30m²'
        },
        {
            value: '2',
            label: '30 - 45m²'
        },
        {
            value: '3',
            label: '45 - 60m²'
        },
        {
            value: '4',
            label: '60 - 80m²'
        },
        {
            value: '5',
            label: '80 - 100m²'
        },
        {
            value: '6',
            label: '> 100m²'
        },
    ]

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    return(
        <Form layout="inline" form={form}>
            <Form.Item style={{width: 480, height: 60 }}>
                <Search
                    className={".ant-row .ant-form-item-row .css-dev-only-do-not-override-1kuana8"}
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                    style={{ width: 480, height: 60 }}
                />
            </Form.Item>
            <Form.Item name="city">
                <Selector placeholder="Select city" options={options} />
            </Form.Item>

            <Form.Item name="prototype">
                <Selector placeholder="Select prototype" options={options} />
            </Form.Item>

            <Form.Item name="price">
                <Selector placeholder="Select price" options={priceOptions} />
            </Form.Item>

            <Form.Item name="area">
                <Selector placeholder="Select land area" options={areaOptions} />
            </Form.Item>
            
        </Form>
    )
}