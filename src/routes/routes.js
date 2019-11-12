import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cadastro from '../pages/Cadastro';
import App from '../App';

export default function Routes(){
    return (
<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/Cadastro" component={Cadastro} />
    </Switch>
</BrowserRouter>

    );
};