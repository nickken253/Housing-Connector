import { publicRoute } from "./public";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
    const commonRoutes = [{ path: "/", element: <div>Home</div>}];
    const routes = publicRoute;
    const element = useRoutes([...commonRoutes, ...routes]);
    
    return (
        <>{element}</>
    )
};