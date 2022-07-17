import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import banner from "../assets/pokemon-banner.png";
import useAxios from "axios-hooks";
import Card from "./Card";
import myApi from "../Api/api";
import { useState } from "react";
import StatsBox from "./StatsBox";

export default function Main() {
  const [imageUrl, setImageUrl] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [searchPokemon, setSearckPokemon] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState("");

  const fetchPokemon = async () => {
    setError(null);
    setLoading(true);
    try {
      const pokemon = await myApi.get(
        "/pokemon/" + searchPokemon.toLowerCase()
      );
      setImageUrl(pokemon.data.sprites.other.home.front_default);
      setStats(pokemon.data.stats);
      setShowImage(true);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.insideContainer}>
        <Text style={styles.mainText}>PokeApp por Dante</Text>

        <StatusBar style='auto' />
        <Card loading={loading} error={error}>
          {showImage ? (
            <>
              <Image
                style={{ height: 200, width: 200 }}
                source={{ uri: imageUrl }}
              />
              <StatsBox stats={stats} />
            </>
          ) : (
            <Image source={banner} style={styles.banner} />
          )}
        </Card>
        {/* <View style={{width:'auto'}}> */}
        <TextInput
          style={styles.input}
          returnKeyType='search'
          placeholder='Buscar Pokemon  🔍'
          onChangeText={setSearckPokemon}
          value={searchPokemon}
          onSubmitEditing={fetchPokemon}
        />
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  mainText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#679FB3",
    borderRadius: 10,
    padding: 10,
  },
  insideContainer: {
    backgroundColor: "pink",
    flex: 1,
    width: "100%",
    paddingTop: "5%",
    alignItems: "center",
    borderRadius: 10,
  },
  input: {
    width: "70%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  banner: {
    height: 160,
    width: 200,
  },
  button: {
    width: "auto",
  },
});
