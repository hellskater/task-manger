import React, { useEffect, useState } from "react";
import Task from "./Task";
import "./Tasks.css";
import FlipMove from "react-flip-move";


function Tasks({ callbackParent, taskList }) {
  const updateList = () => {};

  return (
    <div className="tasks">
      <div className="tasks__high">
        <h5>High Priority</h5>

        <FlipMove>
          {taskList.map((task) => {
            if (task.priority === "1") {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  callbackParent={callbackParent}
                  user={task.assigned_name}
                  date={task.created_on}
                  message={task.message}
                  priority={1}
                />
              );
            }
          })}
        </FlipMove>
      </div>
      <div className="tasks__medium">
        <h5>Medium Priority</h5>
        <FlipMove>
          {taskList.map((task) => {
            if (task.priority === "2") {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  callbackParent={callbackParent}
                  user={task.assigned_name}
                  date={task.created_on}
                  message={task.message}
                  priority={2}
                />
              );
            }
          })}
        </FlipMove>
      </div>
      <div className="tasks__low">
        <h5>Low Priority</h5>
        <FlipMove>
          {taskList.map((task) => {
            if (task.priority === "3") {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  callbackParent={callbackParent}
                  user={task.assigned_name}
                  date={task.created_on}
                  message={task.message}
                  priority={3}
                />
              );
            }
          })}
        </FlipMove>
      </div>
    </div>
  );
}

export default Tasks;
