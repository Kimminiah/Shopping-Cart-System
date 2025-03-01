import React, { useContext } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";

const CheckoutScreen = ({ navigation }) => {
  const { cart, clearCart } = useContext(CartContext);

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
      <Text style={styles.title}>Checkout</Text>
      {cart.map((item) => (
        <Text key={item.id} style={styles.item}>
          {item.name} - ${item.price.toFixed(2)} x {item.quantity}
        </Text>
      ))}
      <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default CheckoutScreen;