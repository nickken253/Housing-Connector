import { RealEstateListRoutes } from '../feature/page/routes'
import { RealEstateDetail } from '../feature/page/RealEstateDetail/RealEstateDetail'

export const publicRoute = [
    {
        path: '/real-estate/*',
        element: <RealEstateListRoutes />,
    },
    {
        path: '/real-estate/detail/:id',
        element: <RealEstateDetail />,
    }
]
