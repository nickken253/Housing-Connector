import { publicRoute } from "./public";
import { useRoutes } from "react-router-dom";
import HomePage from './../feature/page/HomePage/HomePage';

export const AppRoutes = () => {
    const commonRoutes = [{ path: "/", element: <HomePage />}];
    const routes = publicRoute;
    const element = useRoutes([...commonRoutes, ...routes]);
    
    return (
        <>{element}</>
    )
};