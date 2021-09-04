// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import HomeCont from 'Cont/Mediacion';

// ------------------------------------------ COMPONENT-----------------------------------------
function MediacionPage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Mediación</title>
      </Helmet>
      <HomeCont />
    </>
  );
}

export default MediacionPage;
