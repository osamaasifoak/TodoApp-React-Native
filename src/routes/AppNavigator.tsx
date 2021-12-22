import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import { navigationRef } from "./RootNavigation";
import RootStack from "./RootStack";
import { RoutesEnum } from "./RoutesEnum";
import auth from '@react-native-firebase/auth';
import { StatusBar, Text, View } from "react-native";
const Stack = createStackNavigator();

export default function AppNavigator() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user: any) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerShown: false,
                }}
            >
                {user ? (
                    <Stack.Screen name={RoutesEnum.RootStack} component={RootStack} />
                ) : (
                    <Stack.Screen name={RoutesEnum.AuthStack} component={AuthStack} />
                )}

            </Stack.Navigator>
        </NavigationContainer>
    );
}