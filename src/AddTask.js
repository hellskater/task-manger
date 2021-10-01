import React, { useState } from "react";
import "./AddTask.css";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import axios from "./axios";

function AddTask({ closeModal, callbackParent }) {
  const [message, setMessage] = useState("");
  const [duedate, setDuedate] = useState("");
  const [user, setUser] = useState("");
  const [priority, setPriority] = useState("");

  const users = {
    Arpit: "1",
    Dushyant: "2",
    Prabhat: "3",
    Shobha: "4",
    Ahmed: "5",
    Vambani: "6",
  };

  const userToCode = (user) => {
    for (const i in users) {
      if (user == i) {
        return users[i];
      }
    }
  };

  const submitTask = async (e) => {
    e.preventDefault();
    closeModal();
    const formData = new FormData();
    formData.set("message", message);
    formData.set("due_date", duedate);
    formData.set("assigned_to", userToCode(user));
    formData.set("priority", priority);
    await axios.post("/create", formData);
    callbackParent();
  };

  return (
    <div className="addTask">
      <Button onClick={closeModal} className="addTask__close">
        <ClearIcon />
        Close
      </Button>

      <form>
        <div className="addTask__message">
          <label htmlFor="message">Task name </label>
          <input
            type="text"
            id="message"
            placeholder="Message"
            name="message"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="addTask__duedate">
          <label htmlFor="duedate">Due date </label>
          <input
            type="datetime-local"
            id="duedate"
            name="duedate"
            required
            onChange={(e) => setDuedate(e.target.value)}
          />
        </div>

        <div className="addTask__user">
          <label htmlFor="user">Assign to </label>
          <select
            name="user"
            id="user"
            required
            onChange={(e) => setUser(e.target.value)}
          >
            <option disabled selected value>
              {" "}
              -- select a user --{" "}
            </option>
            <option value="Arpit">Arpit</option>
            <option value="Dushyant">Dushyant</option>
            <option value="Prabhat">Prabhat</option>
            <option value="Shobha">Shobha</option>
            <option value="Ahmed">Ahmed</option>
            <option value="Vambani">Vambani</option>
          </select>
        </div>

        <div className="addTask__priority">
          <label htmlFor="priority">Task Priority </label>
          <select
            name="priority"
            id="priority"
            required
            onChange={(e) => setPriority(e.target.value)}
          >
            <option disabled selected value>
              {" "}
              -- select a priority --{" "}
            </option>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>
        </div>
        <div className="addTask__submit">
          <Button type="submit" onClick={submitTask}>
            <CheckIcon />
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
