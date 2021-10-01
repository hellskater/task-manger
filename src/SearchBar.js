import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "./Sidebar";
import Modal from "react-modal";
import SearchModal from "./SearchModal";

Modal.setAppElement("#root");

function SearchBar({ callbackParent, taskList }) {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="searchBar">
      <Sidebar callbackParent={callbackParent} />
      <form>
        <div className="searchBar__field">
          <SearchIcon />

          <input
            placeholder="Search task"
            type="text"
            onClick={() => setModalOpen(true)}
          />
        </div>
      </form>
      <Modal
        style={customStyles}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <SearchModal
          closeModal={closeModal}
          taskList={taskList}
          callbackParent={callbackParent}
        />
      </Modal>
    </div>
  );
}

export default SearchBar;
