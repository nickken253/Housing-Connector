import { Form, Input } from 'antd'
import Search from 'antd/es/input/Search'
import React, { Component } from 'react'

import { SearchProps } from 'antd/es/input/Search'
import { Selector } from '../selector/Selector'

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

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    return(
        <Form layout="inline">
            <Form.Item style={{width: 480, height: 60 }}>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                    style={{ width: 480, height: 60 }}
                />
            </Form.Item>
            <Form.Item>
                <Selector placeholder="Select city" options={options} />
            </Form.Item>

            <Form.Item>
                <Selector placeholder="Select prototype" options={options} />
            </Form.Item>

            <Form.Item>
                <Selector placeholder="Select price" options={options} />
            </Form.Item>

            <Form.Item>
                <Selector placeholder="Select land area" options={options} />
            </Form.Item>
            
        </Form>
    )
}