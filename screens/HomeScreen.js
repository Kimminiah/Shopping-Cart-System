import React, { useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet, ImageBackground } from "react-native";
import { CartContext } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import ProductItem from "../components/ProductItem";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const HomeScreen = ({ navigation }) => {
  const { cart, addToCart } = useContext(CartContext);
  const { theme, toggleTheme } = useTheme();
  const background = theme === "light" ? require("../assets/home-light.jpg") : require("../assets/home-dark.jpg");

  return (
    <ImageBackground source={background} style={styles.background}>
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

        {/* Buttons */}
        <View style={styles.cartButtonContainer}>
          <Button
            title="Go to Cart"
            onPress={() => navigation.navigate("Cart")}
            color="#FFA500"
            disabled={cart.length === 0}
          />
          <Button 
            title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`} 
            onPress={toggleTheme} 
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
    backgroundColor: "transparent", // Ensure transparency for the background image
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
  productList: {
    padding: 20,
  },
  cartButtonContainer: {
    padding: 20,
    backgroundColor: "transparent",
  },
});

export default HomeScreen;
