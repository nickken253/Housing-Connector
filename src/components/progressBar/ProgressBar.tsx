import { formatter } from '../../utils/currency';

interface ProgressBarProps {
    amount: number;
    total: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
    const { amount, total } = props;
    // làm tròn số lên
    const percentage = Math.ceil((amount / total) * 100);
    // hàm format tiền mỗi 3 số thêm dấu chấm
    return (
        <div className="w-full flex justify-center my-3" title={`${formatter(amount)} VNĐ`}>
            <div className="bg-gray-500 w-[90%] rounded-xl overflow-hidden">
                <div className='bg-[#2986FE] text-white font-bold text-right' style={{ width: `${percentage}%` }}>{percentage}%</div>
            </div>
        </div>
    )
}
