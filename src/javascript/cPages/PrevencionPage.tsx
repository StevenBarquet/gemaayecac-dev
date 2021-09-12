// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import Prevencion from 'Cont/Prevencion';

// ------------------------------------------ COMPONENT-----------------------------------------
function PrevencionPage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Prevención</title>
      </Helmet>
      <Prevencion />
    </>
  );
}

export default PrevencionPage;
