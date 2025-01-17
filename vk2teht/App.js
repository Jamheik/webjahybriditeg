import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
const App = () => {
  const [modalVisiblity, setModalVisiblity] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisiblity}
          onRequestClose={() => {
            setModalVisiblity(!modalVisiblity);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>wow modal</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisiblity(!modalVisiblity)}
              >
                <Text style={styles.textStyle}>Hide modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisiblity(true)}
        >
          <Text style={styles.textStyle}>Show modal</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#444",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    marginVertical: 10,
  },
  buttonOpen: {
    backgroundColor: "#1E90FF",
  },
  buttonClose: {
    backgroundColor: "#FF4500",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "white",
  },
});

export default App;
