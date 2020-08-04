import React from "react";
import "../../styles/mainPage.css"

class MainPage extends React.Component {
  render() {
    return (
      <div className="mainPage">
        <div className="main__bg"></div>
        <div className="comInfo"></div>
        <div className="priceInfo"> </div>
        <div className="process"></div>
        <div className="asking"></div>
      </div>
    );
  }
}

export default MainPage;
