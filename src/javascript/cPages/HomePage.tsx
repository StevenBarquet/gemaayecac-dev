// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import HomeCont from 'Cont/Home';

// ------------------------------------------ COMPONENT-----------------------------------------
function HomePage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Inicio</title>
      </Helmet>
      <HomeCont />
    </>
  );
}

export default HomePage;
