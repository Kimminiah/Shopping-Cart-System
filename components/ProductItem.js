import React from "react";
import { View, Text, Button, StyleSheet, Image, Platform } from "react-native";

const ProductItem = ({ product, onAddToCart, isDarkMode }) => {
  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      {/* Product Image */}
      <Image source={product.image} style={styles.image} />

      {/* Product Details */}
      <View style={styles.details}>
        <Text style={[styles.name, isDarkMode ? styles.darkText : styles.lightText]}>
          {product.name}
        </Text>
        <Text style={[styles.price, isDarkMode ? styles.darkText : styles.lightText]}>
          ${product.price.toFixed(2)}
        </Text>
      </View>

      {/* Add to Cart Button */}
      <Button
        title="Add to Cart"
        onPress={onAddToCart}
        color={isDarkMode ? "#FFA500" : "#FFA500"} // Orange color for the button
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: Platform.OS === "web" ? 20 : 10, // More padding for web
    borderBottomWidth: 1,
    borderBottomColor: "#FFA500", // Orange border
    marginBottom: Platform.OS === "web" ? 20 : 10, // More margin for web
  },
  image: {
    width: Platform.OS === "web" ? 100 : 60, // Larger image for web
    height: Platform.OS === "web" ? 100 : 60, // Larger image for web
    borderRadius: 10, // Rounded corners for the image
    marginRight: Platform.OS === "web" ? 20 : 10, // More space for web
  },
  details: {
    flex: 1, // Take up remaining space
  },
  name: {
    fontSize: Platform.OS === "web" ? 20 : 16, // Larger font for web
  },
  price: {
    fontSize: Platform.OS === "web" ? 20 : 16, // Larger font for web
    fontWeight: "bold",
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

export default ProductItem;