import React, { useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet, ImageBackground, Image } from "react-native";
import { CartContext } from "../context/CartContext";
import ProductItem from "../components/ProductItem";

// Updated products with images and new names
const products = [
  {
    id: 1,
    name: "Eau de Parfum - Citrus Bliss",
    price: 50,
    image: require("../assets/parfum.jpg"), // Add your image path here
  },
  {
    id: 2,
    name: "Eau de Toilette - Midnight Oud",
    price: 75,
    image: require("../assets/Toilette.jpg"), // Add your image path here
  },
  {
    id: 3,
    name: "Eau de Cologne - Fresh Linen",
    price: 40,
    image: require("../assets/cologne.jpg"), // Add your image path here
  },
];

const HomeScreen = ({ navigation }) => {
  const { cart, addToCart, isDarkMode } = useContext(CartContext);

  return (
    <ImageBackground
      source={require("../assets/shoppi.jpg")}
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
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: "rgba(255, 165, 0, 0.8)", // Semi-transparent orange
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productList: {
    padding: 20,
  },
  cartButtonContainer: {
    padding: 20,
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