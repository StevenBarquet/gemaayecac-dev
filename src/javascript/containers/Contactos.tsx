// ---Dependencys
import React from 'react';
import { Col, Row } from 'antd';
import {LinkedinOutlined,YoutubeOutlined,WhatsAppOutlined} from '@ant-design/icons';
// ---CommonComps

export default function Contactos(): React.ReactElement {
  return (
    <div className="Texto">
      <Row>
        <Col sm={24} lg={12} xl={24} xxl={24}>
          <h1> Contactos</h1>
        </Col>
        <Col sm={24} lg={12} xl={24} xxl={24}>
          <h2 className="Subtitulo">
            <span>Puedes contactarnos</span>
          </h2>
        </Col>
        <Col sm={24} lg={12} xl={24} xxl={24}>
          <p className="Cuerpodeltexto">
            Por
            <a href="https://www.linkedin.com/in/gema-ayecac-48498292/">
              <strong>
                Linkedin 
                <LinkedinOutlined style={{fontSize:'30px',color:'white'}} />
              </strong>
            </a>
            <br />
            <br />
            <a href="https://www.youtube.com/channel/UChieAIq5Yr_rdmN7vOHNYEg">
              <strong>
                Youtube 
                <YoutubeOutlined style={{fontSize:'30px',color:'white'}} />
              </strong>
            </a>
            <br />
            <br />
            <a href="https://www.youtube.com/channel/UChieAIq5Yr_rdmN7vOHNYEg">
              <strong>
                WhatsApp 
                <WhatsAppOutlined style={{fontSize:'30px',color:'white'}} />
              </strong>
            </a>
            <br />
            <br />
            <img
              src="https://gemaayecac.com/media/ff9c2219aca02b4fc6eb.png"
              alt="gemaayecac.com"
            />
          </p>
        </Col>
      </Row>
    </div>
  );
}