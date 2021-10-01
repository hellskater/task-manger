import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FlipMove from "react-flip-move";
import Task from "./Task";
import "./SearchModal.css";

function SearchModal({ taskList, callbackParent }) {
  const [input, setInput] = useState("");

  return (
    <div className="searchModal">
      <div className="searchBar__field">
        <SearchIcon />

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search task"
          type="text"
        />
      </div>
      <FlipMove>
        {taskList
          .filter((task) => {
            if (input == "") {
              return null;
            } else if (
              task.message.toLowerCase().includes(input.toLowerCase()) ||
              task.assigned_name.toLowerCase().includes(input.toLowerCase())
            ) {
              return task;
            }
          })
          .map((task) => {
            return (
              <Task
                id={task.id}
                callbackParent={callbackParent}
                user={task.assigned_name}
                date={task.created_on}
                message={task.message}
                priority={task.priority}
              />
            );
          })}
      </FlipMove>
    </div>
  );
}

export default SearchModal;
