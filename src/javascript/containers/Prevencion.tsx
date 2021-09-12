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
import { prevencionPageData } from 'Others/global-data'

// ------------------------------------------ COMPONENT-----------------------------------------
function Prevencion(): React.ReactElement {
  const { title, detail } = prevencionPageData.data
   // Redux States
   const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <>
      <TextBlogContainer isMovil={isMovil} title={prevencionPageData.title}>
        <TextBlogContent detail={detail} title={title} />
      </TextBlogContainer>
    </>
  );
}

export default Prevencion;
