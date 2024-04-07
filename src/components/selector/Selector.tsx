import { Select } from 'antd'

interface SelectionProps {
    options: object[];
    placeholder: string;
}

export const Selector = ({placeholder, options }: SelectionProps) => {
    return (
        <div style={{width:180, height:60, borderRadius:20}}>
            <Select
                virtual={false}
                mode='multiple'
                showSearch
                allowClear
                style={{ width: '100%', borderRadius: 20, height: 60}}
                placeholder= {placeholder}
                optionFilterProp="children"
                // filterOption={(input, option) => (option?.label ?? '').includes(input)}
                // filterSort={(optionA, optionB) =>
                //     (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                // }
                options={options}
            />
        </div>
        
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