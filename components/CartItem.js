import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CartItem = ({ item, onAdd, onRemove }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={onRemove} color="#FFA500" /> {/* Orange button */}
        <Text style={styles.quantity}>{item.quantity}</Text>
        <Button title="+" onPress={onAdd} color="#FFA500" /> {/* Orange button */}
      </View>
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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#000000", // Black text for quantity
  },
});

export default CartItem;