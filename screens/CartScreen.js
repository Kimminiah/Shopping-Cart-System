import React, { useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet, Alert, ImageBackground } from "react-native";
import { CartContext } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import CartItem from "../components/CartItem";

const CartScreen = ({ navigation }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const { theme } = useTheme();
  const background = theme === "light" ? require("../assets/cart-light.jpg") : require("../assets/cart-dark.jpg");

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
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Cart</Text>
        </View>

        {/* Cart Items */}
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              onAdd={() => addToCart(item)}
              onRemove={() => removeFromCart(item)}
            />
          )}
          contentContainerStyle={styles.cartList}
        />

        {/* Total Price */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
        </View>

        {/* Checkout Button */}
        <View style={styles.checkoutButtonContainer}>
          <Button
            title="CHECKOUT"
            onPress={handleCheckout}
            color="#FFA500"
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
    backgroundColor: "transparent",
  },
  header: {
    backgroundColor: "#FFA500",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cartList: {
    padding: 20,
  },
  totalContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#FFA500",
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFA500",
  },
  checkoutButtonContainer: {
    padding: 20,
    backgroundColor: "transparent",
  },
});

export default CartScreen;
