import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Button
        title="Add to Cart"
        onPress={onAddToCart}
        color="#FFA500" // Orange color for the button
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FFA500", // Orange border
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    color: "#000000", // Black text for product name
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFA500", // Orange text for price
  },
});

export default ProductItem;