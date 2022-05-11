import { ContextProvider } from "./context/Context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Result from "./screen/Result/Result";
import Search from "./screen/Search/Search";
import WishList from "./screen/WishList/WishList";
import Like from "./screen/Like/Like";
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}
        >
          <Tab.Screen 
            name="Search" 
            component={Search} 
            options={{
              tabBarIcon: () => (
                <Icon name="search1" size={40} color="black"/>
              )
            }}
            />
          <Tab.Screen
            name="WishList" 
            component={WishList}
            options={{
              tabBarIcon: () => (
                <Icon name="staro" size={40} color="yellow"/>
              )
            }}
          />
          <Tab.Screen
            name="Like" 
            component={Like}
            options={{
              tabBarIcon: () => (
                <Icon name="heart" size={40} color="red"/>
              )
            }}
          />
          <Tab.Screen
            name="Result"
            component={Result}
            options={{
              tabBarIcon: () => (
                <Icon name="barschart" size={40} color="black"/>
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};
