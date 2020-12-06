import React from 'react'
import { StatusBar } from "expo-status-bar";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CharactersScreen from "./src/screen/characters/characters.screen";
import CharacterDetailScreen from './src/screen/characterDetail/characterDetail.screen';
import ProviderCluster from "./src/provider";

const Stack = createStackNavigator<AppNavigationParamSpecs>();

export default function App() {
  return (
    <ProviderCluster>
      <NavigationContainer>
        
        <StatusBar style="dark" />

        <Stack.Navigator headerMode="none" initialRouteName="characters">
          <Stack.Screen name="characters" component={CharactersScreen} />
          <Stack.Screen name="characterDetail" component={CharacterDetailScreen} />
        </Stack.Navigator>

      </NavigationContainer>
    </ProviderCluster>
  );
}
