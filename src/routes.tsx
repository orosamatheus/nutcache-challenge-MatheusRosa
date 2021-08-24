import { Switch, Route } from "react-router-dom";
import HomeView from "./views/Home.view";

export function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={HomeView} />  
        </Switch>
    )
}