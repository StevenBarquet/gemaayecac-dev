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
import { avisoPrivPageData } from 'Others/global-data'

// ------------------------------------------ COMPONENT-----------------------------------------
export default function AvisoPriv(): React.ReactElement {
  const { title, detail } = avisoPrivPageData.data
   // Redux States
   const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <>
      <TextBlogContainer isMovil={isMovil} title={avisoPrivPageData.title}>
        <TextBlogContent detail={detail} title={title} />
      </TextBlogContainer>
    </>
  );
}