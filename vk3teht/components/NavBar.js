import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function CustomNavigationBar({ navigation, route, back }) {
  return (
    <Appbar.Header style={styles.bar}>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} color="white" />
      ) : null}
      <Appbar.Content title="vk3" titleStyle={styles.title} />
      {!back && route.name === "Home" ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate("Second")}
          color="white"
        />
      ) : null}
    </Appbar.Header>
  );
}
const styles = StyleSheet.create({
  bar: {
    backgroundColor: "black",
  },
  title: {
    color: "white",
    textAlign: "center",
  },
});
