// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import HomeCont from 'Cont/Services';

// ------------------------------------------ COMPONENT-----------------------------------------
function ServicesPage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Servicios</title>
      </Helmet>
      <HomeCont />
    </>
  );
}

export default ServicesPage;
