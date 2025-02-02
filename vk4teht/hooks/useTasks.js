import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = useCallback(() => {
    if (newTask.trim()) {
      const updatedTasks = [...tasks, { text: newTask, done: false }];
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
      setNewTask("");
    }
  }, [newTask, tasks]);

  const toggleTask = useCallback(
    (index) => {
      const updatedTasks = tasks.map((task, i) => {
        if (i === index) {
          return { ...task, done: !task.done };
        }
        return task;
      });
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
    },
    [tasks]
  );

  return {
    tasks,
    newTask,
    setTasks,
    setNewTask,
    addTask,
    saveTasks,
    loadTasks,
    toggleTask,
  };
};

export default useTasks;
