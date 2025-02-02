import React, { useCallback, useMemo, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import useTasks from "./hooks/useTasks.js";

export default function App() {
  const {
    tasks,
    newTask,
    setTasks,
    setNewTask,
    addTask,
    saveTasks,
    loadTasks,
    toggleTask,
  } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  const renderItem = useCallback(
    ({ item, index }) => (
      <TouchableOpacity onPress={() => toggleTask(index)}>
        <Text style={[styles.task, item.done && styles.done]}>{item.text}</Text>
      </TouchableOpacity>
    ),
    [toggleTask]
  );

  const memorizeTasks = useMemo(() => tasks, [tasks]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTask}
          onChangeText={setNewTask}
          placeholder="Add new task"
        />
        <Button title="Add" onPress={addTask} />
      </View>
      <FlatList
        data={memorizeTasks}
        renderItem={renderItem}
        keyExtractor={(index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#343a40",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  task: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
  },
  done: {
    textDecorationLine: "line-through",
    color: "#6c757d",
  },
});
