import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AddNews from "./pages/AddNews";
import Home from "./pages/Home";
import PanelNews from "./pages/PanelNews";
import EditNews from "./pages/EditNews";
import News from "./pages/News";
import Category from "./pages/Category";

const Routes = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/painel-noticias/nova" component={AddNews}></Route>
                <Route path="/painel-noticias/editar/:id" component={EditNews}></Route>
                <Route path="/painel-noticias" component={PanelNews}></Route> 
                <Route path="/noticia/:id" component={News}></Route> 
                <Route path="/categoria/:categoria" component={Category}></Route> 
            </Switch>
        </BrowserRouter>
     );
}
 
export default Routes;