import { Table } from "antd";
export const HistoryTransaction = () => {
    const dataSource = [
        {
            key: `1`,
            time: `08:00`,
            type: `Real Estate`,
            name: `Căn hộ Vinhomes Central Park`,
            total: `450.000.000 VND`,
            target: `Long-term`,
            startDay: `01/01/2024`
        },
        {
            key: `2`,
            time: `09:30`,
            type: `Real Estate`,
            name: `Căn hộ Masteri Thảo Điền`,
            total: `600.000.000 VND`,
            target: `Short-term`,
            startDay: `15/02/2024`
        },
        {
            key: `3`,
            time: `14:00`,
            type: `Real Estate`,
            name: `Căn hộ The Sun Avenue`,
            total: `550.000.000 VND`,
            target: `Long-term`,
            startDay: `28/02/2024`
        },
        {
            key: `4`,
            time: `10:15`,
            type: `Real Estate`,
            name: `Căn hộ Sala Đại Quang Minh`,
            total: `800.000.000 VND`,
            target: `Short-term`,
            startDay: `05/03/2024`
        },
        {
            key: `5`,
            time: `11:45`,
            type: `Real Estate`,
            name: `Căn hộ Vincom Landmark 81`,
            total: `1.000.000.000 VND`,
            target: `Long-term`,
            startDay: `20/03/2024`
        },
        {
            key: `6`,
            time: `16:30`,
            type: `Real Estate`,
            name: `Căn hộ City Garden`,
            total: `700.000.000 VND`,
            target: `Short-term`,
            startDay: `12/04/2024`
        },
        {
            key: `7`,
            time: `13:00`,
            type: `Real Estate`,
            name: `Căn hộ The Tresor`,
            total: `500.000.000 VND`,
            target: `Long-term`,
            startDay: `18/04/2024`
        },
        {
            key: `8`,
            time: `15:30`,
            type: `Real Estate`,
            name: `Căn hộ Millennium Masteri`,
            total: `650.000.000 VND`,
            target: `Short-term`,
            startDay: `25/04/2024`
        },
        {
            key: `9`,
            time: `17:00`,
            type: `Real Estate`,
            name: `Căn hộ Vinhomes Golden River`,
            total: `850.000.000 VND`,
            target: `Long-term`,
            startDay: `30/04/2024`
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
