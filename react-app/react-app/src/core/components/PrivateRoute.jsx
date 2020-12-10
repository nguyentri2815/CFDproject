import { Route } from "react-router-dom";
import LoginUser from "../../pages/loginuser";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoute(props){
    let {user} = useAuth();
    if (user.name) {
        return <Route {...props}/>
    }
    return <Route {...props} component={LoginUser}/>
}