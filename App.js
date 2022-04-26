import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Products from './src/pages/Products'
import Detail from './src/pages/Detail'
{/*<StatusBar style="auto" />*/}
const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="ProductsPage" component={Products} />
          <Stack.Screen name="DetailPage" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

