import React from "react";
import MainHeader from "../Components/screens/MainHeader";
import { Route } from "react-router-dom";
import MainPage from "../Components/screens/MainPage";
import MainFooter from "../Components/screens/MainFooter";
import "../styles/styles.css";

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
