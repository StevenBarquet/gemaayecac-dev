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
import { defensaPageData } from 'Others/global-data'

// ------------------------------------------ COMPONENT-----------------------------------------
function Prevencion(): React.ReactElement {
  const { title, detail } = defensaPageData.data
   // Redux States
   const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <>
      <TextBlogContainer isMovil={isMovil} title={defensaPageData.title}>
        <TextBlogContent detail={detail} title={title} />
      </TextBlogContainer>
    </>
  );
}

export default Prevencion;
