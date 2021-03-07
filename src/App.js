import UserDetailsPage from "./components/UserDetailsPage";
import CountersPage from "./components/CountersPage";
import { Component } from "react";
import Modal from "./components/Modal";

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
