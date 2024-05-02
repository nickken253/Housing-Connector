import React from 'react'
import { useNavigate } from 'react-router-dom'

interface LayoutProps {
    title: string
    link: string
    children: React.ReactNode
}
export const Layout = (props: LayoutProps) => {
    const {  link, children } = props
    const navigate = useNavigate()
    return (
        <div className='px-32 mb-10'>
            <div className='text-left w-full text-[#4096ff] my-5'>
                <span className='mx-2'>{'<'}</span>
                <span className='cursor-pointer hover:underline' onClick={() => navigate('/account')}>Account Settings</span>
                <span className='mx-2'>{'<'}</span>
                <span className='cursor-pointer'>{link}</span>
            </div>
            <div>
                <div>{children}</div>
            </div>
        </div>
    )
}
