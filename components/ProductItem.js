import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

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
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FFA500", // Orange border
    marginBottom: 10,
  },
  image: {
    width: 60, // Adjust the size as needed
    height: 60, // Adjust the size as needed
    borderRadius: 10, // Rounded corners for the image
    marginRight: 10, // Space between image and text
  },
  details: {
    flex: 1, // Take up remaining space
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
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