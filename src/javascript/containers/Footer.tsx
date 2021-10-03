// ---Dependencys
import React, { ReactElement } from 'react';
import { Row, Col } from 'antd';
import {
  MailOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  YoutubeOutlined
} from '@ant-design/icons';
// ---Utils
import CustomLink from 'Utils/Link';
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
          <a href={ownerData.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <section>
              <LinkedinOutlined />
            </section>
            <p>Linkedin</p>
          </a>
        </Col>
        <Col className="contact-sticker" {...grid}>
          <a href={`https://api.whatsapp.com/send/?phone=52${ownerData.phoneMain}`} target="_blank" rel="noopener noreferrer">
            <section>
              <WhatsAppOutlined />
            </section>
            <p>{ownerData.phoneStr}</p>
          </a>
        </Col>
        <Col className="contact-sticker" {...grid}>
          <a href={ownerData.youtubeUrl} target="_blank" rel="noopener noreferrer">
            <section>
              <YoutubeOutlined />
            </section>
            <p>Youtube</p>
          </a>
        </Col>
        <Col className="contact-sticker" {...grid}>
          <a href="mailto:{ownerData.contactMail}" target="_blank" rel="noopener noreferrer">
            <section>
              <MailOutlined />
            </section>
            <p>{ownerData.contactMail}</p>
          </a>
        </Col>
      </Row>
      <h2>
        <CustomLink
          to="/avisoPriv"
        >
          Revisa nuestro Aviso de Privacidad
        </CustomLink>
      </h2>
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
