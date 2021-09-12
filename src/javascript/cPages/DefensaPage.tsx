// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import Defensa from 'Cont/Defensa';

// ------------------------------------------ COMPONENT-----------------------------------------
function DefensaPage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Defensa</title>
      </Helmet>
      <Defensa />
    </>
  );
}

export default DefensaPage;
