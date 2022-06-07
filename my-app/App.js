import { ContextProvider } from "./context/Context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Result from "./screen/Result/Result";
import Search from "./screen/Search/Search";
import WishList from "./screen/WishList/WishList";
import Like from "./screen/Like/Like";
import Icon from "react-native-vector-icons/AntDesign";
import Home from "./screen/Home/Home";
import SearchResult from "./screen/SearchResult/SearchResult";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabNavigator = (props) => {
  //console.log(props.route.params.id);
  return (
    <Tab.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "#fff" },
        headerShown: false,
      }}
      initialRouteName={props.route.params.id}
    >
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => <Icon name="search1" size={40} color="black" />,
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          tabBarIcon: () => <Icon name="star" size={40} color="yellow" />,
        }}
      />
      <Tab.Screen
        name="Result"
        component={Result}
        options={{
          tabBarIcon: () => <Icon name="barschart" size={40} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Menu" component={TabNavigator} />
          <Stack.Screen name="SearchResult" component={SearchResult} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};
