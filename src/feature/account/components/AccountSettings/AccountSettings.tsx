import { PickingCard } from '../../../../components/PickingCard/PickingCard'
import { UserOutlined, LockOutlined, ContainerOutlined, MessageOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
export const AccountSettings = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div className=' p-20'>
      <div className='text-left text-4xl font-bold mb-7'>Account settings</div>
      <div className='w-full'>
        <PickingCard data-aos="fade-up" data-aos-delay="50" onClick={() => navigate('/account/profile')} icon={<UserOutlined className='text-6xl'/>} title='Profile' des='Personalize your account and update your sign in preferences.'/>
        <PickingCard data-aos="fade-up" data-aos-delay="150" icon={<LockOutlined className='text-6xl'/>} title='Password' des='Modify current password for enhanced security and account management.'/>
        <PickingCard data-aos="fade-up" data-aos-delay="250" onClick={() => navigate('/account/investment-profile')}  icon={<ContainerOutlined className='text-6xl'/>} title='Investment profile' des=' Manage your investment portfolios, track performance, and explore investment opportunities.'/>
        <PickingCard data-aos="fade-up" data-aos-delay="350" icon={<MessageOutlined className='text-6xl'/>} title='Inbox' des='Receive and send communications related to property inquiries, updates, and notifications.'/>
      </div>
    </div>
  )
}
