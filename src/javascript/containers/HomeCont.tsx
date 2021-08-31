// ---Dependencys
import React from 'react';
import { Row, Col } from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
// ---Types
import { ReduxState } from 'Reducers';
// ---Components
import HomeTitle from 'Comp/Home/HomeTitle';
import HomeDetails from 'Comp/Home/HomeDetails';

// ------------------------------------------ COMPONENT-----------------------------------------
function HomeCont(): React.ReactElement {
  // Redux States
  const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <Row>
      <Col className={isMovil?'md-top-margin': 'lg-top-margin'} xs={24} sm={24} md={10} lg={12} xl={12} xxl={12}>
        <HomeTitle />
      </Col>
      <Col className={isMovil?'sm-top-margin': 'md-top-margin'} xs={24} sm={24} md={14} lg={12} xl={12} xxl={12}>
        <HomeDetails />
      </Col>
    </Row>
  );
}

export default HomeCont;
