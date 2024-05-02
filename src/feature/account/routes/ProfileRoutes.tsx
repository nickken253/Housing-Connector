import React from 'react'
import { Layout } from '../components/Layout'
import { Profile } from '../components/Profile/Profile'

export const ProfileRoutes = () => {
  return (
    <Layout title="Profile" link="Profile">
      <Profile />
    </Layout>
  )
}
