// ---Dependencys
import React, { useState, ReactElement } from 'react';
import { MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
// ---Components
import ClientLogo from 'Comp/NavBar/ClientLogo'

// ---AUX COMPONENTS
interface AuxProps1 {
  currentPath: string;
}
function JustButtons(props: AuxProps1) {
  const { currentPath } = props;
  return (
    <>
      <Col xs={24} sm={24} lg={8}>
        <Link to="/">
          <div
            className={currentPath === '/' ? 'nav-btn nav-border' : 'nav-btn'}
          >
            INICIO
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} lg={8}>
        <Link to="/servicios">
          <div
            className={
              currentPath === '/servicios' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            SERVICIOS
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} lg={8}>
        <Link to="/contacto">
          <div
            className={
              currentPath === '/contacto' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            CONTACTO
          </div>
        </Link>
      </Col>
    </>
  );
}
// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  isMovil: boolean;
  currentPath: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function ClientMenu(props: Props) : ReactElement {
  const { isMovil, currentPath } = props;
  const [menuVisible, setMenuVisible] = useState(false);

  function changeMenuVisibility() {
    setMenuVisible(!menuVisible);
  }
  if (isMovil)
    return (
      <Row className="nav-div">
        <Col xs={24} sm={24} md={10} lg={12} xl={16} xxl={18}>
          <Link to="/">
            <ClientLogo />
          </Link>
        </Col>
        <Col xs={24} sm={24} md={14} lg={12} xl={8} xxl={6}>
          <Row>
            <Col xs={24} sm={24} lg={5}>
              <div
                className="nav-btn"
                onClick={changeMenuVisibility}
                role="button"
                tabIndex={0}
              >
                {menuVisible ? <MenuFoldOutlined /> : <MenuOutlined />}
              </div>
            </Col>
            {menuVisible ? <JustButtons currentPath={currentPath} /> : null}
          </Row>
        </Col>
      </Row>
    );
  return (
    <Row className="nav-div">
      <Col xs={24} sm={24} md={10} lg={12} xl={12} xxl={16}>
        <Link to="/">
          <ClientLogo />
        </Link>
      </Col>
      <Col xs={24} sm={24} md={14} lg={12} xl={12} xxl={8}>
        <Row>
          <JustButtons currentPath={currentPath} />
        </Row>
      </Col>
    </Row>
  );
}

export default ClientMenu;

