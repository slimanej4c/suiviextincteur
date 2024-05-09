import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Home= () => {
  return (
    <View>
      <Text>Menu</Text>
      <Text>Menu</Text>
      <Text>Menu</Text>
      <Text>Menu</Text>
      <Link href="/Home/Pages/Page1">go page1</Link>
      <Link href="/Home/Pages/Page2">go page1</Link>
    </View>
  );
};

export default Home;