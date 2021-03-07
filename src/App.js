// import UserDetailsPage from "./components/UserDetailsPage";
// import CountersPage from "./components/Counter/CountersPage";
import { Component } from "react";
import Content from "./components/Content";
// import Modal from "./components/Modal";
// import Tabs from "./components/Tabs";
// import tabs from "./tabs.json";
// import Header from "./Header";
import Navigation from "./components/Navigation/Navigation";
// import BookList from "./components/Booklist/BookList";
// import books from "./books.json";
import "./App.scss";

// import Clock from "./components/Clock";

class App extends Component {
  // state = {
  //   showModal: false,
  // };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    // const { showModal } = this.state;
    return (
      <div className="app">
        <Navigation />
        <Content />

        {/* <Header /> */}
        {/* <BookList books={books} />
        <Tabs items={tabs} />
        {/* <Clock /> */}
        {/* <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button> */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Контент модалки</h1>
            <p>Это контент модалки</p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть модалку
            </button>
          </Modal>
        )} */}
        {/* <UserDetailsPage />
        <CountersPage /> */}
      </div>
    );
  }
}

export default App;
