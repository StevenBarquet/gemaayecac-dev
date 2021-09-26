// ---Dependencys
import React from 'react';
// ---Redux
import { useSelector } from 'react-redux';
// ---Types
import { ReduxState } from 'Reducers';
// ---CommonComps
import TextBlogContainer from 'CComps/TextBlogContainer';
import TextBlogContent from 'CComps/TextBlogContent'
// ---Other
import { capacitacionPageData } from 'Others/global-data'
import capacitacionImage from 'Images/gemaCapacitacion.webp'

// ------------------------------------------ COMPONENT-----------------------------------------
function Prevencion(): React.ReactElement {
  const { title, detail } = capacitacionPageData.data
   // Redux States
   const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <>
      <TextBlogContainer isMovil={isMovil} title={capacitacionPageData.title}>
        <TextBlogContent image={capacitacionImage} imgStyle="round-border-10" imgWidth="360px" detail={detail} title={title} />
      </TextBlogContainer>
    </>
  );
}

export default Prevencion;
