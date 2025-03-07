import React, { useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";
import ProductItem from "../components/ProductItem";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const HomeScreen = ({ navigation }) => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to the Store</Text>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onAddToCart={() => addToCart(item)}
          />
        )}
        contentContainerStyle={styles.productList}
      />

      {/* Go to Cart Button */}
      <View style={styles.cartButtonContainer}>
        <Button
          title="Go to Cart"
          onPress={() => navigation.navigate("Cart")}
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
  productList: {
    padding: 20,
  },
  cartButtonContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF", // White background for the button container
  },
});

export default HomeScreen;