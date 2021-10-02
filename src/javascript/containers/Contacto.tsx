// ---Dependencys
import React from 'react';
import { Row, Col } from 'antd';
// ---Components
import ContactInfo from 'Comp/Contacto/ContactInfo';

// ------------------------------------------ COMPONENT-----------------------------------------
function Contacto(): React.ReactElement {
  return (
    <Row>
      <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
        <ContactInfo />
      </Col>
      <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd2fZkDm4-KREHwFh2bM-pLS2bpB8CZysVt73dVelfZdQArIg/viewform?embedded=true" width="640" height="677" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
      </Col>
    </Row>
  );
}

export default Contacto;
