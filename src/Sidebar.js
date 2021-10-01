import React, { useState } from "react";
import "./Sidebar.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Modal from "react-modal";
import AddTask from "./AddTask";

Modal.setAppElement("#root");

function Sidebar({ callbackParent }) {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="sidebar">
      <IconButton>
        <div className="sidebar__addItem">
          <AddCircleIcon fontSize="large" />
          <h4 onClick={() => setModalOpen(true)}>Add Task</h4>
        </div>
        <Modal
          style={customStyles}
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
        >
          <AddTask closeModal={closeModal} callbackParent={callbackParent} />
        </Modal>
      </IconButton>
    </div>
  );
}

export default Sidebar;
