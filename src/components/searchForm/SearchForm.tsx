import { Form, Select } from 'antd'
import Search from 'antd/es/input/Search'

import { SearchProps } from 'antd/es/input/Search'
import { Selector } from '../selector/Selector'
import { mockDistrictData, mockTypeData } from '../../assets/mockdata'
import './SearchForm.css'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

type QueryFilter = {
    province: number,
    district: number,
    prototype: number,
    price: number,
    area: number,
}
export const SearchForm = () => {

    const [form] = Form.useForm();

    const options = [
        {
            value: 1,
            label: 'Ha Noi',
        },

    ]

    const priceOptions = [
        { value: 1, label: '< 2B', },
        { value: 2, label: '2B - 4B', },
        { value: 3, label: '4B - 6B', },
        { value: 4, label: '6B - 8B', },
        { value: 5, label: '8B - 10B', },
        { value: 6, label: '> 10B', },
    ]

    const areaOptions = [
        { value: '1', label: '< 30m²' },
        { value: '2', label: '30 - 45m²' },
        { value: '3', label: '45 - 60m²' },
        { value: '4', label: '60 - 80m²' },
        { value: '5', label: '80 - 100m²' },
        { value: '6', label: '> 100m²' },
    ]
    const [queryfilter, setQueryFilter] = useState<QueryFilter>({
        province: 0,
        district: 0,
        prototype: 0,
        price: 0,
        area: 0,
    });
    const location = useLocation();
    const filterList = location.state as QueryFilter || queryfilter;
    const stateProvince = "Ha Noi" || "";
    const stateDistrict = mockDistrictData.find((item) => item.key == filterList.district)?.label || "";
    const handleSelectorChange = (name: keyof QueryFilter, value: string[]) => {
        console.log(value);

        setQueryFilter(prev => ({ ...prev, [name]: value }));
        console.log(queryfilter);

    };
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    useEffect(() => {
        console.log('queryfilter', queryfilter);
    }, [filterList]);
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
                <Form.Item name="city" className='w-fit'>
                    <Select
                        className=''
                        defaultValue={stateProvince}
                        placeholder="Select city"
                        options={options}
                        onChange={(value) => console.log('city', value)} />
                </Form.Item>
                <Form.Item name="district" className='w-[121px]'>
                    <Select
                        defaultValue={stateDistrict}
                        placeholder="Select district"
                        options={mockDistrictData}
                        onChange={(value) => console.log('city', value)}
                    />
                </Form.Item>
                <Form.Item name="prototype">
                    <Select
                        placeholder="Select prototype"
                        options={mockTypeData}
                        onChange={(value) => handleSelectorChange('prototype', value)} />
                </Form.Item>
                <Form.Item name="price">
                    <Selector placeholder="Select price" options={priceOptions} onChange={(value) => handleSelectorChange('price', value)} />
                </Form.Item>

                <Form.Item name="area">
                    <Selector placeholder="Select land area" options={areaOptions} onChange={(value) => handleSelectorChange('area', value)} />
                </Form.Item>
            </div>
        </Form>
    )
}