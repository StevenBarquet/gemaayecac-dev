// ---Dependencys
import React from 'react';
// ---Others
import { homePageData } from 'Others/global-data';
// ------------------------------------------ COMPONENT-----------------------------------------
function HomeDetails(): React.ReactElement {
  return (
    <>
      <h2>{homePageData.title}</h2>
      <p>{homePageData.detail}</p>
      <h3>CERTIFICACIONES</h3>
      <ul>
        <li>
          <a
            href="https://www.poderjudicialcdmx.gob.mx/cja/mediacion-privada-2/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tribunal Superior de Justicia
          </a>
        </li>
        <li>
          <a
            href="https://www.conamec.com/docs/MEDIADORES_COLEGIADOS_2021.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colegio Nacional de Mediadores Certificados (CONAMEC)
          </a>
        </li>
      </ul>
    </>
  );
}

export default HomeDetails;
