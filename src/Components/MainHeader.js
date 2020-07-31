import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/mainHeader.css";

class MainHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <NavLink to="/">
            <img src="#" alt="LOGO" />
          </NavLink>
        </div>
        <div className="header__menus">
          <ul>
            <li>
              <NavLink to="/info">회사 소개</NavLink>
            </li>
            <li>
              <NavLink to="/price">가격 안내</NavLink>
            </li>
            <li>
              <NavLink to="/process">진행 과정</NavLink>
            </li>
            <li>
              <NavLink to="/ask">문의 하기</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainHeader;
