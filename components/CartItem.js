import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CartItem = ({ item, onAdd, onRemove, isDarkMode }) => {
  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      {/* Product Name and Price */}
      <View style={styles.details}>
        <Text style={[styles.name, isDarkMode ? styles.darkText : styles.lightText]}>
          {item.name}
        </Text>
        <Text style={[styles.price, isDarkMode ? styles.darkText : styles.lightText]}>
          ${item.price.toFixed(2)} x {item.quantity}
        </Text>
      </View>

      {/* Quantity Buttons */}
      <View style={styles.quantityContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title="-"
            onPress={onRemove}
            color={isDarkMode ? "#FFA500" : "#FFA500"} // Orange color for the button
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="+"
            onPress={onAdd}
            color={isDarkMode ? "#FFA500" : "#FFA500"} // Orange color for the button
          />
        </View>
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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonWrapper: {
    width: 40, // Fixed width for buttons
    marginHorizontal: 5, // Space between buttons
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

export default CartItem;