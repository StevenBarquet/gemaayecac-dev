// ---Dependencys
import React from 'react';
// ---Others
import photo from 'Images/gemaPhoto.webp';
import { ownerData } from 'Others/store-config';
// ------------------------------------------ COMPONENT-----------------------------------------
function HomeTitle (): React.ReactElement {
  return (
    <>
      <h1 className="profile-name">Lic. Gema Ayecac</h1>
      <div className="profile-img-cont">
        <img src={photo} alt={ownerData.domain} />
      </div>
      
    </>
  );
}

export default HomeTitle;
