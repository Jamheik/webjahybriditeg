import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
import { API_KEY } from "@env";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherText, setWeatherText] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(null);

  const url = "http://api.weatherapi.com/v1/current.json?";

  const fetchWeather = () => {
    fetch(`${url}key=${API_KEY}&q=${city}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherText(
          `Weather in ${data.location.name}: Temperature = ${data.current.temp_c}°C`
        );
        setWeatherIcon(data.current.condition.icon);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="City"
        value={city}
        onChangeText={(value) => setCity(value)}
        style={styles.input}
      />
      <Button title="Get weather" onPress={fetchWeather} />
      <Text style={styles.weatherText}>{weatherText}</Text>
      {weatherIcon && (
        <Image
          source={{ uri: `http:${weatherIcon}` }}
          style={styles.weatherIcon}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: "80%",
  },
  weatherText: {
    fontSize: 18,
    marginVertical: 20,
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
});
