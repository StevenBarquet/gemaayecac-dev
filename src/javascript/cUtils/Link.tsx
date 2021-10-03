// ---Dependencys
import React, { ReactElement } from 'react';
import { Location } from 'history';
import { Link as LinkRouter } from 'react-router-dom';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  to: string;
  children?: ReactElement | ReactElement[] | string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function Link(props: Props) : ReactElement {
  const { children, to } = props;
  //  const history = useHistory();
  function onNavigate(location: Location<unknown>) {
    goTop();
    return { ...location, pathname: to };
  }
  function goTop() {
    let bodyScroll = document.body.scrollTop;
    // eslint-disable-next-line no-multi-assign
    bodyScroll = document.documentElement.scrollTop = 0;
    return bodyScroll;
  }
  return (
    <LinkRouter to={(location) => (onNavigate(location))}>
      {children}
    </LinkRouter>
  );
}

export default Link;
