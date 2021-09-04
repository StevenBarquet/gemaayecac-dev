// ---Dependencys
import React, {ReactElement} from 'react';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  title: string;
  children?: ReactElement | ReactElement[];
  isMovil: boolean;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function TextBlogContainer (props: Props): ReactElement {
  const { title, children, isMovil } = props
  return (
    <div className={isMovil?'text-blog-container-mobil':'text-blog-container'}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default TextBlogContainer;
