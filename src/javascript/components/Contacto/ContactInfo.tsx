// ---Dependencys
import React from 'react';
import { Row, Col } from 'antd';
import {
  MailOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  YoutubeOutlined
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
          <section>
            <MailOutlined />
          </section>
          <p>{ownerData.contactMail}</p>
        </Col>
        <Col className="contact-sticker" {...grid}>
          <a href={ownerData.youtubeUrl} target="_blank" rel="noopener noreferrer">
            <section>
              <YoutubeOutlined />
            </section>
            <p>Youtube</p>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default ContactInfo;
