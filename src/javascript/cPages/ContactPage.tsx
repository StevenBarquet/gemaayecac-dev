// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import Contacto from 'Cont/Contacto';

// ------------------------------------------ COMPONENT-----------------------------------------
function ContactPage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Contacto</title>
      </Helmet>
      <Contacto />
    </>
  );
}

export default ContactPage;
