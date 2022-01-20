import { useRoutes } from "react-router-dom";
import { routes } from "./routes";


const RouterConfig = () => {
    return useRoutes(routes);
};

export default RouterConfig;
