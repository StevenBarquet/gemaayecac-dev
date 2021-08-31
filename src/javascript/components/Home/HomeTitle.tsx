// ---Dependencys
import React from 'react';
// ---Others
import logo from 'Images/logo-full.png';
import { ownerData } from 'Others/store-config';
// ------------------------------------------ COMPONENT-----------------------------------------
function HomeTitle (): React.ReactElement {
  return (
    <>
      <h1>Acerca de nosotros</h1>
      <div className="center-block xs-top-margin">
        <img width="110px" src={logo} alt={ownerData.domain} />
      </div>
    </>
  );
}

export default HomeTitle;
