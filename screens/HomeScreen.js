import React, { useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet, ImageBackground, Image, Platform } from "react-native";
import { CartContext } from "../context/CartContext";
import ProductItem from "../components/ProductItem";

// Updated products with images
const products = [
  {
    id: 1,
    name: "Eau de Parfum - Citrus Bliss",
    price: 50,
    image: require("../assets/parfum.jpg"), 
  },
  {
    id: 2,
    name: "Eau de Toilette - Midnight Oud",
    price: 75,
    image: require("../assets/Toilette.jpg"), 
  },
  {
    id: 3,
    name: "Eau de Cologne - Fresh Linen",
    price: 40,
    image: require("../assets/cologne.jpg"), 
  },
];

const HomeScreen = ({ navigation }) => {
  const { cart, addToCart, isDarkMode } = useContext(CartContext);

  return (
    <ImageBackground
      source={require("../assets/bg.jpg")} 
      style={styles.background}
    >
      <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerText, isDarkMode ? styles.darkText : styles.lightText]}>
            Welcome to the Perfume Shop
          </Text>
        </View>

        {/* Product List */}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              onAddToCart={() => addToCart(item)}
              isDarkMode={isDarkMode}
            />
          )}
          contentContainerStyle={styles.productList}
        />

        {/* Go to Cart Button */}
        <View style={styles.cartButtonContainer}>
          <Button
            title="Go to Cart"
            onPress={() => navigation.navigate("Cart")}
            color={isDarkMode ? "#FFA500" : "#FFA500"} // Orange color for the button
            disabled={cart.length === 0}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Ensure the background image covers the entire screen
  },
  container: {
    flex: 1,
    padding: Platform.OS === "web" ? 40 : 20, // More padding for web
    maxWidth: Platform.OS === "web" ? 800 : "100%", // Limit width for web
    alignSelf: Platform.OS === "web" ? "center" : "stretch", // Center on web
  },
  header: {
    backgroundColor: "rgba(255, 165, 0, 0.8)", // Semi-transparent orange
    padding: Platform.OS === "web" ? 30 : 20, // More padding for web
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20, 
  },
  headerText: {
    fontSize: Platform.OS === "web" ? 32 : 24, // Larger font for web
    fontWeight: "bold",
  },
  productList: {
    padding: Platform.OS === "web" ? 40 : 20, // More padding for web
  },
  cartButtonContainer: {
    padding: Platform.OS === "web" ? 40 : 20, // More padding for web
    alignItems: "center", // Center the button
  },
  light: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
  },
  dark: {
    backgroundColor: "rgba(18, 18, 18, 0.8)", // Semi-transparent dark
  },
  lightText: {
    color: "#000000",
  },
  darkText: {
    color: "#FFFFFF",
  },
});

export default HomeScreen;