import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import ProductScreen from '../screens/products/ProductScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';


export type RootStackParams = {
  Home: undefined,
  Product: {id: number, name: string, price: number, category: string},
  Products : undefined,
  Setting : undefined,
}

const Stack = createStackNavigator<RootStackParams>();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown : true,
        headerStyle :{
          elevation: 0,
          shadowColor: 'tranparent',
        }
      }
    }>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Setting" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;