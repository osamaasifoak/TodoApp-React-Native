import React from "react";
import { createStackNavigator, CardStyleInterpolators, } from "@react-navigation/stack";
import SigninScreen from "../screens/auth/SigninScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import { RoutesEnum } from "./RoutesEnum";
import { RootStackParamList } from "./Types";

const Stack = createStackNavigator<RootStackParamList>();

function RootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                name={RoutesEnum.AddTodos}
                component={SigninScreen}
                // name= "INTRO_LAST"
                // component={LastScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default RootStack;