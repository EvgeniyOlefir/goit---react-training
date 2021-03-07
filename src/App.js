import UserDetailsPage from "./components/UserDetailsPage";
import CountersPage from "./components/Counter/CountersPage";
import { Component } from "react";
import Modal from "./components/Modal";
import Tabs from "./components/Tabs";
import tabs from "./tabs.json";

// import Clock from "./components/Clock";

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        <Tabs items={tabs} />
        {/* <Clock /> */}
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Контент модалки</h1>
            <p>Это контент модалки</p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть модалку
            </button>
          </Modal>
        )}

        <UserDetailsPage />
        <CountersPage />
      </div>
    );
  }
}

export default App;
