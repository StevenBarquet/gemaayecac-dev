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
import { mediacionPageData } from 'Others/global-data'

// ------------------------------------------ COMPONENT-----------------------------------------
function Mediacion(): React.ReactElement {
  const { title, detail } = mediacionPageData.data
   // Redux States
   const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <>
      <TextBlogContainer isMovil={isMovil} title={mediacionPageData.title}>
        <TextBlogContent detail={detail} title={title} />
      </TextBlogContainer>
    </>
  );
}

export default Mediacion;
