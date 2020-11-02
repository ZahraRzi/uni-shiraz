import React, {CSSProperties} from 'react';
import '../../styles/variables/_index.module.scss';
import Style from "../title/Title.module.scss";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Title: React.FC<TitleProps> = (props): React.ReactElement => {
  const {children, className, style} = props;
    return (
      <div className={Style.titleParent}>
        <p className={className ? className : Style.title} style={style}>
          {children}
        </p>
      </div>
    );
};

export default Title;
