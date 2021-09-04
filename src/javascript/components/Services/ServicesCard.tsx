// ---Dependencys
import React from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom'
// ---Others
import logo from 'Images/logo-full.png';
import { ownerData } from 'Others/store-config';

const grid = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 8
}
// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  isMovil: boolean;
  index: number;
  title: string;
  data: Array<string>;
  path?: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function ServicesCard (props: Props): React.ReactElement {
  // ---consts, hooks, states
  const { index, isMovil, title, data, path } = props
  const condition = index !== 1 && index !== 4 && index !== 7
  const notMobileStyle = condition? 'services-card': 'services-card-main'
  const mobileStyle = 'services-card-mobil'
  const style = isMovil ? mobileStyle : notMobileStyle
  // ---render
  return (
    <Col {...grid}>
      <div className={style}>
        <Link to={path || ''}>
          <h1>{title}</h1>
          <section>
            <img src={logo} alt={ownerData.domain} />
            <ul>
              {
            data.map( (element, i)=> <li key={`a${i}`}><span>{element}</span></li> )
            }
            </ul>
          </section>
        </Link>
      </div>
    </Col>
  );
}

export default ServicesCard;
