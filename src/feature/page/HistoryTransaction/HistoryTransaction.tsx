import { Table } from "antd";
export const HistoryTransaction = () => {
    const dataSource = [
        // {
        //   key: '1',
        //   name: 'Mike',
        //   age: 32,
        //   address: '10 Downing Street',
        // },
        // {
        //   key: '2',
        //   name: 'John',
        //   age: 42,
        //   address: '10 Downing Street',
        // },
        {
            key: `1`,
            time: `12:00`,
            type: `Real Estate`,
            name: `Căn Studio toà I2 - Imperia Smart City`,
            total: `300 Milions VND`,
            target: `Short-term or long-term`,
            startDay: `07/04/2024`
        },
        {
            key: `2`,
            time: `12:00`,
            type: `Real Estate`,
            name: `Căn Studio toà I2 - Imperia Smart City`,
            total: `300 Milions VND`,
            target: `Short-term or long-term`,
            startDay: `07/04/2024`
        },
        {
            key: `3`,
            time: `12:00`,
            type: `Real Estate`,
            name: `Căn Studio toà I2 - Imperia Smart City`,
            total: `300 Milions VND`,
            target: `Short-term or long-term`,
            startDay: `07/04/2024`
        },
        {
            key: `4`,
            time: `12:00`,
            type: `Real Estate`,
            name: `Căn Studio toà I2 - Imperia Smart City`,
            total: `300 Milions VND`,
            target: `Short-term or long-term`,
            startDay: `07/04/2024`
        },
        {
            key: `5`,
            time: `12:00`,
            type: `Real Estate`,
            name: `Căn Studio toà I2 - Imperia Smart City`,
            total: `300 Milions VND`,
            target: `Short-term or long-term`,
            startDay: `07/04/2024`
        },
        {
            key: `6`,
            time: `12:00`,
            type: `Real Estate`,
            name: `Căn Studio toà I2 - Imperia Smart City`,
            total: `300 Milions VND`,
            target: `Short-term or long-term`,
            startDay: `07/04/2024`
        },
        {
            key: `7`,
            time: `12:00`,
            type: `Real Estate`,
            name: `Căn Studio toà I2 - Imperia Smart City`,
            total: `300 Milions VND`,
            target: `Short-term or long-term`,
            startDay: `07/04/2024`
        },
        {
            key: `8`,
            time: `12:00`,
            type: `Real Estate`,
            name: `Căn Studio toà I2 - Imperia Smart City`,
            total: `300 Milions VND`,
            target: `Short-term or long-term`,
            startDay: `07/04/2024`
        },
        {
            key: `9`,
            time: `12:00`,
            type: `Real Estate`,
            name: `Căn Studio toà I2 - Imperia Smart City`,
            total: `300 Milions VND`,
            target: `Short-term or long-term`,
            startDay: `07/04/2024`
        },
    ];

    const columns = [
        // time, type, name, total, target, start day
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Target',
            dataIndex: 'target',
            key: 'target',
        },
        {
            title: 'Start Day',
            dataIndex: 'startDay',
            key: 'startDay',
        },
    ];

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='text-left w-3/4 font-bold text-4xl'>Transaction History</div>
            <div className='w-3/4 my-10'>
                <Table className='' dataSource={dataSource} columns={columns} />;
            </div>

        </div>
    )
}
