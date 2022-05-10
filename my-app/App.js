import { ContextProvider } from "./context/Context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Result from "./screen/Result/Result";
import Search from "./screen/Search/Search";
import WishList from "./screen/WishList/WishList";

const Stack = createStackNavigator();

export default () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Search"
          screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}
        >
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="WishList" component={WishList} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};
