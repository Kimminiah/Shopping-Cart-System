import React, { useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet, Alert } from "react-native";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

const CartScreen = ({ navigation }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

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
          color="#FFA500" // Orange color for the button
          disabled={cart.length === 0} // Disable if cart is empty
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background
  },
  header: {
    backgroundColor: "#FFA500", // Orange background for the header
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // White text for the header
  },
  cartList: {
    padding: 20,
  },
  totalContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#FFA500", // Orange border
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFA500", // Orange text for total price
  },
  checkoutButtonContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF", // White background for the button container
  },
});

export default CartScreen;