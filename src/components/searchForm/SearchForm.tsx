import { Form } from 'antd'
import Search from 'antd/es/input/Search'

import { SearchProps } from 'antd/es/input/Search'
import { Selector } from '../selector/Selector'

import './SearchForm.css'

export const SearchForm = () => {

    const [form] = Form.useForm();

    const options = [
        {
            value: 1,
            label: 'Not Identified',
        },
        {
            value: 2,
            label: 'Closed',
        },
        {
            value: 3,
            label: 'Communicated',
        },
    ]

    const priceOptions = [
        { value: 1,  label: '< 2B', },
        { value: 2,  label: '2B - 4B', },
        { value: 3,  label: '4B - 6B', },
        { value: 4,  label: '6B - 8B', },
        { value: 5,  label: '8B - 10B', },
        { value: 6,  label: '> 10B', },
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

    return (
        <Form layout="inline" form={form} className="w-full flex justify-between mt-5 h-fit">
            <Form.Item className='w-[40%]'>
                <Search
                    className=".ant-row .ant-form-item-row .css-dev-only-do-not-override-1kuana8 h-[40px]"
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </Form.Item>
            <div className='flex'>

                <Form.Item name="city">
                    <Selector placeholder="Select city" options={options} />
                </Form.Item>
                <Form.Item name="district">
                    <Selector placeholder="Select district" options={options} />
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
            </div>

        </Form>
    )
}