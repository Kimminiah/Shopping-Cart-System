import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, ImageBackground, Alert, Platform } from "react-native"; 
import { CartContext } from "../context/CartContext";

const CheckoutScreen = ({ navigation }) => {
  const { cart, clearCart, isDarkMode } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    Alert.alert("Checkout Successful", "Thank you for your purchase!", [
      {
        text: "OK",
        onPress: () => {
          clearCart();
          navigation.navigate("Home");
        },
      },
    ]);
  };

  return (
    <ImageBackground
      source={require("../assets/bg2.jpg")} 
      style={styles.background}
    >
      <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerText, isDarkMode ? styles.darkText : styles.lightText]}>
            Checkout
          </Text>
        </View>

        {/* Cart Items */}
        {cart.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={[styles.itemText, isDarkMode ? styles.darkText : styles.lightText]}>
              {item.name} - ₱{item.price.toFixed(2)} x {item.quantity}
            </Text>
          </View>
        ))}

        {/* Total Price */}
        <View style={styles.totalContainer}>
          <Text style={[styles.totalText, isDarkMode ? styles.darkText : styles.lightText]}>
            Total: ₱{totalPrice.toFixed(2)}
          </Text>
        </View>

        {/* Checkout Button */}
        <View style={styles.checkoutButtonContainer}>
          <Button
            title="Checkout"
            onPress={handleCheckout}
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
    padding: Platform.OS === "web" ? 40 : 20, // More padding for web
    maxWidth: Platform.OS === "web" ? 800 : "100%", // Limit width for web
    alignSelf: Platform.OS === "web" ? "center" : "stretch", // Center on web
  },
  header: {
    backgroundColor: "rgba(255, 165, 0, 0.8)", // Semi-transparent orange
    padding: Platform.OS === "web" ? 30 : 20, // More padding for web
    alignItems: "center",
    borderRadius: 10,
  },
  headerText: {
    fontSize: Platform.OS === "web" ? 32 : 24, // Larger font for web
    fontWeight: "bold",
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FFA500", // Orange border
  },
  itemText: {
    fontSize: Platform.OS === "web" ? 20 : 16, // Larger font for web
  },
  totalContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#FFA500", // Orange border
    alignItems: "center",
  },
  totalText: {
    fontSize: Platform.OS === "web" ? 24 : 18, // Larger font for web
    fontWeight: "bold",
  },
  checkoutButtonContainer: {
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

export default CheckoutScreen;