import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import { navigationRef } from "./RootNavigation";
import RootStack from "./RootStack";
import { RoutesEnum } from "./RoutesEnum";
const Stack = createStackNavigator();

export default function AppNavigator() {

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
                <Stack.Screen name={RoutesEnum.AuthStack} component={AuthStack} />
                {/* {startApp ? (
					<Stack.Screen name={RoutesEnum.RootStack} component={RootStack} />
				) : (
					<Stack.Screen name={RoutesEnum.AuthStack} component={AuthStack} />
				)} */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}