import { Select, SelectProps } from 'antd'

interface SelectionProps extends SelectProps{
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
                style={{ width: '100%', borderRadius: 20}}
                placeholder= {placeholder}
                optionFilterProp="children"
                options={options}
            />
        </div>
        
    )
}
