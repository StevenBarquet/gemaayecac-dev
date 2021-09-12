// ---Dependencys
import React from 'react';
// ---Others
import photo from 'Images/gema.jpg';
import { ownerData } from 'Others/store-config';
// ------------------------------------------ COMPONENT-----------------------------------------
function HomeTitle (): React.ReactElement {
  return (
    <>
      <h1>Semblanza</h1>
      <div className="profile-img-cont">
        <img src={photo} alt={ownerData.domain} />
      </div>
    </>
  );
}

export default HomeTitle;
