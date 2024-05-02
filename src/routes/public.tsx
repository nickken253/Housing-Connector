import { RealEstateListRoutes } from '../feature/page/routes'
import { RealEstateDetail } from '../feature/page/RealEstateDetail/RealEstateDetail'
import { AuthRoutes } from '../feature/auth/routes'
import { AccountRoutes } from '../feature/account/routes'

export const publicRoute = [
    {
        path: '/real-estate/*',
        element: <RealEstateListRoutes />,
    },
    {
        path: '/real-estate/detail/:id',
        element: <RealEstateDetail />,
    },
    {
        path: '/auth/*',
        element: <AuthRoutes />,
    },
    {
        path: '/account/*',
        element: <AccountRoutes />,
    },
]
