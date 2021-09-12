// ---Dependencys
import React, {ReactElement} from 'react';
// ---Others
import logo from 'Images/logo-full.png';
import { ownerData } from 'Others/store-config';


// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  title: string;
  detail: string;
  image?: string;
  imgStyle?: string;
  imgWidth?: string;
  children?: ReactElement | ReactElement[];
}
// ------------------------------------------ COMPONENT-----------------------------------------
function TextBlogContent (props: Props): ReactElement {
  const { title, detail, image, imgStyle, children, imgWidth } = props
  return (
    <section>
      <h2><span>{title}</span></h2>
      <article>
        {detail}
      </article>
      {image? <img width={imgWidth || '200px'} src={image} className={imgStyle} alt={ownerData.domain} />: <img width="80px" src={logo} alt={ownerData.domain} />}
      {children}
    </section>
  );
}

export default TextBlogContent;
