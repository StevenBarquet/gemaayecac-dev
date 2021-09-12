// ---Dependencys
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// ---Pages
import HomePage from 'Pages/HomePage';
import ServicesPage from 'Pages/ServicesPage';
import MediacionPage from 'Pages/MediacionPage';
import PrevencionPage from 'Pages/PrevencionPage';
import DefensaPage from 'Pages/DefensaPage';
import CapacitacionPage from 'Pages/CapacitacionPage';
import Error404Page from 'Pages/Error404Page';
// ---Components
import NavbarCont from 'Cont/NavbarCont';

function AppContainer() : React.ReactElement {
  return (
    <BrowserRouter>
      <NavbarCont />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/servicios" component={ServicesPage} />
        <Route exact path="/mediacion" component={MediacionPage} />
        <Route exact path="/prevencion" component={PrevencionPage} />
        <Route exact path="/defensa" component={DefensaPage} />
        <Route exact path="/capacitacion" component={CapacitacionPage} />
        <Route exact path="*" component={Error404Page} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppContainer;
