import React from "react";
import "./logo.scss";
import { BRAND_NAME, LOGO_PATH as logo } from "../../config/config";

export default function Logo() {
  return (
    <div className="logo-container">
      {logo && <img src={logo} className="logo" alt="logo" />}
      {(!logo && BRAND_NAME) && <h4>{BRAND_NAME}</h4>}
    </div>
  );
}
