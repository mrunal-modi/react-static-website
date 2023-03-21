import React, { useMemo } from "react";
import "./title.scss";

const Title = ({
  title,  
  className="",
  isSubTitle=false,
  isSectionTitle=false
}) => {
  let t = useMemo(() => (isSectionTitle ? "h2" : isSubTitle ? "h3" :  "h1"), [isSectionTitle, isSubTitle])
  return React.createElement(t, {className: `title ${className}`}, title);
}

export default Title;
