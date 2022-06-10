import { ContextProvider } from "./context/Context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/Home/Home";
import SearchResult from "./screen/SearchResult/SearchResult";
import Result from "./screen/Result/Result";
import Search from "./screen/Search/Search";
import WishList from "./screen/WishList/WishList";
import Like from "./screen/Like/Like";
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const SearchStack = createStackNavigator();
const ResultStack = createStackNavigator();
const WishListStack = createStackNavigator();
const SearchStackNavigator = () => (
  <SearchStack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
    }}
  >
    <SearchStack.Screen name="Search" component={Search} />
  </SearchStack.Navigator>
);
const WishListStackNavigator = () => (
  <WishListStack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
    }}
  >
    <WishListStack.Screen name="WishList" component={WishList} />
  </WishListStack.Navigator>
);
const ResultStackNavigator = () => (
  <ResultStack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
    }}
  >
    <ResultStack.Screen name="Result" component={Result} />
  </ResultStack.Navigator>
);
const TabNavigator = (props) => {
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
        component={SearchStackNavigator}
        options={{
          tabBarIcon: () => <Icon name="search1" size={40} color="black" />,
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishListStackNavigator}
        options={{
          tabBarIcon: () => <Icon name="star" size={40} color="yellow" />,
        }}
      />
      <Tab.Screen
        name="Result"
        component={ResultStackNavigator}
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
            backgroundColor: "#fff"
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Menu"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SearchResult" component={SearchResult} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};
