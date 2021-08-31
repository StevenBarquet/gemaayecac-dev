// ---Dependencys
import React from 'react';
// ---Others
import { homePageData } from 'Others/global-data';
// ------------------------------------------ COMPONENT-----------------------------------------
function HomeDetails (): React.ReactElement {
  return (
    <>
      <h2>{homePageData.title}</h2>
      <p>{homePageData.detail}</p>
    </>
  );
}

export default HomeDetails;
