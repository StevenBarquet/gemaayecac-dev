// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import Capacitacion from 'Cont/Capacitacion';

// ------------------------------------------ COMPONENT-----------------------------------------
function CapacitacionPage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Capacitación</title>
      </Helmet>
      <Capacitacion />
    </>
  );
}

export default CapacitacionPage;
