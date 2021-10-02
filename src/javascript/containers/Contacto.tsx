// ---Dependencys
import React from 'react';
import { Row, Col } from 'antd';
// ---Components
import ContactInfo from 'Comp/Contacto/ContactInfo';

// ------------------------------------------ COMPONENT-----------------------------------------
function Contacto(): React.ReactElement {
  return (
    <Row>
      <Col span={24}>
        <ContactInfo />
      </Col>
    </Row>
  );
}

export default Contacto;
