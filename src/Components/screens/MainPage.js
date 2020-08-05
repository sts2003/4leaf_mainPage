import React from "react";
import "../../styles/mainPage.css"

class MainPage extends React.Component {
  render() {
    return (
      <div className="mainPage">
        <div className="main__bg"></div>
        <div className="comInfo">
          <div className="comInfo__img"></div>
          <div className="comInfo__desc">
            <br />
            <br />
            <br />
            <strong className="comInfo__strong">4</strong>
            <strong className="comInfo__strong__desc">L</strong>
            EAF
            <strong className="comInfo__strong__desc">S</strong>
            OFTWARE 는 다양한 기술들과 다양한 디자인, 애니메이션 등을<br />
            통해 사용자가 원하는 모든 것을 개발합니다.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            화려한 디자인과 차별화된 기술들을 지금 바로 만나보세요 !
          </div>
        </div>
        <div className="priceInfo">
          <div className="priceInfo__desc">
            <div>가격 상세 페이지 확인하러 가기</div>
            <input type="button" className="priceInfo__desc__btn" value="이동하기"/>
          </div>
          <div className="priceInfo__img"></div>
        </div>
        <div className="process">
        <div className="process__img"></div>
          <div className="process__desc">
          <br />
            <br />
            <br />
            <strong className="process__strong">4</strong>
            <strong className="process__strong__desc">L</strong>
            EAF
            <strong className="process__strong__desc">S</strong>
            OFTWARE의 프로젝트 진행 과정은<br />
            의뢰접수 ➯ 시안작업  ➯ 프로젝트 시작 ➯ 완료 입니다.
            <br />
            <br />
            <br />
            
            보다 빠르고 정확한 과정을 통해 완벽한 결과물을 받으실 수 있습니다.
          </div>
        </div>
        <div className="asking">
          <div className="asking__desc">
            내가 제작하고 싶은 웹사이트의 견적이 얼마인지 궁금하다면 ?
          </div>
          <input type="button" className="asking__desc__btn" value="문의하기"/>
        </div>
      </div>
    );
  }
}

export default MainPage;
