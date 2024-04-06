import React from 'react'
import { Select } from 'antd'

interface SelectionProps {
    options: object[];
    placeholder: string;
}

export const Selector = ({options, placeholder }: SelectionProps) => {
    return (
        <Select
            showSearch
            style={{ width: 180, height: 60, borderRadius: 20 }}
            placeholder= {placeholder}
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={options}
        />
    )
}


// options = [
//     {
//     value: '1',
//     label: 'Not Identified',
//     },
//     {
//     value: '2',
//     label: 'Closed',
//     },
//     {
//     value: '3',
//     label: 'Communicated',
//     },
//     {
//     value: '4',
//     label: 'Identified',
//     },
//     {
//     value: '5',
//     label: 'Resolved',
//     },
//     {
//     value: '6',
//     label: 'Cancelled',
//     },
// ]