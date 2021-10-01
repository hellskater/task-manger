import "./App.css";
import SearchBar from "./SearchBar";
import Tasks from "./Tasks";
import axios from "./axios";
import { useEffect, useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("/list").then((response) => {
      setTaskList(response.data.tasks);
    });
  }, [toggle]);

  const callbackParent = () => {
    setToggle(true);
    setToggle(false);
  };

  return (
    <div className="app">
      <SearchBar callbackParent={callbackParent} taskList={taskList} />
      <div className="app__body">
        <Tasks callbackParent={callbackParent} taskList={taskList} />
      </div>
    </div>
  );
}

export default App;
