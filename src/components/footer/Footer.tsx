import { Logo } from '../../assets'

export const Footer = () => {
    return (
        <div className='flex justify-between w-full py-24 bg-white'>
            <div className='ml-20 text-left'>
                <div className='flex items-center mb-5'>
                    <img src={Logo} alt="Logo" />
                    <div className='text-2xl font-bold ml-3'>Housing Connector</div>
                </div>
                <div className='text-[#1C1D1F] font-semibold text-lg'>Address: Km10, Nguyen Trai Street, Ha Dong District, Hanoi</div>
                <div className='text-[#1C1D1F] font-semibold text-lg'>Hotline: 0123456789</div>
            </div>
            <div className='mr-20 flex divide-x'>
                <div className='text-left px-5'>
                    <ul>
                        <li className='text-xl font-bold mb-5'>Buy</li>
                        <li className='text-lg'>Apartment</li>
                        <li className='text-lg'>Villa</li>
                        <li className='text-lg'>Real Estate</li>
                    </ul>
                </div>
                <div className='text-left px-5'>
                    <ul>
                        <li className='text-xl font-bold mb-5'>Sell</li>
                        <li className='text-lg'>Apartment</li>
                        <li className='text-lg'>Villa</li>
                        <li className='text-lg'>Real Estate</li>
                    </ul>
                </div>
                <div className='text-left px-5'>
                    <ul>
                        <li className='text-xl font-bold mb-5'>Invest</li>
                        <li className='text-lg'>Real Estate</li>
                        <li className='text-lg'>Real Estate</li>
                        <li className='text-lg'>Real Estate</li>
                    </ul>
                </div>
                <div className='text-left px-5'>
                    <ul>
                        <li className='text-xl font-bold mb-5'>Policies and Terms</li>
                    </ul>
                </div>
                <div className='text-left px-5'>
                    <ul>
                        <li className='text-xl font-bold mb-5'>About Us</li>
                    </ul>
                </div>
                
                
                
            </div>
        </div>
    )
}
