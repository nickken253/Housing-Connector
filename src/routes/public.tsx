import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RealEstateListRoutes } from '../feature/page/routes'

export const publicRoute = [
    {
        path: '/real-estate/*',
        element: <RealEstateListRoutes />,
    },

]
