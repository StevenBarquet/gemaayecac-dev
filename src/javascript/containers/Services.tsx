// ---Dependencys
import React from 'react';
import { Row } from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
// ---Types
import { ReduxState } from 'Reducers';
// ---Components
import ServicesCard from 'Comp/Services/ServicesCard'
// ---Other
import { servicesPageData } from 'Others/global-data'

// ------------------------------------------ COMPONENT-----------------------------------------
function Services(): React.ReactElement {
  // Redux States
  const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <Row className={isMovil? 'sm-top-margin' : 'md-top-margin'}>
      {
        servicesPageData.services.map((element, index)=><ServicesCard path={element.path} title={element.title} data={element.data} key={index} index={index} isMovil={isMovil} />)
      }
    </Row>
  );
}

export default Services;
