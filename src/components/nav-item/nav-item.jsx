import "./nav-item.scss";
import Dropdown from "../dropdown/dropdown";
import config from "../../config/topbar.config";
import { Fragment, useMemo } from "react";
import Link from "../link/link";
import * as pages from "../../pages";

const NavItem = ({
  nav
}) => {

  const _nav = useMemo(() => {
    if (nav)
      return nav;

    return Object.values(pages).map((el, i) => ({
      label: el.navbarLinkLabel,
      to: el.path,
      order: el.order || i
    })).sort((a, b) => a.order - b.order);

  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-nav ml-auto">
        {_nav.map((el, i) => (
          <Fragment key={i}>
            {el.dropdownItems ? (
              <Dropdown
                className="nav-item"
                label={el.label}
                dopdownItems={el.dropdownItems}
                labelClassName="nav-link"
              // eventType="click"
              />
            ) : (
              <li className="nav-item" key={i}>
                <Link className="nav-link" {...el}>
                  {el.label}
                </Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default NavItem;
