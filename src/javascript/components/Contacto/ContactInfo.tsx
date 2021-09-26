// ---Dependencys
import React from 'react';
import { Row, Col } from 'antd';
import {
  MailOutlined,
  FacebookOutlined,
  WhatsAppOutlined
} from '@ant-design/icons';
// ---Other
import { ownerData } from 'Others/store-config';
import logo from 'Images/logo-full.png';
// ------------------------------------------ COMPONENT-----------------------------------------
function ContactInfo () : React.ReactElement {
  const grid = {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    xxl: 12
  };
  return (
    <div>
      <div className="contact-info">
        <img src={logo} alt="Shelly" width="100%" />
        <section>
          {ownerData.title.main}
          <span>{ownerData.title.sub}</span>
        </section>
        <div>{ownerData.title.shortStoreName}</div>
      </div>
      <Row justify="center">
        <Col className="contact-sticker" {...grid}>
          <section>
            <FacebookOutlined />
          </section>
          <p>{ownerData.title.shortStoreName}</p>
        </Col>
        <Col className="contact-sticker" {...grid}>
          <section>
            <WhatsAppOutlined />
          </section>
          <p>{ownerData.phoneStr}</p>
        </Col>
        <Col className="contact-sticker" {...grid}>
          <section>
            <MailOutlined />
          </section>
          <p>{ownerData.contactMail}</p>
        </Col>
      </Row>
    </div>
  );
}

export default ContactInfo;
