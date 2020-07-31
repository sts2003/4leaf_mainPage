import React from "react";
import MainHeader from "../Components/MainHeader";
import { Route } from "react-router-dom";
import MainPage from "../screens/MainPage";
import MainFooter from "../screens/MainFooter";
import "../styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="main__header">
          <MainHeader />
        </header>
        <main>
          <Route exact path="/" component={MainPage} />
        </main>
        <footer className="main__footer">
          <MainFooter />
        </footer>
      </div>
    );
  }
}

export default App;
