// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import Contactos from 'Cont/Contacto';

// ------------------------------------------ COMPONENT-----------------------------------------
function ContactoPage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Contactos</title>
      </Helmet>
      <Contactos />
    </>
  );
}

export default ContactoPage;