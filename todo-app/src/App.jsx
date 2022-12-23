import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const LocalStorageKey = "todo:savedTasks";
  const [tasks, setTasks] = useState([]);

  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function toggleCompletedTaskById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LocalStorageKey, JSON.stringify(newTasks));
  }

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LocalStorageKey);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }

  useState(() => {
    loadSavedTasks();
  }, []);

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onComplete={toggleCompletedTaskById}
        onDelete={deleteTaskById}
      />
    </>
  );
}

export default App;
