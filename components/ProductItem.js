import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>₱{product.price.toFixed(2)}</Text>
      <Button
        title="Add to Cart"
        onPress={onAddToCart}
        color="#FFA500" 
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
    borderBottomColor: "#FFA500", 
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    color: "#000000", 
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFA500", 
  },
});

export default ProductItem;