import { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../hamburger/hamburger";
import Logo from "../logo/logo";
import NavItem from "../nav-item/nav-item";
import "./topbar.scss";

const Topbar = ({
  position="relative",
  customNav=false,
  isNavbarLeft=false,
  bgColor="#fff",
  textColor="#000",
  borderColor="#bdbdbd",
  height=80,
  toggleSidebar=()=>{}
}) => {
  const _header = useRef();
  const style = useMemo(() => {
    let s = {
      position: 'relative',
      backgroundColor: bgColor,
      color: textColor,
      height: height,
      display: "flex",
      flexFlow: "row",
      borderBottom: `solid 1px ${borderColor}`,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999
    };

    if(position === 'fixed'){
      s.position = position;
      s.top = 0;
      s.left = 0;
      s.right = 0;
    }

    return s;
  }, [position, bgColor, textColor, height]);

  useEffect(() => {
    var header = _header.current;
    var sticky = height * 2;

    const handleScroll = () => {
      if(position === 'sticky'){
        if (window.pageYOffset > sticky) {
          header.style.position = 'sticky';
          header.style.top = 0;
        } else {
          header.style.position = 'relative';
          header.style.top = 0;
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }


  }, [position, _header]);


  return (
    <header 
      className={`topbar`}
      style={style}
      ref={_header}
    >
      <Link 
        to="/" 
        className={`${isNavbarLeft ? "mr-20" :"mr-auto"}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          textTransform: "uppercase"
        }}
      >
        <Logo />
      </Link>

      <div className={`nav-bar-container ${isNavbarLeft ? "mr-auto" : ""}`}>
        <NavItem 
          nav={customNav}
        />
      </div>

      <Hamburger 
        setOpen={toggleSidebar} 
        color={textColor}
      />
    </header>
  );
};

export default Topbar;
