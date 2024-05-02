import React from 'react'
import { PickingCard } from '../../../../components/PickingCard/PickingCard'
import { UserOutlined, LockOutlined, ContainerOutlined, MessageOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
export const AccountSettings = () => {
  const navigate = useNavigate();
  return (
    <div className=' p-20'>
      <div className='text-left text-4xl font-bold mb-7'>Account settings</div>
      <div className='w-full'>
        <PickingCard onClick={() => navigate('/account/profile')} icon={<UserOutlined className='text-6xl'/>} title='Profile' des='Personalize your account and update your sign in preferences.'/>
        <PickingCard icon={<LockOutlined className='text-6xl'/>} title='Password' des='Modify current password for enhanced security and account management.'/>
        <PickingCard icon={<ContainerOutlined className='text-6xl'/>} title='Investment profile' des=' Manage your investment portfolios, track performance, and explore investment opportunities.'/>
        <PickingCard icon={<MessageOutlined className='text-6xl'/>} title='Inbox' des='Receive and send communications related to property inquiries, updates, and notifications.'/>
      </div>
    </div>
  )
}
