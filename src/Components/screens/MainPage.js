import React from "react";
import "../../styles/mainPage.css"

class MainPage extends React.Component {
  render() {
    return (
      <div className="mainPage">
        <div className="main__bg"></div>
        <div className="comInfo">
          <div className="comInfo__img"></div>
          <div className="comInfo__desc"></div>
        </div>
        <div className="priceInfo">
        <div className="priceInfo__img"></div>
          <div className="priceInfo__desc"></div>
        </div>
        <div className="process">
        <div className="process__img"></div>
          <div className="process__desc"></div>
        </div>
        <div className="asking">
        <div className="asking__img"></div>
          <div className="asking__desc"></div>
        </div>
      </div>
    );
  }
}

export default MainPage;
