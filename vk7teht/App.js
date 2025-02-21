import { useReducer, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import todoReducer from "./reducers/todoReducer.js";

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO", text: newTodo });
      console.log(newTodo);
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch({ type: "REMOVE_TODO", index });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter new task"
        value={newTodo}
        onChangeText={setNewTodo}
        style={styles.input}
      />
      <Button title="Save" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.todoItem}>
            <TouchableOpacity
              onPress={() => handleRemoveTodo(index)}
              style={styles.todoTextContainer}
            >
              <Text style={[styles.todoText]}>{item.text}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.todoList}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  todoList: {
    marginTop: 20,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  todoTextContainer: {
    flex: 1,
  },
  todoText: {
    fontSize: 16,
    color: "#333",
  },
});
