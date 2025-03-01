import React, { useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

const CartScreen = ({ navigation }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
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
      />
      <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
      <Button
        title="Checkout"
        onPress={() => navigation.navigate("Checkout")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
});

export default CartScreen;