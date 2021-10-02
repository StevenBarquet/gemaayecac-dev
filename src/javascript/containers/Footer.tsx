// ---Dependencys
import React, { ReactElement } from 'react';
import { Row, Col } from 'antd';
import {
  MailOutlined,
  FacebookOutlined,
  WhatsAppOutlined
} from '@ant-design/icons';
// ---Other
import { ownerData } from 'Others/store-config';
// ----------------------------------------COMPONENT----------------------------------------
export default function Footer(): ReactElement {
  const grid = {
    xs: 12,
    sm: 12,
    md: 5,
    lg: 4,
    xl: 4,
    xxl: 3
  };
  return (
    <footer>
      <h1>Contáctanos</h1>
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
      <h2>
        {`© 2021 ${ownerData.title.shortStoreName}, Inc. Todos los derechos reservados. ¿Te gusta éste sitio? Revisa
         `}
        <a
          href="https://www.forgemytech.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          forgemytech.com
        </a>
      </h2>
    </footer>
  );
}
