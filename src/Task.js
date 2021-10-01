import React, { useState } from "react";
import "./Task.css";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import { forwardRef } from "react";
import Modal from "react-modal";
import UpdateModal from "./UpdateModal";
import axios from "./axios";
import Draggable from "react-draggable";

Modal.setAppElement("#root");

const Task = forwardRef(
  ({ id, priority, user, message, date, callbackParent }, ref) => {
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

    let cardColor = "";

    cardColor = priority == 1 ? "#ad1a1a" : priority == 2 ? "orange" : "yellow";

    const deleteTask = async (id) => {
      const formData = new FormData();
      formData.set("taskid", id);
      await axios.post("/delete", formData);
      callbackParent();
    };

    return (
      <Draggable>
        <div ref={ref} className="task" style={{ backgroundColor: cardColor }}>
          <div className="task__header">
            <h4
              className={`task__headerUser ${
                priority == 3 && "task__headerUserYellow"
              }`}
            >
              User: {user}
            </h4>
            <span style={{ backgroundColor: "#0b6902" }}>{date}</span>
          </div>

          <h1
            className={`task__headerTask ${
              priority == 3 && "task__headerTaskYellow"
            }`}
          >
            {message}
          </h1>

          <div className="task__buttons">
            <Button
              className="task__buttonsDone"
              onClick={() => setModalOpen(true)}
            >
              <CheckIcon />
              Update
            </Button>
            <Modal
              style={customStyles}
              isOpen={modalOpen}
              onRequestClose={() => setModalOpen(false)}
            >
              <UpdateModal
                closeModal={closeModal}
                id={id}
                callbackParent={callbackParent}
              />
            </Modal>
            <Button
              onClick={() => deleteTask(id)}
              className="task__buttonsDelete"
            >
              <ClearIcon />
              Delete
            </Button>
          </div>
        </div>
      </Draggable>
    );
  }
);

export default Task;
