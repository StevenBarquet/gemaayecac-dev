// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import AvisoPriv from 'Cont/AvisoPriv';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function AvisoPrivPage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Capacitación</title>
      </Helmet>
      <AvisoPriv />
    </>
  );
}
