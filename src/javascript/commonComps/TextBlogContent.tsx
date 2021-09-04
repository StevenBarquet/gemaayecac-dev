// ---Dependencys
import React, {ReactElement} from 'react';
// ---Others
import logo from 'Images/logo-full.png';
import { ownerData } from 'Others/store-config';


// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  title: string;
  detail: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function TextBlogContent (props: Props): ReactElement {
  const { title, detail } = props
  return (
    <section>
      <h2><span>{title}</span></h2>
      <article>
        {detail}
      </article>
      <img src={logo} alt={ownerData.domain} />
    </section>
  );
}

export default TextBlogContent;
